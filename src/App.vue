<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const pageLayout = "page";

export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || pageLayout}-layout`;
    }
  },

  created() {
    // nothing defined here (when this.$route.path is other than "/")
    this.$console(this.$route.meta.layout, this.$route);
  },

  updated() {
    // something defined here whatever the this.$route.path
    this.$console(this.$route.meta.layout, this.$route);
  }
};
</script>

<style scoped></style>
