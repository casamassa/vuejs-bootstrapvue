<template>
  <div id="app">
    <div id="nav">
      <top-head></top-head>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TopHead from "@/components/TopHead.vue";

export default {
  components: {
    "top-head": TopHead,
  },
  methods: {
    ...mapActions({ setAllJobs: "setAllJobs" }),
  },
  mounted() {
    this.setAllJobs();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
