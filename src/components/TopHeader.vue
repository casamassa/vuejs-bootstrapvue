<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="mx-auto">
          <b-nav-form @submit="onSubmit">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              v-model="searchValue"
              required
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0 mr-2" type="submit"
              >Search</b-button
            >
            <b-button size="sm" class="my-2 my-sm-0" @click="ResetSearch"
              >Clear</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch("setSearchValue", this.searchValue);
    },
    ResetSearch() {
      this.searchValue = "";
      this.$store.dispatch("setAllJobs");
    },
  },
};
</script>

<style lang="scss" scoped>
#nav a.router-link-exact-active {
  color: white;
}
</style>