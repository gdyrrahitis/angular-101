import * as d3 from "d3";
import "d3-geo";
import * as topojson from "topojson";

import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, Renderer, Inject, Injector } from "@angular/core";

import { Continent } from "../models/Continent";
import { ContinentService } from "../services/continent.service";
import { ColorService } from "../services/color.service";

@Component({
    moduleId: module.id,
    selector: "app-di",
    templateUrl: "./di.component.html",
    styleUrls: ["./di.component.css"]
})
export class DiComponent implements OnInit, AfterViewInit {
    private colors;
    private width: number = 1000;
    private height: number = 500;
    continent: Continent;
    continents: Continent[];
    @ViewChild('map') map: ElementRef;

    constructor(
        @Inject(ContinentService) private _continentService: ContinentService,
        private _renderer: Renderer,
        private _injector: Injector) { }

    ngOnInit() {
        this.continents = this._continentService.getContinents();
        let colorService: ColorService = this._injector.get(ColorService);
        this.colors = colorService.Colors;
    }

    ngAfterViewInit() {
        let options = {
            element: this.map.nativeElement, 
            width: this.width, 
            height: this.height, 
            fillCallback: this.fill, 
            clickHandler: this.continentClickHandler
        };

        this._continentService.draw(options);
    }

    private fill = (d: any) => {
        let name = this.getContinentName(d);
        return this.colors.filter(c => c.name == name)[0].color;
    }

    private getContinentName(continent: any): string {
        return continent.properties.continent.replace("North ", "").replace("South ", "");
    }

    private continentClickHandler = (d: any) => {
        let name = this.getContinentName(d);
        let continent = this.continents.filter(c => c.name == name)[0];
        this.continent = continent;
    }
}