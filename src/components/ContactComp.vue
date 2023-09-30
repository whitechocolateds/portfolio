<template >
<div class="container">    
    <div class="headingContainer">
  <h1 class="text-white">CONTACT ME</h1>
  <img src="https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Places-mail-message-icon.png" width="128" height="128">

    </div>  
    <hr class="yellow">
  <v-card class="card" >
  <v-form @submit.prevent="submitForm"  >
    <v-container>
    <v-row align="center" justify="space-between" class="row">
      <label for="name" class="label">Name:</label>
      <v-text-field label="Name" v-model="form.name"  id="name" class="textfield" :rules="[rules.required]" required ></v-text-field>
    </v-row>
    <v-row align="center" justify="space-between">
      <label for="email" class="label">Email:</label>
      <v-text-field label="Email" v-model="form.email" id="email" type="email" class="textfield" :rules="[rules.required, rules.email]" required ></v-text-field>
    </v-row>   
    <v-row align="center" justify="space-between">
      <label for="message" class="label">Message:</label>
      <v-textarea label="Message" v-model="form.message" id="message" class="textfield" :rules="[rules.required]" required variant="outlined"></v-textarea>
    </v-row>
    <v-card-actions>
    <v-row justify="center">
    <v-btn type="submit" class="submit" variant="tonal" size="large" >SUBMIT </v-btn>
    </v-row>
    </v-card-actions>
    </v-container>
  </v-form>
  </v-card>
  
  
  </div>
</template>


<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',

        
        
      },
      
      rules: {
        required: value => !!value || 'Field is required',
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
      },
      
    }
  },
  methods: {
    submitForm() {
      const params = {
        name : this.form.name,
        email : this.form.email , 
        message : this.form.message
           }
      emailjs.send("service_5npa2fg", "template_x1huvlo", params, "ICe7UXkAGksSz_Elw").then(res => {
        alert("You sent message successfuly")
        console.log(res)
      })
      
    },
    
  },
  
};
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
  display: inline;
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
.textfield{
  margin-left: 10px;
  max-width: 80%;
  margin: 1%;
  color: #165392 ;
  
}

.label{
  color: #165392;
}
.card{
  margin: auto;
  position: relative;
  width: 50%;
  padding: 3%;
  margin-top: 2%;
  top: 3rem;
  z-index: 0;
}
.submit{
  margin-top: 1%;
  color: #165392
  
  
}
@media only screen and (max-width: 767px) {
  .card{
  width: 100%;
  margin-top: 40px;
  height: 32rem;
  
}
.textfield{
  width: 100%;
  max-width: 100%;
}
img{
    width: 80px;
    height: 80px;
    top: 1rem
  }
  hr.yellow{
    top: 3.5rem;
    width: 100%;
    left: 1rem;
    top: 4rem
  }
  .text-white{
    font-size: large;
  }
}
@media only screen and (max-width: 320px) {
  .card{
  width: 100%;
  margin-top: 40px;
  height: 32rem;
  
}
.textfield{
  width: 100%;
  max-width: 100%;
}
img{
    width: 80px;
    height: 80px;
    top: 1rem
  }
  hr.yellow{
    position: relative;
    top: 75px;
    width: 100%;
    left: 1rem;
    
  }
  .text-white{
    font-size: x-large;
  }
  .headingContainer img{
    display: none;
  }
}


</style>