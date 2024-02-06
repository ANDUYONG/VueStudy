
import { createApp } from 'vue';
//app 실행
 import App from './App.vue';
import router from '@/router';
// import { routes } from './routes';

//parent 실행
//import App from './components/parent.vue';


// import App from './family/parent.vue';
const app = createApp(App);

app.use(router);
app.mount('#app');
// app.use(routes)

