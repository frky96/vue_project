<template>
  <div>
    {{ keyword }}
  </div>
</template>

<script>
export default {
  name: "Search",
  computed: {
    keyword() {
      return this.$route.query.keyword;
    },
  },
};
</script>

<style>
</style>