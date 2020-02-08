import { WebPlugin } from '@capacitor/core';
import { ChromecastPluginPlugin } from './definitions';
export declare class ChromecastPluginWeb extends WebPlugin implements ChromecastPluginPlugin {
    private cast;
    private session;
    constructor();
    private onInitSuccess;
    private onError;
    initialize(appId?: string): Promise<void>;
    requestSession(): Promise<void>;
    launchMedia(media: string): Promise<boolean>;
}
declare const ChromecastPlugin: ChromecastPluginWeb;
export { ChromecastPlugin };
