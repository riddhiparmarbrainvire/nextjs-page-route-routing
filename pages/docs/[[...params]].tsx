import React from "react";
import { useRouter } from "next/router";

export default function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <h1>
        viewing docs for feature {params[0]} and concept for {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>viewing docs for feature {params[0]}</h1>;
  }

  return (
    <div>
      <h1>Docs home page</h1>
    </div>
  );
}

// we get all the endpoints passed after the doc in an array in params console.
// initially we'll get undefined, because next js use pre-rendering feature
// set initial value to empty array so that the code does'nt break
