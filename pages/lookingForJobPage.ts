import { $ } from "protractor";

export class LookingForJobPageObject {
    public addToFavoritesButton: any;
    public alertOk: any;
    public memoSection: any;

    constructor() {
        this.addToFavoritesButton = $("[title='Add to favorites']");
        this.alertOk = $("#alert_ok");
        this.memoSection = $("[title='Memo']");
    }
}