// pages/index.tsx
import Layout from '../app/layout';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  color: #5a5a5a; /* Darker grey for text */
`;

const TopSection = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;


const LeftSide = styled.div`
  flex: 1;
  min-width: 300px;
  margin-right: 50px;
  text-align: center;
`;

const RightSide = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const Window = styled(Link)`
  background: #f0e6d6; /* Light beige */
  box-shadow: 4px 4px 8px #e8dccc, -4px -4px 8px #fffbf5;
  padding: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: #5a5a5a;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 4px 4px 12px #dcd3c5, -4px -4px 12px #fffaf0;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const WindowIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
`;

const Description = styled.p`
  line-height: 1.6;
  background: #e8e1d8; /* White beige for better contrast */
  padding: 15px;
  border-radius: 10px;
  box-shadow: 4px 4px 8px #e8dccc, -4px -4px 8px #fffbf5;
  margin-top: 20px;
  font-weight: bolder;
`;

export default function Home() {
  return (
    <Layout>
      <Container>
      <TopSection>
          <Description>
          Bienvenue chez Sayarent, votre partenaire de confiance pour la location de voitures au Maroc. Que vous soyez un voyageur international ou résident local, Sayarent s'engage à vous offrir une expérience de location de voiture exceptionnelle adaptée à vos besoins.          </Description>
        </TopSection>
        <LeftSide>
          <Image src="/presentation.png" alt="Presentation" width={400} height={200} layout="responsive" />
        </LeftSide>
        <RightSide>
          <Window href="/cars">
            <div>
              <h3>NOS OPTIONS</h3>
              <p>Choisissez la meilleure voiture pour votre besoin.</p>
            </div>
            <WindowIcon src="/car-icon.png" alt="Car Icon" />
          </Window>
          <Window href="/rental-policies">
            <div>
              <h3>NOTRE POLITIQUE</h3>
              <p>Veuillez lire le réglement avant toute location.</p>
            </div>
            <WindowIcon src="/policy-icon.png" alt="Policy Icon" />
          </Window>
          <Window href="/about">
            <div>
              <h3>NOUS TROUVER</h3>
              <p>Contactez-nous pour plus de renseignements.</p>
            </div>
            <WindowIcon src="/location-icon.png" alt="Location Icon" />
          </Window>
        </RightSide>
      </Container>
    </Layout>
  );
}
