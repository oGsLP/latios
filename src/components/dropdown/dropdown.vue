<template>
  <l-button-group class="l-dropdown">
    <l-button class="lb-left" :poke="poke">
      <slot></slot>
    </l-button>
    <l-button class="lb-right" :poke="poke">
      <l-icon icon="menu"></l-icon>
    </l-button>
  </l-button-group>
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
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.l-dropdown {
  .lb-left {
  }
  .lb-right {
    padding: 1.5px 0.1em 0 0.1em;
  }
}
</style>
