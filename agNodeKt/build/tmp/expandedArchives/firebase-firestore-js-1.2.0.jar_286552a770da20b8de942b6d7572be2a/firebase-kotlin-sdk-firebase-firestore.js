(function (_, Kotlin, $module$firebase_kotlin_sdk_firebase_common, $module$firebase_app, $module$firebase_firestore, $module$kotlinx_coroutines_core, $module$firebase_kotlin_sdk_firebase_app) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var decode = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.decode_k6f162$;
  var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
  var encode = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.encode_zapi5d$;
  var firebase = $module$firebase_app.default;
  var firebase$firestore = $module$firebase_app.default.firestore;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var promise = $module$kotlinx_coroutines_core.kotlinx.coroutines.promise_pda6u4$;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var drop = Kotlin.kotlin.collections.drop_8ujjk8$;
  var Any = Object;
  var PrimitiveClasses$anyClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.anyClass;
  var createKType = Kotlin.createKType;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var safeOffer = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.safeOffer_rmur43$;
  var awaitClose = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.awaitClose_msfyrq$;
  var callbackFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.callbackFlow_b9ud7o$;
  var numberToDouble = Kotlin.numberToDouble;
  var FirebaseException = $module$firebase_kotlin_sdk_firebase_app.dev.gitlive.firebase.FirebaseException;
  var equals = Kotlin.equals;
  var firebase$firestore$FieldPath$Companion = $module$firebase_app.default.firestore.FieldPath;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Exception = Kotlin.kotlin.Exception;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
  var FirebaseEncoder_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseEncoder;
  var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
  var Map = Kotlin.kotlin.collections.Map;
  var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
  var List = Kotlin.kotlin.collections.List;
  var Set = Kotlin.kotlin.collections.Set;
  var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
  var throwCCE = Kotlin.throwCCE;
  var Result = Kotlin.kotlin.Result;
  var Throwable = Error;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
  var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  CollectionReference.prototype = Object.create(Query.prototype);
  CollectionReference.prototype.constructor = CollectionReference;
  FirebaseFirestoreException.prototype = Object.create(FirebaseException.prototype);
  FirebaseFirestoreException.prototype.constructor = FirebaseFirestoreException;
  FirestoreExceptionCode.prototype = Object.create(Enum.prototype);
  FirestoreExceptionCode.prototype.constructor = FirestoreExceptionCode;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  ChangeType.prototype = Object.create(Enum.prototype);
  ChangeType.prototype.constructor = ChangeType;
  function where($receiver, field, equalTo) {
    return $receiver._where_4z64id$(field, equalTo);
  }
  function where_0($receiver, path, equalTo) {
    return $receiver._where_ar9hcf$(path, equalTo);
  }
  function where_1($receiver, field, lessThan, greaterThan, arrayContains) {
    if (lessThan === void 0)
      lessThan = null;
    if (greaterThan === void 0)
      greaterThan = null;
    if (arrayContains === void 0)
      arrayContains = null;
    return $receiver._where_so46tf$(field, lessThan, greaterThan, arrayContains);
  }
  function where_2($receiver, path, lessThan, greaterThan, arrayContains) {
    if (lessThan === void 0)
      lessThan = null;
    if (greaterThan === void 0)
      greaterThan = null;
    if (arrayContains === void 0)
      arrayContains = null;
    return $receiver._where_t472uv$(path, lessThan, greaterThan, arrayContains);
  }
  function where_3($receiver, field, inArray, arrayContainsAny) {
    if (inArray === void 0)
      inArray = null;
    if (arrayContainsAny === void 0)
      arrayContainsAny = null;
    return $receiver._where_jsc1td$(field, inArray, arrayContainsAny);
  }
  function where_4($receiver, path, inArray, arrayContainsAny) {
    if (inArray === void 0)
      inArray = null;
    if (arrayContainsAny === void 0)
      arrayContainsAny = null;
    return $receiver._where_jul215$(path, inArray, arrayContainsAny);
  }
  function orderBy($receiver, field, direction) {
    if (direction === void 0)
      direction = Direction$ASCENDING_getInstance();
    return $receiver._orderBy_yrmre1$(field, direction);
  }
  function orderBy_0($receiver, field, direction) {
    if (direction === void 0)
      direction = Direction$ASCENDING_getInstance();
    return $receiver._orderBy_sse7o1$(field, direction);
  }
  var firebaseSerializer$lambda = wrapFunction(function () {
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (typeClosure$T, isT) {
      return function ($receiver) {
        var T_0 = typeClosure$T;
        var tmp$;
        return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
      };
    };
  });
  var encode$lambda$lambda = wrapFunction(function () {
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    return function (closure$it, typeClosure$T, isT) {
      return function ($receiver) {
        var T_0 = typeClosure$T;
        var $receiver_0 = closure$it;
        var tmp$;
        try {
          var tmp$_0;
          tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$ = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_1 = tmp$;
        var tmp$_1, tmp$_0_0;
        var exception = $receiver_1.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
        else {
          var tmp$_2, tmp$_3;
          if (Kotlin.isType($receiver_0, Map))
            tmp$_2 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType($receiver_0, List))
            tmp$_2 = new FirebaseListSerializer_init();
          else if (Kotlin.isType($receiver_0, Set))
            tmp$_2 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
        return Unit;
      };
    };
  });
  var encode$lambda = wrapFunction(function () {
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
      return function (it) {
        var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
        var typeClosure$T_0 = typeClosure$T;
        var tmp$;
        try {
          var tmp$_0;
          tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$ = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_0 = tmp$;
        var tmp$_1, tmp$_0_0;
        var exception = $receiver_0.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
        else {
          var tmp$_2, tmp$_3;
          if (Kotlin.isType(it, Map))
            tmp$_2 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType(it, List))
            tmp$_2 = new FirebaseListSerializer_init();
          else if (Kotlin.isType(it, Set))
            tmp$_2 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
        return $receiver.value;
      };
    };
  });
  var firebaseSerializer$lambda_0 = wrapFunction(function () {
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (typeClosure$T, isT) {
      return function ($receiver) {
        var T_0 = typeClosure$T;
        var tmp$;
        return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
      };
    };
  });
  var encode$lambda$lambda_0 = wrapFunction(function () {
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    return function (closure$it, typeClosure$T, isT) {
      return function ($receiver) {
        var T_0 = typeClosure$T;
        var $receiver_0 = closure$it;
        var tmp$;
        try {
          var tmp$_0;
          tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$ = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_1 = tmp$;
        var tmp$_1, tmp$_0_0;
        var exception = $receiver_1.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
        else {
          var tmp$_2, tmp$_3;
          if (Kotlin.isType($receiver_0, Map))
            tmp$_2 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType($receiver_0, List))
            tmp$_2 = new FirebaseListSerializer_init();
          else if (Kotlin.isType($receiver_0, Set))
            tmp$_2 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
        return Unit;
      };
    };
  });
  var encode$lambda_0 = wrapFunction(function () {
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
      return function (it) {
        var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
        var typeClosure$T_0 = typeClosure$T;
        var tmp$;
        try {
          var tmp$_0;
          tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$ = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_0 = tmp$;
        var tmp$_1, tmp$_0_0;
        var exception = $receiver_0.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
        else {
          var tmp$_2, tmp$_3;
          if (Kotlin.isType(it, Map))
            tmp$_2 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType(it, List))
            tmp$_2 = new FirebaseListSerializer_init();
          else if (Kotlin.isType(it, Set))
            tmp$_2 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
        return $receiver.value;
      };
    };
  });
  var DocumentReference$set$lambda = wrapFunction(function () {
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var FirebaseEncoder_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseEncoder;
    var Unit_0 = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit_0;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    return function (closure$data, closure$encodeDefaults, typeClosure$T, isT, closure$merge, closure$continuation) {
      return function ($receiver) {
        var tmp$ = $receiver.js;
        var T_0 = typeClosure$T;
        var value = closure$data;
        var shouldEncodeElementDefault = closure$encodeDefaults;
        var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_0;
        if (value != null) {
          var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
          var tmp$_0_0;
          try {
            var tmp$_1;
            tmp$_0_0 = new Result(Kotlin.isType(tmp$_1 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_0 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0_0 = tmp$_0_0;
          var tmp$_2, tmp$_0_0_0;
          var exception = $receiver_0_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
          else {
            var tmp$_3, tmp$_4;
            if (Kotlin.isType(value, Map))
              tmp$_3 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(value, List))
              tmp$_3 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(value, Set))
              tmp$_3 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
          }
          $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
          tmp$_0 = $receiver_0.value;
        } else
          tmp$_0 = null;
        await_0(tmp$.set(ensureNotNull(tmp$_0), json([to('merge', closure$merge)])), closure$continuation);
        return Unit;
      };
    };
  });
  var firebaseSerializer$lambda_1 = wrapFunction(function () {
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (typeClosure$T, isT) {
      return function ($receiver) {
        var T_0 = typeClosure$T;
        var tmp$;
        return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
      };
    };
  });
  var encode$lambda$lambda_1 = wrapFunction(function () {
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    return function (closure$it, typeClosure$T, isT) {
      return function ($receiver) {
        var T_0 = typeClosure$T;
        var $receiver_0 = closure$it;
        var tmp$;
        try {
          var tmp$_0;
          tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$ = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_1 = tmp$;
        var tmp$_1, tmp$_0_0;
        var exception = $receiver_1.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
        else {
          var tmp$_2, tmp$_3;
          if (Kotlin.isType($receiver_0, Map))
            tmp$_2 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType($receiver_0, List))
            tmp$_2 = new FirebaseListSerializer_init();
          else if (Kotlin.isType($receiver_0, Set))
            tmp$_2 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
        return Unit;
      };
    };
  });
  var encode$lambda_1 = wrapFunction(function () {
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
      return function (it) {
        var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
        var typeClosure$T_0 = typeClosure$T;
        var tmp$;
        try {
          var tmp$_0;
          tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$ = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_0 = tmp$;
        var tmp$_1, tmp$_0_0;
        var exception = $receiver_0.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
        else {
          var tmp$_2, tmp$_3;
          if (Kotlin.isType(it, Map))
            tmp$_2 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType(it, List))
            tmp$_2 = new FirebaseListSerializer_init();
          else if (Kotlin.isType(it, Set))
            tmp$_2 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
        return $receiver.value;
      };
    };
  });
  var DocumentReference$set$lambda_0 = wrapFunction(function () {
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var FirebaseEncoder_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseEncoder;
    var Unit_0 = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit_0;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    return function (closure$data, closure$encodeDefaults, typeClosure$T, isT, closure$mergeFields, closure$continuation) {
      return function ($receiver) {
        var tmp$ = $receiver.js;
        var T_0 = typeClosure$T;
        var value = closure$data;
        var shouldEncodeElementDefault = closure$encodeDefaults;
        var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_0;
        if (value != null) {
          var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
          var tmp$_0_0;
          try {
            var tmp$_1;
            tmp$_0_0 = new Result(Kotlin.isType(tmp$_1 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_0 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0_0 = tmp$_0_0;
          var tmp$_2, tmp$_0_0_0;
          var exception = $receiver_0_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
          else {
            var tmp$_3, tmp$_4;
            if (Kotlin.isType(value, Map))
              tmp$_3 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(value, List))
              tmp$_3 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(value, Set))
              tmp$_3 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
          }
          $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
          tmp$_0 = $receiver_0.value;
        } else
          tmp$_0 = null;
        await_0(tmp$.set(ensureNotNull(tmp$_0), json([to('mergeFields', closure$mergeFields)])), closure$continuation);
        return Unit;
      };
    };
  });
  var firebaseSerializer$lambda_2 = wrapFunction(function () {
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (typeClosure$T, isT) {
      return function ($receiver) {
        var T_0 = typeClosure$T;
        var tmp$;
        return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
      };
    };
  });
  var encode$lambda$lambda_2 = wrapFunction(function () {
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    return function (closure$it, typeClosure$T, isT) {
      return function ($receiver) {
        var T_0 = typeClosure$T;
        var $receiver_0 = closure$it;
        var tmp$;
        try {
          var tmp$_0;
          tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$ = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_1 = tmp$;
        var tmp$_1, tmp$_0_0;
        var exception = $receiver_1.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
        else {
          var tmp$_2, tmp$_3;
          if (Kotlin.isType($receiver_0, Map))
            tmp$_2 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType($receiver_0, List))
            tmp$_2 = new FirebaseListSerializer_init();
          else if (Kotlin.isType($receiver_0, Set))
            tmp$_2 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
        return Unit;
      };
    };
  });
  var encode$lambda_2 = wrapFunction(function () {
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
      return function (it) {
        var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
        var typeClosure$T_0 = typeClosure$T;
        var tmp$;
        try {
          var tmp$_0;
          tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$ = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_0 = tmp$;
        var tmp$_1, tmp$_0_0;
        var exception = $receiver_0.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
        else {
          var tmp$_2, tmp$_3;
          if (Kotlin.isType(it, Map))
            tmp$_2 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType(it, List))
            tmp$_2 = new FirebaseListSerializer_init();
          else if (Kotlin.isType(it, Set))
            tmp$_2 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
        return $receiver.value;
      };
    };
  });
  var DocumentReference$set$lambda_1 = wrapFunction(function () {
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var FirebaseEncoder_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseEncoder;
    var Unit_0 = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var copyToArray = Kotlin.kotlin.collections.copyToArray;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit_0;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    return function (closure$data, closure$encodeDefaults, typeClosure$T, isT, closure$mergeFieldPaths, closure$continuation) {
      return function ($receiver) {
        var tmp$ = $receiver.js;
        var T_0 = typeClosure$T;
        var value = closure$data;
        var shouldEncodeElementDefault = closure$encodeDefaults;
        var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_0;
        if (value != null) {
          var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
          var tmp$_0_0;
          try {
            var tmp$_1;
            tmp$_0_0 = new Result(Kotlin.isType(tmp$_1 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_0 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0_0 = tmp$_0_0;
          var tmp$_2, tmp$_0_0_0;
          var exception = $receiver_0_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
          else {
            var tmp$_3, tmp$_4;
            if (Kotlin.isType(value, Map))
              tmp$_3 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(value, List))
              tmp$_3 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(value, Set))
              tmp$_3 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
          }
          $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
          tmp$_0 = $receiver_0.value;
        } else
          tmp$_0 = null;
        var tmp$_5 = ensureNotNull(tmp$_0);
        var $receiver_1 = closure$mergeFieldPaths;
        var destination = ArrayList_init($receiver_1.length);
        var tmp$_6;
        for (tmp$_6 = 0; tmp$_6 !== $receiver_1.length; ++tmp$_6) {
          var item = $receiver_1[tmp$_6];
          destination.add_11rb$(item.js);
        }
        await_0(tmp$.set(tmp$_5, json([to('mergeFields', copyToArray(destination))])), closure$continuation);
        return Unit;
      };
    };
  });
  var firebaseSerializer$lambda_3 = wrapFunction(function () {
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (typeClosure$T, isT) {
      return function ($receiver) {
        var T_0 = typeClosure$T;
        var tmp$;
        return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
      };
    };
  });
  var encode$lambda$lambda_3 = wrapFunction(function () {
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    return function (closure$it, typeClosure$T, isT) {
      return function ($receiver) {
        var T_0 = typeClosure$T;
        var $receiver_0 = closure$it;
        var tmp$;
        try {
          var tmp$_0;
          tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$ = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_1 = tmp$;
        var tmp$_1, tmp$_0_0;
        var exception = $receiver_1.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
        else {
          var tmp$_2, tmp$_3;
          if (Kotlin.isType($receiver_0, Map))
            tmp$_2 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType($receiver_0, List))
            tmp$_2 = new FirebaseListSerializer_init();
          else if (Kotlin.isType($receiver_0, Set))
            tmp$_2 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
        return Unit;
      };
    };
  });
  var encode$lambda_3 = wrapFunction(function () {
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
      return function (it) {
        var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
        var typeClosure$T_0 = typeClosure$T;
        var tmp$;
        try {
          var tmp$_0;
          tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$ = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_0 = tmp$;
        var tmp$_1, tmp$_0_0;
        var exception = $receiver_0.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
        else {
          var tmp$_2, tmp$_3;
          if (Kotlin.isType(it, Map))
            tmp$_2 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType(it, List))
            tmp$_2 = new FirebaseListSerializer_init();
          else if (Kotlin.isType(it, Set))
            tmp$_2 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
        return $receiver.value;
      };
    };
  });
  var DocumentReference$update$lambda = wrapFunction(function () {
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var FirebaseEncoder_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseEncoder;
    var Unit_0 = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit_0;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    return function (closure$data, closure$encodeDefaults, typeClosure$T, isT, closure$continuation) {
      return function ($receiver) {
        var tmp$ = $receiver.js;
        var T_0 = typeClosure$T;
        var value = closure$data;
        var shouldEncodeElementDefault = closure$encodeDefaults;
        var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_0;
        if (value != null) {
          var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
          var tmp$_0_0;
          try {
            var tmp$_1;
            tmp$_0_0 = new Result(Kotlin.isType(tmp$_1 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_0 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0_0 = tmp$_0_0;
          var tmp$_2, tmp$_0_0_0;
          var exception = $receiver_0_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
          else {
            var tmp$_3, tmp$_4;
            if (Kotlin.isType(value, Map))
              tmp$_3 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(value, List))
              tmp$_3 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(value, Set))
              tmp$_3 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
          }
          $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
          tmp$_0 = $receiver_0.value;
        } else
          tmp$_0 = null;
        await_0(tmp$.update(ensureNotNull(tmp$_0)), closure$continuation);
        return Unit;
      };
    };
  });
  var firebaseSerializer$lambda_4 = wrapFunction(function () {
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (typeClosure$T, isT) {
      return function ($receiver) {
        var T_0 = typeClosure$T;
        var tmp$;
        return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
      };
    };
  });
  var encode$lambda$lambda_4 = wrapFunction(function () {
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    return function (closure$it, typeClosure$T, isT) {
      return function ($receiver) {
        var T_0 = typeClosure$T;
        var $receiver_0 = closure$it;
        var tmp$;
        try {
          var tmp$_0;
          tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$ = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_1 = tmp$;
        var tmp$_1, tmp$_0_0;
        var exception = $receiver_1.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
        else {
          var tmp$_2, tmp$_3;
          if (Kotlin.isType($receiver_0, Map))
            tmp$_2 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType($receiver_0, List))
            tmp$_2 = new FirebaseListSerializer_init();
          else if (Kotlin.isType($receiver_0, Set))
            tmp$_2 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
        return Unit;
      };
    };
  });
  var encode$lambda_4 = wrapFunction(function () {
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
      return function (it) {
        var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
        var typeClosure$T_0 = typeClosure$T;
        var tmp$;
        try {
          var tmp$_0;
          tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$ = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_0 = tmp$;
        var tmp$_1, tmp$_0_0;
        var exception = $receiver_0.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
        else {
          var tmp$_2, tmp$_3;
          if (Kotlin.isType(it, Map))
            tmp$_2 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType(it, List))
            tmp$_2 = new FirebaseListSerializer_init();
          else if (Kotlin.isType(it, Set))
            tmp$_2 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
        return $receiver.value;
      };
    };
  });
  var CollectionReference$add$lambda = wrapFunction(function () {
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
    var FirebaseEncoder_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseEncoder;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = $module$firebase_kotlin_sdk_firebase_common.dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = $module$firebase_kotlin_sdk_firebase_common.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    return function (closure$data, closure$encodeDefaults, typeClosure$T, isT, closure$continuation) {
      return function ($receiver) {
        var tmp$ = $receiver.js;
        var T_0 = typeClosure$T;
        var value = closure$data;
        var shouldEncodeElementDefault = closure$encodeDefaults;
        var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_0;
        if (value != null) {
          var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
          var tmp$_0_0;
          try {
            var tmp$_1;
            tmp$_0_0 = new Result(Kotlin.isType(tmp$_1 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_0 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0_0 = tmp$_0_0;
          var tmp$_2, tmp$_0_0_0;
          var exception = $receiver_0_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
          else {
            var tmp$_3, tmp$_4;
            if (Kotlin.isType(value, Map))
              tmp$_3 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(value, List))
              tmp$_3 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(value, Set))
              tmp$_3 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
          }
          $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
          tmp$_0 = $receiver_0.value;
        } else
          tmp$_0 = null;
        await_0(tmp$.add(ensureNotNull(tmp$_0)), closure$continuation);
        return new DocumentReference(closure$continuation.$$coroutineResult$$);
      };
    };
  });
  var decode_0 = defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.decode_tpy1pm$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var DeserializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.DeserializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var decode = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.decode_k6f162$;
    var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    function decode$lambda(it) {
      return null;
    }
    function decode$lambda_0(it) {
      var tmp$, tmp$_0;
      return typeof (tmp$_0 = ((tmp$ = it.toMillis != undefined ? it : null) != null ? tmp$ : null).toMillis()) === 'number' ? tmp$_0 : null;
    }
    return function (T_0, isT, value) {
      var tmp$;
      var tmp$_0;
      var strategy = Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_0 : throwCCE();
      return decode(Kotlin.isType(tmp$ = strategy, DeserializationStrategy) ? tmp$ : throwCCE(), value, decode$lambda_0);
    };
  }));
  function decode$lambda(it) {
    var tmp$, tmp$_0;
    return typeof (tmp$_0 = ((tmp$ = it.toMillis != undefined ? it : null) != null ? tmp$ : null).toMillis()) === 'number' ? tmp$_0 : null;
  }
  function decode_1(strategy, value) {
    return decode(strategy, value, decode$lambda);
  }
  var encode_0 = defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.encode_tpci5x$', wrapFunction(function () {
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    return function (T_0, isT, value, shouldEncodeElementDefault) {
      var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
      var tmp$;
      if (value != null) {
        var $receiver = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
        var tmp$_0;
        try {
          var tmp$_1;
          tmp$_0 = new Result(Kotlin.isType(tmp$_1 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_1 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$_0 = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_0 = tmp$_0;
        var tmp$_2, tmp$_0_0;
        var exception = $receiver_0.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_2 = $receiver_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
        else {
          var tmp$_3, tmp$_4;
          if (Kotlin.isType(value, Map))
            tmp$_3 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType(value, List))
            tmp$_3 = new FirebaseListSerializer_init();
          else if (Kotlin.isType(value, Set))
            tmp$_3 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, value);
        tmp$ = $receiver.value;
      } else
        tmp$ = null;
      return tmp$;
    };
  }));
  function encode_1(strategy, value, shouldEncodeElementDefault) {
    return encode(strategy, value, shouldEncodeElementDefault, firebase$firestore$FieldValue$Companion.serverTimestamp());
  }
  function get_firestore($receiver) {
    var rethrow$result;
    try {
      $module$firebase_firestore;
      rethrow$result = new FirebaseFirestore(firebase.firestore());
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  }
  function firestore($receiver, app) {
    var rethrow$result;
    try {
      $module$firebase_firestore;
      rethrow$result = new FirebaseFirestore(firebase.app().firestore());
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  }
  function FirebaseFirestore(js) {
    this.js = js;
  }
  FirebaseFirestore.prototype.collection_61zpoe$ = function (collectionPath) {
    var rethrow$result;
    try {
      rethrow$result = new CollectionReference(this.js.collection(collectionPath));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  FirebaseFirestore.prototype.document_61zpoe$ = function (documentPath) {
    var rethrow$result;
    try {
      rethrow$result = new DocumentReference(this.js.doc(documentPath));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  FirebaseFirestore.prototype.batch = function () {
    var rethrow$result;
    try {
      rethrow$result = new WriteBatch(this.js.batch());
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  FirebaseFirestore.prototype.setLoggingEnabled_6taknv$ = function (loggingEnabled) {
    try {
      firebase$firestore.setLogLevel(loggingEnabled ? 'error' : 'silent');
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
  };
  function Coroutine$FirebaseFirestore$runTransaction$lambda$lambda$lambda(closure$it_0, closure$func_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$closure$func = closure$func_0;
  }
  Coroutine$FirebaseFirestore$runTransaction$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FirebaseFirestore$runTransaction$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FirebaseFirestore$runTransaction$lambda$lambda$lambda.prototype.constructor = Coroutine$FirebaseFirestore$runTransaction$lambda$lambda$lambda;
  Coroutine$FirebaseFirestore$runTransaction$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$func(new Transaction(this.local$closure$it), this);
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
  function FirebaseFirestore$runTransaction$lambda$lambda$lambda(closure$it_0, closure$func_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FirebaseFirestore$runTransaction$lambda$lambda$lambda(closure$it_0, closure$func_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FirebaseFirestore$runTransaction$lambda$lambda(closure$func) {
    return function (it) {
      return promise(coroutines.GlobalScope, void 0, void 0, FirebaseFirestore$runTransaction$lambda$lambda$lambda(it, closure$func));
    };
  }
  function Coroutine$runTransaction_fxv4yh$($this, func_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$func = func_0;
  }
  Coroutine$runTransaction_fxv4yh$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runTransaction_fxv4yh$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runTransaction_fxv4yh$.prototype.constructor = Coroutine$runTransaction_fxv4yh$;
  Coroutine$runTransaction_fxv4yh$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.runTransaction(FirebaseFirestore$runTransaction$lambda$lambda(this.local$func)), this);
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
  FirebaseFirestore.prototype.runTransaction_fxv4yh$ = function (func_0, continuation_0, suspended) {
    var instance = new Coroutine$runTransaction_fxv4yh$(this, func_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$clearPersistence($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
  }
  Coroutine$clearPersistence.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$clearPersistence.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$clearPersistence.prototype.constructor = Coroutine$clearPersistence;
  Coroutine$clearPersistence.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.clearPersistence(), this);
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
  FirebaseFirestore.prototype.clearPersistence = function (continuation_0, suspended) {
    var instance = new Coroutine$clearPersistence(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  FirebaseFirestore.prototype.useEmulator_bm4lxs$ = function (host, port) {
    try {
      this.js.useEmulator(host, port);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
  };
  FirebaseFirestore.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseFirestore',
    interfaces: []
  };
  function WriteBatch(js) {
    this.js = js;
  }
  WriteBatch.prototype.set_2alfkj$ = defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.WriteBatch.set_2alfkj$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var ensureNotNull = Kotlin.ensureNotNull;
    var to = Kotlin.kotlin.to_ujzrz7$;
    var json = Kotlin.kotlin.js.json_pyyo18$;
    var wrapFunction = Kotlin.wrapFunction;
    var Exception = Kotlin.kotlin.Exception;
    var errorToException = _.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
    var Unit = Kotlin.kotlin.Unit;
    var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    var WriteBatch$set$lambda = wrapFunction(function () {
      var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
      var Unit = Kotlin.kotlin.Unit;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      var encode$lambda$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$it, typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var $receiver_0 = closure$it;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_1 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_1.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType($receiver_0, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType($receiver_0, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType($receiver_0, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
            return Unit;
          };
        };
      });
      var encode$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
          return function (it) {
            var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
            var typeClosure$T_0 = typeClosure$T;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType(it, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(it, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(it, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
            return $receiver.value;
          };
        };
      });
      return function (closure$documentRef, closure$data, closure$encodeDefaults, typeClosure$T, isT, closure$merge) {
        return function ($receiver) {
          var tmp$ = $receiver.js;
          var tmp$_0 = closure$documentRef.js;
          var T_0 = typeClosure$T;
          var value = closure$data;
          var shouldEncodeElementDefault = closure$encodeDefaults;
          var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
          var tmp$_1;
          if (value != null) {
            var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
            var tmp$_0_0;
            try {
              var tmp$_1_0;
              tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$_0_0 = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0_0 = tmp$_0_0;
            var tmp$_2, tmp$_0_0_0;
            var exception = $receiver_0_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            else {
              var tmp$_3, tmp$_4;
              if (Kotlin.isType(value, Map))
                tmp$_3 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(value, List))
                tmp$_3 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(value, Set))
                tmp$_3 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
            }
            $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
            tmp$_1 = $receiver_0.value;
          } else
            tmp$_1 = null;
          return tmp$.set(tmp$_0, ensureNotNull(tmp$_1), json([to('merge', closure$merge)]));
        };
      };
    });
    return function (T_0, isT, documentRef, data, encodeDefaults, merge) {
      if (encodeDefaults === void 0)
        encodeDefaults = true;
      if (merge === void 0)
        merge = false;
      try {
        var tmp$ = this.js;
        var tmp$_0 = documentRef.js;
        var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_1;
        if (data != null) {
          var $receiver = new FirebaseEncoder_init(encodeDefaults, positiveInfinity);
          var tmp$_0_0;
          try {
            var tmp$_1_0;
            tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_0 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$_0_0;
          var tmp$_2, tmp$_0_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0_0 = (tmp$_2 = $receiver_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
          else {
            var tmp$_3, tmp$_4;
            if (Kotlin.isType(data, Map))
              tmp$_3 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(data, List))
              tmp$_3 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(data, Set))
              tmp$_3 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0_0, data);
          tmp$_1 = $receiver.value;
        } else
          tmp$_1 = null;
        tmp$.set(tmp$_0, ensureNotNull(tmp$_1), json([to('merge', merge)]));
      } catch (e_0) {
        if (Kotlin.isType(e_0, Exception)) {
          throw e_0;
        } else {
          throw errorToException(e_0);
        }
      }
      return this;
    };
  }));
  WriteBatch.prototype.set_nm9j5$ = defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.WriteBatch.set_nm9j5$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var ensureNotNull = Kotlin.ensureNotNull;
    var to = Kotlin.kotlin.to_ujzrz7$;
    var json = Kotlin.kotlin.js.json_pyyo18$;
    var wrapFunction = Kotlin.wrapFunction;
    var Exception = Kotlin.kotlin.Exception;
    var errorToException = _.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
    var Unit = Kotlin.kotlin.Unit;
    var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    var WriteBatch$set$lambda = wrapFunction(function () {
      var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
      var Unit = Kotlin.kotlin.Unit;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      var encode$lambda$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$it, typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var $receiver_0 = closure$it;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_1 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_1.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType($receiver_0, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType($receiver_0, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType($receiver_0, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
            return Unit;
          };
        };
      });
      var encode$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
          return function (it) {
            var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
            var typeClosure$T_0 = typeClosure$T;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType(it, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(it, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(it, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
            return $receiver.value;
          };
        };
      });
      return function (closure$documentRef, closure$data, closure$encodeDefaults, typeClosure$T, isT, closure$mergeFields) {
        return function ($receiver) {
          var tmp$ = $receiver.js;
          var tmp$_0 = closure$documentRef.js;
          var T_0 = typeClosure$T;
          var value = closure$data;
          var shouldEncodeElementDefault = closure$encodeDefaults;
          var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
          var tmp$_1;
          if (value != null) {
            var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
            var tmp$_0_0;
            try {
              var tmp$_1_0;
              tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$_0_0 = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0_0 = tmp$_0_0;
            var tmp$_2, tmp$_0_0_0;
            var exception = $receiver_0_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            else {
              var tmp$_3, tmp$_4;
              if (Kotlin.isType(value, Map))
                tmp$_3 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(value, List))
                tmp$_3 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(value, Set))
                tmp$_3 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
            }
            $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
            tmp$_1 = $receiver_0.value;
          } else
            tmp$_1 = null;
          return tmp$.set(tmp$_0, ensureNotNull(tmp$_1), json([to('mergeFields', closure$mergeFields)]));
        };
      };
    });
    return function (T_0, isT, documentRef, data, encodeDefaults, mergeFields) {
      if (encodeDefaults === void 0)
        encodeDefaults = true;
      try {
        var tmp$ = this.js;
        var tmp$_0 = documentRef.js;
        var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_1;
        if (data != null) {
          var $receiver = new FirebaseEncoder_init(encodeDefaults, positiveInfinity);
          var tmp$_0_0;
          try {
            var tmp$_1_0;
            tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_0 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$_0_0;
          var tmp$_2, tmp$_0_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0_0 = (tmp$_2 = $receiver_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
          else {
            var tmp$_3, tmp$_4;
            if (Kotlin.isType(data, Map))
              tmp$_3 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(data, List))
              tmp$_3 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(data, Set))
              tmp$_3 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0_0, data);
          tmp$_1 = $receiver.value;
        } else
          tmp$_1 = null;
        tmp$.set(tmp$_0, ensureNotNull(tmp$_1), json([to('mergeFields', mergeFields)]));
      } catch (e_0) {
        if (Kotlin.isType(e_0, Exception)) {
          throw e_0;
        } else {
          throw errorToException(e_0);
        }
      }
      return this;
    };
  }));
  WriteBatch.prototype.set_cbar9v$ = defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.WriteBatch.set_cbar9v$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var ensureNotNull = Kotlin.ensureNotNull;
    var wrapFunction = Kotlin.wrapFunction;
    var to = Kotlin.kotlin.to_ujzrz7$;
    var json = Kotlin.kotlin.js.json_pyyo18$;
    var Exception = Kotlin.kotlin.Exception;
    var errorToException = _.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
    var Unit = Kotlin.kotlin.Unit;
    var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var copyToArray = Kotlin.kotlin.collections.copyToArray;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    var WriteBatch$set$lambda = wrapFunction(function () {
      var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
      var Unit = Kotlin.kotlin.Unit;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
      var copyToArray = Kotlin.kotlin.collections.copyToArray;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      var encode$lambda$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$it, typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var $receiver_0 = closure$it;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_1 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_1.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType($receiver_0, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType($receiver_0, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType($receiver_0, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
            return Unit;
          };
        };
      });
      var encode$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
          return function (it) {
            var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
            var typeClosure$T_0 = typeClosure$T;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType(it, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(it, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(it, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
            return $receiver.value;
          };
        };
      });
      return function (closure$documentRef, closure$data, closure$encodeDefaults, typeClosure$T, isT, closure$mergeFieldPaths) {
        return function ($receiver) {
          var tmp$ = $receiver.js;
          var tmp$_0 = closure$documentRef.js;
          var T_0 = typeClosure$T;
          var value = closure$data;
          var shouldEncodeElementDefault = closure$encodeDefaults;
          var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
          var tmp$_1;
          if (value != null) {
            var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
            var tmp$_0_0;
            try {
              var tmp$_1_0;
              tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$_0_0 = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0_0 = tmp$_0_0;
            var tmp$_2, tmp$_0_0_0;
            var exception = $receiver_0_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            else {
              var tmp$_3, tmp$_4;
              if (Kotlin.isType(value, Map))
                tmp$_3 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(value, List))
                tmp$_3 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(value, Set))
                tmp$_3 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
            }
            $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
            tmp$_1 = $receiver_0.value;
          } else
            tmp$_1 = null;
          var tmp$_5 = ensureNotNull(tmp$_1);
          var $receiver_1 = closure$mergeFieldPaths;
          var destination = ArrayList_init($receiver_1.length);
          var tmp$_6;
          for (tmp$_6 = 0; tmp$_6 !== $receiver_1.length; ++tmp$_6) {
            var item = $receiver_1[tmp$_6];
            destination.add_11rb$(item.js);
          }
          return tmp$.set(tmp$_0, tmp$_5, json([to('mergeFields', copyToArray(destination))]));
        };
      };
    });
    return function (T_0, isT, documentRef, data, encodeDefaults, mergeFieldPaths) {
      if (encodeDefaults === void 0)
        encodeDefaults = true;
      try {
        var tmp$ = this.js;
        var tmp$_0 = documentRef.js;
        var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_1;
        if (data != null) {
          var $receiver = new FirebaseEncoder_init(encodeDefaults, positiveInfinity);
          var tmp$_0_0;
          try {
            var tmp$_1_0;
            tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_0 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$_0_0;
          var tmp$_2, tmp$_0_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0_0 = (tmp$_2 = $receiver_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
          else {
            var tmp$_3, tmp$_4;
            if (Kotlin.isType(data, Map))
              tmp$_3 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(data, List))
              tmp$_3 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(data, Set))
              tmp$_3 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0_0, data);
          tmp$_1 = $receiver.value;
        } else
          tmp$_1 = null;
        var tmp$_5 = ensureNotNull(tmp$_1);
        var destination = ArrayList_init(mergeFieldPaths.length);
        var tmp$_6;
        for (tmp$_6 = 0; tmp$_6 !== mergeFieldPaths.length; ++tmp$_6) {
          var item = mergeFieldPaths[tmp$_6];
          destination.add_11rb$(item.js);
        }
        tmp$.set(tmp$_0, tmp$_5, json([to('mergeFields', copyToArray(destination))]));
      } catch (e_0) {
        if (Kotlin.isType(e_0, Exception)) {
          throw e_0;
        } else {
          throw errorToException(e_0);
        }
      }
      return this;
    };
  }));
  WriteBatch.prototype.set_58mzr2$ = function (documentRef, strategy, data, encodeDefaults, merge) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    if (merge === void 0)
      merge = false;
    try {
      this.js.set(documentRef.js, ensureNotNull(encode_1(strategy, data, encodeDefaults)), json([to('merge', merge)]));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return this;
  };
  WriteBatch.prototype.set_7upgcq$ = function (documentRef, strategy, data, encodeDefaults, mergeFields) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    try {
      this.js.set(documentRef.js, ensureNotNull(encode_1(strategy, data, encodeDefaults)), json([to('mergeFields', mergeFields)]));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return this;
  };
  WriteBatch.prototype.set_4ncd32$ = function (documentRef, strategy, data, encodeDefaults, mergeFieldPaths) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    try {
      var tmp$ = this.js;
      var tmp$_0 = documentRef.js;
      var tmp$_1 = ensureNotNull(encode_1(strategy, data, encodeDefaults));
      var destination = ArrayList_init(mergeFieldPaths.length);
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== mergeFieldPaths.length; ++tmp$_2) {
        var item = mergeFieldPaths[tmp$_2];
        destination.add_11rb$(item.js);
      }
      tmp$.set(tmp$_0, tmp$_1, json([to('mergeFields', copyToArray(destination))]));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return this;
  };
  WriteBatch.prototype.update_vjkhmg$ = defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.WriteBatch.update_vjkhmg$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var ensureNotNull = Kotlin.ensureNotNull;
    var wrapFunction = Kotlin.wrapFunction;
    var Exception = Kotlin.kotlin.Exception;
    var errorToException = _.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
    var Unit = Kotlin.kotlin.Unit;
    var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    var WriteBatch$update$lambda = wrapFunction(function () {
      var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
      var Unit = Kotlin.kotlin.Unit;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      var encode$lambda$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$it, typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var $receiver_0 = closure$it;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_1 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_1.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType($receiver_0, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType($receiver_0, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType($receiver_0, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
            return Unit;
          };
        };
      });
      var encode$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
          return function (it) {
            var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
            var typeClosure$T_0 = typeClosure$T;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType(it, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(it, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(it, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
            return $receiver.value;
          };
        };
      });
      return function (closure$documentRef, closure$data, closure$encodeDefaults, typeClosure$T, isT) {
        return function ($receiver) {
          var tmp$ = $receiver.js;
          var tmp$_0 = closure$documentRef.js;
          var T_0 = typeClosure$T;
          var value = closure$data;
          var shouldEncodeElementDefault = closure$encodeDefaults;
          var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
          var tmp$_1;
          if (value != null) {
            var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
            var tmp$_0_0;
            try {
              var tmp$_1_0;
              tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$_0_0 = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0_0 = tmp$_0_0;
            var tmp$_2, tmp$_0_0_0;
            var exception = $receiver_0_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            else {
              var tmp$_3, tmp$_4;
              if (Kotlin.isType(value, Map))
                tmp$_3 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(value, List))
                tmp$_3 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(value, Set))
                tmp$_3 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
            }
            $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
            tmp$_1 = $receiver_0.value;
          } else
            tmp$_1 = null;
          return tmp$.update(tmp$_0, ensureNotNull(tmp$_1));
        };
      };
    });
    return function (T_0, isT, documentRef, data, encodeDefaults) {
      if (encodeDefaults === void 0)
        encodeDefaults = true;
      try {
        var tmp$ = this.js;
        var tmp$_0 = documentRef.js;
        var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_1;
        if (data != null) {
          var $receiver = new FirebaseEncoder_init(encodeDefaults, positiveInfinity);
          var tmp$_0_0;
          try {
            var tmp$_1_0;
            tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_0 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$_0_0;
          var tmp$_2, tmp$_0_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0_0 = (tmp$_2 = $receiver_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
          else {
            var tmp$_3, tmp$_4;
            if (Kotlin.isType(data, Map))
              tmp$_3 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(data, List))
              tmp$_3 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(data, Set))
              tmp$_3 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0_0, data);
          tmp$_1 = $receiver.value;
        } else
          tmp$_1 = null;
        tmp$.update(tmp$_0, ensureNotNull(tmp$_1));
      } catch (e_0) {
        if (Kotlin.isType(e_0, Exception)) {
          throw e_0;
        } else {
          throw errorToException(e_0);
        }
      }
      return this;
    };
  }));
  WriteBatch.prototype.update_wqw9xf$ = function (documentRef, strategy, data, encodeDefaults) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    try {
      this.js.update(documentRef.js, ensureNotNull(encode_1(strategy, data, encodeDefaults)));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return this;
  };
  WriteBatch.prototype.update_7xkg29$ = function (documentRef, fieldsAndValues) {
    try {
      var tmp$;
      var $receiver = this.js;
      if ((!(fieldsAndValues.length === 0) ? $receiver : null) != null) {
        var $receiver_0 = this.js;
        var tmp$_0 = (tmp$ = !(fieldsAndValues.length === 0) ? $receiver_0 : null).update;
        var tmp$_1 = [documentRef.js, fieldsAndValues[0].first, fieldsAndValues[0].second];
        var tmp$_2 = tmp$_1.concat;
        var $receiver_1 = drop(fieldsAndValues, 1);
        var destination = ArrayList_init_0();
        var tmp$_3;
        tmp$_3 = $receiver_1.iterator();
        while (tmp$_3.hasNext()) {
          var element = tmp$_3.next();
          var field = element.component1()
          , value = element.component2();
          var tmp$_4;
          if (value != null) {
            var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
            var tmp$_5;
            if (value != null) {
              var $receiver_2 = new FirebaseEncoder_init(true, positiveInfinity);
              var tmp$_0_0;
              try {
                var tmp$_1_0;
                tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(createKType(PrimitiveClasses$anyClass, [], false)), KSerializer) ? tmp$_1_0 : throwCCE());
              } catch (e) {
                if (Kotlin.isType(e, Throwable)) {
                  tmp$_0_0 = new Result(createFailure(e));
                } else
                  throw e;
              }
              var $receiver_0_0 = tmp$_0_0;
              var tmp$_2_0, tmp$_0_0_0;
              var exception = $receiver_0_0.exceptionOrNull();
              if (exception == null)
                tmp$_0_0_0 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
              else {
                var tmp$_3_0, tmp$_4_0;
                if (Kotlin.isType(value, Map))
                  tmp$_3_0 = new FirebaseMapSerializer_init();
                else if (Kotlin.isType(value, List))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else if (Kotlin.isType(value, Set))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else
                  throw exception;
                tmp$_0_0_0 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
              }
              $receiver_2.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
              tmp$_5 = $receiver_2.value;
            } else
              tmp$_5 = null;
            tmp$_4 = tmp$_5;
          } else
            tmp$_4 = null;
          var list = listOf([field, tmp$_4]);
          addAll(destination, list);
        }
        tmp$_0.apply(tmp$, tmp$_2.call(tmp$_1, copyToArray(destination)));
      }} catch (e_0) {
      if (Kotlin.isType(e_0, Exception)) {
        throw e_0;
      } else {
        throw errorToException(e_0);
      }
    }
    return this;
  };
  WriteBatch.prototype.update_9u0d7v$ = function (documentRef, fieldsAndValues) {
    try {
      var tmp$;
      var $receiver = this.js;
      if ((!(fieldsAndValues.length === 0) ? $receiver : null) != null) {
        var $receiver_0 = this.js;
        var tmp$_0 = (tmp$ = !(fieldsAndValues.length === 0) ? $receiver_0 : null).update;
        var tmp$_1 = [documentRef.js, fieldsAndValues[0].first.js, fieldsAndValues[0].second];
        var tmp$_2 = tmp$_1.concat;
        var destination = ArrayList_init_0();
        var tmp$_3;
        for (tmp$_3 = 0; tmp$_3 !== fieldsAndValues.length; ++tmp$_3) {
          var element = fieldsAndValues[tmp$_3];
          var field = element.component1()
          , value = element.component2();
          var tmp$_4 = field.js;
          var tmp$_5;
          if (value != null) {
            var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
            var tmp$_6;
            if (value != null) {
              var $receiver_1 = new FirebaseEncoder_init(true, positiveInfinity);
              var tmp$_0_0;
              try {
                var tmp$_1_0;
                tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(createKType(PrimitiveClasses$anyClass, [], false)), KSerializer) ? tmp$_1_0 : throwCCE());
              } catch (e) {
                if (Kotlin.isType(e, Throwable)) {
                  tmp$_0_0 = new Result(createFailure(e));
                } else
                  throw e;
              }
              var $receiver_0_0 = tmp$_0_0;
              var tmp$_2_0, tmp$_0_0_0;
              var exception = $receiver_0_0.exceptionOrNull();
              if (exception == null)
                tmp$_0_0_0 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
              else {
                var tmp$_3_0, tmp$_4_0;
                if (Kotlin.isType(value, Map))
                  tmp$_3_0 = new FirebaseMapSerializer_init();
                else if (Kotlin.isType(value, List))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else if (Kotlin.isType(value, Set))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else
                  throw exception;
                tmp$_0_0_0 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
              }
              $receiver_1.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
              tmp$_6 = $receiver_1.value;
            } else
              tmp$_6 = null;
            tmp$_5 = tmp$_6;
          } else
            tmp$_5 = null;
          var list = listOf([tmp$_4, tmp$_5]);
          addAll(destination, list);
        }
        tmp$_0.apply(tmp$, tmp$_2.call(tmp$_1, copyToArray(destination)));
      }} catch (e_0) {
      if (Kotlin.isType(e_0, Exception)) {
        throw e_0;
      } else {
        throw errorToException(e_0);
      }
    }
    return this;
  };
  WriteBatch.prototype.delete_6tbvch$ = function (documentRef) {
    try {
      this.js.delete(documentRef.js);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return this;
  };
  function Coroutine$commit($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
  }
  Coroutine$commit.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$commit.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$commit.prototype.constructor = Coroutine$commit;
  Coroutine$commit.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.commit(), this);
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
  WriteBatch.prototype.commit = function (continuation_0, suspended) {
    var instance = new Coroutine$commit(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  WriteBatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WriteBatch',
    interfaces: []
  };
  function Transaction(js) {
    this.js = js;
  }
  Transaction.prototype.set_2i4hx8$ = function (documentRef, data, encodeDefaults, merge) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    if (merge === void 0)
      merge = false;
    try {
      var tmp$ = this.js;
      var tmp$_0 = documentRef.js;
      var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
      var tmp$_1;
      if (data != null) {
        var $receiver = new FirebaseEncoder_init(encodeDefaults, positiveInfinity);
        var tmp$_0_0;
        try {
          var tmp$_1_0;
          tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(createKType(PrimitiveClasses$anyClass, [], false)), KSerializer) ? tmp$_1_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$_0_0 = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_0 = tmp$_0_0;
        var tmp$_2, tmp$_0_0_0;
        var exception = $receiver_0.exceptionOrNull();
        if (exception == null)
          tmp$_0_0_0 = (tmp$_2 = $receiver_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
        else {
          var tmp$_3, tmp$_4;
          if (Kotlin.isType(data, Map))
            tmp$_3 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType(data, List))
            tmp$_3 = new FirebaseListSerializer_init();
          else if (Kotlin.isType(data, Set))
            tmp$_3 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0_0, data);
        tmp$_1 = $receiver.value;
      } else
        tmp$_1 = null;
      tmp$.set(tmp$_0, ensureNotNull(tmp$_1), json([to('merge', merge)]));
    } catch (e_0) {
      if (Kotlin.isType(e_0, Exception)) {
        throw e_0;
      } else {
        throw errorToException(e_0);
      }
    }
    return this;
  };
  Transaction.prototype.set_ub7y78$ = function (documentRef, data, encodeDefaults, mergeFields) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    try {
      var tmp$ = this.js;
      var tmp$_0 = documentRef.js;
      var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
      var tmp$_1;
      if (data != null) {
        var $receiver = new FirebaseEncoder_init(encodeDefaults, positiveInfinity);
        var tmp$_0_0;
        try {
          var tmp$_1_0;
          tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(createKType(PrimitiveClasses$anyClass, [], false)), KSerializer) ? tmp$_1_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$_0_0 = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_0 = tmp$_0_0;
        var tmp$_2, tmp$_0_0_0;
        var exception = $receiver_0.exceptionOrNull();
        if (exception == null)
          tmp$_0_0_0 = (tmp$_2 = $receiver_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
        else {
          var tmp$_3, tmp$_4;
          if (Kotlin.isType(data, Map))
            tmp$_3 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType(data, List))
            tmp$_3 = new FirebaseListSerializer_init();
          else if (Kotlin.isType(data, Set))
            tmp$_3 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0_0, data);
        tmp$_1 = $receiver.value;
      } else
        tmp$_1 = null;
      tmp$.set(tmp$_0, ensureNotNull(tmp$_1), json([to('mergeFields', mergeFields)]));
    } catch (e_0) {
      if (Kotlin.isType(e_0, Exception)) {
        throw e_0;
      } else {
        throw errorToException(e_0);
      }
    }
    return this;
  };
  Transaction.prototype.set_ogltw$ = function (documentRef, data, encodeDefaults, mergeFieldPaths) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    try {
      var tmp$ = this.js;
      var tmp$_0 = documentRef.js;
      var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
      var tmp$_1;
      if (data != null) {
        var $receiver = new FirebaseEncoder_init(encodeDefaults, positiveInfinity);
        var tmp$_0_0;
        try {
          var tmp$_1_0;
          tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(createKType(PrimitiveClasses$anyClass, [], false)), KSerializer) ? tmp$_1_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$_0_0 = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_0 = tmp$_0_0;
        var tmp$_2, tmp$_0_0_0;
        var exception = $receiver_0.exceptionOrNull();
        if (exception == null)
          tmp$_0_0_0 = (tmp$_2 = $receiver_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
        else {
          var tmp$_3, tmp$_4;
          if (Kotlin.isType(data, Map))
            tmp$_3 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType(data, List))
            tmp$_3 = new FirebaseListSerializer_init();
          else if (Kotlin.isType(data, Set))
            tmp$_3 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0_0, data);
        tmp$_1 = $receiver.value;
      } else
        tmp$_1 = null;
      var tmp$_5 = ensureNotNull(tmp$_1);
      var destination = ArrayList_init(mergeFieldPaths.length);
      var tmp$_6;
      for (tmp$_6 = 0; tmp$_6 !== mergeFieldPaths.length; ++tmp$_6) {
        var item = mergeFieldPaths[tmp$_6];
        destination.add_11rb$(item.js);
      }
      tmp$.set(tmp$_0, tmp$_5, json([to('mergeFields', copyToArray(destination))]));
    } catch (e_0) {
      if (Kotlin.isType(e_0, Exception)) {
        throw e_0;
      } else {
        throw errorToException(e_0);
      }
    }
    return this;
  };
  Transaction.prototype.set_58mzr2$ = function (documentRef, strategy, data, encodeDefaults, merge) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    if (merge === void 0)
      merge = false;
    try {
      this.js.set(documentRef.js, ensureNotNull(encode_1(strategy, data, encodeDefaults)), json([to('merge', merge)]));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return this;
  };
  Transaction.prototype.set_7upgcq$ = function (documentRef, strategy, data, encodeDefaults, mergeFields) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    try {
      this.js.set(documentRef.js, ensureNotNull(encode_1(strategy, data, encodeDefaults)), json([to('mergeFields', mergeFields)]));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return this;
  };
  Transaction.prototype.set_4ncd32$ = function (documentRef, strategy, data, encodeDefaults, mergeFieldPaths) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    try {
      var tmp$ = this.js;
      var tmp$_0 = documentRef.js;
      var tmp$_1 = ensureNotNull(encode_1(strategy, data, encodeDefaults));
      var destination = ArrayList_init(mergeFieldPaths.length);
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== mergeFieldPaths.length; ++tmp$_2) {
        var item = mergeFieldPaths[tmp$_2];
        destination.add_11rb$(item.js);
      }
      tmp$.set(tmp$_0, tmp$_1, json([to('mergeFields', copyToArray(destination))]));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return this;
  };
  Transaction.prototype.update_gft49h$ = function (documentRef, data, encodeDefaults) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    try {
      var tmp$ = this.js;
      var tmp$_0 = documentRef.js;
      var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
      var tmp$_1;
      if (data != null) {
        var $receiver = new FirebaseEncoder_init(encodeDefaults, positiveInfinity);
        var tmp$_0_0;
        try {
          var tmp$_1_0;
          tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(createKType(PrimitiveClasses$anyClass, [], false)), KSerializer) ? tmp$_1_0 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$_0_0 = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver_0 = tmp$_0_0;
        var tmp$_2, tmp$_0_0_0;
        var exception = $receiver_0.exceptionOrNull();
        if (exception == null)
          tmp$_0_0_0 = (tmp$_2 = $receiver_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
        else {
          var tmp$_3, tmp$_4;
          if (Kotlin.isType(data, Map))
            tmp$_3 = new FirebaseMapSerializer_init();
          else if (Kotlin.isType(data, List))
            tmp$_3 = new FirebaseListSerializer_init();
          else if (Kotlin.isType(data, Set))
            tmp$_3 = new FirebaseListSerializer_init();
          else
            throw exception;
          tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
        }
        $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0_0, data);
        tmp$_1 = $receiver.value;
      } else
        tmp$_1 = null;
      tmp$.update(tmp$_0, ensureNotNull(tmp$_1));
    } catch (e_0) {
      if (Kotlin.isType(e_0, Exception)) {
        throw e_0;
      } else {
        throw errorToException(e_0);
      }
    }
    return this;
  };
  Transaction.prototype.update_wqw9xf$ = function (documentRef, strategy, data, encodeDefaults) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    try {
      this.js.update(documentRef.js, ensureNotNull(encode_1(strategy, data, encodeDefaults)));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return this;
  };
  Transaction.prototype.update_7xkg29$ = function (documentRef, fieldsAndValues) {
    try {
      var tmp$;
      var $receiver = this.js;
      if ((!(fieldsAndValues.length === 0) ? $receiver : null) != null) {
        var $receiver_0 = this.js;
        var tmp$_0 = (tmp$ = !(fieldsAndValues.length === 0) ? $receiver_0 : null).update;
        var tmp$_1 = [documentRef.js, fieldsAndValues[0].first, fieldsAndValues[0].second];
        var tmp$_2 = tmp$_1.concat;
        var $receiver_1 = drop(fieldsAndValues, 1);
        var destination = ArrayList_init_0();
        var tmp$_3;
        tmp$_3 = $receiver_1.iterator();
        while (tmp$_3.hasNext()) {
          var element = tmp$_3.next();
          var field = element.component1()
          , value = element.component2();
          var tmp$_4;
          if (value != null) {
            var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
            var tmp$_5;
            if (value != null) {
              var $receiver_2 = new FirebaseEncoder_init(true, positiveInfinity);
              var tmp$_0_0;
              try {
                var tmp$_1_0;
                tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(createKType(PrimitiveClasses$anyClass, [], false)), KSerializer) ? tmp$_1_0 : throwCCE());
              } catch (e) {
                if (Kotlin.isType(e, Throwable)) {
                  tmp$_0_0 = new Result(createFailure(e));
                } else
                  throw e;
              }
              var $receiver_0_0 = tmp$_0_0;
              var tmp$_2_0, tmp$_0_0_0;
              var exception = $receiver_0_0.exceptionOrNull();
              if (exception == null)
                tmp$_0_0_0 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
              else {
                var tmp$_3_0, tmp$_4_0;
                if (Kotlin.isType(value, Map))
                  tmp$_3_0 = new FirebaseMapSerializer_init();
                else if (Kotlin.isType(value, List))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else if (Kotlin.isType(value, Set))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else
                  throw exception;
                tmp$_0_0_0 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
              }
              $receiver_2.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
              tmp$_5 = $receiver_2.value;
            } else
              tmp$_5 = null;
            tmp$_4 = tmp$_5;
          } else
            tmp$_4 = null;
          var list = listOf([field, tmp$_4]);
          addAll(destination, list);
        }
        tmp$_0.apply(tmp$, tmp$_2.call(tmp$_1, copyToArray(destination)));
      }} catch (e_0) {
      if (Kotlin.isType(e_0, Exception)) {
        throw e_0;
      } else {
        throw errorToException(e_0);
      }
    }
    return this;
  };
  Transaction.prototype.update_9u0d7v$ = function (documentRef, fieldsAndValues) {
    try {
      var tmp$;
      var $receiver = this.js;
      if ((!(fieldsAndValues.length === 0) ? $receiver : null) != null) {
        var $receiver_0 = this.js;
        var tmp$_0 = (tmp$ = !(fieldsAndValues.length === 0) ? $receiver_0 : null).update;
        var tmp$_1 = [documentRef.js, fieldsAndValues[0].first.js, fieldsAndValues[0].second];
        var tmp$_2 = tmp$_1.concat;
        var destination = ArrayList_init_0();
        var tmp$_3;
        for (tmp$_3 = 0; tmp$_3 !== fieldsAndValues.length; ++tmp$_3) {
          var element = fieldsAndValues[tmp$_3];
          var field = element.component1()
          , value = element.component2();
          var tmp$_4 = field.js;
          var tmp$_5;
          if (value != null) {
            var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
            var tmp$_6;
            if (value != null) {
              var $receiver_1 = new FirebaseEncoder_init(true, positiveInfinity);
              var tmp$_0_0;
              try {
                var tmp$_1_0;
                tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(createKType(PrimitiveClasses$anyClass, [], false)), KSerializer) ? tmp$_1_0 : throwCCE());
              } catch (e) {
                if (Kotlin.isType(e, Throwable)) {
                  tmp$_0_0 = new Result(createFailure(e));
                } else
                  throw e;
              }
              var $receiver_0_0 = tmp$_0_0;
              var tmp$_2_0, tmp$_0_0_0;
              var exception = $receiver_0_0.exceptionOrNull();
              if (exception == null)
                tmp$_0_0_0 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
              else {
                var tmp$_3_0, tmp$_4_0;
                if (Kotlin.isType(value, Map))
                  tmp$_3_0 = new FirebaseMapSerializer_init();
                else if (Kotlin.isType(value, List))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else if (Kotlin.isType(value, Set))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else
                  throw exception;
                tmp$_0_0_0 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
              }
              $receiver_1.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
              tmp$_6 = $receiver_1.value;
            } else
              tmp$_6 = null;
            tmp$_5 = ensureNotNull(tmp$_6);
          } else
            tmp$_5 = null;
          var list = listOf([tmp$_4, tmp$_5]);
          addAll(destination, list);
        }
        tmp$_0.apply(tmp$, tmp$_2.call(tmp$_1, copyToArray(destination)));
      }} catch (e_0) {
      if (Kotlin.isType(e_0, Exception)) {
        throw e_0;
      } else {
        throw errorToException(e_0);
      }
    }
    return this;
  };
  Transaction.prototype.delete_6tbvch$ = function (documentRef) {
    try {
      this.js.delete(documentRef.js);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return this;
  };
  function Coroutine$get_6tbvch$($this, documentRef_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$documentRef = documentRef_0;
  }
  Coroutine$get_6tbvch$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_6tbvch$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_6tbvch$.prototype.constructor = Coroutine$get_6tbvch$;
  Coroutine$get_6tbvch$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.get(this.local$documentRef.js), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new DocumentSnapshot(this.result_0);
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
  Transaction.prototype.get_6tbvch$ = function (documentRef_0, continuation_0, suspended) {
    var instance = new Coroutine$get_6tbvch$(this, documentRef_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Transaction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transaction',
    interfaces: []
  };
  function DocumentReference(js) {
    this.js = js;
  }
  Object.defineProperty(DocumentReference.prototype, 'id', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.id;
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
  Object.defineProperty(DocumentReference.prototype, 'path', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.path;
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
  DocumentReference.prototype.collection_61zpoe$ = function (collectionPath) {
    var rethrow$result;
    try {
      rethrow$result = new CollectionReference(this.js.collection(collectionPath));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  function Coroutine$set_hpp0gg$($this, T_0_0, isT_0, data_0, encodeDefaults_0, merge_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$T_0 = T_0_0;
    this.local$data = data_0;
    this.local$encodeDefaults = encodeDefaults_0;
    this.local$merge = merge_0;
  }
  Coroutine$set_hpp0gg$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$set_hpp0gg$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$set_hpp0gg$.prototype.constructor = Coroutine$set_hpp0gg$;
  Coroutine$set_hpp0gg$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$encodeDefaults === void 0)
              this.local$encodeDefaults = true;
            if (this.local$merge === void 0)
              this.local$merge = false;
            this.exceptionState_0 = 2;
            var tmp$_5 = this.$this.js;
            var positiveInfinity_0 = firebase$firestore$FieldValue$Companion.serverTimestamp();
            var tmp$_6;
            if (this.local$data != null) {
              var $receiver_1 = new FirebaseEncoder_init(this.local$encodeDefaults, positiveInfinity_0);
              var tmp$_0_1;
              try {
                var tmp$_1_0;
                tmp$_0_1 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(this.local$T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
              } catch (e) {
                if (Kotlin.isType(e, Throwable)) {
                  tmp$_0_1 = new Result(createFailure(e));
                } else
                  throw e;
              }
              var $receiver_0_0 = tmp$_0_1;
              var tmp$_2_0, tmp$_0_0_1;
              var exception_0 = $receiver_0_0.exceptionOrNull();
              if (exception_0 == null)
                tmp$_0_0_1 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
              else {
                var tmp$_3_0, tmp$_4_0;
                if (Kotlin.isType(this.local$data, Map))
                  tmp$_3_0 = new FirebaseMapSerializer_init();
                else if (Kotlin.isType(this.local$data, List))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else if (Kotlin.isType(this.local$data, Set))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else
                  throw exception_0;
                tmp$_0_0_1 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
              }
              $receiver_1.encodeSerializableValue_tf03ej$(tmp$_0_0_1, this.local$data);
              tmp$_6 = $receiver_1.value;
            } else
              tmp$_6 = null;
            this.state_0 = 1;
            this.result_0 = await_0(tmp$_5.set(ensureNotNull(tmp$_6), json([to('merge', this.local$merge)])), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_2 = this.exception_0;
            if (Kotlin.isType(e_2, Exception)) {
              throw e_2;
            } else {
              throw errorToException(e_2);
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
  DocumentReference.prototype.set_hpp0gg$ = function (T_0_0, isT_0, data_0, encodeDefaults_0, merge_0, continuation_0, suspended) {
    var instance = new Coroutine$set_hpp0gg$(this, T_0_0, isT_0, data_0, encodeDefaults_0, merge_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.DocumentReference.set_hpp0gg$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var ensureNotNull = Kotlin.ensureNotNull;
    var to = Kotlin.kotlin.to_ujzrz7$;
    var json = Kotlin.kotlin.js.json_pyyo18$;
    var await_0 = _.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.await_t11jrl$;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var Exception = Kotlin.kotlin.Exception;
    var errorToException = _.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
    var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    var DocumentReference$set$lambda = wrapFunction(function () {
      var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
      var Unit_0 = Kotlin.kotlin.Unit;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      var encode$lambda$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$it, typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var $receiver_0 = closure$it;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_1 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_1.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType($receiver_0, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType($receiver_0, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType($receiver_0, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
            return Unit_0;
          };
        };
      });
      var encode$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
          return function (it) {
            var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
            var typeClosure$T_0 = typeClosure$T;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType(it, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(it, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(it, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
            return $receiver.value;
          };
        };
      });
      return function (closure$data, closure$encodeDefaults, typeClosure$T, isT, closure$merge, closure$continuation) {
        return function ($receiver) {
          var tmp$ = $receiver.js;
          var T_0 = typeClosure$T;
          var value = closure$data;
          var shouldEncodeElementDefault = closure$encodeDefaults;
          var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
          var tmp$_0;
          if (value != null) {
            var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
            var tmp$_0_0;
            try {
              var tmp$_1;
              tmp$_0_0 = new Result(Kotlin.isType(tmp$_1 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$_0_0 = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0_0 = tmp$_0_0;
            var tmp$_2, tmp$_0_0_0;
            var exception = $receiver_0_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            else {
              var tmp$_3, tmp$_4;
              if (Kotlin.isType(value, Map))
                tmp$_3 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(value, List))
                tmp$_3 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(value, Set))
                tmp$_3 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
            }
            $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
            tmp$_0 = $receiver_0.value;
          } else
            tmp$_0 = null;
          await_0(tmp$.set(ensureNotNull(tmp$_0), json([to('merge', closure$merge)])), closure$continuation);
          return Unit;
        };
      };
    });
    return function (T_0, isT, data, encodeDefaults, merge, continuation) {
      if (encodeDefaults === void 0)
        encodeDefaults = true;
      if (merge === void 0)
        merge = false;
      try {
        var tmp$_5 = this.js;
        var positiveInfinity_0 = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_6;
        if (data != null) {
          var $receiver_1 = new FirebaseEncoder_init(encodeDefaults, positiveInfinity_0);
          var tmp$_0_1;
          try {
            var tmp$_1_0;
            tmp$_0_1 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_1 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0_0 = tmp$_0_1;
          var tmp$_2_0, tmp$_0_0_1;
          var exception_0 = $receiver_0_0.exceptionOrNull();
          if (exception_0 == null)
            tmp$_0_0_1 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
          else {
            var tmp$_3_0, tmp$_4_0;
            if (Kotlin.isType(data, Map))
              tmp$_3_0 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(data, List))
              tmp$_3_0 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(data, Set))
              tmp$_3_0 = new FirebaseListSerializer_init();
            else
              throw exception_0;
            tmp$_0_0_1 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
          }
          $receiver_1.encodeSerializableValue_tf03ej$(tmp$_0_0_1, data);
          tmp$_6 = $receiver_1.value;
        } else
          tmp$_6 = null;
        Kotlin.suspendCall(await_0(tmp$_5.set(ensureNotNull(tmp$_6), json([to('merge', merge)])), Kotlin.coroutineReceiver()));
      } catch (e_2) {
        if (Kotlin.isType(e_2, Exception)) {
          throw e_2;
        } else {
          throw errorToException(e_2);
        }
      }
      return Unit;
    };
  }));
  function Coroutine$set_zdlef0$($this, T_0_0, isT_0, data_0, encodeDefaults_0, mergeFields_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$T_0 = T_0_0;
    this.local$data = data_0;
    this.local$encodeDefaults = encodeDefaults_0;
    this.local$mergeFields = mergeFields_0;
  }
  Coroutine$set_zdlef0$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$set_zdlef0$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$set_zdlef0$.prototype.constructor = Coroutine$set_zdlef0$;
  Coroutine$set_zdlef0$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$encodeDefaults === void 0)
              this.local$encodeDefaults = true;
            this.exceptionState_0 = 2;
            var tmp$_5 = this.$this.js;
            var positiveInfinity_0 = firebase$firestore$FieldValue$Companion.serverTimestamp();
            var tmp$_6;
            if (this.local$data != null) {
              var $receiver_1 = new FirebaseEncoder_init(this.local$encodeDefaults, positiveInfinity_0);
              var tmp$_0_1;
              try {
                var tmp$_1_0;
                tmp$_0_1 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(this.local$T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
              } catch (e) {
                if (Kotlin.isType(e, Throwable)) {
                  tmp$_0_1 = new Result(createFailure(e));
                } else
                  throw e;
              }
              var $receiver_0_0 = tmp$_0_1;
              var tmp$_2_0, tmp$_0_0_1;
              var exception_0 = $receiver_0_0.exceptionOrNull();
              if (exception_0 == null)
                tmp$_0_0_1 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
              else {
                var tmp$_3_0, tmp$_4_0;
                if (Kotlin.isType(this.local$data, Map))
                  tmp$_3_0 = new FirebaseMapSerializer_init();
                else if (Kotlin.isType(this.local$data, List))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else if (Kotlin.isType(this.local$data, Set))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else
                  throw exception_0;
                tmp$_0_0_1 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
              }
              $receiver_1.encodeSerializableValue_tf03ej$(tmp$_0_0_1, this.local$data);
              tmp$_6 = $receiver_1.value;
            } else
              tmp$_6 = null;
            this.state_0 = 1;
            this.result_0 = await_0(tmp$_5.set(ensureNotNull(tmp$_6), json([to('mergeFields', this.local$mergeFields)])), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_2 = this.exception_0;
            if (Kotlin.isType(e_2, Exception)) {
              throw e_2;
            } else {
              throw errorToException(e_2);
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
  DocumentReference.prototype.set_zdlef0$ = function (T_0_0, isT_0, data_0, encodeDefaults_0, mergeFields_0, continuation_0, suspended) {
    var instance = new Coroutine$set_zdlef0$(this, T_0_0, isT_0, data_0, encodeDefaults_0, mergeFields_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.DocumentReference.set_zdlef0$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var ensureNotNull = Kotlin.ensureNotNull;
    var to = Kotlin.kotlin.to_ujzrz7$;
    var json = Kotlin.kotlin.js.json_pyyo18$;
    var await_0 = _.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.await_t11jrl$;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var Exception = Kotlin.kotlin.Exception;
    var errorToException = _.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
    var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    var DocumentReference$set$lambda = wrapFunction(function () {
      var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
      var Unit_0 = Kotlin.kotlin.Unit;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      var encode$lambda$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$it, typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var $receiver_0 = closure$it;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_1 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_1.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType($receiver_0, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType($receiver_0, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType($receiver_0, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
            return Unit_0;
          };
        };
      });
      var encode$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
          return function (it) {
            var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
            var typeClosure$T_0 = typeClosure$T;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType(it, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(it, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(it, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
            return $receiver.value;
          };
        };
      });
      return function (closure$data, closure$encodeDefaults, typeClosure$T, isT, closure$mergeFields, closure$continuation) {
        return function ($receiver) {
          var tmp$ = $receiver.js;
          var T_0 = typeClosure$T;
          var value = closure$data;
          var shouldEncodeElementDefault = closure$encodeDefaults;
          var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
          var tmp$_0;
          if (value != null) {
            var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
            var tmp$_0_0;
            try {
              var tmp$_1;
              tmp$_0_0 = new Result(Kotlin.isType(tmp$_1 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$_0_0 = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0_0 = tmp$_0_0;
            var tmp$_2, tmp$_0_0_0;
            var exception = $receiver_0_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            else {
              var tmp$_3, tmp$_4;
              if (Kotlin.isType(value, Map))
                tmp$_3 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(value, List))
                tmp$_3 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(value, Set))
                tmp$_3 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
            }
            $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
            tmp$_0 = $receiver_0.value;
          } else
            tmp$_0 = null;
          await_0(tmp$.set(ensureNotNull(tmp$_0), json([to('mergeFields', closure$mergeFields)])), closure$continuation);
          return Unit;
        };
      };
    });
    return function (T_0, isT, data, encodeDefaults, mergeFields, continuation) {
      if (encodeDefaults === void 0)
        encodeDefaults = true;
      try {
        var tmp$_5 = this.js;
        var positiveInfinity_0 = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_6;
        if (data != null) {
          var $receiver_1 = new FirebaseEncoder_init(encodeDefaults, positiveInfinity_0);
          var tmp$_0_1;
          try {
            var tmp$_1_0;
            tmp$_0_1 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_1 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0_0 = tmp$_0_1;
          var tmp$_2_0, tmp$_0_0_1;
          var exception_0 = $receiver_0_0.exceptionOrNull();
          if (exception_0 == null)
            tmp$_0_0_1 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
          else {
            var tmp$_3_0, tmp$_4_0;
            if (Kotlin.isType(data, Map))
              tmp$_3_0 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(data, List))
              tmp$_3_0 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(data, Set))
              tmp$_3_0 = new FirebaseListSerializer_init();
            else
              throw exception_0;
            tmp$_0_0_1 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
          }
          $receiver_1.encodeSerializableValue_tf03ej$(tmp$_0_0_1, data);
          tmp$_6 = $receiver_1.value;
        } else
          tmp$_6 = null;
        Kotlin.suspendCall(await_0(tmp$_5.set(ensureNotNull(tmp$_6), json([to('mergeFields', mergeFields)])), Kotlin.coroutineReceiver()));
      } catch (e_2) {
        if (Kotlin.isType(e_2, Exception)) {
          throw e_2;
        } else {
          throw errorToException(e_2);
        }
      }
      return Unit;
    };
  }));
  function Coroutine$set_kzmde8$($this, T_0_0, isT_0, data_0, encodeDefaults_0, mergeFieldPaths_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$T_0 = T_0_0;
    this.local$data = data_0;
    this.local$encodeDefaults = encodeDefaults_0;
    this.local$mergeFieldPaths = mergeFieldPaths_0;
  }
  Coroutine$set_kzmde8$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$set_kzmde8$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$set_kzmde8$.prototype.constructor = Coroutine$set_kzmde8$;
  Coroutine$set_kzmde8$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$encodeDefaults === void 0)
              this.local$encodeDefaults = true;
            this.exceptionState_0 = 2;
            var tmp$_7 = this.$this.js;
            var positiveInfinity_0 = firebase$firestore$FieldValue$Companion.serverTimestamp();
            var tmp$_8;
            if (this.local$data != null) {
              var $receiver_1 = new FirebaseEncoder_init(this.local$encodeDefaults, positiveInfinity_0);
              var tmp$_0_1;
              try {
                var tmp$_1_0;
                tmp$_0_1 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(this.local$T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
              } catch (e) {
                if (Kotlin.isType(e, Throwable)) {
                  tmp$_0_1 = new Result(createFailure(e));
                } else
                  throw e;
              }
              var $receiver_0_0 = tmp$_0_1;
              var tmp$_2_0, tmp$_0_0_1;
              var exception_0 = $receiver_0_0.exceptionOrNull();
              if (exception_0 == null)
                tmp$_0_0_1 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
              else {
                var tmp$_3_0, tmp$_4_0;
                if (Kotlin.isType(this.local$data, Map))
                  tmp$_3_0 = new FirebaseMapSerializer_init();
                else if (Kotlin.isType(this.local$data, List))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else if (Kotlin.isType(this.local$data, Set))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else
                  throw exception_0;
                tmp$_0_0_1 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
              }
              $receiver_1.encodeSerializableValue_tf03ej$(tmp$_0_0_1, this.local$data);
              tmp$_8 = $receiver_1.value;
            } else
              tmp$_8 = null;
            var tmp$_9 = ensureNotNull(tmp$_8);
            var destination_0 = ArrayList_init(this.local$mergeFieldPaths.length);
            var tmp$_10;
            for (tmp$_10 = 0; tmp$_10 !== this.local$mergeFieldPaths.length; ++tmp$_10) {
              var item_0 = this.local$mergeFieldPaths[tmp$_10];
              destination_0.add_11rb$(item_0.js);
            }

            this.state_0 = 1;
            this.result_0 = await_0(tmp$_7.set(tmp$_9, json([to('mergeFields', copyToArray(destination_0))])), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_2 = this.exception_0;
            if (Kotlin.isType(e_2, Exception)) {
              throw e_2;
            } else {
              throw errorToException(e_2);
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
  DocumentReference.prototype.set_kzmde8$ = function (T_0_0, isT_0, data_0, encodeDefaults_0, mergeFieldPaths_0, continuation_0, suspended) {
    var instance = new Coroutine$set_kzmde8$(this, T_0_0, isT_0, data_0, encodeDefaults_0, mergeFieldPaths_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.DocumentReference.set_kzmde8$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var ensureNotNull = Kotlin.ensureNotNull;
    var wrapFunction = Kotlin.wrapFunction;
    var to = Kotlin.kotlin.to_ujzrz7$;
    var json = Kotlin.kotlin.js.json_pyyo18$;
    var await_0 = _.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.await_t11jrl$;
    var Unit = Kotlin.kotlin.Unit;
    var Exception = Kotlin.kotlin.Exception;
    var errorToException = _.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
    var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var copyToArray = Kotlin.kotlin.collections.copyToArray;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    var DocumentReference$set$lambda = wrapFunction(function () {
      var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
      var Unit_0 = Kotlin.kotlin.Unit;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
      var copyToArray = Kotlin.kotlin.collections.copyToArray;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      var encode$lambda$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$it, typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var $receiver_0 = closure$it;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_1 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_1.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType($receiver_0, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType($receiver_0, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType($receiver_0, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
            return Unit_0;
          };
        };
      });
      var encode$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
          return function (it) {
            var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
            var typeClosure$T_0 = typeClosure$T;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType(it, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(it, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(it, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
            return $receiver.value;
          };
        };
      });
      return function (closure$data, closure$encodeDefaults, typeClosure$T, isT, closure$mergeFieldPaths, closure$continuation) {
        return function ($receiver) {
          var tmp$ = $receiver.js;
          var T_0 = typeClosure$T;
          var value = closure$data;
          var shouldEncodeElementDefault = closure$encodeDefaults;
          var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
          var tmp$_0;
          if (value != null) {
            var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
            var tmp$_0_0;
            try {
              var tmp$_1;
              tmp$_0_0 = new Result(Kotlin.isType(tmp$_1 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$_0_0 = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0_0 = tmp$_0_0;
            var tmp$_2, tmp$_0_0_0;
            var exception = $receiver_0_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            else {
              var tmp$_3, tmp$_4;
              if (Kotlin.isType(value, Map))
                tmp$_3 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(value, List))
                tmp$_3 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(value, Set))
                tmp$_3 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
            }
            $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
            tmp$_0 = $receiver_0.value;
          } else
            tmp$_0 = null;
          var tmp$_5 = ensureNotNull(tmp$_0);
          var $receiver_1 = closure$mergeFieldPaths;
          var destination = ArrayList_init($receiver_1.length);
          var tmp$_6;
          for (tmp$_6 = 0; tmp$_6 !== $receiver_1.length; ++tmp$_6) {
            var item = $receiver_1[tmp$_6];
            destination.add_11rb$(item.js);
          }
          await_0(tmp$.set(tmp$_5, json([to('mergeFields', copyToArray(destination))])), closure$continuation);
          return Unit;
        };
      };
    });
    return function (T_0, isT, data, encodeDefaults, mergeFieldPaths, continuation) {
      if (encodeDefaults === void 0)
        encodeDefaults = true;
      try {
        var tmp$_7 = this.js;
        var positiveInfinity_0 = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_8;
        if (data != null) {
          var $receiver_1 = new FirebaseEncoder_init(encodeDefaults, positiveInfinity_0);
          var tmp$_0_1;
          try {
            var tmp$_1_0;
            tmp$_0_1 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_1 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0_0 = tmp$_0_1;
          var tmp$_2_0, tmp$_0_0_1;
          var exception_0 = $receiver_0_0.exceptionOrNull();
          if (exception_0 == null)
            tmp$_0_0_1 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
          else {
            var tmp$_3_0, tmp$_4_0;
            if (Kotlin.isType(data, Map))
              tmp$_3_0 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(data, List))
              tmp$_3_0 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(data, Set))
              tmp$_3_0 = new FirebaseListSerializer_init();
            else
              throw exception_0;
            tmp$_0_0_1 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
          }
          $receiver_1.encodeSerializableValue_tf03ej$(tmp$_0_0_1, data);
          tmp$_8 = $receiver_1.value;
        } else
          tmp$_8 = null;
        var tmp$_9 = ensureNotNull(tmp$_8);
        var destination_0 = ArrayList_init(mergeFieldPaths.length);
        var tmp$_10;
        for (tmp$_10 = 0; tmp$_10 !== mergeFieldPaths.length; ++tmp$_10) {
          var item_0 = mergeFieldPaths[tmp$_10];
          destination_0.add_11rb$(item_0.js);
        }
        Kotlin.suspendCall(await_0(tmp$_7.set(tmp$_9, json([to('mergeFields', copyToArray(destination_0))])), Kotlin.coroutineReceiver()));
      } catch (e_2) {
        if (Kotlin.isType(e_2, Exception)) {
          throw e_2;
        } else {
          throw errorToException(e_2);
        }
      }
      return Unit;
    };
  }));
  function Coroutine$set_l1wf4r$($this, strategy_0, data_0, encodeDefaults_0, merge_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$strategy = strategy_0;
    this.local$data = data_0;
    this.local$encodeDefaults = encodeDefaults_0;
    this.local$merge = merge_0;
  }
  Coroutine$set_l1wf4r$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$set_l1wf4r$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$set_l1wf4r$.prototype.constructor = Coroutine$set_l1wf4r$;
  Coroutine$set_l1wf4r$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$encodeDefaults === void 0)
              this.local$encodeDefaults = true;
            if (this.local$merge === void 0)
              this.local$merge = false;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.set(ensureNotNull(encode_1(this.local$strategy, this.local$data, this.local$encodeDefaults)), json([to('merge', this.local$merge)])), this);
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
  DocumentReference.prototype.set_l1wf4r$ = function (strategy_0, data_0, encodeDefaults_0, merge_0, continuation_0, suspended) {
    var instance = new Coroutine$set_l1wf4r$(this, strategy_0, data_0, encodeDefaults_0, merge_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$set_1shl8n$($this, strategy_0, data_0, encodeDefaults_0, mergeFields_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$strategy = strategy_0;
    this.local$data = data_0;
    this.local$encodeDefaults = encodeDefaults_0;
    this.local$mergeFields = mergeFields_0;
  }
  Coroutine$set_1shl8n$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$set_1shl8n$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$set_1shl8n$.prototype.constructor = Coroutine$set_1shl8n$;
  Coroutine$set_1shl8n$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$encodeDefaults === void 0)
              this.local$encodeDefaults = true;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.set(ensureNotNull(encode_1(this.local$strategy, this.local$data, this.local$encodeDefaults)), json([to('mergeFields', this.local$mergeFields)])), this);
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
  DocumentReference.prototype.set_1shl8n$ = function (strategy_0, data_0, encodeDefaults_0, mergeFields_0, continuation_0, suspended) {
    var instance = new Coroutine$set_1shl8n$(this, strategy_0, data_0, encodeDefaults_0, mergeFields_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$set_iiy6fv$($this, strategy_0, data_0, encodeDefaults_0, mergeFieldPaths_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$strategy = strategy_0;
    this.local$data = data_0;
    this.local$encodeDefaults = encodeDefaults_0;
    this.local$mergeFieldPaths = mergeFieldPaths_0;
  }
  Coroutine$set_iiy6fv$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$set_iiy6fv$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$set_iiy6fv$.prototype.constructor = Coroutine$set_iiy6fv$;
  Coroutine$set_iiy6fv$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$encodeDefaults === void 0)
              this.local$encodeDefaults = true;
            this.exceptionState_0 = 2;
            var tmp$ = this.$this.js;
            var tmp$_0 = ensureNotNull(encode_1(this.local$strategy, this.local$data, this.local$encodeDefaults));
            var destination = ArrayList_init(this.local$mergeFieldPaths.length);
            var tmp$_1;
            for (tmp$_1 = 0; tmp$_1 !== this.local$mergeFieldPaths.length; ++tmp$_1) {
              var item = this.local$mergeFieldPaths[tmp$_1];
              destination.add_11rb$(item.js);
            }

            this.state_0 = 1;
            this.result_0 = await_0(tmp$.set(tmp$_0, json([to('mergeFields', copyToArray(destination))])), this);
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
  DocumentReference.prototype.set_iiy6fv$ = function (strategy_0, data_0, encodeDefaults_0, mergeFieldPaths_0, continuation_0, suspended) {
    var instance = new Coroutine$set_iiy6fv$(this, strategy_0, data_0, encodeDefaults_0, mergeFieldPaths_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$update_tpci5x$($this, T_0_0, isT_0, data_0, encodeDefaults_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$T_0 = T_0_0;
    this.local$data = data_0;
    this.local$encodeDefaults = encodeDefaults_0;
  }
  Coroutine$update_tpci5x$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$update_tpci5x$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$update_tpci5x$.prototype.constructor = Coroutine$update_tpci5x$;
  Coroutine$update_tpci5x$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$encodeDefaults === void 0)
              this.local$encodeDefaults = true;
            this.exceptionState_0 = 2;
            var tmp$_5 = this.$this.js;
            var positiveInfinity_0 = firebase$firestore$FieldValue$Companion.serverTimestamp();
            var tmp$_6;
            if (this.local$data != null) {
              var $receiver_1 = new FirebaseEncoder_init(this.local$encodeDefaults, positiveInfinity_0);
              var tmp$_0_1;
              try {
                var tmp$_1_0;
                tmp$_0_1 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(this.local$T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
              } catch (e) {
                if (Kotlin.isType(e, Throwable)) {
                  tmp$_0_1 = new Result(createFailure(e));
                } else
                  throw e;
              }
              var $receiver_0_0 = tmp$_0_1;
              var tmp$_2_0, tmp$_0_0_1;
              var exception_0 = $receiver_0_0.exceptionOrNull();
              if (exception_0 == null)
                tmp$_0_0_1 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
              else {
                var tmp$_3_0, tmp$_4_0;
                if (Kotlin.isType(this.local$data, Map))
                  tmp$_3_0 = new FirebaseMapSerializer_init();
                else if (Kotlin.isType(this.local$data, List))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else if (Kotlin.isType(this.local$data, Set))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else
                  throw exception_0;
                tmp$_0_0_1 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
              }
              $receiver_1.encodeSerializableValue_tf03ej$(tmp$_0_0_1, this.local$data);
              tmp$_6 = $receiver_1.value;
            } else
              tmp$_6 = null;
            this.state_0 = 1;
            this.result_0 = await_0(tmp$_5.update(ensureNotNull(tmp$_6)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_2 = this.exception_0;
            if (Kotlin.isType(e_2, Exception)) {
              throw e_2;
            } else {
              throw errorToException(e_2);
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
  DocumentReference.prototype.update_tpci5x$ = function (T_0_0, isT_0, data_0, encodeDefaults_0, continuation_0, suspended) {
    var instance = new Coroutine$update_tpci5x$(this, T_0_0, isT_0, data_0, encodeDefaults_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.DocumentReference.update_tpci5x$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var ensureNotNull = Kotlin.ensureNotNull;
    var await_0 = _.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.await_t11jrl$;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var Exception = Kotlin.kotlin.Exception;
    var errorToException = _.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
    var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    var DocumentReference$update$lambda = wrapFunction(function () {
      var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
      var Unit_0 = Kotlin.kotlin.Unit;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      var encode$lambda$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$it, typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var $receiver_0 = closure$it;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_1 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_1.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType($receiver_0, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType($receiver_0, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType($receiver_0, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
            return Unit_0;
          };
        };
      });
      var encode$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
          return function (it) {
            var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
            var typeClosure$T_0 = typeClosure$T;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType(it, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(it, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(it, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
            return $receiver.value;
          };
        };
      });
      return function (closure$data, closure$encodeDefaults, typeClosure$T, isT, closure$continuation) {
        return function ($receiver) {
          var tmp$ = $receiver.js;
          var T_0 = typeClosure$T;
          var value = closure$data;
          var shouldEncodeElementDefault = closure$encodeDefaults;
          var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
          var tmp$_0;
          if (value != null) {
            var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
            var tmp$_0_0;
            try {
              var tmp$_1;
              tmp$_0_0 = new Result(Kotlin.isType(tmp$_1 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$_0_0 = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0_0 = tmp$_0_0;
            var tmp$_2, tmp$_0_0_0;
            var exception = $receiver_0_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            else {
              var tmp$_3, tmp$_4;
              if (Kotlin.isType(value, Map))
                tmp$_3 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(value, List))
                tmp$_3 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(value, Set))
                tmp$_3 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
            }
            $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
            tmp$_0 = $receiver_0.value;
          } else
            tmp$_0 = null;
          await_0(tmp$.update(ensureNotNull(tmp$_0)), closure$continuation);
          return Unit;
        };
      };
    });
    return function (T_0, isT, data, encodeDefaults, continuation) {
      if (encodeDefaults === void 0)
        encodeDefaults = true;
      try {
        var tmp$_5 = this.js;
        var positiveInfinity_0 = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_6;
        if (data != null) {
          var $receiver_1 = new FirebaseEncoder_init(encodeDefaults, positiveInfinity_0);
          var tmp$_0_1;
          try {
            var tmp$_1_0;
            tmp$_0_1 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_1 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0_0 = tmp$_0_1;
          var tmp$_2_0, tmp$_0_0_1;
          var exception_0 = $receiver_0_0.exceptionOrNull();
          if (exception_0 == null)
            tmp$_0_0_1 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
          else {
            var tmp$_3_0, tmp$_4_0;
            if (Kotlin.isType(data, Map))
              tmp$_3_0 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(data, List))
              tmp$_3_0 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(data, Set))
              tmp$_3_0 = new FirebaseListSerializer_init();
            else
              throw exception_0;
            tmp$_0_0_1 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
          }
          $receiver_1.encodeSerializableValue_tf03ej$(tmp$_0_0_1, data);
          tmp$_6 = $receiver_1.value;
        } else
          tmp$_6 = null;
        Kotlin.suspendCall(await_0(tmp$_5.update(ensureNotNull(tmp$_6)), Kotlin.coroutineReceiver()));
      } catch (e_2) {
        if (Kotlin.isType(e_2, Exception)) {
          throw e_2;
        } else {
          throw errorToException(e_2);
        }
      }
      return Unit;
    };
  }));
  function Coroutine$update_5odhkw$($this, strategy_0, data_0, encodeDefaults_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$strategy = strategy_0;
    this.local$data = data_0;
    this.local$encodeDefaults = encodeDefaults_0;
  }
  Coroutine$update_5odhkw$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$update_5odhkw$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$update_5odhkw$.prototype.constructor = Coroutine$update_5odhkw$;
  Coroutine$update_5odhkw$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$encodeDefaults === void 0)
              this.local$encodeDefaults = true;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.update(ensureNotNull(encode_1(this.local$strategy, this.local$data, this.local$encodeDefaults))), this);
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
  DocumentReference.prototype.update_5odhkw$ = function (strategy_0, data_0, encodeDefaults_0, continuation_0, suspended) {
    var instance = new Coroutine$update_5odhkw$(this, strategy_0, data_0, encodeDefaults_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$update_pyyo18$($this, fieldsAndValues_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$fieldsAndValues = fieldsAndValues_0;
  }
  Coroutine$update_pyyo18$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$update_pyyo18$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$update_pyyo18$.prototype.constructor = Coroutine$update_pyyo18$;
  Coroutine$update_pyyo18$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 3;
            var tmp$;
            var tmp$_0;
            var tmp$_1;
            var $receiver = this.$this.js;
            if ((!(this.local$fieldsAndValues.length === 0) ? $receiver : null) != null) {
              var $receiver_0 = this.$this.js;
              var tmp$_2 = (tmp$ = !(this.local$fieldsAndValues.length === 0) ? $receiver_0 : null).update;
              var tmp$_3 = [this.local$fieldsAndValues[0].first, this.local$fieldsAndValues[0].second];
              var tmp$_4 = tmp$_3.concat;
              var $receiver_1 = drop(this.local$fieldsAndValues, 1);
              var destination = ArrayList_init_0();
              var tmp$_5;
              tmp$_5 = $receiver_1.iterator();
              while (tmp$_5.hasNext()) {
                var element = tmp$_5.next();
                var field = element.component1()
                , value = element.component2();
                var tmp$_6;
                if (value != null) {
                  var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
                  var tmp$_7;
                  if (value != null) {
                    var $receiver_2 = new FirebaseEncoder_init(true, positiveInfinity);
                    var tmp$_0_0;
                    try {
                      var tmp$_1_0;
                      tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(createKType(PrimitiveClasses$anyClass, [], false)), KSerializer) ? tmp$_1_0 : throwCCE());
                    } catch (e_0) {
                      if (Kotlin.isType(e_0, Throwable)) {
                        tmp$_0_0 = new Result(createFailure(e_0));
                      } else
                        throw e_0;
                    }
                    var $receiver_0_0 = tmp$_0_0;
                    var tmp$_2_0, tmp$_0_0_0;
                    var exception = $receiver_0_0.exceptionOrNull();
                    if (exception == null)
                      tmp$_0_0_0 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
                    else {
                      var tmp$_3_0, tmp$_4_0;
                      if (Kotlin.isType(value, Map))
                        tmp$_3_0 = new FirebaseMapSerializer_init();
                      else if (Kotlin.isType(value, List))
                        tmp$_3_0 = new FirebaseListSerializer_init();
                      else if (Kotlin.isType(value, Set))
                        tmp$_3_0 = new FirebaseListSerializer_init();
                      else
                        throw exception;
                      tmp$_0_0_0 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
                    }
                    $receiver_2.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
                    tmp$_7 = $receiver_2.value;
                  } else
                    tmp$_7 = null;
                  tmp$_6 = tmp$_7;
                } else
                  tmp$_6 = null;
                var list = listOf([field, tmp$_6]);
                addAll(destination, list);
              }
              tmp$_1 = tmp$_2.apply(tmp$, tmp$_4.call(tmp$_3, copyToArray(destination)));
            } else
              tmp$_1 = null;
            if ((tmp$_0 = tmp$_1) != null) {
              this.state_0 = 1;
              this.result_0 = await_0(tmp$_0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.result_0 = null;
              this.state_0 = 2;
              continue;
            }

          case 1:
            this.state_0 = 2;
            continue;
          case 2:
            this.exceptionState_0 = 5;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 5;
            var e_1 = this.exception_0;
            if (Kotlin.isType(e_1, Exception)) {
              throw e_1;
            } else {
              throw errorToException(e_1);
            }

          case 4:
            return Unit;
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
  DocumentReference.prototype.update_pyyo18$ = function (fieldsAndValues_0, continuation_0, suspended) {
    var instance = new Coroutine$update_pyyo18$(this, fieldsAndValues_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$update_wy1wzy$($this, fieldsAndValues_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$fieldsAndValues = fieldsAndValues_0;
  }
  Coroutine$update_wy1wzy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$update_wy1wzy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$update_wy1wzy$.prototype.constructor = Coroutine$update_wy1wzy$;
  Coroutine$update_wy1wzy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 3;
            var tmp$;
            var tmp$_0;
            var tmp$_1;
            var $receiver = this.$this.js;
            if ((!(this.local$fieldsAndValues.length === 0) ? $receiver : null) != null) {
              var $receiver_0 = this.$this.js;
              var tmp$_2 = (tmp$ = !(this.local$fieldsAndValues.length === 0) ? $receiver_0 : null).update;
              var tmp$_3 = [this.local$fieldsAndValues[0].first.js, this.local$fieldsAndValues[0].second];
              var tmp$_4 = tmp$_3.concat;
              var destination = ArrayList_init_0();
              var tmp$_5;
              for (tmp$_5 = 0; tmp$_5 !== this.local$fieldsAndValues.length; ++tmp$_5) {
                var element = this.local$fieldsAndValues[tmp$_5];
                var field = element.component1()
                , value = element.component2();
                var tmp$_6 = field.js;
                var tmp$_7;
                if (value != null) {
                  var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
                  var tmp$_8;
                  if (value != null) {
                    var $receiver_1 = new FirebaseEncoder_init(true, positiveInfinity);
                    var tmp$_0_0;
                    try {
                      var tmp$_1_0;
                      tmp$_0_0 = new Result(Kotlin.isType(tmp$_1_0 = serializer(createKType(PrimitiveClasses$anyClass, [], false)), KSerializer) ? tmp$_1_0 : throwCCE());
                    } catch (e_0) {
                      if (Kotlin.isType(e_0, Throwable)) {
                        tmp$_0_0 = new Result(createFailure(e_0));
                      } else
                        throw e_0;
                    }
                    var $receiver_0_0 = tmp$_0_0;
                    var tmp$_2_0, tmp$_0_0_0;
                    var exception = $receiver_0_0.exceptionOrNull();
                    if (exception == null)
                      tmp$_0_0_0 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
                    else {
                      var tmp$_3_0, tmp$_4_0;
                      if (Kotlin.isType(value, Map))
                        tmp$_3_0 = new FirebaseMapSerializer_init();
                      else if (Kotlin.isType(value, List))
                        tmp$_3_0 = new FirebaseListSerializer_init();
                      else if (Kotlin.isType(value, Set))
                        tmp$_3_0 = new FirebaseListSerializer_init();
                      else
                        throw exception;
                      tmp$_0_0_0 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
                    }
                    $receiver_1.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
                    tmp$_8 = $receiver_1.value;
                  } else
                    tmp$_8 = null;
                  tmp$_7 = ensureNotNull(tmp$_8);
                } else
                  tmp$_7 = null;
                var list = listOf([tmp$_6, tmp$_7]);
                addAll(destination, list);
              }
              tmp$_1 = tmp$_2.apply(tmp$, tmp$_4.call(tmp$_3, copyToArray(destination)));
            } else
              tmp$_1 = null;
            if ((tmp$_0 = tmp$_1) != null) {
              this.state_0 = 1;
              this.result_0 = await_0(tmp$_0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.result_0 = null;
              this.state_0 = 2;
              continue;
            }

          case 1:
            this.state_0 = 2;
            continue;
          case 2:
            this.exceptionState_0 = 5;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 5;
            var e_1 = this.exception_0;
            if (Kotlin.isType(e_1, Exception)) {
              throw e_1;
            } else {
              throw errorToException(e_1);
            }

          case 4:
            return Unit;
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
  DocumentReference.prototype.update_wy1wzy$ = function (fieldsAndValues_0, continuation_0, suspended) {
    var instance = new Coroutine$update_wy1wzy$(this, fieldsAndValues_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
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
  DocumentReference.prototype.delete = function (continuation_0, suspended) {
    var instance = new Coroutine$delete(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$get($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
  }
  Coroutine$get.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get.prototype.constructor = Coroutine$get;
  Coroutine$get.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new DocumentSnapshot(this.result_0);
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
  DocumentReference.prototype.get = function (continuation_0, suspended) {
    var instance = new Coroutine$get(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function DocumentReference$get_DocumentReference$snapshots$lambda$lambda(this$) {
    return function (it) {
      safeOffer(this$, new DocumentSnapshot(it));
      return Unit;
    };
  }
  function DocumentReference$get_DocumentReference$snapshots$lambda$lambda_0(this$) {
    return function (it) {
      this$.close_dbl4no$(errorToException(it));
      return Unit;
    };
  }
  function DocumentReference$get_DocumentReference$snapshots$lambda$lambda_1(closure$unsubscribe) {
    return function () {
      closure$unsubscribe();
      return Unit;
    };
  }
  function Coroutine$DocumentReference$get_DocumentReference$snapshots$lambda(this$DocumentReference_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$DocumentReference = this$DocumentReference_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DocumentReference$get_DocumentReference$snapshots$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DocumentReference$get_DocumentReference$snapshots$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DocumentReference$get_DocumentReference$snapshots$lambda.prototype.constructor = Coroutine$DocumentReference$get_DocumentReference$snapshots$lambda;
  Coroutine$DocumentReference$get_DocumentReference$snapshots$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var unsubscribe = this.local$this$DocumentReference.js.onSnapshot(DocumentReference$get_DocumentReference$snapshots$lambda$lambda(this.local$$receiver), DocumentReference$get_DocumentReference$snapshots$lambda$lambda_0(this.local$$receiver));
            this.state_0 = 2;
            this.result_0 = awaitClose(this.local$$receiver, DocumentReference$get_DocumentReference$snapshots$lambda$lambda_1(unsubscribe), this);
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
  function DocumentReference$get_DocumentReference$snapshots$lambda(this$DocumentReference_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$DocumentReference$get_DocumentReference$snapshots$lambda(this$DocumentReference_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Object.defineProperty(DocumentReference.prototype, 'snapshots', {
    configurable: true,
    get: function () {
      return callbackFlow(DocumentReference$get_DocumentReference$snapshots$lambda(this));
    }
  });
  DocumentReference.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DocumentReference',
    interfaces: []
  };
  function Query(js) {
    this.js_tdndai$_0 = js;
  }
  Object.defineProperty(Query.prototype, 'js', {
    get: function () {
      return this.js_tdndai$_0;
    }
  });
  function Coroutine$get_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
  }
  Coroutine$get_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_0.prototype.constructor = Coroutine$get_0;
  Coroutine$get_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new QuerySnapshot(this.result_0);
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
  Query.prototype.get = function (continuation_0, suspended) {
    var instance = new Coroutine$get_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Query.prototype.limit_3p81yu$ = function (limit) {
    return new Query(this.js.limit(numberToDouble(limit)));
  };
  Query.prototype._where_4z64id$ = function (field, equalTo) {
    var rethrow$result;
    try {
      rethrow$result = new Query(this.js.where(field, '==', equalTo));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  Query.prototype._where_ar9hcf$ = function (path, equalTo) {
    var rethrow$result;
    try {
      rethrow$result = new Query(this.js.where(path.js, '==', equalTo));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  Query.prototype._where_so46tf$ = function (field, lessThan, greaterThan, arrayContains) {
    if (lessThan === void 0)
      lessThan = null;
    if (greaterThan === void 0)
      greaterThan = null;
    if (arrayContains === void 0)
      arrayContains = null;
    var rethrow$result;
    try {
      var tmp$;
      var $receiver = (tmp$ = lessThan != null ? this.js.where(field, '<', lessThan) : null) != null ? tmp$ : this.js;
      var tmp$_0;
      var $receiver_0 = (tmp$_0 = greaterThan != null ? $receiver.where(field, '>', greaterThan) : null) != null ? tmp$_0 : $receiver;
      var tmp$_1;
      rethrow$result = new Query((tmp$_1 = arrayContains != null ? $receiver_0.where(field, 'array-contains', arrayContains) : null) != null ? tmp$_1 : $receiver_0);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  Query.prototype._where_t472uv$ = function (path, lessThan, greaterThan, arrayContains) {
    if (lessThan === void 0)
      lessThan = null;
    if (greaterThan === void 0)
      greaterThan = null;
    if (arrayContains === void 0)
      arrayContains = null;
    var rethrow$result;
    try {
      var tmp$;
      var $receiver = (tmp$ = lessThan != null ? this.js.where(path.js, '<', lessThan) : null) != null ? tmp$ : this.js;
      var tmp$_0;
      var $receiver_0 = (tmp$_0 = greaterThan != null ? $receiver.where(path.js, '>', greaterThan) : null) != null ? tmp$_0 : $receiver;
      var tmp$_1;
      rethrow$result = new Query((tmp$_1 = arrayContains != null ? $receiver_0.where(path.js, 'array-contains', arrayContains) : null) != null ? tmp$_1 : $receiver_0);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  Query.prototype._where_jsc1td$ = function (field, inArray, arrayContainsAny) {
    if (inArray === void 0)
      inArray = null;
    if (arrayContainsAny === void 0)
      arrayContainsAny = null;
    var tmp$;
    var js2 = (tmp$ = inArray != null ? this.js.where(field, 'in', copyToArray(inArray)) : null) != null ? tmp$ : this.js;
    var tmp$_0;
    return new Query((tmp$_0 = arrayContainsAny != null ? js2.where(field, 'array-contains-any', copyToArray(arrayContainsAny)) : null) != null ? tmp$_0 : js2);
  };
  Query.prototype._where_jul215$ = function (path, inArray, arrayContainsAny) {
    if (inArray === void 0)
      inArray = null;
    if (arrayContainsAny === void 0)
      arrayContainsAny = null;
    var tmp$;
    var js2 = (tmp$ = inArray != null ? this.js.where(path.js, 'in', copyToArray(inArray)) : null) != null ? tmp$ : this.js;
    var tmp$_0;
    return new Query((tmp$_0 = arrayContainsAny != null ? js2.where(path.js, 'array-contains-any', copyToArray(arrayContainsAny)) : null) != null ? tmp$_0 : js2);
  };
  Query.prototype._orderBy_yrmre1$ = function (field, direction) {
    var rethrow$result;
    try {
      rethrow$result = new Query(this.js.orderBy(field, direction.jsString_8be2vx$));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  Query.prototype._orderBy_sse7o1$ = function (field, direction) {
    var rethrow$result;
    try {
      rethrow$result = new Query(this.js.orderBy(field.js, direction.jsString_8be2vx$));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  function Query$get_Query$snapshots$lambda$lambda$lambda(this$) {
    return function (it) {
      safeOffer(this$, new QuerySnapshot(it));
      return Unit;
    };
  }
  function Query$get_Query$snapshots$lambda$lambda$lambda_0(this$) {
    return function (it) {
      this$.close_dbl4no$(errorToException(it));
      return Unit;
    };
  }
  function Query$get_Query$snapshots$lambda$lambda(closure$unsubscribe, this$) {
    return function () {
      try {
        closure$unsubscribe();
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return Unit;
    };
  }
  function Coroutine$Query$get_Query$snapshots$lambda(this$Query_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Query = this$Query_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Query$get_Query$snapshots$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Query$get_Query$snapshots$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Query$get_Query$snapshots$lambda.prototype.constructor = Coroutine$Query$get_Query$snapshots$lambda;
  Coroutine$Query$get_Query$snapshots$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var rethrow$result;
            try {
              rethrow$result = this.local$this$Query.js.onSnapshot(Query$get_Query$snapshots$lambda$lambda$lambda(this.local$$receiver), Query$get_Query$snapshots$lambda$lambda$lambda_0(this.local$$receiver));
            } catch (e_0) {
              if (Kotlin.isType(e_0, Exception)) {
                throw e_0;
              } else {
                throw errorToException(e_0);
              }
            }

            var unsubscribe = rethrow$result;
            this.state_0 = 2;
            this.result_0 = awaitClose(this.local$$receiver, Query$get_Query$snapshots$lambda$lambda(unsubscribe, this.local$$receiver), this);
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
  function Query$get_Query$snapshots$lambda(this$Query_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Query$get_Query$snapshots$lambda(this$Query_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Object.defineProperty(Query.prototype, 'snapshots', {
    configurable: true,
    get: function () {
      return callbackFlow(Query$get_Query$snapshots$lambda(this));
    }
  });
  Query.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Query',
    interfaces: []
  };
  function CollectionReference(js) {
    Query.call(this, js);
    this.js_unf0hd$_0 = js;
  }
  Object.defineProperty(CollectionReference.prototype, 'js', {
    get: function () {
      return this.js_unf0hd$_0;
    }
  });
  Object.defineProperty(CollectionReference.prototype, 'path', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.path;
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
  CollectionReference.prototype.document_61zpoe$ = function (documentPath) {
    var rethrow$result;
    try {
      rethrow$result = new DocumentReference(this.js.doc(documentPath));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  function Coroutine$add_tpci5x$($this, T_0_0, isT_0, data_0, encodeDefaults_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$T_0 = T_0_0;
    this.local$data = data_0;
    this.local$encodeDefaults = encodeDefaults_0;
  }
  Coroutine$add_tpci5x$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$add_tpci5x$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$add_tpci5x$.prototype.constructor = Coroutine$add_tpci5x$;
  Coroutine$add_tpci5x$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$encodeDefaults === void 0)
              this.local$encodeDefaults = true;
            this.exceptionState_0 = 2;
            var tmp$_5 = this.$this.js;
            var positiveInfinity_0 = firebase$firestore$FieldValue$Companion.serverTimestamp();
            var tmp$_6;
            if (this.local$data != null) {
              var $receiver_1 = new FirebaseEncoder_init(this.local$encodeDefaults, positiveInfinity_0);
              var tmp$_0_1;
              try {
                var tmp$_1_0;
                tmp$_0_1 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(this.local$T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
              } catch (e) {
                if (Kotlin.isType(e, Throwable)) {
                  tmp$_0_1 = new Result(createFailure(e));
                } else
                  throw e;
              }
              var $receiver_0_0 = tmp$_0_1;
              var tmp$_2_0, tmp$_0_0_1;
              var exception_0 = $receiver_0_0.exceptionOrNull();
              if (exception_0 == null)
                tmp$_0_0_1 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
              else {
                var tmp$_3_0, tmp$_4_0;
                if (Kotlin.isType(this.local$data, Map))
                  tmp$_3_0 = new FirebaseMapSerializer_init();
                else if (Kotlin.isType(this.local$data, List))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else if (Kotlin.isType(this.local$data, Set))
                  tmp$_3_0 = new FirebaseListSerializer_init();
                else
                  throw exception_0;
                tmp$_0_0_1 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
              }
              $receiver_1.encodeSerializableValue_tf03ej$(tmp$_0_0_1, this.local$data);
              tmp$_6 = $receiver_1.value;
            } else
              tmp$_6 = null;
            this.state_0 = 1;
            this.result_0 = await_0(tmp$_5.add(ensureNotNull(tmp$_6)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new DocumentReference(this.result_0);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_2 = this.exception_0;
            if (Kotlin.isType(e_2, Exception)) {
              throw e_2;
            } else {
              throw errorToException(e_2);
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
  CollectionReference.prototype.add_tpci5x$ = function (T_0_0, isT_0, data_0, encodeDefaults_0, continuation_0, suspended) {
    var instance = new Coroutine$add_tpci5x$(this, T_0_0, isT_0, data_0, encodeDefaults_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.CollectionReference.add_tpci5x$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var ensureNotNull = Kotlin.ensureNotNull;
    var await_0 = _.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.await_t11jrl$;
    var DocumentReference_init = _.dev.gitlive.firebase.firestore.DocumentReference;
    var wrapFunction = Kotlin.wrapFunction;
    var Exception = Kotlin.kotlin.Exception;
    var errorToException = _.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
    var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
    var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
    var Unit = Kotlin.kotlin.Unit;
    var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    var encode$lambda$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$it, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var $receiver_0 = closure$it;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_1 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_1.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType($receiver_0, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType($receiver_0, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType($receiver_0, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
          return Unit;
        };
      };
    });
    var encode$lambda = wrapFunction(function () {
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
        return function (it) {
          var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
          var typeClosure$T_0 = typeClosure$T;
          var tmp$;
          try {
            var tmp$_0;
            tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$ = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0 = tmp$;
          var tmp$_1, tmp$_0_0;
          var exception = $receiver_0.exceptionOrNull();
          if (exception == null)
            tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
          else {
            var tmp$_2, tmp$_3;
            if (Kotlin.isType(it, Map))
              tmp$_2 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(it, List))
              tmp$_2 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(it, Set))
              tmp$_2 = new FirebaseListSerializer_init();
            else
              throw exception;
            tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
          }
          $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
          return $receiver.value;
        };
      };
    });
    var CollectionReference$add$lambda = wrapFunction(function () {
      var firebase$firestore$FieldValue$Companion = $module$firebase_app.default.firestore.FieldValue;
      var getReifiedTypeParameterKType_0 = Kotlin.getReifiedTypeParameterKType;
      var FirebaseEncoder_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseEncoder;
      var Unit = Kotlin.kotlin.Unit;
      var wrapFunction = Kotlin.wrapFunction;
      var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var throwCCE = Kotlin.throwCCE;
        return function (typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var tmp$;
            return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
          };
        };
      });
      var encode$lambda$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$it, typeClosure$T, isT) {
          return function ($receiver) {
            var T_0 = typeClosure$T;
            var $receiver_0 = closure$it;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_1 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_1.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_1.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType($receiver_0, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType($receiver_0, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType($receiver_0, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, closure$it);
            return Unit;
          };
        };
      });
      var encode$lambda = wrapFunction(function () {
        var getReifiedTypeParameterKType_0_0 = Kotlin.getReifiedTypeParameterKType;
        var wrapFunction = Kotlin.wrapFunction;
        var FirebaseMapSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseMapSerializer;
        var Map = Kotlin.kotlin.collections.Map;
        var FirebaseListSerializer_init = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.FirebaseListSerializer;
        var List = Kotlin.kotlin.collections.List;
        var Set = Kotlin.kotlin.collections.Set;
        var SerializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
        var throwCCE = Kotlin.throwCCE;
        var Result = Kotlin.kotlin.Result;
        var Throwable = Error;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
        var Any = Object;
        var firebaseSerializer$lambda = wrapFunction(function () {
          var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
          var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
          var throwCCE = Kotlin.throwCCE;
          return function (typeClosure$T, isT) {
            return function ($receiver) {
              var T_0 = typeClosure$T;
              var tmp$;
              return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType_0_0(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
            };
          };
        });
        return function (closure$shouldEncodeElementDefault, closure$positiveInfinity, typeClosure$T, isT) {
          return function (it) {
            var $receiver = new FirebaseEncoder_init(closure$shouldEncodeElementDefault, closure$positiveInfinity);
            var typeClosure$T_0 = typeClosure$T;
            var tmp$;
            try {
              var tmp$_0;
              tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType_0(typeClosure$T_0)), KSerializer) ? tmp$_0 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$ = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0 = tmp$;
            var tmp$_1, tmp$_0_0;
            var exception = $receiver_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0 = (tmp$_1 = $receiver_0.value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
            else {
              var tmp$_2, tmp$_3;
              if (Kotlin.isType(it, Map))
                tmp$_2 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(it, List))
                tmp$_2 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(it, Set))
                tmp$_2 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
            }
            $receiver.encodeSerializableValue_tf03ej$(tmp$_0_0, it);
            return $receiver.value;
          };
        };
      });
      return function (closure$data, closure$encodeDefaults, typeClosure$T, isT, closure$continuation) {
        return function ($receiver) {
          var tmp$ = $receiver.js;
          var T_0 = typeClosure$T;
          var value = closure$data;
          var shouldEncodeElementDefault = closure$encodeDefaults;
          var positiveInfinity = firebase$firestore$FieldValue$Companion.serverTimestamp();
          var tmp$_0;
          if (value != null) {
            var $receiver_0 = new FirebaseEncoder_init(shouldEncodeElementDefault, positiveInfinity);
            var tmp$_0_0;
            try {
              var tmp$_1;
              tmp$_0_0 = new Result(Kotlin.isType(tmp$_1 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_1 : throwCCE());
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                tmp$_0_0 = new Result(createFailure(e));
              } else
                throw e;
            }
            var $receiver_0_0 = tmp$_0_0;
            var tmp$_2, tmp$_0_0_0;
            var exception = $receiver_0_0.exceptionOrNull();
            if (exception == null)
              tmp$_0_0_0 = (tmp$_2 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
            else {
              var tmp$_3, tmp$_4;
              if (Kotlin.isType(value, Map))
                tmp$_3 = new FirebaseMapSerializer_init();
              else if (Kotlin.isType(value, List))
                tmp$_3 = new FirebaseListSerializer_init();
              else if (Kotlin.isType(value, Set))
                tmp$_3 = new FirebaseListSerializer_init();
              else
                throw exception;
              tmp$_0_0_0 = Kotlin.isType(tmp$_4 = tmp$_3, SerializationStrategy) ? tmp$_4 : throwCCE();
            }
            $receiver_0.encodeSerializableValue_tf03ej$(tmp$_0_0_0, value);
            tmp$_0 = $receiver_0.value;
          } else
            tmp$_0 = null;
          await_0(tmp$.add(ensureNotNull(tmp$_0)), closure$continuation);
          return new DocumentReference_init(closure$continuation.$$coroutineResult$$);
        };
      };
    });
    return function (T_0, isT, data, encodeDefaults, continuation) {
      if (encodeDefaults === void 0)
        encodeDefaults = true;
      var rethrow$result;
      try {
        var tmp$_5 = this.js;
        var positiveInfinity_0 = firebase$firestore$FieldValue$Companion.serverTimestamp();
        var tmp$_6;
        if (data != null) {
          var $receiver_1 = new FirebaseEncoder_init(encodeDefaults, positiveInfinity_0);
          var tmp$_0_1;
          try {
            var tmp$_1_0;
            tmp$_0_1 = new Result(Kotlin.isType(tmp$_1_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_1_0 : throwCCE());
          } catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              tmp$_0_1 = new Result(createFailure(e));
            } else
              throw e;
          }
          var $receiver_0_0 = tmp$_0_1;
          var tmp$_2_0, tmp$_0_0_1;
          var exception_0 = $receiver_0_0.exceptionOrNull();
          if (exception_0 == null)
            tmp$_0_0_1 = (tmp$_2_0 = $receiver_0_0.value) == null || Kotlin.isType(tmp$_2_0, Any) ? tmp$_2_0 : throwCCE();
          else {
            var tmp$_3_0, tmp$_4_0;
            if (Kotlin.isType(data, Map))
              tmp$_3_0 = new FirebaseMapSerializer_init();
            else if (Kotlin.isType(data, List))
              tmp$_3_0 = new FirebaseListSerializer_init();
            else if (Kotlin.isType(data, Set))
              tmp$_3_0 = new FirebaseListSerializer_init();
            else
              throw exception_0;
            tmp$_0_0_1 = Kotlin.isType(tmp$_4_0 = tmp$_3_0, SerializationStrategy) ? tmp$_4_0 : throwCCE();
          }
          $receiver_1.encodeSerializableValue_tf03ej$(tmp$_0_0_1, data);
          tmp$_6 = $receiver_1.value;
        } else
          tmp$_6 = null;
        Kotlin.suspendCall(await_0(tmp$_5.add(ensureNotNull(tmp$_6)), Kotlin.coroutineReceiver()));
        rethrow$result = new DocumentReference_init(Kotlin.coroutineResult(Kotlin.coroutineReceiver()));
      } catch (e_2) {
        if (Kotlin.isType(e_2, Exception)) {
          throw e_2;
        } else {
          throw errorToException(e_2);
        }
      }
      return rethrow$result;
    };
  }));
  function Coroutine$add_e7ykhs$($this, data_0, strategy_0, encodeDefaults_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$data = data_0;
    this.local$strategy = strategy_0;
    this.local$encodeDefaults = encodeDefaults_0;
  }
  Coroutine$add_e7ykhs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$add_e7ykhs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$add_e7ykhs$.prototype.constructor = Coroutine$add_e7ykhs$;
  Coroutine$add_e7ykhs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$encodeDefaults === void 0)
              this.local$encodeDefaults = true;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.add(ensureNotNull(encode_1(this.local$strategy, this.local$data, this.local$encodeDefaults))), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new DocumentReference(this.result_0);
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
  CollectionReference.prototype.add_e7ykhs$ = function (data_0, strategy_0, encodeDefaults_0, continuation_0, suspended) {
    var instance = new Coroutine$add_e7ykhs$(this, data_0, strategy_0, encodeDefaults_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$add_5odhkw$($this, strategy_0, data_0, encodeDefaults_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$rethrow$result = void 0;
    this.local$strategy = strategy_0;
    this.local$data = data_0;
    this.local$encodeDefaults = encodeDefaults_0;
  }
  Coroutine$add_5odhkw$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$add_5odhkw$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$add_5odhkw$.prototype.constructor = Coroutine$add_5odhkw$;
  Coroutine$add_5odhkw$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$encodeDefaults === void 0)
              this.local$encodeDefaults = true;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.$this.js.add(ensureNotNull(encode_1(this.local$strategy, this.local$data, this.local$encodeDefaults))), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$rethrow$result = new DocumentReference(this.result_0);
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
  CollectionReference.prototype.add_5odhkw$ = function (strategy_0, data_0, encodeDefaults_0, continuation_0, suspended) {
    var instance = new Coroutine$add_5odhkw$(this, strategy_0, data_0, encodeDefaults_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  CollectionReference.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CollectionReference',
    interfaces: [Query]
  };
  function FirebaseFirestoreException(cause, code) {
    FirebaseException.call(this, code.toString(), cause);
    this.code = code;
    this.name = 'FirebaseFirestoreException';
  }
  FirebaseFirestoreException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseFirestoreException',
    interfaces: [FirebaseException]
  };
  function get_code($receiver) {
    return $receiver.code;
  }
  function QuerySnapshot(js) {
    this.js = js;
  }
  Object.defineProperty(QuerySnapshot.prototype, 'documents', {
    configurable: true,
    get: function () {
      var $receiver = this.js.docs;
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(new DocumentSnapshot(item));
      }
      return destination;
    }
  });
  Object.defineProperty(QuerySnapshot.prototype, 'documentChanges', {
    configurable: true,
    get: function () {
      var $receiver = this.js.docChanges();
      var destination = ArrayList_init($receiver.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var item = $receiver[tmp$];
        destination.add_11rb$(new DocumentChange(item));
      }
      return destination;
    }
  });
  Object.defineProperty(QuerySnapshot.prototype, 'metadata', {
    configurable: true,
    get: function () {
      return new SnapshotMetadata(this.js.metadata);
    }
  });
  QuerySnapshot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QuerySnapshot',
    interfaces: []
  };
  function DocumentChange(js) {
    this.js = js;
  }
  Object.defineProperty(DocumentChange.prototype, 'document', {
    configurable: true,
    get: function () {
      return new DocumentSnapshot(this.js.doc);
    }
  });
  Object.defineProperty(DocumentChange.prototype, 'newIndex', {
    configurable: true,
    get: function () {
      return this.js.newIndex;
    }
  });
  Object.defineProperty(DocumentChange.prototype, 'oldIndex', {
    configurable: true,
    get: function () {
      return this.js.oldIndex;
    }
  });
  Object.defineProperty(DocumentChange.prototype, 'type', {
    configurable: true,
    get: function () {
      var $receiver = ChangeType$values();
      var first$result;
      first$break: do {
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
          var element = $receiver[tmp$];
          if (equals(element.jsString_8be2vx$, this.js.type)) {
            first$result = element;
            break first$break;
          }}
        throw new NoSuchElementException_init('Array contains no element matching the predicate.');
      }
       while (false);
      return first$result;
    }
  });
  DocumentChange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DocumentChange',
    interfaces: []
  };
  function DocumentSnapshot(js) {
    this.js = js;
  }
  Object.defineProperty(DocumentSnapshot.prototype, 'id', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.id;
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
  Object.defineProperty(DocumentSnapshot.prototype, 'reference', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = new DocumentReference(this.js.ref);
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
  DocumentSnapshot.prototype.data_30y1fr$ = defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.DocumentSnapshot.data_30y1fr$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var Exception = Kotlin.kotlin.Exception;
    var errorToException = _.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
    var DeserializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.DeserializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var decode = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.decode_k6f162$;
    var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    function decode$lambda(it) {
      return null;
    }
    function decode$lambda_0(it) {
      var tmp$, tmp$_0;
      return typeof (tmp$_0 = ((tmp$ = it.toMillis != undefined ? it : null) != null ? tmp$ : null).toMillis()) === 'number' ? tmp$_0 : null;
    }
    var DocumentSnapshot$data$lambda = wrapFunction(function () {
      var DeserializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.DeserializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var decode = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.decode_k6f162$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      function decode$lambda(it) {
        return null;
      }
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var value = $receiver.js.data();
          var tmp$;
          var tmp$_0;
          var strategy = Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE();
          return decode(Kotlin.isType(tmp$ = strategy, DeserializationStrategy) ? tmp$ : throwCCE(), value, decode$lambda);
        };
      };
    });
    return function (T_0, isT) {
      var rethrow$result;
      try {
        var value = this.js.data();
        var tmp$;
        var tmp$_0;
        var strategy = Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_0 : throwCCE();
        rethrow$result = decode(Kotlin.isType(tmp$ = strategy, DeserializationStrategy) ? tmp$ : throwCCE(), value, decode$lambda_0);
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    };
  }));
  DocumentSnapshot.prototype.data_w63s0f$ = function (strategy) {
    var rethrow$result;
    try {
      rethrow$result = decode_1(strategy, this.js.data());
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  DocumentSnapshot.prototype.get_ytbaoo$ = defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.DocumentSnapshot.get_ytbaoo$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var Exception = Kotlin.kotlin.Exception;
    var errorToException = _.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
    var DeserializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.DeserializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var decode = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.decode_k6f162$;
    var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    function decode$lambda(it) {
      return null;
    }
    function decode$lambda_0(it) {
      var tmp$, tmp$_0;
      return typeof (tmp$_0 = ((tmp$ = it.toMillis != undefined ? it : null) != null ? tmp$ : null).toMillis()) === 'number' ? tmp$_0 : null;
    }
    var DocumentSnapshot$get$lambda = wrapFunction(function () {
      var DeserializationStrategy = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.DeserializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var decode = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.decode_k6f162$;
      var serializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      function decode$lambda(it) {
        return null;
      }
      return function (closure$field, typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var value = $receiver.js.get(closure$field);
          var tmp$;
          var tmp$_0;
          var strategy = Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$_0 : throwCCE();
          return decode(Kotlin.isType(tmp$ = strategy, DeserializationStrategy) ? tmp$ : throwCCE(), value, decode$lambda);
        };
      };
    });
    return function (T_0, isT, field) {
      var rethrow$result;
      try {
        var value = this.js.get(field);
        var tmp$;
        var tmp$_0;
        var strategy = Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_0 : throwCCE();
        rethrow$result = decode(Kotlin.isType(tmp$ = strategy, DeserializationStrategy) ? tmp$ : throwCCE(), value, decode$lambda_0);
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
      return rethrow$result;
    };
  }));
  DocumentSnapshot.prototype.get_to47xb$ = function (field, strategy) {
    var rethrow$result;
    try {
      rethrow$result = decode_1(strategy, this.js.get(field));
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  DocumentSnapshot.prototype.contains_61zpoe$ = function (field) {
    var rethrow$result;
    try {
      rethrow$result = !equals(this.js.get(field), undefined);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  Object.defineProperty(DocumentSnapshot.prototype, 'exists', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = this.js.exists;
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
  Object.defineProperty(DocumentSnapshot.prototype, 'metadata', {
    configurable: true,
    get: function () {
      return new SnapshotMetadata(this.js.metadata);
    }
  });
  DocumentSnapshot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DocumentSnapshot',
    interfaces: []
  };
  function SnapshotMetadata(js) {
    this.js = js;
  }
  Object.defineProperty(SnapshotMetadata.prototype, 'hasPendingWrites', {
    configurable: true,
    get: function () {
      return this.js.hasPendingWrites;
    }
  });
  Object.defineProperty(SnapshotMetadata.prototype, 'isFromCache', {
    configurable: true,
    get: function () {
      return this.js.fromCache;
    }
  });
  SnapshotMetadata.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SnapshotMetadata',
    interfaces: []
  };
  function FieldPath(js) {
    this.js = js;
  }
  Object.defineProperty(FieldPath.prototype, 'documentId', {
    configurable: true,
    get: function () {
      return new FieldPath(firebase$firestore$FieldPath$Companion.documentId);
    }
  });
  FieldPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldPath',
    interfaces: []
  };
  function FieldPath_init(fieldNames, $this) {
    $this = $this || Object.create(FieldPath.prototype);
    var rethrow$result;
    try {
      rethrow$result = Reflect.construct(firebase$firestore$FieldPath$Companion, fieldNames);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    FieldPath.call($this, rethrow$result);
    return $this;
  }
  function FieldValue() {
    FieldValue_instance = this;
    this.serverTimestamp = kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY;
  }
  Object.defineProperty(FieldValue.prototype, 'delete', {
    configurable: true,
    get: function () {
      var rethrow$result;
      try {
        rethrow$result = firebase$firestore$FieldValue$Companion.delete();
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
  FieldValue.prototype.arrayUnion_jiburq$ = function (elements) {
    var rethrow$result;
    try {
      var tmp$;
      rethrow$result = (tmp$ = firebase$firestore$FieldValue$Companion).arrayUnion.apply(tmp$, elements);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  FieldValue.prototype.arrayRemove_jiburq$ = function (elements) {
    var rethrow$result;
    try {
      var tmp$;
      rethrow$result = (tmp$ = firebase$firestore$FieldValue$Companion).arrayRemove.apply(tmp$, elements);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        throw e;
      } else {
        throw errorToException(e);
      }
    }
    return rethrow$result;
  };
  FieldValue.prototype.deprecatedDelete = function () {
    return this.delete;
  };
  FieldValue.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FieldValue',
    interfaces: []
  };
  var FieldValue_instance = null;
  function FieldValue_getInstance() {
    if (FieldValue_instance === null) {
      new FieldValue();
    }return FieldValue_instance;
  }
  function FirestoreExceptionCode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FirestoreExceptionCode_initFields() {
    FirestoreExceptionCode_initFields = function () {
    };
    FirestoreExceptionCode$OK_instance = new FirestoreExceptionCode('OK', 0);
    FirestoreExceptionCode$CANCELLED_instance = new FirestoreExceptionCode('CANCELLED', 1);
    FirestoreExceptionCode$UNKNOWN_instance = new FirestoreExceptionCode('UNKNOWN', 2);
    FirestoreExceptionCode$INVALID_ARGUMENT_instance = new FirestoreExceptionCode('INVALID_ARGUMENT', 3);
    FirestoreExceptionCode$DEADLINE_EXCEEDED_instance = new FirestoreExceptionCode('DEADLINE_EXCEEDED', 4);
    FirestoreExceptionCode$NOT_FOUND_instance = new FirestoreExceptionCode('NOT_FOUND', 5);
    FirestoreExceptionCode$ALREADY_EXISTS_instance = new FirestoreExceptionCode('ALREADY_EXISTS', 6);
    FirestoreExceptionCode$PERMISSION_DENIED_instance = new FirestoreExceptionCode('PERMISSION_DENIED', 7);
    FirestoreExceptionCode$RESOURCE_EXHAUSTED_instance = new FirestoreExceptionCode('RESOURCE_EXHAUSTED', 8);
    FirestoreExceptionCode$FAILED_PRECONDITION_instance = new FirestoreExceptionCode('FAILED_PRECONDITION', 9);
    FirestoreExceptionCode$ABORTED_instance = new FirestoreExceptionCode('ABORTED', 10);
    FirestoreExceptionCode$OUT_OF_RANGE_instance = new FirestoreExceptionCode('OUT_OF_RANGE', 11);
    FirestoreExceptionCode$UNIMPLEMENTED_instance = new FirestoreExceptionCode('UNIMPLEMENTED', 12);
    FirestoreExceptionCode$INTERNAL_instance = new FirestoreExceptionCode('INTERNAL', 13);
    FirestoreExceptionCode$UNAVAILABLE_instance = new FirestoreExceptionCode('UNAVAILABLE', 14);
    FirestoreExceptionCode$DATA_LOSS_instance = new FirestoreExceptionCode('DATA_LOSS', 15);
    FirestoreExceptionCode$UNAUTHENTICATED_instance = new FirestoreExceptionCode('UNAUTHENTICATED', 16);
  }
  var FirestoreExceptionCode$OK_instance;
  function FirestoreExceptionCode$OK_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$OK_instance;
  }
  var FirestoreExceptionCode$CANCELLED_instance;
  function FirestoreExceptionCode$CANCELLED_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$CANCELLED_instance;
  }
  var FirestoreExceptionCode$UNKNOWN_instance;
  function FirestoreExceptionCode$UNKNOWN_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$UNKNOWN_instance;
  }
  var FirestoreExceptionCode$INVALID_ARGUMENT_instance;
  function FirestoreExceptionCode$INVALID_ARGUMENT_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$INVALID_ARGUMENT_instance;
  }
  var FirestoreExceptionCode$DEADLINE_EXCEEDED_instance;
  function FirestoreExceptionCode$DEADLINE_EXCEEDED_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$DEADLINE_EXCEEDED_instance;
  }
  var FirestoreExceptionCode$NOT_FOUND_instance;
  function FirestoreExceptionCode$NOT_FOUND_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$NOT_FOUND_instance;
  }
  var FirestoreExceptionCode$ALREADY_EXISTS_instance;
  function FirestoreExceptionCode$ALREADY_EXISTS_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$ALREADY_EXISTS_instance;
  }
  var FirestoreExceptionCode$PERMISSION_DENIED_instance;
  function FirestoreExceptionCode$PERMISSION_DENIED_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$PERMISSION_DENIED_instance;
  }
  var FirestoreExceptionCode$RESOURCE_EXHAUSTED_instance;
  function FirestoreExceptionCode$RESOURCE_EXHAUSTED_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$RESOURCE_EXHAUSTED_instance;
  }
  var FirestoreExceptionCode$FAILED_PRECONDITION_instance;
  function FirestoreExceptionCode$FAILED_PRECONDITION_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$FAILED_PRECONDITION_instance;
  }
  var FirestoreExceptionCode$ABORTED_instance;
  function FirestoreExceptionCode$ABORTED_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$ABORTED_instance;
  }
  var FirestoreExceptionCode$OUT_OF_RANGE_instance;
  function FirestoreExceptionCode$OUT_OF_RANGE_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$OUT_OF_RANGE_instance;
  }
  var FirestoreExceptionCode$UNIMPLEMENTED_instance;
  function FirestoreExceptionCode$UNIMPLEMENTED_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$UNIMPLEMENTED_instance;
  }
  var FirestoreExceptionCode$INTERNAL_instance;
  function FirestoreExceptionCode$INTERNAL_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$INTERNAL_instance;
  }
  var FirestoreExceptionCode$UNAVAILABLE_instance;
  function FirestoreExceptionCode$UNAVAILABLE_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$UNAVAILABLE_instance;
  }
  var FirestoreExceptionCode$DATA_LOSS_instance;
  function FirestoreExceptionCode$DATA_LOSS_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$DATA_LOSS_instance;
  }
  var FirestoreExceptionCode$UNAUTHENTICATED_instance;
  function FirestoreExceptionCode$UNAUTHENTICATED_getInstance() {
    FirestoreExceptionCode_initFields();
    return FirestoreExceptionCode$UNAUTHENTICATED_instance;
  }
  FirestoreExceptionCode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirestoreExceptionCode',
    interfaces: [Enum]
  };
  function FirestoreExceptionCode$values() {
    return [FirestoreExceptionCode$OK_getInstance(), FirestoreExceptionCode$CANCELLED_getInstance(), FirestoreExceptionCode$UNKNOWN_getInstance(), FirestoreExceptionCode$INVALID_ARGUMENT_getInstance(), FirestoreExceptionCode$DEADLINE_EXCEEDED_getInstance(), FirestoreExceptionCode$NOT_FOUND_getInstance(), FirestoreExceptionCode$ALREADY_EXISTS_getInstance(), FirestoreExceptionCode$PERMISSION_DENIED_getInstance(), FirestoreExceptionCode$RESOURCE_EXHAUSTED_getInstance(), FirestoreExceptionCode$FAILED_PRECONDITION_getInstance(), FirestoreExceptionCode$ABORTED_getInstance(), FirestoreExceptionCode$OUT_OF_RANGE_getInstance(), FirestoreExceptionCode$UNIMPLEMENTED_getInstance(), FirestoreExceptionCode$INTERNAL_getInstance(), FirestoreExceptionCode$UNAVAILABLE_getInstance(), FirestoreExceptionCode$DATA_LOSS_getInstance(), FirestoreExceptionCode$UNAUTHENTICATED_getInstance()];
  }
  FirestoreExceptionCode.values = FirestoreExceptionCode$values;
  function FirestoreExceptionCode$valueOf(name) {
    switch (name) {
      case 'OK':
        return FirestoreExceptionCode$OK_getInstance();
      case 'CANCELLED':
        return FirestoreExceptionCode$CANCELLED_getInstance();
      case 'UNKNOWN':
        return FirestoreExceptionCode$UNKNOWN_getInstance();
      case 'INVALID_ARGUMENT':
        return FirestoreExceptionCode$INVALID_ARGUMENT_getInstance();
      case 'DEADLINE_EXCEEDED':
        return FirestoreExceptionCode$DEADLINE_EXCEEDED_getInstance();
      case 'NOT_FOUND':
        return FirestoreExceptionCode$NOT_FOUND_getInstance();
      case 'ALREADY_EXISTS':
        return FirestoreExceptionCode$ALREADY_EXISTS_getInstance();
      case 'PERMISSION_DENIED':
        return FirestoreExceptionCode$PERMISSION_DENIED_getInstance();
      case 'RESOURCE_EXHAUSTED':
        return FirestoreExceptionCode$RESOURCE_EXHAUSTED_getInstance();
      case 'FAILED_PRECONDITION':
        return FirestoreExceptionCode$FAILED_PRECONDITION_getInstance();
      case 'ABORTED':
        return FirestoreExceptionCode$ABORTED_getInstance();
      case 'OUT_OF_RANGE':
        return FirestoreExceptionCode$OUT_OF_RANGE_getInstance();
      case 'UNIMPLEMENTED':
        return FirestoreExceptionCode$UNIMPLEMENTED_getInstance();
      case 'INTERNAL':
        return FirestoreExceptionCode$INTERNAL_getInstance();
      case 'UNAVAILABLE':
        return FirestoreExceptionCode$UNAVAILABLE_getInstance();
      case 'DATA_LOSS':
        return FirestoreExceptionCode$DATA_LOSS_getInstance();
      case 'UNAUTHENTICATED':
        return FirestoreExceptionCode$UNAUTHENTICATED_getInstance();
      default:throwISE('No enum constant dev.gitlive.firebase.firestore.FirestoreExceptionCode.' + name);
    }
  }
  FirestoreExceptionCode.valueOf_61zpoe$ = FirestoreExceptionCode$valueOf;
  function Direction(name, ordinal, jsString) {
    Enum.call(this);
    this.jsString_8be2vx$ = jsString;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$ASCENDING_instance = new Direction('ASCENDING', 0, 'asc');
    Direction$DESCENDING_instance = new Direction('DESCENDING', 1, 'desc');
  }
  var Direction$ASCENDING_instance;
  function Direction$ASCENDING_getInstance() {
    Direction_initFields();
    return Direction$ASCENDING_instance;
  }
  var Direction$DESCENDING_instance;
  function Direction$DESCENDING_getInstance() {
    Direction_initFields();
    return Direction$DESCENDING_instance;
  }
  Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Direction$values() {
    return [Direction$ASCENDING_getInstance(), Direction$DESCENDING_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'ASCENDING':
        return Direction$ASCENDING_getInstance();
      case 'DESCENDING':
        return Direction$DESCENDING_getInstance();
      default:throwISE('No enum constant dev.gitlive.firebase.firestore.Direction.' + name);
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function ChangeType(name, ordinal, jsString) {
    Enum.call(this);
    this.jsString_8be2vx$ = jsString;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ChangeType_initFields() {
    ChangeType_initFields = function () {
    };
    ChangeType$ADDED_instance = new ChangeType('ADDED', 0, 'added');
    ChangeType$MODIFIED_instance = new ChangeType('MODIFIED', 1, 'modified');
    ChangeType$REMOVED_instance = new ChangeType('REMOVED', 2, 'removed');
  }
  var ChangeType$ADDED_instance;
  function ChangeType$ADDED_getInstance() {
    ChangeType_initFields();
    return ChangeType$ADDED_instance;
  }
  var ChangeType$MODIFIED_instance;
  function ChangeType$MODIFIED_getInstance() {
    ChangeType_initFields();
    return ChangeType$MODIFIED_instance;
  }
  var ChangeType$REMOVED_instance;
  function ChangeType$REMOVED_getInstance() {
    ChangeType_initFields();
    return ChangeType$REMOVED_instance;
  }
  ChangeType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeType',
    interfaces: [Enum]
  };
  function ChangeType$values() {
    return [ChangeType$ADDED_getInstance(), ChangeType$MODIFIED_getInstance(), ChangeType$REMOVED_getInstance()];
  }
  ChangeType.values = ChangeType$values;
  function ChangeType$valueOf(name) {
    switch (name) {
      case 'ADDED':
        return ChangeType$ADDED_getInstance();
      case 'MODIFIED':
        return ChangeType$MODIFIED_getInstance();
      case 'REMOVED':
        return ChangeType$REMOVED_getInstance();
      default:throwISE('No enum constant dev.gitlive.firebase.firestore.ChangeType.' + name);
    }
  }
  ChangeType.valueOf_61zpoe$ = ChangeType$valueOf;
  var rethrow = defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.rethrow_96jf0l$', wrapFunction(function () {
    var Exception = Kotlin.kotlin.Exception;
    var errorToException = _.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
    return function ($receiver, function_0) {
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
    };
  }));
  var rethrow_0 = defineInlineFunction('firebase-kotlin-sdk-firebase-firestore.dev.gitlive.firebase.firestore.rethrow_klfg04$', wrapFunction(function () {
    var Exception = Kotlin.kotlin.Exception;
    var errorToException = _.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
    return function (function_0) {
      try {
        return function_0();
      } catch (e) {
        if (Kotlin.isType(e, Exception)) {
          throw e;
        } else {
          throw errorToException(e);
        }
      }
    };
  }));
  function errorToException(e) {
    var tmp$, tmp$_0;
    switch ((tmp$_0 = (tmp$ = e != null ? e.code : null) != null ? tmp$.toString() : null) != null ? tmp$_0.toLowerCase() : null) {
      case 'cancelled':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$CANCELLED_getInstance());
      case 'invalid-argument':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$INVALID_ARGUMENT_getInstance());
      case 'deadline-exceeded':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$DEADLINE_EXCEEDED_getInstance());
      case 'not-found':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$NOT_FOUND_getInstance());
      case 'already-exists':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$ALREADY_EXISTS_getInstance());
      case 'permission-denied':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$PERMISSION_DENIED_getInstance());
      case 'resource-exhausted':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$RESOURCE_EXHAUSTED_getInstance());
      case 'failed-precondition':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$FAILED_PRECONDITION_getInstance());
      case 'aborted':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$ABORTED_getInstance());
      case 'out-of-range':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$OUT_OF_RANGE_getInstance());
      case 'unimplemented':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$UNIMPLEMENTED_getInstance());
      case 'internal':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$INTERNAL_getInstance());
      case 'unavailable':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$UNAVAILABLE_getInstance());
      case 'data-loss':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$DATA_LOSS_getInstance());
      case 'unauthenticated':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$UNAUTHENTICATED_getInstance());
      case 'unknown':
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$UNKNOWN_getInstance());
      default:println('Unknown error code in ' + JSON.stringify(e));
        return new FirebaseFirestoreException(e, FirestoreExceptionCode$UNKNOWN_getInstance());
    }
  }
  var package$dev = _.dev || (_.dev = {});
  var package$gitlive = package$dev.gitlive || (package$dev.gitlive = {});
  var package$firebase = package$gitlive.firebase || (package$gitlive.firebase = {});
  var package$firestore = package$firebase.firestore || (package$firebase.firestore = {});
  package$firestore.where_vp9w46$ = where;
  package$firestore.where_wd3i06$ = where_0;
  package$firestore.where_b72vde$ = where_1;
  package$firestore.where_d2voea$ = where_2;
  package$firestore.where_fwcwpw$ = where_3;
  package$firestore.where_welvo4$ = where_4;
  package$firestore.orderBy_6dr438$ = orderBy;
  package$firestore.orderBy_p0k0hw$ = orderBy_0;
  $$importsForInline$$['firebase-kotlin-sdk-firebase-common'] = $module$firebase_kotlin_sdk_firebase_common;
  package$firestore.decode_1nd0ri$ = decode_1;
  $$importsForInline$$['firebase-kotlin-sdk-firebase-firestore'] = _;
  package$firestore.get_firestore_jr6r1m$ = get_firestore;
  package$firestore.firestore_b63xga$ = firestore;
  package$firestore.FirebaseFirestore = FirebaseFirestore;
  package$firestore.rethrow_96jf0l$ = rethrow;
  package$firestore.WriteBatch = WriteBatch;
  package$firestore.Transaction = Transaction;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$firestore.DocumentReference = DocumentReference;
  package$firestore.Query = Query;
  package$firestore.CollectionReference = CollectionReference;
  package$firestore.FirebaseFirestoreException = FirebaseFirestoreException;
  package$firestore.get_code_2ydvvh$ = get_code;
  package$firestore.QuerySnapshot = QuerySnapshot;
  package$firestore.DocumentChange = DocumentChange;
  package$firestore.DocumentSnapshot = DocumentSnapshot;
  package$firestore.SnapshotMetadata = SnapshotMetadata;
  package$firestore.FieldPath_init_vqirvp$ = FieldPath_init;
  package$firestore.FieldPath = FieldPath;
  Object.defineProperty(package$firestore, 'FieldValue', {
    get: FieldValue_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'OK', {
    get: FirestoreExceptionCode$OK_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'CANCELLED', {
    get: FirestoreExceptionCode$CANCELLED_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'UNKNOWN', {
    get: FirestoreExceptionCode$UNKNOWN_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'INVALID_ARGUMENT', {
    get: FirestoreExceptionCode$INVALID_ARGUMENT_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'DEADLINE_EXCEEDED', {
    get: FirestoreExceptionCode$DEADLINE_EXCEEDED_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'NOT_FOUND', {
    get: FirestoreExceptionCode$NOT_FOUND_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'ALREADY_EXISTS', {
    get: FirestoreExceptionCode$ALREADY_EXISTS_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'PERMISSION_DENIED', {
    get: FirestoreExceptionCode$PERMISSION_DENIED_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'RESOURCE_EXHAUSTED', {
    get: FirestoreExceptionCode$RESOURCE_EXHAUSTED_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'FAILED_PRECONDITION', {
    get: FirestoreExceptionCode$FAILED_PRECONDITION_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'ABORTED', {
    get: FirestoreExceptionCode$ABORTED_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'OUT_OF_RANGE', {
    get: FirestoreExceptionCode$OUT_OF_RANGE_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'UNIMPLEMENTED', {
    get: FirestoreExceptionCode$UNIMPLEMENTED_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'INTERNAL', {
    get: FirestoreExceptionCode$INTERNAL_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'UNAVAILABLE', {
    get: FirestoreExceptionCode$UNAVAILABLE_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'DATA_LOSS', {
    get: FirestoreExceptionCode$DATA_LOSS_getInstance
  });
  Object.defineProperty(FirestoreExceptionCode, 'UNAUTHENTICATED', {
    get: FirestoreExceptionCode$UNAUTHENTICATED_getInstance
  });
  package$firestore.FirestoreExceptionCode = FirestoreExceptionCode;
  Object.defineProperty(Direction, 'ASCENDING', {
    get: Direction$ASCENDING_getInstance
  });
  Object.defineProperty(Direction, 'DESCENDING', {
    get: Direction$DESCENDING_getInstance
  });
  package$firestore.Direction = Direction;
  Object.defineProperty(ChangeType, 'ADDED', {
    get: ChangeType$ADDED_getInstance
  });
  Object.defineProperty(ChangeType, 'MODIFIED', {
    get: ChangeType$MODIFIED_getInstance
  });
  Object.defineProperty(ChangeType, 'REMOVED', {
    get: ChangeType$REMOVED_getInstance
  });
  package$firestore.ChangeType = ChangeType;
  package$firestore.rethrow_klfg04$ = rethrow_0;
  package$firestore.errorToException_za3rmp$ = errorToException;
  Kotlin.defineModule('firebase-kotlin-sdk-firebase-firestore', _);
  return _;
}(module.exports, require('kotlin'), require('firebase-kotlin-sdk-firebase-common'), require('firebase/app'), require('firebase/firestore'), require('kotlinx-coroutines-core'), require('firebase-kotlin-sdk-firebase-app')));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-firestore.js.map
