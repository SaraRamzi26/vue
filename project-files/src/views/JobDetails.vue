<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getJob, deleteJob } from '../services/JobService.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowLeft,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
const router = useRouter()
const {id}=defineProps(['id'])
const job=ref(null);
onMounted(() => {
  getJob(id)
    .then(response => {
      job.value = response.data
    })
    .catch(error => {
      console.log(error)
     if (error.response?.status === 404) {
        router.replace('/not-found')
      }
    }
  )
})
const handleDelete = async () => {
  const confirmed = window.confirm(
    'Are you sure you want to delete this job?'
  )

  if (!confirmed) {
    return
  }

  try {
    await deleteJob(id)

    router.push({
      name: 'Jobs'
    })
  } catch (error) {
    console.error(error)
    alert('Failed to delete the job. Please try again.')
  }
}
</script>
<template>

<div v-if="job">

<RouterLink to="/jobs" class="back-button">
 <FontAwesomeIcon :icon="faArrowLeft" />
    Back to job listings</RouterLink>
<div class="page-background">
<div class="container">
     <div class="left-column">
    <div class="card1">
  <p class="job-type">{{ job.type }}</p>

  <h1>{{ job.title }}</h1>

  <p class="job-location">
    <FontAwesomeIcon :icon="faLocationDot" />
    {{ job.location }}
  </p>
</div>
<div class=card2>
<h2>Job Description</h2>
<p>{{job.description}}</p>
<h2>Salary</h2>
<p>{{job.salary}}</p>
</div>
</div>  
<div class="right-column">
  <div class="card3">
    <p class="company-title">Company Info</p>

    <p class="company-name">
      {{ job.company.name }}
    </p>

    <p class="company-description">
      {{ job.company.description }}
    </p>

    <div class="contact-section">
      <p class="contact-label">Contact Email:</p>
      <p class="contact-value">
        {{ job.company.contactEmail }}
      </p>

      <p class="contact-label">Contact Phone:</p>
      <p class="contact-value">
        {{ job.company.contactPhone }}
      </p>
    </div>
  </div>

  <div class="manage-card">
    <p>Manage Job</p>

    <RouterLink
      :to="`/edit-job/${id}`"
      class="editButton"
    >
      Edit Job
    </RouterLink>

    <button
      class="deleteButton"
      @click="handleDelete"
    >
      Delete Job
    </button>
  </div>
</div>
</div>
</div>
</div>
</template>
<style scoped>

.page-background {
  background-color: #ecfdf5;
  min-height: 100vh;
  padding: 40px 0;
}   

.container {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  width: 80%;
  margin: 0 auto;
}

.left-column {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card3 {
  flex: 1;
}

.card1,
.card2,
.card3 {
  padding: 30px 36px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
.job-type {
  margin: 0 0 22px;
  color: #6b7280;
  font-size: 18px;
}

.card1 h1 {
  margin: 0 0 24px;
  color: black;
  font-size: 32px;
  font-weight: 700;
}

.job-location {
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 0;
  color: #c2410c;
  font-size: 18px;
}


.card2 h2 {
  margin: 0 0 16px;
  color: #15803d;
  font-size: 22px;
}

.card2 p {
  margin: 0 0 24px;
  font-size: 18px;
  line-height: 1.6;
}

.card2 p:last-child {
  margin-bottom: 0;
}
.back-button {
text-decoration: none;
margin: 23px 150px 23px;  
 width: 80%;  
 color: #1cb554;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.back-button:hover {
  color: #15803d;
}
.card3 {
  min-height: 550px;
  padding: 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
}

.company-title {
  margin: 0 0 20px;
  font-size: 20px;
  font-weight: bold;
}

.company-name {
  margin: 0 0 12px;
  font-size: 22px;
font-weight:490;
}

.company-description {
  flex: 1;
  margin: 0 0 18px;
  font-size: 16px;
  line-height: 1.5;
}

.contact-section {
  padding-top: 14px;
  border-top: 1px solid #ddd;
}

.contact-label {
  margin: 0 0 8px;
  font-size: 18px;
}

.contact-value {
  margin: 0 0 14px;
  padding: 10px;
  background-color: #d1fae5;
  font-size: 14px;
  font-weight: bold;
  overflow-wrap: anywhere;
}




.manage-card p {
  margin: 0 0 24px;
  font-size: 20px;
  font-weight: bold;
}

.editButton,
.deleteButton {
  display: block;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 30px;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  box-sizing: border-box;
  cursor: pointer;
}

.editButton {
  margin-bottom: 16px;
  background-color: #22c55e;
}

.deleteButton {
  background-color: #ef4444;
}
.card3 {
  width: 100%;
  min-height: 550px;
}

.right-column {
  flex: 0 0 320px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.manage-card {
  width: 100%;
  padding: 24px;
  background-color: white;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}
</style>