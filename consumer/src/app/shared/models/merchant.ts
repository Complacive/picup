export class Merchant {

    private name: string;
    private id: number;
    private address: string;
    private cell_phone_number: string;
    private email: string;

    constructor(name, id, address, cell_phone_number, email){

        this.name = name;
        this.id = id;
        this.address = address;
        this.cell_phone_number = cell_phone_number;
        this.email = email;
    }
   
    public get_merchant_name(): string{
        return this.name;
    }
    
    public set_merchant_name(value: string ){ 
        this.name;
    }

    public get_merchant_id(): number{
        return this.id;
    }
    
    public set_merchant_id(value: number ){ 
        this.id;
    }

    public get_merchant_address(): string{
        return this.address;
    }
    
    public set_merchant_address(value: string ){ 
        this.address;
    }

    public get_merchant_cell_phone_number(): string{
        return this.cell_phone_number;
    }
    
    public set_merchant_cell_phone_number(value: string ){ 
        this.cell_phone_number;
    }

    public get_merchant_email(): string{
        return this.email;
    }
    
    public set_merchant_email(value: string ){ 
        this.email;
    }
}
