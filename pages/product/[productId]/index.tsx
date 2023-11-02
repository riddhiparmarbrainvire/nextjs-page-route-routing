import React from "react";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const id = router.query.productId;

  return (
    <div>
      <h1>Details about product {id}</h1>
    </div>
  );
}
// this is dynamic routing, where file name is important, we have to write it in square bracket only

// if we want i'd of the particular product, we have to use useRouter hook from next/router,
// we can access from - router.query.productId
// note - file name and name to access in router.query should be same.
// product I'd can be any string and number
