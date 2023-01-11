import { User } from "./user";

export class Customer extends User {
    customerName!: String;
	customerAddress!: String;
	customerPanNo!: String;
	customerAdharNo!: String;
    customerPhone!: String;
    customerEmail!: String;
    userName!: String;
    password!: String;

    constructor()
    {
        super();
    }
}
