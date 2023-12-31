import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  corridorData: any[] = [];

  constructor(private imageService: ImageService) { }


  ngOnInit(): void {

    // modifying subscription deprecated structure
    this.imageService.getImages().subscribe({
      next: (data) => {
        this.corridorData = data;

        this.corridorData = data.filter((item: any) => item.images !== undefined).sort((a: any, b: any) => {
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        });
        this.getImageUrl(this.corridorData);
      },
      error: () => {
        alert('There was an error in retrieving data from the server');
      }
    });
  }

  getImageUrl(item: any) {

    return item.images?.find((image: any) => image.type === 'thumbnail').url;
  }

}
