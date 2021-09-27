<template>
  <nav>
    <ul>
      <li class="logo">NEARLIKES</li>
      <li class="menu">
        <ul>
          <li :class="[route == '/dashboard' ? 'active' : '']">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li :class="[route == '/uploads' ? 'active' : '']">
            <router-link to="/uploads">Uploads</router-link>
          </li>
          <li :class="[route == '/campaign' ? 'active' : '']">
            <router-link to="/campaign">Campaigns</router-link>
          </li>
          <li :class="[route == '/customers' ? 'active' : '']">
            <router-link to="/customers">Customers</router-link>
          </li>
          <li :class="[route == '/payments' ? 'active' : '']">
            <router-link to="/payments">Payments</router-link>
          </li>
          <li :class="[route == '/coupon' ? 'active' : '']">
            <router-link to="/coupon">Coupon</router-link>
          </li>
          <li :class="[route == '/stories' ? 'active' : '']">
            <router-link to="/stories">Stories</router-link>
          </li>
        </ul>
      </li>
      <li>
        <button @click="logout">Log Out</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import Localbase from "localbase";
let db = new Localbase("db");
export default {
  name: "Sidebar",
  data() {
    return {
      route: this.$route.path,
    };
  },
  methods: {
    logout() {
      db.collection("users")
        .doc("key")
        .update({
          token: null,
        })
        .then(() => this.$router.replace({ name: "Home" }));
      localStorage.removeItem("vuex");
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  height: 100vh;
  width: 200px;
  background: linear-gradient(180deg, #ff416b 0%, #ff4a31 100%);
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 30px;
}
.logo {
  color: #ffffff;
  font-size: 2.8rem;
  font-weight: 700;
}
button {
  padding: 15px 25px;
  font-weight: 600;
  font-size: 18px;
  background: rgb(255, 255, 255);
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
}
.menu {
  height: 50%;
  font-size: 2rem;
  ul {
    align-items: flex-start;
    li {
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
}
.active {
  color: white;
  background: #6fa0ff;
}
a {
  text-decoration: none;
  color: #ffffff;
}
</style>
