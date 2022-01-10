import Constant from '../constants/constant'
// import EncryptedStorage from 'react-native-encrypted-storage';

export const getGroups = async () => {
  try {
     
    const response = await fetch(Constant.baseUrl+'contact_service/api/v1/groups/fetch-all-groups',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'TOKEN': await EncryptedStorage.getItem("user_token")

        },
        timeoutDuration: 10,

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
