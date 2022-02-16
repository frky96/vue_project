<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="item in cartInfoList" :key="item.id">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="item.isChecked"
              @click="clickCheckBox($event, item)"
            />
          </li>
          <li class="cart-list-con2" @click="clickItem(item)">
            <img :src="item.imgUrl" />
            <div class="item-msg">
              {{ item.skuName }}
            </div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ item.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a class="mins" @click="changeSkuNum('sub', -1, item)">-</a>
            <input
              autocomplete="off"
              type="tel"
              :value="item.skuNum"
              minnum="1"
              class="itxt"
              @change="changeSkuNum('change', $event.target.value, item)"
            />
            <a class="plus" @click="changeSkuNum('add', 1, item)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ item.skuPrice * item.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="clickDel(item)">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          class="chooseAll"
          type="checkbox"
          :checked="isAllChecked && cartInfoList.length > 0"
          @click="clickAllCheckBox"
        />
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="delCheckedItem">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ totalSkuNum }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <router-link class="sum-btn" to="/trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShopCart",
  computed: {
    ...mapState("cart", ["cartInfoList"]),
    checkedItem() {
      return this.cartInfoList.filter((e) => {
        return e.isChecked == 1;
      });
    },
    totalSkuNum() {
      return this.checkedItem.reduce((r, v) => {
        return (r += v.skuNum);
      }, 0);
    },
    totalPrice() {
      return this.checkedItem.reduce((r, v) => {
        return (r += v.skuPrice * v.skuNum);
      }, 0);
    },
    isAllChecked() {
      return this.cartInfoList.every((e) => {
        return e.isChecked == 1;
      });
    },
  },
  methods: {
    async getCartList() {
      try {
        await this.$store.dispatch("cart/getCartList");
      } catch (error) {
        console.log(error);
      }
    },
    clickItem(item) {
      this.$router.push(`/detail/${item.skuId}`);
    },
    async changeSkuNum(type, num, item) {
      switch (type) {
        case "add":
          num = 1;
          break;
        case "sub":
          if (item.skuNum > 1) {
            num = -1;
          } else {
            num = 0;
            this.clickDel(item);
          }
          break;
        case "change":
          if (isNaN(num) || num < 1) {
            num = 0;
          } else {
            num = Math.floor(num) - item.skuNum;
          }
          break;
      }
      try {
        await this.$store.dispatch("cart/addToCart", {
          data1: item.skuId,
          data2: num,
        });
        this.getCartList();
      } catch (error) {
        console.log(error);
      }
    },
    async clickCheckBox(e, item) {
      let checkStatus = e.target.checked ? "1" : "0";
      try {
        await this.$store.dispatch("cart/checkCart", {
          data1: item.skuId,
          data2: checkStatus,
        });
        this.getCartList();
      } catch (error) {
        console.log(error);
      }
    },
    async clickAllCheckBox(e) {
      let checkStatus = e.target.checked ? "1" : "0";
      const arrPromise = [];
      this.cartInfoList.forEach((e) => {
        if (e.isChecked != checkStatus) {
          arrPromise.push(
            this.$store.dispatch("cart/checkCart", {
              data1: e.skuId,
              data2: checkStatus,
            })
          );
        }
      });
      // console.log(arrPromise);
      try {
        await Promise.all(arrPromise);
        this.getCartList();
      } catch (error) {
        console.log(error);
      }
    },
    async clickDel(item) {
      if (confirm("sure del?")) {
        try {
          await this.$store.dispatch("cart/delCart", item.skuId);
          this.getCartList();
          location.reload();
        } catch (error) {
          console.log(error);
        }
      }
    },
    async delCheckedItem() {
      this.checkedItem.forEach(async (e) => {
        try {
          await this.$store.dispatch("cart/delCart", e.skuId);
          this.getCartList();
          location.reload();
        } catch (error) {
          console.log(error);
        }
      });
    },
  },
  mounted() {
    this.getCartList();
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con4 {
          width: 10%;
        }

        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>