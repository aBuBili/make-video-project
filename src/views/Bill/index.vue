<template>
  <div>
    <div class="createbillStateill">
      <input type="date" v-model="createbillState.date" />
      <p>
        花费/收入 <input type="number" v-model="createbillState.money" /> 元，
      </p>
      <p>购买/获得 <input type="text" v-model="createbillState.remark" />。</p>

      <p>
        <span v-for="(e, index) of tagState.tags" :key="index">
          <input
            class="radio"
            type="radio"
            name="type"
            :value="e.id"
            :id="e.id"
            v-model="createbillState.tagId"
          />
          <label :for="e.id"
            ><span
              :class="createbillState.tagId == e.id ? 'checkTag' : 'tag'"
              >{{ e.name }}</span
            ></label
          >
        </span>

        <span class="tag">
          <span v-show="tagState.addTag">
            <input
              type="text"
              ref="addTagRef"
              v-model="tagState.addTagText"
              @blur="onSubmitNewTag()"
            />
          </span>
          <span v-show="!tagState.addTag" @click="addNewTag()">添加标签</span>
        </span>
      </p>

      <button @click="addBill()">添加</button>
    </div>

    <div class="content">
      <div class="records">
        <div v-for="(e, index) of filterList" :key="index" class="record">
          <p class="date">{{ e.date.slice(5, 10) }}</p>
          <p>-</p>
          <div>
            <p>
              {{ e.money }}
              <span>
                {{ e.tagName }}
              </span>
            </p>
            <p>{{ e.remark }}</p>
          </div>
          <span @click="delBill(e.id)" class="delBtn">删除</span>
        </div>
      </div>

      <div class="tags">
        <p
          :class="billState.filterTag == -1 ? 'filterTag' : 'checkTag'"
          @click="billState.filterTag = -1"
        >
          总支出: {{ totalExpenditure }}
        </p>
        <p v-for="(e, index) of everyTypeNumber" :key="index">
          <input
            type="radio"
            name="FilterTag"
            :value="e.id"
            :id="`F${e.id}`"
            v-model="billState.filterTag"
            class="radio"
          />
          <label :for="`F${e.id}`">
            <span
              :class="billState.filterTag == e.id ? 'filterTag' : 'checkTag'"
            >
              {{ e.name }} <span>{{ e.number }}</span>
            </span>
            <span @click="delTag(index)">X</span>
          </label>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, reactive, ref, watch } from "vue";

onMounted(() => {
  tagState.tags = getLocalTags();
  billState.bills = getLocalBillList();
});

// 标签 state
const tagState = reactive({
  tags: [],
  addTag: false,
  addTagText: "",
});

const addTagRef = ref("addTagRef");

// 添加新标签
function addNewTag() {
  tagState.addTag = true;
  nextTick(() => {
    addTagRef.value.focus();
  });
}

// 提交新标签
function onSubmitNewTag() {
  tagState.tags = [
    ...tagState.tags,
    { id: Date.now(), name: tagState.addTagText },
  ];
  tagState.addTag = false;
  tagState.addTagText = "";
}

// 删除标签
function delTag(index) {
  tagState.tags = tagState.tags.filter((e, i) => i !== index);
}

// 监听tags
watch(
  () => tagState.tags,
  (newVal) => localStorage.setItem("tags", JSON.stringify(newVal))
);

// 获取本地tags
function getLocalTags() {
  const localTags = localStorage.getItem("tags");

  return localTags
    ? JSON.parse(localTags)
    : [
        { id: 1, name: "餐饮" },
        { id: 2, name: "交通" },
        { id: 3, name: "娱乐" },
        { id: 4, name: "其他" },
      ];
}

// 账单 state
const billState = reactive({
  bills: [],
  filterType: -1,
});

// 新增 billState
const createbillState = reactive({
  date: new Date().toISOString().slice(0, 10),
  money: 0,
  remark: "",
  tagId: "",
  tagName: "",
});

// 标签id更改 更改标签名
watch(
  () => createbillState.tagId,
  (newVal) => {
    const tag = tagState.tags.find((e) => e.id === newVal);
    createbillState.tagName = tag.name;
  }
);

// bills 数组有更改 就更新本地的存储
watch(
  () => billState.bills,
  (newVal) => localStorage.setItem("bill", JSON.stringify(newVal))
);

// 过滤后的数组
const filterList = computed(() => {
  const list = billState.bills.filter((e) => {
    if (billState.filterTag == -1) return true;
    return e.tagId === billState.filterTag;
  });
  return list;
});

// 计算每种类型的数量
const everyTypeNumber = computed(() => {
  const list = tagState.tags.map((t) => ({
    id: t.id,
    name: t.name,
    number: billState.bills.reduce(
      (acc, e) => acc + (t.id == e.tagId ? e.money : 0),
      0
    ),
  }));
  return list;
});

// 总支出
const totalExpenditure = computed(() => {
  return billState.bills.reduce((acc, e) => acc + e.money, 0);
});

// 新增一项 bill
function addBill() {
  billState.bills = [
    ...billState.bills,
    { ...createbillState, id: Date.now() },
  ];
}

// 删 bill
function delBill(id) {
  billState.bills = billState.bills.filter((e, index) => e.id !== id);
}

// getLocalBillList
function getLocalBillList() {
  return JSON.parse(localStorage.getItem("bill") || "[]");
}
</script>

<style lang="scss" scoped>
.createbillStateill {
  text-align: start;

  .tag {
    font-size: 12px;
    border: 1px solid #ccc;
    padding: 2px 8px;
    border-radius: 12px;
    color: #ccc;
    cursor: pointer;
  }

  .checkTag {
    font-size: 12px;
    border: 1px solid #ccc;
    padding: 2px 8px;
    border-radius: 12px;
    color: #000;
    cursor: pointer;
    background-color: #ccc;
  }
}

.content {
  display: flex;
  justify-content: center;

  .records {
    width: 50%;
    overflow-y: auto;
    padding: 20px;

    .record {
      display: flex;
      margin-bottom: 12px;
      .date {
        width: 120px;
      }
    }

    .delBtn {
      cursor: pointer;
      color: #ccc;
      font-size: 12px;
      margin-left: auto;
    }
  }

  .tags {
    width: 50%;
    padding: 20px;
    text-align: start;

    .filterTag {
      width: 180px;
      line-height: 40px;
      margin-right: 20px;
      border: 1px solid #ccc;
      border-radius: 24px;
      padding: 2px 8px;
      margin-bottom: 12px;
      cursor: pointer;
    }

    .checkTag {
      width: 180px;
      margin-right: 20px;
      line-height: 40px;
      border: 1px solid rgb(118, 111, 111);
      border-radius: 24px;
      padding: 2px 8px;
      margin-bottom: 12px;
      cursor: pointer;
    }
  }
}

.radio {
  display: none;
}

@mixin item() {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pink {
  @include item();
  background-color: #db48651a;
}

.green {
  @include item();
  background-color: #39b54a1a;
}
</style>
