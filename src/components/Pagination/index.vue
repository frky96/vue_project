<template>
  <div class="pagination" v-if="totalPage > 1">
    <button
      :disabled="myPageNo === 1"
      :class="{ disabled: myPageNo === 1 }"
      @click="lastPage"
    >
      上一页
    </button>

    <button v-if="startEnd.start > 1" @click="setpageNo(1)">1</button>
    <button class="disabled" v-if="startEnd.start > 2">···</button>

    <button
      v-for="item in startEnd.end"
      v-show="item >= startEnd.start"
      :key="item"
      :class="{ active: item === myPageNo }"
      @click="setpageNo(item)"
    >
      {{ item }}
    </button>

    <button class="disabled" v-if="startEnd.end < totalPage - 1">···</button>
    <button v-if="startEnd.end < totalPage" @click="setpageNo(totalPage)">
      {{ totalPage }}
    </button>

    <button
      :disabled="myPageNo === totalPage"
      :class="{ disabled: myPageNo === totalPage }"
      @click="nextPage"
    >
      下一页
    </button>
    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pageNo: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    showPageNo: {
      type: Number,
      default: 5,
      validator: (value) => value % 2 === 1,
    },
  },
  data() {
    return {
      myPageNo: this.pageNo,
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd() {
      const { myPageNo, showPageNo, totalPage } = this;
      let start, end;

      start = myPageNo - Math.floor(showPageNo / 2);
      if (start < 1) start = 1;

      end = start + showPageNo - 1;
      if (end > totalPage) {
        end = totalPage;
        start = end - showPageNo + 1;
        if (start < 1) start = 1;
      }

      return { start, end };
    },
  },
  methods: {
    lastPage() {
      if (this.pageNo > 1) {
        this.$emit("givePageNo", this.pageNo - 1);
      }
    },
    nextPage() {
      if (this.pageNo < this.totalPage) {
        this.$emit("givePageNo", this.pageNo + 1);
      }
    },
    setpageNo(page) {
      if (page === this.myPageNo) return;
      this.myPageNo = page;
      this.$emit("givePageNo", page);
    },
  },
};
</script>

<style scoped lang="less">
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;
    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>