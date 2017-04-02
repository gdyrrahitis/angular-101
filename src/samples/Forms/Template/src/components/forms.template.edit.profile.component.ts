import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "forms-template-edit-profile",
    templateUrl: "forms.template.edit.profile.component.html"
})
export class FormsTemplateEditProfileComponent implements OnInit {
    public currentUser: any;
    public countries: any[];
    public dt: Date;
    public minDate: Date = void 0;
    public maxDate: Date = new Date();

    public ngOnInit() {
        // Code here
    }
}