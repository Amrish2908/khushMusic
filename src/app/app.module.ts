import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { TopPlaylistsComponent } from './components/top-playlists/top-playlists.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PlaysongComponent } from './uittls/playsong/playsong.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsComponent } from './components/albums/albums.component';
import { DetailComponent } from './uittls/detail/detail.component';
import { AbbreviateNumberPipe } from './uittls/pipe/abbreviate-number.pipe';
import { ChartsComponent } from './components/charts/charts.component';
import { ArtistComponent } from './components/albums/artist/artist.component';
import { TrandingComponent } from './components/tranding/tranding.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { LoaderComponent } from './uittls/loader/loader.component';
import { LightDarkModeComponent } from './uittls/light-dark-mode/light-dark-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainlayoutComponent,
    TopPlaylistsComponent,
    TopArtistsComponent,
    LoginComponent,
    RegisterComponent,
    PlaysongComponent,
    AlbumsComponent,
    DetailComponent,
    AbbreviateNumberPipe,
    ChartsComponent,
    ArtistComponent,
    TrandingComponent,
    LoaderComponent,
    LightDarkModeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxAudioPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
