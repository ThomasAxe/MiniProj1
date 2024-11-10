<!-- src/views/QuemSouEu.vue -->

<template>
    <div class="section">
      <h2 style="text-align: center;">Quem Sou Eu?</h2>
      <br>
      <div class="image-container">
      <img src="@/assets/Eu.jpg">
     </div>
     <br>
      <p>
        Olá! Meu nome é Tomás Machado. Sou entusiasta de ciber segurança e desenvolvimento Web. Meu objetivo é expandir ao máximo o meu conhecimento em ambas as áreas de modo a ser um bom e completo profissional.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'QuemSouEu',
  };
  </script>
  
  <style scoped>
  .section {
    padding: 20px;
    margin-bottom: 20px;
  }
  .image-container img {
  max-width: 200px; 
  height: 200px;     
  border-radius: 10px; 
  }

.image-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
  </style>
  