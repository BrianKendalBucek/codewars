const nbYear = (
  p0: number,
  percent: number,
  aug: number,
  p: number
): number => {
  const percentToDecimal = percent / 100;
  let alteredPopulation = p0;
  let counter = 0;

  const recalculate = (
    currentPopulation: number,
    targetPopulation: number
  ) => {
    if (currentPopulation >= targetPopulation) {
      return;
    } else {
      const inhabitants = currentPopulation + currentPopulation * percentToDecimal + aug;
      const inhabitantsRounded = Math.floor(inhabitants);
      counter += 1;
      recalculate(inhabitantsRounded, targetPopulation);
    }
  };

  recalculate(alteredPopulation, p);
  return counter;
};



nbYear(1500, 5, 100, 5000);
nbYear(1500000, 2.5, 10000, 2000000);
nbYear(1500000, 0.25, 1000, 2000000);
nbYear(1500000, 0.25, -1000, 2000000);
nbYear(1000, 2.0, 50, 2014);

