import { getItem, StorageKeys } from "utils/storage";

export const getAuthHeaders = async () => {
  try {
    const jwtToken = await getItem(StorageKeys.TOKEN);

    return {
      Authorization: `Bearer ${jwtToken}`,
    };
  } catch (error) {
    console.log(error, "getAuthHeaders");
  }
};
