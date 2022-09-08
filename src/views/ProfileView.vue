<template>
<ComponentPreload/>
<ComponentProfile/>
  <ComponentFooter/>
</template>

<script>
    import ComponentPreload from '@/components/ComponentPreload.vue';
 import ComponentProfile from '@/components/ComponentProfile.vue';
  import ComponentFooter from '@/components/ComponentFooter.vue';
export default {
  name:'Profileview',
  components:{
    ComponentFooter,ComponentProfile,ComponentPreload
  }

}
</script>

<style>

</style>