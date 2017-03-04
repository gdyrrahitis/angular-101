import * as d3 from "d3";
import "d3-geo";
import * as topojson from "topojson";

import { Injectable, ElementRef } from '@angular/core';

declare module "d3" {
    var geo: any
}

declare type D3Options = { 
    element: any, 
    width: number, 
    height: number 
};

declare type PathOptions = {
    element: any,
    features: any,
    path: any,
    fillCallback(d: any): any,
    clickHandler(d: any): any
};

@Injectable()
export class D3Service {
    private _width: number;
    private _height: number;

    constructor() {
    }

    setSvgElement(options: D3Options) {
        return d3.select(options.element)
            .append("svg")
            .attr("width", options.width)
            .attr("height", options.height);
    }

    getRobinsonProjection(width: number, height: number) {
        return d3.geo.robinson().translate([width / 2, height / 2]);
    }

    fetchAndDrawMapFromJsonSource(url: string, callback) {
        d3.json(url, (error: any, world: any) => callback(error, world));
    }

    getPathFromProjection(projection) {
        return d3.geo.path().projection(projection);
    }

    drawContinentsOnElement(options: PathOptions) {
        return options.element.selectAll(".subunit")
            .data(options.features)
            .enter()
            .append("path")
            .attr("id", function (d: any) { return d.id; })
            .attr("data-name", function (d: any) { return d.properties.name; })
            .attr("data-continent", function (d: any) { return d.properties.continent; })
            .attr("class", function (d) { return "continent"; })
            .attr("fill", options.fillCallback)
            .style("cursor", "pointer")
            .attr("d", options.path).on("click", options.clickHandler)
    }
}