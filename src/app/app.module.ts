import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {EsriLoaderModule} from 'angular-esri-loader';
import { AngularEchartsModule  } from 'ngx-echarts';

import {HeaderComponent} from './header/header.component';
import {AsideComponent} from './aside/aside.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';
import {MapComponent} from './map/map.component';
import {Routes, RouterModule} from "@angular/router";
import {TodayComponent} from './business/today/today.component';
import {HistoryComponent} from './business/history/history.component';
import {PlanComponent} from './business/plan/plan.component';
import {SuperviseComponent} from './business/supervise/supervise.component';
import {SearchComponent} from './search/search.component';
import { FollowComponent } from './business/follow/follow.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { ManagerComponent } from './system/manager/manager.component';
import { RiversComponent } from './system/rivers/rivers.component';
import { ReservoirComponent } from './system/reservoir/reservoir.component';
import { ChannelComponent } from './system/channel/channel.component';
import { MonitpointComponent } from './system/monitpoint/monitpoint.component';
import { EventstiComponent } from './statistical/eventsti/eventsti.component';
import { RivercourseComponent } from './statistical/rivercourse/rivercourse.component';
import { BusmsgComponent } from './statistical/busmsg/busmsg.component';
import { UsermsgComponent } from './statistical/usermsg/usermsg.component';
import { NoticeComponent } from './message/notice/notice.component';
import { FileComponent } from './message/file/file.component';
import { ReportComponent } from './report/report.component';
import { LakeComponent } from './system/lake/lake.component';
import { Code404Component } from './code404/code404.component';
import {HashLocationStrategy , LocationStrategy} from '@angular/common';
const routeConfig: Routes = [
{path: '', component: MapComponent},
{path: 'search', component: SearchComponent},
{path: 'business/today', component: TodayComponent},
{path: 'business/history', component: HistoryComponent},
{path: 'business/plan', component: PlanComponent},
{path: 'business/supervise', component: SuperviseComponent},
{path: 'business/follow', component: FollowComponent},
{path: 'assess', component: AssessmentComponent},
{path: 'system/manager', component: ManagerComponent},
{path: 'system/rivers', component: RiversComponent},
{path: 'system/lake', component: LakeComponent},
{path: 'system/channel', component: ChannelComponent},
{path: 'system/monitpoint', component: MonitpointComponent},
{path: 'statistical/rivercourse', component: RivercourseComponent},
{path: 'system/reservoir', component: ReservoirComponent},
{path: 'statistical/eventsti', component: EventstiComponent},
{path: 'statistical/busmsg', component: BusmsgComponent},
{path: 'statistical/usermsg', component: UsermsgComponent},
{path: 'message/notice', component: NoticeComponent},
{path: 'message/file', component: FileComponent},
{path: 'report', component: ReportComponent},
{path: '**', component: Code404Component}
]

@NgModule({
	declarations: [
	AppComponent,
	HeaderComponent,
	AsideComponent,
	ContentComponent,
	FooterComponent,
	MapComponent,
	TodayComponent,
	HistoryComponent,
	PlanComponent,
	SuperviseComponent,
	SearchComponent,
	FollowComponent,
	AssessmentComponent,
	ManagerComponent,
	RiversComponent,
	ReservoirComponent,
	ChannelComponent,
	MonitpointComponent,
	EventstiComponent,
	RivercourseComponent,
	BusmsgComponent,
	UsermsgComponent,
	NoticeComponent,
	FileComponent,
	ReportComponent,
	LakeComponent,
	Code404Component,
	],
	imports: [
	BrowserModule,
	AppRoutingModule,
	EsriLoaderModule,
	AngularEchartsModule,
	RouterModule.forRoot(routeConfig)
	],
	providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
	bootstrap: [AppComponent]
})
export class AppModule {
}
