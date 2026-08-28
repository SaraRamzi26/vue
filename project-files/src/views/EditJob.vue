<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getJob, updateJob } from '../services/JobService.js'

const { id } = defineProps(['id'])

const router = useRouter()

const isLoading = ref(true)
const isSubmitting = ref(false)
const error = ref(null)

const form = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: 'Under $50K',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: ''
  }
})

onMounted(async () => {
  try {
    const response = await getJob(id)
    const job = response.data

    form.type = job.type
    form.title = job.title
    form.description = job.description
    form.salary = job.salary
    form.location = job.location

    form.company.name = job.company.name
    form.company.description = job.company.description
    form.company.contactEmail = job.company.contactEmail
    form.company.contactPhone = job.company.contactPhone
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load the job.'
  } finally {
    isLoading.value = false
  }
})

const handleSubmit = async () => {
  isSubmitting.value = true
  error.value = null

  try {
    await updateJob(id, form)

    router.push({
      name: 'JobDetails',
      params: { id }
    })
  } catch (err) {
    console.error(err)
    error.value = 'Failed to update the job. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
<template>
  <section class="add-job-page">
    <div class="form-container">
      <div class="form-card">
        <form @submit.prevent="handleSubmit">
          <h1>Add Job</h1>

          <p v-if="error" class="error-message">
            {{ error }}
          </p>

          <div class="form-group">
            <label for="type">Job Type</label>

            <select
              id="type"
              v-model="form.type"
              required
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div class="form-group">
            <label for="title">Job Listing Name</label>

            <input
              id="title"
              v-model="form.title"
              type="text"
              placeholder="e.g. Frontend Developer"
              required
            />
          </div>

          <div class="form-group">
            <label for="description">Description</label>

            <textarea
              id="description"
              v-model="form.description"
              rows="4"
              placeholder="Add job duties, expectations and requirements"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="salary">Salary</label>

            <select
              id="salary"
              v-model="form.salary"
              required
            >
              <option value="Under $50K">Under $50K</option>
              <option value="$50K - $60K">$50K - $60K</option>
              <option value="$60K - $70K">$60K - $70K</option>
              <option value="$70K - $80K">$70K - $80K</option>
              <option value="$80K - $90K">$80K - $90K</option>
              <option value="$90K - $100K">$90K - $100K</option>
              <option value="$100K - $125K">$100K - $125K</option>
              <option value="$125K - $150K">$125K - $150K</option>
              <option value="$150K - $175K">$150K - $175K</option>
              <option value="$175K - $200K">$175K - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
          </div>

          <div class="form-group">
            <label for="location">Location</label>

            <input
              id="location"
              v-model="form.location"
              type="text"
              placeholder="Company location"
              required
            />
          </div>

          <h2>Company Info</h2>

          <div class="form-group">
            <label for="company-name">Company Name</label>

            <input
              id="company-name"
              v-model="form.company.name"
              type="text"
              placeholder="Company name"
              required
            />
          </div>

          <div class="form-group">
            <label for="company-description">
              Company Description
            </label>

            <textarea
              id="company-description"
              v-model="form.company.description"
              rows="4"
              placeholder="What does your company do?"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="contact-email">Contact Email</label>

            <input
              id="contact-email"
              v-model="form.company.contactEmail"
              type="email"
              placeholder="Email address for applicants"
              required
            />
          </div>

          <div class="form-group">
            <label for="contact-phone">Contact Phone</label>

            <input
              id="contact-phone"
              v-model="form.company.contactPhone"
              type="tel"
              placeholder="Optional phone for applicants"
            />
          </div>

          <button
            class="submit-button"
            type="submit"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Adding Job...' : 'Add Job' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.add-job-page {
  min-height: 100vh;
  padding: 70px 20px;
  background-color: #ecfdf5;
}

.form-container {
  width: 100%;
  max-width: 670px;
  margin: 0 auto;
}

.form-card {
  padding: 32px 26px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-card h1 {
  margin: 0 0 28px;
  font-size: 30px;
  text-align: center;
}

.form-card h2 {
  margin: 30px 0 20px;
  font-size: 24px;
  font-weight: 500;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #374151;
  font-size: 16px;
  font-weight: bold;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 11px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background-color: white;
  font-family: inherit;
  font-size: 16px;
  box-sizing: border-box;
}

.form-group textarea {
  resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #22c55e;
  outline: none;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.15);
}

.submit-button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 30px;
  background-color: #22c55e;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #16a34a;
}

.submit-button:disabled {
  background-color: #86efac;
  cursor: not-allowed;
}

.error-message {
  margin-bottom: 20px;
  padding: 12px;
  border-radius: 6px;
  background-color: #fee2e2;
  color: #b91c1c;
  text-align: center;
}
</style>