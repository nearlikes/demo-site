<template>
  <!-- <teleport to="body"> -->
  <div class="cont">
    <main id="print">
      <h1>🎉 PAYMENT SUCCESSFUL 🎉</h1>
      <div>
        <h1>Invoice</h1>
        <h2>Order id: {{ order }}</h2>
        <h2>Payment id: {{ pay }}</h2>
        <h2>Signature: {{ sign }}</h2>
        <h2>Date: {{ new Date().toLocaleString() }}</h2>
      </div>
      <div>
        <button @click="print">Print</button>
        <button @click="$emit('close')">Close</button>
      </div>
    </main>
  </div>
  <!-- </teleport> -->
</template>

<script>
import domtoimage from "dom-to-image";
import { saveAs } from 'file-saver';
export default {
  name: "Invoice",
  props: ['order', 'pay', 'sign'],
  data() {
    return {
    };
  },
  methods: {
    print() {
      domtoimage
        .toBlob(document.getElementById("print"))
        .then(function (blob) {
          window.saveAs(blob, "invoice.png");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.cont {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 50%;
  width: 50%;
  background: rgb(255, 255, 255);
  border: 5px solid rgba(131, 103, 255, 0.842);
  border-radius: 20px;
  padding: 20px;
}
#print {
  background: white;
}
h2 {
  padding: 10px 15px;
  word-break: break-all;
}
button {
  background: #34ffb6;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 1.8rem;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  margin: 20px;
}
</style>