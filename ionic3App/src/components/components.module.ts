import { NgModule } from '@angular/core';
import { NumberBoxComponent } from './number-box/number-box';
import { CityPickerComponent } from './city-picker/city-picker';
@NgModule({
	declarations: [NumberBoxComponent,
    CityPickerComponent],
	imports: [],
	exports: [NumberBoxComponent,
    CityPickerComponent]
})
export class ComponentsModule {}
