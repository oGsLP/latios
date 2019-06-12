<template>
  <div class="l-dropdown">
    <l-button-group class="l-dropdown-button">
      <template>
        <l-button
          v-if="!split"
          class="lb-left"
          :poke="poke"
          :size="size"
          icon="menu"
          icon-position="right"
          @click="toggleMenu"
        >
          {{ text }}
        </l-button>
        <l-button
          v-else
          class="lb-left"
          :poke="poke"
          :size="size"
          icon-position="right"
        >
          {{ text }}
        </l-button>
      </template>
      <l-button
        v-if="split"
        class="lb-right"
        :size="size"
        :poke="poke"
        @click="toggleMenu"
      >
        <l-icon icon="menu"></l-icon>
      </l-button>
    </l-button-group>
    <ul
      ref="menu"
      v-show="!menuHidden"
      class="l-dropdown-content"
      :class="ldContentClass"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import LButton from "../button/button";
export default {
  name: "l-dropdown",
  components: {
    LButton,
    LIcon: () => import("./../icon/icon.vue"),
    LButtonGroup: () => import("./../button/buttonGroup.vue")
  },
  props: {
    poke: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: null
    },
    split: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: "dropdown"
    },
    direction: {
      type: String,
      default: "down", // down. up. left, right
      validator: dir => {
        return (
          dir === "down" || dir === "up" || dir === "left" || dir === "right"
        );
      }
    }
  },
  data() {
    return {
      menuHidden: true
    };
  },
  computed: {
    ldContentClass() {
      let classList = [`drop-${this.direction}`];
      if (this.poke) classList.push(`drop-${this.poke}`);
      return classList;
    }
  },
  methods: {
    toggleMenu() {
      this.menuHidden = !this.menuHidden;
    },
    hideMenu() {
      this.menuHidden = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "dropPokeStyle";
.l-dropdown {
  display: inline-block;
  position: relative;
  .l-dropdown-button {
    .lb-left {
    }
    .lb-right {
      padding: 1.5px 0.1em 0 0.1em;
    }
  }
  .l-dropdown-content {
    box-shadow: $box-shadow-shallow;
    position: absolute;
    text-align: center;
    padding: 0;
    margin: 3px;
    border: 1px solid rgb(215, 215, 215);
    z-index: 99;
    min-width: 100px;
    border-radius: 5px;
    &.drop-down {
    }
    &.drop-up {
    }
    &.drop-left {
    }
    &.drop-right {
    }
  }
}
</style>
