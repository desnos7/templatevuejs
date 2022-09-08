<template>
    <ComponentPreload/>
  <ComponentDetail/>
  <ComponentFooter/>
</template>

<script>
    import ComponentPreload from '@/components/ComponentPreload.vue';
 import ComponentDetail from '@/components/ComponentDetail.vue';
  import ComponentFooter from '@/components/ComponentFooter.vue';
export default {
  name:'Detailview',
  components:{
    ComponentFooter,
    ComponentDetail,ComponentPreload
}

}
</script>

<style>

</style>