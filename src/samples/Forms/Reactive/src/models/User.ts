export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public address: { street: string, zip: string, country: string }
    ) { }
}