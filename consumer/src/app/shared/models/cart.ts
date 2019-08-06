import { ProductService } from '../services/product.service';

export class Cart {

    private static instance: Cart = null;

    private cartItems: number[][] = [];

    public constructor() { }

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
