<template>
  <!-- <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev disabled">
          <a href="#">«上一页</a>
        </li>
        <li class="active">
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li class="dotted"><span>...</span></li>
        <li class="next">
          <a href="#">下一页»</a>
        </li>
      </ul>
      <div><span>共10页&nbsp;</span></div>
    </div>
  </div> -->
  <div class="pagination">
    <button>上一页</button> <button>1</button> <button>···</button>
    <button>3</button> <button>4</button> <button>5</button> <button>6</button>
    <button>7</button> <button>···</button> <button>9</button>
    <button>下一页</button> <button style="margin-left: 30px">共 60 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
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