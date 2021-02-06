import Vue from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(utc);

Object.defineProperties(Vue.prototype, {
  $date: {
    get() {
      return dayjs;
    }
  }
});
