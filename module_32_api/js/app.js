// JavaScript Object Notation 
// JSON

const user = { id: 324898234, name: "Lokman Hakim", phone: "51064505603065" };
console.log(user);

const stringifiedUser = JSON.stringify(user);
console.log(stringifiedUser);

const shop = {
    name: 'Alia Shop',
    address: 'Ranbir Road',
    profit: 23980,
    products: ['laptop', 'mobile', 'drinks']
}

const shopSt = JSON.stringify(shop);
console.log('shop: ', shop);
console.log("stringified: ", shopSt);
const shopBk = JSON.parse(shopSt);
console.log("back to normal: ", shopBk);