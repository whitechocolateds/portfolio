import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import HomeComp from '@/components/HomeComp.vue'
import About from '@/components/AboutComp.vue'
import Projects from '@/components/ProjectsComp.vue';
import Contact from '@/components/ContactComp.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',  component: HomeComp },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
  ],
});

const vuetify = createVuetify({
  components,
  directives,
  
});

createApp(App).use(router).use(vuetify).mount('#app')
