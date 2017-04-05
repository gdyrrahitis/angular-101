import { Component, OnInit } from "@angular/core";
import { User } from "../models/User";
import { FormsTemplateAuthorizationService } from "../services/forms.template.authorization.service";
import { FormsTemplateCountriesService } from "../services/forms.template.countries.service";

@Component({
    moduleId: module.id,
    selector: "app-forms-template-calculator",
    templateUrl: "./forms.template.calculator.component.html",
    styles: [`
        .margin-top-15 {
            margin-top: 15px;
        }
    `]
})
export class FormsTemplateCalculatorComponent implements OnInit {
    public countries: any[];
    public currentUser: User;
    public robotSrc: string;
    public userButtons = ["firstName", "lastName", "email", "country", "address"];
    public selectedUserButton: "firstName" | "lastName" | "email" | "country" | "address" = "firstName";
    public freeText: string;
    private baseUrl: string = "https://robohash.org/{placeholder}.png?set={set}";
    private selectedMonsterButton: "set1" | "set2" | "set3" = "set1";

    constructor(
        private authorizationService: FormsTemplateAuthorizationService) { }

    public ngOnInit() {
        //if (this.authorizationService.isAuthenticated) {
        let user = this.authorizationService.currentUser;
        this.currentUser = Object.assign({}, user);

        this.robotSrc = this.baseUrl
            .replace("{placeholder}", this.currentUser[this.selectedUserButton])
            .replace("{set}", this.selectedMonsterButton);
        //} else {
        //    console.error("Security breach! Shouldn't have access to this page");
        //}
    }

    public monstersPick(name) {
        this.selectedMonsterButton = name;
        this.robotSrc = this.baseUrl
            .replace("{placeholder}", this.currentUser[this.selectedUserButton])
            .replace("{set}", this.selectedMonsterButton);
    }

    public userPick(name) {
        this.selectedUserButton = name;
        this.freeText = "";

        this.robotSrc = this.baseUrl
            .replace("{placeholder}", this.currentUser[this.selectedUserButton])
            .replace("{set}", this.selectedMonsterButton);
    }

    public getThatCreature() {
        this.robotSrc = this.baseUrl
            .replace("{placeholder}", this.freeText)
            .replace("{set}", this.selectedMonsterButton);
    }
}