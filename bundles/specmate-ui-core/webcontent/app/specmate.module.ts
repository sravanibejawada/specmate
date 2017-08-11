import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SpecmateDataService } from './services/specmate-data.service';
import { EditorCommonControlService } from './services/editor-common-control.service'
import { NavigatorService } from "./services/navigator.service";

import { SpecmateComponent } from './specmate.component';
import { PageNotFound } from './components/page-not-found.component';

import { CoreModule } from './components/core/core.module';
import { RequirementsModule } from './components/requirements/requirements.module';
import { SpecmateRoutingModule } from './specmate-routing.module';
import { TestsModule} from './components/tests/tests.module';

import { UnsavedChangesGuard } from './guards/unsaved-changes-guard';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    CoreModule,
    RequirementsModule,
    TestsModule,
    SpecmateRoutingModule
  ],
  declarations: [
    SpecmateComponent,
    PageNotFound
  ],
  providers: [SpecmateDataService, EditorCommonControlService, NavigatorService, UnsavedChangesGuard],
  bootstrap: [SpecmateComponent]
})

export class SpecmateModule { }