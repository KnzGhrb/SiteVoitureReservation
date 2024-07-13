// pages/index.tsx
import Layout from '../app/layout';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  line-height: 1.6;
  background: #fffaf3; /* White beige for better contrast */
  padding: 15px;
  border-radius: 10px;
  box-shadow: 4px 4px 8px #e8dccc, -4px -4px 8px #fffbf5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    margin-bottom: 10px;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled(Link)`
  background: #f0e6d6; /* Light beige */
  box-shadow: 4px 4px 8px #e8dccc, -4px -4px 8px #fffbf5;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #5a5a5a;
  flex: 1;
  min-width: 250px;
  margin: 10px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 4px 4px 12px #dcd3c5, -4px -4px 12px #fffaf0;
  }
`;

const CardIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
`;

const PolicyText = styled.p`
  margin-bottom: 10px;
  line-height: 1.6;
`;

const PolicyTitle = styled.h2`
  margin-bottom: 20px;
`;

const PolicySubtitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const PolicySection = styled.div`
  width: 100%;
  background: #f0e6d6; /* Light beige */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 4px 4px 8px #e8dccc, -4px -4px 8px #fffbf5;
  margin-bottom: 20px;
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <Section id="home">
          <Title>Bienvenue chez Sayarent</Title>
          <Description>
           Votre partenaire de confiance pour la location de voitures au Maroc. Que vous soyez un voyageur international ou résident local, Sayarent s'engage à vous offrir une expérience de location de voiture exceptionnelle adaptée à vos besoins.
          </Description>
          <Grid>
            <Card href="#services">
              <div>
                <h3>NOS OPTIONS</h3>
                <p>Choisissez la meilleure voiture pour votre besoin.</p>
              </div>
              <CardIcon src="/car-icon.png" alt="Car Icon" />
            </Card>
            <Card href="#policies">
              <div>
                <h3>NOTRE POLITIQUE</h3>
                <p>Veuillez lire le règlement avant toute location.</p>
              </div>
              <CardIcon src="/policy-icon.png" alt="Policy Icon" />
            </Card>
            <Card href="#about">
              <div>
                <h3>NOUS TROUVER</h3>
                <p>Contactez-nous pour plus de renseignements.</p>
              </div>
              <CardIcon src="/location-icon.png" alt="Location Icon" />
            </Card>
          </Grid>
        </Section>

        <Section id="services">
          <Title>Nos Services</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
          </Description>
        </Section>

        <Section id="policies">
        <PolicySection>
          <PolicyTitle>Politique de Location de Voiture</PolicyTitle>
          <PolicySubtitle>1. Conditions Générales</PolicySubtitle>
          <PolicyText>1.1. Âge Minimum: Le locataire doit avoir au moins 21 ans pour louer un véhicule. Des frais supplémentaires peuvent s'appliquer pour les conducteurs de moins de 25 ans.</PolicyText>
          <PolicyText>1.2. Permis de Conduire: Le locataire doit posséder un permis de conduire valide depuis au moins 2 ans. Les permis de conduire internationaux sont acceptés. Une copie du permis sera conservée par l'agence de location.</PolicyText>
          <PolicyText>1.3. Identification: Le locataire doit présenter une carte d'identité ou un passeport valide, ainsi qu'une preuve de domicile récente (facture de services publics, relevé bancaire, etc.).</PolicyText>

          <PolicySubtitle>2. Réservation et Paiement</PolicySubtitle>
          <PolicyText>2.1. Réservation: La réservation peut être effectuée en ligne, par téléphone ou directement à l'agence. Une carte de crédit valide est nécessaire pour garantir la réservation.</PolicyText>
          <PolicyText>2.2. Paiement: Le paiement peut être effectué par carte de crédit, carte de débit ou en espèces. Un dépôt de garantie sera requis et sera bloqué sur la carte de crédit du locataire pendant la durée de la location.</PolicyText>
          <PolicyText>2.3. Annulation: Les annulations doivent être faites au moins 24 heures avant la date prévue de la location. Des frais d'annulation peuvent s'appliquer si cette condition n'est pas respectée.</PolicyText>

          <PolicySubtitle>3. Utilisation du Véhicule</PolicySubtitle>
          <PolicyText>3.1. Conducteurs Additionnels: Les conducteurs additionnels doivent être enregistrés au moment de la location et doivent satisfaire aux mêmes exigences que le locataire principal.</PolicyText>
          <PolicyText>3.2. Restrictions d'Usage: Le véhicule ne doit pas être utilisé pour des activités illégales, le transport de passagers payants, des courses ou des compétitions, ou pour tracter un autre véhicule.</PolicyText>
          <PolicyText>3.3. Kilométrage: Le contrat de location peut inclure une limite de kilométrage. Des frais supplémentaires peuvent s'appliquer pour tout kilométrage excédentaire.</PolicyText>
          <PolicyText>3.4. Entretien et Carburant: Le locataire est responsable du carburant et doit retourner le véhicule avec le même niveau de carburant qu'au moment de la prise en charge. Le locataire est également tenu de maintenir le véhicule en bon état pendant la période de location.</PolicyText>

          <PolicySubtitle>4. Assurance et Dommages</PolicySubtitle>
          <PolicyText>4.1. Assurance: Le véhicule est couvert par une assurance responsabilité civile. Des assurances complémentaires (vol, dommages collision, etc.) peuvent être souscrites moyennant un coût supplémentaire.</PolicyText>
          <PolicyText>4.2. Responsabilité en Cas de Dommages: En cas de dommages au véhicule, le locataire peut être tenu responsable d'une franchise, sauf si une assurance tous risques a été souscrite.</PolicyText>
          <PolicyText>4.3. Accidents et Vols: En cas d'accident ou de vol, le locataire doit informer immédiatement l'agence de location et fournir un rapport de police.</PolicyText>

          <PolicySubtitle>5. Retour du Véhicule</PolicySubtitle>
          <PolicyText>5.1. Heure et Lieu de Retour: Le véhicule doit être retourné à l'heure et au lieu convenus dans le contrat de location. Des frais de retard peuvent s'appliquer en cas de retour tardif.</PolicyText>
          <PolicyText>5.2. État du Véhicule: Le véhicule doit être retourné dans le même état qu'au moment de la prise en charge. Des frais de nettoyage peuvent être facturés si le véhicule est rendu dans un état de saleté excessive.</PolicyText>
          <PolicyText>5.3. Inspection: Une inspection du véhicule sera effectuée au moment du retour pour évaluer tout dommage ou manquant.</PolicyText>

          <PolicySubtitle>6. Services Supplémentaires</PolicySubtitle>
          <PolicyText>6.1. GPS et Sièges pour Enfants: Des équipements supplémentaires comme le GPS ou les sièges pour enfants peuvent être loués moyennant des frais supplémentaires.</PolicyText>
          <PolicyText>6.2. Assistance Routière: Une assistance routière 24/7 est disponible en cas de panne ou de problème avec le véhicule. Contactez le service clientèle pour plus de détails.</PolicyText>

          <PolicySubtitle>7. Litiges et Juridiction</PolicySubtitle>
          <PolicyText>7.1. Litiges: En cas de litige, le locataire peut contacter le service clientèle de l'agence de location. Si aucune solution amiable n'est trouvée, le litige sera soumis aux tribunaux compétents de Casablanca, Maroc.</PolicyText>
          <PolicyText>7.2. Juridiction: Ce contrat est régi par les lois marocaines et tout litige sera de la compétence des tribunaux marocains.</PolicyText>
        </PolicySection>
        </Section>

        <Section id="about">
          <Title>À propos de nous</Title>
          <Description>
            Adresse: 123 Rue Exemple, Casablanca, Maroc<br />
            Téléphone: +212 123 456 789<br />
            Email: contact@sayarent.com
          </Description>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.492877169267!2d-5.011000485139367!3d34.03340452601844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9ff4aebf42c6ef%3A0xc0e6e0b6f0b2d4c!2sCasablanca!5e0!3m2!1sen!2sma!4v1614246565203!5m2!1sen!2sma"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </Section>
      </Container>
    </Layout>
  );
}
