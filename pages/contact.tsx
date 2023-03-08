import { ContactLayout } from "../components/common/layouts";
import { Contact as ContactComponent } from "../components/contact";
import { NextPageWithLayout } from "./_app";

const Contact: NextPageWithLayout = () => {
  return <ContactComponent />;
};

Contact.getLayout = (page) => {
  return <ContactLayout>{page}</ContactLayout>;
};

export default Contact;
