<template>
 <div>
   <h1>Past Games</h1>
    <!-- <b-table  :items="items" :fields="fields" striped responsive="sm"> -->
      <b-table striped hover :items="items" :fields="fields">
          <template v-slot:cell(home_team)="data">
      <router-link :to="`/teams/teamFullDetails/{data.value}`">{{ data.value }}</router-link>
    </template>
    <template v-slot:cell(away_team)="data">
      <router-link :to="`/teams/teamFullDetails/{data.value}`">{{ data.value }}</router-link>
    </template>
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <!-- <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Details via check
        </b-form-checkbox> -->
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
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Result:</b></b-col>
            <b-col>{{ row.item.HomeGoals }} - {{ row.item.AwayGoals }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Event Calendar:</b></b-col>
            <b-col >
              <ul>
                <li v-for="g in row.item.eventCalendar" :key="g">{{ g.Description }} </li>
                </ul>
             </b-col>
          </b-row>

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "pastMatches",
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
  // methods:{
  //     async importPastMatches(){
  //     console.log("importPastMaatches");
  //     try {
  //       const response = await this.axios.get(
  //         "http://localhost:3000/matches/pastMatches",
  //       );
  //       const games = response.data;
  //       console.log(games);
  //       this.items = [];
  //       this.items.push(...games);     
      
  //     } catch (error) {
  //       console.log("error in update games")
  //       console.log(error);
  //     }
  //   }

  // },
  mounted(){
    console.log("past matches mounted");
   //   this.importPastMatches(); 
  } 
};
</script>

<style>

</style>
