
<template>
 <div>
     <h1>Your Favorite Players are:</h1>
    <b-table striped hover :fields="fields" :items="items">
      <template v-slot:cell(name)="data">
      <router-link :to="{ name: 'PersonalPage', params: {playerID: data.item.player_id } }">{{ data.value }}</router-link>
    </template>
    
     <template v-slot:cell(image)="data">
       <img :src="data.value" height="70px">
     </template>
     <template #cell(button)="row"> 
        <b-button @click="delPlayerFav(row.item.player_id)">Remove Player From Favorites </b-button>
    </template>
      

    </b-table>
  </div>
</template>

<script>

export default {
  name: "FavoritePlayers",
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
          "http://localhost:3000/users/favoritePlayers"
        );
        this.fields = ["image","player_id", "name",  "position", "team_name", "button"];
        console.log("im here players nowww");
        console.log(response);
        const favPlayers = response.data;
        console.log(favPlayers)
        this.items = [];
        this.items.push(...favPlayers);
        // this.$root.toast("favoritePlayers", "The Player was successfully added as favorite", "success");
        console.log(response);
      } catch (error) {

        console.log(error);
      }},
       async delPlayerFav(player_id2){
      console.log("*******delPlayerFav*******");
      console.log(player_id2.toString());
      try{
      const response = await this.axios.delete(
          "http://localhost:3000/users/favoritePlayers",
          {
            data:{player_id: player_id2}
          }
        );
         this.$root.toast("favoritePlayers", "The Player was successfully deleted as favorite", "success");
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
