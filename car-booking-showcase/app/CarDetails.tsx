"use client";

import styled from 'styled-components';

const Container = styled.div`
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  text-align: center;
`;

const CarImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const CarTitle = styled.h2`
  margin: 10px 0;
`;

const CarDescription = styled.p`
  margin: 10px 0;
  color: #bbb;
`;

type CarDetailsProps = {
  car: {
    id: number;
    name: string;
    image: string;
    description: string;
  };
};

export default function CarDetails({ car }: CarDetailsProps) {
  const { name, image, description } = car;

  return (
    <Container>
      <CarImage src={image} alt={name} />
      <CarTitle>{name}</CarTitle>
      <CarDescription>{description}</CarDescription>
    </Container>
  );
}
