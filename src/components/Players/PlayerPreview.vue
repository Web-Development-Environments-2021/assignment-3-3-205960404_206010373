<template>
  <div class="player-preview">
    <b-card>
      <b-card-text>
         <div>
            <router-link :to="{ name: 'personalPage', params: { player_id: player_id } }"><img :src=image> </router-link>
          </div>
          <div>
              <router-link :to="{ name: 'personalPage', params: { player_id: player_id } }"><b>Full Name:</b> {{ name }}</router-link>
          </div>
      
    <div :title="id" class="player-title">
      <b>Player Id:</b> {{ player_id }}
    </div>
    <ul class="player-content">
      <li> name: {{ name }}</li>
      <li> image: {{ image }}</li>
      <li> position: {{ position }}</li>
      <li> team_name: {{ team_name }}</li>
    </ul>
    <br>
      </b-card-text>
    </b-card>
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
