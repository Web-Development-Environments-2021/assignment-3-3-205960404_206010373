
<template>
 <div>
    <b-table striped hover :items="items"></b-table>
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
    }
  }, 
  mounted(){
    console.log("favorite players mounted");
    this.FavoritePlayers(); 
  }
};
</script>

<style></style>
