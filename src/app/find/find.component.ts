import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingService } from '../_services/loading.service';
import { StarService } from '../_services/star.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

    form: FormGroup;
    submitted: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private loadingService: LoadingService,
        private starService: StarService
    ) { }

    ngOnInit() {

        this.createForm();
    }

    createForm() {

        this.form = this.formBuilder.group({
            user: ['', Validators.required]
        });
    }

    get f() { return this.form.controls; }

    onSubmit() {

        this.submitted = true;

        if (this.form.invalid) {

            return;
        }

        this.loadingService.loading(true);

        this.starService.get(this.form.value.user).subscribe(
            (data) => {

                this.starService.save(data);

                this.router.navigate(["/list"]);

                this.loadingService.loading(false);
            },
            (e) => {

                alert('Não foi possível encontrar os repositórios');

                this.loadingService.loading(false);
            }
        );
    }
}