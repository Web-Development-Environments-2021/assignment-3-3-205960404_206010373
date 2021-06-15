<template>
 <div>
   <h1>Future Games</h1>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Details via check
        </b-form-checkbox>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Date:</b></b-col>
            <b-col>{{ row.item.Date }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Hour:</b></b-col>
            <b-col>{{ row.item.Hour }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Stadium:</b></b-col>
            <b-col>{{ row.item.Stadium }}</b-col>
          </b-row>

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "futureMatches",
  props: {
      fields: {
        type: Array,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
  }, 
   methods:{
      async importFutureMatches(){
      console.log("importFutureMatches");
      try {

        const response2 = await this.axios.get(
          "http://localhost:3000/matches/futureMatches",
        );
        const games2 = response2.data;
        console.log(games2);
        this.items = [];
        this.items.push(...games2);
        console.log("futureeeeeeeeeeeeeee");

     
      
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    }

  },
  mounted(){
    console.log("future matches mounted");
    this.importFutureMatches(); 

  } 
};
</script>

<style>




</style>
