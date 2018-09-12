import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivaNgForComponent } from './directiva-ng-for/directiva-ng-for.component';
import { DirectivaNgIfComponent } from './directiva-ng-if/directiva-ng-if.component';
import { TemplateNgContainerComponent } from './template-ng-container/template-ng-container.component';
import { DirectivaNgSwitchComponent } from './directiva-ng-switch/directiva-ng-switch.component';
import { DirectivaNgStyleComponent } from './directiva-ng-style/directiva-ng-style.component';
import { DirectivaNgClassComponent } from './directiva-ng-class/directiva-ng-class.component';
import { TextoComponent } from './texto/texto.component';
import { GlosarioDirective } from './directivas/glosario.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaNgForComponent,
    DirectivaNgIfComponent,
    TemplateNgContainerComponent,
    DirectivaNgSwitchComponent,
    DirectivaNgStyleComponent,
    DirectivaNgClassComponent,
    TextoComponent,
    GlosarioDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
