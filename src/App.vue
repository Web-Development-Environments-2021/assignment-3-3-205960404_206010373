<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="{ name: 'main' }">Superliga Main</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
        <b-nav-item :to="{ name: 'currentstage' }">Current Stage</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
        <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="!$root.store.username">
        <!-- <b-navbar-nav class="ml-auto"> -->
          <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
          <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
          <!-- <b-nav-item :to="{ name: 'personal' }">Personal</b-nav-item> -->
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
        <!-- <b-navbar-nav v-if="!$root.store.username" > -->
        <b-nav-item-dropdown right>
          <template #button-content>
            Personal
          </template>
          <b-dropdown-item :to="{ name: 'myteams' }">My Teams</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'myplayers' }">My Players</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'mymatches' }">My Matches</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav v-if="$root.store.username">
        <b-nav-item-dropdown right >
          <template #button-content>
            {{$root.store.username}}
          </template>
          <b-dropdown-item href="#">Favorites</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout()" >Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav v-if="!$root.store.username">
          <b-nav-item >Hello, Guest </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-if="$root.store.username">
          <b-nav-item >Hello, {{$root.store.username}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    async logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      try{
        console.log("logout");
          const response = await axios.post(
            "http://localhost:3000/logout"); 
             console.log(response); 
      }
      
      catch (err){
        console.log(response);
      }
      // axios.defaults.withCredentials = false;
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
