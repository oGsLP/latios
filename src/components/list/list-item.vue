<template>
  <div
    :is="tagType"
    class="l-list-item"
    :class="listItemClass"
    :style="listItemStyle"
    @click="jump"
  >
    <slot></slot>
  </div>
</template>

<script>
import preset from "./../../assets/style/preset";
export default {
  name: "l-list-item",
  components: { LButton: () => import("../button/button") },
  props: {
    button: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      required: false
    },
    to: {
      type: String,
      required: false
    },
    poke: {
      type: String,
      default: "default"
    },
    badge: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    theme() {
      return preset.color[this.poke] || preset.color.default;
    },
    tagType() {
      // Todo: add l-link
      let type = "div";
      if (this.href || this.to) type = "a";
      if (this.button) type = "button";
      return type;
    },
    listItemClass() {
      let classList = [];
      classList.push(`list-item-${this.tagType}`);
      classList.push(`list-item-${this.poke}`);
      return classList;
    },
    listItemStyle() {
      let styleList = {};
      if (this.active)
        styleList = {
          backgroundColor: this.theme,
          color: "#fff"
        };
      return styleList;
    }
  },
  data() {
    return {};
  },
  methods: {
    jump() {
      if (this.tagType !== "div") {
        if (this.to) this.$router.push(this.to);
        else if (this.href) window.location.href = this.href;
        else this.$emit("click");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "listItemPokeStyle";
.l-list-item {
  font-size: $sz-medium + 1px;
  line-height: $sz-medium * 1.5;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px 20px;
  text-align: left;
  &.list-item-div {
    cursor: default;
  }
  &.list-item-a {
    cursor: pointer;
  }
  &.list-item-button {
    cursor: pointer;
    outline: none;
    font-family: inherit;
  }
}
</style>
