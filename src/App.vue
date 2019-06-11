<template>
  <div class="app">
    <l-icon
      class="test"
      icon="mic"
      color="blue"
      style="font-size: 56px"
    ></l-icon>
    <l-button
      class="test"
      icon="pokemon-ball"
      :gap="true"
      iconPosition="right"
      poke="fairy"
      size="immense"
      >宝贝球</l-button
    >
    <l-button-group class="test">
      <l-button icon="arrow-left-circle" poke="latios">pre</l-button>
      <l-button>...</l-button>
      <l-button icon="arrow-right-circle" iconPosition="right">next</l-button>
    </l-button-group>

    <l-dropdown poke="fire" class="test">
      dasdasdas
    </l-dropdown>

    <l-icon-button icon="list" poke="rock" class="test"></l-icon-button>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
.app {
  > .test {
    margin: 20px;
    vertical-align: middle;
  }
}
</style>
