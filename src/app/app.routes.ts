import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';


export const routes: Routes = [
    {
        path: "",
        component: MainPage,
        title: "App"
    },
    {
        path: "**",
        component: NotFoundPage,
        title: "404"
    }
];
