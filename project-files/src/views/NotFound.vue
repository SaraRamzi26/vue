<template>
  <section class="not-found-page">
    <div class="not-found-card">
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <RouterLink to="/" class="home-button">
        Go Back Home
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.not-found-page {
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: #ecfdf5;
  box-sizing: border-box;
}

.not-found-card {
  max-width: 600px;
  padding: 50px;
  text-align: center;
}

.not-found-card h1 {
  margin: 0;
  color: #15803d;
  font-size: 90px;
}

.not-found-card h2 {
  margin: 10px 0;
  font-size: 32px;
}

.not-found-card p {
  margin: 0 0 28px;
  color: #6b7280;
  font-size: 18px;
}

.home-button {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 30px;
  background-color: #22c55e;
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.home-button:hover {
  background-color: #15803d;
}
</style>