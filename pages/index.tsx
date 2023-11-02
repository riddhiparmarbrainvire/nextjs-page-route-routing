import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product");
  };

  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">Blog</Link>

      <Link href="/product">Product</Link>

      <button onClick={handleClick}>Place order</button>
    </div>
  );
}
