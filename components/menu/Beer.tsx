import { CircleLoader } from "react-spinners";
import { useGetBeer } from "../../utils/query";
import {
  FoodCategory,
  FoodContainer,
  FoodGrid,
  FoodItem,
} from "../common/styles";

export const Beer = () => {
  const { draftBeers, bottleAndCanBeers, isLoading, error } = useGetBeer();

  if (isLoading) return <CircleLoader />;
  if (error) return <p>Something went wrong</p>;

  const renderDraftBeer = () =>
    draftBeers?.map((item) => {
      const { company, name, type, alcohol, location, price } = item.fields;

      const alcoholAsPercentage = alcohol
        ? `${(alcohol * 100).toFixed(1)} %`
        : "";

      return (
        <FoodItem key={item.id}>
          <h3>{company}</h3>
          <p>
            {name} | {type} | {alcoholAsPercentage}{" "}
            {alcoholAsPercentage ? "|" : ""} {location} | {price}
          </p>
        </FoodItem>
      );
    });

  const renderBottleAndCanBeers = () =>
    bottleAndCanBeers?.map((item) => {
      const { company, name, type, alcohol, location, price } = item.fields;

      const alcoholAsPercentage = alcohol
        ? `${(alcohol * 100).toFixed(1)} %`
        : "";

      return (
        <FoodItem key={item.id}>
          <h3>{company}</h3>
          <p>
            {name} | {type} | {alcoholAsPercentage}{" "}
            {alcoholAsPercentage ? "|" : ""} {location} | {price}
          </p>
        </FoodItem>
      );
    });

  return (
    <FoodContainer>
      <FoodCategory>
        <h2>Draft</h2>
      </FoodCategory>
      <FoodGrid>{renderDraftBeer()}</FoodGrid>
      <FoodCategory>
        <h2>Bottle/Can</h2>
      </FoodCategory>
      <FoodGrid>{renderBottleAndCanBeers()}</FoodGrid>
    </FoodContainer>
  );
};
