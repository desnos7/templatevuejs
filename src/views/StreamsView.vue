<template>
    <ComponentPreload/>
  <ComponentStreams/>
  <ComponentFooter/>
</template>

<script>
    import ComponentPreload from '@/components/ComponentPreload.vue';
 import ComponentStreams from '@/components/ComponentStreams.vue';
  import ComponentFooter from '@/components/ComponentFooter.vue';
export default {
  name:'Sreamsview',
  components:{
    ComponentFooter,ComponentStreams,ComponentPreload
  }

}

</script>

<style>

</style>