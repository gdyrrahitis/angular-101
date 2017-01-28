export class Pokemon {
    level: number;
    techniques: Technique[];
    healthPoints: number;
    type: Type[];
    name: string;
    nickname: string;
    
    constructor (name:string, 
                level: number, 
                healthPoints: number, 
                techniques: Technique[], 
                type: Type[]) {
        this.name = name;
        this.level = level;
        this.healthPoints = healthPoints;
        this.techniques = techniques;
        this.type = type;
    }
}

export class Technique {
    name: string;
    type: Type;
    hitPoints: number;
    
    constructor (name: string, type: Type, hitPoints: number) {
        this.name = name;
        this.type = type;
        this.hitPoints = hitPoints;
    }
}

export enum Type {
    Fire,
    Water,
    Electric,
    Normal,
    Air,
    Ice,
    Psycic,
    Poison,
    Earth
}