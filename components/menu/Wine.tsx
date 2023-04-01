import { CircleLoader } from "react-spinners";
import styled from "styled-components";
import { useGetWine } from "../../utils/query";
import {
  FoodCategory,
  FoodContainer,
  FoodGrid,
  FoodItem,
} from "../common/styles";

export const Wine = () => {
  const { wine, isLoading, error } = useGetWine();
  const red = wine?.filter((item) => item.fields.type === "red");
  const white = wine?.filter((item) => item.fields.type === "white");
  const rose = wine?.filter((item) => item.fields.type === "rose");
  const orange = wine?.filter((item) => item.fields.type === "orange");

  if (isLoading) return <CircleLoader />;

  const renderWhite = () =>
    white?.map((item) => (
      <FoodItem key={item.id}>
        <h3>{item.fields.name}</h3>
        <p>
          {item.fields.year ?? "n/v"} | {item.fields.description} |{" "}
          {item.fields.glass_price} | {item.fields.bottle_price}
        </p>
      </FoodItem>
    ));

  const renderRed = () =>
    red?.map((item) => (
      <FoodItem key={item.id}>
        <h3>{item.fields.name}</h3>
        <p>
          {item.fields.year ?? "n/v"} | {item.fields.description} |{" "}
          {item.fields.glass_price} | {item.fields.bottle_price}
        </p>
      </FoodItem>
    ));

  const renderRose = () =>
    rose?.map((item) => (
      <FoodItem key={item.id}>
        <h3>{item.fields.name}</h3>
        <p>
          {item.fields.year ?? "n/v"} | {item.fields.description} |{" "}
          {item.fields.glass_price} | {item.fields.bottle_price}
        </p>
      </FoodItem>
    ));

  const renderOrange = () =>
    orange?.map((item) => (
      <FoodItem key={item.id}>
        <h3>{item.fields.name}</h3>
        <p>
          {item.fields.year ?? "n/v"} | {item.fields.description} |{" "}
          {item.fields.glass_price} | {item.fields.bottle_price}
        </p>
      </FoodItem>
    ));

  return (
    <FoodContainer>
      <FoodCategory>
        <h2>White</h2>
      </FoodCategory>
      <FoodGrid>{renderWhite()}</FoodGrid>
      <FoodCategory>
        <h2>Orange</h2>
      </FoodCategory>
      <FoodGrid>{renderOrange()}</FoodGrid>
      <FoodCategory>
        <h2>Rose</h2>
      </FoodCategory>
      <FoodGrid>{renderRose()}</FoodGrid>
      <FoodCategory>
        <h2>Red</h2>
      </FoodCategory>
      <FoodGrid>{renderRed()}</FoodGrid>
    </FoodContainer>
  );
};
