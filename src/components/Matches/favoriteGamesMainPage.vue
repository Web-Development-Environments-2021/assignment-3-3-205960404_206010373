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
      :key="g.id"></GamePreview>
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
      games: [
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
      ]
    };
  },
  methods: {
    async updateGames(){
      console.log("response");
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/favoriteMatches"
        );
        console.log(response.data);
        const games = response.data;
        this.games = [];
        let until = 3;
        if (games.length < until){
          until=games.length;
        }
        for(let i=0;i<until;i++){
          this.games.push({
            id : games.MatchId,
            hostTeam: games.home_team ,
            guestTeam: games.away_team,
            date: games.Date ,
            hour: games.Hour ,
            stadium: games.Stadium 
          })
        }
        //this.games.push(...games);
        console.log(response);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    }
  }, 
  mounted(){
    console.log("favorite games mounted");
    this.updateGames(); 
  }
};
</script>

<style></style>