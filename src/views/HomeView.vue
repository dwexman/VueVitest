<template>
  <div class="home-container">
    <h1>Home Page</h1>
    <p>Welcome to the Home Page!</p>
    <nav>
      <router-link to="/about" class="nav-link">Go to About</router-link>
      <router-link to="/contact" class="nav-link">Go to Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style>
.home-container {
  text-align: center;
  padding: 20px;
}

.nav-link {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #0056b3;
}
</style>
