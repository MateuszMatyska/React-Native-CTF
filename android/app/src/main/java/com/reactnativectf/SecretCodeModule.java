package com.reactnativectf;

import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
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
    public void checkSecretCode(String pin, Callback success, Callback fail) {
        byte[] bytes = android.util.Base64.decode("NDg2Mw==", android.util.Base64.DEFAULT);
        String code = new String(bytes, android.util.Base64.DEFAULT);
        if (new String(pin).equals(code)) {
            success.invoke();
        }
        else {
            fail.invoke();
        }
        
    }
}