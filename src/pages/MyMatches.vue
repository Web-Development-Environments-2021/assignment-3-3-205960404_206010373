<template>
   <div>
   <FavoriteGames></FavoriteGames>
   </div>
</template>

<script>
import FavoriteGames from "../components/Matches/FavoriteGames.vue";
 export default {
  components: {FavoriteGames},
  
    data() {
     
      return {
        fields: ['MatchId', 'Date', 'Hour', 'Stadium', 'HomeTeamID', 'AwayTeamID' , 'home_team', 'awayteam'],
        items: [
          {  }
        ],
      }
    },
  mounted(){
    console.log("FavoriteGames mounted");
    }
}
</script>

<style>
.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #b8daff;
}

</style>