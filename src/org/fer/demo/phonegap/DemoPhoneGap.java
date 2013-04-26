package org.fer.demo.phonegap;

import android.app.Activity;
import android.os.Bundle;
import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;

public class DemoPhoneGap extends DroidGap {
    /**
     * Called when the activity is first created.
     */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
        super.loadUrl(Config.getStartUrl());
        //super.loadUrl("file:///android_asset/www/index.html")
    }
}
