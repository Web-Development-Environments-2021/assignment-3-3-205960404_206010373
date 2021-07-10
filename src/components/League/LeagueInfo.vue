<template>
<div>
  <div id="div2" class="league-preview">
      <div>
      
      <div><h5>{{leagueName}}</h5></div><br>
      <div>
        <h5>Season: {{ season }}</h5>
        <br>
        <h5>Stage: {{ stage }}</h5>
      </div>
      
    </div>
    <div>
      <br><br><br>
      <h4> Next Game in league:</h4>
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
  </div>
    <div id="div1" >Loading some data</div>
    
  </div>
</template>

<script>
import GamePreview from "../Matches/GamePreview.vue";
export default {
 data() {
    return {
      leagueName: "", 
      season: "", 
      stage: "",
      games: [],
    };
  },
  components: {
    GamePreview
  }, 
  methods:{
    async getDetails(){
        try {
          const response = await this.axios.get(
            "http://localhost:3000/league/getDetails"
             );
            this.leagueName = response.data.league_name;
            this.season = response.data.current_season_name;
            this.stage=response.data.current_stage_name;

          
         const response2 = await this.axios.get(
            "http://localhost:3000/matches/futureMatches"
             );
          this.games = [];
          if(response2.data.length >0){
            this.games.push({
            id : response2.data[0].MatchID,
            hostTeam: response2.data[0].home_team ,
            guestTeam: response2.data[0].away_team,
            date: response2.data[0].Date.slice(0,10) ,
            hour: response2.data[0].Hour ,
            stadium: response2.data[0].Stadium 
          })
          }
            }
        catch (error) {
          }
          var dv1 = document.getElementById('div1');
          var dv2 = document.getElementById('div2');
          dv1.style.display = 'none';
          dv2.style.display = 'block';
        
        }
      },
  mounted()
  {
    this.getDetails();
  
  },
  created()
  {
    this.getDetails();
   
  }
};
</script>

<style>
.league-preview {
  background-color: transparent !important;
  display: inline-block;
  width: 250px;
  height: 200px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:rgb(44, 89, 116);
}

.league-preview .league-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 155, 197);
}

.league-preview .league-content {
  width: 100%;
  overflow: hidden;
}

#div2{
  display:none;
  margin-top: 50px;
  margin-left: 40px;
}
h5 {
  font-family: cursive;
  margin-top: 20px;
}
.league-title{
  margin-top: 20px;
  margin-left: 40px;
}

</style>