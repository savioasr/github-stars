import { Router } from '@angular/router';
import { StarService } from './../_services/star.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    repositories: any;

    constructor(
        private starService: StarService,
        private router: Router
    ) { }

    ngOnInit() {

        if( this.starService.getData() == null ) {

            this.router.navigate(['/']);
        }

        this.repositories = this.starService.getData();
    }

    edit(id) {

        let tags = prompt("edit tags for kubernetes");

        for( let i in this.repositories ) {

            if( id == i ) {

                this.repositories[i].tags = '#' + tags.split(' ').join('').split(',').join(' #');
            }
        }

        this.starService.saveData(this.repositories);
    }

    find(event: any) {

        if( event.target.value == '' ) {

            return this.repositories = this.starService.getData();
        }

        this.repositories = this.starService.getData().filter(r => {
            
            return r.tags.includes('#' + event.target.value)
        });
    }
}
