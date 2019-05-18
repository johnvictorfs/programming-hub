import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post-detail/:id', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
