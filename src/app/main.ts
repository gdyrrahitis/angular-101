import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";

// tslint:disable-next-line:no-var-requires
// let config: { node_env: string } = require("../../env-config.json");
// if (config.node_env.trim() === "production") {
enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule).catch((error) => { console.error(error); });