<template>
  <div class="l-list-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "l-list-item",
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.l-list-item {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px 20px;
  text-align: left;
}
</style>
