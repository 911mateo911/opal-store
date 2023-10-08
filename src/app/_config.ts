interface GLOBAL_CONFIG_TYPE {
  emailRegex: RegExp;
  fileExtensionRegex: RegExp;
};

export const GLOBAL_CONFIG: GLOBAL_CONFIG_TYPE = {
  emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  fileExtensionRegex: /\.[0-9a-z]+$/i
}
