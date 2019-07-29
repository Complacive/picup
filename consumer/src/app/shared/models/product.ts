export class Product {


    private id: number;
    private name: string;
    private description: string;
    private price: number;
    private size: string;
    private weight: number;
    private reorder_price: number;
    private image: string;

    private merchant_id: number;
    private stock_count: number;
    private total_sold: number;

    constructor (id, name, description, price, size, weight, 
                reorder_price, image, merchant_id, stock_count, total_sold) {

        this.id = id;
        this.name = name;
        this.price = price,
        this.size = size;
        this.price = price;
        this.size = size;
        this.weight = weight;
        this.reorder_price = reorder_price;
        this.image = image;
        this.merchant_id = merchant_id;
        this.stock_count = stock_count;
        this.total_sold = total_sold;
    
    }

    public get_product_id(): number {
        return this.id;
    }

    public set_product_id (value: number) {
        this.id = value;
    }

    public get_product_name(): string {
        return this.name;
    }

    public set_product_name (value: string) {
        this.name = value;
    }

    public get_product_description(): string {
        return this.description;
    }

    public set_product_description (value: string) {
        this.description = value;
    }

    public get_product_price(): number {
        return this.price;
    }

    public set_product_price (value: number) {
        this.price = value;
    }

    public get_product_size(): string {
        return this.size;
    }

    public set_product_size (value: string) {
        this.size = value;
    }

    public get_product_weight(): number {
        return this.weight;
    }

    public set_product_weight (value: number) {
        this.weight = value;
    }

    public get_product_reorder_price(): number {
        return this.reorder_price;
    }

    public set_product_reorder_price (value: number) {
        this.reorder_price = value;
    }

    public get_product_image(): string {
        return this.image;
    }

    public set_product_image (value: string) {
        this.image = value;
    }

    public get_product_merchant_id(): number {
        return this.merchant_id;
    }

    public set_product_merchant_id (value: number) {
        this.merchant_id = value;
    }

    public get_product_stock_count(): number {
        return this.stock_count;
    }

    public get_product_total_sold(): number {
        return this.total_sold;
    }

    public set_product_total_sold (value: number) {
        this.total_sold = value;
    }
    
}
