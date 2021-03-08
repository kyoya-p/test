(function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var modules = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.modules;
  var toBoxedChar = Kotlin.toBoxedChar;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Decoder = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.encoding.Decoder;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var NotImplementedError = Kotlin.kotlin.NotImplementedError;
  var CompositeDecoder = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.encoding.CompositeDecoder;
  var toString = Kotlin.toString;
  var numberToDouble = Kotlin.numberToDouble;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var SerializationException_init = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.SerializationException_init_pdl1vj$;
  var numberToLong = Kotlin.numberToLong;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var numberToByte = Kotlin.numberToByte;
  var toByte = Kotlin.kotlin.text.toByte_pdl1vz$;
  var numberToInt = Kotlin.numberToInt;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var numberToShort = Kotlin.numberToShort;
  var toShort = Kotlin.kotlin.text.toShort_pdl1vz$;
  var throwCCE = Kotlin.throwCCE;
  var numberToChar = Kotlin.numberToChar;
  var Nothing = Kotlin.kotlin.Nothing;
  var kotlin = Kotlin.kotlin;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var Unit = Kotlin.kotlin.Unit;
  var Encoder = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.encoding.Encoder;
  var CompositeEncoder = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.encoding.CompositeEncoder;
  var ClosedSendChannelException = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.ClosedSendChannelException;
  var Map = Kotlin.kotlin.collections.Map;
  var List = Kotlin.kotlin.collections.List;
  var Set = Kotlin.kotlin.collections.Set;
  var SerializationStrategy = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.SerializationStrategy;
  var throwUPAE = Kotlin.throwUPAE;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var Any = Object;
  var PrimitiveClasses$anyClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.anyClass;
  var createKType = Kotlin.createKType;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.builtins.serializer_mours2$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.KSerializer;
  var kotlin_js_internal_StringCompanionObject = Kotlin.kotlin.js.internal.StringCompanionObject;
  var serializer_0 = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.builtins.serializer_6eet4j$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var StructureKind = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.descriptors.StructureKind;
  var SerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.descriptors.SerialDescriptor;
  var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
  var Result = Kotlin.kotlin.Result;
  var Throwable = Error;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  var serializer_1 = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.serializer_saj79j$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var equals = Kotlin.equals;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var Array_0 = Array;
  FirebaseClassDecoder.prototype = Object.create(FirebaseCompositeDecoder.prototype);
  FirebaseClassDecoder.prototype.constructor = FirebaseClassDecoder;
  FirebaseEncoder.prototype = Object.create(TimestampEncoder.prototype);
  FirebaseEncoder.prototype.constructor = FirebaseEncoder;
  FirebaseCompositeEncoder.prototype = Object.create(TimestampEncoder.prototype);
  FirebaseCompositeEncoder.prototype.constructor = FirebaseCompositeEncoder;
  var decode = defineInlineFunction('firebase-kotlin-sdk-firebase-common.dev.gitlive.firebase.decode_o31jf5$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var DeserializationStrategy = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.DeserializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var decode = _.dev.gitlive.firebase.decode_k6f162$;
    var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    function decode$lambda(it) {
      return null;
    }
    return function (T_0, isT, value, decodeDouble) {
      if (decodeDouble === void 0)
        decodeDouble = decode$lambda;
      var tmp$;
      var tmp$_0;
      var strategy = Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_0 : throwCCE();
      return decode(Kotlin.isType(tmp$ = strategy, DeserializationStrategy) ? tmp$ : throwCCE(), value, decodeDouble);
    };
  }));
  function decode$lambda(it) {
    return null;
  }
  function decode_0(strategy, value, decodeDouble) {
    if (decodeDouble === void 0)
      decodeDouble = decode$lambda;
    if (!(value != null || strategy.descriptor.isNullable)) {
      var message = 'Value was null for non-nullable type ' + strategy.descriptor.serialName;
      throw IllegalArgumentException_init(message.toString());
    }return (new FirebaseDecoder(value, decodeDouble)).decodeSerializableValue_w63s0f$(strategy);
  }
  function FirebaseDecoder(value, decodeDouble) {
    this.value_8be2vx$ = value;
    this.decodeDouble_0 = decodeDouble;
  }
  Object.defineProperty(FirebaseDecoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return modules.EmptySerializersModule;
    }
  });
  FirebaseDecoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return structureDecoder(this, descriptor, this.decodeDouble_0);
  };
  FirebaseDecoder.prototype.decodeString = function () {
    return decodeString(this.value_8be2vx$);
  };
  FirebaseDecoder.prototype.decodeDouble = function () {
    return decodeDouble(this.value_8be2vx$, this.decodeDouble_0);
  };
  FirebaseDecoder.prototype.decodeLong = function () {
    return decodeLong(this.value_8be2vx$);
  };
  FirebaseDecoder.prototype.decodeByte = function () {
    return decodeByte(this.value_8be2vx$);
  };
  FirebaseDecoder.prototype.decodeFloat = function () {
    return decodeFloat(this.value_8be2vx$);
  };
  FirebaseDecoder.prototype.decodeInt = function () {
    return decodeInt(this.value_8be2vx$);
  };
  FirebaseDecoder.prototype.decodeShort = function () {
    return decodeShort(this.value_8be2vx$);
  };
  FirebaseDecoder.prototype.decodeBoolean = function () {
    return decodeBoolean(this.value_8be2vx$);
  };
  FirebaseDecoder.prototype.decodeChar = function () {
    return toBoxedChar(decodeChar(this.value_8be2vx$));
  };
  FirebaseDecoder.prototype.decodeEnum_24f42q$ = function (enumDescriptor) {
    return decodeEnum(this.value_8be2vx$, enumDescriptor);
  };
  FirebaseDecoder.prototype.decodeNotNullMark = function () {
    return decodeNotNullMark(this.value_8be2vx$);
  };
  FirebaseDecoder.prototype.decodeNull = function () {
    return decodeNull(this.value_8be2vx$);
  };
  FirebaseDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseDecoder',
    interfaces: [Decoder]
  };
  function FirebaseClassDecoder(decodeDouble, size, containsKey, get) {
    FirebaseCompositeDecoder.call(this, decodeDouble, size, get);
    this.containsKey_0 = containsKey;
    this.index_0 = 0;
  }
  FirebaseClassDecoder.prototype.decodeSequentially = function () {
    return false;
  };
  FirebaseClassDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0;
    var tmp$_1;
    var $receiver = until(this.index_0, descriptor.elementsCount);
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (!descriptor.isElementOptional_za3lpa$(element) || this.containsKey_0(descriptor.getElementName_za3lpa$(element))) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    if ((tmp$ = firstOrNull$result) != null) {
      this.index_0 = tmp$ + 1 | 0;
      tmp$_1 = tmp$;
    } else
      tmp$_1 = null;
    return (tmp$_0 = tmp$_1) != null ? tmp$_0 : -1;
  };
  FirebaseClassDecoder.prototype.decodeNullableSerializableElement_8viuyw$$default = function (descriptor, index, deserializer, previousValue) {
    return this.decodeSerializableElement_12e8id$(descriptor, index, deserializer, previousValue);
  };
  FirebaseClassDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseClassDecoder',
    interfaces: [FirebaseCompositeDecoder]
  };
  function FirebaseCompositeDecoder(decodeDouble, size, get) {
    this.decodeDouble_xypkh$_0 = decodeDouble;
    this.size_lbo8ml$_0 = size;
    this.get_m8brcg$_0 = get;
    this.serializersModule_99p53t$_0 = modules.EmptySerializersModule;
  }
  Object.defineProperty(FirebaseCompositeDecoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.serializersModule_99p53t$_0;
    }
  });
  FirebaseCompositeDecoder.prototype.decodeSequentially = function () {
    return true;
  };
  FirebaseCompositeDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    throw new NotImplementedError();
  };
  FirebaseCompositeDecoder.prototype.decodeCollectionSize_24f42q$ = function (descriptor) {
    return this.size_lbo8ml$_0;
  };
  FirebaseCompositeDecoder.prototype.decodeSerializableElement_12e8id$$default = function (descriptor, index, deserializer, previousValue) {
    return deserializer.deserialize_bq71mq$(new FirebaseDecoder(this.get_m8brcg$_0(descriptor, index), this.decodeDouble_xypkh$_0));
  };
  FirebaseCompositeDecoder.prototype.decodeBooleanElement_szpzho$ = function (descriptor, index) {
    return decodeBoolean(this.get_m8brcg$_0(descriptor, index));
  };
  FirebaseCompositeDecoder.prototype.decodeByteElement_szpzho$ = function (descriptor, index) {
    return decodeByte(this.get_m8brcg$_0(descriptor, index));
  };
  FirebaseCompositeDecoder.prototype.decodeCharElement_szpzho$ = function (descriptor, index) {
    return toBoxedChar(decodeChar(this.get_m8brcg$_0(descriptor, index)));
  };
  FirebaseCompositeDecoder.prototype.decodeDoubleElement_szpzho$ = function (descriptor, index) {
    return decodeDouble(this.get_m8brcg$_0(descriptor, index), this.decodeDouble_xypkh$_0);
  };
  FirebaseCompositeDecoder.prototype.decodeFloatElement_szpzho$ = function (descriptor, index) {
    return decodeFloat(this.get_m8brcg$_0(descriptor, index));
  };
  FirebaseCompositeDecoder.prototype.decodeIntElement_szpzho$ = function (descriptor, index) {
    return decodeInt(this.get_m8brcg$_0(descriptor, index));
  };
  FirebaseCompositeDecoder.prototype.decodeLongElement_szpzho$ = function (descriptor, index) {
    return decodeLong(this.get_m8brcg$_0(descriptor, index));
  };
  FirebaseCompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$$default = function (descriptor, index, deserializer, previousValue) {
    return this.decodeSerializableElement_12e8id$(descriptor, index, deserializer, previousValue);
  };
  FirebaseCompositeDecoder.prototype.decodeShortElement_szpzho$ = function (descriptor, index) {
    return decodeShort(this.get_m8brcg$_0(descriptor, index));
  };
  FirebaseCompositeDecoder.prototype.decodeStringElement_szpzho$ = function (descriptor, index) {
    return decodeString(this.get_m8brcg$_0(descriptor, index));
  };
  FirebaseCompositeDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
  };
  FirebaseCompositeDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseCompositeDecoder',
    interfaces: [CompositeDecoder]
  };
  function decodeString(value) {
    return toString(value);
  }
  function decodeDouble(value, decodeDouble) {
    var tmp$;
    if (Kotlin.isNumber(value))
      return numberToDouble(value);
    else if (typeof value === 'string')
      return toDouble(value);
    else {
      tmp$ = decodeDouble(value);
      if (tmp$ == null) {
        throw SerializationException_init('Expected ' + toString(value) + ' to be double');
      }return tmp$;
    }
  }
  function decodeLong(value) {
    if (Kotlin.isNumber(value))
      return numberToLong(value);
    else if (typeof value === 'string')
      return toLong(value);
    else
      throw SerializationException_init('Expected ' + toString(value) + ' to be long');
  }
  function decodeByte(value) {
    if (Kotlin.isNumber(value))
      return numberToByte(value);
    else if (typeof value === 'string')
      return toByte(value);
    else
      throw SerializationException_init('Expected ' + toString(value) + ' to be byte');
  }
  function decodeFloat(value) {
    if (Kotlin.isNumber(value))
      return numberToDouble(value);
    else if (typeof value === 'string') {
      return toDouble(value);
    } else
      throw SerializationException_init('Expected ' + toString(value) + ' to be float');
  }
  function decodeInt(value) {
    if (Kotlin.isNumber(value))
      return numberToInt(value);
    else if (typeof value === 'string')
      return toInt(value);
    else
      throw SerializationException_init('Expected ' + toString(value) + ' to be int');
  }
  function decodeShort(value) {
    if (Kotlin.isNumber(value))
      return numberToShort(value);
    else if (typeof value === 'string')
      return toShort(value);
    else
      throw SerializationException_init('Expected ' + toString(value) + ' to be short');
  }
  function decodeBoolean(value) {
    var tmp$;
    return typeof (tmp$ = value) === 'boolean' ? tmp$ : throwCCE();
  }
  function decodeChar(value) {
    if (Kotlin.isNumber(value))
      return numberToChar(value);
    else if (typeof value === 'string')
      return value.charCodeAt(0);
    else
      throw SerializationException_init('Expected ' + toString(value) + ' to be char');
  }
  function decodeEnum(value, enumDescriptor) {
    if (Kotlin.isNumber(value))
      return numberToInt(value);
    else if (typeof value === 'string')
      return getElementIndexOrThrow(enumDescriptor, value);
    else
      throw SerializationException_init('Expected ' + toString(value) + ' to be enum');
  }
  function getElementIndexOrThrow($receiver, name) {
    var index = $receiver.getElementIndex_61zpoe$(name);
    if (index === -3)
      throw SerializationException_init($receiver.serialName + " does not contain element with name '" + name + "'");
    return index;
  }
  function decodeNotNullMark(value) {
    return value != null;
  }
  function decodeNull(value) {
    var tmp$;
    return (tmp$ = value) == null || Kotlin.isType(tmp$, Nothing) ? tmp$ : throwCCE();
  }
  function decodeUnit(value) {
    var tmp$;
    Kotlin.isType(tmp$ = value, Object.getPrototypeOf(kotlin.Unit).constructor) ? tmp$ : throwCCE();
  }
  function encode(strategy, value, shouldEncodeElementDefault, positiveInfinity) {
    if (positiveInfinity === void 0)
      positiveInfinity = kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY;
    var $receiver = new FirebaseEncoder(shouldEncodeElementDefault, positiveInfinity);
    $receiver.encodeSerializableValue_tf03ej$(strategy, value);
    return $receiver.value;
  }
  var encode_0 = defineInlineFunction('firebase-kotlin-sdk-firebase-common.dev.gitlive.firebase.encode_xcx3ck$', wrapFunction(function () {
    var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
    var FirebaseEncoder_init = _.dev.gitlive.firebase.FirebaseEncoder;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = _.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = _.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
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
      var FirebaseMapSerializer_init = _.dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
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
      var FirebaseMapSerializer_init = _.dev.gitlive.firebase.FirebaseMapSerializer;
      var Map = Kotlin.kotlin.collections.Map;
      var FirebaseListSerializer_init = _.dev.gitlive.firebase.FirebaseListSerializer;
      var List = Kotlin.kotlin.collections.List;
      var Set = Kotlin.kotlin.collections.Set;
      var SerializationStrategy = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
      var throwCCE = Kotlin.throwCCE;
      var Result = Kotlin.kotlin.Result;
      var Throwable = Error;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var Any = Object;
      var firebaseSerializer$lambda = wrapFunction(function () {
        var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
        var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
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
    return function (T_0, isT, value, shouldEncodeElementDefault, positiveInfinity) {
      if (positiveInfinity === void 0)
        positiveInfinity = kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY;
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
  function FirebaseEncoder(shouldEncodeElementDefault, positiveInfinity) {
    TimestampEncoder.call(this, positiveInfinity);
    this.shouldEncodeElementDefault_8be2vx$ = shouldEncodeElementDefault;
    this.value = null;
    this.serializersModule_jzoa4k$_0 = modules.EmptySerializersModule;
  }
  Object.defineProperty(FirebaseEncoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.serializersModule_jzoa4k$_0;
    }
  });
  FirebaseEncoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return structureEncoder(this, descriptor);
  };
  FirebaseEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
    this.value = value;
  };
  FirebaseEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
    this.value = value;
  };
  FirebaseEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.value = toBoxedChar(value);
  };
  FirebaseEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    this.value = this.encodeTimestamp_14dthe$(value);
  };
  FirebaseEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    this.value = enumDescriptor.getElementName_za3lpa$(index);
  };
  FirebaseEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    this.value = value;
  };
  FirebaseEncoder.prototype.encodeInt_za3lpa$ = function (value) {
    this.value = value;
  };
  FirebaseEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    this.value = value;
  };
  FirebaseEncoder.prototype.encodeNotNullMark = function () {
  };
  FirebaseEncoder.prototype.encodeNull = function () {
    this.value = null;
  };
  FirebaseEncoder.prototype.encodeShort_mq22fl$ = function (value) {
    this.value = value;
  };
  FirebaseEncoder.prototype.encodeString_61zpoe$ = function (value) {
    this.value = value;
  };
  FirebaseEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseEncoder',
    interfaces: [Encoder, TimestampEncoder]
  };
  function TimestampEncoder(positiveInfinity) {
    this.positiveInfinity_8be2vx$ = positiveInfinity;
  }
  TimestampEncoder.prototype.encodeTimestamp_14dthe$ = function (value) {
    if (value === kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY)
      return this.positiveInfinity_8be2vx$;
    else
      return value;
  };
  TimestampEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimestampEncoder',
    interfaces: []
  };
  function FirebaseCompositeEncoder(shouldEncodeElementDefault, positiveInfinity, end, set) {
    if (end === void 0)
      end = FirebaseCompositeEncoder_init$lambda;
    TimestampEncoder.call(this, positiveInfinity);
    this.shouldEncodeElementDefault_j91xmw$_0 = shouldEncodeElementDefault;
    this.end_3fs359$_0 = end;
    this.set_3fjbmc$_0 = set;
    this.serializersModule_f9u0u7$_0 = modules.EmptySerializersModule;
  }
  Object.defineProperty(FirebaseCompositeEncoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.serializersModule_f9u0u7$_0;
    }
  });
  FirebaseCompositeEncoder.prototype.endStructure_24f42q$ = function (descriptor) {
    this.end_3fs359$_0();
  };
  FirebaseCompositeEncoder.prototype.shouldEncodeElementDefault_szpzho$ = function (descriptor, index) {
    return this.shouldEncodeElementDefault_j91xmw$_0;
  };
  FirebaseCompositeEncoder.prototype.encodeNullableSerializableElement_qw92s8$ = function (descriptor, index, serializer, value) {
    var tmp$ = this.set_3fjbmc$_0;
    var tmp$_0;
    if (value != null) {
      var $receiver = new FirebaseEncoder(this.shouldEncodeElementDefault_j91xmw$_0, this.positiveInfinity_8be2vx$);
      $receiver.encodeSerializableValue_tf03ej$(serializer, value);
      tmp$_0 = $receiver.value;
    } else
      tmp$_0 = null;
    tmp$.call(this, descriptor, index, tmp$_0);
  };
  FirebaseCompositeEncoder.prototype.encodeSerializableElement_r4qlx7$ = function (descriptor, index, serializer, value) {
    var tmp$ = this.set_3fjbmc$_0;
    var $receiver = new FirebaseEncoder(this.shouldEncodeElementDefault_j91xmw$_0, this.positiveInfinity_8be2vx$);
    $receiver.encodeSerializableValue_tf03ej$(serializer, value);
    tmp$.call(this, descriptor, index, $receiver.value);
  };
  FirebaseCompositeEncoder.prototype.encodeBooleanElement_qh7jdn$ = function (descriptor, index, value) {
    this.set_3fjbmc$_0(descriptor, index, value);
  };
  FirebaseCompositeEncoder.prototype.encodeByteElement_j0u8y3$ = function (descriptor, index, value) {
    this.set_3fjbmc$_0(descriptor, index, value);
  };
  FirebaseCompositeEncoder.prototype.encodeCharElement_j0tz0d$ = function (descriptor, index, value) {
    this.set_3fjbmc$_0(descriptor, index, toBoxedChar(value));
  };
  FirebaseCompositeEncoder.prototype.encodeDoubleElement_powrwi$ = function (descriptor, index, value) {
    this.set_3fjbmc$_0(descriptor, index, this.encodeTimestamp_14dthe$(value));
  };
  FirebaseCompositeEncoder.prototype.encodeFloatElement_lf6hpt$ = function (descriptor, index, value) {
    this.set_3fjbmc$_0(descriptor, index, value);
  };
  FirebaseCompositeEncoder.prototype.encodeIntElement_ptg7oe$ = function (descriptor, index, value) {
    this.set_3fjbmc$_0(descriptor, index, value);
  };
  FirebaseCompositeEncoder.prototype.encodeLongElement_j0o2mv$ = function (descriptor, index, value) {
    this.set_3fjbmc$_0(descriptor, index, value);
  };
  FirebaseCompositeEncoder.prototype.encodeShortElement_l83pjl$ = function (descriptor, index, value) {
    this.set_3fjbmc$_0(descriptor, index, value);
  };
  FirebaseCompositeEncoder.prototype.encodeStringElement_iij8qq$ = function (descriptor, index, value) {
    this.set_3fjbmc$_0(descriptor, index, value);
  };
  function FirebaseCompositeEncoder_init$lambda() {
    return Unit;
  }
  FirebaseCompositeEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseCompositeEncoder',
    interfaces: [CompositeEncoder, TimestampEncoder]
  };
  function safeOffer($receiver, element) {
    try {
      return !$receiver.isClosedForSend && $receiver.offer_11rb$(element);
    } catch (e) {
      if (Kotlin.isType(e, ClosedSendChannelException)) {
        return false;
      } else
        throw e;
    }
  }
  var firebaseSerializer$lambda = wrapFunction(function () {
    var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (typeClosure$T, isT) {
      return function ($receiver) {
        var T_0 = typeClosure$T;
        var tmp$;
        return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
      };
    };
  });
  var firebaseSerializer = defineInlineFunction('firebase-kotlin-sdk-firebase-common.dev.gitlive.firebase.firebaseSerializer_irb06o$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var wrapFunction = Kotlin.wrapFunction;
    var FirebaseMapSerializer_init = _.dev.gitlive.firebase.FirebaseMapSerializer;
    var Map = Kotlin.kotlin.collections.Map;
    var FirebaseListSerializer_init = _.dev.gitlive.firebase.FirebaseListSerializer;
    var List = Kotlin.kotlin.collections.List;
    var Set = Kotlin.kotlin.collections.Set;
    var SerializationStrategy = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    var Any = Object;
    var firebaseSerializer$lambda = wrapFunction(function () {
      var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
      var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
      var throwCCE = Kotlin.throwCCE;
      return function (typeClosure$T, isT) {
        return function ($receiver) {
          var T_0 = typeClosure$T;
          var tmp$;
          return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(typeClosure$T)), KSerializer) ? tmp$ : throwCCE();
        };
      };
    });
    return function (T_0, isT, $receiver) {
      var tmp$;
      try {
        var tmp$_0;
        tmp$ = new Result(Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$_0 : throwCCE());
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
        if (Kotlin.isType($receiver, Map))
          tmp$_2 = new FirebaseMapSerializer_init();
        else if (Kotlin.isType($receiver, List))
          tmp$_2 = new FirebaseListSerializer_init();
        else if (Kotlin.isType($receiver, Set))
          tmp$_2 = new FirebaseListSerializer_init();
        else
          throw exception;
        tmp$_0_0 = Kotlin.isType(tmp$_3 = tmp$_2, SerializationStrategy) ? tmp$_3 : throwCCE();
      }
      return tmp$_0_0;
    };
  }));
  function FirebaseMapSerializer() {
    this.keys_bfecsh$_0 = this.keys_bfecsh$_0;
    this.map_78rlab$_0 = this.map_78rlab$_0;
    this.descriptor_2tt6hm$_0 = new FirebaseMapSerializer$descriptor$ObjectLiteral(this);
  }
  Object.defineProperty(FirebaseMapSerializer.prototype, 'keys', {
    configurable: true,
    get: function () {
      if (this.keys_bfecsh$_0 == null)
        return throwUPAE('keys');
      return this.keys_bfecsh$_0;
    },
    set: function (keys) {
      this.keys_bfecsh$_0 = keys;
    }
  });
  Object.defineProperty(FirebaseMapSerializer.prototype, 'map', {
    configurable: true,
    get: function () {
      if (this.map_78rlab$_0 == null)
        return throwUPAE('map');
      return this.map_78rlab$_0;
    },
    set: function (map) {
      this.map_78rlab$_0 = map;
    }
  });
  Object.defineProperty(FirebaseMapSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_2tt6hm$_0;
    }
  });
  FirebaseMapSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    this.map = value;
    this.keys = toList(value.keys);
    var collectionEncoder = encoder.beginCollection_szpzho$(this.descriptor, value.size);
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = this.keys.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var tmp$_1, tmp$_2;
      var listValue = getValue(this.map, item);
      var tmp$_3;
      if (listValue != null) {
        var tmp$_4;
        try {
          var tmp$_5;
          tmp$_4 = new Result(Kotlin.isType(tmp$_5 = serializer_1(createKType(PrimitiveClasses$anyClass, [], false)), KSerializer) ? tmp$_5 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$_4 = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver = tmp$_4;
        var tmp$_6, tmp$_0_0;
        var exception = $receiver.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_6 = $receiver.value) == null || Kotlin.isType(tmp$_6, Any) ? tmp$_6 : throwCCE();
        else {
          var tmp$_7, tmp$_8;
          if (Kotlin.isType(listValue, Map))
            tmp$_7 = new FirebaseMapSerializer();
          else if (Kotlin.isType(listValue, List))
            tmp$_7 = new FirebaseListSerializer();
          else if (Kotlin.isType(listValue, Set))
            tmp$_7 = new FirebaseListSerializer();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_8 = tmp$_7, SerializationStrategy) ? tmp$_8 : throwCCE();
        }
        tmp$_3 = tmp$_0_0;
      } else
        tmp$_3 = null;
      var serializer_2 = Kotlin.isType(tmp$_2 = (tmp$_1 = tmp$_3) != null ? tmp$_1 : serializer(Unit), KSerializer) ? tmp$_2 : throwCCE();
      var $receiver_0 = serializer_0(kotlin_js_internal_StringCompanionObject);
      collectionEncoder.encodeSerializableElement_r4qlx7$($receiver_0.descriptor, index_0 * 2 | 0, $receiver_0, item);
      collectionEncoder.encodeNullableSerializableElement_qw92s8$(serializer_2.descriptor, (index_0 * 2 | 0) + 1 | 0, serializer_2, listValue);
    }
    collectionEncoder.endStructure_24f42q$(this.descriptor);
  };
  FirebaseMapSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var tmp$, tmp$_0;
    var collectionDecoder = Kotlin.isType(tmp$ = decoder.beginStructure_24f42q$(this.descriptor), FirebaseCompositeDecoder) ? tmp$ : throwCCE();
    var map = LinkedHashMap_init();
    tmp$_0 = collectionDecoder.decodeCollectionSize_24f42q$(this.descriptor) * 2 | 0;
    for (var index = 0; index < tmp$_0; index += 2) {
    }
    return map;
  };
  function FirebaseMapSerializer$descriptor$ObjectLiteral(this$FirebaseMapSerializer) {
    this.this$FirebaseMapSerializer = this$FirebaseMapSerializer;
    this.kind_2njgsb$_0 = StructureKind.MAP;
    this.serialName_iyb6b4$_0 = 'kotlin.Map<String, Any>';
  }
  Object.defineProperty(FirebaseMapSerializer$descriptor$ObjectLiteral.prototype, 'kind', {
    configurable: true,
    get: function () {
      return this.kind_2njgsb$_0;
    }
  });
  Object.defineProperty(FirebaseMapSerializer$descriptor$ObjectLiteral.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return this.serialName_iyb6b4$_0;
    }
  });
  Object.defineProperty(FirebaseMapSerializer$descriptor$ObjectLiteral.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      return this.this$FirebaseMapSerializer.map.size;
    }
  });
  FirebaseMapSerializer$descriptor$ObjectLiteral.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.this$FirebaseMapSerializer.keys.indexOf_11rb$(name);
  };
  FirebaseMapSerializer$descriptor$ObjectLiteral.prototype.getElementName_za3lpa$ = function (index) {
    return this.this$FirebaseMapSerializer.keys.get_za3lpa$(index);
  };
  FirebaseMapSerializer$descriptor$ObjectLiteral.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return emptyList();
  };
  FirebaseMapSerializer$descriptor$ObjectLiteral.prototype.getElementDescriptor_za3lpa$ = function (index) {
    throw new NotImplementedError();
  };
  FirebaseMapSerializer$descriptor$ObjectLiteral.prototype.isElementOptional_za3lpa$ = function (index) {
    return false;
  };
  FirebaseMapSerializer$descriptor$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SerialDescriptor]
  };
  FirebaseMapSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseMapSerializer',
    interfaces: [KSerializer]
  };
  function FirebaseListSerializer() {
    this.list_6kd0l9$_0 = this.list_6kd0l9$_0;
    this.descriptor_5vdkuq$_0 = new FirebaseListSerializer$descriptor$ObjectLiteral(this);
  }
  Object.defineProperty(FirebaseListSerializer.prototype, 'list', {
    configurable: true,
    get: function () {
      if (this.list_6kd0l9$_0 == null)
        return throwUPAE('list');
      return this.list_6kd0l9$_0;
    },
    set: function (list) {
      this.list_6kd0l9$_0 = list;
    }
  });
  Object.defineProperty(FirebaseListSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_5vdkuq$_0;
    }
  });
  FirebaseListSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    this.list = toList(value);
    var collectionEncoder = encoder.beginCollection_szpzho$(this.descriptor, this.list.size);
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = this.list.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var tmp$_1, tmp$_2;
      var tmp$_3;
      if (item != null) {
        var tmp$_4;
        try {
          var tmp$_5;
          tmp$_4 = new Result(Kotlin.isType(tmp$_5 = serializer_1(createKType(PrimitiveClasses$anyClass, [], false)), KSerializer) ? tmp$_5 : throwCCE());
        } catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            tmp$_4 = new Result(createFailure(e));
          } else
            throw e;
        }
        var $receiver = tmp$_4;
        var tmp$_6, tmp$_0_0;
        var exception = $receiver.exceptionOrNull();
        if (exception == null)
          tmp$_0_0 = (tmp$_6 = $receiver.value) == null || Kotlin.isType(tmp$_6, Any) ? tmp$_6 : throwCCE();
        else {
          var tmp$_7, tmp$_8;
          if (Kotlin.isType(item, Map))
            tmp$_7 = new FirebaseMapSerializer();
          else if (Kotlin.isType(item, List))
            tmp$_7 = new FirebaseListSerializer();
          else if (Kotlin.isType(item, Set))
            tmp$_7 = new FirebaseListSerializer();
          else
            throw exception;
          tmp$_0_0 = Kotlin.isType(tmp$_8 = tmp$_7, SerializationStrategy) ? tmp$_8 : throwCCE();
        }
        tmp$_3 = tmp$_0_0;
      } else
        tmp$_3 = null;
      var serializer_0 = Kotlin.isType(tmp$_2 = (tmp$_1 = tmp$_3) != null ? tmp$_1 : serializer(Unit), KSerializer) ? tmp$_2 : throwCCE();
      collectionEncoder.encodeNullableSerializableElement_qw92s8$(serializer_0.descriptor, index_0, serializer_0, item);
    }
    collectionEncoder.endStructure_24f42q$(this.descriptor);
  };
  FirebaseListSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    throw new NotImplementedError();
  };
  function FirebaseListSerializer$descriptor$ObjectLiteral(this$FirebaseListSerializer) {
    this.this$FirebaseListSerializer = this$FirebaseListSerializer;
    this.kind_ezm5i1$_0 = StructureKind.LIST;
    this.serialName_37fjuk$_0 = 'kotlin.List<Any>';
  }
  Object.defineProperty(FirebaseListSerializer$descriptor$ObjectLiteral.prototype, 'kind', {
    configurable: true,
    get: function () {
      return this.kind_ezm5i1$_0;
    }
  });
  Object.defineProperty(FirebaseListSerializer$descriptor$ObjectLiteral.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return this.serialName_37fjuk$_0;
    }
  });
  Object.defineProperty(FirebaseListSerializer$descriptor$ObjectLiteral.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      return this.this$FirebaseListSerializer.list.size;
    }
  });
  FirebaseListSerializer$descriptor$ObjectLiteral.prototype.getElementIndex_61zpoe$ = function (name) {
    throw new NotImplementedError();
  };
  FirebaseListSerializer$descriptor$ObjectLiteral.prototype.getElementName_za3lpa$ = function (index) {
    throw new NotImplementedError();
  };
  FirebaseListSerializer$descriptor$ObjectLiteral.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return emptyList();
  };
  FirebaseListSerializer$descriptor$ObjectLiteral.prototype.getElementDescriptor_za3lpa$ = function (index) {
    throw new NotImplementedError();
  };
  FirebaseListSerializer$descriptor$ObjectLiteral.prototype.isElementOptional_za3lpa$ = function (index) {
    return false;
  };
  FirebaseListSerializer$descriptor$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SerialDescriptor]
  };
  FirebaseListSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FirebaseListSerializer',
    interfaces: [KSerializer]
  };
  function structureDecoder$lambda$lambda(closure$json) {
    return function (it) {
      return !equals(closure$json[it], undefined);
    };
  }
  function structureDecoder$lambda$lambda_0(closure$json) {
    return function (desc, index) {
      return closure$json[desc.getElementName_za3lpa$(index)];
    };
  }
  function structureDecoder$lambda$lambda_1(closure$it) {
    return function (f, index) {
      return closure$it[index];
    };
  }
  function structureDecoder$lambda$lambda_2(closure$it) {
    return function (f, index) {
      var $receiver = closure$it[index / 2 | 0];
      return index % 2 === 0 ? $receiver[0] : $receiver[1];
    };
  }
  function structureDecoder($receiver, descriptor, decodeDouble) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_0 = Kotlin.isType(tmp$ = descriptor.kind, StructureKind) ? tmp$ : throwCCE();
    if (equals(tmp$_0, StructureKind.CLASS) || equals(tmp$_0, StructureKind.OBJECT)) {
      var json = Kotlin.isType(tmp$_1 = $receiver.value_8be2vx$, Object) ? tmp$_1 : throwCCE();
      var tmp$_4;
      return new FirebaseClassDecoder(decodeDouble, typeof (tmp$_4 = Object.keys($receiver.value_8be2vx$).length) === 'number' ? tmp$_4 : throwCCE(), structureDecoder$lambda$lambda(json), structureDecoder$lambda$lambda_0(json));
    } else if (equals(tmp$_0, StructureKind.LIST)) {
      var it = Kotlin.isArray(tmp$_2 = $receiver.value_8be2vx$) ? tmp$_2 : throwCCE();
      return new FirebaseCompositeDecoder(decodeDouble, it.length, structureDecoder$lambda$lambda_1(it));
    } else if (equals(tmp$_0, StructureKind.MAP)) {
      var it_0 = Kotlin.isArray(tmp$_3 = Object.entries($receiver.value_8be2vx$)) ? tmp$_3 : throwCCE();
      return new FirebaseCompositeDecoder(decodeDouble, it_0.length, structureDecoder$lambda$lambda_2(it_0));
    } else
      return Kotlin.noWhenBranchMatched();
  }
  function structureEncoder$lambda$lambda(closure$it) {
    return function (f, index, value) {
      closure$it[index] = value;
      return Unit;
    };
  }
  function structureEncoder$lambda(closure$lastKey, closure$map) {
    return function (f, index, value) {
      var tmp$;
      if (index % 2 === 0)
        closure$lastKey.v = typeof (tmp$ = value) === 'string' ? tmp$ : throwCCE();
      else
        closure$map[closure$lastKey.v] = value;
      return Unit;
    };
  }
  function structureEncoder$lambda$lambda_0(closure$it, closure$descriptor) {
    return function (f, index, value) {
      closure$it[closure$descriptor.getElementName_za3lpa$(index)] = value;
      return Unit;
    };
  }
  function structureEncoder($receiver, descriptor) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = descriptor.kind, StructureKind) ? tmp$ : throwCCE();
    if (equals(tmp$_0, StructureKind.LIST)) {
      var array = Array_0(descriptor.elementsCount);
      var tmp$_1;
      tmp$_1 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_1; i++) {
        array[i] = null;
      }
      $receiver.value = array;
      return new FirebaseCompositeEncoder($receiver.shouldEncodeElementDefault_8be2vx$, $receiver.positiveInfinity_8be2vx$, void 0, structureEncoder$lambda$lambda(array));
    } else if (equals(tmp$_0, StructureKind.MAP)) {
      var map = json([]);
      var lastKey = {v: ''};
      $receiver.value = map;
      return new FirebaseCompositeEncoder($receiver.shouldEncodeElementDefault_8be2vx$, $receiver.positiveInfinity_8be2vx$, void 0, structureEncoder$lambda(lastKey, map));
    } else if (equals(tmp$_0, StructureKind.CLASS) || equals(tmp$_0, StructureKind.OBJECT)) {
      var $receiver_0 = json([]);
      $receiver.value = $receiver_0;
      return new FirebaseCompositeEncoder($receiver.shouldEncodeElementDefault_8be2vx$, $receiver.positiveInfinity_8be2vx$, void 0, structureEncoder$lambda$lambda_0($receiver_0, descriptor));
    } else
      return Kotlin.noWhenBranchMatched();
  }
  function invoke($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver(), Promise) ? tmp$ : throwCCE();
  }
  function invoke_0($receiver, data) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver(data), Promise) ? tmp$ : throwCCE();
  }
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy;
  var package$dev = _.dev || (_.dev = {});
  var package$gitlive = package$dev.gitlive || (package$dev.gitlive = {});
  var package$firebase = package$gitlive.firebase || (package$gitlive.firebase = {});
  package$firebase.decode_k6f162$ = decode_0;
  package$firebase.FirebaseDecoder = FirebaseDecoder;
  package$firebase.FirebaseClassDecoder = FirebaseClassDecoder;
  package$firebase.FirebaseCompositeDecoder = FirebaseCompositeDecoder;
  package$firebase.getElementIndexOrThrow_luk6xe$ = getElementIndexOrThrow;
  package$firebase.encode_zapi5d$ = encode;
  $$importsForInline$$['firebase-kotlin-sdk-firebase-common'] = _;
  package$firebase.FirebaseEncoder = FirebaseEncoder;
  package$firebase.TimestampEncoder = TimestampEncoder;
  package$firebase.FirebaseCompositeEncoder = FirebaseCompositeEncoder;
  package$firebase.safeOffer_rmur43$ = safeOffer;
  package$firebase.FirebaseMapSerializer = FirebaseMapSerializer;
  package$firebase.FirebaseListSerializer = FirebaseListSerializer;
  package$firebase.structureDecoder_jo2aej$ = structureDecoder;
  package$firebase.structureEncoder_foteh2$ = structureEncoder;
  package$firebase.invoke_p3gkko$ = invoke;
  package$firebase.invoke_451xg8$ = invoke_0;
  FirebaseDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  FirebaseDecoder.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  FirebaseCompositeDecoder.prototype.decodeSerializableElement_186mnl$ = CompositeDecoder.prototype.decodeSerializableElement_186mnl$;
  FirebaseCompositeDecoder.prototype.decodeNullableSerializableElement_pzkbua$ = CompositeDecoder.prototype.decodeNullableSerializableElement_pzkbua$;
  FirebaseCompositeDecoder.prototype.decodeSerializableElement_12e8id$ = CompositeDecoder.prototype.decodeSerializableElement_12e8id$;
  FirebaseCompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$ = CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$;
  FirebaseEncoder.prototype.beginCollection_szpzho$ = Encoder.prototype.beginCollection_szpzho$;
  FirebaseEncoder.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  FirebaseEncoder.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  Object.defineProperty(FirebaseMapSerializer$descriptor$ObjectLiteral.prototype, 'annotations', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'annotations'));
  Object.defineProperty(FirebaseMapSerializer$descriptor$ObjectLiteral.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  Object.defineProperty(FirebaseListSerializer$descriptor$ObjectLiteral.prototype, 'annotations', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'annotations'));
  Object.defineProperty(FirebaseListSerializer$descriptor$ObjectLiteral.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  Kotlin.defineModule('firebase-kotlin-sdk-firebase-common', _);
  return _;
}(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-jsLegacy'), require('kotlinx-coroutines-core')));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-common.js.map
