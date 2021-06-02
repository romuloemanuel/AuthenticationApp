export class Register {
    constructor() {
    }
    userName: string;
    email: string;
    password: string;
    phoneNumber: string;

    setProperties(name: string = null, email: string = null, password: string = null, phone: string = null) {
        this.userName = name;
        this.email = email;
        this.password = password;
        this.phoneNumber = phone;
    }
}