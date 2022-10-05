<template>
  <div class="card-site">
    <div class="card-body">
      <div class="card-body-header" v-if="url">
        <a class="mb-3" :href="url" target="_blank">{{ name }}</a>
      </div>
      <div class="card-body-header" v-else>
        <p>{{ name }}</p>
      </div>
        <p class="card-description">{{ description }}</p>
      <div class="card-site-tag" v-if="tags">
        <div v-for="tag, index in tags" :key="index">
          <button @click="$emit('filterClick', tag)">
            {{ tag }}
          </button>
        </div>
      </div>

      <div class="card-site-footer">
        <p class="mb-0">Ajouté le {{ now }}</p>
        <div class="container-button">
          <button class="delete-btn" @click="$emit('delete', id)">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteDescription",

  props: {

    id: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true,
      validator: (value) => value.length > 0 || value.length <= 255
    },

    url: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    tags: {
      type: Array,
      required: false
    },

    now: {
      type: String,
      required: true
    }

  },

  $emits: ['delete', 'filterClick'],

};
</script>

<style>

.card-site {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #0D0C22;
  border-radius: 4px;
  padding: 24px;
  color: #13201f;
  background-color: #FFFFFF;
}

.card-body {
  width: 100%;
  padding: 0;
}

.card-body-header p, .card-body-header a {
  text-transform: capitalize;
  font-weight: 600;
  font-size: 20px;
}

.card-body-header a:hover {
  text-decoration: underline;
} 

.card-body-header a {
  color: #FF0031;
  margin-bottom: 16px;
}

.card-site-tag {
  display: flex;
  flex-wrap: wrap;
}

.card-site-tag div:first-child {
  display: flex;
  text-align: center;
}

.card-site-tag div button {
  font-family: "Raleway", sans-serif;
  color: #0D0C22;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  border-radius: 200px;
  padding: 8px 16px;
  border: 1px solid #0D0C22;
  background-color: #FFFFFF;
  margin-right: 16px;
  margin-bottom: 16px;
}

.card-site-tag div button:hover, .favoris:hover {
  background-color: #ff0031;
  border: 1px solid #ff0031;
  color: #ffffff;
}

.card-site-footer {
  margin-top: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.container-button {
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.delete-btn {
  background-color: transparent;
  border: 1px solid #0d0c22;
  color: #fff;
  background-color: #0D0C22;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  border-radius: 6px;
  padding: 8px 16px;
}

.delete-btn:hover {
  border: 1px solid #FF0031;
  background-color: #FF0031;
  color: #fff;
}
</style>
