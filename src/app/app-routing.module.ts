import { AuthGuard } from './_guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layouts/admin/admin.component';
import {AuthComponent} from './layouts/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivateChild: [AuthGuard],
    children: [      
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      }, {
        path: 'widget',
        loadChildren: './pages/widget/widget.module#WidgetModule'
      }, {
        path: 'basic',
        loadChildren: './pages/components/basic/basic.module#BasicModule'
      }, {
        path: 'forms',
        loadChildren: './pages/components/forms/forms.module#FormsModule'
      }, {
        path: 'bootstrap-table',
        loadChildren: './pages/components/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
      }, {
        path: 'charts',
        loadChildren: './pages/charts/charts.module#ChartsModule',
      }, {
        path: 'simple-page',
        loadChildren: './pages/simple-page/simple-page.module#SimplePageModule'
      }, {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfileModule'
      },{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './pages/auth/auth.module#AuthModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
