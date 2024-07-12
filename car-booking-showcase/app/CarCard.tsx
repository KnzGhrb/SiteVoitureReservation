// app/CarCard.tsx
"use client";

import styled from 'styled-components';

const Card = styled.div`
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CarImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const CarTitle = styled.h2`
  margin: 10px 0;
`;

const CarButton = styled.button`
  background: #0070f3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #005bb5;
  }
`;

type CarCardProps = {
  car: {
    id: number;
    name: string;
    image: string;
  };
};

export default function CarCard({ car }: CarCardProps) {
  const { name, image } = car;

  const handleBooking = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
    if (!phoneNumber) {
      console.error('Phone number is not set.');
      return;
    }
    const message = `Hello Mister, I want to book ${name} car for X days, is it available?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card>
      <CarImage src={image} alt={name} />
      <CarTitle>{name}</CarTitle>
      <CarButton onClick={handleBooking}>Book Now</CarButton>
    </Card>
  );
}
