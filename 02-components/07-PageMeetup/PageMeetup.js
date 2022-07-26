import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from "../06-MeetupView/MeetupView";

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      errorMessage: null,
    };
  },

  mounted() {
    this.getMeetup(this.meetupId);
  },

  watch: {
    meetupId(newId, oldId) {
      this.meetup = null;
      this.getMeetup(newId);
    },
  },

  methods: {
    getMeetup(id) {
      fetchMeetupById(id)
        .then((meetup) => {
          this.meetup = meetup;
        })
        .catch((e) => {
          this.errorMessage = e.message ?? 'Ошибка загрузки митапа';
        });
    },
  },

  template: `
    <div class="page-meetup">
        <meetup-view v-if="meetup" :meetup="meetup"/>
        <ui-container v-else-if="!errorMessage">
            <ui-alert >Загрузка...</ui-alert>
        </ui-container>
        <ui-container v-else>
            <ui-alert >{{ errorMessage }}</ui-alert>
        </ui-container>
    </div>`,
});
