import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <div className="p-6">{children}</div>
    </div>
  );
};

export default layout;
