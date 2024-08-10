import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
  const { city } = event.context.params;

  const filteredCars = cars.filter(
    (car) => car.city.toLowerCase() === city.toLowerCase()
  );
  return filteredCars;
});
