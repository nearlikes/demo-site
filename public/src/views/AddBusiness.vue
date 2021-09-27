<template>
  <div class="container">
    <div class="left">
      <form class="form" @submit.prevent="convert">
        <h1>Register yourself with us.</h1>
        <div class="logo">
          <img class="brand" @click="$refs.img.click()" id="logo" ref="logo" src="../assets/ph.png" />
          <input @change="preview" type="file" ref="img" id="img" accept="image/*" required />
        </div>
        <div class="row">
          <input v-model="name" required placeholder="Owner Name" type="text" name id />
          <input v-model="insta" required placeholder="Instagram Id" type="text" name id />
        </div>
        <div class="row">
          <input v-model="brand" required placeholder="Brand Name" type="text" name id />
          <select v-model="category" required>
            <option hidden disabled selected value>Pick a category</option>
            <option value="restaurant">Restaurant</option>
            <option value="salon">Salon</option>
            <option value="mall">Shopping Mall</option>
            <option value="health">Healthcare</option>
            <option value="auto">Automobiles</option>
          </select>
        </div>
        <button type="submit">CONTINUE</button>
      </form>
      <h3 v-if="error" class="error">{{ error }}</h3>
    </div>
    <div class="right">
      <img src="../assets/p3.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBusiness",
  data() {
    return {
      name: "",
      insta: "",
      brand: "",
      category: "",
      error: null,
    };
  },
  methods: {
    convert() {
      const reader = new FileReader();
      reader.onload = () => {
        this.add(reader.result);
      };
      reader.readAsDataURL(this.$refs.img.files[0]);
    },
    add(img) {
      this.$router.push({ name: "Dashboard" });
    },
    preview() {
      const img = this.$refs.logo;
      img.src = URL.createObjectURL(this.$refs.img.files[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
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
  h1 {
    font-size: clamp(24px, 28px, 32px);
    padding: 30px;
  }
  .form {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .row {
    padding: 30px 0;
    display: flex;
  }
  input,
  select {
    background: #f5f5f5;
    width: 40%;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 10px 20px;
    margin: 0 20px;
    font-size: 20px;
    &::placeholder {
      text-align: center;
      font-weight: normal;
    }
    &:invalid {
      border: 2px solid red;
    }
    &:valid {
      border: 2px solid rgb(80, 141, 64);
    }
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
    margin: 10px;
  }
  .logo {
    border-radius: 50%;
    img {
      width: 150px;
      height: 150px;
      background: rgb(219, 219, 219);
      border-radius: 50%;
      border: 3px solid #3479ff;
      object-fit: cover;
    }
    input {
      display: none;
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
  }
}
</style>
