import {
    AfterContentChecked, AfterContentInit, AfterViewChecked,
    AfterViewInit, Component, DoCheck, EventEmitter, Input,
    OnChanges, OnDestroy, OnInit, Output, SimpleChanges
} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-lifecycle-hooks-child",
    templateUrl: "./lifecycle-hooks-child.component.html",
})
export class LifecycleHooksChildComponent implements OnChanges, OnInit, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() public country: string;
    @Input() public timezones: string[];
    public events: any[];
    @Output() public destroy = new EventEmitter();
    private interval: NodeJS.Timer;
    private count: number = 0;
    private watchRunning: boolean = true;
    private automaticallyStopped: boolean = false;

    constructor() {
        this.events = [];
        this.events.push("Constructor (not in lifecycle hooks, it's more Typescript rather Angular)");
    }

    public ngOnChanges(changes: SimpleChanges): void {
        for (let propName in changes) {
            if (changes[propName].isFirstChange()) {
                this.events.push(`ngOnChanges invoked first time for ${propName}`);
            } else {
                this.events.push(`ngOnChanges invoked for: 
                    ${propName}:oldValue=${changes[propName].previousValue} 
                    ${propName}:newValue=${changes[propName].currentValue}`);
            }
        }
    }

    public ngOnInit(): void {
        this.events.push("ngOnInit");
        this.startCounting();
    }

    private startCounting() {
        // This is responsible for running doCheck, ngAfterConterChecked and ngAfterViewChecked every 1s
        this.interval = setInterval(() => {
            this.count++;
        }, 1000);
    }

    public ngDoCheck() {
        this.events.push("ngDoCheck");

        if (this.count >= 10) {
            this.stopWatch();
            this.automaticallyStopped = true;
            this.count = 0;
        }
    }

    public ngAfterContentInit(): void {
        this.events.push("ngAfterContentInit");
    }

    public ngAfterContentChecked(): void {
        this.events.push("ngAfterContentChecked");
    }

    public ngAfterViewInit(): void {
        this.events.push("ngAfterViewInit");
    }

    public ngAfterViewChecked(): void {
        this.events.push("ngAfterViewChecked");
    }

    public ngOnDestroy(): void {
        this.stopCounting();
        this.destroy.emit();
    }

    private stopCounting() {
        clearInterval(this.interval);
        this.interval = undefined;
    }

    private stdTimezoneOffset(date: Date): number {
        let january = new Date(date.getFullYear(), 0, 1);
        let july = new Date(date.getFullYear(), 6, 1);
        return Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
    }

    private isDaylightSavingTime(date: Date): boolean {
        return date.getTimezoneOffset() < this.stdTimezoneOffset(date);
    }

    private calculateTime(offset) {
        let now = new Date();
        if (this.isDaylightSavingTime(now)) {
            now.setHours(now.getHours() - 1);
        }
        let utc = now.getTime() - (now.getTimezoneOffset() * 60000);

        let convertedDate = new Date(utc + (3600000 * offset));

        return convertedDate.toLocaleTimeString();
    }

    private getTimezoneLocaleString(timezone: string) {
        return `UTC${timezone.replace(".", ":")}`;
    }

    private startWatch() {
        this.startCounting();
        this.watchRunning = true;
        this.automaticallyStopped = false;
    }

    private stopWatch() {
        this.stopCounting();
        this.watchRunning = false;
    }
}