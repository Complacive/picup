import { Cart } from './cart';

export class User {

    private id: number;
    public firstName: string;
    public lastName: string;
    private email: string;
    private password: string;
    private cell_phone: string;
    private address: string;
    private instruction: string;
    private new_user: string;
    // private past_orders: number[];
    // private pending_orders: number[];


    // private cart: Cart = null;

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

    public set_firstName(firstName: string) {
        this.firstName = firstName;
    }

    public set_lastName(lastName: string) {
        this.lastName = lastName;
    }

    public set_email(email: string) {
        this.email = email;
    }

    public set_password(password: string) {
        this.password = password;
    }

    public set_cell_phone_number(cell_phone: string) {
        this.cell_phone = cell_phone;
    }

    public set_address(address: string) {
        this.address = address;
    }

    public set_instruction(instruction: string) {
        this.instruction = instruction;
    }

    public set_new_user(new_user: string) {
        this.new_user = new_user;
    }

    //getter methods

    public get_id(): number {
        return this.id;
    }

    public get_firstName(): string {
        return this.firstName;
    }

    public get_lastName(): string {
        return this.lastName;
    }

    public get_email(): string {
        return this.email;
    }
    public get_password(): string {
        return this.password;
    }

    public get_cell_phone_number(): string {
        return this.cell_phone;
    }
    
    public get_address(): string {
        return this.address;
    }

    public get_instruction(): string {
        return this.instruction;
    }

    public is_new_user(): string {
        return this.new_user;
    }

    /*
    public get_past_orders(): number[] {
        return this.past_orders;
    }

    public get_pending_orders(): number[] {
        return this.pending_orders;
    }
    */

}
