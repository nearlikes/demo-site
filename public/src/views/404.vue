<template>
  <div class="container">
    <img src="../assets/logo.svg" alt="logo">
    <h1>YOU SEEM LOST</h1>
    <h2>Let us help you find your way</h2>
    <div class="routes">
      <router-link to="/">HOME</router-link>|
      <router-link to="/login">LOGIN</router-link>|
      <router-link to="/register">REGISTER</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(90deg, rgb(255, 84, 16), rgb(255, 16, 144));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 10rem;
  color: white;
  padding: 20px;
}
h2 {
  padding: 20px;
  font-size: 2.4rem;
}
::selection {
  background: black;
  color: red;
}
.routes {
  a {
    padding: 10px;
    font-size: 1.8rem;
    text-decoration: none;
    color: white;
  }
}
</style>
