<template>
  <div>
    <TypeNav></TypeNav>
    {{ keyword }}
    {{ categoryName }}
    {{ category1Id }}
    {{ category2Id }}
    {{ category3Id }}
  </div>
</template>

<script>
export default {
  name: "Search",
  computed: {
    keyword() {
      return this.$route.query.keyword;
    },
    categoryName() {
      return this.$route.query.categoryName;
    },
    category1Id() {
      return this.$route.query.category1Id;
    },
    category2Id() {
      return this.$route.query.category2Id;
    },
    category3Id() {
      return this.$route.query.category3Id;
    },
  },
};
</script>

<style>
</style>