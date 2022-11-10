<template>
<div class="container mt">
  <section class="row">
    <div class="col-12 d-flex justify-content-center">
      <img
        src="@/assets/images/add2.svg"
        alt="Illustration de personnes qui codent"
      />
    </div>
    <div class="col-12 d-flex justify-content-center">
      <span class="vertical-line"></span>
      <div>
        <h2>Ajouter un <span>site</span> aux antisèches</h2>
        <p>
          Veuillez remplir le formulaire ci-dessous pour pouvoir ajouter un site
          au répertoire déjà existant.<br />Le champ muni d'un * est
          obligatoire.
        </p>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center">
      <add-site @add-site="addSite"></add-site>
    </div>
  </section>
</div>

</template>

<script>
import AddSite from "@/components/AddSite.vue";

export default {
  name: "App",
  components: {
    AddSite,
  },
  data() {
    return {
      siteList: [],
    };
  },
  created() {
    this.loadSite();
  },

  methods: {
    addSite(site) {
      fetch(
        "https://captaincode-5220d-default-rtdb.firebaseio.com/sites.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(site),
        }
      )
        .then(() => this.loadSite())
        .catch((err) => console.log(err));
    },

    loadSite() {
      fetch(
        "https://captaincode-5220d-default-rtdb.firebaseio.com/sites.json"
      )
        .then((response) => {
          console.log("response", response);
          return response.json();
        })
        .then((data) => {
          this.siteList = data;
          console.log("data", data);
        })
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<style scoped>
.vertical-line {
  background-color: #ff0031;
  width: 5px;
  height: 36px;
  margin-right: 20px;
}

img {
  width: 70%;
}

h2 {
  font-weight: 600;
  font-size: 32px;
}

span {
  color: #ff0031;
}

p {
  margin-bottom: 40px;
}
</style>
