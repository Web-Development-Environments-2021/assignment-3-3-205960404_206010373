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
    <b-form @submit="addGame" @reset="onReset" v-if="show">

        <b-form-group label="Date Of The Match" label-for="dateInput">
              <b-form-datepicker :min="min" id="dateInput" locale="en-US" class="mb-2" v-model="date"></b-form-datepicker>
              </b-form-group>
              
        <b-form-group label="Time Of The Game" label-for="timeInput">
        <b-form-timepicker  locale="en-US"  v-model="hour" ></b-form-timepicker>
        </b-form-group>
 
        <b-form-group id="input-group-1" label="Stadium Name:" label-for="input-1">
        <b-form-input
          id="input-1"
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
          v-model="seasonName"
          :options="seasons"
          required
          
        ></b-form-select>
        <!-- <div class="mt-3">Selected: <strong>{{ seasonName }}</strong></div> -->
      </b-form-group>

        <b-form-group id="input-group-4" label="Stage:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="form.stageName"
          :options="stages"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-5" label="Referee Name:" label-for="input-5">
        <b-form-select
          id="input-5"
          v-model="form.refereeName"
          :options="referees"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-6" label="Home Team Id:" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.homeTeamID"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Away Team Id:" label-for="input-7">
        <b-form-input
          id="input-7"
          v-model="form.awayteamID"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>



      <b-button type="submit" variant="primary" >Submit</b-button>
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
      
      const now = new Date()
      const today = new Date(now.getFullYear(),now.getMonth(),now.getDate())
      return {
        min: today,
        form: {
          
          
          email: '',
          name: '',
          food: null,
          checked: []
        },
        seasonName:null,
        seasons: [ "2017/2018","2018/2019","2019/2020"],
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
      },
       async addGame(){
            try{
                if(response.status==201){//if game was added successfully
                      this.form.success="Game was successfully added!";  
                }
                else if(response.status==409){
                    this.form.errorMessage="Game was already added to the system";
                }
                else if(response.status==400){
                    this.form.errorMessage="Bad teams names";
                }
                this.processing=false;
            }
            catch(error){
                this.form.errorMessage=error.response.data;
                this.processing=false;
            }
        },
    }
  }

</script>

<style>
#admin {
  text-align: center;
}
</style>