<template>
  <div class="container" :style= image>
    <h1 class="title">Main Page</h1>
    <LoginPage v-if="!$root.store.username"></LoginPage>
    <FavoriteGames v-else></FavoriteGames>
    <LeagueInfo></LeagueInfo>
  </div>
</template>

<script>
import LeagueInfo from "../components/League/LeagueInfo";
import FavoriteGames from "../components/Matches/FavoriteGames";
import LoginPage from "../pages/LoginPage";
export default {
  components: {
    LeagueInfo, 
    LoginPage, 
    FavoriteGames},
  data(){
      return {
        image: {
          backgroundImage:"url(https://c4.wallpaperflare.com/wallpaper/593/957/270/background-mesh-football-sport-wallpaper-preview.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto"
          }
      }
    }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

</style>
