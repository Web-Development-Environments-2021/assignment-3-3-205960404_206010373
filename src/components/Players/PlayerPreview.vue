<template>
  <div class="player-preview">
    <b-card>
      <b-card-text>
         <div>
           <img :src=image>
          </div>
          <div>
              <b>Full Name:</b><router-link :to="{ name: 'PersonalPage', params: { playerID: player_id } }"> {{ name }}</router-link>
          </div>
      
    <div :title="id" class="player-title">
      <b>Player Id:</b> {{ player_id }}
    </div>
    <ul class="player-content">
      <!-- <li> name: {{ name }}</li> -->
      <!-- <li> image: {{ image }}</li> -->
      <li> Position: {{ position }}</li>
      <li> Team: {{ team_name }}</li>
    </ul>
    <br>
      </b-card-text>
    </b-card>
    <div>
        <b-button @click="addPlayerFav(player_id)">Add Player to Favorites</b-button>
  </div>
  </div>


</template>
<script>
export default {
  name: "PlayerPreview",
  props: {
      player_id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      position: {
        type: Number,
        required: true
      },
      team_name: {
        type: String,
        required: true
      }
  }, 
  methods: {
     async addPlayerFav(player_id2){
      console.log("*******AddPlayerFav*******");
      console.log(player_id2.toString());
      try{
      const response = await this.axios.post(
          "http://localhost:3000/users/favoritePlayers",
          {
            player_id: player_id2
          }
        );
        this.$root.toast("favoritePlayer", "The Player was successfully added as favorite", "success");
        console.log(response);
        console.log("player was added liad");
    } catch (error) {
      console.log(error.message);
      console.log("error in addind player to fav")
    }},

  },
  mounted(){
    console.log("player preview mounted")
  } 
};
</script>

<style>


.player-preview {
  display: inline-block;
  width: 250px;
  height: 550px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.player-preview .player-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.player-preview .player-content {
  width: 100%;
  overflow: hidden;
}
</style>
