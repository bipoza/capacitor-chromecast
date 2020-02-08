import { WebPlugin, registerWebPlugin } from '@capacitor/core';
import { ChromecastPluginPlugin } from './definitions';

declare var window: any;

export class ChromecastPluginWeb extends WebPlugin implements ChromecastPluginPlugin {
  private cast: any;
  private session: any;

  constructor() {
    super({
      name: 'ChromecastPlugin',
      platforms: ['web']
    });
  }

  private onInitSuccess() {
    console.log('GCast initialization success');
  }

  private onError(err: any) {
    console.error('GCast initialization failed', err);
  }

  async initialize(appId?: string) {
    const script = window['document'].createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1');
    window['document'].body.appendChild(script);

    window.__onGCastApiAvailable = (isAvailable: boolean) => {
      console.log('cast is available:', isAvailable);

      if (isAvailable) {
        this.cast = window['chrome'].cast;
        const sessionRequest = new this.cast.SessionRequest(appId || this.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);

        const apiConfig = new this.cast.ApiConfig(
          sessionRequest,
          () => {},
          (status: any) => {
            if (status === this.cast.ReceiverAvailability.AVAILABLE) {
            }
          }
        );
        this.cast.initialize(apiConfig, this.onInitSuccess, this.onError);
      }
    };
  }

  async requestSession(): Promise<void> {
    return this.cast.requestSession((session: any) => {
      this.session = session;
    });
  }

  async launchMedia(media: string) {
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
  }
}

const ChromecastPlugin = new ChromecastPluginWeb();

export { ChromecastPlugin };

registerWebPlugin(ChromecastPlugin);
