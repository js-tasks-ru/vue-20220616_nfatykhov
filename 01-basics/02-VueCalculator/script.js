import { createApp } from './vendor/vue.esm-browser.js';
import {defineComponent} from "./vendor/vue.esm-browser";

const App = defineComponent({
  data() {
    return {
      num1: 0,
      num2: 0,
      operator: ""
    }
  },

  computed: {
    result() {
      if (this.operator == "") {
        return "выберите оператор";
      }
      switch (this.operator) {
        case "sum":
          return this.num1 + this.num2;
        case "subtract":
          return this.num1 - this.num2;
        case "multiply":
          return this.num1 * this.num2;
        case "divide":
          if (this.num2 === 0) {
            return "Нельзя делить на ноль";
          }
          return this.num1 / this.num2;
        default:
          return "Не поддерживаемая операция";
      }
    },
  }
});

const app = createApp(App);
const vm = app.mount('#app');
