import React from "react";

interface LoaderProps {
  size?: number;
}

export const Loader: React.FC<LoaderProps> = ({ size = 32 }) => (
  <div className="loader" style={{ width: size, height: size }} />
);
