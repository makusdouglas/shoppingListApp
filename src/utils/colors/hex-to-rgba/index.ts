export function hexToRgba(hexColor: string, opacity: number): string {
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

  // Calculate the opacity in the range [0, 1]
  const alpha = Math.min(1, Math.max(0, opacity / 100));

  // Construct the RGBA string
  const rgbaColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;

  return rgbaColor;
}
