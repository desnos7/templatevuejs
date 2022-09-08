<template>
  <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <!-- ***** Logo Start ***** -->
                  <router-link class="logo">
                        <img src="assets/images/logo.png" alt="">
                  </router-link >
                    <!-- ***** Logo End ***** -->
                    <!-- ***** Search End ***** -->
                    <div class="search-input">
                      <form id="search" action="#">
                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                        <i class="fa fa-search"></i>
                      </form>
                    </div>
                    <!-- ***** Search End ***** -->
                    <!-- ***** Menu Start ***** -->
                    <ul class="nav">
                        <router-link to="/index">Home</router-link>
                        <router-link to="/browse" class="active">Browse</router-link>
                        <router-link to="/details">Details</router-link>
                        <router-link to="/streams">Streams</router-link>
                        <router-link  to="/profile">Profile <img src="@/assets/images/profile-header.jpg" alt=""></router-link>
                    </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    <!-- ***** Menu End ***** -->
                </nav>
            </div>
        </div>
    </div>
  </header>
   
</template>

<script>
export default {

}
</script>

<style>

    

</style>