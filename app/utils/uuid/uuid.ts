/*  eslint-disable no-bitwise */
export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const unique = (Math.random() * 16) | 0;
    const value = char === "x" ? unique : (unique & 0x3) | 0x8;
    return value.toString(16);
  });
};
