<template>
  <div class="container">
    <Sidebar />
    <main>
      <header>
        <h1 class="title">Customers</h1>
        <a @click="save">Export Report</a>
      </header>
      <div class="grid">
        <div class="top">
          <h2>Name</h2>
          <h2>Instagram</h2>
          <h2>Followers</h2>
          <h2>Location</h2>
        </div>
        <div v-for="(item, index) in items" :key="index" class="row">
          <h3>{{ item.name }}</h3>
          <h3>{{ item.insta }}</h3>
          <h3 class="ongoing">{{ item.followers }}</h3>
          <h3>{{ item.location.toUpperCase() }}</h3>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import { json2excel } from "js2excel";
export default {
  name: "Customer",
  components: {
    Sidebar,
  },
  computed: {
    items() {
      return this.$store.getters.customers;
    },
  },
  methods: {
    save() {
      try {
        console.log(this.items);
        json2excel({
          data: this.items,
          name: "customers",
        });
      } catch (e) {
        console.error("export error");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  font-size: 2rem;
}
main {
  height: 100vh;
  width: calc(100vw - 200px);
  padding: 30px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      background: #3479ff;
      border-radius: 10px;
      font-size: 1;
      padding: 1rem 2.5rem;
      text-decoration: none;
      color: #fff;
      cursor: pointer;
    }
    h1.title {
      padding: 0 10px;
      text-align: left;
      font-size: 2.8rem;
    }
  }
  .grid {
    height: 90%;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    .top {
      display: flex;
      padding: 30px 5px 20px;
      background: white;
      top: 0;
      position: sticky;
      h2 {
        flex: 1;
        font-size: 2rem;
      }
    }
    .row {
      display: flex;
      h3 {
        flex: 1;
        font-size: 1.8rem;
        font-weight: normal;
        padding: 10px 0;
      }
      .ongoing {
        color: green;
        font-weight: 500;
      }
    }
    .row:nth-of-type(odd) {
      background: rgb(236, 244, 255);
      border-radius: 10px;
    }
  }
}
</style>