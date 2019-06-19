<template>
  <span class="l-badge" :class="badgeClass" :style="badgeStyle">
    <slot></slot>
  </span>
</template>

<script>
import preset from "./../../assets/style/preset";
import { linkPropFactory } from "../../util/prop";
let linkProps = linkPropFactory();
delete linkProps.href.default;
delete linkProps.to.default;

export default {
  name: "l-badge",
  props: {
    ...linkProps,
    poke: {
      type: String,
      default: "default"
    },
    pill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    theme() {
      return preset.color[this.poke] || preset.color.default;
    },
    badgeClass() {
      let classList = [];
      if (this.pill) classList.push("badge-pill");
      return classList;
    },
    badgeStyle() {
      return {
        backgroundColor: this.theme
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.l-badge {
  line-height: 1;
  padding: 0.2em 0.4em;
  display: inline-block;
  vertical-align: baseline;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 700;
  &.badge-pill {
    padding: 0.2em 0.6em;
    border-radius: 10rem;
  }
}
</style>
