<!-- src/App.vue -->

<template>
  <div id="app">
    <header>
      
      
	<div class="overlay">
  <h1>Bem-Vindo ao meu Currículo Online!</h1>
	<br>
  <nav>
    <h3><router-link to="/quem-sou-eu">Quem Sou Eu</router-link> -
        <router-link to="/o-que-faco">O que faço</router-link> -
        <router-link to="/hobbies">Hobbies</router-link></h3>
      </nav>
		</div>
    </header>

    <router-view></router-view> <!-- Exibe o conteúdo das páginas conforme a navegação -->

    <Footer /> <!-- Rodapé com ícones de redes sociais -->
  </div>
</template>

<script>
import Footer from './components/Footer.vue'; 

export default {
  name: 'App',
  components: {
    Footer, 
  },
};
</script>

<style>

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
*{padding: 0; margin: 0; box-sizing: border-box;}
body{height: 900px;}
header {
	background: url('http://www.autodatz.com/wp-content/uploads/2017/05/Old-Car-Wallpapers-Hd-36-with-Old-Car-Wallpapers-Hd.jpg');
	text-align: center;
	width: 100%;
	height: auto;
	background-size: cover;
	background-attachment: fixed;
	position: relative;
	overflow: hidden;
	border-radius: 0 0 85% 85% / 30%;
}
header .overlay{
	width: 100%;
	height: 100%;
	padding: 50px;
	color: #FFF;
	text-shadow: 1px 1px 1px #333;
  background-image: linear-gradient( 135deg, #9f05ff69 10%, #fd5e086b 100%);
	
}

h1 {
	font-family: 'Dancing Script', cursive;
	font-size: 80px;
	margin-bottom: 30px;
}

h3, p {
	font-family: 'Open Sans', sans-serif;
	margin-bottom: 30px;
}
</style>
