
<template>
 <div>
     <h1>Your Favorite Players are:</h1>
    <b-table striped hover :fields="fields" :items="items">
      <template v-slot:cell(player_id)="data">
      <router-link :to="{ name: 'PersonalPage', params: {playerID: data.value } }">{{ data.value }}</router-link>
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

        console.log(response);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    },
    

  }, 
  mounted(){
    console.log("favorite players mounted");
    this.FavoritePlayers(); 
  }
};
</script>

<style></style>
