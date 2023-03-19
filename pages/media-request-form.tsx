import styled from "styled-components";
import { Layout } from "../components/common";
import { MediaRequestForm as MediaRequestFormComponent } from "../components/mediaRequestForm";

const Container = styled.div`
  padding: 5rem 0;
  text-align: center;
`;

const MediaRequestForm = () => {
  return (
    <Layout>
      <Container>
        <MediaRequestFormComponent />
      </Container>
    </Layout>
  );
};

export default MediaRequestForm;
