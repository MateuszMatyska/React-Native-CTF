package com.reactnativectf;

import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class SecretCodeModule extends ReactContextBaseJavaModule {
    public SecretCodeModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "SecretCodeModule";
    }

    @ReactMethod
    public boolean checkSecretCode(String code) {
        if (checkPin(code)) {
            return true
        }

        return false
    }

    private boolean checkPin(String pin) {
        return pin == String(android.util.Base64.decode("NDg2Mw==", android.util.Base64.DEFAULT))
    }
}