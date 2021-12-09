export const login = (username, password) => async () => {
    
    try {

    const response = await fetch(
        'https://konetpayapi.konetpay.com/users_service/api/v1/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          timeoutDuration: 10,
          body: JSON.stringify({
          
              "username" : username,
              "password" : password,
          })
        }
      );
   
      if (!response.ok) {
        const resData = await response.json();
        // console.log(JSON.stringify(response.status));

        throw new Error(resData.message);
      }

      const resData = await response.json();
      console.log(JSON.stringify(resData));
   
 

    } catch (error) {
        throw error;

    }
  };
