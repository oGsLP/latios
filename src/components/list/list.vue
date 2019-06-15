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
  max-width: 300px;
  &.list-dir-vertical {
    flex-direction: column;
    > .l-list-item:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    > .l-list-item:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    > .l-list-item:not(:first-child) {
      border-top: transparent;
    }
  }
  &.list-dir-horizontal {
    flex-direction: row;
    > .l-list-item:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    > .l-list-item:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    > .l-list-item:not(:first-child) {
      border-left: transparent;
    }
  }
}
</style>
