export class User {
    constructor (
        public firstName: string,
        public lastName: string,
        public email: string,
        public country: string,
        public address?: string
    ) { }
}