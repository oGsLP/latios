<template>
  <button class="l-icon-button" :style="iconBtnStyle">
    <l-icon class="icon" :icon="icon"></l-icon>
  </button>
</template>

<script>
import LIcon from "./icon.vue";
import preset from "./../../assets/style/preset";
export default {
  name: "l-icon-button",
  components: {
    LIcon
  },
  props: {
    poke: {
      type: String,
      default: "default"
    },
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: null
    }
  },
  computed: {
    theme() {
      return preset.color[this.poke] || preset.color.default;
    },
    fontSize() {
      return preset.size[this.size] || preset.size.default;
    },
    iconBtnStyle() {
      return {
        background: this.theme,
        fontSize: this.fontSize
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.l-icon-button {
  border-radius: 50%;
  border: 0;
  outline: none;
  cursor: pointer;
  padding: 0.5em;
  .icon {
    color: white;
  }
}
</style>
