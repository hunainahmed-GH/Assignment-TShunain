"use strict";
function carInfo(manufacturer, model, ...extras) {
    let car = {
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
