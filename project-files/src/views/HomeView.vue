<script setup>
import { RouterLink } from 'vue-router';
import Browse from '../components/Browse.vue'
</script>


<template>
  <section class="hero">
    <h1 class="hero-title">Become a Vue Dev</h1>
    <p class="hero-subtitle">
      Find the Vue job that fits your skills and needs
    </p>
  </section>

  <div class="cards">
  <section class="forDevelopers">
  <h2>For Developers </h2>
  <p>Browse our Vue jobs and start your career today</p>
  <RouterLink to="/jobs" class="developerButton">Browse Jobs</RouterLink>
  </section>
  <section class="forEmployers">
  <h2>For Employers </h2>
  <p>List your job to find the perfect developer for the role</p>
  <RouterLink to="/add-job" class="employerButton">Add Job</RouterLink>
  </section>
 </div>
   <Browse />

  <RouterLink to="/jobs" class="viewall" >View All Jobs</RouterLink>

</template>


<style scoped>
.hero {
  min-height: 300px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #15803d;
  color: white;
  text-align: center;
  box-sizing: border-box;
}

.hero-title {
  margin: 0 0 12px;
  font-size: 64px;
  line-height: 1.1;
  font-weight: extra-bold;
}

.hero-subtitle {
  margin: 0;
  font-size: 24px;
  line-height: 1.5;
}
  .cards {
  width: 80%;
  max-width: 1280px;
  margin: 20px auto;
  padding: 16px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  box-sizing: border-box;
}

.forDevelopers,
.forEmployers {
  flex: 1;
  margin: 0;
  padding: 24px 20px 20px;
  border-radius: 8px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.1);
}
.developerButton,
.employerButton {
  display: inline-block;
  padding: 8px 16px;

  color: white;
  border-radius: 8px;
  text-decoration: none;

  transition: background-color 0.2s;
}

.forDevelopers {
  background-color: #f3f4f6;
}

.forEmployers {
  background-color: #dcfce7;
}

.developerButton {
  background-color: #000000;
 
}

.developerButton:hover {
  background-color: #374151;
}

.employerButton {
  background-color: #22c55e;
   text-decoration: none;
  color: white; 
}

.employerButton:hover {
  background-color: #16a34a;
}

h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}

p {
  margin-top: 8px;
  margin-bottom: 16px;
}
.viewall {
  display: block;
  width: 464px;
  max-width: calc(100% - 32px);
  margin: 30px auto;
  padding: 16px 24px;
  box-sizing: border-box;

  background-color: black;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  border-radius: 12px;
}

.viewall:hover {
  background-color: #374151;
}

/* Smaller screens */
@media (max-width: 767px) {
  .hero {
    min-height: 240px;
    padding: 32px 16px;
  }

  .hero-title {
    font-size: 40px;
  }

  .hero-subtitle {
    font-size: 18px;
  }
}
</style>