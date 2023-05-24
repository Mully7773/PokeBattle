export function rgbaToHex(rgba) {
  // Split the rgba values
  const rgbaValues = rgba
    .substring(rgba.indexOf('(') + 1, rgba.lastIndexOf(')'))
    .split(',');

  // Convert the rgba values to integers
  const red = parseInt(rgbaValues[0].trim(), 10);
  const green = parseInt(rgbaValues[1].trim(), 10);
  const blue = parseInt(rgbaValues[2].trim(), 10);

  // Convert the red, green, and blue values to hexadecimal
  const redHex = red.toString(16).padStart(2, '0');
  const greenHex = green.toString(16).padStart(2, '0');
  const blueHex = blue.toString(16).padStart(2, '0');

  // Construct the hexadecimal code
  const hexCode = `#${redHex}${greenHex}${blueHex}`;

  return hexCode;
}
