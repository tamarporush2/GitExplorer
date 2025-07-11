import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () =>
            import('./login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: "login",
        loadComponent: () =>
            import('./login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: "home",
        loadComponent: () =>
            import('./home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: "bookmarks",
        loadComponent: () =>
            import('./all-bookmarks/all-bookmarks.component').then((m) => m.AllBookmarksComponent),
    },
    { path: '**', component: LoginComponent },

];
