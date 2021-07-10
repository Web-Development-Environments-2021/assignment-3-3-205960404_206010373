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
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

       
 
        <b-form-group id="input-group-2" label="Stadium Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.stadium"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="SuperLigaName:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.superligaName"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Season:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.seasonName"
          :options="seasons"
          required
        ></b-form-select>
      </b-form-group>

        <b-form-group id="input-group-3" label="Stage:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.stageName"
          :options="stages"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Referee Name:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.refereeName"
          :options="referees"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Home Team Id:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.homaTeamID"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Away Team Id:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.awayteamID"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>



      <b-button type="submit" variant="primary">Submit</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>

  </div>
      </b-collapse>
      <br><br>

      <b-button v-b-toggle.collapse-2 variant="primary"
        >Update a score of a previous game</b-button>
      <b-collapse id="collapse-2" class="mt-2">
       

      </b-collapse>
      
      <br><br>
      <b-button v-b-toggle.collapse-3 variant="primary"
        >Add event to a game</b-button>
      <b-collapse id="collapse-3" class="mt-2">
        <b-card>
          <div class="card-text">
            <br>
            <h6>Fill the following parameters to add event to a game</h6>
            <br><br>
            Choose game from the list above:
            <!-- dvir bring future games 
            take id  -->
            <br><br>
            Select minute in game
            <select v-model="minute">
              <option disabled value="">select minute in game </option>
              <option>1</option
              ><option>2</option>
              <option>3</option
              ><option>4</option>
              <option>5</option
              ><option>6</option>
            </select>
            <br><br>
            Choose Type of event
            <select v-model="event">
              <option disabled value="">select event</option>
              <option>Goal</option
              ><option>Offside</option>
              <option>Foul</option
              ><option>Redcard</option>
              <option>Yellowcard</option
              ><option>Injury</option
              ><option>Subtitution</option>
            </select>
            <br><br>
           
              <label for="fname">Players Name: </label>
              <input type="text" id="fname" name="fname"><br><br>
           
            <br><br>
            <button v-on:click="submit_add_event">submit</button>
          </div>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        seasons: [{ text: 'Select One', value: null }, '2017/2018', '2018/2019', '2019/2020', '2020/2021'],
        show: true,
        stages: [{ text: 'Select One', value: null }, 'Regular Season', 'Play Off'],
        referees: [{ text: 'Select One', value: null }, 'Pierluigi Collina', 'Markus Merk', 'Howard Webb','Kim Milton Nielsem','Sandor Puhl','Peter Mikkelsen','Michel Vautrot','Pedro Proenca','Oscar Ruiz','Frank de Bleeckere']
        
        
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
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