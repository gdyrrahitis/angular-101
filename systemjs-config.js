(function (global) {

    // Where to look for packages
    var map = {
        "app": "src",
        "@angular": "node_modules/@angular",
        "rxjs": "node_modules/rxjs",
        "i18n-iso-countries": "node_modules/i18n-iso-countries",
        "json": "node_modules/systemjs-plugin-json",
        "pad": "node_modules/pad/lib",
        "d3": "node_modules/d3",
        "d3-array": "node_modules/d3-array/build",
        "d3-geo": "//d3js.org/d3.geo.projection.v0.min.js",
        "topojson": "//d3js.org/topojson.v1.min.js"
    };

    // What to do when no filename and/or no extension exists
    var packages = {
        "app": { main: "app/main.js", defaultExtension: "js" },
        "rxjs": { main: "Rx.js", defaultExtension: "js" },
        "i18n-iso-countries": { main: "index.js" },
        "json": { main: "json.js", defaultExtension: "js" },
        "pad": { main: "index.js", defaultExtension: "js" },
        "d3": {main: "d3.js", defaultExtension: "js"},
        "d3-array": { main: "d3-array.js", defaultExtension: "js" }
    };

    // Angular2 package names, as they are in node_modules/@angular/ directory
    var ngPackageNames = [
        "common",
        "compiler",
        "core",
        "platform-browser",
        "platform-browser-dynamic",
        "router",
        "forms",
        "http"
    ];

    // Mapping angular2 packages
    function packageUmd(packageName) {
        packages["@angular/" + packageName] = { main: "bundles/" + packageName + ".umd.js", defaultExtension: "js" };
    };

    // Set UMD packages (for this sample project, in order to be safe with other environments like Karma, we should use the index as well)
    ngPackageNames.forEach(packageUmd);
    var config = {
        map: map,
        packages: packages,
        meta: {
            "*.json": { "loader": "json" }
        }
    };

    System.config(config);
})(this);