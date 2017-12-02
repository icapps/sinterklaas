//
//  AppDelegate+Setup.m
//  Sinterklaas
//
//  Created by Dylan Gyesbreghs on 02/12/2017.
//  Copyright © 2017 iCapps. All rights reserved.
//

#import "AppDelegate+Setup.h"

#define kModuleName @"Sinterklaas"

@implementation AppDelegate (Setup)

- (void)setupWithOptions:(NSDictionary *)options
{
  // Setup RootView
  [self setupRootViewWithOptions:options];
  
  // Setup RootViewController
  UIViewController *rootViewController = [[UIViewController alloc] init];
  rootViewController.view = self.rootView;
  
  // Setup Window
  self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
}

- (void)setupRootViewWithOptions:(NSDictionary *)options
{
  NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
  self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                              moduleName:kModuleName
                                       initialProperties:nil
                                           launchOptions:options];
}

@end
