import { ProductDetailsRenderDataMap } from "opal/app/_shared/types";
import { ProductSubCategoryMetaData } from "../../_subcategoriesMetaData";
import { ProductDetailCardProps } from "./ProductDetailCard";
import { ReactNode } from "react";

export const mapDetailsToCardProps = (
  details: ProductSubCategoryMetaData<string>['initialValues'],
  detailsRenderData: ProductDetailsRenderDataMap<string>
): ProductDetailCardProps[] => {
  if (!details) {
    return [];
  };

  return Object.keys(detailsRenderData).reduce<ProductDetailCardProps[]>((previousData, currentKey) => {
    const { iconSrc, detailName, metricUnit, boolValueMapping, selectValueMapping } = detailsRenderData[currentKey];
    const detailFieldFromRenderData = details[currentKey]?.[currentKey];

    if (typeof detailFieldFromRenderData === 'undefined') {
      return previousData;
    };

    let data: typeof detailFieldFromRenderData | ReactNode = detailFieldFromRenderData;

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
