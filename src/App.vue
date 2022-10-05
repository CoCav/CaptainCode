<template>
  <div class="container">
    <header>
      <header-nav />
    </header>
    <main>
       <router-view />
    </main>
    <footer>
       <footer-nav />
    </footer>
  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
import FooterNav from "./components/FooterNav.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
    FooterNav,
  },

  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: rgba(13, 12, 34, 0.5);
}

a:hover {
  color: #ff0031;
  transition: 0.7s ease;
}

body {
  background-color: #fafafa;
  color: #0d0c22;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

.router-link-active,.router-link-exact-active {
  color: #ff0031;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
