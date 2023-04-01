import { CircleLoader } from "react-spinners";
import styled from "styled-components";
import { useGetBeer } from "../../utils/query";
import {
  FoodCategory,
  FoodContainer,
  FoodGrid,
  FoodItem,
} from "../common/styles";

export const Beer = () => {
  const { beer, isLoading, error } = useGetBeer();

  if (isLoading) return <CircleLoader />;

  const renderBeer = () =>
    beer?.map((item) => {
      const { company, name, type, alcohol, location, pour, price } =
        item.fields;

      const alcoholAsPercentage = alcohol
        ? `${(alcohol * 100).toFixed(1)} %`
        : "";

      return (
        <FoodItem key={item.id}>
          <h3>{company}</h3>
          <p>
            {name} | {type} | {alcoholAsPercentage}{" "}
            {alcoholAsPercentage ? "|" : ""} {location} | {pour} | {price}
          </p>
        </FoodItem>
      );
    });

  return (
    <FoodContainer>
      <FoodCategory>
        <h2>Beer</h2>
      </FoodCategory>
      <FoodGrid>{renderBeer()}</FoodGrid>
    </FoodContainer>
  );
};
