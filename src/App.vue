<template>
  <nav>
   <componentnav/>
  </nav>
  <router-view/>
</template>
<script>
  import Componentnav from "./components/Componentnav.vue";
  export default{
     components:{
      Componentnav
     } 

  }
</script>
<style>

</style>
