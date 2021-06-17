<template>
  <div class="team-details">
    <div :title="id" class="team-title">
      <b>Team Id:</b> {{ id }}
    </div>
    <ul class="team-content">
      <li> name: {{ name }}</li>
      <li> coach: {{ coach }}</li>
      <li> logopath: {{ logopath }}</li>
      <li> players: {{ players }}</li>
      <li> Past Matches: {{ pastMatches }}</li>
      <li> Future Matches: {{ futureMatches }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TeamDetails",
  props: {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      coach: {
        type: String,
        required: true
      },
      logopath: {
        type: String,
        required: true
      },
      players: {
        type: Array,
        required: true
      },
      pastMatches: {
        type: Array,
        required: true
      },
      futureMatches: {
        type: Array,
        required: true
      }

  }, 
  mounted(){
    console.log("player preview mounted")
  } 
};
</script>

<style>
.team-details {
  display: inline-block;
  width: 250px;
  height: 200px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.team-details .team-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.team-details .team-content {
  width: 100%;
  overflow: hidden;
}
</style>
