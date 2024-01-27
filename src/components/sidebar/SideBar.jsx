"use client";
import { useState } from "react";
import { ContentArea, DesktopMenu, MobileMenu } from "..";

export const SideBar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      {/*
          Menu para pantallas de celulares 
         */}
      <MobileMenu setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

      {/*
          Menu para pantallas de escritorio
        */}
      <DesktopMenu />

      {/* 
          Contenido de la página
        */}

      <ContentArea children={children} />
    </div>
  );
};
