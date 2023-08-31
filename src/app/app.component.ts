import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  images: any[] = [];
  preview: any = '';
  imageIndex: any;
  constructor() {}
  ngOnInit(): void {}

  getImages(event: any) {
    let files = event.target.files;
    let sliderLength = this.images.length + files.length;
    if (sliderLength > 5) {
      let limit = 5 - this.images.length;
      for (let i = 0; i < limit; i++) {
        let file = files[i];
        let render = new FileReader();
        render.readAsDataURL(file);
        render.onload = () => {
          this.images.push(render.result);
        };
      }
    } else {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let render = new FileReader();
        render.readAsDataURL(file);
        render.onload = () => {
          this.images.push(render.result);
        };
      }
    }
  }

  display(index: number) {
    this.imageIndex = index;
    this.preview = this.images[index];
  }

  delete() {
    this.images.splice(this.imageIndex, 1);
    if (this.images.length === this.imageIndex) {
      --this.imageIndex;
      this.preview = this.images[this.imageIndex];
    } else {
      this.preview = this.images[this.imageIndex];
    }
  }

  minusImage() {
    --this.imageIndex;
    this.preview = this.images[this.imageIndex];
  }
  plusImage() {
    ++this.imageIndex;
    this.preview = this.images[this.imageIndex];
  }
}
