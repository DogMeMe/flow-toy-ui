import { INSTALLED_KEY } from "@flow-toy-ui/constants";
import { each } from "lodash-es";
import type { App, Plugin } from "vue";

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    if (app[INSTALLED_KEY]) return;
    each(components, (comp: Plugin) => {
      app.use(comp);
    });
    app[INSTALLED_KEY] = true;
  };

  return {
    install,
  };
};
