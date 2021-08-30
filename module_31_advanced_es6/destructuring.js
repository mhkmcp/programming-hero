const fish = { id: 56, name: 'King Hilsha', price: 9000, address: 'Chadpur', phone: '018513230020' };

// console.log('fish phone: ', fish.phone);
// const phone = fish.phone;
// const price = fish.price;
// const address = fish.address;
// const id = fish.id;

// const { id, address, phone, price } = { id: 56, name: 'King Hilsha', price: 9000, address: 'Chadpur', phone: '018513230020' };

const { id, address, phone, price } = fish;

console.log('phone: ', phone);
console.log('address: ', address);
console.log('price: ', price);

const company = {
    name: 'GP',
    ceo: {
        id: 23,
        name: "Azmol Hossain",
        food: "Fuchka"
    },
    web: {
        work: "Web Development",
        employee: 22,
        framework: "React & Django",
    }
}

// const food = company.ceo.food;
// const work = company.web.work;
// const framework = company.web.framework;

const { food } = company.ceo;
const { work, framework } = company.web;

console.log('food: ', food);
console.log('work: ', work);
console.log('framework: ', framework);
