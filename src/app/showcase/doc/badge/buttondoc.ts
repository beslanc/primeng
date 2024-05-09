import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'badge-button-demo',
    template: `
        <app-docsectiontext>
            <p>Buttons have built-in support for badges to display a badge inline.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-button label="Emails" badge="8" styleClass="mr-2"></p-button>
            <p-button label="Messages" icon="pi pi-users" styleClass="p-button-warning" badge="8" badgeClass="p-badge-danger"></p-button>
        </div>
        <app-code [code]="code" selector="badge-button-demo"></app-code>
    `
})
export class ButtonDoc {
    code: Code = {
        basic: `<p-button label="Emails" badge="8" styleClass="mr-2"></p-button>`,
        html: `
<div class="card flex justify-content-center">
    <p-button label="Emails" badge="8" styleClass="mr-2"></p-button>
    <p-button label="Messages" icon="pi pi-users" styleClass="p-button-warning" badge="8" badgeClass="p-badge-danger"></p-button>
</div>`,
        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'badge-button-demo',
    templateUrl: './badge-button-demo.html'
})
export class BadgeButtonDemo {}`
    };
}
