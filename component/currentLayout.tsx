'use client'
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../lib/redux";

interface LayoutProps {
  children: ReactNode;
}
const CurrentLayout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <Provider store={store}>
      <div>
        <main>{children}</main>
      </div>
    </Provider>
  );
};

export default CurrentLayout;
