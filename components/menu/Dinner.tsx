import { CircleLoader } from "react-spinners";
import { useGetFood } from "../../utils/query";
import {
  FoodCategory,
  FoodContainer,
  FoodGrid,
  FoodItem,
} from "../common/styles";

export const Dinner = () => {
  const { food, isLoading, error } = useGetFood();
  const dinner = food?.filter((item) => item.fields.type === "main");
  const appetizers = food?.filter((item) => item.fields.type === "appetizer");
  const dessert = food?.filter((item) => item.fields.type === "dessert");

  if (isLoading) return <CircleLoader />;

  const renderAppetizers = () =>
    appetizers?.map((item) => (
      <FoodItem key={item.id}>
        <h3>{item.fields.name}</h3>
        <p>{item.fields.description}</p>
        <p>
          {item.fields.price}
          {item.fields.vegan && " (V)"}
          {item.fields.gluten_free && " (GF)"}
          {item.fields.vegan_option && " (VO)"}
        </p>
      </FoodItem>
    ));

  const renderDinner = () =>
    dinner?.map((item) => (
      <FoodItem key={item.id}>
        <h3>{item.fields.name}</h3>
        <p>{item.fields.description}</p>
        <p>
          {item.fields.price}
          {item.fields.vegan && " (V)"}
          {item.fields.gluten_free && " (GF)"}
          {item.fields.vegan_option && " (VO)"}
        </p>
      </FoodItem>
    ));

  const renderDessert = () =>
    dessert?.map((item) => (
      <FoodItem key={item.id}>
        <h3>{item.fields.name}</h3>
        <p>{item.fields.description}</p>
        <p>
          {item.fields.price}
          {item.fields.vegan && " (V)"}
          {item.fields.gluten_free && " (GF)"}
          {item.fields.vegan_option && " (VO)"}
        </p>
      </FoodItem>
    ));

  return (
    <FoodContainer>
      <FoodCategory>
        <h1>Dinner</h1>
        <p>v = vegan | vo = vegan option | gf = gluten free</p>
      </FoodCategory>
      <FoodCategory>
        <h2>Appetizers</h2>
      </FoodCategory>
      <FoodGrid>{renderAppetizers()}</FoodGrid>
      <FoodCategory>
        <h2>Main</h2>
      </FoodCategory>
      <FoodGrid>{renderDinner()}</FoodGrid>
      <FoodCategory>
        <h2>Dessert</h2>
      </FoodCategory>
      <FoodGrid>{renderDessert()}</FoodGrid>
    </FoodContainer>
  );
};
