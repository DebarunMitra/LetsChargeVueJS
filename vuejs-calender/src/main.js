import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCtulCRfGbfur81nvb_xnN6e-OlUqaMWzM",
  authDomain: "vuejs-calender.firebaseapp.com",
  databaseURL: "https://vuejs-calender.firebaseio.com",
  projectId: "vuejs-calender",
  storageBucket: "vuejs-calender.appspot.com",
  messagingSenderId: "757724054448",
  appId: "1:757724054448:web:c01473afd0ee6951de0c75",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
