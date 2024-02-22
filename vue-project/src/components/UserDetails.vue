<template> 
  <div class="user-card-container">
    <div class="user-card">
      <h2>User Details</h2> 
      <div>Name: {{ user.name }}</div> 
      <div>Email: {{ user.email }}</div> 
      <div>Phone: {{ user.phone }}</div> 
      <div>Website: {{ user.website }}</div> 
    </div>
  </div>
</template> 

<script> 
export default { 
  props: { 
    user: { 
      type: Object, 
      required: true 
    } 
  } 
}; 
</script> 

<style>
.user-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.user-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px; 
  width: 100%;
}
</style>
