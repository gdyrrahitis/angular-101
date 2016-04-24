import {Component} from "angular2/core";
type pokemon = { type: string, name: string };

@Component({
    selector: "event-binding",
    templateUrl: "modules/Sections/Section1/101_1.5_Event_Binding/templates/eventbinding.component.html",
    styleUrls: ["modules/Sections/Section1/101_1.5_Event_Binding/styles/eventbinding.style.css"]
})
export class EventBindingComponent {

    changedElement: any;
    clickedElement: any;
    pokemons: pokemon[];
    imagesPath; string;
    selectedType: string;
    pokeball: string;
    pcStoredPokemons: pokemon[];

    selectedFromAvailable: pokemon;
    selectedFromStored: pokemon;

    constructor() {
        this.pokeball = "pokeball";
        this.imagesPath = "modules/Content/images";
        this.pokemons = [{ type: "electric", name: "pikachu" }, { type: "fire", name: "charmander" }, { type: "water", name: "squirtle" }];
        this.pcStoredPokemons = [{ type: "air", name: "pidgey" }, { type: "normal", name: "jigglypuff" }];
    }

    getSrcForSelected(pokemon: pokemon): string {
        if (!this.selectedType) return this.imagesPath + '/' + this.pokeball + '.png';
        if (pokemon.type !== this.selectedType) return this.imagesPath + '/' + this.pokeball + '.png';

        let selectedPokemon = this.pokemons.find((value: pokemon) => {
            return value.type === this.selectedType;
        });

        return this.imagesPath + '/' + selectedPokemon.name + '.png'
    }

    select($event) {
        this.selectedType = $event.target.id;
        this.clickedElement = $event.target;
    }

    clear($event) {
        this.selectedType = null;
        this.clickedElement = $event.target;
    }

    capitalizeFirstLetter(input: string) {
        return input.replace(input.charAt(0), input.charAt(0).toUpperCase());
    }

    getCurrentTime() {
        return (new Date()).toLocaleString();
    }

    getSelectedFromAvailablePokemon() {
        return this.selectedFromAvailable ? this.selectedFromAvailable.name : "";
    }

    getSelectedFromStoredPokemon() {
        return this.selectedFromStored ? this.selectedFromStored.name : "";
    }

    changeAvailablePokemon($event) {
        this.changedElement = $event;
        if ($event.target.selectedOptions[0].value === "-1") return;
        let pokemon = this.pokemons.find((value: pokemon) => {
            return value.name == $event.target.selectedOptions[0].value;
        });
        this.selectedFromAvailable = pokemon;
    }

    changeStoredPokemon($event) {
        this.changedElement = $event;
        if ($event.target.selectedOptions[0].value === "-1") return;
        let pokemon = this.pcStoredPokemons.find((value: pokemon) => {
            return value.name == $event.target.selectedOptions[0].value;
        });
        this.selectedFromStored = pokemon;
    }

    swap() {
        if (!this.selectedFromAvailable || !this.selectedFromStored) return;
        console.log("Available pokemon: " + JSON.stringify(this.selectedFromAvailable));
        console.log("Stored pokemon: " + JSON.stringify(this.selectedFromStored));

        let indexOfAvailable = this.pokemons.indexOf(this.selectedFromAvailable);
        let indexOfStored = this.pcStoredPokemons.indexOf(this.selectedFromStored);

        this.pokemons.splice(indexOfAvailable, 1, this.selectedFromStored);
        this.pcStoredPokemons.splice(indexOfStored, 1, this.selectedFromAvailable);

        this.selectedFromStored = null;
        this.selectedFromAvailable = null;
    }

    getColorFromType(type: string) {
        switch (type) {
            case "electric": return "btn-warning";
            case "fire": return "btn-danger";
            case "water": return "btn-info";
            case "air": return "btn-success";
            case "normal": return "btn-default";
            default: return "";
        }
    }
}