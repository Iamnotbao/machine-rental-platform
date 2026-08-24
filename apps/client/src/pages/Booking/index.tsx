import { Link, useParams } from 'react-router-dom';
import { Button, Card } from '@machine-rental/ui';
import { ROUTES } from '@/constants/route.constants';
export function BookingPage() {
  const { id } = useParams();
  return (
    <section>
      <h1>Book {id?.replaceAll('-', ' ')}</h1>
      <Card>
        <p>Availability and booking validation will be connected when the backend is available.</p>
        <Link to={ROUTES.cart}>
          <Button>Continue to cart</Button>
        </Link>
      </Card>
    </section>
  );
}
export function CartPage() {
  return (
    <section>
      <h1>Your cart</h1>
      <p>Your saved machines will appear here after cart functionality is implemented.</p>
    </section>
  );
}
export function CheckoutPage() {
  return (
    <section>
      <h1>Checkout</h1>
      <p>Checkout and payment processing are planned for a future phase.</p>
    </section>
  );
}
