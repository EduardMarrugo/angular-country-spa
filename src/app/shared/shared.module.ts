import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, SidebarComponent, ContactPageComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HomePageComponent, AboutPageComponent, SidebarComponent],
})
export class SharedModule {}
