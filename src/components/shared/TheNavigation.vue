<template>
   <nav class="navbar navbar-expand-sm py-4 " id="test">
       
       <div class="container">
        <router-link to="/" class="navbar-brand"><img src="@/assets/images/Nav-logo.png" alt="" id="nav-img" width="200" height="30"></router-link>
        <button class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <i class="bi bi-list"></i>
        </button>
       <div class="collapse navbar-collapse" id="navbarNav">
           <ul class="navbar-nav ms-auto">
               <li class="nav-item ms-auto active">
                   <router-link class="nav-link" to="/about-view">About</router-link>
               </li>
           </ul>
       </div>
       </div>
   </nav>
  
</template>

<style scoped>

.navbar-brand{
    color: rgb(255, 255, 255) !important;
    font-family: Montserrat, sans-serif !important;
    font-size: 24px !important;
    font-weight: bolder !important;
}

.bi{
    color: #0d0d0d !important;

}

.navbar-toggler{
    -webkit-box-shadow: none!important;
    box-shadow: none!important;
    outline: 0 !important;
    border: none !important;
    height: 26px !important;
    
}

.nav-link{
    color: #0d0d0d !important;
    font-family: Montserrat, sans-serif;
}
</style>