<template>
  <span class="l-breadcrumb">
    <l-link
      v-for="(item, index) in items"
      v-bind="item"
      :key="`l_link_${index}`"
    >
      {{ item.text }}
    </l-link>
  </span>
</template>

<script>
export default {
  name: "l-breadcrumb",
  components: {
    LLink: () => import("./link.vue")
  },
  props: {
    items: {
      type: Array,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.l-breadcrumb {
  background: #e9ecef;
  padding: 0.3em 1em;
  border-radius: 5px;
  > :not(:first-child)::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #6c757d;
    content: "/";
  }
}
</style>
