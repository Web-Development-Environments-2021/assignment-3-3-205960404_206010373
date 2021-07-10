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
    <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
      <b-form-group id="input-group-date"
        label-cols-sm="3"
        label="Enter date:"
        label-for="date">
              <b-form-datepicker :min="min" id="date" locale="en-US" class="mb-2" v-model="date"></b-form-datepicker>
              </b-form-group>
              
        <b-form-group   id="input-group-hour"
        label-cols-sm="3"
        label="Enter hour:"
        label-for="hour">
        <b-form-timepicker id="hour" locale="en-US"  v-model="hour" ></b-form-timepicker>
        </b-form-group>

      <b-form-group
        id="input-group-stadium"
        label-cols-sm="3"
        label="Enter stadium name:"
        label-for="stadium"
      >
        <b-form-input
          id="stadium"
          v-model="$v.form.stadium.$model"
          type="text"
          :state="validateState('stadium')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.stadium.required">
          stadium is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.stadium.length">
          stadium length should be between 3-8 characters long
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.stadium.alpha">
          stadium alpha
        </b-form-invalid-feedback>
      </b-form-group>

       <b-form-group
        id="input-group-superligaName"
        label-cols-sm="3"
        label="superliga Name:"
        label-for="superligaName"
      >
        <b-form-input
          id="superligaName"
          v-model="$v.form.superligaName.$model"
          type="text"
          :state="validateState('superligaName')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.superligaName.required">
          first Name is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.superligaName.alpha">
          first Name alpha
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-seasonName"
        label-cols-sm="3"
        label="Season Name:"
        label-for="seasonName"
      >
        <b-form-select
          id="seasonName"
          v-model="$v.form.seasonName.$model"
          :options="seasons"
          :state="validateState('seasonName')"
        ></b-form-select>
        <b-form-invalid-feedback>
          seasonName is required
        </b-form-invalid-feedback>
      </b-form-group>


      <b-form-group
        id="input-group-stageName"
        label-cols-sm="3"
        label="Stage Name:"
        label-for="stageName"
      >
        <b-form-select
          id="stageName"
          v-model="$v.form.stageName.$model"
          :options="stages"
          :state="validateState('stageName')"
        ></b-form-select>
        <b-form-invalid-feedback>
          stageName is required
        </b-form-invalid-feedback>
      </b-form-group>


      <b-form-group
        id="input-group-refereeName"
        label-cols-sm="3"
        label="Referee Name:"
        label-for="refereeName"
      >
        <b-form-select
          id="refereeName"
          v-model="$v.form.refereeName.$model"
          :options="referees"
          :state="validateState('refereeName')"
        ></b-form-select>
        <b-form-invalid-feedback>
          refereeName is required
        </b-form-invalid-feedback>
      </b-form-group>


      <b-form-group
        id="input-group-homeTeamID"
        label-cols-sm="3"
        label="home Team ID:"
        label-for="homeTeamID"
      >
        <b-form-input
          id="homeTeamID"
          v-model="$v.form.homeTeamID.$model"
          type="text"
          :state="validateState('homeTeamID')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.homeTeamID.required">
          last Name is required
        </b-form-invalid-feedback>
      </b-form-group>

      
      <b-form-group
        id="input-group-awayteamID"
        label-cols-sm="3"
        label="away Team ID:"
        label-for="awayteamID"
      >
        <b-form-input
          id="awayteamID"
          v-model="$v.form.awayteamID.$model"
          type="text"
          :state="validateState('awayteamID')"
        ></b-form-input>
        <!-- <b-form-invalid-feedback v-if="!$v.form.awayteamID.required">
          last Name is required
        </b-form-invalid-feedback> -->
        
      </b-form-group>


      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button
        type="submit"
        variant="primary"
        style="width:250px;"
        class="ml-5 w-75"
        >Add Game</b-button
      >
      <div class="mt-2">
        You have an account already?
        <router-link to="login"> Log in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Register failed: {{ form.submitError }}
    </b-alert>
  </div>
      </b-collapse>
      <br><br>
<!-- 
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
            dvir bring future games 
            take id  -->
            <!-- <br><br>
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
      </b-collapse> -->
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email
} from "vuelidate/lib/validators";
export default {
  name: "Register",
  data() {
    const now = new Date()
      const today = new Date(now.getFullYear(),now.getMonth(),now.getDate())
    return {
      min: today,
      date:"",
      hour:"",
      form: {
        stadium: "",
        superligaName: "",
        seasonName: null,
        stageName : null,
        refereeName: null,
        homeTeamID: "",
        awayTeamID: "",

        //submitError: undefined
      },
      seasons: [{ value: null, text: "", disabled: true }, {value:"2019/2020",text:"2019/2020"},{value:"2020/2021",text:"2020/2021"},{value:"2021/2022",text:"2021/2022"}],
      stages: [{ value: null, text: "", disabled: true }, {value:"Regular Season",text:"Regular Season"},{value:"Play Off",text:"Play Off"}],
      referees: [{ text: 'Select One', value: null,disabled: true }, 'Pierluigi Collina', 'Markus Merk', 'Howard Webb','Kim Milton Nielsem','Sandor Puhl','Peter Mikkelsen','Michel Vautrot','Pedro Proenca','Oscar Ruiz','Frank de Bleeckere'],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      stadium: {
        required,
        alpha
      },
      superligaName: {
        required,
        alpha
    },
      seasonName: {
        required,
        
      },
      stageName: {
        required
      },
      refereeName: {
        required,
      },
       homeTeamID: {
        required,
      },
      awayteamID: {
        required
      }
    }
  },
  mounted() {
    // console.log("mounted");
    // this.countries.push(...countries);
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      try {
        console.log(this.date);
                console.log(this.hour.slice(0,5));
        console.log(this.form.stadium);
        console.log(this.form.superligaName);
        console.log(this.form.seasonName);
        console.log(this.form.stageName);
        console.log(this.form.refereeName);
        console.log(this.form.homeTeamID);
        console.log(this.form.awayteamID);

        const response = await this.axios.post(
          "http://localhost:3000/admin/addPreviewMatch",
          {
            date: this.date,
            hour: this.hour.slice(0,5),
            stadium: this.form.stadium,
            superligaName: this.form.superligaName,
            seasonName: this.form.seasonName,
            stageName: this.form.stageName,
            refereeName: this.form.refereeName,
            homeTeamID: this.form.homeTeamID,
            awayTeamID: this.form.awayteamID
          }
        );
        // this.$router.push("/login");
        // console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      console.log("register method go liiiad");
      this.Register();
    },
    onReset() {
      this.form = {
        date: "",
        hour: "",
        stadium: "",
        superligaName: "",
        seasonName: null,
        stageName: null,
        refereeName: null,
        homeTeamID: "",
        awayteamID: ""

      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};

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