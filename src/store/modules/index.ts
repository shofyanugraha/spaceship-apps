import { camelize } from "@/utils/helpers";
import { ModuleTree } from "vuex";
import { RootState } from "@/types";

const requireModule = require.context(".", false, /\.ts$/); //extract js files inside modules folder
const modules: ModuleTree<RootState> = {};

requireModule.keys().forEach(fileName => {
  if (fileName === "./index.ts") return; //reject the index.ts file

  const moduleName = camelize(fileName.replace(/(\.\/|\.ts)/g, "")); //

  modules[moduleName] = requireModule(fileName).default;
});

export default modules;
