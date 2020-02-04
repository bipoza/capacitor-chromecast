declare module "@capacitor/core" {
  interface PluginRegistry {
    ChromecastPlugin: ChromecastPluginPlugin;
  }
}

export interface ChromecastPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
