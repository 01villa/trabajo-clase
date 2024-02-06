'use strict';

class Product {
    constructor(description, price, stock) {
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    showinfo() {
        alert('description '+ this.description);
        alert('precio '+ this.price);
        alert('stock '+ this.stock);
          
    }
    minusstock(salida){
        this.stock = this.stock-salida;
    }

    incrementstock(entrada){
        this.stock = this.stock+entrada;

    }

    updateprice(valor){
        this.price = valor;

    }
        
    }


let product = new Product ('leche', 1, 15);

product.showinfo();
product.minusstock(5);
product.incrementstock(10);
product.updateprice(5);
product.showinfo();
