//class


class Product {
     constructor(name, price){
          this.name = name;
          this.price = price;
     }
     displayProduct(){
          console.log(`Product : ${this.name}`)
          console.log(`price$ ${this.price.toFixed(2)}`)
     }
     calculateTotal(salesTaxe) {
          return this.price + (this.price * salesTaxe)
     }
}
const product1 = new Product('shirt', 19.99);
const product2 = new Product('pants', 22.50);
const product3 = new Product('underwear', 100.00);
const salesTaxes = 0.05;
product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product1.calculateTotal(salesTaxes)
const total2 = product2.calculateTotal(salesTaxes)


console.log(`total price (with tax) $${total.toFixed(2)}`)

