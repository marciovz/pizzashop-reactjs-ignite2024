import { api } from "@/lib/axios";

interface GetManagedResponse {
  id: string,
  name: string,
  description: string | null,
  managerId: string | null,
  createdAt: Date | null,
  updateAt: Date | null,
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedResponse>('/managed-restaurant');
  return response.data;
}
