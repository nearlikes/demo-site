<template>
  <div>
    <router-view />
    <button @click="nav" class="wcta"><ion-icon name="logo-whatsapp"></ion-icon></button>
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    nav() {
      window.open('https://wa.me/+919392708293', '_blank', focus);
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  font-family: 'Poppins', sans-serif;
}
#app {
  font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  overflow-x: hidden;
}
.wcta {
  position: fixed;
  bottom: 5%;
  right: 3%;
  font-size: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;
  background: rgb(73, 136, 48);
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>
