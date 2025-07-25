import { ISuperHero } from './../../models/super-Hero';
import { ChangeDetectorRef, Component } from '@angular/core';
import { HeroSuper } from '../../service/hero-super';
import { API_URL } from '../../tokens/token';
import { CommonModule } from '@angular/common';
import { EditHero } from "../edit-hero/edit-hero";

@Component({
  selector: 'app-hero-component',
  imports: [CommonModule, EditHero],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss'
})
export class HeroComponent {
  heroes: ISuperHero[] = [];
   heroToEdit?:ISuperHero;
  constructor(private superSerivces: HeroSuper, private cdr: ChangeDetectorRef) {}

ngOnInit(): void {
  this.superSerivces.getSuperHeros().subscribe({
    next: (res: ISuperHero[]) => {
      this.heroes = res;
      this.cdr.detectChanges();  
    }
  });
}
 initCreateHero() {
    this.heroToEdit = {
      superId: 0,
      superName: '',
      firstName: '',
      lastName: '',
      place: ''
    };
  }
updateHero(hero :ISuperHero){
this.heroToEdit ={ ...hero };
}
DeleteHero(id:any){
  this.superSerivces.DeleteHero(id).subscribe(() => {
    this.heroes = this.heroes.filter(hero => hero.superId !== id);
})
}
}

