<template>
  <div class="container">
    <Sidebar />
    <main>
      <header>
        <h1 class="title">Coupon History</h1>
        <a @click="save">Export Report</a>
      </header>
      <div class="grid">
        <div class="top">
          <h2>Name</h2>
          <h2>Contact</h2>
          <h2>Discount</h2>
          <h2>Bill Amount</h2>
        </div>
        <div v-for="(item, index) in items" :key="index" class="row">
          <h3>{{ item.name }}</h3>
          <h3>{{ item.phone }}</h3>
          <h3>{{ item.discount }}</h3>
          <h3>{{ item.amount }}</h3>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import { json2excel } from "js2excel";
export default {
  name: "CouponHistory",
  components: {
    Sidebar,
  },
  computed: {
    items() {
      return this.$store.getters.coupons.reverse();
    },
    data() {
      const json = [...this.items]
      json.forEach(e => {
        e.date = new Date(e.createdAt *1000).toLocaleString()
      })
      return json
    }
  },
  methods: {
    save() {
      try {
        json2excel({
          data: this.data,
          name: "payments",
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