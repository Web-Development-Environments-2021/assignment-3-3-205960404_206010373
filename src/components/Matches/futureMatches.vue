<template>
 <div>
   <h1>Future Games</h1>
    <!-- <b-table :items="items" :fields="fields" striped responsive="sm"> -->
        <b-table striped hover :items="items" :fields="fields">
          <template v-slot:cell(home_team)="data">
            
      <router-link :to="{ name: 'TeamPage', params: { teamID: data.item.HomeTeamID } }">{{ data.value }}</router-link>
    </template>
    <template v-slot:cell(away_team)="data">
       <router-link :to="{ name: 'TeamPage', params: { teamID:  data.item.AwayTeamID } }">{{ data.value }}</router-link>
    </template>


      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>
        <b-button v-if="$root.store.username" @click="addMatchFav(row.item.MatchID)">Add Match to Favorites</b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Date:</b></b-col>
            <b-col>{{ row.item.Date.slice(0,10) }}</b-col>
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
    async addMatchFav(matchID){
      const response = await this.axios.post(
          "http://localhost:3000/users/favoriteMatches",
          {
            "match_id": matchID
          }
        );
        this.$root.toast("futureGames", "The Match was successfully added as favorite", "success");
    }
  },
  mounted(){
  } 
};
</script>

<style>
.col{
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
    color: blue;
}
b{
      color: blue;
}


</style>
