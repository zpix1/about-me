<template>
    <a :href="url" target="_blank">
        <slot></slot>
    </a>
</template>

<script>
export default {
  name: 'Url',
  props: {
    url: String
  }
}
</script>

<style scoped>
a {
    color: inherit;

}
</style>
