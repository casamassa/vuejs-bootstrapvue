<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-form @submit="onSubmit">
          <b-form-input
            size="sm"
            class="mr-sm-2"
            v-model="searchValue"
            placeholder="Search"
            required
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
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    ...mapActions({
      setAllJobs: "setAllJobs",
      setSearchValue: "setSearchValue",
    }),
    onSubmit(event) {
      event.preventDefault();
      this.setSearchValue(this.searchValue);
    },
    ResetSearch() {
      this.searchValue = "";
      this.setAllJobs();
    },
  },
};
</script>

<style lang="scss" scoped>
#nav a.router-link-exact-active {
  color: white;
}
</style>