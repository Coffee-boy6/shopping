<template>
  <navigator />
  <Tip />
  <div class="allPage">
    <router-view></router-view>
  </div>
</template>
<script>
import Navigator from "./components/Navigator.vue";
import Tip from "./components/Tip.vue";
export default {
  components: {
    Navigator,
    Tip,
  },
};
</script>
<style>
.allPage {
  max-width: 800px;
  margin: 0 auto;
}
</style>
