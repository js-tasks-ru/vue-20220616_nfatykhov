import { createApp } from './vendor/vue.esm-browser.js';
import {defineComponent} from "../02-VueCalculator/vendor/vue.esm-browser";

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение

const App = defineComponent({
  data() {
    return {
      selector: null,
      meetup: null
    }
  },
  watch: {
    selector: function (newVal, oldVal) {
      fetchMeetupById(newVal).then((meetup) => this.meetup =  meetup);
    }
  }
});

const app = createApp(App);
const vm = app.mount('#app');
