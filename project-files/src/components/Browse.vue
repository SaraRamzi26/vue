<script setup>
import { ref, onMounted } from 'vue'
import { getJobs } from '../services/JobService.js'
import JobGrid from '../components/JobGrid.vue'

const jobs = ref([])
const isLoading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await getJobs(3)
    jobs.value = response.data
  } catch (err) {
    error.value = 'Failed to fetch jobs. Please try again later.'
    console.error(err)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <p v-if="isLoading">Loading jobs...</p>

  <p v-else-if="error">
    {{ error }}
  </p>

  <JobGrid
    v-else
    :jobs="jobs"
  />
</template>