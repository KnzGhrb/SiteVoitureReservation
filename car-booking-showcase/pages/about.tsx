// pages/about.tsx
import Layout from '../app/layout';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const Address = styled.div`
  margin-bottom: 20px;
`;

const Map = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  border: none;
  margin-bottom: 20px;
`;

export default function About() {
  return (
    <Layout>
      <Container>
        <h2>About Us</h2>
        <Address>
        </Address>
        <Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509194!2d144.9630579156808!3d-37.81621897975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e88e6d12b0!2s1234+Elm+St%2C+City+State+ZIP+Code!5e0!3m2!1sen!2s!4v1618386222598!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </Map>
      </Container>
    </Layout>
  );
}
