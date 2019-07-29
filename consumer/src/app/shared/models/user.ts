import { Cart } from './cart';

export class User {

    private id: number;
    private name: string;
    private email: string;
    private password: string;
    private cell_phone_number: string;
    private address: string;
    private instructions; string;
    private new_user: boolean;
    private past_orders: number[];
    private pending_orders: number[];


    private cart: Cart = null;

    /*
    constructor(id, name, email, password,
        cell_phone_number, address, instructions,
        new_user, past_orders, pending_orders) 
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.cell_phone_number = cell_phone_number;
        this.address = address;
        this.instructions = instructions;
        this.new_user = new_user;
        this.past_orders = past_orders;
        this.pending_orders = pending_orders;
    }
    */

    //setter methods

    public set_name(name: string) {
        this.name = name;
    }

    public set_email(email: string) {
        this.email = email;
    }

    public set_password(password: string) {
        this.password = password;
    }

    public set_cell_phone_number(cell_phone_number: string) {
        this.cell_phone_number = cell_phone_number;
    }

    public set_address(address: string) {
        this.address = address;
    }

    public set_instructions(instructions: string) {
        this.instructions = instructions;
    }

    //getter methods

    public get_id(): number {
        return this.id;
    }

    public get_name(): string {
        return this.name;
    }

    public get_email(): string {
        return this.email;
    }
    public get_password(): string {
        return this.password;
    }

    public get_cell_phone_number(): string {
        return this.cell_phone_number;
    }
    
    public get_address(): string {
        return this.address;
    }

    public get_instructions(): string {
        return this.instructions;
    }

    public is_new_user(): boolean {
        return this.new_user;
    }

    public get_past_orders(): number[] {
        return this.past_orders;
    }

    public get_pending_orders(): number[] {
        return this.pending_orders;
    }

}
