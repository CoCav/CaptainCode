<template>
  <section class="row mt-4">
    <div class="col-md-12 col-lg-6">
      <img
        src="@/assets/images/notFound.svg"
        alt="Illustration d'une personne avec une erreur sur son ordinateur"
      />
    </div>
    <div class="col-md-12 col-lg-6 content-container">
      <div>
        <div class="vertical-line"></div>
        <h2><span>Erreur !</span> Cette page n'existe pas !</h2>
      </div>
      <p>Hum, il semblerait que cette page n'existe pas...</p>
      <p>
        Veuillez cliquer sur l'un des liens de la barre de navigation ou sur le lien ci-après pour
        revenir sur notre site :
        <router-link class="notFoundLink" :to="{ name: 'Home' }">Accueil</router-link> 
      </p>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.notFoundLink {
  color: #0D0C22;
}
.notFoundLink:hover {
  color: #ff0031;
}
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content-container div:first-child {
    display: flex;
}
.vertical-line {
  background-color: #ff0031;
  width: 5px;
  height: 42px;
  margin-right: 20px;
}

span {
  color: #ff0031;
}
p {
  margin-top: 8px;
}
</style>
