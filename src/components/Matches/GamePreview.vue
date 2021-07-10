<template>
  <div class="game-preview">
    <div :title="id" class="game-title">
      <b>Game Id:</b> {{ id }}
    </div>
    <ul class="game-content">
      <li> Home Team: {{ hostTeam }}</li>
      <li> Away Team: {{ guestTeam }}</li>
      <li> Date: {{ date }}</li>
      <li> Time: {{ hour }}</li>
      <li> Stadium: {{ stadium }}</li>
    </ul>
  </div>

  
</template>

<script>
export default {
  name: "GamePreview",
  props: {
      id: {
        type: Number,
        required: true
      },
      hostTeam: {
        type: String,
        required: true
      },
      guestTeam: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      hour: {
        type: String,
        required: true
      },
      stadium:{
        type: String,
        required: true
      }
  }, 
  mounted(){
    console.log("game preview mounted")
  } 
};
</script>

<style>
.game-preview {
  display: inline-block;
  width: 250px;
  height: 200px;
  position: relative;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
  font-family:cursive
}

.game-preview .game-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
  margin-top: 15px;
}

.game-preview .game-content {
  width: 100%;
  overflow: hidden;
}



</style>
