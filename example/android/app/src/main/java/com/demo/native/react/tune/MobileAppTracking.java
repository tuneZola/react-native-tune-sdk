package com.demo.react.tune;

/**
 * Created by zola on 11/07/16.
 */

import com.tune.Tune;
import com.tune.ma.application.TuneApplication;

public class MobileAppTracking extends TuneApplication {

    private static Tune tuneInstance;
    // Google Sender Id if you integrated IAM for push notifications
    private static final String tuneSenderId = "729535159148";
    //
    private static final String tuneAdvertiserId = "173018";
    private static final String tuneConversionKey = "156b8c08da54005909bcb292bc457013";


    @Override
    public void onCreate() {
        super.onCreate();

        tuneInstance = Tune.init(this, "173018", "156b8c08da54005909bcb292bc457013", true);
        tuneInstance = Tune.init( this, tuneAdvertiserId, tuneConversionKey);
        // Add Google Sender Id
        tuneInstance.setPushNotificationSenderId(tuneSenderId);
        // Register Power Hook values you want
        // "id", "name", "default value"
        // tuneInstance.registerPowerHook("feedback_url", "Feedback URL", "https://docs.google.com/forms/d/16k-888iysrp7K6D_KoQ_4Kx36cYwzUb9TZrt0GFkuGg/viewform?embedded=true");
    }
}
