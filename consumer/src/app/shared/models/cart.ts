export class Cart {

    private item_id: number;
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
    }
}
