package com.reactnativectf;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import com.reactnativectf.SecretCodeModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SecretCodePackage implements ReactPackage {

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<NativeModule>();

        modules.add(new SecretCodeModule(reactContext));

        return modules;
    }
}