import React from "react";

const NotFoundPage = () => {
  return (
    <div className="container" mx-auto>
      <h1 class="text-3xl font-bold underline">
        The page you are looking for doesn't exist or an other error occured. 
      </h1>
      <p>
        Go to <a href='/'>🏠Home Page.</a>
      </p>
    </div>
  );
};

export default NotFoundPage;
