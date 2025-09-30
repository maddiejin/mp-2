export type ColorData = {
  hex: string;
  rgb: string;
  hsl: string;
}


export async function fetchRandomColor(): Promise<ColorData> {
  const response = await fetch("https://x-colors.yurace.pro/api/random");
  if (!response.ok) {
    throw new Error("Failed to fetch color");
  }
  const data = await response.json();
  return data;
}