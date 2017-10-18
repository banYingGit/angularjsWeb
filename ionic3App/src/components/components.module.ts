import { NgModule } from '@angular/core';
import { NumberBoxComponent } from './number-box/number-box';
import { UiHeaderComponent } from './ui-header/ui-header';
@NgModule({
	declarations: [NumberBoxComponent,
    UiHeaderComponent],
	imports: [],
	exports: [NumberBoxComponent,
    UiHeaderComponent]
})
export class ComponentsModule {}
