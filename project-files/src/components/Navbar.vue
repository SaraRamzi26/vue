<script setup>
import { RouterLink } from 'vue-router';
import logo from '/assets/logo.png'
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/" class="logo-link">
      <img
        :src="logo"
        class="logo-image"
        alt="Vue Jobs"
      />
    
      <span class="logo-text">Vue Jobs</span>
    
    </RouterLink>
  
<div class="cc">
<RouterLink to="/"
class="buttons"
active-class="active-link"
 exact-active-class="active-link"
 >Home</RouterLink>

<RouterLink :to="{name: 'Jobs'}"
class="buttons"
active-class="active-link" >Jobs</RouterLink>

<RouterLink :to="{name: 'AddJob'}"
class="buttons"
active-class="active-link"
>Add Job</RouterLink>
  </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  min-height: 80px;
  padding: 16px 48px;
  display: flex;
  align-items: center;
  background-color: #15803d;
  box-sizing: border-box;
  border-radius: 8px 0px 0px 0px;
border-bottom: 1px solid #22c55e;}

.logo-link {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin-right: 16px;
  text-decoration: none;
}

.logo-image {
  height: 40px;
  width: auto;
}

.logo-text {
  margin-left: 8px;
  color: white;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
}

.buttons {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 12px;
}

.buttons{
  padding: 12px 16px;
  color: white;
  font-size: 18px;
  text-decoration: none;
  border-radius: 8px;
}

/* The currently selected route */
.active-link {
  background-color: #166534;
}

.buttons:hover {
  background-color: #166534;
}
.cc{
  display: flex;
margin-left: auto;
  gap: 12px;
}
@media (max-width: 767px) {
  .navbar {
    padding: 16px 24px;
  }

  .logo-text {
    display: none;
  }

  .buttons {
    gap: 4px;
  }

  .buttons {
    padding: 10px;
    font-size: 16px;
  }
}
</style>