package com.gameleap.capacitor_chromecast;

import android.util.Log;
import androidx.mediarouter.media.MediaRouter;

import com.gameleap.capacitor_chromecast.lib.Chromecast;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import java.util.List;

@NativePlugin()
public class ChromecastPlugin extends Plugin {

    @PluginMethod()
    public void initialize(PluginCall call) {
        Chromecast chromecast = new Chromecast();
//        chromecast.initialize();
        chromecast.initialize("123","tab_and_origin_scoped","create_session", call);
        Log.d("tag", "Plugin initialized called.");
    }

    @PluginMethod()
    public void requestSession(PluginCall call) {
        Log.d("tag", "I got called! request session");
        JSArray retArr = new JSArray();
        JSObject ret = new JSObject();


        MediaRouter mediaRouter = MediaRouter.getInstance(getBridge().getActivity().getApplicationContext());

        final List<MediaRouter.RouteInfo> routeList = mediaRouter.getRoutes();

//        for (int i = 0; i < routeList.size(); i++) {

//            retArr.put(i, routeList.get(i));
//        }

        ret.put("routeList", routeList);
//        mediaRouteSelector.asBundle().getArray
//        LaunchOptions launchOptions = castOptions.getLaunchOptions();
//        routeBundle.
//        ret.put();

        call.success(ret);
    }
}
