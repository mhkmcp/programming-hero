// destructuring array 

const [p, q] = [45, 37];

console.log(p, q);

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

console.log('work: ', company.web.work);
console.log('work: ', company?.back?.work);
console.log('framework: ', company.web.framework);
