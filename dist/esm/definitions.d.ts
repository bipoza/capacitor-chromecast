declare module '@capacitor/core' {
    interface PluginRegistry {
        ChromecastPlugin: ChromecastPluginPlugin;
    }
}
export interface ChromecastPluginPlugin {
    requestSession(): Promise<void>;
}
