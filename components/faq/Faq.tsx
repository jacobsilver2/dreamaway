import styled from "styled-components";
import { motion } from "framer-motion";
import { useGetFaq } from "../../utils/query";

const Container = styled(motion.div)`
  text-align: left;
`;

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const Faq = () => {
  const { faq, isLoading, error } = useGetFaq();

  const renderFaq = () => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>There was an error loading the FAQ</p>;

    return faq.map((item) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>{item.fields.heading}</h3>
        <p>{item.fields.description}</p>
      </motion.div>
    ));
  };

  return (
    <Container variants={containerVariants} initial="hidden" animate="visible">
      {renderFaq()}
    </Container>
  );
};

// return faq.map((item) => (
//   <div key={item.id}>
//     <h3>{item.fields.heading}</h3>
//     <p>{item.fields.description}</p>
//   </div>
// ));
