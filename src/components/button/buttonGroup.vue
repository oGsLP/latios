<template>
  <div class="l-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "l-button-group",
  props: {
    poke: {
      type: String,
      default: null
    }
  },
  data() {
    return {};
  },
  mounted() {
    for (let node of this.$el.children) {
      if (node.nodeName.toLowerCase() !== "button") {
        console.warn("Only button is valid");
      }
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
$br: 5px;
.l-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .l-button {
    border-radius: 0;
    border-width: 1px;
    &:not(:first-child) {
      margin-left: -2px;
    }
    &:first-child {
      border-top-left-radius: $br;
      border-bottom-left-radius: $br;
    }
    &:last-child {
      border-top-right-radius: $br;
      border-bottom-right-radius: $br;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
