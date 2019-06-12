<template>
  <li class="l-dropdown-item" @click="clickHandler">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "l-dropdown-item",
  props: {
    focusColor: {
      type: String,
      default: "default"
    },
    href: {
      type: String,
      required: false
    }
  },
  computed: {},
  methods: {
    clickHandler() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.l-dropdown-item {
  list-style: none;
  padding: 0.4em;
  font-size: $sz-medium;
  cursor: pointer;
  &:not(:first-child) {
    border-top: 1px solid rgb(197, 197, 197);
    border-bottom: 1px solid transparent;
  }
}
</style>
