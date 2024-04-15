import { Routes } from '@angular/router';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [
    {path:'gets',component:GetComponent},
    {path:'posts',component:PostComponent},
];