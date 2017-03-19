import { OpaqueToken } from "@angular/core";

export interface IWorldMapConfig {
    width: number;
    height: number;
}

export let MapConfiguration: IWorldMapConfig = {
    width: 1000,
    height: 500,
};

export let MAP_CONFIG = new OpaqueToken("MapConfiguration");