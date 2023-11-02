import { useRouter } from "next/router";
import React from "react";

export default function ReviewId() {
  const router = useRouter();
  const { reviewId, productId }: any = router.query;

  return (
    <div>
      <h1>{reviewId}: Review id </h1>
      <h1>Product id :{productId}</h1>
    </div>
  );
}
