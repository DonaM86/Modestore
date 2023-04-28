<template>
  <div>
    <BonnieLogo />
    <MobileMainNav />
    <SidebarMenu />
    <BottomNavbar />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  import MobileMainNav from './components/Navigation/MobileMainNav.vue'
  import SidebarMenu from './components/Navigation/SidebarMenu.vue'
  import BonnieLogo from './components/bonnielogo/BonnieLogo.vue'
  import BottomNavbar from './components/Navigation/bottomnavbar.vue'

  export default {
    name: 'App',

    components: {
      MobileMainNav,
      SidebarMenu,
      BonnieLogo,
      BottomNavbar
    }
  }
</script>
