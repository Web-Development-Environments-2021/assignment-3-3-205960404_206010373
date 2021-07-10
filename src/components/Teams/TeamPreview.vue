
<template>
  <div class="team-details">
    <b-card>
      <b-card-text>
      <div>
      <img :src=logopath>
      </div>
      <div >
        <b>Team Name:</b><router-link :to="{ name: 'TeamPage', params: { id: id } }"> {{ name }}</router-link>
      </div>
      <div>
      <b>Team ID:</b> {{ id }}
      </div>
    </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "TeamPreview",
  props: {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      logopath: {
        type: String,
        required: true
      },
  }, 
  mounted(){
  } 
};
</script>

<style>
.team-details {
  display: inline-block;
  width: 250px;
  height: 250px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
  text-align: center;

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

b {
    color: #007bff;
}

</style>
