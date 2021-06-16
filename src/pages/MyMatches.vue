<template>
   <div>
   <!-- <FavoriteGames :fields="fields"
   :items="items"></FavoriteGames> -->
   <FavoriteGames ></FavoriteGames>
   </div>
</template>

<script>
import FavoriteGames from "../components/Matches/FavoriteGames.vue";
 export default {
  components: {FavoriteGames},
  
    data() {
     
      return {
        fields: ['away_team', 'show_details'],
        items: [
          {  }
        ],

        fields_future: ['away_team', 'show_details'],
        items_future: [
          {  }
        ]
      }
    },
  mounted(){
    console.log("FavoriteGames mounted");
  
  }


  }
</script>

<style>

</style>