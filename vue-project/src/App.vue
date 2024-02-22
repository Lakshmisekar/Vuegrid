<template>
  <div id="app">
    <Navbar />
    <div class="grid-gap"></div> <!-- Add a gap between Navbar and WeatherGrid -->
    <WeatherGrid :users="users" @rowClicked="showDetails" />
    <div class="user-details-container">
      <UserDetails v-if="selectedUser" :user="selectedUser" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import WeatherGrid from './components/WeatherGrid.vue';
import UserDetails from './components/UserDetails.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    WeatherGrid,
    UserDetails,
  },
  data() {
    return {
      users: [],
      selectedUser: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        this.users = data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    showDetails(user) {
      this.selectedUser = user;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid-gap {
  margin-top: 60px; 
}

.user-details-container {
  display: flex;
  justify-content: center;
  margin-top: 20px; 
}
</style>
