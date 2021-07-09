<template>
  <div>
    <h1 class="title">Search Page</h1>
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-input-group-append>
        <b-button variant="success" v-on:click="search">Search</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-form-group label="What you want to search?" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Players">Players</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Teams">Teams</b-form-radio>
    </b-form-group>
    <b-form-group label="Filter By" v-slot="{ ariaDescribedby }" v-if="selected=='Players'">
      <b-form-radio-group
        id="radio-group-2"
        v-model="selected_filter"
        :aria-describedby="ariaDescribedby"
        name="radio-sub-component"
      >
        <b-form-radio v-model="selected_filter" value="None">None</b-form-radio>
        <b-form-radio v-model="selected_filter" value="Position">Position</b-form-radio>
        <b-form-radio v-model="selected_filter" value="Team">Team</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    <b-input-group prepend="Positon:" id="search-input-position" v-if="selected_filter=='Position' && selected=='Players'">
      <b-form-input v-model="searchQuery"></b-form-input>
    </b-input-group>
    <b-input-group prepend="Team:" id="search-input-Team" v-if="selected_filter=='Team' && selected=='Players'">
      <b-form-input v-model="searchQuery"></b-form-input>
    </b-input-group>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
      <br/>
      Your search Query: {{ searchQuery }}

      <div v-if="showTeam" >
        <b-table striped hover :items="items_teams" :fields="fields_teams">
          <template v-slot:cell(teamlogo)="data">
            <img  :src="data.value" alt="..." />            
          </template>
        </b-table>

       
      </div>
  </div>
</template>

<script>
export default {
 data() {
    return {
      searchQuery:"",
      selected: 'Players',
      showTeam: false,
      team_name: "",
      teamlogo:"",
      selected_filter: 'None',
      fields_teams:[
        {
          key: 'team_name',
          sortable: true
        },
        {
          key: 'teamlogo',
          sortable: false
        }
      ],
      items_teams:[]

    };
  },
  methods:{
    async search(){
      console.log("clickkkkkkkkkkkkkkk");
      console.log(this.selected);
      try{
          if(this.selected == "Players"){
              if(this.selected_filter == "None"){
                  const response = await this.axios.get(
                 `http://localhost:3000/players/SearchPlayer/${this.searchQuery}`);
                   console.log(response.data);
              }
              else if(this.selected_filter == "Position"){

              }
              else if(this.selected_filter== "Team"){

              }
          }

          else if (this.selected == "Teams"){
            console.log("Teams searchhhhhhhhhh");
            const response = await this.axios.get(
          `http://localhost:3000/teams/SearchTeam/${this.searchQuery}`);
          console.log(response.data);
          if(response.data.length > 0 ){
              console.log("hereeeeeeeeeeeeeeeeeee");
              this.team_name = response.data[0].teamName;
              this.teamlogo = response.data[0].teamLogo;
              console.log(this.team_name);
              console.log(this.teamlogo);
              this.showTeam = true;
              this.items_teams=[];
              for( let i=0;i<response.data.length;i++){
                console.log(response.data[i]);
                  this.items_teams.push({
                    team_name :response.data[i].teamName,
                    teamlogo : response.data[i].teamLogo
                  })
              }
          }
          }
          
      }
      catch{

      }
    }
  }
}
</script>

<style scoped>

#search-input {
  margin-left: 20px; 
  width: 500px; 
}

#search-input-position {
  margin-left: 20px; 
  width: 500px; 
}

#search-input-Team {
  margin-left: 20px; 
  width: 500px; 
}
</style>