import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


export const getAllWorkspace = async () => {
  const session = await getServerSession(authOption);
  const token = session?.user?.token;
  const allWorkSpace = await fetch(
    "http://110.74.194.123:8989/api/todo/v1/workspaces",
    {
      method: "GET",
      cache: "no-store",
      next: {tags: ['workspace']},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await allWorkSpace.json();
  return data;
};

export const addNewWorkSpace = async (newWork) => {
  const session = await getServerSession(authOption);
  const token = session?.user?.token;
  const newWorkSpace = await fetch(
    "http://110.74.194.123:8989/api/todo/v1/workspaces",
    {
      method: "POST",
      body: JSON.stringify(newWork),
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await newWorkSpace.json();
  return data;
};

export const getWorkSpaceById = async (workspaceId) =>{
  const session = await getServerSession(authOption);
  const token = session?.user?.token;
  const workspaceById = await fetch(
    `http://110.74.194.123:8989/api/todo/v1/workspace/${workspaceId}`,
    {
      method: "GET",
      cache: "no-store",
      next: {tags: 'workspace'},
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await workspaceById.json();
  return data;
}

export const deleteWorkSpaceById = async(workspaceId) =>{
  const session = await getServerSession(authOption);
    const token = session?.user?.token;
    const workspaceById = await fetch(
      `http://110.74.194.123:8989/api/todo/v1/workspaces/${workspaceId}`,
      {
        method: "DELETE",
        next: {tags: 'workspace'},
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await workspaceById.json();
    return data;
}

export const updateWorkSpaceById = async(workspaceId,updatedWorkSpace) => {
  const session = await getServerSession(authOption);
    const token = session?.user?.token;
    const workspaceById = await fetch(
      `http://110.74.194.123:8989/api/todo/v1/workspaces/${workspaceId}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedWorkSpace),
        next: {tags: 'workspace'},
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await workspaceById.json();
    return data;
}
