<template>
  <div class="container">
    <Sidebar />
    <main>
      <header>
        <h1 class="title">Verify Coupons</h1>
        <a @click="nav">Coupon History</a>
      </header>
      <div class="grid">
        <form @submit.prevent="verify">
          <input
            required
            autofocus
            autocomplete="off"
            type="text"
            v-model="code"
            maxlength="12"
            placeholder="Coupon Code"
          />
          <button type="submit">Verify</button>
        </form>
        <h3 v-if="show" :class="[!box ? 'error' : '']">{{ msg }}</h3>
        <div v-if="box" class="info">
          <div>
            <h4>Name:</h4>
            <h4>Instagram:</h4>
            <h4>Phone:</h4>
            <h4>Discount:</h4>
            <h4>Expiry:</h4>
          </div>
          <div>
            <h4>{{ data.name }}</h4>
            <h4>{{ data.insta }}</h4>
            <h4>{{ data.phone }}</h4>
            <h4>{{ data.discount }}</h4>
            <h4>{{ data.expire }}</h4>
          </div>
        </div>
        <div v-if="box" class="redeem">
          <input required v-model="bill" v-if="box" class="bill" placeholder="Bill Amount" type="text" />
          <button @click="redeem" class="redeem" v-if="box">Redeem</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "Coupon",
  components: {
    Sidebar,
  },
  data() {
    return {
      code: "",
      show: false,
      error: false,
      data: {
        name: "John Doe",
        insta: "@johndoe",
        phone: "9876543210",
        discount: "20%",
        expire: "In 20 days",
      },
      msg: "",
      box: false,
      bill: "",
    };
  },
  methods: {
    verify() {
          this.show = true;
          this.msg = "Coupon verified";
          this.box = true;
    },
    redeem() {
          this.box = false;
          this.show = true;
          this.msg = "Coupon redeemed";
    },
    nav() {
      this.$router.push({ name: "CouponHistory" });
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
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
  }
  form {
    padding: 15% 0 0;
    input {
      width: 350px;
      height: 2rem;
      font-size: 2rem;
      padding: 0.5rem;
      border: none;
      outline: none;
      background: #efefef;
      border-radius: 10px;
      text-align: center;
      height: 60px;
      letter-spacing: 5px;
      font-weight: 600;
      margin: 0 20px;
    }
  }
  h3 {
    color: #42be65;
    padding: 20px;
  }
  .error {
    color: #ff5c00;
  }
  button {
    background: #3479ff;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 20px;
    padding: 15px 25px;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    width: 400px;
    background: #f9f9f9;
    border: 1px solid #c8c8c8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 50px;
    text-align: left;
    gap: 40px;
    h4 {
      font-weight: normal;
      font-size: 1.8rem;
    }
  }
  .redeem {
    margin: 20px;
  }
  .bill {
    border-radius: 10px;
    // border: none;
    // outline: none;
    width: 200px;
    font-size: 20px;
    padding: 15px 25px;
    font-weight: 600;
  }
}
</style>