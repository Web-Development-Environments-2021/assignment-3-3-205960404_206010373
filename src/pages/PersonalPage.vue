<template>
  <div class = "details">
      <b-card-text>
        <div align = "center">
            <router-link :to="{ name: 'personalPage', params: { player_id: player_id } }"><img :src=image > </router-link>
        </div>
       <div align = "center">
         <br/>
        <h5> Player id: {{ player_id }} <br/>
        Name: {{ name }} <br/>
        Position: {{ position }} <br/>
        Team Name: {{ team_name }} <br/>
        Common Name: {{ common_name }} <br/>
        Nationality: {{ nationality }} <br/>
        Birth Date: {{ birthdate }} <br/>
        Birth Country: {{ birthcountry }}<br/>
        Height: {{ height }} <br/>
        Weight: {{ weight }} <br/> </h5>
        </div>
      </b-card-text>
  </div>
</template>

<script>

export default {
  name: "personalPage",
  data() {
      this.player_id= 0;
      this.name= "";
      this.image= "";
      this.position= 0;
      this.team_name= "";
      this.common_name= "";
      this.nationality= "";
      this.birthdate= "";
      this.birthcountry= "";
      this.height= "";
      this.weight= "";
    return {
      player_id: 0,
      name: "",
      image: "",
      position: 0,
      team_name: "",
      common_name: "",
      nationality: "",
      birthdate: "",
      birthcountry: "",
      height: "",
      weight: "",
    };
  },
  methods: {
    async getPlayerDetails() {
        try {
            console.log("PPPPPPPPPPPPPPPPPPPPP")
            console.log(this.$route.params);
            const response = await this.axios.get(
            `http://localhost:3000/players/Details/${this.$route.params.playerID}`
            );
            console.log("lllllllllllllllllllllllllllllllllllllllllllllllllllllllll")
            console.log(response.data);
            console.log(response.data.playerPreview.player_id);
            this.player_id = response.data.playerPreview.player_id;
            this.name = response.data.playerPreview.name;
            this.image = response.data.playerPreview.image;
            this.position = response.data.playerPreview.position;
            this.team_name = response.data.playerPreview.team_name;
            this.common_name = response.data.common_name;
            this.nationality = response.data.nationality;
            this.birthdate = response.data.birthdate;
            this.birthcountry = response.data.birthcountry;
            this.height = response.data.height;
            this.weight = response.data.weight;

        } catch (error) {
        console.log(error.response);
        }
    },
  },
  mounted(){
    this.getPlayerDetails(); 
  }
};
</script>

<style>
.details {
  display: inline-block;
  width: 450px;
  height: 480px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto

}
h5 {
  font-family: cursive;
}
</style>