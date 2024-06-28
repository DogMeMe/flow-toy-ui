import { SFCWithInstall } from "./type";

export const withInstall = <T>(main: T) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    app.component(main.name, main);
  };

  return main as SFCWithInstall<T>;
};
