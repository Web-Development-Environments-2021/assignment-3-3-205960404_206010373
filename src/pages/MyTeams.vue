<template>
   <div>
   <FavoriteTeams></FavoriteTeams>
   </div>
</template>

<script>
import FavoriteTeams from "../components/Teams/FavoriteTeams.vue";
 export default {
  components: {FavoriteTeams},
  
    data() {
     
      return {
        fields: ['teamName', 'logo'],
        items: [
          {  }
        ],
      }
    },
  mounted(){
    console.log("Favorite Teams mounted");
    }
}
</script>

<style>
.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #b8daff;
}
</style>