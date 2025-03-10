import { Component, OnInit} from '@angular/core';
import { BannerComponent } from '../../../components/banner/banner.component';
import { ArtigosComponent } from '../../../components/artigos/artigos.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { CuriosidadesComponent } from '../../../components/curiosidades/curiosidades.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ArtigosComponent, FooterComponent, CuriosidadesComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public themeHome: string | null = 'dark';

  ngOnInit() {
    this.updateTheme();
    window.addEventListener('storage', () => this.updateTheme());
  }

  updateTheme(){
    this.themeHome = localStorage.getItem('theme');
    let classTheme = document.getElementById('container-home')
    if(this.themeHome === 'light'){
      classTheme?.classList.add('light');
      classTheme?.classList.remove('dark');
    }else{
      classTheme?.classList.add('dark');
      classTheme?.classList.remove('light');
    }
  }
}
 

