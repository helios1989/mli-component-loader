import { 
  Directive, 
  ViewContainerRef, 
  ComponentFactoryResolver,
  Input,
  OnInit 
}  from '@angular/core';

@Directive({
  selector: '[componentLoader]'
})
export class MliComponentLoaderDirective {
  @Input("componentLoader") componentToUsed: any;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
		if (this.componentToUsed) {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentToUsed);
			this.viewContainerRef.clear();
			let componentRef = this.viewContainerRef.createComponent(componentFactory);
		}
	}
}
