import { WebPlugin } from '@capacitor/core';
import { ChromecastPluginPlugin } from './definitions';
export declare class ChromecastPluginWeb extends WebPlugin implements ChromecastPluginPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    testMethod(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const ChromecastPlugin: ChromecastPluginWeb;
export { ChromecastPlugin };
