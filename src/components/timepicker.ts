import {Component} from '@angular/core';
import{ViewController,NavParams} from 'ionic-angular'


@Component({
    selector:'timepicker',
    template:'timepicker.html'
})

export class TimePickerComponent
{
    hrs:any="";
    mins:any="";
    apm:any="";
    
    constructor(public viewctrl:ViewController,navparams:NavParams) {
      let params=navparams.get('timeObj');
      this.hrs=params.hrs;
      this.mins=params.mins;
      this.apm=params.apm;
       
  
    }
  
    close(){
      this.viewctrl.dismiss({"data":""})
    }
  
    setTime()
    {
      let time={'hrs':this.hrs,'mins':this.mins,'apm':this.apm}
      this.viewctrl.dismiss({"data": time })
    }
  
    setHours(hours)
    {
     
     hours = hours % 12;
     hours = hours ? hours : 12; // the hour '0' should be '12'
     let hr=hours<10?'0'+hours:hours;
     return hr;
    }
   setMinutes(minutes)
   {
      let mins=minutes>=10?minutes:'0'+minutes;
      return mins;
   }
   
     incHr()
     {
  
      this.hrs=parseInt(this.hrs);
      this.hrs=this.setHours(this.hrs+1);
        if(this.hrs==12)
      {
        this.apm=(this.apm=='AM')?'PM':'AM';
      }
   
     }
     incMin()
     {
       this.mins=parseInt(this.mins);
       this.mins=this.mins+1;
       if(this.mins==60)
       {
         this.hrs=this.setHours(parseInt(this.hrs)+1);
           if(this.hrs==12)
           {
             this.apm=(this.apm=='AM')?'PM':'AM';
           }
         this.mins='00';
       }
       else
       {
           this.mins=this.setMinutes(this.mins);
       }
     }
     decHr()
     {
       this.hrs=parseInt(this.hrs);
       this.hrs=this.hrs-1;
        if(this.hrs==0)
          this.hrs=12;
        else
          this.hrs=this.setHours(this.hrs);
         if(this.hrs==11)
         {
           this.apm=(this.apm=='AM')?'PM':'AM';
         }
      
     }
     decMin()
     {
       this.mins=parseInt(this.mins);
       this.mins=this.mins-1;
        if(this.mins==-1)
        {
          this.hrs=this.setHours(parseInt(this.hrs)-1);
          if(this.hrs==11)
          {
            this.apm=(this.apm=='AM')?'PM':'AM';
          }
          this.mins=59;
        }
        else
        this.mins=this.setMinutes(this.mins);
             
     }
}