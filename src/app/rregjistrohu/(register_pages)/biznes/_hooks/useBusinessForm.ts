import { UseFormReturn } from "react-hook-form";
import { BusinessFormStep, SharedRegisterFormFields, SharedRegisterSchemaType } from "opal/app/rregjistrohu/_formSchema";

const BusinessFormStepMap: Record<Exclude<BusinessFormStep, BusinessFormStep.PICTURES>, BusinessFormStep> = {
  // Step => Goes to
  [BusinessFormStep.GENERAL_INFO]: BusinessFormStep.CONTACT,
  [BusinessFormStep.CONTACT]: BusinessFormStep.AVAILABILITY,
  [BusinessFormStep.AVAILABILITY]: BusinessFormStep.PICTURES,
}

export const useBusinessForm = (form: UseFormReturn<SharedRegisterSchemaType>) => {
  const {
    setValue,
    handleSubmit,
    clearErrors
  } = form;

  const validateAndGoToNextStep = () => {
    return handleSubmit(formData => {
      clearErrors();
      const formStep = formData[SharedRegisterFormFields.formStep];

      if (formStep && formStep !== BusinessFormStep.PICTURES) {
        const nextStep = BusinessFormStepMap[formStep];

        if (nextStep) {
          setValue(SharedRegisterFormFields.formStep, nextStep);
        };
      };
      console.log({ formData });
    }, console.log)();
  };

  return {
    validateAndGoToNextStep
  }
}
