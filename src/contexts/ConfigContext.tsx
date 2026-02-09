import { createContext, useContext } from "react";

export interface ConfigContextType {
  immichURL: string;
  exImmichUrl: string;
  version?: string;
  geminiEnabled: boolean;
  oauthEnabled: boolean;
  oauthButtonText: string;
}

const ConfigContext = createContext<ConfigContextType>({
  immichURL: "",
  exImmichUrl: "",
  version: "",
  geminiEnabled: false,
  oauthEnabled: false,
  oauthButtonText: "",
});

export default ConfigContext;

export const useConfig = () => {
  const context = useContext(ConfigContext) as ConfigContextType;
  return context;
}