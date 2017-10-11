import {
    Directive,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';

import { ArtyomAccessService } from './../services/artyon.access.service';

@Directive({ selector: '[artyomDirective]' })

export class ArtyomShowHideDirective implements OnInit {

    @Input('artyomDirective') command: [string];
    private _show = ["muéstrame", "me muestras", "quiero ver", "enseñame"];
    private _hidde = ["ocúltame", "quiero dejar de ver", "ya he visto"];
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
        console.log(this._finalCommand, this._finalCommand[i], i);
        if (i > 0 && i < this._showLen) {
            this._artyom.say(this._finalCommand[i]);
            if (this.el.nativeElement.getAttribute('hidden') !== null) {
                this.el.nativeElement.removeAttribute('hidden');
            }
        } else {
            this._artyom.say(this._finalCommand[i]);
            this.el.nativeElement.setAttribute('hidden', true);
        }
    }
}


