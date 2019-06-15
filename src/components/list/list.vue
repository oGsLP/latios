<template>
  <div class="l-list" :class="listDirectionClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "l-list",
  props: {
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    listDirectionClass() {
      return this.horizontal ? "list-dir-horizontal" : "list-dir-vertical";
    }
  }
};
</script>

<style lang="scss" scoped>
.l-list {
  display: flex;
  border: 0;
  box-sizing: border-box;
  font-size: $sz-medium;
  line-height: $sz-medium * 1.5;
  max-width: 300px;
  &.list-dir-vertical {
    flex-direction: column;
    > div:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    > div:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    > div:not(:first-child) {
      border-top: transparent;
    }
  }
  &.list-dir-horizontal {
    flex-direction: row;
    > div:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    > div:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    > div:not(:first-child) {
      border-left: transparent;
    }
  }
}
</style>
