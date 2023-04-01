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
  };
};

export type WineTypeBean = "red" | "white" | "rose" | "orange";
export type WineBean = {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    description: string;
    type: WineTypeBean;
    year: string;
    glass_price: string;
    bottle_price: string;
  };
};

export type BeerTypeBean =
  | "pilsner"
  | "ipa"
  | "pale_ale"
  | "stout"
  | "non-alcoholic";

export type BeerPourBean = "draft" | "bottle" | "can";

export type BeerBean = {
  id: string;
  createdTime: string;
  fields: {
    company: string;
    name: string;
    type: BeerTypeBean;
    pour: BeerPourBean;
    price: string;
    location: string;
    alcohol: number;
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

export type LayoutProps = {
  children: React.ReactNode;
};
