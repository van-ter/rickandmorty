import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import components from '@/components/UI';

const app = createApp(App)

components.forEach(component => { 
    app.component(component.name, component) // реєстрація UI компонентів, перше знач передаєм назву а друге сам компонент
});

app.use(createPinia())
app.use(router) //підключаємо всторонні модулі, бібліотеки

app.mount('#app')
