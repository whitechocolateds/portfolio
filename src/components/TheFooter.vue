<template>
  <div class="footer">
    <section class="footer-navigation">
      <p class="nav-text">Follow me on social media</p>
      <div class="nav">
      <a
              href="https://www.facebook.com/david.stupar.3"
              target="_blank"
              class="navLink"
            >
              <v-icon icon="fab fa-facebook" color="white" />
            </a>
            <a
              href="https://www.instagram.com/whitechocolate_ds/"
              target="_blank"
              class="navLink"
            >
              <img
                src="https://icons.iconarchive.com/icons/designbolts/free-instagram/128/Active-Instagram-4-icon.png"
                width="25"
                height="25"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/david-stupar-00851a11a/"
              target="_blank"
              class="navLink"
            >
              <v-icon icon="fab fa-linkedin" color="white" />
            </a>
            </div>
    </section >
    <section class="footer-text">
      <p class="footerParagraph">Created by David Stupar
<span class="material-symbols-outlined" >
copyright
</span>
 All  rights reserved</p>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row;
  left: 0;
  bottom: 1rem;
  width: 90%;
  z-index: 1;
  
}
.footer-navigation{
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 18%;
  flex-flow: column;
}
.footer-text{
  color: white;
  display: flex;
  align-items: center;
}
.nav{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 15rem;
  margin-top: 2px;
}
.nav-text{
  color: white;
  font-size: medium;
 
  
}
@media only screen and (max-width: 600px) {
  .footer-text{
    display: none;
    
    
  }
  .nav-text{
    white-space: nowrap;
  }
}
</style>