<template>
  <footer class="footer">
    <p>Para entrar em contacto comigo:</p>
    <div class="social-icons">
      <a href="https://www.instagram.com/tomas.m24" target="_blank" aria-label="Instagram">
        <img src="@/assets/Insta.png" alt="Instagram" />
      </a>
      <a href="https://github.com/ThomasAxe" target="_blank" aria-label="GitHub">
        <img src="@/assets/Git.png" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/tom%C3%A1s-machado-48284925b/" target="_blank" aria-label="LinkedIn">
        <img src="@/assets/LinkedIn.png" alt="LinkedIn" />
      </a>
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
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); 
  z-index: 10;
}

.social-icons a {
  margin: 0 10px;
}

.social-icons img {
  width: 30px;
  height: 30px;
}
</style>
