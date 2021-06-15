
<template>
 <div>
   <div>
   <pastMatches :fields="fields"
   :items="items">
     
   </pastMatches>
    </div>
    <div>
   <futureMatches :fields="fields_future"
   :items="items_future">
     
   </futureMatches>
    </div>
   </div>
</template>

<script>
import futureMatches from "../components/Matches/futureMatches.vue";
import pastMatches from "../components/Matches/pastMatches.vue";
 export default {
  components: { pastMatches, futureMatches },
  
    data() {
     
      return {
        fields: ['home_team', 'away_team', 'show_details'],
        items: [
          {  }
        ],

        fields_future: ['home_team', 'away_team', 'show_details'],
        items_future: [
          {  }
        ]
      }
    },
  mounted(){
    console.log("Past Games mounted");
  
  }


  }
</script>

<style>

</style>