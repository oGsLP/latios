<template>
  <button class="l-button">
    <l-icon :name="'pokemon-ball'" class="icon" color="black" ></l-icon>
    <!--<l-icon v-if="icon && !loading" :name="'pokemon-ball'" class="icon"  ></l-icon>-->
    <!--<l-icon v-if="loading" name="loading" class="icon loading"></l-icon>-->
    <span class="button-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import LIcon from './../icon'
export default {
  name: 'l-button',
  comments: {
    LIcon
  },
  props: {
    disable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: val => {
        return val === 'left' || val === 'right'
      }
    },
    poke: {
      type: String,
      default: 'transparent'
    },
    pressed: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/style/preset";
.l-button {
  .button-content {
  }
}
</style>
