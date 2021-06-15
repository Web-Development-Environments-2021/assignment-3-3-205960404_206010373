
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
   <h1> FavoriteGames </h1>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>

      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Date:</b></b-col>
            <b-col>{{ row.item.date }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Hour:</b></b-col>
            <b-col>{{ row.item.hour }}</b-col>
          </b-row>
          

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
// import GamePreview from "./GamePreview.vue";
export default {
  name: "FavoriteGames",
  // components: {
  //   GamePreview
  // }, 
  // data() {
  //   return {
  //     games: [
  //       {
  //         id:25,
  //         hostTeam: "Maccabi Tel-Aviv",
  //         guestTeam: "Hapoel Beer-Sheva",
  //         date: "27/5/21",
  //         hour: "20:00"
  //       },
  //       {
  //         id:39,
  //         hostTeam: "Hapoel Tel-Aviv",
  //         guestTeam: "Maccabi Haifa",
  //         date: "29/5/21",
  //         hour: "20:00"
  //       }
  //     ]
  //   };
  // },
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
        console.log(response);
        const favMatches = response.data;
        console.log(favMatches)
        this.favMatches = [];
        this.favMatches.push(...favMatches);
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
