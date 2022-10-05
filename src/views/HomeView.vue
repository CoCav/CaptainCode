<template>
  <section class="row mt-2">
    <div class="col-md-12 col-lg-7 content-container">
      <div>
        <div class="content-title">
          <span class="vertical-line"></span>
          <h2>
            Bienvenue sur votre application d'anti-sèches en
            <span>Développement Web !</span>
          </h2>
        </div>
        <p>
          Sauvegarder et enregistrer tout ce dont vous avez besoin pour une meilleure compréhension du Web !
        </p>
      </div>
      <div class="container-search">
        <div class="search">
          <input type="text" placeholder="Entrer votre recherche"/>
          <i class="bi bi-search"></i>
        </div>
        <button>Explorer</button>
      </div>
    </div>

    <div class="col-md-12 col-lg-5">
      <img
        src="@/assets/images/home2.svg"
        alt="Illustration d'une personne qui apprend à programmer"
      />
    </div>
  </section>
  <section class="row mt-5">
    <h3 class="col-12 text-center mb-0">Vous recherchez une <span>thèmatique</span> en particulier ?</h3>
    <div class="container-tag">
      <div v-for="tag, index in tagList" :key="index" :class="{ active : tag === buttonActive}">
        <button class="btn-tag" @click="filterClick(tag)">{{ tag }}</button>
      </div>
    </div>
    <div class="separator-horizontal"></div>
  </section>

  <section class="row mt-4">
    <div class="col d-flex justify-content-between align-items-center mb-4 content-title-list">
      <h3 class="mb-0">Votre <span>Super</span> Liste</h3>
      <div>
        <button class="btn-refresh" @click="refresh">
          <i class="bi bi-arrow-clockwise"></i>Recharger
        </button>
      </div>
    </div>
    <div class="container-site-list">
       <site-description
      v-for="(site, index) in filterTagSite"
      :key="index"
      :id="site.id"
      :name="site.name"
      :url="site.url"
      :description="site.description"
      :tags="site.tags"
      @filterClick="filterClick"
      :now="site.now"
      @delete="deleteSite"
    >
    </site-description>
    </div>
  </section>
</template>

<script>
import SiteDescription from "@/components/SiteDescription.vue";

export default {
  name: "App",
  components: {
    SiteDescription,
  },
  data() {
    return {
      siteList: [],
      tagList: [],
      tag: "",
      buttonActive: null
    };
  },

  created() {
    this.loadSite();
  },

  computed: {
    filterTagSite() {
      if (this.tag) {
        return this.siteList.filter((item) => {
          if (item.tags) {
            return item.tags.includes(this.tag);
          }
        });
      } else {
        return this.siteList;
      }
    },
  },

  created() {
    this.loadSite();
  },

  methods: {
    loadSite() {
      fetch(
        "https://captaincode-e61ec-default-rtdb.firebaseio.com/sites.json"
      )
        .then((response) => {
          console.log("response", response);
          return response.json();
        })
        .then((data) => {
          this.siteList = data;

          let sites = [];

          for (const key in data) {
            const site = {
              id: key,
              now: data[key].now,
              name: data[key].name,
              description: data[key].description,
              tags: data[key].tags,
              url: data[key].url,
            };

            sites.push(site);

            this.siteList = sites.reverse();

            sites.map((site) => {
              if (site.tags) {
                site.tags.map((tag) => {
                  if (!this.tagList.includes(tag)) {
                    this.tagList.push(tag);
                  }
                });
              }
            });
          }
        })
        .catch((error) => console.log("error", error));
    },
    deleteSite(id) {
      if (
        confirm(
          'Attention, vous allez supprimer ce lien ! Cliquer sur le bouton "Ok" pour continuer ! '
        )
      ) {
        fetch(
          `https://captaincode-e61ec-default-rtdb.firebaseio.com/sites/${id}.json`,
          {
            method: "DELETE",
          }
        )
          .then(() => this.loadSite())
          .catch((error) => console.log("error", error));
      }
    },

    filterClick(tag) {
      this.tag = tag;
      this.buttonActive = tag
    },

    refresh() {
      window.location.reload();
    },
  },
};
</script>

<style scoped>

.active button {
  background-color: #ff0031;
  border: 1px solid #ff0031;
  color: #ffffff;
}
.content-title-list {
  padding: 0 14px;
}
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content-title {
  display: flex;
}
.vertical-line {
  background-color: #ff0031;
  width: 5px;
  height: 80px;
  margin-right: 20px;
}

h2 {
  font-size: 32px;
  font-weight: 600;
}

h2 > span {
  color: #ff0031;
}

p {
  padding-left: 24px;
  margin-top: 8px;
}

.container-search {
  margin-top: 32px;
  display: flex;
  width: 92%;
}
.search {
  width: 80%;
  position: relative;
  margin-right: 16px;
}

.search input {
  width: 100%;
  padding: 11px 14px 11px 42px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #bdbdbd;
  border-radius: 4px;
}
.search i {
  font-size: 17px;
  position: absolute;
  left: 16px;
  top: 11px;
  color: #bdbdbd;
}
.search input::placeholder {
  color: #bdbdbd;
  font-family: "Raleway", sans-serif;
}
.search input:hover, .search input:focus {
   box-shadow: 0 0 0 0.3rem rgba(255, 0, 49, 0.2);
  border: 1px solid #ff0031;
}
.container-search button {
  font-family: "Raleway", sans-serif;
  padding: 10px 16px;
  border: 1px solid #0d0c22;
  border-radius: 4px;
  color: #ffffff;
  background-color: #0d0c22;
}
.container-search button:hover {
  background-color: #ff0031;
  border: 1px solid #ff0031;
}

h3 {
  font-weight: 500;
}

h3 span {
  color: #ff0031;
}
.container-tag {
  margin-top: 48px;
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.btn-tag {
  font-family: "Raleway", sans-serif;
  color: #0d0c22;
  text-transform: uppercase;
  font-size: 16px;
  border-radius: 200px;
  width: auto;
  padding: 8px 16px;
  border: 1px solid #0d0c22;
  background-color: #ffffff;
  margin-right: 24px;
  margin-bottom: 16px;
}
.btn-tag:hover {
  background-color: #ff0031;
  border: 1px solid #ff0031;
  color: #ffffff;
}
.btn-refresh {
  font-family: "Raleway", sans-serif;
  color: #fff;
  background-color: #0d0c22;
  border: 1px solid #0d0c22;
  border-radius: 6px;
  padding: 6px 8px;
}
.btn-refresh i {
  margin-right: 8px;
  font-size: 17px;
}
.bi-arrow-clockwise::before {
  transform: rotate(70deg);
}
.btn-refresh:hover {
  background-color: #ff0031;
  border: 1px solid #ff0031;
}
.separator-horizontal {
  margin-top: 48px;
  margin-bottom: 48px;
  width: 100%;
  height: 2px;
  background-color: #f3f3f4;
}
.container-site-list {
  margin: 32px 0;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 40px;
}
</style>
