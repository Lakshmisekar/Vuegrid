<template> 

  <div> 

    <b-navbar toggleable="sm" type="light" variant="light" class="fixed-top" style="background-color: #3498db; padding: 15px;"> 

      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle> 

 

      <b-navbar-brand style="color: #fff; font-size: 1.2rem;">Home</b-navbar-brand> 

 

      <b-collapse id="nav-text-collapse" is-nav> 

        <b-navbar-nav> 

          <b-nav-item href="#" style="color: #fff; font-size: 1.2rem; margin-left: 20px;">Admin</b-nav-item> 

        </b-navbar-nav> 

      </b-collapse> 

    </b-navbar> 

  </div> 

</template> 

 

<script> 

export default { 

  name: 'Navbar', 

}; 

</script> 

<style scoped> 



.fixed-top { 

  position: fixed; 

  top: 0; 

  width: 100%; 

  z-index: 1000; 

} 

 

.navbar-brand { 

  font-weight: bold; 

  margin-right: 20px; 

} 

 

.navbar-nav { 

  margin-right: auto; 

} 

</style> 
