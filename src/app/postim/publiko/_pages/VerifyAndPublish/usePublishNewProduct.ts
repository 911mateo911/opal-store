import { useState } from "react";
import { ProductFormComponentBaseProps } from "../../_config";
import { NewProductFormFields } from "../../_formSchema";
import { promiseCompressImages } from "../../_helpers/promiseCompressImages";

export enum ProductFormPublishState {
  STALE = 'STALE',
  COMPRESSING_IMAGES = 'COMPRESSING_IMAGES',
  UPLOADING = 'UPLOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
};

export const usePublishNewProduct = (form: ProductFormComponentBaseProps['form']) => {
  const { getValues } = form;
  const [formState, setFormState] = useState(ProductFormPublishState.STALE);

  const images = getValues(NewProductFormFields.images);
  const imagesArray = Object.values(images);

  const onSubmit = async () => {
    try {
      setFormState(ProductFormPublishState.COMPRESSING_IMAGES);
      const compressedImages = await promiseCompressImages(imagesArray);
      setFormState(ProductFormPublishState.UPLOADING);
    } catch (error) {
      // TODO: Build a damn logger man
      console.log(error);
    }
  }

  return {
    onSubmit
  }
}
