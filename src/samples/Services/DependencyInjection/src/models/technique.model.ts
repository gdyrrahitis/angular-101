import {Type} from "../enums/type.enum";

export class Technique {
    id: number;
    name: string;
    type: Type;
    hitPoints: number;
    
    constructor (id: number, name: string, type: Type, hitPoints: number) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.hitPoints = hitPoints;
    }
}