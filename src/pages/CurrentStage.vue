
<template>
 <div class="currstage">
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
      this.fields=  ['HomeTeamID','AwayTeamID','home_team', 'away_team', 'show_details'];
      this.items = [];
      this.fields_future = ['HomeTeamID','AwayTeamID','home_team', 'away_team', 'show_details'];
      this.items_future = [];
      return {
        fields: [{ key: 'HomeTeamID',
          thClass: 'd-none',
          tdClass: 'd-none'
        },{ key: 'AwayTeamID',
          thClass: 'd-none',
          tdClass: 'd-none'
        },,'home_team', 'away_team', 'show_details'],
        items: [
          {  }
        ],

        fields_future: [{ key: 'homeID',
          thClass: 'd-none',
          tdClass: 'd-none'
        },{ key: 'awayID',
          thClass: 'd-none',
          tdClass: 'd-none'
        },
        'home_team', 'away_team', 'show_details'],
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
        this.items_future = [];
        this.items_future.push(...games2);
      } catch (error) {
       
      }
    },
      async importPastMatches(){
      
      try {
        const response = await this.axios.get(
          "http://localhost:3000/matches/pastMatches",
        );
        const games = response.data;
        
        this.items = [];
        this.items.push(...games);     
      
      } catch (error) {
      }
    }

  },
  mounted(){
    this.importPastMatches(); 
    this.importFutureMatches();

  
  }


  }
</script>

<style>
.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #b8daff;
    text-align: center;
}

.h1{
  text-align: center;
}
</style>