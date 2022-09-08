<template>
  <ComponentPreload/>
  <ComponentBrowse/>
  <ComponentFooter/>
  
</template>

<script>
 
  import ComponentBrowse from '@/components/ComponentBrowse.vue';
  import ComponentFooter from '@/components/ComponentFooter.vue';
import ComponentPreload from '@/components/ComponentPreload.vue';
export default {
  name:'Browseview',
  components:{
    ComponentFooter,
    ComponentBrowse,
    ComponentPreload
}

}
</script>

<style>

</style>
