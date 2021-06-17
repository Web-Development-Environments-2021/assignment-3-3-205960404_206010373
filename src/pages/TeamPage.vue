<template>
  <div class="overall">
    <h1 class="title">Team Home Page</h1>
    <div>
      The players that play in the team:
      <br>
    <PlayerPreview
      v-for="p in players"
      :playerId="p.player_id"
      :fullname="p.fullname"
      :image="p.image"
      :position="p.position" 
      :teamName="p.team_name"
      :key="p.id"></PlayerPreview>
  </div>
  <br>
<br>
  <div>
    <div>
      The coach of the team:
      <br>
    <CoachPreview
      :coachId="this.coach.coach_id"
      :fullname="this.coach.full_name"
      :image="this.coach.image"
      :teamName="this.coach.team_name" 
      ></CoachPreview>
  </div>

    
<br>
<br>
  <div>
      The games that the team played:
      <br>
    <GamePreview
      v-for="g in games"
      :id="g.id"
      :date="g.date"
      :hour="g.hour"
      :hostTeam="g.hostTeam" 
      :guestTeam="g.guestTeam"
      :field="g.field"
      :key="g.id"></GamePreview>
  </div>
</div>
        
      
<div v-if="!this.teamFound && !this.start">
Results:
<br>
Sorry! There is no team with this id
<br>
</div>
  </div>
  
</template>

<script>
import PlayerPreview from "../components/PlayerPreview";
import CoachPreview from "../components/CoachPreview";
import GamePreview from "../components/GamePreview";
export default {
    components: {
        PlayerPreview,
        CoachPreview,
        GamePreview
    },
 data() {
   this.players = [];
   this.coach = {};
   this.games = [];
   this.teamFound = false;
   this.start = true;
   
    return {
      searchQuery:"",
      players: "",
      coach: "",
      teamFound: false,
      start: true
    };
  },
  methods: {
    async searchById() {
      try {
        const response = await this.axios.get(
          `http://localhost:3000/teams/teamDetails/${this.searchQuery}`,
          {
  
          }
        );
        
        this.players = response.data.players;
        this.coach = response.data.coach;
        this.games = response.data.games;

        this.teamFound = true;
        this.start = false;

      } catch (err) {
        this.teamFound = false;
        this.start = false;
      }
    },

    newSearch() {

      this.searchById();
    }

  }
}


</script>

<style scoped>

#search-input {
  margin: auto;
  width: 300px;
  padding: 10px;
  align-items: center;
}

.overall {
  text-align: center;
}
</style>