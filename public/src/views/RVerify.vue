<template>
  <div class="container">
    <div class="left">
      <h1>VERIFY</h1>
      <h2>OTP sent to +91{{ number }}</h2>
      <div class="input">
        <input type="text" placeholder="Enter OTP" maxlength="4" v-model="code" />
        <div v-if="time !== 0" class="timer">Resend after {{ time }} seconds</div>
      </div>
      <div class="btn">
        <button ref="resend" disabled class="secondary" @click="resend">RESEND</button>
        <button @click="submit">VERIFY</button>
      </div>
      <h3>
        <router-link to="/register">Change number</router-link>
      </h3>
      <div v-if="error" class="err">{{ error }}</div>
    </div>
    <div class="right">
      <lottie-player
        :src="require('../assets/dots.json')"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px"
        loop
        autoplay
      ></lottie-player>
    </div>
  </div>
</template>

<script>
import Localbase from "localbase";
let db = new Localbase("db");
export default {
  name: "RVerify",
  data() {
    return {
      code: "",
      time: 60,
      error: ''
    };
  },
  computed: {
    number() {
      return this.$store.getters.phone;
    },
  },
  watch: {
    time() {
      if (this.time !== 0) return;
      this.$refs.resend.removeAttribute("disabled");
    },
  },
  mounted() {
    setInterval(() => {
      if (this.time === 0) return;
      this.time -= 1;
    }, 1000);
  },
  methods: {
    submit() {
      this.$router.replace({ name: "AddBusiness" })
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  font-size: 2rem;
}
.left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  h1 {
    font-weight: 600;
  }
  h2 {
    font-weight: normal;
    font-size: 1em;
  }
  h3 {
    font-weight: normal;
    font-size: 0.8em;
    a {
      text-decoration: none;
      color: #3479ff;
    }
  }
  .timer {
    color: #3479ff;
    padding: 10px;
    font-size: 0.8em;
  }
  .input {
    position: relative;
    margin: 3em 0;
    input {
      background: #eeeeee;
      border-radius: 10px;
      font-family: inherit;
      border: none;
      outline: none;
      padding: 0.8em 1.5em;
      font-size: 1.1em;
      text-align: center;
      letter-spacing: 10px;
      font-weight: bold;
      max-width: 400px;
    }
  }
}
.right {
  flex: 1;
  background: linear-gradient(180deg, #ff416b 0%, #ff4a31 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: clamp(400px, 80%, 600px);
    height: auto;
    aspect-ratio: 1 / 1;
  }
}

button {
  background: #34ffb6;
  border-radius: 10px;
  padding: 0.8em 1.5em;
  font-family: inherit;
  border: none;
  outline: transparent;
  font-weight: 600;
  font-size: 1em;
  margin: 1em 2em;
  cursor: pointer;
  transition: outline 200ms ease;
  &:hover {
    outline: 5px solid #34ffb575;
  }
}
.secondary {
  background: transparent;
  border: 2px solid black;
}
.err {
  color: red;
  padding: 5px 10px;
  border-radius: 10px;
  background: rgb(235, 235, 235);
  margin: 10px;
  font-size: 1.4rem;
  &::before {
    content: "⛔ ";
  }
}
</style>
