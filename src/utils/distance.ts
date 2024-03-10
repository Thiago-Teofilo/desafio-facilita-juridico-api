export default function calculateDistance(x: number, y: number): number {
  const distance = Math.sqrt(x ** 2 + y ** 2);
  return distance;
}