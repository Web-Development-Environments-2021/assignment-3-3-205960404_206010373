
<template>
 <div>
   <h1>Your Favorite Teams are:</h1>
    <b-table striped hover :fields="fields" :items="items">
      <template v-slot:cell(teamName)="data">
      <router-link :to="{ name: 'TeamPage', params: {teamID: data.item.team_id} }">{{ data.value  }} </router-link>
    </template>
  
    <template #cell(button)="row"> 
        <b-button @click="delTeamFav(row.item.team_id)">Remove Team From Favorites </b-button>
    </template>
    <template v-slot:cell(logo)="data">
    <img :src="data.value" height="70px">
     </template>
    </b-table>
  </div>
</template>

<script>

export default {
  name: "FavoriteTeams",
  data() {
    return {
    };
  },
   props: {
      fields: {
        type: Array,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
  }, 
  methods: {
    async FavoritePlayers(){
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/favoriteTeams"
        );
        this.fields = [ "logo","team_id","teamName","button"];
        const favTeams = response.data;
        this.items = [];
        this.items.push(...favTeams);
      } catch (error) {
        
      }
    },
    async delTeamFav(team_id2){
      try{
      const response = await this.axios.delete(
          "http://localhost:3000/users/favoriteTeams",
          {
            data:{team_id: team_id2}
          }
        );
        this.$root.toast("favoriteTeams", "The Team was successfully deleted as favorite", "success");}
      catch (error){
      }
    }
  },
  mounted(){
    this.FavoritePlayers(); 
  }
};
</script>

<style></style>
