// @ts-nocheck
import Vue from "vue";
import { ValidationProvider, ValidationObserver, extend, localize } from "vee-validate";
import id, { messages } from "vee-validate/dist/locale/id.json";
import { ValidationRule } from "vee-validate/dist/types/types";
import * as rules from "vee-validate/dist/rules";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, <ValidationRule>{
    ...validation,
    message: messages[rule]
  });
}

localize({
  id
});
