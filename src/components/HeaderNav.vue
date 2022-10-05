<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <p class="title-logo">Captain<span>Code</span></p>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <nav class="navbar-nav">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'AddView' }">Ajouter</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
.title-logo {
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0;
  color: #13201f;
}

.title-logo span {
  color: #ff0031;
}

.navbar-collapse {
  flex-grow: 0 !important;
}

.nav-item {
  text-decoration: none;
}

.nav-item:first-child {
  margin-right: 16px;
}
</style>
