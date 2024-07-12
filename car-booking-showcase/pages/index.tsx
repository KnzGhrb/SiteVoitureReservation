// pages/index.tsx
import Layout from '../app/layout';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  color: #fff;
`;

const LeftSide = styled.div`
  flex: 1;
  min-width: 300px;
  margin-right: 20px;
`;

const RightSide = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;

const Window = styled.div`
  background: #1e1e1e;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WindowIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
`;

const Description = styled.p`
  line-height: 1.6;
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <LeftSide>
          <Image src="/presentation.png" alt="Presentation" width={600} height={400} layout="responsive" />
        </LeftSide>
        <RightSide>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
          </Description>
          <Window>
            <div>
              <h3>OUR OPTIONS</h3>
              <p>Choose the best car for your needs</p>
            </div>
            <WindowIcon src="/car-icon.png" alt="Car Icon" />
          </Window>
          <Window>
            <div>
              <h3>OUR RENTAL POLICIES</h3>
              <p>Read our policies before renting</p>
            </div>
            <WindowIcon src="/policy-icon.png" alt="Policy Icon" />
          </Window>
        </RightSide>
      </Container>
    </Layout>
  );
}
