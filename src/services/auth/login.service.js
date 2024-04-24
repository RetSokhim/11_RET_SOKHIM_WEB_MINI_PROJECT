
export const loginService = async(userLoginInfo) => {
    const request = await fetch("http://110.74.194.123:8989/api/todo/v1/auth/login",{
        method: 'POST',
        body: JSON.stringify(userLoginInfo),
        headers:{
            "Content-Type": "application/json"
        }
    });
    const data = await request.json();
    return data;
}