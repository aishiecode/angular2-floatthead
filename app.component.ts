import { Component } from '@angular/core';

@Component ({
   selector: 'floatthead-app',
   template: `
     <h1>{{appTitle}}</h1>
     <div class="container">
       <table floatthead>
         <thead>
           <tr>
             <th>Sample Header 1</th>
             <th>Sample Header 2</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>Data Col 1</td>
             <td>Data Col 2</td>
           </tr>
         </tbody>
       </table>
     </div>
    `  
})

export class AppComponent {
   appTitle: string = 'Welcome';
}
