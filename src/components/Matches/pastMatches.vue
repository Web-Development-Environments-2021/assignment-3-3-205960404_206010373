<template>
 <div>
   <h1>Past Games</h1>
    <!-- <b-table  :items="items" :fields="fields" striped responsive="sm"> -->
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

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <!-- <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Details via check
        </b-form-checkbox> -->
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
    color: black;
}
b{
      color: black;
}
</style>
