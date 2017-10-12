import {
    Directive,
    ElementRef,
    Input,
    OnInit,
    
} from '@angular/core';

import { ArtyomAccessService } from './../../services/artyon/artyon.access.service';

@Directive({ selector: '[artyomShowHide]' })

export class ArtyomShowHideDirective implements OnInit {

    @Input('artyomShowHide') command: [string];
    private _show = ["muéstrame", "me muestras", "quiero ver", "enséñame", "me enseñas", "puedes mostrarme", "puedes enseñarme"];
    private _showing = ["mostrando", "te muestro", "ahí tienes", "enseñando", "te enseño", "puedo mostrarte", "puedo enseñarte"];
    private _hidde = ["ocultame", "quiero dejar de ver", "ya he visto", "puedes ocultar"];
    private _hiding = ["ocultando", "dejando de ver", "ya no verás", "claro ahora oculto"];
    private _showLen: number;
    private _finalCommand: [string];
    constructor(private el: ElementRef,
        private _artyom: ArtyomAccessService
    ) {

    }
    ngOnInit() {
        this.addArtyomListener();
    }

    addArtyomListener() {
        this._finalCommand = <[string]>[];
        this._show.forEach(
            (show) => {
                this.command.forEach(
                    (command) => {
                        this._finalCommand.push(`${show} ${command}`);
                    }
                );
            }
        );
        this._showLen = this._finalCommand.length;

        this._hidde.forEach(
            (hidde) => {
                this.command.forEach(
                    (command) => {
                        this._finalCommand.push(`${hidde} ${command}`);
                    }
                );
            }
        );
        this._artyom.addCommands(this._finalCommand, this.showHide.bind(this));
    }

    showHide(i) {
        let response: string;
        if (i >= 0 && i < this._showLen) {
            this.el.nativeElement.removeAttribute('hidden');
            this._show.forEach(
                (item) => {
                    if (this.findResponse(item, i, this._show, this._showing)) {
                        response = this.findResponse(item, i, this._show, this._showing);
                        return;
                    }
                }
            );
        } else {
            this.el.nativeElement.setAttribute('hidden', true); this._hidde.forEach(
                (item) => {
                    if (this.findResponse(item, i, this._hidde, this._hiding)) {
                        response = this.findResponse(item, i, this._hidde, this._hiding);
                        return;
                    }
                }
            );
        }




        this._artyom.say(response);
    }

    findResponse(item, i, verb, ing) {
        const element = this._finalCommand[i];
        console.debug(`Final Command ${element}`);
        if (element.indexOf(item) > -1) {
            return element.replace(item, ing[verb.indexOf(item)]);

        }
    }
}


