import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "yesterdays chores", tasks: ['empty dishwasher', 'start launchcode',]},
      {title: "todays chores", tasks: ['clean dishes', 'clean room']},
      {title: "tomorrow chores", tasks: ['rinse and repeat']}
   ]

   constructor() { }

   ngOnInit() {
   }

}
