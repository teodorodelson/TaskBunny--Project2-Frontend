import ProviderPage from "./providerPage";

import React, { useState } from "react";

export default function ImageUpdate() {
  function handleChange(event) {
    const filename = event.target.files[0].name;
    return filename;
  }

  return (
    <>
      <input type="file" name="file" onChange={handleChange} />
      <ProviderPage />
    </>
  );
}