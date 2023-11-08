import { ProductDetailsRenderDataMap } from "opal/app/_shared/types";
import { ProductSubCategoryMetaData } from "../../_subcategoriesMetaData";
import { ProductDetailCardProps } from "./ProductDetailCard";
import { ReactNode } from "react";
import { PRODUCT_CONDITION } from "@prisma/client";
import { PRODUCT_CONDITION_SELECT_OPTIONS } from "../../_config";
import ProductConditionIcon from 'opal/app/_shared/icons/details/condition.svg?url';

export const mapDetailsToCardProps = (
  details: ProductSubCategoryMetaData<string>['initialValues'],
  detailsRenderData: ProductDetailsRenderDataMap<string>
): ProductDetailCardProps[] => {
  if (!details) {
    return [];
  };

  return Object.keys(detailsRenderData).reduce<ProductDetailCardProps[]>((previousData, currentKey) => {
    const { iconSrc, detailName, metricUnit, boolValueMapping, selectValueMapping, extraField } = detailsRenderData[currentKey];
    const detailFieldFromRenderData = details[extraField ? extraField : currentKey]?.[currentKey];

    if (typeof detailFieldFromRenderData === 'undefined') {
      return previousData;
    };

    let data: typeof detailFieldFromRenderData | ReactNode = detailFieldFromRenderData;

    if (typeof data !== 'boolean' && !data) {
      return previousData;
    };

    if (boolValueMapping) {
      data = data ? boolValueMapping.truthy : boolValueMapping.false;
    };

    if (selectValueMapping) {
      data = selectValueMapping[data.toString()].element;
    }

    if (metricUnit) {
      data = data + ` ${metricUnit}`;
    };

    return previousData.concat([{
      data,
      detailName,
      iconSrc,
      metricUnit
    }]);
  }, []);
};

export const createProductConditionDetailsCardProps = (condition: PRODUCT_CONDITION): ProductDetailCardProps => ({
  data: PRODUCT_CONDITION_SELECT_OPTIONS[condition].element,
  detailName: 'Gjendja',
  iconSrc: ProductConditionIcon
});
