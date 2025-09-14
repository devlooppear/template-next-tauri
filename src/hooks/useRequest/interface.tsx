export interface UseRequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  data?: any;
  params?: any;
  headers?: Record<string, string>;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}