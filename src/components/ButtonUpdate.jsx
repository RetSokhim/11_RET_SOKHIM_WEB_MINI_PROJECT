import { handleUpdateWorkSpaceById } from "@/lib/action";
import React from "react";

const ButtonUpdate = ({ workspaceId }) => {
  async function updateWorkSpaceAction (workSpaceInfo){
    const updatedWorkSpace = {
      workspaceName : workSpaceInfo.get("workspaceName")
    }
  }
  return (
    <div key={workspaceId}>
      <form action={handleUpdateWorkSpaceById(workspaceId)}>
        <input
          type="text"
          name="workspaceName"
          placeholder="Workspace name"
          className="mt-3 block border border-gray rounded-lg w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
        />
        <button type="submit">
          <label
            htmlFor="my_modal_6"
            className="bg-blue-600 rounded-lg text-white mr-3 h-12 px-5 flex items-center"
          >
            Edit
          </label>
        </button>
      </form>
    </div>
  );
};

export default ButtonUpdate;
