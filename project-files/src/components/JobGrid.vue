<script setup>
import JobCard from "./JobCard.vue";

const props = defineProps({
  jobs: {
    type: Array,
    required: true
  }
})
</script>
<template>
<main class="jobs-page">
 <h1 class="page-title">Browse Jobs</h1>
 <div class="jobs"> 
<JobCard  v-for="job in jobs" :key="job.id" :job="job" /> 
</div> 
</main>
</template>
<style scoped>
.jobs-page {
  min-height: 100vh;
  padding: 72px 24px;
  background-color: #ecfdf5;
  box-sizing: border-box;
}

.page-title {
  margin: 0 0 40px;
  color: #22c55e;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;
}

.jobs {
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  gap: 36px;
}

/* Makes each JobCard fill its grid area */
.jobs :deep(.job-card) {
  height: 100%;
}

/* Tablets */
@media (max-width: 1024px) {
  .jobs {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

/* Phones */
@media (max-width: 700px) {
  .jobs-page {
    padding: 48px 16px;
  }

  .page-title {
    margin-bottom: 28px;
    font-size: 30px;
  }

  .jobs {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>

