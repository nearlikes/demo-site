<template>
  <div class="container">
    <Sidebar />
    <main>
      <h1>START A CAMPAIGN</h1>
      <div class="table">
        <div class="left">
          <div class="row">
            <select v-model="location" name="location">
              <option selected hidden disabled value="">Location</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            <select v-model="age" name="age">
              <option selected hidden disabled value="">Age</option>
              <option value="30">18-30</option>
              <option value="40">30-40</option>
              <option value="50">40-50</option>
            </select>
          </div>
          <textarea
            placeholder="Campaign Motto(Optional)"
            v-model="text"
          ></textarea>
        </div>
        <div class="right">
          <h2>
            Customers with upto
            <span class="follow">{{ range * 5 }}</span> followers
          </h2>
          <div class="box">
            <h3 class="highlight" v-if="range !== 0">
              {{ range * 50 }} - {{ range * 100 }}
            </h3>
            <h3 class="text">Estimated Monthly Impressions</h3>
            <input
              type="range"
              v-model="range"
              min="100"
              max="3600"
              step="500"
            />
            <h4 class="text">₹{{ range }} per day</h4>
            <h3>₹{{ range * 30 }} billed monthly</h3>
          </div>
        </div>
      </div>
      <button @click="pay">Continue</button>
      <Invoice :order="order" :pay="payment" :sign="signature" v-if="invoice" @close="back" />
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Invoice from "@/components/Invoice.vue";

export default {
  name: "Campaign",
  data() {
    return {
      range: 100,
      location: "",
      age: "",
      text: "",
      id: "",
      key: "",
      amount: "",
      currency: "",
      invoice: false,
      order: "",
      payment: "",
      signature: "",
    };
  },
  components: {
    Sidebar,
    Invoice,
  },
  methods: {
    pay() {
      this.invoice = true;
      setTimeout(() => {
        this.$router.push({name: 'Uploads'})
      }, 3000);
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
main {
  height: 100vh;
  width: calc(100vw - 200px);
  padding: 30px;
  position: relative;
}
h1 {
  text-align: left;
  font-size: clamp(22px, 24px, 32px);
}
.table {
  height: 70%;
  display: flex;
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px 0 0;
    textarea {
      resize: none;
      width: 90%;
      height: 200px;
      border-radius: 10px;
      padding: 20px;
      font-size: 16px;
      font-family: inherit;
      background: #ffffff;
      border: 1px solid #c8c8c8;
      box-sizing: border-box;
      box-shadow: 5px 8px 4px rgba(0, 0, 0, 0.25);
      &::placeholder {
        text-align: center;
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  select {
    margin: 50px 0;
    width: 45%;
    height: 50px;
    background: transparent;
    border: 2px solid black;
    border-radius: 10px;
    padding: 0 20px;
    font-size: 20px;
  }
}
h2 {
  padding: 20px 0;
  font-size: 1.8rem;
}
h3 {
  padding: 10px;
  font-size: 1.8rem;
}
h4 {
  font-size: 1.6rem;
}
.text {
  font-weight: normal;
}
input {
  width: 80%;
  padding: 30px 0;
}
.follow {
  color: rgb(121, 163, 255);
}
.highlight {
  font-size: 26px;
  color: rgb(255, 70, 70);
}
.box {
  background: #ffffff;
  border: 1px solid #c8c8c8;
  box-sizing: border-box;
  box-shadow: 5px 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  height: 300px;
  width: 90%;
  align-self: center;
  padding: 30px 10px;
}
button {
  background: #34ffb6;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 20px;
  padding: 15px 25px;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  margin: 20px;
}
</style>
