//
//Welcome to app.js
//This is main application config of project. You can change a setting of :
//  - Global Variable
//  - Theme setting
//  - Icon setting
//  - Register View
//  - Spinner setting
//  - Custom style
//
//Global variable use for setting color, start page, message, oAuth key.
var db = null; //Use for SQLite database.
window.globalVariable = {
    //custom color style variable
    color: {
        appPrimaryColor: "",
        dropboxColor: "#017EE6",
        facebookColor: "#3C5C99",
        foursquareColor: "#F94777",
        googlePlusColor: "#D73D32",
        instagramColor: "#517FA4",
        wordpressColor: "#0087BE"
    },// End custom color style variable
    startPage: {
        url: "/app/welcome",//Url of start page.
        state: "app.welcome"//State name of start page.
    },
    message: {
        errorMessage: "Technical error please try again later." //Default error message.
    },
    oAuth: {
      dropbox: "your_api_key",//Use for Dropbox API clientID.
      facebook: "your_api_key",//Use for Facebook API appID.
      foursquare: "your_api_key", //Use for Foursquare API clientID.
      instagram: "your_api_key",//Use for Instagram API clientID.
      googlePlus: "your_api_key",//Use for Google API clientID.
    },
    adMob: "your_api_key" //Use for AdMob API clientID.
};// End Global variable


