import { Component } from '@angular/core';

export interface Karta {
  icon: string;
  otoceno: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pexeso';

  contentVisible: boolean;
  buttonVisibility: boolean;

  karticky: Karta[] = [
    {icon: '😳', otoceno: false },
    {icon: '😳', otoceno: false },
    {icon: 'dzea', otoceno: false },
    {icon: 'dzea', otoceno: false },
    {icon: '😎', otoceno: false },
    {icon: '😎', otoceno: false },
    {icon: 'joe', otoceno: false },
    {icon: 'joe', otoceno: false },
    {icon: 'mama', otoceno: false },
    {icon: 'mama', otoceno: false },
    {icon: 'nuts', otoceno: false },
    {icon: 'nuts', otoceno: false },
    {icon: '🙄', otoceno: false },
    {icon: '🙄', otoceno: false },
    {icon: 'máca', otoceno: false },
    {icon: 'máca', otoceno: false },
    {icon: 'deez', otoceno: false },
    {icon: 'deez', otoceno: false },
    {icon: '🍭', otoceno: false },
    {icon: '🍭', otoceno: false },
    {icon: 'emental', otoceno: false },
    {icon: 'emental', otoceno: false },
    {icon: 'bruh', otoceno: false },
    {icon: 'bruh', otoceno: false },
    {icon: 'vlas', otoceno: false },
    {icon: 'vlas', otoceno: false },
  ];

  savedCard: Karta | null = null;
  number: number;

  clickedButton() {
    this.contentVisible = true;
    this.buttonVisibility = true;
    this.karticky.length = this.number;

    var currentIndex = this.karticky.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.karticky[currentIndex];
      this.karticky[currentIndex] = this.karticky[randomIndex];
      this.karticky[randomIndex] = temporaryValue;
    }
    console.log(this.karticky);
    return this.karticky;
  }

  otocit(clicknutaKarta: Karta): void {
    if (clicknutaKarta.otoceno === true) {
      return;
    }
    if (this.savedCard === null) {
      clicknutaKarta.otoceno = true;
      this.savedCard = clicknutaKarta;
    } else {
      if (this.savedCard !== clicknutaKarta) {
        clicknutaKarta.otoceno = true;
        if (clicknutaKarta.icon !== this.savedCard.icon) {
          const savedCard = this.savedCard;
          setTimeout(() => {
            clicknutaKarta.otoceno = false;
            savedCard.otoceno = false;
          }, 1000);
        }
        this.savedCard = null;
      }
    }
  }
}
