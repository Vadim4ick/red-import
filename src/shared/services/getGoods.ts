"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

export const useGetGoods = () => {
  return useQuery({
    queryKey: ["Goods"],
    queryFn: () => gql.GetGoods(),
  });
};
