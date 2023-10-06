export enum PRODUCT_DETAIL_FIELD {
  CAR_MAKE = 'CAR_MAKE',
  CAR_MODEL = 'CAR_MODEL',
  CAR_YEAR = 'CAR_YEAR',
  CAR_TRANSMISSION = 'CAR_TRANSMISSION',
  CAR_FUEL = 'CAR_FUEL',
  CAR_PLATE = 'CAR_PLATE',
  APARTMENT_ROOMS = 'APARTMENT_ROOMS',
  APARTMENT_SQAREA = 'APARTMENT_SQAREA',
  APARTMENT_FLOORS = 'APARTMENT_FLOORS',
  APARTMENT_FURNITURE = 'APARTMENT_FURNITURE',
  HOUSEHOLDS_MAKE = 'HOUSEHOLDS_MAKE',
  ELECTRONICS_MAKE = 'ELECTRONICS_MAKE',
  ELECTRONICS_EXTRA = 'ELECTRONICS_EXTRA',
  HEALTH_MAKE = 'HEALTH_MAKE',
  BUSINESS_EXTRA = 'BUSINESS_EXTRA',
  JOBS_EXTRA = 'JOBS_EXTRA'
};

export enum TECH_PRODUCT_DETAILS {
  RAM = 'RAM',
  CPU = 'CPU',
  ROM = 'ROM',
  GPU = 'GPU',
  SCREEN_SIZE = 'SCREEN_SIZE',
  WITH_CHARGER = 'WITH_CHARGER'
};

export type ProductDetailsRecord = Record<PRODUCT_DETAIL_FIELD, string>;
