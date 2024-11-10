<!-- src/components/Footer.vue -->

<template>
  <footer class="footer">
    <p>Conecte-se comigo nas redes sociais:</p>
    <div class="social-icons">
      <a href="https://facebook.com" target="_blank" aria-label="Facebook">
        <img src="" alt="Facebook" />
      </a>
      <a href="https://twitter.com" target="_blank" aria-label="Twitter">
        <img src="" alt="Twitter" />
      </a>
      <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
        <img src="" alt="LinkedIn" />
      </a>
      <!-- Adicione outros ícones conforme necessário -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.footer {
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
}

.social-icons a {
  margin: 0 10px;
}

.social-icons img {
  width: 30px;
  height: 30px;
}
</style>
