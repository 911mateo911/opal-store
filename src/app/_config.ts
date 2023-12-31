interface PRODUCT_FORM_CONFIG_TYPE {
  titleMaxLength: number;
  descMaxLength: number;
  apartmentSqAreaMax: number;
  carMakeMaxLength: number;
  carModelMaxLength: number;
  electronicsMakeMaxLength: number;
  electronicsScreenSizeInchMax: number,
  electronicsScreenSizeInchMin: number,
  priceMax: number;
  techDetailsCpuMaxLength: number;
  techDetailsRamMaxValue: number;
  techDetailsGpuMaxLength: number;
  techDetailsRomMaxValue: number;
};

export const PRODUCT_FORM_CONFIG: PRODUCT_FORM_CONFIG_TYPE = {
  titleMaxLength: 3000,
  descMaxLength: 8000,
  apartmentSqAreaMax: 999999,
  carMakeMaxLength: 15,
  carModelMaxLength: 20,
  electronicsMakeMaxLength: 30,
  electronicsScreenSizeInchMax: 120,
  electronicsScreenSizeInchMin: 5,
  priceMax: 1_000_000_000,
  techDetailsCpuMaxLength: 20,
  techDetailsRamMaxValue: 1_024,
  techDetailsGpuMaxLength: 30,
  techDetailsRomMaxValue: 100_000
};

interface GLOBAL_CONFIG_TYPE {
  emailRegex: RegExp;
  fileExtensionRegex: RegExp;
  phoneNumberRegex: RegExp;
  usernameRegex: RegExp;
  passwordRegex: RegExp;
};

export const GLOBAL_CONFIG: GLOBAL_CONFIG_TYPE = {
  emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  fileExtensionRegex: /\.[0-9a-z]+$/i,
  phoneNumberRegex: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
  usernameRegex: /^[a-zA-Z_](?!.*?\.{2})[\w.]{1,28}[\w]$/,
  passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/
};
