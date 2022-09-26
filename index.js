const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн

function getMyTaxes(taxes) {
    return Number(this.tax * taxes)
}

console.log(getMyTaxes.call(litva, 2500));



// Створіть функцію getMiddleTaxes.call(country) -> number; –
// яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).

function getMiddleTaxes(country) {
    return Number(this.tax * this.middleSalary)
}

console.log(getMiddleTaxes.call(ukraine));



// Створіть функцію getTotalTaxes.call(country) -> number;
// – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).

function getTotalTaxes(country) {
    return Number(this.tax * this.middleSalary * this.vacancies)
}

console.log(getTotalTaxes.call(litva));



// Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.

function getMySalary(country) {
  const obj = {};

    const randomSalary = () => {
        obj.salary = random(1500, 2000);
        obj.taxes = Number(this.tax * obj.salary);
        obj.profit = Number(obj.salary - this.tax);
        return obj;
    }
    setInterval( () => console.log(randomSalary()), 1000)
}

getMySalary(litva);


function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }



