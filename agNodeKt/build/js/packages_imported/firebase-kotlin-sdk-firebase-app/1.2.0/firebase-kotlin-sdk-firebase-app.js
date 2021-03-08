(function (_, Kotlin, $module$firebase_app) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var firebase = $module$firebase_app.default;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var toString = Kotlin.toString;
  var Exception = Kotlin.kotlin.Exception;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  FirebaseException.prototype = Object.create(Exception.prototype);
  FirebaseException.prototype.constructor = FirebaseException;
  FirebaseNetworkException.prototype = Object.create(FirebaseException.prototype);
  FirebaseNetworkException.prototype.constructor = FirebaseNetworkException;
  FirebaseTooManyRequestsException.prototype = Object.create(FirebaseException.prototype);
  FirebaseTooManyRequestsException.prototype.constructor = FirebaseTooManyRequestsException;
  FirebaseApiNotAvailableException.prototype = Object.create(FirebaseException.prototype);
  FirebaseApiNotAvailableException.prototype.constructor = FirebaseApiNotAvailableException;
  function Firebase() {
    Firebase_instance = this;
  }
  Firebase.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Firebase',
    interfaces: []
  };
  var Firebase_instance = null;
  function Firebase_getInstance() {
    if (Firebase_instance === null) {
      new Firebase();
    }return Firebase_instance;
  }
  function get_options($receiver) {
    return get_app(Firebase_getInstance()).options;
  }
  function FirebaseOptions(applicationId, apiKey, databaseUrl, gaTrackingId, storageBucket, projectId, gcmSenderId) {
    if (databaseUrl === void 0)
      databaseUrl = null;
    if (gaTrackingId === void 0)
      gaTrackingId = null;
    if (storageBucket === void 0)
      storageBucket = null;
    if (projectId === void 0)
      projectId = null;
    if (gcmSenderId === void 0)
      gcmSenderId = null;
    this.applicationId = applicationId;
    this.apiKey = apiKey;
    this.databaseUrl = databaseUrl;
    this.gaTrackingId = gaTrackingId;
    this.storageBucket = storageBucket;
    this.projectId = projectId;
    this.gcmSenderId = gcmSenderId;
  }
  FirebaseOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseOptions',
    interfaces: []
  };
  FirebaseOptions.prototype.component1 = function () {
    return this.applicationId;
  };
  FirebaseOptions.prototype.component2 = function () {
    return this.apiKey;
  };
  FirebaseOptions.prototype.component3 = function () {
    return this.databaseUrl;
  };
  FirebaseOptions.prototype.component4 = function () {
    return this.gaTrackingId;
  };
  FirebaseOptions.prototype.component5 = function () {
    return this.storageBucket;
  };
  FirebaseOptions.prototype.component6 = function () {
    return this.projectId;
  };
  FirebaseOptions.prototype.component7 = function () {
    return this.gcmSenderId;
  };
  FirebaseOptions.prototype.copy_tnk71f$ = function (applicationId, apiKey, databaseUrl, gaTrackingId, storageBucket, projectId, gcmSenderId) {
    return new FirebaseOptions(applicationId === void 0 ? this.applicationId : applicationId, apiKey === void 0 ? this.apiKey : apiKey, databaseUrl === void 0 ? this.databaseUrl : databaseUrl, gaTrackingId === void 0 ? this.gaTrackingId : gaTrackingId, storageBucket === void 0 ? this.storageBucket : storageBucket, projectId === void 0 ? this.projectId : projectId, gcmSenderId === void 0 ? this.gcmSenderId : gcmSenderId);
  };
  FirebaseOptions.prototype.toString = function () {
    return 'FirebaseOptions(applicationId=' + Kotlin.toString(this.applicationId) + (', apiKey=' + Kotlin.toString(this.apiKey)) + (', databaseUrl=' + Kotlin.toString(this.databaseUrl)) + (', gaTrackingId=' + Kotlin.toString(this.gaTrackingId)) + (', storageBucket=' + Kotlin.toString(this.storageBucket)) + (', projectId=' + Kotlin.toString(this.projectId)) + (', gcmSenderId=' + Kotlin.toString(this.gcmSenderId)) + ')';
  };
  FirebaseOptions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.applicationId) | 0;
    result = result * 31 + Kotlin.hashCode(this.apiKey) | 0;
    result = result * 31 + Kotlin.hashCode(this.databaseUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.gaTrackingId) | 0;
    result = result * 31 + Kotlin.hashCode(this.storageBucket) | 0;
    result = result * 31 + Kotlin.hashCode(this.projectId) | 0;
    result = result * 31 + Kotlin.hashCode(this.gcmSenderId) | 0;
    return result;
  };
  FirebaseOptions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.applicationId, other.applicationId) && Kotlin.equals(this.apiKey, other.apiKey) && Kotlin.equals(this.databaseUrl, other.databaseUrl) && Kotlin.equals(this.gaTrackingId, other.gaTrackingId) && Kotlin.equals(this.storageBucket, other.storageBucket) && Kotlin.equals(this.projectId, other.projectId) && Kotlin.equals(this.gcmSenderId, other.gcmSenderId)))));
  };
  function get_app($receiver) {
    return new FirebaseApp(firebase.app());
  }
  function app($receiver, name) {
    return new FirebaseApp(firebase.app(name));
  }
  function initialize($receiver, context) {
    if (context === void 0)
      context = null;
    throw UnsupportedOperationException_init('Cannot initialize firebase without options in JS');
  }
  function initialize_0($receiver, context, options, name) {
    if (context === void 0)
      context = null;
    return new FirebaseApp(firebase.initializeApp(toJson(options), name));
  }
  function initialize_1($receiver, context, options) {
    if (context === void 0)
      context = null;
    return new FirebaseApp(firebase.initializeApp(toJson(options)));
  }
  function FirebaseApp(js) {
    this.js = js;
  }
  Object.defineProperty(FirebaseApp.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.js.name;
    }
  });
  Object.defineProperty(FirebaseApp.prototype, 'options', {
    configurable: true,
    get: function () {
      var $receiver = this.js.options;
      return new FirebaseOptions($receiver.applicationId, $receiver.apiKey, $receiver.databaseUrl, $receiver.gaTrackingId, $receiver.storageBucket, $receiver.projectId);
    }
  });
  FirebaseApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseApp',
    interfaces: []
  };
  function apps($receiver, context) {
    if (context === void 0)
      context = null;
    var $receiver_0 = firebase.apps;
    var destination = ArrayList_init($receiver_0.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var item = $receiver_0[tmp$];
      destination.add_11rb$(new FirebaseApp(item));
    }
    return destination;
  }
  function toJson($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    return json([to('apiKey', $receiver.apiKey), to('applicationId', $receiver.applicationId), to('databaseURL', (tmp$ = $receiver.databaseUrl) != null ? tmp$ : undefined), to('storageBucket', (tmp$_0 = $receiver.storageBucket) != null ? tmp$_0 : undefined), to('projectId', (tmp$_1 = $receiver.projectId) != null ? tmp$_1 : undefined), to('gaTrackingId', (tmp$_2 = $receiver.gaTrackingId) != null ? tmp$_2 : undefined), to('messagingSenderId', (tmp$_3 = $receiver.gcmSenderId) != null ? tmp$_3 : undefined)]);
  }
  function FirebaseException(code, cause) {
    Exception.call(this, toString(code) + ': ' + toString(cause.message), cause);
    this.name = 'FirebaseException';
  }
  FirebaseException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseException',
    interfaces: [Exception]
  };
  function FirebaseNetworkException(code, cause) {
    FirebaseException.call(this, code, cause);
    this.name = 'FirebaseNetworkException';
  }
  FirebaseNetworkException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseNetworkException',
    interfaces: [FirebaseException]
  };
  function FirebaseTooManyRequestsException(code, cause) {
    FirebaseException.call(this, code, cause);
    this.name = 'FirebaseTooManyRequestsException';
  }
  FirebaseTooManyRequestsException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseTooManyRequestsException',
    interfaces: [FirebaseException]
  };
  function FirebaseApiNotAvailableException(code, cause) {
    FirebaseException.call(this, code, cause);
    this.name = 'FirebaseApiNotAvailableException';
  }
  FirebaseApiNotAvailableException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseApiNotAvailableException',
    interfaces: [FirebaseException]
  };
  var package$dev = _.dev || (_.dev = {});
  var package$gitlive = package$dev.gitlive || (package$dev.gitlive = {});
  var package$firebase = package$gitlive.firebase || (package$gitlive.firebase = {});
  Object.defineProperty(package$firebase, 'Firebase', {
    get: Firebase_getInstance
  });
  package$firebase.get_options_jr6r1m$ = get_options;
  package$firebase.FirebaseOptions = FirebaseOptions;
  package$firebase.get_app_jr6r1m$ = get_app;
  package$firebase.app_obpn6c$ = app;
  package$firebase.initialize_vsrq52$ = initialize;
  package$firebase.initialize_s3rpk1$ = initialize_0;
  package$firebase.initialize_kunbu9$ = initialize_1;
  package$firebase.FirebaseApp = FirebaseApp;
  package$firebase.apps_vsrq52$ = apps;
  package$firebase.FirebaseException = FirebaseException;
  package$firebase.FirebaseNetworkException = FirebaseNetworkException;
  package$firebase.FirebaseTooManyRequestsException = FirebaseTooManyRequestsException;
  package$firebase.FirebaseApiNotAvailableException = FirebaseApiNotAvailableException;
  Kotlin.defineModule('firebase-kotlin-sdk-firebase-app', _);
  return _;
}(module.exports, require('kotlin'), require('firebase/app')));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-app.js.map
