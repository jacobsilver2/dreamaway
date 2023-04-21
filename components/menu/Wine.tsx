import React from "react";
import { CircleLoader } from "react-spinners";
import { useGetWine } from "../../utils/query";
import {
  FoodCategory,
  FoodContainer,
  FoodGrid,
  FoodItem,
} from "../common/styles";

export const Wine = () => {
  const { wineByType, isLoading, error } = useGetWine();
  if (isLoading) return <CircleLoader />;
  if (error) return <p>Something went wrong</p>;

  const renderWineByType = () =>
    Object.keys(wineByType)
      .sort((a, b) => a.localeCompare(b))
      .map((type) => {
        return (
          <React.Fragment key={type}>
            <FoodCategory>
              <h2>{type}</h2>
            </FoodCategory>
            <FoodGrid>
              {wineByType[type].map((item) => (
                <FoodItem key={item.id}>
                  <h3>{item.fields.name}</h3>
                  <p>
                    {item.fields.year ?? "n/v"} | {item.fields.description} |{" "}
                    {item.fields.glass_price} | {item.fields.bottle_price}
                  </p>
                </FoodItem>
              ))}
            </FoodGrid>
          </React.Fragment>
        );
      });

  return <FoodContainer>{renderWineByType()}</FoodContainer>;
};
