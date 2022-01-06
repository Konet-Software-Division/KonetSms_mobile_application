import Constant from '../constants/constant'

export const login = async (email, password) => {
  try {
     
    const response = await fetch(Constant.baseUrl+'user_service/api/v1/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        timeoutDuration: 10,
        body: JSON.stringify({
            "email" : email,
            "password" : password,
        })
      }
    );

    if (!response.ok) {
      const resData = await response.json();

      throw new Error(resData.message);
    }

    const resData = await response.json();
    console.log(JSON.stringify(resData));
 
 } catch (error) {
 
   throw new Error(error);
 } 
}
