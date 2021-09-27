import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApexCharts from "vue3-apexcharts";
import Localbase from "localbase";
let db = new Localbase("db");

db.collection("users")
	.doc("key")
	.get()
	.then((d) => {
		if (d && d.token !== null) return;
		db.collection("users")
			.doc("key")
			.set({
				token: null,
			});
	});

createApp(App)
	.use(store)
	.use(router)
	.use(VueApexCharts)
	.mount("#app");
