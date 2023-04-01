import { CircleLoader } from "react-spinners";
import styled from "styled-components";
import { useGetSpiritFree } from "../../utils/query";
import {
  FoodCategory,
  FoodContainer,
  FoodGrid,
  FoodItem,
} from "../common/styles";

export const SpiritFree = () => {
  const { spiritFree, isLoading, error } = useGetSpiritFree();

  if (isLoading) return <CircleLoader />;

  const renderSpiritFree = () =>
    spiritFree?.map((item) => {
      const { name, description, price } = item.fields;

      return (
        <FoodItem key={item.id}>
          <h3>{name}</h3>
          <p>
            {description} | {price}
          </p>
        </FoodItem>
      );
    });

  return (
    <FoodContainer>
      <FoodCategory>
        <h2>Spirit Free</h2>
      </FoodCategory>
      <FoodGrid>{renderSpiritFree()}</FoodGrid>
    </FoodContainer>
  );
};
