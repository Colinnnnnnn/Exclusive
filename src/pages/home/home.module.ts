import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { EchartsPieComponent } from '../../components/echarts-pie/echarts-pie';

@NgModule({
  declarations: [
    HomePage,
    EchartsPieComponent
  ],
  imports: [
    // EchartsPieComponent,
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