angular.module('starter', ['ionic','ngIOS9UIWebViewPatch', 'starter.controllers', 'starter.services', 'ngMaterial', 'ngMessages', 'ngCordova'])
    .run(function ($ionicPlatform, $cordovaSQLite, $rootScope, $ionicHistory, $state, $mdDialog, $mdBottomSheet) {



        function initialSQLite() {
            db = window.cordova ? $cordovaSQLite.openDB("contract.db") : window.openDatabase("contract.db", "1.0", "ConsumerVoiceDB", -1);
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS contracts " +
                "( id           integer primary key   , " +
                "  firstName    text                  , " +
                "  lastName     text                  , " +
                "  telephone    text                  , " +
                "  email        text                  , " +
                "  note         text                  , " +
                "  createDate   dateTime              , " +
                "  age          integer               , " +
                "  isEnable     Boolean)                ");
        };
        // End creating SQLite database table.

        // Create custom defaultStyle.
        function getDefaultStyle() {
            return "" +
                ".material-background-nav-bar { " +
                "   background-color        : " + appPrimaryColor + " !important; " +
                "   border-style            : none;" +
                "}" +
                ".md-primary-color {" +
                "   color                     : " + appPrimaryColor + " !important;" +
                "}";
        }// End create custom defaultStyle

        // Create custom style for product view.
        function getProductStyle() {
            return "" +
                ".material-background-nav-bar { " +
                "   background-color        : " + appPrimaryColor + " !important;" +
                "   border-style            : none;" +
                "   background-image        : url('img/background_cover_pixels.png') !important;" +
                "   background-size         : initial !important;" +
                "}" +
                ".md-primary-color {" +
                "   color                     : " + appPrimaryColor + " !important;" +
                "}";
        }// End create custom style for product view.

        // Create custom style for contract us view.
        function getContractUsStyle() {
            return "" +
                ".material-background-nav-bar { " +
                "   background-color        : transparent !important;" +
                "   border-style            : none;" +
                "   background-image        : none !important;" +
                "   background-position-y   : 4px !important;" +
                "   background-size         : initial !important;" +
                "}" +
                ".md-primary-color {" +
                "   color                     : " + appPrimaryColor + " !important;" +
                "}";
        } // End create custom style for contract us view.

        // Create custom style for Social Network view.
        function getSocialNetworkStyle(socialColor) {
            return "" +
                ".material-background-nav-bar {" +
                "   background              : " + socialColor + " !important;" +
                "   border-style            : none;" +
                "} " +
                "md-ink-bar {" +
                "   color                   : " + socialColor + " !important;" +
                "   background              : " + socialColor + " !important;" +
                "}" +
                "md-tab-item {" +
                "   color                   : " + socialColor + " !important;" +
                "}" +
                " md-progress-circular.md-warn .md-inner .md-left .md-half-circle {" +
                "   border-left-color       : " + socialColor + " !important;" +
                "}" +
                " md-progress-circular.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-warn .md-inner .md-right .md-half-circle {" +
                "    border-top-color       : " + socialColor + " !important;" +
                "}" +
                " md-progress-circular.md-warn .md-inner .md-gap {" +
                "   border-top-color        : " + socialColor + " !important;" +
                "   border-bottom-color     : " + socialColor + " !important;" +
                "}" +
                "md-progress-circular.md-warn .md-inner .md-right .md-half-circle {" +
                "  border-right-color       : " + socialColor + " !important;" +
                " }" +
                ".spinner-android {" +
                "   stroke                  : " + socialColor + " !important;" +
                "}" +
                ".md-primary-color {" +
                "   color                   : " + socialColor + " !important;" +
                "}" +
                "a.md-button.md-primary, .md-button.md-primary {" +
                "   color                   : " + socialColor + " !important;" +
                "}";
        }// End create custom style for Social Network view.


        function initialRootScope() {
            $rootScope.appPrimaryColor = appPrimaryColor;// Add value of appPrimaryColor to rootScope for use it to base color.
            $rootScope.isAndroid = ionic.Platform.isAndroid();// Check platform of running device is android or not.
            $rootScope.isIOS = ionic.Platform.isIOS();// Check platform of running device is ios or not.
        };

        function hideActionControl() {
            //For android if user tap hardware back button, Action and Dialog should be hide.
            $mdBottomSheet.cancel();
            $mdDialog.cancel();
        };

        function createCustomStyle(stateName) {
            var customStyle =
                ".material-background {" +
                "   background-color          : " + appPrimaryColor + " !important;" +
                "   border-style              : none;" +
                "}" +
                ".spinner-android {" +
                "   stroke                    : " + appPrimaryColor + " !important;" +
                "}";

            switch (stateName) {
                case "app.productList" :
                case "app.productDetail":
                case "app.productCheckout":
                case "app.clothShop" :
                case "app.catalog" :
                    customStyle += getProductStyle();
                    break;
                case "app.dropboxLogin" :
                case "app.dropboxProfile":
                case "app.dropboxFeed" :
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.dropboxColor);
                    break;
                case "app.facebookLogin" :
                case "app.facebookProfile":
                case "app.facebookFeed" :
                case "app.facebookFriendList":
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.facebookColor);
                    break;
                case "app.foursquareLogin" :
                case "app.foursquareProfile":
                case "app.foursquareFeed" :
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.foursquareColor);
                    break;
                case "app.googlePlusLogin" :
                case "app.googlePlusProfile":
                case "app.googlePlusFeed" :
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.googlePlusColor);
                    break;
                case "app.instagramLogin" :
                case "app.instagramProfile":
                case "app.instagramFeed" :
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.instagramColor);
                    break;
                case "app.wordpressLogin" :
                case "app.wordpressFeed":
                case "app.wordpressPost" :
                    customStyle += getSocialNetworkStyle(window.globalVariable.color.wordpressColor);
                    break;
                case "app.contractUs":
                    customStyle += getContractUsStyle();
                    break;
                default:
                    customStyle += getDefaultStyle();
                    break;
            }
            return customStyle;
        }
        $rootScope.customStyle = createCustomStyle(window.globalVariable.startPage.state);

        $ionicPlatform.ready(function () {
            ionic.Platform.isFullScreen = true;
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }

            initialSQLite();
            initialRootScope();

            $rootScope.$on('$ionicView.beforeEnter', function () {

                hideActionControl();

                $rootScope.customStyle = createCustomStyle($ionicHistory.currentStateName());
            });
        });

    })

    .config(function ($ionicConfigProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider, $mdColorPalette, $mdIconProvider) {


        $ionicConfigProvider.spinner.icon("android");
        $ionicConfigProvider.views.swipeBackEnabled(false);

        $mdIconProvider
            .icon('facebook', 'img/icons/facebook.svg')
            .icon('twitter', 'img/icons/twitter.svg')
            .icon('mail', 'img/icons/mail.svg')
            .icon('message', 'img/icons/message.svg')
            .icon('share-arrow', 'img/icons/share-arrow.svg')
            .icon('more', 'img/icons/more_vert.svg');


        $mdThemingProvider
            .theme('default')
            .primaryPalette('pink')
            .accentPalette('red');

        appPrimaryColor = $mdColorPalette[$mdThemingProvider._THEMES.default.colors.primary.name]["500"]; //Use for get base color of theme.


        $stateProvider
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu/html/menu.html",
                controller: 'menuCtrl'
            })

            .state('app.fakeLogin', {
                url: "/fakeLogin",
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: "templates/themes/authentication/html/fake-login.html"
                    }
                }
            })
            .state('app.fakeSignUp', {
                url: "/fakeSignUp",
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: "templates/themes/authentication/html/fake-sign-up.html"
                    }
                }
            })

            .state('app.tryApp', {
                url: "/tryApp",
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: "templates/themes/try-app/html/try-app.html"
                    }
                }
            })

            .state('app.welcome', {
                url: "/welcome",
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: "templates/themes/try-app/html/welcome.html"
                    }
                }
            })
          .state('app.adds', {
            url: "/addEV",
            cache: false,
            views: {
              'menuContent': {
                templateUrl: "templates/themes/evaluationForms/advertisementsEvaluation/html/advertisementsEV.html"
              }
            }
          })
          .state('app.consumerService', {
            url: "/consumerService",
            cache: false,
            views: {
              'menuContent': {
                templateUrl: "templates/themes/evaluationForms/consumerServiceEvaluation/html/consumerServiceEV.html"
              }
            }
          })
          .state('app.faltyApply', {
            url: "/faltyApply",
            cache: false,
            views: {
              'menuContent': {
                templateUrl: "templates/themes/evaluationForms/faltyApplying/html/faltyApplyEv.html"
              }
            }
          })
          .state('app.products', {
            url: "/products",
            cache: false,
            views: {
              'menuContent': {
                templateUrl: "templates/themes/evaluationForms/productsEvalutaion/html/productsEv.html"
              }
            }
          })
          .state('app.sellingPoints', {
            url: "/sellingPoints",
            cache: false,
            views: {
              'menuContent': {
                templateUrl: "templates/themes/evaluationForms/sellingPointEvaluation/html/sellingPointsEv.html"
              }
            }
          })
          .state('app.serviceEv', {
            url: "/serviceEv",
            cache: false,
            views: {
              'menuContent': {
                templateUrl: "templates/themes/evaluationForms/serviceEvaluation/html/serviceEv.html"
              }
            }
          })
          .state('app.main', {
            url: "/main",
            cache: false,
            views: {
              'menuContent': {
                templateUrl: "templates/themes/main-page/html/main.html"
              }
            }
          })


        //Use $urlRouterProvider.otherwise(Url);
        $urlRouterProvider.otherwise(window.globalVariable.startPage.url);

    });
