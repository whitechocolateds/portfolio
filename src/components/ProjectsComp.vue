<template>
   <div class="container">    
    <div class="headingContainer">
  <h1 class="text-white">PROJECTS</h1>
  <img src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Places-folder-blue-icon.png" >

    </div>  
    <hr class="yellow">
    <div class="main">
      <ul>
        <li>          
          <img :src="weatherApp">
          <div class="layer">
            <h3>WEATHER APP</h3>
            <a><v-icon icon="fa-solid fa-link" color="yellow" /></a>
          </div>
        </li>
      </ul>
    </div>

 
    
 
 
  </div>
</template>

<script>
export default {
  computed: {
    weatherApp() {
      return require('@/assets/il_570xN.1822448786_jgmn.png')
    }
  }
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
.headingContainer img{
  position: relative;
  top: -1rem;
  display: inline
}
hr.yellow {
  position: relative;
  top: 3rem;  
  width: 85%;
  height: 3px;
  margin: 0px auto;
  border: none;
  border-radius: 6px;
  background: yellow
  
}
.main {
  
  width: 80%;
  height: 100%;
  display: block;
  position: relative;
  top: 5rem;
}
.main ul{
  display: flex;
  flex-direction: row;
  
}
.main ul li{
  list-style: none;
  overflow: hidden;
  border-radius: 10px ;
  position: relative;
  
  
  
}

.main ul li img{
  width: 220px;
  height: 250px; 
  border-radius: 10px;
  display: block;
  
  
}
.layer{
  width: 100%;
  height: 0;  
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(rgb(255, 255, 0, 0.6), rgb(255, 255, 143)); 
  overflow: hidden;
  transition: all 0.3s;
  
  
   
}
.layer h3{
  color:  rgba(49, 59, 206);
  font-size: x-large
}
.layer a{
  margin-top: 10px;
  font-size: 18px;
  line-height: 60px;
  background: rgba(49, 59, 206);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  

}
.main ul li:hover .layer{
  height: 100%;
  
}

@media only screen and (max-width: 767px) {
  img{
    width: 80px;
    height: 80px;
  }
  hr.yellow{
    top: 3.5rem;
    width: 100%;
    left: 1rem;
  }
}
@media only screen and (max-width: 320px) {
  img{
    width: 80px;
    height: 80px;
  }
  hr.yellow{
    top: 3.5rem;
    width: 100%;
    left: 1rem;
  }
  .headingContainer img{
    display: none;
  }
  hr.yellow{
    position: relative;
    top: 70px
  }
}
</style>