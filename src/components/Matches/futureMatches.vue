<template>
 <div>
   <h1>Future Games</h1>
    <!-- <b-table :items="items" :fields="fields" striped responsive="sm"> -->
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
        <b-button @click="addMatchFav(row.item.MatchID)">Add Match to Favorites</b-button>
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
    //   async importFutureMatches(){
    //   try {

    //     const response2 = await this.axios.get(
    //       "http://localhost:3000/matches/futureMatches",
    //     );
    //     const games2 = response2.data;
    //     console.log(games2);
    //     this.items = [];
    //     this.items.push(...games2);
       

     
      
    //   } catch (error) {
    //     console.log("error in update games")
    //     console.log(error);
    //   }
    // },
    async addMatchFav(matchID){
      const response = await this.axios.post(
          "http://localhost:3000/users/favoriteMatches",
          {
            "match_id": matchID
          }
        );
    }
  },
  mounted(){
    console.log("future matches mounted");
    // this.importFutureMatches(); 

  } 
};
</script>

<style>




</style>
