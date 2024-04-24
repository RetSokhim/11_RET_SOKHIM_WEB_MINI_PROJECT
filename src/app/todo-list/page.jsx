import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import React from "react";

const todoListPage = async () => {
  return (
    <div className="flex justify-end w-full gap-x-4">
      <div className="w-[20%]">
        <SidebarComponent />
      </div>
      <div className="w-[80%]">
        <NavbarComponent />
        <div>
          <ListBoardComponentHeader />
        </div>
      </div>
    </div>
  );
};

export default todoListPage;
