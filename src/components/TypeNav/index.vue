<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="enterSort" @mouseleave="leaveSort">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="sortShow">
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(item1, index) in cateList"
                :key="item1.categoryId"
                @mouseenter="getIndex(index)"
                :class="{ cur: currentIndex === index }"
              >
                <h3>
                  <a
                    :data-categoryname="item1.categoryName"
                    :data-category1id="item1.categoryId"
                    >{{ item1.categoryName }}</a
                  >
                </h3>
                <div class="item-list clearfix">
                  <div
                    class="subitem"
                    v-for="item2 in item1.categoryChild"
                    :key="item2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryname="item2.categoryName"
                          :data-category2id="item2.categoryId"
                          >{{ item2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="item3 in item2.categoryChild"
                          :key="item3.categoryId"
                        >
                          <a
                            :data-categoryname="item3.categoryName"
                            :data-category3id="item3.categoryId"
                            >{{ item3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle.js";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      sortShow: true,
    };
  },
  computed: {
    ...mapState("home", ["cateList"]),
  },
  methods: {
    getIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    goSearch(e) {
      const eDataset = e.target.dataset;
      const { categoryname, category1id, category2id, category3id } = eDataset;
      if (categoryname) {
        let cateId;
        if (category1id) {
          cateId = category1id;
        } else if (category2id) {
          cateId = category2id;
        } else if (category3id) {
          cateId = category3id;
        }
        this.$router.push({
          path: "/search",
          query: {
            categoryName: categoryname,
            category1Id: cateId,
          },
        });
      }
    },
    enterSort() {
      this.currentIndex = -1;
      if (this.$route.path !== "/home") {
        this.sortShow = true;
      }
    },
    leaveSort() {
      if (this.$route.path !== "/home") {
        this.sortShow = false;
      }
    },
  },
  mounted() {
    this.$store.dispatch("home/getCateList");
    console.log(this.$route);
    if (this.$route.path !== "/home") {
      this.sortShow = false;
    }
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        a:hover {
          cursor: pointer;
        }
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
        .cur {
          background-color: #ccc;
        }
      }
    }
    .sort-enter{
      height: 0;
    }
    .sort-enter-to{
      height: 46px;
    }
    .sort-enter-active{
      transition: all 0.2s linear;
    }
  }
}
</style>