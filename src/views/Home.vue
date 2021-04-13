<template>
  <b-container>
    <b-row align-v="center">
      <template v-if="displayJobs.length">
        <job-card v-for="job in displayJobs" :key="job.id" :name="job.name"></job-card>
      </template>
      <template v-else>
        <b-col class="text-center">No results</b-col>
      </template>
    </b-row>
    <b-pagination v-if="jobsRows/this.perPage>1"
      v-model="currentPage"
      :total-rows="jobsRows"
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
  data() {
    return {
      //jobs: [],
      //displayJobs: [],
      currentPage: 1,
      //rows: this.$store.getters.getJobsRows,
      perPage: 3,
    };
  },
  computed: {
    jobs() {
      return this.$store.getters.getAllJobs;
    },
    displayJobs() {
      const start = (this.currentPage - 1) * this.perPage
      return this.$store.getters.getDisplayJobs.slice(start, start + this.perPage);
    },
    jobsRows() {
      return this.$store.getters.getJobsRows;
    }
  },
  methods: {
    async fetchData() {
      /*const res = await fetch("jobs.json");
      const val = await res.json();
      const result = (this.searchValue ? val.filter((x) => x.name.includes(this.searchValue)) : val)
      this.jobs = result;
      this.displayJobs = result.slice(0, 3);
      this.rows = this.jobs.length;*/
    },
    paginate(currentPage) {
      /*const start = (currentPage - 1) * this.perPage
      this.displayJobs = this.jobs.slice(start, start + this.perPage)*/
      this.currentPage = currentPage
    }
  },
};
</script>
