export class User {
    constructor (
        public firstName: string,
        public lastName: string,
        public birthday: Date,
        public sex: "male" | "female",
        public country: string
    ) { }
}