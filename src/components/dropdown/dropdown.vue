<template>
  <l-button-group>
    <l-button class="lb-left" :poke="poke">
      <slot></slot>
    </l-button>
    <l-button class="lb-right" :poke="poke" icon="menu"></l-button>
  </l-button-group>
</template>

<script>
import LButton from "../button/button";
export default {
  name: "l-dropdown",
  components: {
    LButton,
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

<style lang="scss" scoped></style>
