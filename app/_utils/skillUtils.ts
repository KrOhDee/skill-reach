export function calculateProgress(
  loggedHours: number,
  targetHours: number
): number {
  return Math.min((loggedHours / targetHours) * 100, 100);
}

export function calculateSkillLevel(
  loggedHours: number,
  targetHours: number,
  k = 2 // change k to adjust level scaling
): number {
  const level = Math.floor(
    1 +
      49 *
        ((1 - Math.exp(-k * (loggedHours / targetHours))) / (1 - Math.exp(-k)))
  );
  return Math.min(level, 50);
}
