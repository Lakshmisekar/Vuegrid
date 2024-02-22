<template>
    <div>
      <h1>User Details</h1>
      <UserDetails :user="user" />
    </div>
  </template>
  
  <script>
  import UserDetails from './UserDetails.vue';
  
  export default {
    name: 'UserDetailsPage',
    components: {
      UserDetails,
    },
    computed: {
      user() {
       
        return this.$store.state.selectedUser; 
      },
    },
  };
  </script>
  