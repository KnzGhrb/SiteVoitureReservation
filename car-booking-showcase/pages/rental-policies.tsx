// pages/rental-policies.tsx
import Layout from '../app/layout';
import styled from 'styled-components';

const Container = styled.div`
  color: #fff;
`;

const Policies = styled.div`
  background: #1e1e1e;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export default function RentalPolicies() {
  return (
    <Layout>
      <Container>
        <h2>Our Rental Policies</h2>
        <Policies>
          <p>Here you can provide detailed information about your rental policies, terms and conditions, and any other relevant information that customers need to know before renting a car.</p>
        </Policies>
      </Container>
    </Layout>
  );
}
