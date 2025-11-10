import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="container px-4 mx-auto my-8 md:px-6 md:my-32">
      {children}
    </div>
  );
};

export default MainLayout;
