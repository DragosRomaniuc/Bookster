// Source file: https://github.com/misund/hex-to-rgba/blob/master/src/index.js
// NPM: https://www.npmjs.com/package/hex-to-rgba
// GitHub: https://github.com/misund/hex-to-rgba

const removeHash = (hex: any) => (hex.charAt(0) === "#" ? hex.slice(1) : hex);

const parseHex = (nakedHex: any) => {
  const isShort = nakedHex.length === 3 || nakedHex.length === 4;

  const twoDigitHexR = isShort
    ? `${nakedHex.slice(0, 1)}${nakedHex.slice(0, 1)}`
    : nakedHex.slice(0, 2);
  const twoDigitHexG = isShort
    ? `${nakedHex.slice(1, 2)}${nakedHex.slice(1, 2)}`
    : nakedHex.slice(2, 4);
  const twoDigitHexB = isShort
    ? `${nakedHex.slice(2, 3)}${nakedHex.slice(2, 3)}`
    : nakedHex.slice(4, 6);
  const twoDigitHexA =
    (isShort
      ? `${nakedHex.slice(3, 4)}${nakedHex.slice(3, 4)}`
      : nakedHex.slice(6, 8)) || "ff";

  // const numericA = +((parseInt(a, 16) / 255).toFixed(2));

  return {
    r: twoDigitHexR,
    g: twoDigitHexG,
    b: twoDigitHexB,
    a: twoDigitHexA,
  };
};

export function hexToRGB(hex: any, alpha: any) {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

const hexToDecimal = (hex: any) => parseInt(hex, 16);

const hexesToDecimals = ({
  r,
  g,
  b,
  a,
}: {
  r: any;
  g: any;
  b: any;
  a: any;
}) => ({
  r: hexToDecimal(r),
  g: hexToDecimal(g),
  b: hexToDecimal(b),
  a: +(hexToDecimal(a) / 255).toFixed(2),
});

const isNumeric = (n: any) => !isNaN(parseFloat(n)) && isFinite(n); // eslint-disable-line no-restricted-globals, max-len

const formatRgb = (decimalObject: any, parameterA: any) => {
  const { r, g, b, a: parsedA } = decimalObject;
  const a = isNumeric(parameterA) ? parameterA : parsedA;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

/**
 * Turns an old-fashioned css hex color value into a rgb color value.
 *
 * If you specify an alpha value, you'll get a rgba() value instead.
 *
 * @param The hex value to convert. ('123456'. '#123456', ''123', '#123')
 * @param An alpha value to apply. (optional) ('0.5', '0.25')
 * @return An rgb or rgba value. ('rgb(11, 22, 33)'. 'rgba(11, 22, 33, 0.5)')
 */
const hexToRgba = (hex: any, a: any) => {
  const hashlessHex = removeHash(hex);
  const hexObject = parseHex(hashlessHex);
  const decimalObject = hexesToDecimals(hexObject);

  return formatRgb(decimalObject, a);
};

/**
 * Accepts only HEX colors
 * - 1st param: hex value
 * - 2nd param: alpha value 0 to 1, accepted decimal
 *
 * Usage:
 * cont blue10 = Utils.rgba("#4630EB", 0.5)
 * return new hex value with alpha 0.5
 */

export default hexToRgba;
