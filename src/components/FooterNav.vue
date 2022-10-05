<template>
  <div class="separator-horizontal"></div>
  <div class="container-footer-nav row">
    <p class="title-logo col-md-12 col-lg-4">Captain<span>Code</span></p>
    <nav class="col-md-12 col-lg-4">
      <ul>
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }">
            Accueil
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'AddView' }">
            Ajouter
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="container-freepik col-md-12 col-lg-4">
      <span>Toutes les illustrations<br />sont sous licence de Freepik</span>
      <img src="@/assets/images/freepik-logo.svg" alt="Icône de Freepik" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavFooter",
};
</script>

<style scoped>
.separator-horizontal {
  margin-top: 70px;
  width: 100%;
  background-color: #0d0c22;
  height: 1px;
}
.container-footer-nav {
  display: flex;
  justify-content: space-between;
  margin: 48px 0;
}

p {
  font-size: 24px;
}

ul {
  margin: 0;
  padding: 0;
}

.nav-item {
  list-style: none;
  margin-bottom: 16px;
  text-transform: uppercase;
  font-size: 16px;
}

.container-freepik {
  display: flex;
  align-items: center;
}

.container-freepik img {
  width: 34px;
}

.container-footer-nav span {
  margin-right: 1em;
}
</style>
