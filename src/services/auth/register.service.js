

export const registerService = async (newRegisteredUser) => {
  try {
    const registerRequest = await fetch(`http://110.74.194.123:8989/api/todo/v1/auth/sign-up`, {
      method: "POST",
      body: JSON.stringify(newRegisteredUser),
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    const data = await registerRequest.json();
    return data;
  } catch (error) {
    console.log("error in service", error);
  }
};
