<template>
  <div id="app">
    <div id="nav">
      <top-header @searchForJobs="searchJobs"></top-header>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view :searchValue="searchValue" :key="searchValue" />
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'

export default {
  data() {
    return {
      searchValue: ''
    }
  },
  components: {
    'top-header': TopHeader
  },
  methods: {
    searchJobs(searchValue) {
      this.searchValue = searchValue
    }
  }    
}
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
