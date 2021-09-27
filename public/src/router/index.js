import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			title: "Home",
		},
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
		meta: {
			title: "LOGIN",
		},
	},
	{
		path: "/login/verify",
		name: "Verify",
		component: () =>
			import(/* webpackChunkName: "verify" */ "../views/Verify.vue"),
		meta: {
			title: "VERIFY",
		},
	},
	{
		path: "/register",
		name: "Register",
		component: () =>
			import(/* webpackChunkName: "register" */ "../views/Register.vue"),
		meta: {
			title: "REGISTER",
		},
	},
	{
		path: "/register/verify",
		name: "RVerify",
		component: () =>
			import(/* webpackChunkName: "rverify" */ "../views/RVerify.vue"),
		meta: {
			title: "VERIFY",
		},
	},
	{
		path: "/register/add",
		name: "AddBusiness",
		component: () =>
			import(
				/* webpackChunkName: "addbusiness" */ "../views/AddBusiness.vue"
			),
		meta: {
			title: "ADD BUSINESS",
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: () =>
			import(/* webpackChunkName: "dash" */ "../views/Dashboard.vue"),
		meta: {
			title: "DASHBOARD",
			requiresAuth: true,
		},
	},
	{
		path: "/customers",
		name: "Customer",
		component: () =>
			import(/* webpackChunkName: "customers" */ "../views/Customer.vue"),
		meta: {
			title: "CUSTOMERS",
			requiresAuth: true,
		},
	},
	{
		path: "/stories",
		name: "Story",
		component: () =>
			import(/* webpackChunkName: "stories" */ "../views/Story.vue"),
		meta: {
			title: "STORIES",
			requiresAuth: true,
		},
	},
	{
		path: "/campaign",
		name: "Campaign",
		component: () =>
			import(/* webpackChunkName: "campaign" */ "../views/Campaign.vue"),
		meta: {
			title: "CAMPAIGN",
			requiresAuth: true,
		},
	},
	{
		path: "/campaign/add",
		name: "AddCampaign",
		component: () =>
			import(
				/* webpackChunkName: "addcamp" */ "../views/AddCampaign.vue"
			),
		meta: {
			title: "CAMPAIGN",
			requiresAuth: true,
		},
	},
	{
		path: "/uploads",
		name: "Uploads",
		component: () =>
			import(/* webpackChunkName: "upload" */ "../views/Uploads.vue"),
		meta: {
			title: "Uploads",
			requiresAuth: true,
		},
	},
	{
		path: "/payments",
		name: "Payments",
		component: () =>
			import(/* webpackChunkName: "pay" */ "../views/Payment.vue"),
		meta: {
			title: "Payments",
			requiresAuth: true,
		},
	},
	{
		path: "/coupon",
		name: "Coupon",
		component: () =>
			import(/* webpackChunkName: "coupons" */ "../views/Coupon.vue"),
		meta: {
			title: "Coupons",
			requiresAuth: true,
		},
	},
	{
		path: "/coupon/history",
		name: "CouponHistory",
		component: () =>
			import(
				/* webpackChunkName: "couponshistory" */ "../views/CouponHistory.vue"
			),
		meta: {
			title: "Coupon-History",
			requiresAuth: true,
		},
	},
	{
		path: "/help",
		name: "Help",
		component: () =>
			import(/* webpackChunkName: "help" */ "../views/Help.vue"),
		meta: {
			title: "Help",
		},
	},
	{
		path: "/termsofservice",
		name: "TOS",
		component: () =>
			import(/* webpackChunkName: "tos" */ "../views/TOS.vue"),
		meta: {
			title: "Terms of Service",
		},
	},
	{
		path: "/privacy_policy",
		name: "PP",
		component: () => import(/* webpackChunkName: "pp" */ "../views/PP.vue"),
		meta: {
			title: "Privacy Policy",
		},
	},
	{
		path: "/:pathMatch(.*)*",
		name: "ERROR",
		component: () =>
			import(/* webpackChunkName: "error" */ "../views/404.vue"),
		meta: {
			title: "404",
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = "NEARLIKES |" + " " + to.meta.title;
	next();
});

export default router;
