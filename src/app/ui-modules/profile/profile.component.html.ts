export default 
  `<ng-template [componentLoader]="componentToUse" *ngIf="componentToUse"></ng-template>
  <div *ngIf="!componentToUse">
  <h1>This is the default</h1></div>`
