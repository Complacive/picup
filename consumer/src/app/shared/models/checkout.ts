export class Checkout {
    private order_id: number;
    private merchant_id: number;
    private cart_id: number;
    private user_id: number;
    private confirmation: boolean;

    constructor(order_id, merchant_id, cart_id, user_id, confirmation) {
        this.order_id = order_id;
        this.merchant_id = merchant_id;
        this.cart_id = cart_id;
        this.user_id = user_id;
        this.confirmation = confirmation;
    }

    public get_order_id(): number {
        return this.order_id;
    }

    public set_order_id (value: number) {
        this.order_id = value;
    }

    public get_merchant_id(): number {
        return this.merchant_id;
    }

    public set_merchant_id (value:number) {
        this.merchant_id = value;
    }

    public get_cart_id(): number {
        return this.cart_id;
    }

    public set_cart_id (value:number) {
        this.cart_id = value;
    }

    public get_user_id(): number {
        return this.user_id;
    }

    public set_user_id (value:number) {
        this.user_id = value;
    }

    public get_confirmation(): boolean {
        return this.confirmation;
    }

    public set_confirmation (value: boolean) {
        this.confirmation = value;
    }

    
}
