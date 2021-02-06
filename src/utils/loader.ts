import store from "@/store";
import NProgress from "nprogress";
import { Store } from "vuex";
import { RootState } from "@/types";

NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

export function registerWatchLoader(store: Store<RootState>) {
  store.watch(
    (state: any) => state.loader.loading,
    (newVal: number, oldVal: number): any => {
      if (newVal === 0) return NProgress.done();
      if (oldVal === 0) return NProgress.start();
      NProgress.set(1.8 / Math.max(oldVal, newVal));
    }
  );
}

export const startLoader = () => store.dispatch("loader/start");
export const finishLoader = () => store.dispatch("loader/finish");
