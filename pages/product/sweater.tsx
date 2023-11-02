import React from "react";

export default function Sweater() {
  return (
    <div>
      <h1>Landing page for sweaters</h1>
    </div>
  );
}

// if we give this file name in the route, then this page will be rendered, it will not take this as a product id
// jsx will try to find the page first, if not found it will render dynamic product id