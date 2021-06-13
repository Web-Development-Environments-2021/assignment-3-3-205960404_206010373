<template>
  <div :style= image>
    <h4>Hi, we are Liad Segev and Dvir Rainisch <br>
      we are third year students in the Department of Information Systems. <br>
      This project was done as part of the course Web-Development-Environments <br>
      In this Project we build a football Manegmet System. <br>
      As part of the Project we built the Backend side as well as the Frontend side.<br>
      for this project we learned JavaScript and Vue.<br>
    </h4>
  </div>
</template>

<script>
export default {
data(){
      return {
        image: {
          backgroundImage:"url(https://c4.wallpaperflare.com/wallpaper/593/957/270/background-mesh-football-sport-wallpaper-preview.jpg)",
          backgroundSize: "10% auto"
          }
      }
    }
}
</script>

<style>

</style>