<template>
  <div class="contact-container">
    <h1>Contact Page</h1>
    <p>This is the Contact page!</p>
    <router-link to="/" class="back-link">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
};
</script>

<style>
.contact-container {
  text-align: center;
  padding: 20px;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ffc107;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.back-link:hover {
  background-color: #e0a800;
}
</style>
