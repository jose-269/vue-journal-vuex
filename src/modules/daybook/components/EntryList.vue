<template>

<div class="entry-list-container">
  <div class="px-2 pt-2">
    <input v-model="term" type="text" class="form-control" placeholder="Buscar Entrada">
  </div>
  <div class="entry-scrollarea">
    <Entry v-for="entry in entriesByTerm" :key="entry.id" :entry="entry"></Entry>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
export default {
  data() {
    return {
      term: '',
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntriesByTerm']),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term);
    }
  },
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue'))
  },
}
</script>

<style lang="scss" scoped>
  .entry-list-container {
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
  }
  .entry-scrollarea {
    height: calc(100vh - 110px);
    overflow: scroll
  }
</style>