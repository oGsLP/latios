<template>
  <button class="l-button" :class="btnClass" :style="btnStyle">
    <l-icon v-if="icon" :icon="icon" class="icon"></l-icon>
    <span v-if="needGap" class="gap" :style="{ backgroundColor: theme }"></span>
    <span class="button-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import preset from "./../../assets/style/preset";

export default {
  name: "l-button",
  components: { LIcon: () => import("./../icon/icon.vue") },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: val => {
        return val === "left" || val === "right";
      }
    },
    gap: {
      type: Boolean,
      default: false
    },
    poke: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    }
  },
  computed: {
    needGap() {
      return !!(this.gap && this.icon);
    },
    btnClass() {
      let classList = [];
      if (this.iconPosition) classList.push(`icon-${this.iconPosition}`);
      if (this.disabled) classList.push(`button-disabled`);
      if (this.poke) classList.push(`button-${this.poke}`);
      return classList.join(" ");
    },
    btnStyle() {
      return {
        color: this.theme,
        borderColor: this.theme,
        fontSize: this.fontSize
      };
    },
    theme() {
      return preset.color[this.poke] || preset.color.default;
    },
    fontSize() {
      return preset.size[this.size] || preset.size.default;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "pokeStyle";

.l-button {
  padding: 0.15em 0.5em;
  border: 2px solid;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  background: $clr-bg;
  transition: border 1s, background 0.8s;

  &.button-disabled {
    cursor: not-allowed;
    opacity: 0.7;
    &:hover,
    &:active {
      opacity: 0.7;
    }
  }
  .icon {
    margin: 0 0.2em;
  }
  &.icon-left {
    > .icon {
      order: 1;
    }
    > .button-content {
      order: 3;
    }
  }
  &.icon-right {
    > .icon {
      order: 3;
    }
    > .button-content {
      order: 1;
    }
  }
  .button-content {
    margin: 0 0.2em;
  }
  .gap {
    width: 0.09em;
    height: 0.9em;
    margin: 0 0.3em;
    order: 2;
  }
}
</style>
