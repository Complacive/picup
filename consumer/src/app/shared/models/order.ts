export class Order {

    private id: number;
    private is_round_trip: boolean;
    private date_created: string;
    private date_scheduled: string;
    private user_id: number;
    private merchant_id: number;
    private parcel_size: string;
    private num_parcels: number;

    constructor (id, is_round_trip, date_created, date_scheduled, 
                 user_id, merchant_id, parcel_size, num_parcels) {
        this.id = id;
        this.is_round_trip = is_round_trip;
        this.date_created = date_created;
        this.date_scheduled = date_scheduled;
        this.user_id = user_id;
        this.merchant_id = merchant_id;
        this.parcel_size = parcel_size;
        this.num_parcels = num_parcels;
    }

    public get_order_id(): number {
        return this.id;
    }

    public set_order_id (value: number) {
        this.id = value;
    }

    public get_is_round_trip(): boolean {
        return this.is_round_trip;
    }

    public set_is_round_trip (value: boolean) {
        this.is_round_trip = value;
    }

    public get_date_created(): string {
        return this.date_created;
    }

    public set_date_created (value: string) {
        this.date_created = value;
    }

    public get_date_scheduled(): string {
        return this.date_scheduled;
    }

    public set_date_scheduled (value: string) {
        this.date_scheduled = value;
    }

    public get_user_id(): number {
        return this.user_id;
    }

    public set_user_id (value: number) {
        this.user_id = value;
    }

    public get_merchant_id(): number {
        return this.merchant_id;
    }

    public set_merchant_id (value: number) {
        this.merchant_id = value;
    }

    public get_parcel_size(): string {
        return this.parcel_size;
    }

    public set_parcel_size (value: string) {
        this.parcel_size = value;
    }

    public get_num_parcels(): number {
        return this.num_parcels;
    }

    public set_num_parcels (value: number) {
        this.num_parcels = value;
    }
    
}
