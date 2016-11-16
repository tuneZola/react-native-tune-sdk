package com.demo.react.tune;

import android.app.Application;
import android.util.Log;

import com.tune.Tune;
import com.facebook.react.ReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.shell.MainReactPackage;
import com.tune.react.TuneSDKBridge.TuneSDKBridgePackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private static Tune tuneInstance;
  // Google Sender Id if you integrated IAM for push notifications
  private static final String tuneSenderId = "729535159148";
  private static final String tuneAdvertiserId = "173018";
  private static final String tuneConversionKey = "156b8c08da54005909bcb292bc457013";

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new TuneSDKBridgePackage()
      );
    }
  };

  @Override
  public void onCreate() {
    super.onCreate();
    //
    tuneInstance = Tune.init(this, tuneAdvertiserId, tuneConversionKey, true);
    // Add Google Sender Id
    tuneInstance.setPushNotificationSenderId(tuneSenderId);
    // Register Power Hook values you want
    // "id", "name", "default value"
    // tuneInstance.registerPowerHook("feedback_url", "Feedback URL", "https://docs.google.com/forms/d/16k-888iysrp7K6D_KoQ_4Kx36cYwzUb9TZrt0GFkuGg/viewform?embedded=true");
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
