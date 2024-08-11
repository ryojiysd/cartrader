import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
  const { city } = event.context.params;
  const { make, minPrice, maxPrice } = getQuery(event);

  let filteredCars = cars.filter(
    (car) => car.city.toLowerCase() === city.toLowerCase()
  );

  if (make) {
    filteredCars = filteredCars.filter(
      (car) => car.make.toLowerCase() === make.toLowerCase()
    );
  }

  if (minPrice) {
    filteredCars = filteredCars.filter(
      (car) => parseInt(minPrice) <= car.price
    );
  }

  if (maxPrice) {
    filteredCars = filteredCars.filter(
      (car) => car.price <= parseInt(maxPrice)
    );
  }
  return filteredCars;
});
