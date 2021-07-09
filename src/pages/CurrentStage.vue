
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
import futureMatches from "../components/Matches/futureMatches";
import pastMatches from "../components/Matches/pastMatches";
 export default {
  components: { pastMatches, futureMatches },
  
    data() {
      this.fields=  ['home_team', 'away_team', 'show_details'];
      this.items = [];
      this.fields_future = ['home_team', 'away_team', 'show_details'];
      this.items_future = [];
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
    methods:{
       async importFutureMatches(){
      try {

        const response2 = await this.axios.get(
          "http://localhost:3000/matches/futureMatches",
        );
        const games2 = response2.data;
        console.log(games2);
        this.items_future = [];
        this.items_future.push(...games2);
       

     
      
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    },
      async importPastMatches(){
      console.log("importPastMaatches");
      try {
        const response = await this.axios.get(
          "http://localhost:3000/matches/pastMatches",
        );
        const games = response.data;
        console.log(games);
        this.items = [];
        this.items.push(...games);     
      
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    }

  },
  mounted(){
    console.log("Past Games mounted");
    this.importPastMatches(); 
    this.importFutureMatches();

  
  }


  }
</script>

<style>

</style>