<template>
 <div>
   <pastMatches :fields="fields"
   :items="items">
     
   </pastMatches>
   </div>
</template>

<script>
import pastMatches from "../components/Matches/pastMatches.vue";
 export default {
  components: { pastMatches },
  
    data() {
      // let temp = importPastMatches();
      // return {
      //   fields : temp.fields,
      //   items: temp.items
      // }
      return {
        fields: ['home_team', 'away_team', 'show_details'],
        items: [
          { isActive: true, age: 40, home_team: 'Dickerson', away_team: 'Macdonald' },
          { isActive: false, age: 21, home_team: 'Larsen', away_team: 'Shaw' },
          {
            isActive: false,
            age: 89,
            home_team: 'Geneva',
            away_team: 'Wilson'
          },
          { isActive: true, age: 38, home_team: 'Jami', away_team: 'Carney' }
        ]
      }
    },
    methods: {
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
        // console.log(response);
        // let i =0;
        // this.pastMatches.items = [];
        // response.data.forEach(function(match) {
        //     console.log(match.Date);
        //     this.pastMatches.items.push({
        //         home_team: "dvir",
        //         away_team: "liad", 
        //         date: match.Date,
        //         hour: match.Hour
        //     })
        // })
      
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    }
  }, 
  mounted(){
    console.log("Past Games mounted");
    this.importPastMatches(); 
  }


  }
</script>

<style>

</style>