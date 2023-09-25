<template>
  <div class="heading-container">
    
  <div class="heading">
    <h1>Hello!</h1>
    <h1>I'm <span style="color: yellow;">David</span> Stupar</h1>
    <h1>Web <span style="color: yellow;">Developer</span></h1>
  </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
    
  }
  },
 
}
</script>

<style scoped>
.heading{
  color: white;
  position: absolute;  
  font-size: xx-large;
  margin-top: 43rem;
  opacity: 0;
  animation: fade-in 1s ease-in-out forwards;
  
}
  
.heading-container{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
}
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media only screen and (max-width: 600px) {
  .heading{
    font-size: medium;
  }
}

</style>