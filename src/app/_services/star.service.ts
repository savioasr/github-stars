import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StarService {

    private readonly URI = `/api`;

    constructor(private http: HttpClient) { }

    get(user: string) {

        let url = `${this.URI}${user}?tab=stars`;

        return this.http.get(url, {responseType: 'text'} );
    }

    save(data: any) {

        localStorage.setItem('githubstars-data', JSON.stringify(this.parse(data)));
    }

    parse(data: any) {

        let repositories = this.parseRepository(data);

        repositories = this.parseDescription(data, repositories);

        repositories = this.parseLang(data, repositories);

        return repositories;
    }

    parseRepository(data: any) {

        let repositories = [];

        let r = data.match(/<div class\=\"d-inline-block mb-1\"([\s\S]*?)<\/div>/g);
        
        data = "";

        for( let i in r ) {
            data += r[i];
        }

        r = data.match(/<\/span>([\s\S]*?)<\/a>/g);

        for( let i in r ) {
            repositories[i] = {
                id: i,
                tags: '',
                name: r[i].replace('</span>','').replace('</a>','').trim()
            }
        }

        return repositories;
    }

    parseDescription(data: any, repositories: any) {

        let r = data.match(/itemprop=\"description\">([\s\S]*?)<\/p>/g);
        
        for( let i in r ) {

            repositories[i].description = r[i].replace('itemprop="description">','').replace('</p>','').trim()
        }

        return repositories;
    }

    parseLang(data: any, repositories: any) {

        let r = data.match(/itemprop=\"programmingLanguage\">([\s\S]*?)<\/span>/g);
        
        for( let i in r ) {

            repositories[i].lang = r[i].replace('itemprop="programmingLanguage">','').replace('</span>','').trim()
        }

        return repositories;
    }

    getData() {

        return JSON.parse(localStorage.getItem('githubstars-data'));
    }

    saveData(data: any) {

        localStorage.setItem('githubstars-data', JSON.stringify(data));
    }
    
    destroyData() {

        localStorage.removeItem('githubstars-data');
    }
}