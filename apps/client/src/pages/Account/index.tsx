import { useParams } from 'react-router-dom';
export function OrdersPage() {
  return (
    <section>
      <h1>Orders</h1>
      <p>Order history will be available after the rental backend is connected.</p>
    </section>
  );
}
export function OrderDetailPage() {
  const { id } = useParams();
  return (
    <section>
      <h1>Order {id}</h1>
      <p>Order details are not connected in this foundation.</p>
    </section>
  );
}
export function ProfilePage() {
  return (
    <section>
      <h1>Profile</h1>
      <p>Profile management is reserved for the authenticated customer experience.</p>
    </section>
  );
}
