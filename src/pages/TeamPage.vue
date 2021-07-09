<template>
  <div class="overall">
    <h1 class="title">{{teamName}} Page</h1>
     <div>
     <br>
  <TeamPreview
    :id = teamID
    :name = teamName
    :logopath = logo>
  </TeamPreview>
  </div>
    <div>
     <h2>Team Roster</h2> 
      <br>
    <PlayerPreview
      v-for="p in players"
      :player_id="p.player_id"
      :name="p.name"
      :image="p.image"
      :position="p.position" 
      :team_name="p.team_name"
      :key="p"></PlayerPreview>
  </div>
  <br>
  <br>
 
  <div>
    <!-- <div>
      The coach of the team:
      <br>
    <CoachPreview
      :coachId="this.coach.coach_id"
      :fullname="this.coach.full_name"
      :image="this.coach.image"
      :teamName="this.coach.team_name" 
      ></CoachPreview>
  </div> -->

    
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
      :stadium="g.stadium"
      :key="g"></GamePreview>
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
import TeamPreview  from '../components/Teams/TeamPreview';
import PlayerPreview from "../components/Players/PlayerPreview";
// import CoachPreview from "../components/CoachPreview";
import GamePreview from "../components/Matches/GamePreview";
//import TeamFullDetails from '../components/Teams/teamFullDetails.vue';

export default {
    components: {
        TeamPreview,
        PlayerPreview,
        // CoachPreview,
        GamePreview,
        
    },
 data() {
   this.players = [];
   // this.coach = {};
   this.games = [];
   this.teamFound = false;
   this.start = true;
   this.teamID = "";
   this.teamName= "";
   this.logo = "";
    return {
      searchQuery:"",
      players: "",
      coach: "",
      teamFound: false,
      start: true,
      teamID : "",
      teamName: "",
      logo : ""
    };
  },
  mounted(){
      this.getTeamDetails();
  },
  methods: {
    async getTeamDetails() {
      try {
        console.log(this.$route.params);
        const response = await this.axios.get(
          `http://localhost:3000/teams/teamFullDetails/${this.$route.params.teamID}`
        );
        console.log(response);
        this.players = response.data.players;
       // this.coach = response.data.coach;
        this.games = response.data.games;
        this.teamID = response.data.id;
        this.teamName = response.data.name;
        this.logo = response.data.logoPath;
        this.teamFound = true;
        this.start = false;

      } catch (err) {
        console.log(err.message);
        this.teamFound = false;
        this.start = false;
      }
    },
//?????????????????????????????
    newSearch() {

      this.getTeamDetails();
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