<template>
  <header :class="{'scrolledHeader' : isScrolled}">
    <nav class="nav">
      <router-link to="/">
      <div class="myName"><span style="color: yellow;">David</span> <span style="color: white;">Stupar</span></div>
      </router-link>
      <ul  class="desktop-navigation" v-show="!mobile">
        <li><router-link to='/' class="links">Home</router-link></li>
        <li><router-link  to="/about" class="links">About</router-link></li>
        <li><router-link  to="/projects" class="links">Projects</router-link></li>
        <li><router-link to="/contact" class="links">Contact</router-link></li>
      </ul>
      <div class="bars">
      <i  class="fa-solid fa-bars rotate-bars" @click="toggleNav" v-show="mobile" ></i>
      </div>
      <Transition name="mob-nav">
        <ul  class="mob-navigation" v-show="mobileNav" @click="toggleNav">
        <li><router-link to='/' class="links">Home</router-link></li>
        <li><router-link  to="/about" class="links">About</router-link></li>
        <li><router-link  to="/projects" class="links">Projects</router-link></li>
        <li><router-link to="/contact" class="links">Contact</router-link></li>
      </ul>
      </Transition>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {      
      mobile: false,
      mobileNav: null,
      windowWidth: null,
      isScrolled: false
      
    }
  },
  created() {
    addEventListener('resize', this.screenCheck)
    this.screenCheck() 
    
  },
   mounted() {
    window.addEventListener('scroll', this.scrollNavBar);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollNavBar);
  },
  
  methods: {
    screenCheck() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth < 767) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    },
    toggleNav() {
      this.mobileNav = !this.mobileNav

    },
    scrollNavBar() {
      this.isScrolled = window.scrollY > 0
    }     
    }
  }

</script>

<style scoped>
header{
  background-color: transparent;
  width: 100%;
  position: fixed;
  transition: background-color 0.5 ease-in;
  color: white;
  height: 9%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  
}
.scrolledHeader{
  background: rgba(49, 59, 206) !important ;
}
.nav{
  
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5 ease-in;
  width: 80%;
  position: relative;
  z-index: 3;
  
}
.myName{
  text-transform: uppercase;
  font-size: larger;
}
.desktop-navigation{
  display: flex;
  flex-flow: row;
  
}
li{
  text-decoration: none;
  padding: 10px;
  margin-left: 20px;
  color: white;
  list-style: none;
  position: relative;
}
.links{
  text-decoration: none;
  color: yellow;  
  text-transform: uppercase;
  position: relative;
  
  
}
.links::after{
  content: '';
  position: absolute;
  width: 0;
  height: 3px;
  background: yellow;
  bottom: -6px;
  left: 0;
  transition: 0.3s;
  border-radius: 15ch;


}
.links:hover::after{
  width: 100% ;
  
}
.bars{
  position: absolute;
  top: 0px;
  right: 25px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rotate-bars{
  font-size: x-large;
  cursor: pointer;  
}


/* MOBILNA NAVIGACIJA*/
.mob-navigation{
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 240px;
  height: 100%;
  background: rgba(49, 59, 206);
  top: 0;
  left: 0;
  z-index: 2;
  
  
}
.mob-navigation li {
  color: white;
  margin: 15px auto;
}
.mob-nav-enter-active, .mob-nav-leave-active {
  transition: all 0.5s ease;
}
.mob-nav-enter-from, .mob-nav-leave-to {
  
  transform: translateX(-250px);
}
.mob-nav-enter-to{
transform: translateX(0);
}
a{
  text-decoration: none;
}

</style>