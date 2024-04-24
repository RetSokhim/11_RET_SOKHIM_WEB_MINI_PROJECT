"use server";

import { addNewWorkSpace, deleteWorkSpaceById, updateWorkSpaceById } from "@/services/(workspace-service)/workspace-services";
import { registerService } from "@/services/auth/register.service";
import { redirect } from "next/navigation";
import { revalidateTag } from 'next/cache'

export const handleUserRegister = async (formData) => {
  const getNewRegisteredUser = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    gender: formData.get("gender"),
    password: formData.get("password"),
  };
  await registerService(getNewRegisteredUser);
  redirect("/login");
};

export const handleAddWorkSpace = async (newWorkSpace)=> {
  const getNewWorkSpace = {
    workspaceName: newWorkSpace.get("workspaceName")
  };
  await addNewWorkSpace(getNewWorkSpace);
  revalidateTag('workspace');
}

export const handleDeleteWorkSpace = async (workSpaceId)=> {
  await deleteWorkSpaceById(workSpaceId);
  revalidateTag('workspace');
}

export const handleUpdateWorkSpaceById = async (workSpaceId,newUpdatedWorkSpace)=> {
  const updatedWorkSpace = {
    workspaceName: newUpdatedWorkSpace.get("workspaceName")
  }
  await updateWorkSpaceById(workSpaceId,updatedWorkSpace)
  revalidateTag('workspace');
}
