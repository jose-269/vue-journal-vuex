<template>
  <template v-if="entry">

    <div  class="entry-title d-flex justify-content-between p-2">
      <div>
          <span class="text-success fs-3 fw-bold">{{ day }}</span>
          <span class="mx-1 fs-3">{{ month }}</span>
          <span class="mx-2 fs-4 fw-light">{{yearDay}}</span>
      </div>
  
      <div>
          <button class="btn btn-danger mx-2">
              Borrar
              <i class="fa fa-trash-alt"></i>
          </button>
  
          <button class="btn btn-primary">
              Subir foto
              <i class="fa fa-upload"></i>
          </button>
      </div>
    </div>
  
    <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedi{o hoy?" v-model="entry.text"></textarea>
  </div>
    	<img src="https://cdn.fanaticguitars.com/tokai/210000004871/tokai-ls136f-lp-flame-brown-sunburst-1942515-4.jpg" alt="entry-picture" class="img-thumbnail"
	 >
  </template>
	<Fab :icon="'fa-save'" @on:Click="saveEntry" />

</template>

<script>
import { mapGetters, mapActions,mapState } from "vuex";
import { defineAsyncComponent } from "vue";
import getDayMonthYear from "../helpers/getDayMonthYear";
    export default {
  data() {
    return {
      entry: null
    }
  },
	components: {
		Fab: defineAsyncComponent(() => import('../components/Fab.vue')),
	},
  computed: {
    ...mapState('journal',['entries']),
    ...mapGetters('journal',['getEntriesById']),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    }
  },
  methods: {
    ...mapActions('journal', ['updateEntry', 'createEntries']),
    loadEntry() {

      let entry;
      if(this.id === "new") {
        entry = {
          text: "",
          date: new Date().getTime(),
        }
      }else {
       entry = this.getEntriesById(this.id);
        if(!entry) return this.$router.push({ name: 'no-entry'});
      }
        this.entry = entry;
    },
    async saveEntry() {
      // console.log('Guardando Entrada');
      if(this.entry.id) {
        await this.updateEntry(this.entry);
      }else {
        // Crear una nueva entrada
        console.log("Post de una nueva entrada");
        // await action 
        await this.createEntries(this.entry);
        await this.$router.push({ name: 'entry', params: {id: this.entries[0].id} });


        // redirectTo => entry, params
      }
      // Disparar Accion del Journal Store
      // console.log(this.entry.text);
    }
  },
  props: {
    id: {
      type: String,
      required: true, 
    },
  },
  created () {
  this.loadEntry();
  // this.saveEntry();
  },

  watch: {
    id() {
      this.loadEntry();
    }
  }
}
</script>

<style lang="scss" scoped>
	textarea {
		font-size: 20px;
		border: none;
		height: 100%;

		&:focus {
			outline: none;
		}
	}
	img {
		width: 200px;
		position: fixed;
		bottom: 150px;
		right: 20px;
		box-shadow: 0px 5px 10px rgba($color: #000000, $alpha:0.2);
	}

</style>