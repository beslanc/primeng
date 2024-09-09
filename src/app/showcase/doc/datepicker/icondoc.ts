import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'datepicker-icon-demo',
    template: `
        <app-docsectiontext>
            <p>An additional icon is displayed next to the input field when <i>showIcon</i> is present.</p>
        </app-docsectiontext>
        <p-fluid class="card flex flex-wrap gap-4">
            <div class="flex-auto">
                <label for="buttondisplay" class="font-bold block mb-2"> Button </label>
                <p-date-picker [(ngModel)]="date1" [showIcon]="true" inputId="buttondisplay" [showOnFocus]="false" />
            </div>

            <div class="flex-auto">
                <label for="icondisplay" class="font-bold block mb-2"> Default Icon </label>
                <p-date-picker [(ngModel)]="date2" [iconDisplay]="'input'" [showIcon]="true" inputId="icondisplay" />
            </div>

            <div class="flex-auto">
                <label for="templatedisplay" class="font-bold block mb-2"> Custom Icon </label>
                <p-date-picker [(ngModel)]="date3" [iconDisplay]="'input'" [showIcon]="true" [timeOnly]="true" inputId="templatedisplay">
                    <ng-template pTemplate="inputicon" let-clickCallBack="clickCallBack">
                        <i class="pi pi-clock pointer-events-none pointer-events-none" (click)="clickCallBack($event)"></i>
                    </ng-template>
                </p-date-picker>
            </div>
        </p-fluid>
        <app-code [code]="code" selector="datepicker-icon-demo"></app-code>
    `,
})
export class IconDoc {
    date1: Date | undefined;

    date2: Date | undefined;

    date3: Date | undefined;

    code: Code = {
        basic: `<p-date-picker 
    [(ngModel)]="date1" 
    [showIcon]="true" 
    [showOnFocus]="false" 
    inputId="buttondisplay" />

<p-date-picker 
    [(ngModel)]="date2" 
    [iconDisplay]="'input'" 
    [showIcon]="true" 
    inputId="icondisplay" />

<p-date-picker 
    [(ngModel)]="date3" 
    [iconDisplay]="'input'" 
    [showIcon]="true" 
    [timeOnly]="true" 
    inputId="templatedisplay">
        <ng-template pTemplate="inputicon" let-clickCallBack="clickCallBack">
            <i class="pi pi-user pointer-events-none" (click)="clickCallBack($event)"></i>
        </ng-template>
</p-date-picker>`,

        html: `<p-fluid class="card flex flex-wrap gap-4">
<div class="flex-auto">
    <label for="buttondisplay" class="font-bold block mb-2"> Button </label>
    <p-date-picker 
        [(ngModel)]="date1" 
        [showIcon]="true" 
        inputId="buttondisplay" 
        [showOnFocus]="false" />
</div>

<div class="flex-auto">
    <label for="icondisplay" class="font-bold block mb-2"> Default Icon </label>
    <p-date-picker 
        [(ngModel)]="date2" 
        [iconDisplay]="'input'" 
        [showIcon]="true" 
        inputId="icondisplay" />
</div>

<div class="flex-auto">
    <label for="templatedisplay" class="font-bold block mb-2"> Custom Icon </label>
        <p-date-picker 
            [(ngModel)]="date3" 
            [iconDisplay]="'input'" 
            [showIcon]="true" 
            [timeOnly]="true" 
            inputId="templatedisplay">
                <ng-template pTemplate="inputicon" let-clickCallBack="clickCallBack">
                    <i 
                        class="pi pi-clock pointer-events-none pointer-events-none" 
                        (click)="clickCallBack($event)"></i>
                </ng-template>
        </p-date-picker>
</div>
</p-fluid>`,

        typescript: `import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'datepicker-icon-demo',
    templateUrl: './datepicker-icon-demo.html',
    standalone: true,
    imports: [DatePickerModule, FormsModule, FluidModule]
})
export class DatePickerIconDemo {
    date1: Date | undefined;

    date2: Date | undefined;

    date3: Date | undefined;
}`,
    };
}
