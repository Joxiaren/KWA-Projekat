import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { LoginPage } from 'app/pages/login-page/login-page';


export const routes: Routes = [
    {
        path: "",
        component: MainPage,
        title: "App"
    },
    {
        path: "login",
        component: LoginPage,
        title: "Login"
    },
    {
        path: "**",
        component: NotFoundPage,
        title: "404"
    }
];
