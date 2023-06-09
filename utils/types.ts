import { StaticImageData } from "next/image";

export type IsFuture = "future" | null;

export type Airtable_Thumbnail = {
  url: string;
  width: number;
  height: number;
};

export type Airtable_Image = {
  filename: string;
  height: number;
  id: string;
  size: number;
  thumbnails: {
    small: Airtable_Thumbnail;
    large: Airtable_Thumbnail;
    full: Airtable_Thumbnail;
  };
  type: string;
  url: string;
  width: number;
};

export type Airtable_Event_Status = "Confirmed" | "Held" | "Cancelled";

export type EventBean = {
  id: string;
  createdTime: string;
  fields: {
    Act: string[];
    Created_Time: string;
    Date: string;
    Date_UTC: string;
    Is_Future: IsFuture;
    Name: string;
    featured?: boolean;
    Status_Updated_Time: string;
    Time_Formatted: string;
    Time_Military: string;
    act_blurb: string[];
    act_email: string[];
    act_id: string[];
    act_image: Airtable_Image[];
    act_url: string[];
    act_firstName: string;
    act_lastName: string;
    id: string;
    status: Airtable_Event_Status;
  };
};

export type ActInput = {
  Name?: string;
  First_Name?: string;
  Last_Name?: string;
  Blurb?: string;
  Url?: string;
  Image?: string;
};

export type BookingSubmissionInputBean = {
  firstName: string;
  lastName: string;
  email: string;
  act_name: string;
  number_of_band_members: "1" | "2" | "3" | "4" | "5 or more";
  website_1: string;
  website_2: string;
  website_3: string;
  message: string;
};

export type GeneralSubmissionInputBean = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export type ShootsSubmissionBean = {
  name: string;
  phone: string;
  email: string;
  crew: string;
  type: string;
  date: string;
  hours: string;
  start_time: string;
  production_name: string;
  production_company: string;
  location: string;
  vehicles: string;
  additional_info: string;
};

export type EventSubmissionBean = {
  name: string;
  email: string;
  phone: string;
  people: string;
  date: string;
  time: string;
  hours: string;
  location: "inside" | "outside" | "inside and outside";
  bar: "open" | "beerAndWine" | "full" | "deluxe";
  occasion: "string";
  additional_info: "string";
};

export type FoodTypeBean = "appetizer" | "main" | "dessert";
export type FoodBean = {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    description: string;
    type: FoodTypeBean;
    price: string;
    vegan: boolean;
    gluten_free: boolean;
    vegan_option: boolean;
    visible?: boolean;
    order: number;
  };
};

export type WineBean = {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    description: string;
    type: string;
    year: string;
    glass_price: string;
    bottle_price: string;
    visible?: boolean;
    order: number;
  };
};

export type BeerPourBean = "draft" | "bottle/can";

export type BeerBean = {
  id: string;
  createdTime: string;
  fields: {
    company: string;
    name: string;
    type: string;
    pour: BeerPourBean;
    price: string;
    location: string;
    alcohol: number;
    visible?: boolean;
    order: number;
  };
};

export type CocktailTypeBean =
  | "seasonal"
  | "shaken"
  | "built"
  | "margarita"
  | "stirred";

export type CocktailBean = {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    description: string;
    type: CocktailTypeBean;
    price: string;
  };
};

export type SpiritFreeBean = {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    description: string;
    price: string;
  };
};

export type FaqBean = {
  id: string;
  createdTime: string;
  fields: {
    heading: string;
    description: string;
    visible?: boolean;
    order: number;
  };
};

export type LayoutProps = {
  children: React.ReactNode;
};
