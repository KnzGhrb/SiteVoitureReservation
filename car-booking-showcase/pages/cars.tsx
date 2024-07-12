// pages/cars.tsx
import Layout from '../app/layout';
import CarDetails from '../app/CarDetails';

const cars = [
  { id: 1, name: 'Tesla Model S', image: '/audi.jpg', description: 'A high-performance electric car.' },
  { id: 2, name: 'BMW i8', image: '/bmw.jpg', description: 'A futuristic hybrid sports car.' },
  { id: 3, name: 'Audi R8', image: '/tesla.jpg', description: 'A luxurious high-performance car.' },
];

export default function Cars() {
  return (
    <Layout>
      <h2>Our Cars</h2>
      {cars.map(car => (
        <CarDetails key={car.id} car={car} />
      ))}
    </Layout>
  );
}
