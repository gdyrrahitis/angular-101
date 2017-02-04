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
    private url: string = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";
    private colors;
    private svg: any;
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
        this.svg = d3.select(this.map.nativeElement)
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height);

        let projection = d3.geo.robinson().translate([this.width / 2, this.height / 2]);
        d3.json(this.url, (error: any, world: any) => this.geoJsonDraw(error, world, projection));
    }

    private geoJsonDraw(error: any, world: any, projection: any) {
        if (error) {
            return console.error(error);
        }

        let path = d3.geo.path().projection(projection);

        // Draw the continents
        let continents = this.svg.selectAll(".subunit")
            .data(topojson.feature(world, world.objects.continent).features)
            .enter()
            .append("path")
            .attr("id", function (d: any) { return d.id; })
            .attr("data-name", function (d: any) { return d.properties.name; })
            .attr("data-continent", function (d: any) { return d.properties.continent; })
            .attr("class", function (d) { return "continent"; })
            .attr("fill", this.fill)
            .style("cursor", "pointer")
            .attr("d", path).on("click", this.continentClickHandler);
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