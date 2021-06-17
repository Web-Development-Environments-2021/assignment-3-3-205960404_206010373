<template>
   <div>
   <FavoritePlayers></FavoritePlayers>
   </div>
</template>

<script>
import FavoritePlayers from "../components/Players/FavoritePlayers.vue";
 export default {
  components: {FavoritePlayers},
  
    data() {
     
      return {
        fields: ['player_id', 'name', 'image', 'position', 'team_name'],
        items: [
          {  }
        ],
      }
    },
  mounted(){
    console.log("Favorite Players mounted");
    }
}
</script>

<style>

</style>