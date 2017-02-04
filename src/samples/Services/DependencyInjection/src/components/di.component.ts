import * as d3 from "d3";
import "d3-geo";
import * as topojson from "topojson";;

import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, Renderer } from "@angular/core";

import { Continent } from "../models/Continent";
import { ContinentService } from "../services/continent.service";

@Component({
    moduleId: module.id,
    selector: "app-di",
    templateUrl: "./di.component.html",
    styleUrls: ["./di.component.css"]
})
export class DiComponent implements OnInit, AfterViewInit {
    private url: string = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";
    private colors;
    continent: Continent;
    continents: Continent[];
    @ViewChild('map') el: ElementRef;

    constructor(private _continentService: ContinentService, private renderer: Renderer) { }

    ngOnInit() {
        this.continents = this._continentService.getContinents();
        this.colors = [{ name: "North America", color: "#C9E4E7" },
        { name: "South America", color: "#C9E4E7" },
        { name: "Europe", color: "#B4A0E5" },
        { name: "Africa", color: "#DDA448" },
        { name: "Asia", color: "#BB342F" },
        { name: "Oceania", color: "#C2E812" }];
    }

    ngAfterViewInit() {
        let that = this;
        var width = 1000,
            height = 500;
        var svg = d3.select(this.el.nativeElement).append("svg")
            .attr("width", width)
            .attr("height", height);

        var projection = d3.geo.robinson().translate([width / 2, height / 2]);
        d3.json(this.url, function (error, world: any) {
            if (error) {
                return console.error(error);
            }

            var path = d3.geo.path().projection(projection);

            // Draw the continents
            var provinces = svg.selectAll(".subunit")
                .data(topojson.feature(world, world.objects.continent).features);
            provinces.enter().append("path")
                .attr("id", function (d: any) { return d.id; })
                .attr("data-name", function (d: any) { return d.properties.name; })
                .attr("data-continent", function (d: any) { return d.properties.continent; })
                .attr("class", function (d) { return "continent"; })
                .attr("fill", (d: any) => {
                    return that.colors.filter(c => c.name == d.properties.continent)[0].color;
                })
                .style("cursor", "pointer")
                .attr("d", path).on("click", (d: any) => {
                    let name = d.properties.continent.replace("North ", "").replace("South ", "");
                    let continent = that.continents.filter(c => c.name == name)[0];
                    that.continent = continent;
                });
        });
    }
}