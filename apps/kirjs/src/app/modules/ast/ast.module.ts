import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { SlidesRoutes } from '@angular-presentation/presentation/src/lib/slide-routes';
import { AstPreviewRunnerModule } from './ast-preview-runner/ast-preview-runner.module';
import { BrowserWindowModule } from '@angular-presentation/browser';
import { SimpleEditorModule } from '../../../../../../libs/code-demos/src/lib/editor/simple-editor.module';
import { NewProgressBarModule } from './new-progress-bar/new-progress-bar.module';
import { AstComponent } from './ast.component';
import { DebuggerComponent } from './debugger/debugger.component';
import { TestSetComponent } from './test-set/test-set.component';
import { MatchTypesOnHoverDirective } from './match-types-on-hover.directive';
import { AngularSlidesToPdfModule } from '@angular-presentation/angular-slides-to-pdf';
import { FakeBabelModule } from '../../../../../../libs/exercise/src/lib/fake-babel-runner/fake-babel-runner.module';
import { SizePickerModule } from './size-picker/size-picker.module';
import { TooltipsModule } from '@angular-presentation/tooltips';
import { RunnersModule } from '../../../../../../libs/exercise/src/lib/runners/runners.module';
import { PresentationModule } from '@angular-presentation/presentation';
import { FeedbackModule } from '../../../../../../libs/feedback/src/lib/feedback.module';
import { ExerciseModule } from '../../../../../../libs/exercise/src/lib/exercise.module';

const routes = RouterModule.forChild(
  SlidesRoutes.get(AstComponent)
);

@NgModule({
  imports: [
    routes,
    CommonModule,
    AstPreviewRunnerModule,
    PresentationModule,
    ExerciseModule,
    BrowserWindowModule,
    FeedbackModule,
    SimpleEditorModule,
    FlexLayoutModule,
    FormsModule,
    RunnersModule,
    TooltipsModule,
    SizePickerModule,
    MatCardModule,
    FakeBabelModule,
    NewProgressBarModule,
    AngularSlidesToPdfModule,
  ],
  declarations: [
    AstComponent,
    MatchTypesOnHoverDirective,
    DebuggerComponent,
    TestSetComponent,
  ],
  exports: [AstComponent]
})
export class AstModule {

}