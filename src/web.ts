import { WebPlugin } from '@capacitor/core';
import { ChromecastPluginPlugin } from './definitions';

export class ChromecastPluginWeb extends WebPlugin implements ChromecastPluginPlugin {
  constructor() {
    super({
      name: 'ChromecastPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const ChromecastPlugin = new ChromecastPluginWeb();

export { ChromecastPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ChromecastPlugin);
