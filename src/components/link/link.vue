<template>
  <a
    class="l-link"
    :href="active || disabled ? null : href"
    :to="active || disabled ? null : to"
    :style="linkStyle"
  >
    <slot></slot>
  </a>
</template>

<script>
import preset from "./../../assets/style/preset";
export default {
  name: "l-link",
  props: {
    to: {
      type: String,
      required: false
    },
    href: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    poke: {
      type: String,
      default: "default"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    linkStyle() {
      let styleObject = {};
      if (this.active) {
        styleObject.color = "#636c74";
        styleObject.textDecoration = "none";
        styleObject.cursor = "default";
      } else {
        let theme = preset.color[this.poke] || preset.color.default;
        styleObject.color = theme;
        styleObject.textUnderline = theme;
      }
      return styleObject;
    }
  },
  methods: {
    clickHandler() {
      if (this.to) {
        this.$router.push(this.to);
      } else this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.l-link {
  margin: 0 5px;
  &:hover {
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-shadow: $box-shadow-shallow;
  }
}
</style>
