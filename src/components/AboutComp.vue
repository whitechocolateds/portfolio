<template>
  <div class="container">    
    <div class="headingContainer">
  <h1 class="text-white">ABOUT ME</h1>
  <img  :src="imageSrc" class="myImage">
    </div>  
    <hr class="yellow">
    <div class="main">
      <div class="aboutMe">
        
        <p><span style="font-size: xx-large; color: yellow;">Greetings!</span> I'm a self-taught web developer proficient in <span style="color: yellow;">HTML</span>, <span style="color: yellow;">CSS</span>, and <span style="color: yellow;">JavaScript</span>, and I specialize in creating dynamic user experiences using the <span style="color: yellow;">Vue.js</span> framework. Join me on my journey as I blend creativity and code to craft engaging and interactive websites.</p>
      </div>
      <div class="details">
        <h1 style="color: yellow;">Personal information</h1>
        <p><span class="detailInfo">Full name</span>: David Stupar</p>
        <p><span class="detailInfo">Age</span>: 29</p>
        <p><span class="detailInfo">Residence</span>: Kikinda, Serbia</p>
        <p><span class="detailInfo">Email</span>: <a type="email">stupardavid3@gmail.com</a></p>
       <v-btn class="button" variant="tonal"><a href="https://drive.google.com/file/d/1-fbdXlZ_wrLAIVY6cTQ8h3DJkzoT-Hdt/view?usp=drive_link" download="My-resume.pdf" target="_blank">Download resume</a></v-btn>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: require('@/assets/IMG_4863-cover.jpg'),
      
      
      
    }    
  },
  
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;  
  margin: 0 auto;
  
}
.headingContainer{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  position: relative;
  top: 5rem;
  
}
hr.yellow {
  position: relative;
  top: 3rem; 
  left: 1rem; 
  width: 85%;
  height: 3px;
  margin: 0px auto;
  border: none;
  border-radius: 6px;
  background: yellow
}
.myImage{
  position: relative;
  top: -29px;
  width: 140px;
  height: 140px;
}
.main{
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  position: relative;
  top: 6rem;
  color: white;
}
.aboutMe{
  width: 50%;
  position: relative;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
  
}

.aboutMe p{
  text-align: justify;
  font-size: large;
}
.details{
  width: 30%;
  display: flex;
  flex-flow: column;
  position: relative;
  
}
.details p{
  margin-bottom: 10px;
}
.detailInfo{
  color: yellow;
  margin-bottom: 9px;
}
.button a{
  color: yellow;
  text-decoration: none;
}
@media only screen and (max-width: 600px) {
  .main{
  display: flex;
  flex-flow: column;
  justify-content: space-between;  
  width: 100%;
  
}
.aboutMe{
  width: 100%;
  position: relative;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
}


.details{
  width: 70%;
  margin-top: 25px;
  
  
}
}



</style>