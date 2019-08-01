import { ProductService } from '../services/product.service';

export class Cart {

    /* private item_id: number;
     private item_name: string;
     private quantity: number;
     private total_price: number;
 
     constructor(item_id, item_name, quantity, total_price) {
         this.item_id = item_id;
         this.item_name = item_name;
         this.quantity = quantity;
         this.total_price = total_price;
     }
 
 
     public get_item_id(): number {
         return this.item_id;
     }
 
     public set_item_id (value: number) {
         this.item_id = value;
     }
 
     public get_item_name(): string {
         return this.item_name;
     }
 
     public set_item_name (value: string) {
         this.item_name = value;
     }
 
     public get_quantity(): number {
         return this.quantity;
     }
 
     public set_quantity (value: number) {
         this.quantity = value;
     }
 
     public get_total_price(): number {
         return this.total_price;
     }
     
     public set_total_price (value: number) {
         this.total_price = value;
     } */

    private static instance: Cart = null;

    private cartItems: number[][] = [];
    private totalPrice: number = 0;

    private constructor() { }

    public static getInstance(): Cart {
        if (Cart.instance == null) {
            Cart.instance = new Cart();
        }
        return Cart.instance;
    }

    public update(product_id: number, num_product: number) {

        let found: boolean = false;
        this.cartItems.forEach((pairing) => {
            if (pairing[0] == product_id) {
                pairing[1] = num_product;
                found = true;
            }
        })
        if (!found) {
            let newPairing: number[] = [product_id, num_product];
            this.cartItems.push(newPairing);
        }

    }

    public get(product_id: number): number {
        let reducedArray: number[][] = this.cartItems.filter((pairing) => {
            pairing[0] == product_id;
        })
        if (reducedArray.length == 0) {
            return null;
        } else {
            return reducedArray[0][1];
        }
    }

    public getIds(): number[] {
        let ids: number[] = [];
        this.cartItems.forEach((pairing) => {
            ids.push(pairing[0]);
        })
        return ids;
    }

    public clear() {
        this.cartItems = [];
    }

}
