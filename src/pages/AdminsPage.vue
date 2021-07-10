<template>
  <div id="admin">
    <div>
      <br><br>
      <h2>Welcome to the Admin's page</h2>
      <br><br>
      <h5>
        choose what you wish in order to update or add Matches.
      </h5>
      <br><br>
      <b-button v-b-toggle.collapse-1 variant="primary">
        Add game to the league</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <div>
    
          <AddMatch>
          </AddMatch>
          
       </div>
      </b-collapse>
      <br><br>

      <b-button v-b-toggle.collapse-2 variant="primary"
        >Update a score of a previous game</b-button>
       <b-collapse id="collapse-2" class="mt-2">
          <UpdateScore>
            
          </UpdateScore>
         </b-collapse>
      
      
      <br><br>
      <b-button v-b-toggle.collapse-3 variant="primary"
        >Add event to a game</b-button>
      <b-collapse id="collapse-3" class="mt-2">
       <AddToEventCalander>
         
       </AddToEventCalander>
      </b-collapse> 
    </div>
  </div>
</template>

<script>
import AddMatch from "../components/Admin/AddMatch";
import UpdateScore from "../components/Admin/UpdateScore";
import AddToEventCalander from "../components/Admin/AddToEventCalander";

export default {
  components: {
    AddMatch,
    UpdateScore,
    AddToEventCalander
  }
}
//  export default {
//     data() {
      
//       const now = new Date()
//       const today = new Date(now.getFullYear(),now.getMonth(),now.getDate())
//       console.log(today)
//       return {
//         min: today,
//         form: {
          
          
//           email: '',
//           name: '',
//           food: null,
//           checked: []
//         },
//         seasonName:null,
//         seasons: [ "2017/2018","2018/2019","2019/2020"],
//         show: true,
//         stages: [{ text: 'Select One', value: null }, 'Regular Season', 'Play Off'],
//         referees: [{ text: 'Select One', value: null }, 'Pierluigi Collina', 'Markus Merk', 'Howard Webb','Kim Milton Nielsem','Sandor Puhl','Peter Mikkelsen','Michel Vautrot','Pedro Proenca','Oscar Ruiz','Frank de Bleeckere']
        
        
//       }
//     },
//     methods: {
//       onSubmit(event) {
//         event.preventDefault()
//         alert(JSON.stringify(this.form))
//       },
//       onReset(event) {
//         event.preventDefault()
//         // Reset our form values
//         this.form.email = ''
//         this.form.name = ''
//         this.form.food = null
//         this.form.checked = []
//         // Trick to reset/clear native browser form validation state
//         this.show = false
//         this.$nextTick(() => {
//           this.show = true
//         })
//       },
//        async addGame(){
//             try{
//                 // this.processing=true;
//                 // this.form.success=undefined;
//                 // this.form.errorMessage=undefined;
//                 console.log(this.date);
//                 console.log(this.hour.slice(0,5));
//                 console.log(this.form.stadium);
//                 console.log(this.form.superligaName);
//                 console.log(this.seasonName);
//                 // console.log(this.form.stageName);
//                 // console.log(this.form.refereeName);
//                 console.log(this.form.homeTeamID);
//                 console.log(this.form.awayteamID);
//                 // let datetime=this.form.date;
//                 // let datehour= this.form.time;
//                 // const response=await this.axios.post(`http://localhost:3000/admin/addPreviewMatch`,{
//                 //     date:this.form.date,
//                 //     hour:this.form.hour,
//                 //     stadium:this.form.stadium,
//                 //     superligaName:this.form.superligaName,
//                 //     seasonName:this.form.seasonName,
//                 //     stageName:this.form.stageName,
//                 //     refereeName:this.form.refereeName,
//                 //     homeTeamID:this.form.homeTeamID,
//                 //     awayTeamID:this.form.awayteamID,
                 
//                 // });
//                 if(response.status==201){//if game was added successfully
//                       this.form.success="Game was successfully added!";  
//                 }
//                 else if(response.status==409){
//                     this.form.errorMessage="Game was already added to the system";
//                 }
//                 else if(response.status==400){
//                     this.form.errorMessage="Bad teams names";
//                 }
//                 this.processing=false;
//             }
//             catch(error){
//                 this.form.errorMessage=error.response.data;
//                 this.processing=false;
//             }
//         },
//     }
//   }
// export default {
//   data() {
//     this.getfutureGames();
//     return {
//       minute: 2,
//       homeeee: '',
//       homescore: null,
//       awayscore: null,
//       event: "Goal",
//       player: 0,
//       fields: [
//         "selected",
//         "date",
//         "hour",
//         "hostTeam",
//         "guestTeam",
//         "homeGoal",
//         "awayGoal",
//         "field",
//         "stage",
//       ],
//       futuregames: this.futuregames,
//       selected: [],
//       selectMode: "single",
//     };
//   },
//   methods: {
//     onRowSelected(items) {
//       this.selected = items;
//     },
//     async submit_add_event() {
//       try {
//         const response = await this.axios.post(
//           "http://localhost:3000/admin/addEventtoMatch",
//           {
//             gameID: 14006,
//             eventminute: this.minute,
//             dataevent: this.event,
//             playerID: this.player,
//           }
//         );
//         alert();
//         console.log("the event was added successfully");
//       } catch (error) {
//         console.log("there was a problem while trying to add the event");
//       }
//     },
//     async getfutureMatches() {
//       try {
//         let response = await this.axios.get(
//           "http://localhost:3000/matches/futureMatches"
//         );
//         this.futurematches = [];
//         for (let i = 0; i < response.data.length; i++) {
//           let homename = await this.axios.get(
//             `http://localhost:3000/teams/teamName/${response.data[i].hometeamID}`
//           );
//           let awayname = await this.axios.get(
//             `http://localhost:3000/teams/teamName/${response.data[i].awayteamID}`
//           );
//           let match = {
//             id: response.data[i].gameID,
//             date: response.data[i].gamedate,
//             hour: response.data[i].gametime.slice(11, 19),
//             hostTeam: homename.data,
//             guestTeam: awayname.data,
//             homeGoal: "Not played",
//             awayGoal: "Not played",
//             field: response.data[i].field,
//             stage: response.data[i].stage
//           };
//           // console.log(match);
//           this.futurematches.push(match);
//         }
//       } catch (error) {
//         console.log("There are no matches in the future");
//         this.matches = [];
//         return this.matches;
//       }
//     },
//     async add_score(){
//       try{
//         let response = await this.axios.put(
//           "http://localhost:3000/admin/addScoretoMatch"
//         );
//       } catch(error){
//         console.log("There was a problem adding the score to the match");
//       }
//     },
//   },
// };
</script>

<style>
#admin {
  text-align: center;
}
</style>