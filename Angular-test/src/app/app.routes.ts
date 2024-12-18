import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { TrainingPlanComponent } from './training-plan/training-plan.component';
import { HomeComponent } from './home/home.component';
import { RealtimeDataComponent } from './realtime-data/realtime-data.component';
import { ThermalRenovationComponent } from './thermal-renovation/thermal-renovation.component';
import { QuoteComponent } from './quote/quote.component';
import { TraitementComponent } from './traitement/traitement.component';
import { Models3DComponent } from './models-3-d/models-3-d.component';
import { Maintain10Component } from './maintain-10/maintain-10.component';
import { Maintain50Component } from './maintain-50/maintain-50.component';
import { EsperancyComponent } from './esperancy/esperancy.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { BimDataComponent } from './bim-data/bim-data.component';
import { AnomaliesComponent } from './anomalies/anomalies.component';
import { AcvComponent } from './acv/acv.component';
import { ImmediateComponent } from './immediate/immediate.component';
import { Next10Component } from './next-10/next-10.component';
import { Next50Component } from './next-50/next-50.component';
import { IdtComponent } from './idt-data/idt/idt.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'project', component: ProjectsComponent },
    { path: 'training_plan', component: TrainingPlanComponent },
    {path: 'realtime_data', component: RealtimeDataComponent},
    {path: 'thermal_renovation', component: ThermalRenovationComponent},
    {path: 'quote', component: QuoteComponent},
    {path: 'traitement', component: TraitementComponent},
    {path: 'models_3D', component: Models3DComponent},
    {path: 'maintain_10', component: Maintain10Component},
    {path: 'maintain_50', component: Maintain50Component},
    {path: 'esperancy', component: EsperancyComponent},
    {path: 'diagnosis', component: DiagnosisComponent},
    {path: 'BIM_data', component: BimDataComponent},
    {path: 'anomalies', component: AnomaliesComponent},
    {path: 'acv', component: AcvComponent},
    {path: 'immediate', component: ImmediateComponent},
    {path: 'next_10', component: Next10Component},
    {path: 'next_50', component: Next50Component},
    { path: 'idt', component: IdtComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}