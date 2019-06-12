<template>
  <svg
    class="l-icon"
    @click="clickHandler"
    aria-hidden="true"
    :style="{ color }"
  >
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
import("../../assets/icon");
export default {
  name: "l-icon",
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false
    },
    hoverColor: {
      type: String,
      required: false
    }
  },
  methods: {
    clickHandler() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.l-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  animation: spin 1s infinite linear;
}
</style>
