<template>
  <div class="app">
    <l-icon
      class="test"
      icon="mic"
      color="pink"
      style="font-size: 56px"
    ></l-icon>

    <l-icon-button icon="list" poke="rock" class="test"></l-icon-button>

    <l-button
      class="test"
      icon="pokemon-ball"
      gap
      iconPosition="right"
      poke="fire"
      size="immense"
      >宝贝球</l-button
    >
    <l-button-group class="test">
      <l-button icon="arrow-left-circle" poke="ground">pre</l-button>
      <l-button poke="ground">...</l-button>
      <l-button poke="ground" icon="arrow-right-circle" iconPosition="right"
        >next</l-button
      >
    </l-button-group>

    <l-dropdown text="list" size="big" poke="water" class="test">
      <l-dropdown-item icon="arrow-left-circle" poke="ground"
        >pre</l-dropdown-item
      >
      <l-dropdown-item poke="ground">...</l-dropdown-item>
      <l-dropdown-item
        poke="ground"
        icon="arrow-right-circle"
        iconPosition="right"
        >next</l-dropdown-item
      >
    </l-dropdown>
    <l-dropdown split size="big" poke="grass" class="test">
      <l-dropdown-item icon="arrow-left-circle" poke="ground"
        >pre</l-dropdown-item
      >
      <l-dropdown-item poke="ground">kkk</l-dropdown-item>
      <l-dropdown-item
        poke="ground"
        icon="arrow-right-circle"
        iconPosition="right"
        >next</l-dropdown-item
      >
    </l-dropdown>
    <l-list class="test">
      <l-list-item button>
        safasasda
      </l-list-item>
      <l-list-item poke="grass" href="#">
        safasasda
      </l-list-item>
      <l-list-item poke="latias" href="#" button>
        safasasda
      </l-list-item>
    </l-list>
    <l-list horizontal class="test">
      <l-list-item poke="dragon" active>
        safasasda
      </l-list-item>
      <l-list-item poke="normal">
        safasasda
      </l-list-item>
      <l-list-item poke="success">
        safasasda
      </l-list-item>
    </l-list>

    <l-breadcrumb class="test" :items="items"> </l-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [
        {
          text: "dasdsa",
          href: "#",
          poke: "latias",
          active: true
        },
        {
          text: "dasdsa",
          poke: "latios",
          disabled: true
        },
        {
          text: "dasa",
          poke: "ghost",
          disabled: true
        },
        {
          text: "dasdsauiiii",
          poke: "dark",
          disabled: true
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.app {
  display: inline-block;
  > .test {
    margin: 20px;
    vertical-align: middle;
  }
}
</style>
