function carInfo(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let extra of extras) {
        for (let key in extra) {
            car[key] = extra[key];
        }
    }

    return car;
}

// Call the function with required information and additional name-value pairs
let myCar = carInfo('Toyota', 'Camry', { color: 'blue' }, { year: 2023 });

// Print the object returned to ensure all information was stored correctly
console.log(myCar);
