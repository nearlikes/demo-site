<template>
  <div class="container">
    <div class="left">
      <h1>LOGIN</h1>
      <h2>See yourself growth with personal analytics</h2>
      <div class="input" data-code="+91">
        <input
          type="text"
          placeholder="Phone Number"
          maxlength="10"
          v-model="phone"
        />
      </div>
      <button id="btn" @click="submit">REQUEST OTP</button>
      <h3>
        New here?
        <router-link to="/register">Create a new account</router-link>
      </h3>
      <div v-if="err" class="err">{{err}}</div>
    </div>
    <div class="right">
      <lottie-player
        :src="require('../assets/login.json')"
        background="transparent"
        speed="1"
        style="width: 400px; height: 400px"
        loop
        autoplay
      ></lottie-player>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      err: ""
    };
  },
  mounted() {
    const message = this.$route.query.error;
    if (message === null ) return
    this.err = message
  },
  methods: {
    async submit() {
      if (this.phone.length !== 10) return;
      this.$store.dispatch("setPhone", this.phone);
      this.$router.push({ name: "Verify" });
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
    }
    &::before {
      content: attr(data-code);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background: #3479ff;
      height: 100%;
      width: 20%;
      border-radius: 10px 0 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      color: white;
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
}

button {
  background: #34ffb6;
  border-radius: 10px;
  padding: 0.8em 1.5em;
  font-family: inherit;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 1em;
  margin-bottom: 2em;
  cursor: pointer;
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
