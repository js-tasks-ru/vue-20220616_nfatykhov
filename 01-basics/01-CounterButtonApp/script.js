import { createApp } from './vendor/vue.esm-browser.js';
import {defineComponent} from "./vendor/vue.esm-browser";

// Создайте Vue приложение

const App = defineComponent({

  data() {
    let counter = 0;
    return {
      foo: 'bar',
      counter
    }
  },

  methods: {
    increment(event) {
      this.counter++;
    }
  }
});


// Создаём новое приложение по корневому компоненту
const app = createApp(App);

// Монтируем приложение на странице
// Возвращается публичный экземпляр корневого компонента
const vm = app.mount('#app');
