import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'UiAlert',

  template: `
    <div class="alert">
      <slot>Программа пока пуста...</slot>
    </div>`,
});
