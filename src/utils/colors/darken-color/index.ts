export function darkenColor(hexColor: string, percentage: number): string {
  // Remove '#' if present
  hexColor = hexColor.replace('#', '');

  // Expand short hex format to long format
  if (hexColor.length === 3) {
    hexColor = hexColor
      .split('')
      .map(char => char + char)
      .join('');
  }

  // Convert hex to RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate the percentage to darken each channel
  const factor = 1 - percentage / 100;
  const newR = Math.max(0, Math.floor(r * factor));
  const newG = Math.max(0, Math.floor(g * factor));
  const newB = Math.max(0, Math.floor(b * factor));

  // Convert the new RGB values to hex
  const newHexColor = `#${newR.toString(16).padStart(2, '0')}${newG
    .toString(16)
    .padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;

  return newHexColor;
}
