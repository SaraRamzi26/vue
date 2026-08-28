<script setup>
import {RouterLink} from 'vue-router'
defineProps({
  job: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <article class="job-card" V-if="job">
    <p class="job-type">{{ job.type }}</p>

    <h2 class="job-title">{{ job.title }}</h2>

    <p class="job-description">
      {{ job.description }}
    </p>

    <p class="job-salary">{{ job.salary }} / Year</p>

    <div class="card-footer">
      <p class="job-location">
        <span class="location-icon">📍</span>
        {{ job.location }}
      </p>

      <RouterLink
        :to="{
          name: 'JobDetails',
          params: { id: job.id }
        }"
        class="read-more"
      >
        Read More
      </RouterLink>
    </div>
  </article>
</template>

<style scoped>
.job-card {
  width: 100%;
  padding: 24px;
  background-color: white;
  border-radius: 16px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
}

.job-type {
  margin: 0 0 16px;
  color: #4b5563;
  font-size: 18px;
}

.job-title {
  margin: 0 0 40px;
  color: #000;
  font-size: 26px;
  line-height: 1.2;
  font-weight: 700;
}

.job-description {
  margin: 0 0 32px;
  font-size: 18px;
  line-height: 1.5;

  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.job-salary {
  margin: 0;
  padding-bottom: 18px;
  color: #16c55f;
  font-size: 18px;
  border-bottom: 2px solid #f1f1f1;
}

.card-footer {
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.job-location {
  margin: 0;
  color: #c2410c;
  font-size: 18px;
}

.location-icon {
  margin-right: 4px;
}

.read-more {
  flex-shrink: 0;
  padding: 12px 20px;
  color: white;
  background-color: #22c55e;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
}

.read-more:hover {
  background-color: #16a34a;
}

@media (max-width: 500px) {
  .job-card {
    padding: 20px;
  }

  .card-footer {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>