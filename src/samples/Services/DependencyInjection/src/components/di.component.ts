import * as d3 from "d3";
import "d3-geo";
import * as topojson from "topojson";

import { AfterViewInit, Component, ElementRef, Inject, Injector, OnInit, Renderer, ViewChild } from "@angular/core";

import { MAP_CONFIG, WorldMapConfig } from "../configuration/configuration";
import { Color } from "../models/Color";
import { Continent } from "../models/Continent";
import { ColorService } from "../services/color.service";
import { ContinentService } from "../services/continent.service";

@Component({
    moduleId: module.id,
    selector: "app-di",
    templateUrl: "./di.component.html",
    styleUrls: ["./di.component.css"],
})
export class DiComponent implements OnInit, AfterViewInit {
    public continent: Continent;
    public continents: Continent[];
    @ViewChild("map") public  map: ElementRef;
    private colors: Color[];
    private width: number;
    private height: number;

    constructor(
        @Inject(ContinentService) private continentService: ContinentService,
        @Inject(MAP_CONFIG) private mapConfig: WorldMapConfig,
        private renderer: Renderer,
        private injector: Injector) {
        this.height = this.mapConfig.height;
        this.width = this.mapConfig.width;
    }

    public ngOnInit() {
        this.continents = this.continentService.getContinents();
        let colorService: ColorService = this.injector.get(ColorService);
        this.colors = colorService.Colors;
    }

    public ngAfterViewInit() {
        let options = {
            element: this.map.nativeElement,
            width: this.width,
            height: this.height,
            fillCallback: this.fill,
            clickHandler: this.continentClickHandler,
        };

        this.continentService.draw(options);
    }

    private fill = (d: any) => {
        let name = this.getContinentName(d);
        return this.colors.filter((c) => c.name === name)[0].color;
    }

    private getContinentName(continent: any): string {
        return continent.properties.continent.replace("North ", "").replace("South ", "");
    }

    private continentClickHandler = (d: any) => {
        let name = this.getContinentName(d);
        let continent = this.continents.filter((c) => c.name === name)[0];
        this.continent = continent;
    }
}