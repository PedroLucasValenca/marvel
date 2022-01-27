import { PageNotFoundComponent } from './shared/page-not-found/page-not-found/page-not-found.component';
import { CharactersComponent } from './pages/characters/characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
