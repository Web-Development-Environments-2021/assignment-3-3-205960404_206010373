<template>

<div id="wrapper" :style= image>
  <div id="left">
    <LeagueInfo ></LeagueInfo>
  </div>
  <div id="right">
    <LoginPage v-if="!$root.store.username" ></LoginPage>
    <favoriteGamesMainPage v-else > </favoriteGamesMainPage>
  </div>
</div>

  <!-- <div class="container" :style= image>
    <h1 class="title">Main Page</h1>
    <! <LoginPage v-if="!$root.store.username"></LoginPage> -->
    <!-- <FavoriteGames v-else></FavoriteGames> -->
     <!-- <FavoriteGames ></FavoriteGames> -->
    <!-- <LeagueInfo></LeagueInfo> -->
  <!-- </div> -->
</template>

<script>
import LeagueInfo from "../components/League/LeagueInfo";
import favoriteGamesMainPage from "../components/Matches/favoriteGamesMainPage";
import LoginPage from "../pages/LoginPage";
export default {
  components: {
    LeagueInfo, 
    LoginPage,
    favoriteGamesMainPage 
    },
  data(){
      return {
        image: {
          backgroundImage:"url(https://wallpapercave.com/wp/wp5254013.jpg)",
          backgroundRepeat: "no-repeat",
          //backgroundRepeat: "no-repeat"
          backgroundSize: "100% auto"
          },
          componentKey: true,
      }
    },
    methods: {
    forceRerender() {
      this.componentKey += 1;
      this.$children.LeagueInfo.$forceUpdate();
    },
    mounted() {
      console.log("@#%@#%$@#$#@#$#");
      forceRerender();
    },
  }
};
</script>

<style lang="scss" scoped>

.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
#wrapper {
  display: flex;
  height: 100vh;
}

#left {
  flex: 0 0 65%;
  display:inline-block;
  text-align:center;
  
 
}

#right {
  flex: 1;
  display:inline-block;
  text-align:center;
}

</style>
