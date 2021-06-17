
  <!-- <div>
    <GamePreview
      v-for="g in games"
      :id="g.id" 
      :hostTeam="g.hostTeam" 
      :guestTeam="g.guestTeam" 
      :date="g.date" 
      :hour="g.hour" 
      :key="g.id"></GamePreview>
  </div> -->

<template>
 <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
// import GamePreview from "./GamePreview.vue";
export default {
  name: "FavoriteGames",
  // components: {
  //   GamePreview
  // }, 
  data() {
    return {
      games: [
        {
          id:25,
          hostTeam: "Maccabi Tel-Aviv",
          guestTeam: "Hapoel Beer-Sheva",
          date: "27/5/21",
          hour: "20:00"
        },
        {
          id:39,
          hostTeam: "Hapoel Tel-Aviv",
          guestTeam: "Maccabi Haifa",
          date: "29/5/21",
          hour: "20:00"
        }
      ]
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
    async FavoriteGames(){
      console.log("response liiiiiiiiiiiiad");
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/favoriteMatches"
        );
        
       console.log("im here bitch");
        console.log(response);
        const favMatches = response.data;
        console.log(favMatches)
        this.items = [];
        var i;
        for (i = 0; i < favMatches.length; i++){
          this.items.push(...favMatches[i]);
        }
        console.log(response);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    }
  }, 
  mounted(){
    console.log("favorite games mounted");
    this.FavoriteGames(); 
  }
};
</script>

<style></style>
