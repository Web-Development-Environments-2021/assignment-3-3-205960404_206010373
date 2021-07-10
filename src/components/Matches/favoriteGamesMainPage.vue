<template>
<div>
  <div v-if="games!=[]">
    <GamePreview
      v-for="g in games"
      :id="g.id" 
      :hostTeam="g.hostTeam" 
      :guestTeam="g.guestTeam" 
      :date="g.date" 
      :hour="g.hour" 
      :stadium="g.stadium"
      :key="g"></GamePreview>
       </div>
      <div class="game-preview" v-else>
      there are no favorite games in your profile
    </div>
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
  name: "favoriteGamesMainPage",
  components: {
    GamePreview
  }, 
  data() {
    return {
      games: this.games
      //[
        // {
        //   id:25,
        //   hostTeam: "Maccabi Tel-Aviv",
        //   guestTeam: "Hapoel Beer-Sheva",
        //   date: "27/5/21",
        //   hour: "20:00"
        // },
        // {
        //   id:39,
        //   hostTeam: "Hapoel Tel-Aviv",
        //   guestTeam: "Maccabi Haifa",
        //   date: "29/5/21",
        //   hour: "20:00"
        // }
   //   ]
    };
  },
  methods: {
    async updateGames(){
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/favoriteMatches"
        );
        const games = response.data;
        this.games = [];
        let until = 3;
        if (games.length < until){
          until=games.length;
        }
        for(let i=0;i<until;i++){
          this.games.push({
            id : games[i][0].MatchId,
            hostTeam: games[i][0].home_team ,
            guestTeam: games[i][0].away_team,
            date: games[i][0].Date.slice(0,10) ,
            hour: games[i][0].Hour ,
            stadium: games[i][0].Stadium 
          })
        };
       
      } catch (error) {
        
      }
    }
  }, 
  mounted(){
    this.updateGames(); 
  }
};
</script>

<style>
h4, .h4 {
    font-size: 1.5rem;
    margin-top: 25px;
}
</style>