<!-- src/App.vue -->

<template>
  <div id="app">
    <header>
      <h1>Bem-vindo ao Meu Currículo!</h1>
      <nav>
        <router-link to="/quem-sou-eu">Quem Sou Eu</router-link> |
        <router-link to="/o-que-faco">O que faço</router-link> |
        <router-link to="/hobbies">Hobbies</router-link>
      </nav>
    </header>

    <router-view></router-view> <!-- Exibe o conteúdo das páginas conforme a navegação -->

    <Footer /> <!-- Rodapé com ícones de redes sociais -->
  </div>
</template>

<script>
import Footer from './components/Footer.vue'; // Importando o rodapé

export default {
  name: 'App',
  components: {
    Footer, // Registrando o componente Footer
  },
};
</script>

<style>
header {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: white;
}

nav {
  margin-top: 10px;
}

router-link {
  color: white;
  text-decoration: none;
  margin: 0 15px;
}

router-link:hover {
  text-decoration: underline;
}

footer {
  margin-top: 30px;
  padding: 10px;
  text-align: center;
  background-color: #333;
  color: white;
}
</style>
