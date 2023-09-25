<template>
  <div class="app">
    <the-navigation></the-navigation>
    <router-view v-slot="{ Component }">
  <transition name="fade" mode="out-in">
    <component :is="Component" key="$route.path" />
  </transition>
</router-view>
    <the-footer></the-footer>    
  </div>
  
  
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    TheNavigation,
    TheFooter
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@600&family=Nunito+Sans:opsz@6..12&family=Playfair+Display&family=Roboto+Condensed&display=swap');

*{
  margin: 0;
  padding: 0%;
  box-sizing: border-box;
  font-weight: 500;
  font-family: 'Arimo', sans-serif;
}
.app{
  position: relative;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('C:\Users\PC\Desktop\Projekti\portfolio-site\src\assets\23485395_44.jpg')
  
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


</style>
