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
import {mapGetters} from 'vuex'
import JobCard from "@/components/JobCard.vue";

export default {
  name: "Home",
  components: { "job-card": JobCard },
  data() {
    return {
      currentPage: 1,
      perPage: 3,
    };
  },
  computed: {
    ...mapGetters({jobs: 'getAllJobs', jobsRows: 'getJobsRows', getDisplayJobs: 'getDisplayJobs'}),
    displayJobs() {
      const start = (this.currentPage - 1) * this.perPage
      return this.getDisplayJobs.slice(start, start + this.perPage);
    }
  },
  methods: {
    paginate(currentPage) {
      this.currentPage = currentPage
    }
  },
};
</script>
