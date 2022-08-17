<template>
  <button class="btn btn-primary"
  @click="$emit('on:Click')">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>

export default {
  props: {
    icon: {
      type: String,
      default: "fa-plus"
    },
  },
  // created () {
  //   this.saveEntry();
  // },
}
</script>

<style lang="scss" scoped>
    button {
        border-radius: 100%;
        bottom: 20px;
        height: 80px;
        position: fixed;
        right: 20px;
        width: 80px;
    }
</style>