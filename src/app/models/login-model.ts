export class Login {
    constructor() {
    }

    login: string;
    password: string;

    setProperties(login: string, password: string) {
        this.login = login;
        this.password = password;
    }
}