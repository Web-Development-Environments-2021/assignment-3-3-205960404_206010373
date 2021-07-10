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
      try{
      const response = await this.axios.post(
          "http://localhost:3000/users/favoritePlayers",
          {
            player_id: player_id2
          }
        );
        this.$root.toast("favoritePlayer", "The Player was successfully added as favorite", "success");
       
    } catch (error) {
     
    }},

  },
  mounted(){
    
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
  background-color: black;
}

.player-preview .player-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.player-preview .player-content {
  width: 100%;
  overflow: hidden;
  border-width: 0ch;
  border-color: black;
}
.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
    background-color: black;
    
}

b {
    color: #007bff;
}
</style>
