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
    <div v-if="selected_filter=='Position' && selected=='Players'">
    <!-- <b-form-select v-model="selected" :options="options"></b-form-select> -->
    <b-form-select v-model="selectedPosition" :options="options" size="sm" class="mt-3"></b-form-select>
    <!-- <div class="mt-3">Selected: <strong>{{ selectedPosition }}</strong></div> -->
  </div>
    <!-- <b-input-group prepend="Positon:" id="search-input-position" v-if="selected_filter=='Position' && selected=='Players'">
      <b-form-input v-model="PositionInput"></b-form-input>
    </b-input-group> -->
    <b-input-group prepend="Team:" id="search-input-Team" v-if="selected_filter=='Team' && selected=='Players'">
      <b-form-input v-model="TeamInput"></b-form-input>
    </b-input-group>
    <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
      <br/>
      <!-- Your search Query: {{ searchQuery }} -->

      <div v-if="showTeam && items_teams.length > 0" >
        <b-table striped hover :items="items_teams" :fields="fields_teams">
          <template v-slot:cell(teamlogo)="data">
            <img  :src="data.value" alt="..." />            
          </template>
         <template v-slot:cell(team_name)="data">
      <router-link :to="{ name: 'TeamPage', params: {teamID: data.item.id} }">{{ data.value  }} </router-link>
    </template>
        </b-table>
      </div>
      <div v-else-if="showPlayers && items_players.length > 0" >
        <b-table striped hover :items="items_players" :fields="fields_players">
          <template v-slot:cell(playerImage)="data">
            <img  :src="data.value" alt="..." />            
          </template>
         <template v-slot:cell(player_name)="data">
      <router-link :to="{ name: 'PersonalPage', params: {playerID: data.item.id} }">{{ data.value  }} </router-link>
    </template>
    <template v-slot:cell(teamName)="data">
      <router-link :to="{ name: 'TeamPage', params: {teamID: data.item.team_id} }">{{ data.value  }} </router-link>
    </template>
        </b-table>
      </div>
      <div v-else>
        No Search Results
      </div>
  </div>
</template>

<script>
export default {
 data() {
    return {
      searchQuery:"",
      TeamInput:"",
      selected: 'Players',
      showTeam: false,
      showPlayers : false,
      boolNoPlayers : false,
      team_name: "",
      teamlogo:"",
      selectedPosition: "1",
      options: [
          //{ value: null, text: 'Please select an option' },
          { value: '1', text: '1' },
          { value: '2', text: '2' },
          { value: '3', text: '3' },
          { value: '4', text: '4' }
        ],
      selected_filter: 'None',
      fields_teams:[
        {
          key:'id',
          thClass: 'd-none',
          tdClass: 'd-none'
        }
        ,{
          key: 'team_name',
          sortable: true
        },
        {
          key: 'teamlogo',
          sortable: false
        }
      ],
      fields_players:[
        {
          key:'id',
          thClass: 'd-none',
          tdClass: 'd-none'
        },
        {
          key:'team_id',
          thClass: 'd-none',
          tdClass: 'd-none'
        }
        ,{
          key: 'player_name',
          sortable: true
        },
        {
          key: 'playerImage',
          sortable: false
        },
        {
          key: 'position',
          sortable: false
        },
          {
            key: 'teamName',
            sortable: false
          }
      ],
      items_teams:[],
      items_players:[]

    };
  },
  methods:{
    async search(){
      console.log("clickkkkkkkkkkkkkkk");
      console.log(this.selected);
      this.showPlayers = false;
      this.boolNoPlayers = false;
      this.showTeam = false;
      this.items_players = [];
      this.items_teams = [];
      try{
          if(this.selected == "Players"){
              this.showPlayers = true;
              if(this.selected_filter == "None"){
                  var response = await this.axios.get(
                 `http://localhost:3000/players/SearchPlayer/${this.searchQuery}`);
                   console.log(response.data);
              }
              else if(this.selected_filter == "Position"){
                console.log(this.selectedPosition)
                  var response = await this.axios.get(
                 `http://localhost:3000/players/FilterByPositionId/${this.searchQuery}/${this.selectedPosition}`);
              }
              else if(this.selected_filter== "Team"){
                      console.log(this.selectedPosition)
                  var response = await this.axios.get(
                 `http://localhost:3000/players/FilterByTeamName/${this.searchQuery}/${this.TeamInput}`);
              }
              this.items_players = [];
              for( let i=0;i<response.data.length;i++){
                console.log(response.data[i]);
                  this.items_players.push({
                    id : response.data[i].player_id,
                    player_name : response.data[i].name,
                    teamName :response.data[i].team_name,
                    playerImage : response.data[i].image,
                    position : response.data[i].position,
                    team_id : response.data[i].team_id
                  })
              }
              if(this.items_players.length == 0){
                this.boolNoPlayers = true;
              }
          }

          else if (this.selected == "Teams"){
            console.log("Teams searchhhhhhhhhh");
            const response = await this.axios.get(
          `http://localhost:3000/teams/SearchTeam/${this.searchQuery}`);
          console.log(response.data);
          if(response.data.length > 0 ){
              // console.log("hereeeeeeeeeeeeeeeeeee");
              // this.team_name = response.data[0].teamName;
              // this.teamlogo = response.data[0].teamLogo;
              // console.log(this.team_name);
              // console.log(this.teamlogo);
              this.showTeam = true;
              this.items_teams=[];
              for( let i=0;i<response.data.length;i++){
                console.log(response.data[i]);
                  this.items_teams.push({
                    id : response.data[i].id,
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