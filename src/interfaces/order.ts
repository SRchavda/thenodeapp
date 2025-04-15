interface Order {
  id: string;
  platform: "Website" | "Instagram" | "WhatsApp";
  customerId: string;
  productId: string;
  quantity: number;
  total: number;
  date: string;
  couponCode?: string;
  discount?: number;
}

export default Order;