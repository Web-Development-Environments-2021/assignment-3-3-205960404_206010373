<template>
 <div>
   <div>
   <pastMatches :fields="fields"
   :items="items">
     
   </pastMatches>
    </div>
    <div>
   <futureMatches :fields="fields2"
   :items="items2">
     
   </futureMatches>
    </div>
   </div>
</template>

<script>
import pastMatches from "../components/Matches/pastMatches.vue";
import futureMatches from "../components/Matches/futureMatches.vue";
 export default {
  components: { pastMatches, futureMatches },
  
    data() {
      // let temp = importPastMatches();
      // return {
      //   fields : temp.fields,
      //   items: temp.items
      // }
      return {
        fields: ['home_team', 'away_team', 'show_details'],
        items: [
          {  },
          {  },
          {
   
          },
          {  }
        ],

        fields2: ['home_team', 'away_team', 'show_details'],
        items2: [
          {  },
          {  },
          {
            
          },
          {  }
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

        const response2 = await this.axios.get(
          "http://localhost:3000/matches/futureMatches",
        );
        const games2 = response2.data;
        console.log(games2);
        this.items2 = [];
        this.items2.push(...games2);
        console.log("futureeeeeeeeeeeeeee");

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