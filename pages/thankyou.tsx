import { useRouter } from "next/router";
import { ThankYouLayout } from "../components/common/layouts";
import { NextPageWithLayout } from "./_app";

const ThankYou: NextPageWithLayout = () => {
  const { push } = useRouter();

  setTimeout(() => {
    push("/");
  }, 3000);

  return <h1>Thank you!</h1>;
};

ThankYou.getLayout = (page) => {
  return <ThankYouLayout>{page}</ThankYouLayout>;
};

export default ThankYou;
