/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTRootView.h"
#import "RCTBundleURLProvider.h"

@import Tune;
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"TuneSDK"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  // TUNE SDK SET UP
  // Account Configuration info - must be set
  NSDictionary *tuneConfig = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"Tune"];
  [Tune initializeWithTuneAdvertiserId:[tuneConfig objectForKey:@"advertiserId"] tuneConversionKey:[tuneConfig objectForKey:@"conversionKey"]];
  
  
  [Tune setDebugMode:YES];
  // Check if a deferred deeplink is available and handle opening of the deeplink as appropriate in the success tuneDidReceiveDeeplink: callback.
  // [Tune checkForDeferredDeeplink:self];
  
  return YES;
}

- (void)applicationDidBecomeActive:(UIApplication *)application
{
  // Attribution will not function without the measureSession call included
  [Tune measureSession];
}

// TUNE METHODS
-  (void)tuneDidReceiveDeeplink:(NSString *)deeplink {
  
  NSLog(@"Tune deferred deeplink = %@", deeplink);
  
  if (deeplink) {
    [[UIApplication sharedApplication] openURL:[NSURL URLWithString:deeplink]];
  }
}
//
- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
  NSLog(@"didFailToRegisterForRemoteNotificationsWithError = %@", error);
  [Tune application:application tuneDidFailToRegisterForRemoteNotificationsWithError:error];
}

// iOS 9+
- (void)application:(UIApplication *)application handleActionWithIdentifier:(nullable NSString *)identifier forRemoteNotification:(NSDictionary *)userInfo withResponseInfo:(NSDictionary *)responseInfo completionHandler:(void(^)())completionHandler
{
  if(application.applicationState == UIApplicationStateInactive) {
    
    NSLog(@"Inactive");
    completionHandler(UIBackgroundFetchResultNewData);
    
  } else if (application.applicationState == UIApplicationStateBackground) {
    
    NSLog(@"Background");
    completionHandler(UIBackgroundFetchResultNewData);
    
  } else {
    
    NSLog(@"Active");
    completionHandler(UIBackgroundFetchResultNewData);
    
  }
  
  NSLog(@"handleActionWithIdentifier = %@", identifier);
  [Tune application:application tuneHandleActionWithIdentifier:identifier forRemoteNotification:userInfo completionHandler:completionHandler];
}

@end
