<template>
  <form @submit.prevent="submitData">
    <fieldset>
      <legend>Informations</legend>
 
        <label class="label-name" for="name">Nom du site</label>
        <input
          type="text"
          placeholder="Écrire le nom du site"
          class="form-control"
          id="name"
          name="name"
          v-model.trim="name"
        />
        <span class="formInvalid" v-if="nameValidity">
          <p>Le nom du site est obligatoire</p>
        </span>
        <span class="formInvalid" v-else-if="nameValidityLength">
          <p>Le nom du site ne doit pas dépasser 255 caractères</p>
        </span>

        <label for="url">Adresse du site</label>
        <input
          type="text"
          placeholder="Écrire l'adresse url du site"
          class="form-control"
          id="url"
          name="url"
          v-model.trim="url"
        />

        <label for="description">Description</label>
        <textarea
          placeholder="Écrire une description du site"
          id="description"
          name="description"
          v-model.trim="description"
        />
        <div class="form-text">
          Pour une meilleure optimisation du répertoire, nous vous conseillons de remplir ce champ.
        </div>

        <label for="tags">Tags</label>
        <input
          type="text"
          placeholder="Écrire un ou plusieurs tag(s)"
          class="form-control"
          id="tags"
          name="tags"
          v-model.trim="tags"
        />

      <div class="container-btn-form">
        <button type="reset">Annuler</button>
        <button type="submit">Ajouter</button>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "AddSite",
  emits: ["add-site"],

  data() {
    return {
      name: "",
      url: "",
      description: "",
      tags: "",
      nameValidity: false,
      nameValidityLength: false,
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      this.nameValidity = false;
      this.nameValidityLength = false;

      if (this.name.length === 0) {
        this.nameValidity = true;
        this.formIsValid = false;
      } else if (this.name.length > 255) {
        this.nameValidityLength = true;
        this.formIsValid = false;
      }
    },
    
    submitData() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      let tagsAdded = [];

      if(this.tags != "") {

        tagsAdded = this.tags.split(" ");

      } 

      this.$emit("add-site", {
        name: this.name,
        url: this.url,
        description: this.description,
        tags: tagsAdded,
        now: new Date().toLocaleString()
      });

      this.clearForm()
    },

    clearForm() {
      this.name = "";
      this.url = "";
      this.description = "";
      this.tags = "";
    }
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0px -3px 2px rgba(40, 41, 61, 0.04),
    0px 4px 8px rgba(96, 97, 112, 0.16);
}

.formInvalid {
  margin-top: -16px;
  margin-bottom: 24px;
}
.formInvalid p {
  margin-top: -16px;
  text-align: right;
  color:#ff0031;
}

fieldset {
    border: none;
}

legend {
  display: none;
}

.label-name::after {
  content: " *";
  color: #ff0031;
}

input {
  width: 100%;
  border: 1px solid #bdbdbd;
  padding: 10px 14px;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 32px;
}

input:focus,
input:hover,
textarea:hover,
textarea:focus {
  box-shadow: 0 0 0 0.3rem rgba(255, 0, 49, 0.2);
  border: 1px solid #ff0031;
}

input::placeholder,
textarea::placeholder {
  color: #bdbdbd;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

textarea {
  padding: 10px;
  width: 100%;
  height: 100px;
  line-height: 1.5;
  border: 1px solid #bdbdbd;
  margin-bottom: 32px;
  margin-top: 8px;
  border-radius: 4px;
}

.container-btn-form {
  width: 100%;
  display: flex;
   margin-top: 38px;
}

.container-btn-form button {
  width: 100%;
  background-color: #ffff;
  border: 1px solid #0d0c22;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  height: 40px;
  border-radius: 6px;
  margin-right: 16px;
}

.container-btn-form button:first-child:hover {
  border: 1px solid #ff0031;
  color: #ff0031;
}

.container-btn-form button:last-child {
  margin-left: 16px;
  background-color: #0d0c22;
  color: #ffffff;
  margin-right: 0;
}

.container-btn-form button:last-child:hover {
  background-color: #ff0031;
  border: 1px solid #ff0031;
  color: #ffffff;
}

#siteDescription {
    margin-bottom: 8px;
}
.form-text {
  margin-top: -24px;
  margin-bottom: 32px;
}
</style>