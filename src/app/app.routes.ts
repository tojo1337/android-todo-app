import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GreetComponent } from './components/greet/greet.component';
import { TodoComponent } from './components/todo/todo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"greet", component:GreetComponent},
    {path:"todo", component:TodoComponent},
    {path:"**", component:NotFoundComponent}
];
