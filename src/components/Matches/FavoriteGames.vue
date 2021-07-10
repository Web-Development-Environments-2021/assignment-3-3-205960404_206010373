
<template>
 <div>
   <h1>Your Favorite Matches are:</h1>
    <b-table striped hover :fields="fields" :items="items">
      <template #cell(button)="row"> 
        <b-button @click="delMatchFav(row.item.MatchId)">Remove Match From Favorites</b-button>
      </template>
      <template v-slot:cell(home_team)="data">
      <router-link :to="{ name: 'TeamPage', params: {HomeTeamID: data.item.HomeTeamID } }">{{ data.value }}</router-link>
    </template>
     <template v-slot:cell(away_team)="data">
      <router-link :to="{ name: 'TeamPage', params: {AwayTeamID: data.item.AwayTeamID } }">{{ data.value }}</router-link>
    </template>
    <template v-slot:cell(Date)="data">
      {{ data.value.slice(0,10) }}
    </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "FavoriteGames",
  data() {
    return { 
    };
  },
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
  methods: {
    async FavoriteGames(){
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/favoriteMatches"
        );
        this.fields = ["MatchId", "Date", "Hour", "Stadium", "HomeTeamID", "AwayTeamID", "home_team", "away_team", "button"];

        const favMatches = response.data;
        this.items = [];
        var i;
        for (i = 0; i < favMatches.length; i++){
          this.items.push(...favMatches[i]);
        }

      } catch (error) {
      }
    },
    async delMatchFav(match_id2){
      try{
      const response = await this.axios.delete(
          "http://localhost:3000/users/favoriteMatches",
          {
            data: {match_id: match_id2}
          }
        );
        this.$root.toast("favoriteGames", "The Match was successfully deleted as favorite", "success");}
        catch (error){

      }
    }
  }, 
  mounted(){
    this.FavoriteGames(); 
  }
};
</script>

<style></style>
