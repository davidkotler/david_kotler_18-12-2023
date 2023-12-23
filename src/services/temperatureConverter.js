export default function convertToCelsius(value) {
  return Math.round(((value - 32) * 5) / 9);
}

export function convertToFahrenheit(value) {
  return Math.round((value * 9) / 5 + 32);
}
