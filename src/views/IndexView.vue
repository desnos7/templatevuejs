<template>
  <ComponentPreload/>
  <ComponentIndex/>
  <ComponentFooter/>
</template>

<script>
  import ComponentPreload from '@/components/ComponentPreload.vue';
 import ComponentIndex from '@/components/ComponentIndex.vue';
  import ComponentFooter from '@/components/ComponentFooter.vue';
export default {
  name:'Indexview',
  components:{
    ComponentFooter,ComponentIndex,ComponentPreload
  }

}
</script>

<style>

</style>
