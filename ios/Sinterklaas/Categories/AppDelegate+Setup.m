//
//  AppDelegate+Setup.m
//  Sinterklaas
//
//  Created by Dylan Gyesbreghs on 02/12/2017.
//  Copyright © 2017 iCapps. All rights reserved.
//

#define kModuleName @"Sinterklaas"

#import "AppDelegate+Setup.h"

#import <Fabric/Fabric.h>
#import <Crashlytics/Crashlytics.h>

@implementation AppDelegate (Setup)

- (void)setupWithOptions:(NSDictionary *)options
{
    // Setup RootView
    [self setupRootViewWithOptions:options];
    [self setupFabric];

    // Setup RootViewController
    UIViewController *rootViewController = [[UIViewController alloc] init];
    rootViewController.view = self.rootView;

    // Setup Window
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    self.window.rootViewController = rootViewController;
    [self.window makeKeyAndVisible];
}

#pragma mark - Setup RootView

- (void)setupRootViewWithOptions:(NSDictionary *)options
{
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios&dev=false"];
    self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                              moduleName:kModuleName
                                       initialProperties:nil
                                           launchOptions:options];
}

#pragma mark - Setup Fabric

- (void)setupFabric
{
    [Fabric with:@[[Crashlytics class]]];
}

@end
