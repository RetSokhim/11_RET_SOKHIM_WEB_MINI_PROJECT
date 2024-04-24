import { handleDeleteWorkSpace } from "@/lib/action";
import Image from "next/image";
import React from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonUpdate from "./ButtonUpdate";

export default async function EditDeleteDropDownComponent({workspaceId}) {

  return (
    <details key={workspaceId} className="dropdown">
      <summary className=" btn bg-white shadow-none border-0 p-0 h-0 min-h-0">
        <Image
          src={"/assets/icons/tabler_dots.svg"}
          width={20}
          height={20}
          alt={"edit delete card"}
        />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <ButtonUpdate/>
        </li>
        <li>
          <ButtonDelete workspaceId = {workspaceId}/>
        </li>
      </ul>
    </details>
  );
}
