<template>
  <div class="about-container">
    <h1>About Page</h1>
    <p>This is the About page!</p>
    <router-link to="/" class="back-link">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style>
.about-container {
  text-align: center;
  padding: 20px;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.back-link:hover {
  background-color: #218838;
}
</style>
