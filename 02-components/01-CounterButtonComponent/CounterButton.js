import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  emits: ['update:count'],

  methods: {
    updateCount(event) {
      this.$emit('update:count', this.count + 1)
    }
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="updateCount">{{ count }}</button>`,
});
