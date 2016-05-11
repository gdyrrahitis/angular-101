import {Type} from "../enums/type.enum";
import {Technique} from "./technique.model";
 
export class Pokemon {

    level: number;
    techniques: Technique[];
    healthPoints: number;
    type: Type[];
    name: string;
    nickname: string;
    imageName; string;
    
    constructor (name:string, 
                level: number, 
                healthPoints: number, 
                techniques: Technique[], 
                type: Type[],
                imageName: string) {
        this.name = name;
        this.level = level;
        this.healthPoints = healthPoints;
        this.techniques = techniques;
        this.type = type;
        this.imageName = imageName;
    }
}
