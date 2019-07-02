import { Injectable } from '@angular/core';

declare var $ : any;
declare var window : any;

@Injectable()
export class LoadingService {

    isLoading = false;

    loading(loading: boolean) {

        this.isLoading = loading;

        if( this.isLoading ) {

            return this.init();
        }

        return this.finish();
    }

    init() {

        $('.container-loading-on').show();
        $('.container-loading-off').hide();
    }

    finish() {

        $('.container-loading-on').hide();
        $('.container-loading-off').show();
    }
}