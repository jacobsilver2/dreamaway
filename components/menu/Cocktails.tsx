import { CircleLoader } from "react-spinners";
import styled from "styled-components";
import { CocktailBean } from "../../utils";
import { useGetCocktails } from "../../utils/query";
import {
  FoodCategory,
  FoodContainer,
  FoodGrid,
  FoodItem,
} from "../common/styles";

export const Cocktails = () => {
  const { cocktails, isLoading, error } = useGetCocktails();

  if (isLoading) return <CircleLoader />;

  const seasonal = cocktails?.filter((item) => item.fields.type === "seasonal");
  const shaken = cocktails?.filter((item) => item.fields.type === "shaken");
  const stirred = cocktails?.filter((item) => item.fields.type === "stirred");
  const built = cocktails?.filter((item) => item.fields.type === "built");
  const margaritas = cocktails?.filter(
    (item) => item.fields.type === "margarita"
  );

  const renderCocktail = (item: CocktailBean) => {
    const { description, name, price } = item.fields;
    return (
      <FoodItem key={item.id}>
        <h3>{name}</h3>
        <p>
          {description} {price}
        </p>
      </FoodItem>
    );
  };

  const renderSeasonal = () => seasonal?.map((item) => renderCocktail(item));
  const renderShaken = () => shaken?.map((item) => renderCocktail(item));
  const renderBuilt = () => built?.map((item) => renderCocktail(item));
  const renderMargaritas = () =>
    margaritas?.map((item) => renderCocktail(item));
  const renderStirred = () => stirred?.map((item) => renderCocktail(item));

  return (
    <FoodContainer>
      <FoodCategory>
        <h2>seasonal</h2>
        <p>
          Please let your server or bartender know of any allergies. Some of our
          cocktails contain unexpected ingredients!
        </p>
      </FoodCategory>
      <FoodGrid>{renderSeasonal()}</FoodGrid>
      <FoodCategory>
        <h2>shaken</h2>
        <p>refreshing. citrusy.</p>
      </FoodCategory>
      <FoodGrid>{renderShaken()}</FoodGrid>
      <FoodCategory>
        <h2>stirred</h2>
        <p>balanced. aromatic.</p>
      </FoodCategory>
      <FoodGrid>{renderStirred()}</FoodGrid>
      <FoodCategory>
        <h2>built</h2>
        <p>effervescent</p>
      </FoodCategory>
      <FoodGrid>{renderBuilt()}</FoodGrid>
      <FoodCategory>
        <h2>margaritas</h2>
        <p>spirit, lime, agave</p>
      </FoodCategory>
      <FoodGrid>{renderMargaritas()}</FoodGrid>
    </FoodContainer>
  );
};
