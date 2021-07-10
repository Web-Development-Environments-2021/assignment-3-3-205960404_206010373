<template>
    <div class = "UpdateScore">
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
        id="input-group-homeGoals"
        label-cols-sm="3"
        label="home Goals:"
        label-for="homeGoals"
      >
        <b-form-input
          id="homeGoals"
          v-model="$v.form.homeGoals.$model"
          type="number"
          :state="validateState('homeGoals')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.homeGoals.required">
          home Goals is required
        </b-form-invalid-feedback>
      </b-form-group>

      
      <b-form-group
        id="input-group-awayGoals"
        label-cols-sm="3"
        label="away Goals ID:"
        label-for="awayGoals"
      >
        <b-form-input
          id="awayGoals"
          v-model="$v.form.awayGoals.$model"
          type="number"
          :state="validateState('awayGoals')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.awayGoals.required">
          away Goals is required
        </b-form-invalid-feedback>
      </b-form-group>


      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button
        type="submit"
        variant="primary"
        style="width:250px;"
        class="ml-5 w-75"
        >Add Score To Game</b-button
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
        homeGoals: "",
        awayGoals: "",

      },
        errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      MatchId: {
        required
      },
       homeGoals: {
        required,
      },
      awayGoals: {
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
      try {
        const response = await this.axios.put(
          "http://localhost:3000/admin/addScoretoMatch",
          {
            MatchId: this.form.MatchId,
            HomeGoals: this.form.homeGoals,
            AwayGoals: this.form.awayGoals
          }
        );
        this.$root.toast("Add Game", "The score was successfully update", "success");
      } catch (err) {
        this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
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
        awayGoals: ""

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