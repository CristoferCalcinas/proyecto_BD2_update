"use client";
import { useState } from "react";
import { ContentArea, DesktopMenu, MobileMenu } from "..";

export const SideBar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="grid grid-cols-12">
      {/*
          Menu para pantallas de celulares 
      */}
      <MobileMenu setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

      {/*
          Menu para pantallas de escritorio
      */}
      <div className="col-span-0 lg:col-span-4">
        <DesktopMenu />
      </div>

      {/* 
          Contenido de la página
        */}
      <div className="col-span-12 lg:col-span-8">
        <ContentArea children={children} setSidebarOpen={setSidebarOpen} />
      </div>
    </div>
  );
};
