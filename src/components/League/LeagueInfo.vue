<template>
<div>
  <div id="div2" class="league-preview">
      <div>
      <b-card
      img-alt="Image"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-title>{{leagueName}}</b-card-title>
      <b-card-text>
        Season: {{ season }}
        <br/>
        Stage: {{ stage }}
      </b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
    </div>
    <div>
      <h3> Next Game in league:</h3>
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
//  data() {
//     return {
//       leagueName: "superliga", 
//       season: "season", 
//       stage: "stage"
//     };
//   },
  components: {
    GamePreview
  }, 
  props:{
      leagueName:{
        Type: String,
        required: true
      },
      season:{
        Type: String,
        required: true
      },
      stage:{
        Type: String,
        required: true
      },
      games:{
        Type: Array,
        required: true
      }


  },
  methods:{
    async getDetails(){
      // var dv1 = document.getElementById('div1');
      // var dv2 = document.getElementById('div2');
      // dv2.style.display = 'none';
      // dv1.style.display = 'block';
        try {
          const response = await this.axios.get(
            "http://localhost:3000/league/getDetails"
             );
            console.log(response);
            this.leagueName = response.data.league_name;
            this.season = response.data.current_season_name;
            this.stage=response.data.current_stage_name;

          
         const response2 = await this.axios.get(
            "http://localhost:3000/matches/futureMatches"
             );
          console.log(response2.data[0]);
          this.games = [];
          if(response2.data.length >0){
            this.games.push({
            id : response2.data[0].MatchId,
            hostTeam: response2.data[0].home_team ,
            guestTeam: response2.data[0].away_team,
            date: response2.data[0].Date.slice(0,10) ,
            hour: response2.data[0].Hour ,
            stadium: response2.data[0].Stadium 
          })
          }

            }

          
        
        catch (err) {
          console.log(err.response);
          console.log(err.message);
          // this.form.submitError = err.response.data.message;
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
    console.log("mounted liads main page");
  },
  created()
  {
    
    this.getDetails();
    console.log("mounted liads main page");
  }

};

</script>



<style>
.league-preview {
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
}

</style>