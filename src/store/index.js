import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allJobs: [],
    displayJobs: [],
    searchValue: '',
    jobsRows: 1
  },
  mutations: {
    //sync
    setAllJobs(state, payload){
      state.allJobs = payload
      state.displayJobs = payload
      state.jobsRows = payload.length
    },
    setSearchValue(state, payload){
      state.searchValue = payload
      state.displayJobs = state.allJobs.filter((x) => x.name.includes(payload))
      state.jobsRows = state.displayJobs.length
    },
    setJobsRows(state,payload){
      state.jobsRows = payload
    }
  },
  actions: {
    //async
    async setAllJobs(state){
      const res = await fetch("jobs.json");
      const jobs = await res.json();
      state.commit("setAllJobs", jobs);
    },
    async setSearchValue(state, payload){
      state.commit("setSearchValue", payload);
    },
    async setJobsRows(state, payload){
      state.commit("setJobsRows", payload);
    }
  },
  modules: {},
  getters: {
    getAllJobs(state){
      return state.allJobs;
    },
    getDisplayJobs(state){
      return state.displayJobs;
    },
    getSearchValue(state){
      return state.searchValue;
    },
    getJobsRows(state){
      return state.jobsRows;
    }
  }
});
