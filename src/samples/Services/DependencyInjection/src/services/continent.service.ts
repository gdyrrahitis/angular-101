import * as topojson from "topojson";

import { Injectable } from "@angular/core";

import { Location } from "../enums/Location";
import { Continent } from "../models/Continent";
import { Country } from "../models/Country";
import { CountriesService } from "./countries.service";
import { D3Service } from "../services/d3.service";

declare type ContinentOptions = {
    element: any,
    width: number,
    height: number,
    fillCallback(d: any): any,
    clickHandler(d: any): any
};

declare type DrawOptions = {
    error: any,
    world: any,
    projection: any,
    element: any
};

declare type PathOptions = {
    element: any,
    features: any,
    path: any,
    fillCallback(d: any): any,
    clickHandler(d: any): any
};

@Injectable()
export class ContinentService {
    private url: string = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";
    private continents: Continent[];
    private _fillCallback: any;
    private _clickHandler: any;

    constructor(private _countriesService: CountriesService, private _d3Service: D3Service) {
        this.continents = [
            new Continent(Location.America, this.getContinentName(Location.America)),
            new Continent(Location.Africa, this.getContinentName(Location.Africa)),
            new Continent(Location.Asia, this.getContinentName(Location.Asia)),
            new Continent(Location.Oceania, this.getContinentName(Location.Oceania)),
            new Continent(Location.Europe, this.getContinentName(Location.Europe))
        ];

        this.setCountries();
    }

    private getContinentName(location: Location): string {
        return Location[location];
    }

    private setCountries() {
        let countries: Country[] = this._countriesService.getCountries();
        this.continents.forEach(continent => {
            let relatedCountries = countries.filter(country => country.continentId == continent.id);
            continent.countries = relatedCountries;
        });
    }

    getContinents(): Continent[] {
        return this.continents;
    }

    draw(options: ContinentOptions) {
        this._fillCallback = options.fillCallback;
        this._clickHandler = options.clickHandler;

        let svg = this._d3Service.setSvgElement(options);

        let projection = this._d3Service.getRobinsonProjection(options.width, options.height);
        this._d3Service.fetchAndDrawMapFromJsonSource(this.url, (error: any, world: any) => this.geoJsonDraw({ error: error, element: svg, projection: projection, world: world }));
    }

    private geoJsonDraw(options: DrawOptions) {
        if (options.error) {
            this.errorHandler(options.error);
            return;
        }

        let pathOptions: PathOptions = {
            element: options.element,
            features: topojson.feature(options.world, options.world.objects.continent).features,
            path: this._d3Service.getPathFromProjection(options.projection),
            fillCallback: this._fillCallback,
            clickHandler: this._clickHandler
        }
        this._d3Service.drawContinentsOnElement(pathOptions);
    }

    private errorHandler(error: any) {
        console.error(error);
    }
}