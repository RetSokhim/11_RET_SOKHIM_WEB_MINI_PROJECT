"use client"

import { handleDeleteWorkSpace } from "@/lib/action";
import React from "react";

const ButtonDelete = ({workspaceId}) => {
    console.log("workspace",workspaceId)
  return (
    <div key={workspaceId}>
      <button onClick={()=> handleDeleteWorkSpace(workspaceId)} type="submit">
          Delete
      </button>
    </div>
  );
};

export default ButtonDelete;
