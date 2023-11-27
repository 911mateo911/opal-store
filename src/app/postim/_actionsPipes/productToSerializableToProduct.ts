import { NewProductFormFields, NewProductSchemaType } from "../publiko/_formSchema";

enum FormDataTypeIdentifiers {
  ARRAY = '[]',
  NUM = '-num',
  BOOL = '-bool'
};

const removeIdentifierFromKey = (key: string, identifier: FormDataTypeIdentifiers) => key.replace(identifier, '');

// Due to Next JS not allowing serializable data to pass to server actions and it is shit
// Fuck u next (ily <3);
// NOTE: does not work with nested object check this FIRST
export const convertProductToFormData = (product: NewProductSchemaType): FormData => {
  const formData = new FormData();

  Object.entries(product).forEach(([key, value]) => {
    if (value instanceof Date) {
      formData.append(key, value.toISOString());
      return;
    };

    if (value instanceof Array) {
      value.forEach((element) => {
        formData.append(`${key}${FormDataTypeIdentifiers.ARRAY}`, element);
      });

      return;
    };

    if (typeof value === 'number') {
      formData.append(`${key}${FormDataTypeIdentifiers.NUM}`, value.toString());

      return;
    };

    if (typeof value === 'boolean') {
      formData.append(`${key}${FormDataTypeIdentifiers.BOOL}`, value.toString());

      return;
    }

    if (key === NewProductFormFields.details) {
      formData.append(key, JSON.stringify(value));

      return;
    };

    formData.append(key, value.toString());
  });

  return formData;
};

// This function is dogshit man
export const convertFormDataToProduct = (formData: FormData): Promise<NewProductSchemaType> => {
  const parsedObject: Record<string, any> = {};

  formData.forEach((value, key) => {
    if (key.endsWith(FormDataTypeIdentifiers.ARRAY)) {
      const strippedArrayKey = removeIdentifierFromKey(key, FormDataTypeIdentifiers.ARRAY);

      const maybePresentArray = parsedObject?.[strippedArrayKey];
      if (maybePresentArray instanceof Array) {
        maybePresentArray.push(value);
      } else {
        parsedObject[strippedArrayKey] = [value];
      };
    } else {
      if (
        key === NewProductFormFields.details &&
        typeof value === 'string'
      ) {
        parsedObject[key] = JSON.parse(value);
        return;
      };

      if (
        key.endsWith(FormDataTypeIdentifiers.BOOL)
      ) {
        parsedObject[removeIdentifierFromKey(key, FormDataTypeIdentifiers.BOOL)] = value === 'true' ? true : false;
        return;
      };

      if (typeof value === 'string' && key.endsWith(FormDataTypeIdentifiers.NUM)) {
        parsedObject[removeIdentifierFromKey(key, FormDataTypeIdentifiers.NUM)] = parseFloat(value);
        return;
      };

      parsedObject[key] = value;
    }
  });

  return Promise.resolve<NewProductSchemaType>(parsedObject as NewProductSchemaType);
}
