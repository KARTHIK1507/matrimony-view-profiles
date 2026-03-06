import { Routes } from '@angular/router';
import { MatchesComponent } from './pages/matches/matches.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [

  { path: '', component: MatchesComponent },

  { path: 'profile/:id', component: ProfileComponent }

];