import { api } from "@/lib/axios";

export interface CancelOrdersParams {
  orderId: string;
}

export async function cancelOrder({ orderId }: CancelOrdersParams) {
  const response = await api.patch(`/orders/${orderId}/cancel`);
  return response.data;
}