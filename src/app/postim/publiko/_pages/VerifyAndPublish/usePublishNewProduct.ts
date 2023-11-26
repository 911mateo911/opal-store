import { useState } from "react";
import { ProductFormComponentBaseProps } from "../../_config";
import { NewProductFormFields } from "../../_formSchema";
import { promiseCompressImages } from "../../_helpers/promiseCompressImages";
import { uploadAction } from "opal/app/postim/_actionsPipes/uploadAction";

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

  const onSubmit = async () => {
    try {
      const product = form.getValues();
      const images = getValues(NewProductFormFields.images);
      setFormState(ProductFormPublishState.COMPRESSING_IMAGES);
      const compressedImages = await promiseCompressImages(images);
      setFormState(ProductFormPublishState.UPLOADING);

      uploadAction({
        ...product,
        images: compressedImages
      })
    } catch (error) {
      // TODO: Build a damn logger man
      console.log(error);
    }
  }

  return {
    onSubmit
  }
}
