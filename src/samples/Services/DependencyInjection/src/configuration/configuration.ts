import { OpaqueToken } from "@angular/core";

export interface WorldMapConfig {
    width: number;
    height: number;
}

export let MapConfiguration: WorldMapConfig = {
    width: 1000,
    height: 500,
};

export let MAP_CONFIG = new OpaqueToken("MapConfiguration");