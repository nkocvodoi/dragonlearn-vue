<template>
  <div id="dash-board">
    <TopMenu />
    <div class="container">
      <SideBarMenu />
    </div>
  </div>
</template>

<script>
import SideBarMenu from "../components/sidebarmenu/SideBarMenu"
import TopMenu from "../components/topmenu/TopMenu";
export default {
  components: {
    TopMenu,
    SideBarMenu
  }
};
</script>

<style scoped>
</style>