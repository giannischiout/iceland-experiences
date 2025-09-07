import axios from "@/utills/axios";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export type PayloadResponse<T> = {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};

// Fetcher that returns the full payload response
export const payloadFetcher = async <T>(
  collection: string,
  params: Record<string, any> = {},
): Promise<PayloadResponse<T>> => {
  const res = await axios.get(`/api/${collection}`, { params });
  return res.data; // Must return full PayloadResponse
};

type UsePayloadQueryProps<T> = {
  collection: string;
  params?: Record<string, any>;
  options?: Omit<
    UseQueryOptions<
      PayloadResponse<T>,
      Error,
      PayloadResponse<T>,
      readonly unknown[]
    >,
    "queryKey" | "queryFn"
  >;
};

export const usePayloadQuery = <T>({
  collection,
  params = {},
  options,
}: UsePayloadQueryProps<T>) => {
  const { data, isLoading, error } = useQuery<PayloadResponse<T>, Error>({
    queryKey: [collection, params] as const,
    queryFn: () => payloadFetcher<T>(collection, params),
    staleTime: 5 * 60 * 1000,
    ...(options ?? {}),
  });
  return {
    data: data?.docs,
    totalRecords: data?.totalDocs ?? 0,
    isLoading,
    error,
  };
};
