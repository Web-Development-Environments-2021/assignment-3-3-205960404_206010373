
<template>
 <div>
   <h1>Your Favorite Matches are:</h1>
    <b-table striped hover :fields="fields" :items="items">
      <template #cell(button)="row"> 
        <b-button @click="delMatchFav(row.item.MatchId)">Remove Match From Favorites</b-button>
      </template>
      <template v-slot:cell(HomeTeamID)="data">
      <router-link :to="{ name: 'TeamPage', params: {HomeTeamID: data.value } }">{{ data.value }}</router-link>
    </template>
     <template v-slot:cell(AwayTeamID)="data">
      <router-link :to="{ name: 'TeamPage', params: {AwayTeamID: data.value } }">{{ data.value }}</router-link>
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
      console.log("response liiiiiiiiiiiiad");
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/favoriteMatches"
        );
        this.fields = ["MatchId", "Date", "Hour", "Stadium", "HomeTeamID", "AwayTeamID", "home_team", "away_team", "button"];
        console.log(response);
        const favMatches = response.data;
        console.log(favMatches)
        this.items = [];
        var i;
        for (i = 0; i < favMatches.length; i++){
          this.items.push(...favMatches[i]);
        }
        console.log(response);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    },
    async delMatchFav(match_id2){
      console.log("*******delMatchFav*******");
      console.log(match_id2);
      try{
      const response = await this.axios.delete(
          "http://localhost:3000/users/favoriteMatches",
          {
            data: {match_id: match_id2}
          }
        );
        this.$root.toast("favoriteGames", "The Match was successfully deleted as favorite", "success");
        console.log(response);}
        catch (error){
        console.log(error);
      }
    }
  }, 
  mounted(){
    console.log("favorite games mounted");
    this.FavoriteGames(); 
  }
};
</script>

<style></style>
