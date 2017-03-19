import * as d3 from "d3";
import "d3-geo";
import * as topojson from "topojson";

import { ElementRef, Injectable } from "@angular/core";

declare module "d3" {
    let geo: any;
}

declare type D3Options = {
    element: any,
    width: number,
    height: number,
};

declare type PathOptions = {
    element: any,
    features: any,
    path: any,
    fillCallback(d: any): any,
    clickHandler(d: any): any,
};

@Injectable()
export class D3Service {
    private width: number;
    private height: number;

    public setSvgElement(options: D3Options) {
        return d3.select(options.element)
            .append("svg")
            .attr("width", options.width)
            .attr("height", options.height);
    }

    public getRobinsonProjection(width: number, height: number) {
        return d3.geo.robinson().translate([width / 2, height / 2]);
    }

    public fetchAndDrawMapFromJsonSource(url: string, callback) {
        d3.json(url, (error: any, world: any) => callback(error, world));
    }

    public getPathFromProjection(projection) {
        return d3.geo.path().projection(projection);
    }

    public drawContinentsOnElement(options: PathOptions) {
        return options.element.selectAll(".subunit")
            .data(options.features)
            .enter()
            .append("path")
            .attr("id", (d: any) => { return d.id; })
            .attr("data-name", (d: any) => { return d.properties.name; })
            .attr("data-continent", (d: any) => { return d.properties.continent; })
            .attr("class", (d) => { return "continent"; })
            .attr("fill", options.fillCallback)
            .style("cursor", "pointer")
            .attr("d", options.path).on("click", options.clickHandler);
    }
}