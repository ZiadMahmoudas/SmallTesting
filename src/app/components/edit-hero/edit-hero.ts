import { Component, Input, input } from '@angular/core';
import { ISuperHero } from '../../models/super-Hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroSuper } from '../../service/hero-super';

@Component({
  selector: 'app-edit-hero',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-hero.html',
  styleUrl: './edit-hero.scss'
})
export class EditHero {
  @Input({ required: true }) hero!: ISuperHero;
  ishero:boolean = true;
  constructor(private service: HeroSuper) {}

  save() {
    if (this.hero.superId === 0) {
      this.ishero = true
      this.service.AddHero(this.hero).subscribe();
    } else {
      this.ishero = false;
      this.service.updateHero(this.hero, this.hero).subscribe();
    }
  }
}
