import React from 'react';
import {
  PRODUCT_CURRENCY_SELECT_OPTIONS,
  PRODUCT_STATE_SELECT_OPTIONS,
  ProductFormComponentBaseProps
} from '../../_config';
import { NewProductFormFields } from '../../_formSchema';
import clsx from 'clsx';
import { font_Inter, font_RedHatDisplay } from 'opal/app/_shared/fonts';
import { FormImagePreview } from '../../_components/FormImagePreview';
import { Chip } from 'opal/app/_shared/atoms/Chip';
import LocationIcon from 'opal/app/_shared/icons/location.svg?url';
import { Accordion } from 'opal/app/_shared/atoms/Accordion';
import EmailIcon from 'opal/app/_shared/icons/email.svg?url';
import PhoneIcon from 'opal/app/_shared/icons/phone.svg?url';
import WhatsappIcon from 'opal/app/_shared/icons/whatsapp.svg?url';
import { ProductAccordionItem } from 'opal/app/postim/_components/ProductAccordionItem';
import { FormDetailsMeta } from '../../_components/FormDetailsMeta';
import { PRODUCT_PREFERRED_COMMUNICATION } from '@prisma/client';
import { ProductDetails } from '../../_components/DetailsSection/ProductDetails';
import { usePublishNewProduct } from './usePublishNewProduct';

export const VerifyAndPublish = ({ form }: ProductFormComponentBaseProps) => {
  const { getValues } = form;
  const {
    onSubmit
  } = usePublishNewProduct(form);

  const title = getValues(NewProductFormFields.title);
  const state = getValues(NewProductFormFields.state);
  const price = getValues(NewProductFormFields.price);
  const currency = getValues(NewProductFormFields.currency);
  const isDebatablePrice = getValues(NewProductFormFields.debatablePrice);
  const location = getValues(NewProductFormFields.location);
  const deliveryAtYourPlace = getValues(NewProductFormFields.deliveryAtYourPlace);
  const preferredCommunication = getValues(NewProductFormFields.preferredCommunication);
  const description = getValues(NewProductFormFields.description);

  // TODO: A LOT OF REUSABLE COMPONENTS
  // TODO: THE DESCRIPTION
  return (
    <div>
      <h1 className={clsx(
        font_RedHatDisplay.className,
        'font-semibold text-xl pb-2.5 text-grey-90 border-b border-grey-10 mb-4',
        'dark:text-grey-5 dark:border-grey-90 max-tablet-sm:mb-2 max-tablet-sm:pb-0.5'
      )} >
        Rishiko postimin
      </h1>
      <FormDetailsMeta form={form} className='hidden max-tablet-sm:flex max-tablet-sm:mb-2' />
      <div className="grid grid-cols-2 max-tablet-sm:grid-cols-1" >
        <div className='flex w-full flex-col' >
          <FormImagePreview
            formControl={form.control}
            editable={false}
            className='between-tablet-xs-sm:h-[440px] between-mobile-lg-tablet-xs:h-96 between-mobile-md-lg:h-80 max-mobile-sm:h-52'
            horizontal
          />
          <div className='w-full mt-[10px]' >
            <ProductDetails form={form} />
          </div>
        </div>
        <div className="pl-[10px] max-tablet-sm:pl-0" >
          <FormDetailsMeta form={form} className='max-tablet-sm:hidden' />
          <h1 className={clsx(
            font_RedHatDisplay.className,
            'text-2xl font-semibold mt-1 pb-1.5 tracking-wide border-b border-grey-10 mb-0.5',
            'dark:text-grey-10 dark:border-grey-90 max-tablet-sm:mt-2'
          )} >
            Dua te {PRODUCT_STATE_SELECT_OPTIONS[state].element}: {title}
          </h1>
          <div className={clsx(
            "pt-3 grid grid-cols-[1fr_min-content] gap-[10px] items-center",
            'max-mobile-sm:grid-cols-1',
            deliveryAtYourPlace ? '!gap-5' : '!gap-3.5'
          )} >
            <p className={clsx(
              font_Inter.className,
              "py-2 relative text-center bg-blue-20 rounded-full font-semibold tracking-wider",
              'dark:bg-blue-30'
            )} >
              {price} {PRODUCT_CURRENCY_SELECT_OPTIONS[currency].element}
              {isDebatablePrice && (
                <span className={clsx(
                  'absolute tracking-tight bg-red-60 text-grey-1 -right-1 -top-2 text-[10px]',
                  'rounded-full px-1.5 py-0.5'
                )} >
                  I diskutueshem
                </span>
              )}
            </p>
            <Chip
              text={location}
              className='w-max mx-auto border-green-30 relative !bg-green-10 border min-w-[150px] max-mobile-sm:justify-center max-mobile-sm:min-w-[200px]'
              icon={LocationIcon}
              pointer={false}
              iconClassName='max-w-[16px] max-h-[16px]'
            >
              {deliveryAtYourPlace && (
                <span className={clsx(
                  'absolute tracking-tight bg-red-60 text-grey-1 -right-1 -top-[15px] text-[10px]',
                  'rounded-full px-1.5 py-0.5'
                )} >
                  Takim ne vend te caktuar
                </span>
              )}
            </Chip>
          </div>
          <div className='mt-4' >
            <Accordion
              title="Kontaktet"
            >
              <ProductAccordionItem
                icon={EmailIcon}
                title='Email'
                content='malajmateo@gmail.com'
                favourite={preferredCommunication === PRODUCT_PREFERRED_COMMUNICATION.EMAIL}
              />
              <ProductAccordionItem
                icon={PhoneIcon}
                title='Cel'
                content='+355699675522'
                favourite={preferredCommunication === PRODUCT_PREFERRED_COMMUNICATION.TEL}
              />
              <ProductAccordionItem
                icon={WhatsappIcon}
                title='Whatsapp:'
                content='+355699675522'
                favourite={preferredCommunication === PRODUCT_PREFERRED_COMMUNICATION.WHATSAPP}
              />
            </Accordion>
          </div>
          <h6 className={clsx(
            font_RedHatDisplay.className,
            'mt-3 text-base font-semibold border-b border-grey-10',
            'dark:text-grey-10 dark:border-grey-90'
          )}
            onClick={onSubmit}
          >
            Pershkrimi
          </h6>
          {/* TODO: check if you can reuse this to the product page later */}
          <p className={clsx(
            font_Inter.className,
            'whitespace-pre-line tracking-normal text-sm leading-6 pr-1 text-grey-100 font-normal mt-[1px]',
            'dark:text-grey-20'
          )} >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
