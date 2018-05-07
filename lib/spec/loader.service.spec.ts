import { NgModule, Component } from '@angular/core';
import { inject, TestBed, ComponentFixtureAutoDetect, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoaderService } from '../core/loader.service';
import { AbmModule } from '../index';

describe('Service: LoaderService', () => {
    let fixture: ComponentFixture<EmptyTestComponent>;
    let el: HTMLElement;
    let htmlEl: HTMLElement;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [EmptyTestComponent],
            imports: [AbmModule.forRoot({ apiKey: '' })],
            providers: [LoaderService, { provide: ComponentFixtureAutoDetect, useValue: true }]
        });

        fixture = TestBed.createComponent(EmptyTestComponent);
        el = fixture.nativeElement;
        fixture.detectChanges();
        htmlEl = findParent(el, 'html');
    });

    it('should create the default script URL', inject([LoaderService], (loader: LoaderService) => {
        loader.load();
        let script: HTMLScriptElement = null;
        const ls = htmlEl.querySelectorAll('script');
        for (let i = 0; i < ls.length; i++) {
            const node = ls[i];
            // tslint:disable-next-line:no-bitwise
            if (~node.src.indexOf('api.map.baidu.com/api'))
            script = node;
        }

        expect(script).not.toBeNull();
        expect(script.type).toEqual('text/javascript');
        expect(script.async).toEqual(true);
        expect(script.defer).toEqual(true);
        expect(script.src).toBeDefined();
    }));

});

function findParent(el: any, selector: string): any {
    let retEl = null;
    while (el) {
        if (el.matches(selector)) {
            retEl = el;
            break;
        }
        el = el.parentElement;
    }
    return retEl;
}

@Component({ template: '' })
class EmptyTestComponent { }
