import React, { useEffect } from "react";

function PagenotFound({ setTitle }) {
  useEffect(() => {
    setTitle("Page Not Found");
  });

  return (
    <div>
      <div>
        <h1>404 - Page not found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default PagenotFound;
