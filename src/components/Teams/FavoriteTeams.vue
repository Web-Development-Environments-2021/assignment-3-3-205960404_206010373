
<template>
 <div>
   <h1>Your Favorite Teams are:</h1>
    <b-table striped hover :fields="fields" :items="items">
      <template v-slot:cell(team_id)="data">
      <router-link :to="{ name: 'TeamPage', params: {teamID: data.value} }">{{ data.value }}</router-link>
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
      console.log("response liiiiiiiiiiiiad");
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/favoriteTeams"
        );
        this.fields = [ "logo","team_id","teamName","button"];
        console.log("im here teams nowww");
        console.log(response);
        const favTeams = response.data;
        console.log(favTeams)
        this.items = [];
        this.items.push(...favTeams);

        console.log(response);
      } catch (error) {
        console.log("error in favTeams")
        console.log(error);
      }
    },
    async delTeamFav(team_id2){
      console.log("*******delTeamFav*******");
      console.log(team_id2.toString());
      try{
      const response = await this.axios.delete(
          "http://localhost:3000/users/favoriteTeams",
          {
            data:{team_id: team_id2}
          }
        );
        console.log(response);
        console.log("queen")}
      catch (error){
        console.log(error);
      }
    }
  },
  mounted(){
    console.log("favorite players mounted");
    this.FavoritePlayers(); 
  }
};
</script>

<style></style>
