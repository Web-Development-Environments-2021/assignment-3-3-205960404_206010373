<template>
    <div class = "AddEvent">
<b-form @submit.prevent="onRegister" @reset.prevent="onReset">
      
      <b-form-group
        id="input-group-MatchId"
        label-cols-sm="3"
        label="Enter Match Id:"
        label-for="MatchId"
      >
        <b-form-input
          id="MatchId"
          v-model="$v.form.MatchId.$model"
          type="number"
          :state="validateState('MatchId')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.MatchId.required">
          MatchId is required
        </b-form-invalid-feedback>
      </b-form-group>


      <b-form-group
        id="input-group-Date1"
        label-cols-sm="3"
        label="Date:"
        label-for="Date1"
      >
        <b-form-input
          id="Date1"
          v-model="$v.form.Date1.$model"
          type="text"
          :state="validateState('Date1')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.Date1.required">
          Date is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-TimeMinuteInGame"
        label-cols-sm="3"
        label="TimeMinuteInGame:"
        label-for="TimeMinuteInGame"
      >
        <b-form-input
          id="TimeMinuteInGame"
          v-model="$v.form.TimeMinuteInGame.$model"
          type="number"
          :state="validateState('TimeMinuteInGame')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.TimeMinuteInGame.required">
          Time Minute In Game is required
        </b-form-invalid-feedback>
      </b-form-group>
    
          <b-form-group   id="input-group-hour"
        label-cols-sm="3"
        label="Enter hour:"
        label-for="hour">
        <b-form-timepicker id="hour" locale="en-US"  v-model="hour" ></b-form-timepicker>
        </b-form-group>
      
       <b-form-group
        id="input-group-EventInGame"
        label-cols-sm="3"
        label="Event In Game:"
        label-for="EventInGame"
      >
        <b-form-select
          id="EventInGame"
          v-model="$v.form.EventInGame.$model"
          :options="events"
          :state="validateState('EventInGame')"
        ></b-form-select>
        <b-form-invalid-feedback>
          Event In Game is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-player_name"
        label-cols-sm="3"
        label="player name:"
        label-for="player_name"
      >
        <b-form-input
          id="player_name"
          v-model="$v.form.player_name.$model"
          type="text"
          :state="validateState('player_name')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.player_name.required">
          player name is required
        </b-form-invalid-feedback>
      </b-form-group>

        <b-form-group
        id="input-group-Description"
        label-cols-sm="3"
        label="Description:"
        label-for="Description"
      >
        <b-form-input
          id="Description"
          v-model="$v.form.Description.$model"
          type="text"
          :state="validateState('Description')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.Description.required">
          Description is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button
        type="submit"
        variant="primary"
        style="width:250px;"
        class="ml-5 w-75"
        >Add Event To Game</b-button
      >
     
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
    return {
      date:"",
      hour:"",
      form: {
        MatchId: "",
        Date1:"",
        TimeMinuteInGame:"",
        EventInGame:"",
        player_name:"",
        Description:""

      },
        events: [{ value: null, text: "Select One", disabled: true }, {value:"Goal",text:"Goal"},{value:"Offside",text:"Offside"},{value:"Foul",text:"Foul"},{value:"Redcard",text:"Redcard"},{value:"Yellowcard",text:"Yellowcard"},{value:"Injury",text:"Injury"},{value:"Subtitution",text:"Subtitution"}],
        errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      MatchId: {
        required
      },
       Date1: {
        required
      },

      TimeMinuteInGame:{
          required
      },
      EventInGame:{
          required
      },
      player_name:{
          required
      },
      Description:{
          required
      }
    }
  },
  mounted() {

  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
        console.log("Register hereeeeeeeeeee");
      try {
          console.log(this.form.MatchId);
          console.log(this.form.Date1);
          console.log(this.hour.slice(0,5));
          console.log(this.form.TimeMinuteInGame);
          console.log(this.form.EventInGame);
          console.log(this.form.player_name);
          console.log(this.form.Description);
        const response = await this.axios.post(
          "http://localhost:3000/admin/addEventtoMatch",
          {
            MatchId: this.form.MatchId,
            Date: this.form.Date1,
            Hour: this.hour.slice(0,5),
            TimeMinuteInGame: this.form.TimeMinuteInGame,
            EventInGame:this.form.EventInGame,
            player_name:this.form.player_name,
            Description:this.form.Description
          }
        );
        this.$root.toast("Add Event", "The Event was successfully added", "success");
      } catch (err) {
        this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
        console.log("hereeeeeeeeeee");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.Register();
    },
    onReset() {
      this.form = {
        MatchId: "",
        homeGoals: "",
        awayGoals: "",
        TimeMinuteInGame:"",
        EventInGame:"",
        player_name:""

      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style>

</style>