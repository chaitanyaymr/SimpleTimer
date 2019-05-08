import { TimePickerComponent } from './components/timepicker';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({

    imports:[IonicModule],
    declarations:[TimePickerComponent],
    exports:[TimePickerComponent]

})

export class IonicTimePickerModule{
    
}