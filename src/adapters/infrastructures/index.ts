import customAxios from "./axios/customeAxios";
import Remote, { IRemote } from "./Remote";

import WebStorage, { IWebStorage } from "./Storage";

export interface IInfrastructures {
  remote: IRemote;
  webStorage: IWebStorage;
}

export default (): IInfrastructures => {
  return {
    remote: new Remote(customAxios),
    webStorage: new WebStorage(),
  };
};
