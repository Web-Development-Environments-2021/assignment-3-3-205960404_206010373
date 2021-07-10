<template>
    <div class = "AddMatch">
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
          type="number"
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
          type="number"
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
      seasons: [{ value: null, text: "Select One", disabled: true }, {value:"2020/2021",text:"2020/2021"},{value:"2021/2022",text:"2021/2022"},{value:"2022/2023",text:"2022/2023"}],
      stages: [{ value: null, text: "Select One", disabled: true }, {value:"Regular Season",text:"Regular Season"},{value:"Play Off",text:"Play Off"}],
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
        this.$root.toast("Add Game", "The Match was successfully added", "success");
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
</script>
<style>

</style>