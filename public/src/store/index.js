import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
	state: {
		phone: "",
		owner: "",
		data: {
			media: [],
			stats: { impressions: 0, reach: 0, likes: 0, shares: 0, clicks: 0 },
		},
		campaigns: [],
		customers: [],
		payments: [],
		coupons: [],
	},
	mutations: {
		setPhone(state, value) {
			state.phone = value;
		},
		setOwner(state, value) {
			state.owner = value;
		},
		setData(state, value) {
			state.data = value[0];
		},
		setCampaigns(state, value) {
			state.campaigns = value.campaigns;
		},
		setCustomers(state, value) {
			state.customers = value.customer;
		},
		setPayments(state, value) {
			state.payments = value.payment;
		},
		setCoupons(state, value) {
			state.coupons = value.coupons;
		},
		addMedia(state, value) {
			state.data.media.push({
				src: value.data,
				pre: value.pre,
				type: value.type,
			});
		},
		removeMedia(state, value) {
			state.data.media = state.data.media.filter((e) => e.src !== value);
		},
	},
	actions: {
		setPhone({ commit }, value) {
			commit("setPhone", value);
		},
		setOwner({ commit }, value) {
			commit("setOwner", value);
		},
		setData({ commit }, value) {
			commit("setData", value);
		},
		setCampaigns({ commit }, value) {
			commit("setCampaigns", value);
		},
		setCustomers({ commit }, value) {
			commit("setCustomers", value);
		},
		setPayments({ commit }, value) {
			commit("setPayments", value);
		},
		setCoupons({ commit }, value) {
			commit("setCoupons", value);
		},
		addMedia({ commit }, value) {
			commit("addMedia", value);
		},
		removeMedia({ commit }, value) {
			commit("removeMedia", value);
		},
	},
	getters: {
		phone(state) {
			return state.phone;
		},
		name(state) {
			return state.data.name;
		},
		stats(state) {
			if (Object.keys(state.data).length !== 0) return state.data.stats;
			const stats = {
				impressions: 0,
				reach: 0,
				likes: 0,
				shares: 0,
				clicks: 0,
			};
			return stats;
		},
		media(state) {
			return state.data.media;
		},
		owner(state) {
			return state.data._id;
		},
		logo(state) {
			return state.data.logo;
		},
		brand(state) {
			return state.data.brand;
		},
		campaigns(state) {
			return state.campaigns;
		},
		customers(state) {
			return state.customers;
		},
		payments(state) {
			return state.payments;
		},
		coupons(state) {
			return state.coupons;
		},
	},
	plugins: [createPersistedState()],
	modules: {},
});
