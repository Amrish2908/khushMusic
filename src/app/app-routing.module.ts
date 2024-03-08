import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { TopPlaylistsComponent } from './components/top-playlists/top-playlists.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ArtistComponent } from './components/albums/artist/artist.component';
import { TrandingComponent } from './components/tranding/tranding.component';
import { DetailComponent } from './uittls/detail/detail.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '', component: MainlayoutComponent,
    children: [
      { path: '', redirectTo: 'top-playlists', pathMatch: 'full' },
      {
        path: 'albums', component: AlbumsComponent,
        children: [
          { path: 'artist', component:ArtistComponent },
        ]
      },
      { path: 'charts', component: ChartsComponent },
      { path: 'top-playlists', component: TopPlaylistsComponent },
      { path: 'tranding', component: TrandingComponent },
      { path: 'top-artists', component: TopArtistsComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'search', component: SearchComponent },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
