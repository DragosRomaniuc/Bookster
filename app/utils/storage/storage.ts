import AsyncStorage from "@react-native-async-storage/async-storage";
import { isObject } from "lodash";

export enum StorageKeys {
  TOKEN = "token",
}

export const clearStorageKeys = async () => {
  const storageKeys = await AsyncStorage.getAllKeys();

  if (storageKeys?.length) {
    await AsyncStorage.multiRemove(storageKeys);
  }
};

export const getItem = async (key: StorageKeys) => {
  let value = await AsyncStorage.getItem(key);

  try {
    if (value) {
      value = JSON.parse(value);
    }
  } catch {
    // Fail silently
  }

  return value;
};

export const removeItem = (key: StorageKeys) => {
  return new Promise<void>((resolve, reject) => {
    AsyncStorage.removeItem(key, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

export const setItem = async (key: StorageKeys, value: string) => {
  if (isObject(value)) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  if (value !== null) {
    return AsyncStorage.setItem(key, value);
  }

  return undefined;
};
