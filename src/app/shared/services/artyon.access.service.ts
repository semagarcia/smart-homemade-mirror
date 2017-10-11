import {
    Injectable
} from '@angular/core';

import Artyom from './../core/artyom.service';

@Injectable()
export class ArtyomAccessService {
    private _artyom: Artyom;

    constructor() {
        // singleton
        if (this._artyom) {
            return;
        }
        this._artyom = new Artyom();
        this.init();
    }

    init() {
        this._artyom.initialize({
            continuous: true,
            lang: "es-ES",
            executionKeyword: "Max",
            listen: true,
            debug: true
        });
        this.tellMe();
    }


    addCommands(_commans: Array<string>, _callback: Function) {
        this._artyom.addCommands([
            {
                indexes: _commans,
                action: _callback
            }
        ]);
    }


    say(message: string) {
        this._artyom.say(message);
    }

    tellMe() {
        this._artyom.addCommands([
            {
                indexes: ["dime qué hora es", "qué hora es"],
                action: (i) => {
                    let currentH = new Date().getHours();
                    let moment = "";
                    if ((currentH >= 21 && currentH <= 23) || (currentH == 0)) {
                        moment = " de la noche "
                    } else if ((currentH >= 13 && currentH <= 20)) {
                        moment = " de la tarde "
                    } else if ((currentH >= 5 && currentH <= 12)) {
                        moment = " de la mañana "
                    } else if ((currentH >= 1 && currentH <= 11)) {
                        moment = " de la madrugada "
                    }
                    this.say("Son las " + currentH + "  y " + new Date().getMinutes() + moment);
                }
            }
        ]);
    }

}