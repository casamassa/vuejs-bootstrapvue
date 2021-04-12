<template>
  <b-container>
    <b-row align-v="center">
      <job-card v-for="job in displayJobs" :key="job.id" :name="job.name"></job-card>
    </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      @input="paginate(currentPage)"
    ></b-pagination>
  </b-container>
</template>

<script>
// @ is an alias to /src
import JobCard from "@/components/JobCard.vue";
export default {
  name: "Home",
  components: { "job-card": JobCard },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      jobs: [],
      displayJobs: [],
      currentPage: 1,
      rows: 1,
      perPage: 3,
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch("jobs.json");
      const val = await res.json();
      this.jobs = val;
      this.displayJobs = val.slice(0, 3);
      this.rows = this.jobs.length;
      console.log(val);
    },
    paginate(currentPage) {
      const start = (currentPage - 1) * this.perPage
      this.displayJobs = this.jobs.slice(start, start + this.perPage)
    }
  },
};
</script>
