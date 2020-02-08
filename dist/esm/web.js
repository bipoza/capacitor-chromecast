var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin, registerWebPlugin } from '@capacitor/core';
export class ChromecastPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'ChromecastPlugin',
            platforms: ['web']
        });
    }
    onInitSuccess() {
        console.log('GCast initialization success');
    }
    onError(err) {
        console.error('GCast initialization failed', err);
    }
    initialize(appId) {
        return __awaiter(this, void 0, void 0, function* () {
            const script = window['document'].createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1');
            window['document'].body.appendChild(script);
            window.__onGCastApiAvailable = (isAvailable) => {
                console.log('cast is available:', isAvailable);
                if (isAvailable) {
                    this.cast = window['chrome'].cast;
                    const sessionRequest = new this.cast.SessionRequest(appId || this.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
                    const apiConfig = new this.cast.ApiConfig(sessionRequest, () => { }, (status) => {
                        if (status === this.cast.ReceiverAvailability.AVAILABLE) {
                        }
                    });
                    this.cast.initialize(apiConfig, this.onInitSuccess, this.onError);
                }
            };
        });
    }
    requestSession() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.cast.requestSession((session) => {
                this.session = session;
            });
        });
    }
    launchMedia(media) {
        return __awaiter(this, void 0, void 0, function* () {
            let mediaInfo = new this.cast.media.MediaInfo(media);
            let request = new this.cast.media.LoadRequest(mediaInfo);
            console.log('launch media with session', this.session);
            if (!this.session) {
                window.open(media);
                return false;
            }
            // this.session.loadMedia(request, this.onMediaDiscovered.bind(this, 'loadMedia'), this.onMediaError);
            this.session.loadMedia(request);
            return true;
        });
    }
}
const ChromecastPlugin = new ChromecastPluginWeb();
export { ChromecastPlugin };
registerWebPlugin(ChromecastPlugin);
//# sourceMappingURL=web.js.map