(function (_, Kotlin, $module$firebase_auth, $module$firebase_app, $module$firebase_kotlin_sdk_firebase_common, $module$kotlinx_coroutines_core, $module$firebase_kotlin_sdk_firebase_app) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var firebase = $module$firebase_app.default;
  var safeOffer = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.safeOffer_rmur43$;
  var Unit = Kotlin.kotlin.Unit;
  var awaitClose = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.awaitClose_msfyrq$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var callbackFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.callbackFlow_b9ud7o$;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var throwCCE = Kotlin.throwCCE;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var FirebaseException = $module$firebase_kotlin_sdk_firebase_app.dev.gitlive.firebase.FirebaseException;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Exception = Kotlin.kotlin.Exception;
  var FirebaseNetworkException = $module$firebase_kotlin_sdk_firebase_app.dev.gitlive.firebase.FirebaseNetworkException;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var firebase$auth$EmailAuthProvider$Companion = $module$firebase_app.default.auth.EmailAuthProvider;
  var firebase$auth$FacebookAuthProvider$Companion = $module$firebase_app.default.auth.FacebookAuthProvider;
  var firebase$auth$GithubAuthProvider$Companion = $module$firebase_app.default.auth.GithubAuthProvider;
  var firebase$auth$GoogleAuthProvider$Companion = $module$firebase_app.default.auth.GoogleAuthProvider;
  var firebase$auth$OAuthProvider = $module$firebase_app.default.auth.OAuthProvider;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var firebase_0 = $module$firebase_kotlin_sdk_firebase_app.dev.gitlive.firebase;
  var firebase$auth$PhoneAuthProvider$Companion = $module$firebase_app.default.auth.PhoneAuthProvider;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var firebase$auth$TwitterAuthProvider$Companion = $module$firebase_app.default.auth.TwitterAuthProvider;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  ActionCodeResult$SignInWithEmailLink.prototype = Object.create(ActionCodeResult.prototype);
  ActionCodeResult$SignInWithEmailLink.prototype.constructor = ActionCodeResult$SignInWithEmailLink;
  ActionCodeResult$PasswordReset.prototype = Object.create(ActionCodeResult.prototype);
  ActionCodeResult$PasswordReset.prototype.constructor = ActionCodeResult$PasswordReset;
  ActionCodeResult$VerifyEmail.prototype = Object.create(ActionCodeResult.prototype);
  ActionCodeResult$VerifyEmail.prototype.constructor = ActionCodeResult$VerifyEmail;
  ActionCodeResult$RecoverEmail.prototype = Object.create(ActionCodeResult.prototype);
  ActionCodeResult$RecoverEmail.prototype.constructor = ActionCodeResult$RecoverEmail;
  ActionCodeResult$VerifyBeforeChangeEmail.prototype = Object.create(ActionCodeResult.prototype);
  ActionCodeResult$VerifyBeforeChangeEmail.prototype.constructor = ActionCodeResult$VerifyBeforeChangeEmail;
  ActionCodeResult$RevertSecondFactorAddition.prototype = Object.create(ActionCodeResult.prototype);
  ActionCodeResult$RevertSecondFactorAddition.prototype.constructor = ActionCodeResult$RevertSecondFactorAddition;
  FirebaseAuthException.prototype = Object.create(FirebaseException.prototype);
  FirebaseAuthException.prototype.constructor = FirebaseAuthException;
  FirebaseAuthActionCodeException.prototype = Object.create(FirebaseAuthException.prototype);
  FirebaseAuthActionCodeException.prototype.constructor = FirebaseAuthActionCodeException;
  FirebaseAuthEmailException.prototype = Object.create(FirebaseAuthException.prototype);
  FirebaseAuthEmailException.prototype.constructor = FirebaseAuthEmailException;
  FirebaseAuthInvalidCredentialsException.prototype = Object.create(FirebaseAuthException.prototype);
  FirebaseAuthInvalidCredentialsException.prototype.constructor = FirebaseAuthInvalidCredentialsException;
  FirebaseAuthInvalidUserException.prototype = Object.create(FirebaseAuthException.prototype);
  FirebaseAuthInvalidUserException.prototype.constructor = FirebaseAuthInvalidUserException;
  FirebaseAuthMultiFactorException.prototype = Object.create(FirebaseAuthException.prototype);
  FirebaseAuthMultiFactorException.prototype.constructor = FirebaseAuthMultiFactorException;
  FirebaseAuthRecentLoginRequiredException.prototype = Object.create(FirebaseAuthException.prototype);
  FirebaseAuthRecentLoginRequiredException.prototype.constructor = FirebaseAuthRecentLoginRequiredException;
  FirebaseAuthUserCollisionException.prototype = Object.create(FirebaseAuthException.prototype);
  FirebaseAuthUserCollisionException.prototype.constructor = FirebaseAuthUserCollisionException;
  FirebaseAuthWebException.prototype = Object.create(FirebaseAuthException.prototype);
  FirebaseAuthWebException.prototype.constructor = FirebaseAuthWebException;
  PhoneAuthCredential.prototype = Object.create(AuthCredential.prototype);
  PhoneAuthCredential.prototype.constructor = PhoneAuthCredential;
  OAuthCredential.prototype = Object.create(AuthCredential.prototype);
  OAuthCredential.prototype.constructor = OAuthCredential;
  function ActionCodeResult() {
  }
  function ActionCodeResult$SignInWithEmailLink() {
    ActionCodeResult$SignInWithEmailLink_instance = this;
    ActionCodeResult.call(this);
  }
  ActionCodeResult$SignInWithEmailLink.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SignInWithEmailLink',
    interfaces: [ActionCodeResult]
  };
  var ActionCodeResult$SignInWithEmailLink_instance = null;
  function ActionCodeResult$SignInWithEmailLink_getInstance() {
    if (ActionCodeResult$SignInWithEmailLink_instance === null) {
      new ActionCodeResult$SignInWithEmailLink();
    }return ActionCodeResult$SignInWithEmailLink_instance;
  }
  function ActionCodeResult$PasswordReset(email) {
    ActionCodeResult.call(this);
    this.email = email;
  }
  ActionCodeResult$PasswordReset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PasswordReset',
    interfaces: [ActionCodeResult]
  };
  function ActionCodeResult$VerifyEmail(email) {
    ActionCodeResult.call(this);
    this.email = email;
  }
  ActionCodeResult$VerifyEmail.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerifyEmail',
    interfaces: [ActionCodeResult]
  };
  function ActionCodeResult$RecoverEmail(email, previousEmail) {
    ActionCodeResult.call(this);
    this.email = email;
    this.previousEmail = previousEmail;
  }
  ActionCodeResult$RecoverEmail.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecoverEmail',
    interfaces: [ActionCodeResult]
  };
  function ActionCodeResult$VerifyBeforeChangeEmail(email, previousEmail) {
    ActionCodeResult.call(this);
    this.email = email;
    this.previousEmail = previousEmail;
  }
  ActionCodeResult$VerifyBeforeChangeEmail.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerifyBeforeChangeEmail',
    interfaces: [ActionCodeResult]
  };
  function ActionCodeResult$RevertSecondFactorAddition(email, multiFactorInfo) {
    ActionCodeResult.call(this);
    this.email = email;
    this.multiFactorInfo = multiFactorInfo;
  }
  ActionCodeResult$RevertSecondFactorAddition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RevertSecondFactorAddition',
    interfaces: [ActionCodeResult]
  };
  ActionCodeResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionCodeResult',
    interfaces: []
  };
  function ActionCodeSettings(url, androidPackageName, dynamicLinkDomain, canHandleCodeInApp, iOSBundleId) {
    if (androidPackageName === void 0)
      androidPackageName = null;
    if (dynamicLinkDomain === void 0)
      dynamicLinkDomain = null;
    if (canHandleCodeInApp === void 0)
      canHandleCodeInApp = false;
    if (iOSBundleId === void 0)
      iOSBundleId = null;
    this.url = url;
    this.androidPackageName = androidPackageName;
    this.dynamicLinkDomain = dynamicLinkDomain;
    this.canHandleCodeInApp = canHandleCodeInApp;
    this.iOSBundleId = iOSBundleId;
  }
  ActionCodeSettings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionCodeSettings',
    interfaces: []
  };
  ActionCodeSettings.prototype.component1 = function () {
    return this.url;
  };
  ActionCodeSettings.prototype.component2 = function () {
    return this.androidPackageName;
  };
  ActionCodeSettings.prototype.component3 = function () {
    return this.dynamicLinkDomain;
  };
  ActionCodeSettings.prototype.component4 = function () {
    return this.canHandleCodeInApp;
  };
  ActionCodeSettings.prototype.component5 = function () {
    return this.iOSBundleId;
  };
  ActionCodeSettings.prototype.copy_qxlnkk$ = function (url, androidPackageName, dynamicLinkDomain, canHandleCodeInApp, iOSBundleId) {
    return new ActionCodeSettings(url === void 0 ? this.url : url, androidPackageName === void 0 ? this.androidPackageName : androidPackageName, dynamicLinkDomain === void 0 ? this.dynamicLinkDomain : dynamicLinkDomain, canHandleCodeInApp === void 0 ? this.canHandleCodeInApp : canHandleCodeInApp, iOSBundleId === void 0 ? this.iOSBundleId : iOSBundleId);
  };
  ActionCodeSettings.prototype.toString = function () {
    return 'ActionCodeSettings(url=' + Kotlin.toString(this.url) + (', androidPackageName=' + Kotlin.toString(this.androidPackageName)) + (', dynamicLinkDomain=' + Kotlin.toString(this.dynamicLinkDomain)) + (', canHandleCodeInApp=' + Kotlin.toString(this.canHandleCodeInApp)) + (', iOSBundleId=' + Kotlin.toString(this.iOSBundleId)) + ')';
  };
  ActionCodeSettings.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.androidPackageName) | 0;
    result = result * 31 + Kotlin.hashCode(this.dynamicLinkDomain) | 0;
    result = result * 31 + Kotlin.hashCode(this.canHandleCodeInApp) | 0;
    result = result * 31 + Kotlin.hashCode(this.iOSBundleId) | 0;
    return result;
  };
  ActionCodeSettings.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.url, other.url) && Kotlin.equals(this.androidPackageName, other.androidPackageName) && Kotlin.equals(this.dynamicLinkDomain, other.dynamicLinkDomain) && Kotlin.equals(this.canHandleCodeInApp, other.canHandleCodeInApp) && Kotlin.equals(this.iOSBundleId, other.iOSBundleId)))));
  };
  function AndroidPackageName(packageName, installIfNotAvailable, minimumVersion) {
    this.packageName = packageName;
    this.installIfNotAvailable = installIfNotAvailable;
    this.minimumVersion = minimumVersion;
  }
  AndroidPackageName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AndroidPackageName',
    interfaces: []
  };
  AndroidPackageName.prototype.component1 = function () {
    return this.packageName;
  };
  AndroidPackageName.prototype.component2 = function () {
    return this.installIfNotAvailable;
  };
  AndroidPackageName.prototype.component3 = function () {
    return this.minimumVersion;
  };
  AndroidPackageName.prototype.copy_etpw90$ = function (packageName, installIfNotAvailable, minimumVersion) {
    return new AndroidPackageName(packageName === void 0 ? this.packageName : packageName, installIfNotAvailable === void 0 ? this.installIfNotAvailable : installIfNotAvailable, minimumVersion === void 0 ? this.minimumVersion : minimumVersion);
  };
  AndroidPackageName.prototype.toString = function () {
    return 'AndroidPackageName(packageName=' + Kotlin.toString(this.packageName) + (', installIfNotAvailable=' + Kotlin.toString(this.installIfNotAvailable)) + (', minimumVersion=' + Kotlin.toString(this.minimumVersion)) + ')';
  };
  AndroidPackageName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.packageName) | 0;
    result = result * 31 + Kotlin.hashCode(this.installIfNotAvailable) | 0;
    result = result * 31 + Kotlin.hashCode(this.minimumVersion) | 0;
    return result;
  };
  AndroidPackageName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.packageName, other.packageName) && Kotlin.equals(this.installIfNotAvailable, other.installIfNotAvailable) && Kotlin.equals(this.minimumVersion, other.minimumVersion)))));
  };
  function get_auth($receiver) {
    var rethrow$result;
    try {
      $module$firebase_auth;
      rethrow$result = new FirebaseAuth(firebase.auth());
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  }
  function auth($receiver, app) {
    var rethrow$result;
    try {
      $module$firebase_auth;
      rethrow$result = new FirebaseAuth(firebase.auth(app.js));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  }
  function FirebaseAuth(js) {
    this.js = js;
  }
  Object.defineProperty(FirebaseAuth.prototype, 'currentUser', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        var tmp$;
        rethrow$result = (tmp$ = this.js.currentUser) != null ? new FirebaseUser(tmp$) : null;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  function FirebaseAuth$get_FirebaseAuth$authStateChanged$lambda$lambda(this$) {
    return function (it) {
      safeOffer(this$, it != null ? new FirebaseUser(it) : null);
      return Unit;
    };
  }
  function FirebaseAuth$get_FirebaseAuth$authStateChanged$lambda$lambda_0(closure$unsubscribe) {
    return function () {
      closure$unsubscribe();
      return Unit;
    };
  }
  function Coroutine$FirebaseAuth$get_FirebaseAuth$authStateChanged$lambda(this$FirebaseAuth_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FirebaseAuth = this$FirebaseAuth_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$FirebaseAuth$get_FirebaseAuth$authStateChanged$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FirebaseAuth$get_FirebaseAuth$authStateChanged$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FirebaseAuth$get_FirebaseAuth$authStateChanged$lambda.prototype.constructor = Coroutine$FirebaseAuth$get_FirebaseAuth$authStateChanged$lambda;
  Coroutine$FirebaseAuth$get_FirebaseAuth$authStateChanged$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var unsubscribe = this.local$this$FirebaseAuth.js.onAuthStateChanged(FirebaseAuth$get_FirebaseAuth$authStateChanged$lambda$lambda(this.local$$receiver));
            this.state_0 = 2;
            this.result_0 = awaitClose(this.local$$receiver, FirebaseAuth$get_FirebaseAuth$authStateChanged$lambda$lambda_0(unsubscribe), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function FirebaseAuth$get_FirebaseAuth$authStateChanged$lambda(this$FirebaseAuth_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FirebaseAuth$get_FirebaseAuth$authStateChanged$lambda(this$FirebaseAuth_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Object.defineProperty(FirebaseAuth.prototype, 'authStateChanged', {
    configurable: true,
    get: function () {
      return callbackFlow(FirebaseAuth$get_FirebaseAuth$authStateChanged$lambda(this));
    }
  });
  function FirebaseAuth$get_FirebaseAuth$idTokenChanged$lambda$lambda(this$) {
    return function (it) {
      safeOffer(this$, it != null ? new FirebaseUser(it) : null);
      return Unit;
    };
  }
  function FirebaseAuth$get_FirebaseAuth$idTokenChanged$lambda$lambda_0(closure$unsubscribe) {
    return function () {
      closure$unsubscribe();
      return Unit;
    };
  }
  function Coroutine$FirebaseAuth$get_FirebaseAuth$idTokenChanged$lambda(this$FirebaseAuth_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FirebaseAuth = this$FirebaseAuth_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$FirebaseAuth$get_FirebaseAuth$idTokenChanged$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FirebaseAuth$get_FirebaseAuth$idTokenChanged$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FirebaseAuth$get_FirebaseAuth$idTokenChanged$lambda.prototype.constructor = Coroutine$FirebaseAuth$get_FirebaseAuth$idTokenChanged$lambda;
  Coroutine$FirebaseAuth$get_FirebaseAuth$idTokenChanged$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var unsubscribe = this.local$this$FirebaseAuth.js.onIdTokenChanged(FirebaseAuth$get_FirebaseAuth$idTokenChanged$lambda$lambda(this.local$$receiver));
            this.state_0 = 2;
            this.result_0 = awaitClose(this.local$$receiver, FirebaseAuth$get_FirebaseAuth$idTokenChanged$lambda$lambda_0(unsubscribe), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function FirebaseAuth$get_FirebaseAuth$idTokenChanged$lambda(this$FirebaseAuth_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FirebaseAuth$get_FirebaseAuth$idTokenChanged$lambda(this$FirebaseAuth_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Object.defineProperty(FirebaseAuth.prototype, 'idTokenChanged', {
    configurable: true,
    get: function () {
      return callbackFlow(FirebaseAuth$get_FirebaseAuth$idTokenChanged$lambda(this));
    }
  });
  Object.defineProperty(FirebaseAuth.prototype, 'languageCode', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.js.languageCode) != null ? tmp$ : '';
    },
    set: function (value) {
      this.js.languageCode = value;
    }
  });
  function Coroutine$applyActionCode_61zpoe$($this, code_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$code = code_0;
  }
  Coroutine$applyActionCode_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$applyActionCode_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$applyActionCode_61zpoe$.prototype.constructor = Coroutine$applyActionCode_61zpoe$;
  Coroutine$applyActionCode_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.applyActionCode(this.local$code), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.applyActionCode_61zpoe$ = function (code_0, continuation_0, suspended) {
    var instance = new Coroutine$applyActionCode_61zpoe$(this, code_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$confirmPasswordReset_puj7f4$($this, code_0, newPassword_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$code = code_0;
    this.local$newPassword = newPassword_0;
  }
  Coroutine$confirmPasswordReset_puj7f4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$confirmPasswordReset_puj7f4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$confirmPasswordReset_puj7f4$.prototype.constructor = Coroutine$confirmPasswordReset_puj7f4$;
  Coroutine$confirmPasswordReset_puj7f4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.confirmPasswordReset(this.local$code, this.local$newPassword), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.confirmPasswordReset_puj7f4$ = function (code_0, newPassword_0, continuation_0, suspended) {
    var instance = new Coroutine$confirmPasswordReset_puj7f4$(this, code_0, newPassword_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createUserWithEmailAndPassword_puj7f4$($this, email_0, password_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$email = email_0;
    this.local$password = password_0;
  }
  Coroutine$createUserWithEmailAndPassword_puj7f4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createUserWithEmailAndPassword_puj7f4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createUserWithEmailAndPassword_puj7f4$.prototype.constructor = Coroutine$createUserWithEmailAndPassword_puj7f4$;
  Coroutine$createUserWithEmailAndPassword_puj7f4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.createUserWithEmailAndPassword(this.local$email, this.local$password), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new AuthResult(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return this.local$rethrow$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.createUserWithEmailAndPassword_puj7f4$ = function (email_0, password_0, continuation_0, suspended) {
    var instance = new Coroutine$createUserWithEmailAndPassword_puj7f4$(this, email_0, password_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$fetchSignInMethodsForEmail_61zpoe$($this, email_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$email = email_0;
  }
  Coroutine$fetchSignInMethodsForEmail_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fetchSignInMethodsForEmail_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchSignInMethodsForEmail_61zpoe$.prototype.constructor = Coroutine$fetchSignInMethodsForEmail_61zpoe$;
  Coroutine$fetchSignInMethodsForEmail_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.fetchSignInMethodsForEmail(this.local$email), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = asList(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return this.local$rethrow$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.fetchSignInMethodsForEmail_61zpoe$ = function (email_0, continuation_0, suspended) {
    var instance = new Coroutine$fetchSignInMethodsForEmail_61zpoe$(this, email_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sendPasswordResetEmail_sozx7n$($this, email_0, actionCodeSettings_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$email = email_0;
    this.local$actionCodeSettings = actionCodeSettings_0;
  }
  Coroutine$sendPasswordResetEmail_sozx7n$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sendPasswordResetEmail_sozx7n$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sendPasswordResetEmail_sozx7n$.prototype.constructor = Coroutine$sendPasswordResetEmail_sozx7n$;
  Coroutine$sendPasswordResetEmail_sozx7n$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$actionCodeSettings === void 0)
              this.local$actionCodeSettings = null;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.sendPasswordResetEmail(this.local$email, this.local$actionCodeSettings != null ? toJson(this.local$actionCodeSettings) : null), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.sendPasswordResetEmail_sozx7n$ = function (email_0, actionCodeSettings_0, continuation_0, suspended) {
    var instance = new Coroutine$sendPasswordResetEmail_sozx7n$(this, email_0, actionCodeSettings_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sendSignInLinkToEmail_heksh0$($this, email_0, actionCodeSettings_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$email = email_0;
    this.local$actionCodeSettings = actionCodeSettings_0;
  }
  Coroutine$sendSignInLinkToEmail_heksh0$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sendSignInLinkToEmail_heksh0$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sendSignInLinkToEmail_heksh0$.prototype.constructor = Coroutine$sendSignInLinkToEmail_heksh0$;
  Coroutine$sendSignInLinkToEmail_heksh0$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.sendSignInLinkToEmail(this.local$email, toJson(this.local$actionCodeSettings)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.sendSignInLinkToEmail_heksh0$ = function (email_0, actionCodeSettings_0, continuation_0, suspended) {
    var instance = new Coroutine$sendSignInLinkToEmail_heksh0$(this, email_0, actionCodeSettings_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$signInWithEmailAndPassword_puj7f4$($this, email_0, password_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$email = email_0;
    this.local$password = password_0;
  }
  Coroutine$signInWithEmailAndPassword_puj7f4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$signInWithEmailAndPassword_puj7f4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$signInWithEmailAndPassword_puj7f4$.prototype.constructor = Coroutine$signInWithEmailAndPassword_puj7f4$;
  Coroutine$signInWithEmailAndPassword_puj7f4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.signInWithEmailAndPassword(this.local$email, this.local$password), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new AuthResult(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return this.local$rethrow$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.signInWithEmailAndPassword_puj7f4$ = function (email_0, password_0, continuation_0, suspended) {
    var instance = new Coroutine$signInWithEmailAndPassword_puj7f4$(this, email_0, password_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$signInWithCustomToken_61zpoe$($this, token_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$token = token_0;
  }
  Coroutine$signInWithCustomToken_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$signInWithCustomToken_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$signInWithCustomToken_61zpoe$.prototype.constructor = Coroutine$signInWithCustomToken_61zpoe$;
  Coroutine$signInWithCustomToken_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.signInWithCustomToken(this.local$token), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new AuthResult(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return this.local$rethrow$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.signInWithCustomToken_61zpoe$ = function (token_0, continuation_0, suspended) {
    var instance = new Coroutine$signInWithCustomToken_61zpoe$(this, token_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$signInAnonymously($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
  }
  Coroutine$signInAnonymously.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$signInAnonymously.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$signInAnonymously.prototype.constructor = Coroutine$signInAnonymously;
  Coroutine$signInAnonymously.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.signInAnonymously(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new AuthResult(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return this.local$rethrow$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.signInAnonymously = function (continuation_0, suspended) {
    var instance = new Coroutine$signInAnonymously(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$signInWithCredential_udbdc7$($this, authCredential_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$authCredential = authCredential_0;
  }
  Coroutine$signInWithCredential_udbdc7$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$signInWithCredential_udbdc7$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$signInWithCredential_udbdc7$.prototype.constructor = Coroutine$signInWithCredential_udbdc7$;
  Coroutine$signInWithCredential_udbdc7$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.signInWithCredential(this.local$authCredential.js), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new AuthResult(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return this.local$rethrow$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.signInWithCredential_udbdc7$ = function (authCredential_0, continuation_0, suspended) {
    var instance = new Coroutine$signInWithCredential_udbdc7$(this, authCredential_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$signOut($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
  }
  Coroutine$signOut.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$signOut.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$signOut.prototype.constructor = Coroutine$signOut;
  Coroutine$signOut.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.signOut(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.signOut = function (continuation_0, suspended) {
    var instance = new Coroutine$signOut(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$updateCurrentUser_xvoae2$($this, user_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$user = user_0;
  }
  Coroutine$updateCurrentUser_xvoae2$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$updateCurrentUser_xvoae2$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$updateCurrentUser_xvoae2$.prototype.constructor = Coroutine$updateCurrentUser_xvoae2$;
  Coroutine$updateCurrentUser_xvoae2$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.updateCurrentUser(this.local$user.js), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.updateCurrentUser_xvoae2$ = function (user_0, continuation_0, suspended) {
    var instance = new Coroutine$updateCurrentUser_xvoae2$(this, user_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$verifyPasswordResetCode_61zpoe$($this, code_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$code = code_0;
  }
  Coroutine$verifyPasswordResetCode_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$verifyPasswordResetCode_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$verifyPasswordResetCode_61zpoe$.prototype.constructor = Coroutine$verifyPasswordResetCode_61zpoe$;
  Coroutine$verifyPasswordResetCode_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.verifyPasswordResetCode(this.local$code), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = this.result_0;
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return this.local$rethrow$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.verifyPasswordResetCode_61zpoe$ = function (code_0, continuation_0, suspended) {
    var instance = new Coroutine$verifyPasswordResetCode_61zpoe$(this, code_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$checkActionCode_i5micy$($this, code_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$code = code_0;
  }
  Coroutine$checkActionCode_i5micy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$checkActionCode_i5micy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$checkActionCode_i5micy$.prototype.constructor = Coroutine$checkActionCode_i5micy$;
  Coroutine$checkActionCode_i5micy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            var tmp$, tmp$_0, tmp$_1;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.checkActionCode(this.local$code), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var result = this.result_0;
            switch (result.operation) {
              case 'EMAIL_SIGNIN':
                tmp$_0 = ActionCodeResult$SignInWithEmailLink_getInstance();
                break;
              case 'VERIFY_EMAIL':
                tmp$_0 = new ActionCodeResult$VerifyEmail(ensureNotNull(result.data.email));
                break;
              case 'PASSWORD_RESET':
                tmp$_0 = new ActionCodeResult$PasswordReset(ensureNotNull(result.data.email));
                break;
              case 'RECOVER_EMAIL':
                tmp$_0 = new ActionCodeResult$RecoverEmail(ensureNotNull(result.data.email), ensureNotNull(result.data.previousEmail));
                break;
              case 'VERIFY_AND_CHANGE_EMAIL':
                tmp$_0 = new ActionCodeResult$VerifyBeforeChangeEmail(ensureNotNull(result.data.email), ensureNotNull(result.data.previousEmail));
                break;
              case 'REVERT_SECOND_FACTOR_ADDITION':
                tmp$_0 = new ActionCodeResult$RevertSecondFactorAddition(ensureNotNull(result.data.email), (tmp$ = result.data.multiFactorInfo) != null ? new MultiFactorInfo(tmp$) : null);
                break;
              default:throw UnsupportedOperationException_init(result.operation);
            }

            return Kotlin.isType(tmp$_1 = tmp$_0, ActionCodeResult) ? tmp$_1 : throwCCE();
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseAuth.prototype.checkActionCode_i5micy$ = function (code_0, continuation_0, suspended) {
    var instance = new Coroutine$checkActionCode_i5micy$(this, code_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  FirebaseAuth.prototype.useEmulator_bm4lxs$ = function (host, port) {
    try {
      this.js.useEmulator('http://' + host + ':' + port);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
  };
  FirebaseAuth.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseAuth',
    interfaces: []
  };
  function AuthResult(js) {
    this.js = js;
  }
  Object.defineProperty(AuthResult.prototype, 'user', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        var tmp$;
        rethrow$result = (tmp$ = this.js.user) != null ? new FirebaseUser(tmp$) : null;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  AuthResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthResult',
    interfaces: []
  };
  function toJson($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    var tmp$_2;
    return json([to('android', (tmp$_0 = (tmp$ = $receiver.androidPackageName) != null ? json([to('installApp', tmp$.installIfNotAvailable), to('minimumVersion', tmp$.minimumVersion), to('packageName', tmp$.packageName)]) : null) != null ? tmp$_0 : undefined), to('dynamicLinkDomain', (tmp$_1 = $receiver.dynamicLinkDomain) != null ? tmp$_1 : undefined), to('handleCodeInApp', $receiver.canHandleCodeInApp), to('ios', (tmp$_2 = $receiver.iOSBundleId != null ? json([to('bundleId', $receiver.iOSBundleId)]) : null) != null ? tmp$_2 : undefined)]);
  }
  function FirebaseAuthException(code, cause) {
    FirebaseException.call(this, code, cause);
    this.name = 'FirebaseAuthException';
  }
  FirebaseAuthException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseAuthException',
    interfaces: [FirebaseException]
  };
  function FirebaseAuthActionCodeException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    this.name = 'FirebaseAuthActionCodeException';
  }
  FirebaseAuthActionCodeException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseAuthActionCodeException',
    interfaces: [FirebaseAuthException]
  };
  function FirebaseAuthEmailException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    this.name = 'FirebaseAuthEmailException';
  }
  FirebaseAuthEmailException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseAuthEmailException',
    interfaces: [FirebaseAuthException]
  };
  function FirebaseAuthInvalidCredentialsException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    this.name = 'FirebaseAuthInvalidCredentialsException';
  }
  FirebaseAuthInvalidCredentialsException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseAuthInvalidCredentialsException',
    interfaces: [FirebaseAuthException]
  };
  function FirebaseAuthInvalidUserException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    this.name = 'FirebaseAuthInvalidUserException';
  }
  FirebaseAuthInvalidUserException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseAuthInvalidUserException',
    interfaces: [FirebaseAuthException]
  };
  function FirebaseAuthMultiFactorException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    this.name = 'FirebaseAuthMultiFactorException';
  }
  FirebaseAuthMultiFactorException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseAuthMultiFactorException',
    interfaces: [FirebaseAuthException]
  };
  function FirebaseAuthRecentLoginRequiredException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    this.name = 'FirebaseAuthRecentLoginRequiredException';
  }
  FirebaseAuthRecentLoginRequiredException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseAuthRecentLoginRequiredException',
    interfaces: [FirebaseAuthException]
  };
  function FirebaseAuthUserCollisionException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    this.name = 'FirebaseAuthUserCollisionException';
  }
  FirebaseAuthUserCollisionException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseAuthUserCollisionException',
    interfaces: [FirebaseAuthException]
  };
  function FirebaseAuthWebException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    this.name = 'FirebaseAuthWebException';
  }
  FirebaseAuthWebException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseAuthWebException',
    interfaces: [FirebaseAuthException]
  };
  var rethrow = defineInlineFunction('firebase-kotlin-sdk-firebase-auth.dev.gitlive.firebase.auth.rethrow_jh6u7y$', function ($receiver, function_0) {
    var rethrow$result;
    try {
      rethrow$result = function_0($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  });
  function rethrow_0(function_0) {
    try {
      return function_0();
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
  }
  function errorToException(cause) {
    var tmp$, tmp$_0;
    var code = (tmp$_0 = (tmp$ = cause.code) != null ? tmp$.toString() : null) != null ? tmp$_0.toLowerCase() : null;
    switch (code) {
      case 'auth/invalid-user-token':
        return new FirebaseAuthInvalidUserException(code, cause);
      case 'auth/requires-recent-login':
        return new FirebaseAuthRecentLoginRequiredException(code, cause);
      case 'auth/user-disabled':
        return new FirebaseAuthInvalidUserException(code, cause);
      case 'auth/user-token-expired':
        return new FirebaseAuthInvalidUserException(code, cause);
      case 'auth/web-storage-unsupported':
        return new FirebaseAuthWebException(code, cause);
      case 'auth/network-request-failed':
        return new FirebaseNetworkException(code, cause);
      case 'auth/invalid-credential':
      case 'auth/invalid-verification-code':
      case 'auth/missing-verification-code':
      case 'auth/invalid-verification-id':
      case 'auth/missing-verification-id':
        return new FirebaseAuthInvalidCredentialsException(code, cause);
      case 'auth/maximum-second-factor-count-exceeded':
      case 'auth/second-factor-already-in-use':
        return new FirebaseAuthMultiFactorException(code, cause);
      case 'auth/credential-already-in-use':
        return new FirebaseAuthUserCollisionException(code, cause);
      case 'auth/email-already-in-use':
        return new FirebaseAuthUserCollisionException(code, cause);
      case 'auth/invalid-email':
        return new FirebaseAuthEmailException(code, cause);
      default:println('Unknown error code in ' + JSON.stringify(cause));
        return new FirebaseAuthException(code, cause);
    }
  }
  function AuthCredential(js) {
    this.js = js;
  }
  Object.defineProperty(AuthCredential.prototype, 'providerId', {
    configurable: true,
    get: function () {
      return this.js.providerId;
    }
  });
  AuthCredential.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AuthCredential',
    interfaces: []
  };
  function PhoneAuthCredential(js) {
    AuthCredential.call(this, js);
  }
  PhoneAuthCredential.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PhoneAuthCredential',
    interfaces: [AuthCredential]
  };
  function OAuthCredential(js) {
    AuthCredential.call(this, js);
  }
  OAuthCredential.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OAuthCredential',
    interfaces: [AuthCredential]
  };
  function EmailAuthProvider() {
    EmailAuthProvider_instance = this;
  }
  EmailAuthProvider.prototype.credential_puj7f4$ = function (email, password) {
    return new AuthCredential(firebase$auth$EmailAuthProvider$Companion.credential(email, password));
  };
  EmailAuthProvider.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EmailAuthProvider',
    interfaces: []
  };
  var EmailAuthProvider_instance = null;
  function EmailAuthProvider_getInstance() {
    if (EmailAuthProvider_instance === null) {
      new EmailAuthProvider();
    }return EmailAuthProvider_instance;
  }
  function FacebookAuthProvider() {
    FacebookAuthProvider_instance = this;
  }
  FacebookAuthProvider.prototype.credential_61zpoe$ = function (accessToken) {
    return new AuthCredential(firebase$auth$FacebookAuthProvider$Companion.credential(accessToken));
  };
  FacebookAuthProvider.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FacebookAuthProvider',
    interfaces: []
  };
  var FacebookAuthProvider_instance = null;
  function FacebookAuthProvider_getInstance() {
    if (FacebookAuthProvider_instance === null) {
      new FacebookAuthProvider();
    }return FacebookAuthProvider_instance;
  }
  function GithubAuthProvider() {
    GithubAuthProvider_instance = this;
  }
  GithubAuthProvider.prototype.credential_61zpoe$ = function (token) {
    return new AuthCredential(firebase$auth$GithubAuthProvider$Companion.credential(token));
  };
  GithubAuthProvider.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GithubAuthProvider',
    interfaces: []
  };
  var GithubAuthProvider_instance = null;
  function GithubAuthProvider_getInstance() {
    if (GithubAuthProvider_instance === null) {
      new GithubAuthProvider();
    }return GithubAuthProvider_instance;
  }
  function GoogleAuthProvider() {
    GoogleAuthProvider_instance = this;
  }
  GoogleAuthProvider.prototype.credential_puj7f4$ = function (idToken, accessToken) {
    return new AuthCredential(firebase$auth$GoogleAuthProvider$Companion.credential(idToken, accessToken));
  };
  GoogleAuthProvider.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GoogleAuthProvider',
    interfaces: []
  };
  var GoogleAuthProvider_instance = null;
  function GoogleAuthProvider_getInstance() {
    if (GoogleAuthProvider_instance === null) {
      new GoogleAuthProvider();
    }return GoogleAuthProvider_instance;
  }
  function OAuthProvider(js) {
    OAuthProvider$Companion_getInstance();
    this.js = js;
  }
  function OAuthProvider$Companion() {
    OAuthProvider$Companion_instance = this;
  }
  OAuthProvider$Companion.prototype.credential_dawjdb$ = function (providerId, accessToken, idToken, rawNonce) {
    if (accessToken === void 0)
      accessToken = null;
    if (idToken === void 0)
      idToken = null;
    if (rawNonce === void 0)
      rawNonce = null;
    var rethrow$result;
    try {
      rethrow$result = new OAuthCredential((new firebase$auth$OAuthProvider(providerId)).credential(json([to('accessToken', accessToken != null ? accessToken : undefined), to('idToken', idToken != null ? idToken : undefined), to('rawNonce', rawNonce != null ? rawNonce : undefined)]), accessToken != null ? accessToken : undefined));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  OAuthProvider$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OAuthProvider$Companion_instance = null;
  function OAuthProvider$Companion_getInstance() {
    if (OAuthProvider$Companion_instance === null) {
      new OAuthProvider$Companion();
    }return OAuthProvider$Companion_instance;
  }
  OAuthProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OAuthProvider',
    interfaces: []
  };
  function OAuthProvider_init(provider, scopes, customParameters, auth, $this) {
    if (scopes === void 0)
      scopes = emptyList();
    if (customParameters === void 0)
      customParameters = emptyMap();
    if (auth === void 0)
      auth = get_auth(firebase_0.Firebase);
    $this = $this || Object.create(OAuthProvider.prototype);
    OAuthProvider.call($this, new firebase$auth$OAuthProvider(provider));
    try {
      var tmp$;
      tmp$ = scopes.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $this.js.addScope(element);
      }
      $this.js.setCustomParameters(customParameters);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return $this;
  }
  function PhoneAuthProvider(js) {
    this.js = js;
  }
  PhoneAuthProvider.prototype.credential_puj7f4$ = function (verificationId, smsCode) {
    return new PhoneAuthCredential(firebase$auth$PhoneAuthProvider$Companion.credential(verificationId, smsCode));
  };
  function Coroutine$verifyPhoneNumber_c7tbxg$($this, phoneNumber_0, verificationProvider_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$verificationId = void 0;
    this.local$phoneNumber = phoneNumber_0;
    this.local$verificationProvider = verificationProvider_0;
  }
  Coroutine$verifyPhoneNumber_c7tbxg$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$verifyPhoneNumber_c7tbxg$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$verifyPhoneNumber_c7tbxg$.prototype.constructor = Coroutine$verifyPhoneNumber_c7tbxg$;
  Coroutine$verifyPhoneNumber_c7tbxg$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 3;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.verifyPhoneNumber(this.local$phoneNumber, this.local$verificationProvider.verifier), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$verificationId = this.result_0;
            this.state_0 = 2;
            this.result_0 = this.local$verificationProvider.getVerificationCode_61zpoe$(this.local$verificationId, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            var verificationCode = this.result_0;
            this.local$rethrow$result = this.$this.credential_puj7f4$(this.local$verificationId, verificationCode);
            this.exceptionState_0 = 5;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 5;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 4:
            return this.local$rethrow$result;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  PhoneAuthProvider.prototype.verifyPhoneNumber_c7tbxg$ = function (phoneNumber_0, verificationProvider_0, continuation_0, suspended) {
    var instance = new Coroutine$verifyPhoneNumber_c7tbxg$(this, phoneNumber_0, verificationProvider_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  PhoneAuthProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PhoneAuthProvider',
    interfaces: []
  };
  function PhoneAuthProvider_init(auth, $this) {
    if (auth === void 0)
      auth = get_auth(firebase_0.Firebase);
    $this = $this || Object.create(PhoneAuthProvider.prototype);
    PhoneAuthProvider.call($this, new firebase$auth$PhoneAuthProvider$Companion(auth.js));
    return $this;
  }
  function PhoneVerificationProvider() {
  }
  PhoneVerificationProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PhoneVerificationProvider',
    interfaces: []
  };
  function TwitterAuthProvider() {
    TwitterAuthProvider_instance = this;
  }
  TwitterAuthProvider.prototype.credential_puj7f4$ = function (token, secret) {
    return new AuthCredential(firebase$auth$TwitterAuthProvider$Companion.credential(token, secret));
  };
  TwitterAuthProvider.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TwitterAuthProvider',
    interfaces: []
  };
  var TwitterAuthProvider_instance = null;
  function TwitterAuthProvider_getInstance() {
    if (TwitterAuthProvider_instance === null) {
      new TwitterAuthProvider();
    }return TwitterAuthProvider_instance;
  }
  function MultiFactor(js) {
    this.js = js;
  }
  Object.defineProperty(MultiFactor.prototype, 'enrolledFactors', {
    configurable: true,
    get: function () {
      try {
        var $receiver = this.js.enrolledFactors;
        var destination = ArrayList_init($receiver.length);
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
          var item = $receiver[tmp$];
          destination.add_11rb$(new MultiFactorInfo(item));
        }
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return destination;
    }
  });
  function Coroutine$enroll_mg603v$($this, multiFactorAssertion_0, displayName_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$multiFactorAssertion = multiFactorAssertion_0;
    this.local$displayName = displayName_0;
  }
  Coroutine$enroll_mg603v$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$enroll_mg603v$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$enroll_mg603v$.prototype.constructor = Coroutine$enroll_mg603v$;
  Coroutine$enroll_mg603v$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.enroll(this.local$multiFactorAssertion.js, this.local$displayName), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MultiFactor.prototype.enroll_mg603v$ = function (multiFactorAssertion_0, displayName_0, continuation_0, suspended) {
    var instance = new Coroutine$enroll_mg603v$(this, multiFactorAssertion_0, displayName_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getSession($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
  }
  Coroutine$getSession.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getSession.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getSession.prototype.constructor = Coroutine$getSession;
  Coroutine$getSession.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.getSession(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new MultiFactorSession(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return this.local$rethrow$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MultiFactor.prototype.getSession = function (continuation_0, suspended) {
    var instance = new Coroutine$getSession(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$unenroll_95bucy$($this, multiFactorInfo_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$multiFactorInfo = multiFactorInfo_0;
  }
  Coroutine$unenroll_95bucy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$unenroll_95bucy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unenroll_95bucy$.prototype.constructor = Coroutine$unenroll_95bucy$;
  Coroutine$unenroll_95bucy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.unenroll(this.local$multiFactorInfo.js), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MultiFactor.prototype.unenroll_95bucy$ = function (multiFactorInfo_0, continuation_0, suspended) {
    var instance = new Coroutine$unenroll_95bucy$(this, multiFactorInfo_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$unenroll_61zpoe$($this, factorUid_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$factorUid = factorUid_0;
  }
  Coroutine$unenroll_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$unenroll_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unenroll_61zpoe$.prototype.constructor = Coroutine$unenroll_61zpoe$;
  Coroutine$unenroll_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.unenroll(this.local$factorUid), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MultiFactor.prototype.unenroll_61zpoe$ = function (factorUid_0, continuation_0, suspended) {
    var instance = new Coroutine$unenroll_61zpoe$(this, factorUid_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  MultiFactor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiFactor',
    interfaces: []
  };
  function MultiFactorInfo(js) {
    this.js = js;
  }
  Object.defineProperty(MultiFactorInfo.prototype, 'displayName', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.displayName;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(MultiFactorInfo.prototype, 'enrollmentTime', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = (new Date(this.js.enrollmentTime)).getTime() / 1000.0;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(MultiFactorInfo.prototype, 'factorId', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.factorId;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(MultiFactorInfo.prototype, 'uid', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.uid;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  MultiFactorInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiFactorInfo',
    interfaces: []
  };
  function MultiFactorAssertion(js) {
    this.js = js;
  }
  Object.defineProperty(MultiFactorAssertion.prototype, 'factorId', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.factorId;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  MultiFactorAssertion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiFactorAssertion',
    interfaces: []
  };
  function MultiFactorSession(js) {
    this.js = js;
  }
  MultiFactorSession.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiFactorSession',
    interfaces: []
  };
  function MultiFactorResolver(js) {
    this.js = js;
    var rethrow$result;
    try {
      rethrow$result = new FirebaseAuth(this.js.auth);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    this.auth = rethrow$result;
    try {
      var $receiver = this.js.hints;
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(new MultiFactorInfo(item));
      }
    } catch (e_0) {
      if (Kotlin.isType(e_0, Exception)) {
        throw e_0;
      } else {
        throw errorToException(e_0);
      }
    }
    this.hints = destination;
    var rethrow$result_0;
    try {
      rethrow$result_0 = new MultiFactorSession(this.js.session);
    } catch (e_1) {
      if (Kotlin.isType(e_1, Exception)) {
        throw e_1;
      } else {
        throw errorToException(e_1);
      }
    }
    this.session = rethrow$result_0;
  }
  function Coroutine$resolveSignIn_6pnfhe$($this, assertion_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$assertion = assertion_0;
  }
  Coroutine$resolveSignIn_6pnfhe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$resolveSignIn_6pnfhe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$resolveSignIn_6pnfhe$.prototype.constructor = Coroutine$resolveSignIn_6pnfhe$;
  Coroutine$resolveSignIn_6pnfhe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.resolveSignIn(this.local$assertion.js), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new AuthResult(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return this.local$rethrow$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  MultiFactorResolver.prototype.resolveSignIn_6pnfhe$ = function (assertion_0, continuation_0, suspended) {
    var instance = new Coroutine$resolveSignIn_6pnfhe$(this, assertion_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  MultiFactorResolver.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiFactorResolver',
    interfaces: []
  };
  function FirebaseUser(js) {
    this.js = js;
  }
  Object.defineProperty(FirebaseUser.prototype, 'uid', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.uid;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(FirebaseUser.prototype, 'displayName', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.displayName;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(FirebaseUser.prototype, 'email', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.email;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(FirebaseUser.prototype, 'phoneNumber', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.phoneNumber;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(FirebaseUser.prototype, 'photoURL', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.photoURL;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(FirebaseUser.prototype, 'isAnonymous', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.isAnonymous;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(FirebaseUser.prototype, 'isEmailVerified', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.emailVerified;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(FirebaseUser.prototype, 'metaData', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = new UserMetaData(this.js.metadata);
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(FirebaseUser.prototype, 'multiFactor', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = new MultiFactor(this.js.multiFactor);
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(FirebaseUser.prototype, 'providerData', {
    configurable: true,
    get: function () {
      try {
        var $receiver = this.js.providerData;
        var destination = ArrayList_init($receiver.length);
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
          var item = $receiver[tmp$];
          destination.add_11rb$(new UserInfo(item));
        }
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return destination;
    }
  });
  Object.defineProperty(FirebaseUser.prototype, 'providerId', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.providerId;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  function Coroutine$delete($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
  }
  Coroutine$delete.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$delete.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$delete.prototype.constructor = Coroutine$delete;
  Coroutine$delete.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.delete(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseUser.prototype.delete = function (continuation_0, suspended) {
    var instance = new Coroutine$delete(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$reload($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
  }
  Coroutine$reload.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$reload.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$reload.prototype.constructor = Coroutine$reload;
  Coroutine$reload.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.reload(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseUser.prototype.reload = function (continuation_0, suspended) {
    var instance = new Coroutine$reload(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getIdToken_6taknv$($this, forceRefresh_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$forceRefresh = forceRefresh_0;
  }
  Coroutine$getIdToken_6taknv$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getIdToken_6taknv$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getIdToken_6taknv$.prototype.constructor = Coroutine$getIdToken_6taknv$;
  Coroutine$getIdToken_6taknv$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.getIdToken(this.local$forceRefresh), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = this.result_0;
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return this.local$rethrow$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseUser.prototype.getIdToken_6taknv$ = function (forceRefresh_0, continuation_0, suspended) {
    var instance = new Coroutine$getIdToken_6taknv$(this, forceRefresh_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$linkWithCredential_udbdc7$($this, credential_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$credential = credential_0;
  }
  Coroutine$linkWithCredential_udbdc7$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$linkWithCredential_udbdc7$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$linkWithCredential_udbdc7$.prototype.constructor = Coroutine$linkWithCredential_udbdc7$;
  Coroutine$linkWithCredential_udbdc7$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.linkWithCredential(this.local$credential.js), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new AuthResult(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return this.local$rethrow$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseUser.prototype.linkWithCredential_udbdc7$ = function (credential_0, continuation_0, suspended) {
    var instance = new Coroutine$linkWithCredential_udbdc7$(this, credential_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$reauthenticate_udbdc7$($this, credential_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$credential = credential_0;
  }
  Coroutine$reauthenticate_udbdc7$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$reauthenticate_udbdc7$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$reauthenticate_udbdc7$.prototype.constructor = Coroutine$reauthenticate_udbdc7$;
  Coroutine$reauthenticate_udbdc7$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.reauthenticateWithCredential(this.local$credential.js), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseUser.prototype.reauthenticate_udbdc7$ = function (credential_0, continuation_0, suspended) {
    var instance = new Coroutine$reauthenticate_udbdc7$(this, credential_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$reauthenticateAndRetrieveData_udbdc7$($this, credential_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$credential = credential_0;
  }
  Coroutine$reauthenticateAndRetrieveData_udbdc7$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$reauthenticateAndRetrieveData_udbdc7$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$reauthenticateAndRetrieveData_udbdc7$.prototype.constructor = Coroutine$reauthenticateAndRetrieveData_udbdc7$;
  Coroutine$reauthenticateAndRetrieveData_udbdc7$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.reauthenticateWithCredential(this.local$credential.js), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new AuthResult(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return this.local$rethrow$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseUser.prototype.reauthenticateAndRetrieveData_udbdc7$ = function (credential_0, continuation_0, suspended) {
    var instance = new Coroutine$reauthenticateAndRetrieveData_udbdc7$(this, credential_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sendEmailVerification_pfo9qp$($this, actionCodeSettings_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$actionCodeSettings = actionCodeSettings_0;
  }
  Coroutine$sendEmailVerification_pfo9qp$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sendEmailVerification_pfo9qp$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sendEmailVerification_pfo9qp$.prototype.constructor = Coroutine$sendEmailVerification_pfo9qp$;
  Coroutine$sendEmailVerification_pfo9qp$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$actionCodeSettings === void 0)
              this.local$actionCodeSettings = null;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.sendEmailVerification(this.local$actionCodeSettings != null ? toJson(this.local$actionCodeSettings) : null), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseUser.prototype.sendEmailVerification_pfo9qp$ = function (actionCodeSettings_0, continuation_0, suspended) {
    var instance = new Coroutine$sendEmailVerification_pfo9qp$(this, actionCodeSettings_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$unlink_61zpoe$($this, provider_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$provider = provider_0;
  }
  Coroutine$unlink_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$unlink_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$unlink_61zpoe$.prototype.constructor = Coroutine$unlink_61zpoe$;
  Coroutine$unlink_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.unlink(this.local$provider), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new FirebaseUser(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return this.local$rethrow$result;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseUser.prototype.unlink_61zpoe$ = function (provider_0, continuation_0, suspended) {
    var instance = new Coroutine$unlink_61zpoe$(this, provider_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$updateEmail_61zpoe$($this, email_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$email = email_0;
  }
  Coroutine$updateEmail_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$updateEmail_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$updateEmail_61zpoe$.prototype.constructor = Coroutine$updateEmail_61zpoe$;
  Coroutine$updateEmail_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.updateEmail(this.local$email), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseUser.prototype.updateEmail_61zpoe$ = function (email_0, continuation_0, suspended) {
    var instance = new Coroutine$updateEmail_61zpoe$(this, email_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$updatePassword_61zpoe$($this, password_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$password = password_0;
  }
  Coroutine$updatePassword_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$updatePassword_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$updatePassword_61zpoe$.prototype.constructor = Coroutine$updatePassword_61zpoe$;
  Coroutine$updatePassword_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.updatePassword(this.local$password), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseUser.prototype.updatePassword_61zpoe$ = function (password_0, continuation_0, suspended) {
    var instance = new Coroutine$updatePassword_61zpoe$(this, password_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$updatePhoneNumber_27ct1h$($this, credential_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$credential = credential_0;
  }
  Coroutine$updatePhoneNumber_27ct1h$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$updatePhoneNumber_27ct1h$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$updatePhoneNumber_27ct1h$.prototype.constructor = Coroutine$updatePhoneNumber_27ct1h$;
  Coroutine$updatePhoneNumber_27ct1h$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.updatePhoneNumber(this.local$credential.js), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseUser.prototype.updatePhoneNumber_27ct1h$ = function (credential_0, continuation_0, suspended) {
    var instance = new Coroutine$updatePhoneNumber_27ct1h$(this, credential_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function FirebaseUser$updateProfile$lambda$ObjectLiteral(closure$displayName, closure$photoUrl) {
    this.displayName_42p4ep$_0 = closure$displayName;
    this.photoURL_qbav2d$_0 = closure$photoUrl;
  }
  Object.defineProperty(FirebaseUser$updateProfile$lambda$ObjectLiteral.prototype, 'displayName', {
    configurable: true,
    get: function () {
      return this.displayName_42p4ep$_0;
    }
  });
  Object.defineProperty(FirebaseUser$updateProfile$lambda$ObjectLiteral.prototype, 'photoURL', {
    configurable: true,
    get: function () {
      return this.photoURL_qbav2d$_0;
    }
  });
  FirebaseUser$updateProfile$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function Coroutine$updateProfile_rkkr90$($this, displayName_0, photoUrl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$displayName = displayName_0;
    this.local$photoUrl = photoUrl_0;
  }
  Coroutine$updateProfile_rkkr90$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$updateProfile_rkkr90$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$updateProfile_rkkr90$.prototype.constructor = Coroutine$updateProfile_rkkr90$;
  Coroutine$updateProfile_rkkr90$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$displayName === void 0)
              this.local$displayName = this.$this.displayName;
            if (this.local$photoUrl === void 0)
              this.local$photoUrl = this.$this.photoURL;
            this.exceptionState_0 = 2;
            var request = new FirebaseUser$updateProfile$lambda$ObjectLiteral(this.local$displayName, this.local$photoUrl);
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.updateProfile(request), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseUser.prototype.updateProfile_rkkr90$ = function (displayName_0, photoUrl_0, continuation_0, suspended) {
    var instance = new Coroutine$updateProfile_rkkr90$(this, displayName_0, photoUrl_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$verifyBeforeUpdateEmail_sozx7n$($this, newEmail_0, actionCodeSettings_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$newEmail = newEmail_0;
    this.local$actionCodeSettings = actionCodeSettings_0;
  }
  Coroutine$verifyBeforeUpdateEmail_sozx7n$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$verifyBeforeUpdateEmail_sozx7n$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$verifyBeforeUpdateEmail_sozx7n$.prototype.constructor = Coroutine$verifyBeforeUpdateEmail_sozx7n$;
  Coroutine$verifyBeforeUpdateEmail_sozx7n$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$actionCodeSettings === void 0)
              this.local$actionCodeSettings = null;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.verifyBeforeUpdateEmail(this.local$newEmail, this.local$actionCodeSettings != null ? toJson(this.local$actionCodeSettings) : null), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, Exception)) {
              throw e_0;
            } else {
              throw errorToException(e_0);
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FirebaseUser.prototype.verifyBeforeUpdateEmail_sozx7n$ = function (newEmail_0, actionCodeSettings_0, continuation_0, suspended) {
    var instance = new Coroutine$verifyBeforeUpdateEmail_sozx7n$(this, newEmail_0, actionCodeSettings_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  FirebaseUser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseUser',
    interfaces: []
  };
  function UserInfo(js) {
    this.js = js;
  }
  Object.defineProperty(UserInfo.prototype, 'displayName', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.displayName;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(UserInfo.prototype, 'email', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.email;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(UserInfo.prototype, 'phoneNumber', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.phoneNumber;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(UserInfo.prototype, 'photoURL', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.photoURL;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(UserInfo.prototype, 'providerId', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.providerId;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(UserInfo.prototype, 'uid', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.uid;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  UserInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserInfo',
    interfaces: []
  };
  function UserMetaData(js) {
    this.js = js;
  }
  Object.defineProperty(UserMetaData.prototype, 'creationTime', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        var tmp$;
        rethrow$result = (tmp$ = this.js.creationTime) != null ? (new Date(tmp$)).getTime() / 1000.0 : null;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  Object.defineProperty(UserMetaData.prototype, 'lastSignInTime', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        var tmp$;
        rethrow$result = (tmp$ = this.js.lastSignInTime) != null ? (new Date(tmp$)).getTime() / 1000.0 : null;
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    }
  });
  UserMetaData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserMetaData',
    interfaces: []
  };
  Object.defineProperty(ActionCodeResult, 'SignInWithEmailLink', {
    get: ActionCodeResult$SignInWithEmailLink_getInstance
  });
  ActionCodeResult.PasswordReset = ActionCodeResult$PasswordReset;
  ActionCodeResult.VerifyEmail = ActionCodeResult$VerifyEmail;
  ActionCodeResult.RecoverEmail = ActionCodeResult$RecoverEmail;
  ActionCodeResult.VerifyBeforeChangeEmail = ActionCodeResult$VerifyBeforeChangeEmail;
  ActionCodeResult.RevertSecondFactorAddition = ActionCodeResult$RevertSecondFactorAddition;
  var package$dev = _.dev || (_.dev = {});
  var package$gitlive = package$dev.gitlive || (package$dev.gitlive = {});
  var package$firebase = package$gitlive.firebase || (package$gitlive.firebase = {});
  var package$auth = package$firebase.auth || (package$firebase.auth = {});
  package$auth.ActionCodeResult = ActionCodeResult;
  package$auth.ActionCodeSettings = ActionCodeSettings;
  package$auth.AndroidPackageName = AndroidPackageName;
  $$importsForInline$$['firebase-kotlin-sdk-firebase-auth'] = _;
  package$auth.get_auth_jr6r1m$ = get_auth;
  package$auth.auth_b63xga$ = auth;
  package$auth.FirebaseAuth = FirebaseAuth;
  package$auth.AuthResult = AuthResult;
  package$auth.toJson_4sihc4$ = toJson;
  package$auth.FirebaseAuthException = FirebaseAuthException;
  package$auth.FirebaseAuthActionCodeException = FirebaseAuthActionCodeException;
  package$auth.FirebaseAuthEmailException = FirebaseAuthEmailException;
  package$auth.FirebaseAuthInvalidCredentialsException = FirebaseAuthInvalidCredentialsException;
  package$auth.FirebaseAuthInvalidUserException = FirebaseAuthInvalidUserException;
  package$auth.FirebaseAuthMultiFactorException = FirebaseAuthMultiFactorException;
  package$auth.FirebaseAuthRecentLoginRequiredException = FirebaseAuthRecentLoginRequiredException;
  package$auth.FirebaseAuthUserCollisionException = FirebaseAuthUserCollisionException;
  package$auth.FirebaseAuthWebException = FirebaseAuthWebException;
  package$auth.rethrow_jh6u7y$ = rethrow;
  package$auth.AuthCredential = AuthCredential;
  package$auth.PhoneAuthCredential = PhoneAuthCredential;
  package$auth.OAuthCredential = OAuthCredential;
  Object.defineProperty(package$auth, 'EmailAuthProvider', {
    get: EmailAuthProvider_getInstance
  });
  Object.defineProperty(package$auth, 'FacebookAuthProvider', {
    get: FacebookAuthProvider_getInstance
  });
  Object.defineProperty(package$auth, 'GithubAuthProvider', {
    get: GithubAuthProvider_getInstance
  });
  Object.defineProperty(package$auth, 'GoogleAuthProvider', {
    get: GoogleAuthProvider_getInstance
  });
  Object.defineProperty(OAuthProvider, 'Companion', {
    get: OAuthProvider$Companion_getInstance
  });
  package$auth.OAuthProvider_init_dmevl1$ = OAuthProvider_init;
  package$auth.OAuthProvider = OAuthProvider;
  package$auth.PhoneAuthProvider_init_xvbkhj$ = PhoneAuthProvider_init;
  package$auth.PhoneAuthProvider = PhoneAuthProvider;
  package$auth.PhoneVerificationProvider = PhoneVerificationProvider;
  Object.defineProperty(package$auth, 'TwitterAuthProvider', {
    get: TwitterAuthProvider_getInstance
  });
  package$auth.MultiFactor = MultiFactor;
  package$auth.MultiFactorInfo = MultiFactorInfo;
  package$auth.MultiFactorAssertion = MultiFactorAssertion;
  package$auth.MultiFactorSession = MultiFactorSession;
  package$auth.MultiFactorResolver = MultiFactorResolver;
  package$auth.FirebaseUser = FirebaseUser;
  package$auth.UserInfo = UserInfo;
  package$auth.UserMetaData = UserMetaData;
  Kotlin.defineModule('firebase-kotlin-sdk-firebase-auth', _);
  return _;
}(module.exports, require('kotlin'), require('firebase/auth'), require('firebase/app'), require('firebase-kotlin-sdk-firebase-common'), require('kotlinx-coroutines-core'), require('firebase-kotlin-sdk-firebase-app')));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-auth.js.map
