import { Router } from '@angular/router';
import { StarService } from './_services/star.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(
        private starService: StarService,
        private router: Router
    ) {}

    ngOnInit() {

        if( this.isLogged() ) {

            this.router.navigate(['/list']);
        }
    }

    home() {

        this.starService.destroyData();

        this.router.navigate(['/']);
    }

    isLogged() {

        return this.starService.getData() == null ? false : true;
    }
}
