/// Task 4
interface Product {
    name: string;
    price: number;
}
function calculateTotalPrice(products: Product[]): number {
    let totalPrice = 0;

    // looping products
    for (let product of products) {
        totalPrice +=  product.price;
    }


    return totalPrice;
}

// Example usage:
const products: Product[] = [
    { name: "Iphone 14 Pro Max", price: 1400 },
    { name: "Iphone 14 Pro", price: 1200 },
    { name: "Iphone 14", price: 1000 },
];

console.log("%c Task 4", "color: green; background-color: lightblue; font-weight: bold; font-size: 20px;");
const total = calculateTotalPrice(products);
console.log("Total Price:", total);




// Task 5
function checkValidEmail(email: string):boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/// color console

console.log("%c Task 5", "color: green; background-color: lightblue; font-weight: bold; font-size: 20px;");
console.log("Email: mdraimli@gmail.com Email its Validity status is : ", checkValidEmail("mdraimli@gmail.com") ? "Valid" : "Invalid");
console.log("Email: wrongEmail Email its Validity status is : ", checkValidEmail("wrongEmail") ? "Valid" : "Invalid");



/// to compile the file run the following command ::
//tsc assets/ts/product.ts --outDir assets/js
