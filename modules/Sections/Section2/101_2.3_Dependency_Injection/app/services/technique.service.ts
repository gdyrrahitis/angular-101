import {Injectable, OnInit} from "angular2/core";
import {Technique} from "../models/technique.model";
import {Type} from "../enums/type.enum";

@Injectable()
export class TechniquesService implements OnInit {
    private techniques: Technique[];
    ngOnInit() {
        this.techniques = [
            new Technique(1, "Thunderbolt", Type.Electric, 20),
            new Technique(2, "Tackle", Type.Normal, 8),
            new Technique(3, "Ember", Type.Fire, 16),
            new Technique(4, "Scratch", Type.Normal, 10),
            new Technique(5, "Water gun", Type.Water, 18),
            new Technique(6, "Whip", Type.Grass, 22),
            new Technique(7, "Mega Punch", Type.Fighting, 52)
        ];
    }

    getTechniques(): Technique[] {
        return this.techniques;
    }

    getTechnique(id: number): Technique;
    getTechnique(name: string): Technique;

    getTechnique(param: number | string): Technique {
        if (typeof param === "number") {
            return this.techniques.find((value) => value.id == param);
        }
        else {
         return this.techniques.find((value) => value.name.toLowerCase() == param.toLowerCase());   
        }
    }
}