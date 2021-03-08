(function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy, $module$process, $module$_17def1782b5ee417_kotlinx_nodejs_jsLegacy, $module$firebase_kotlin_sdk_firebase_app, $module$firebase_kotlin_sdk_firebase_firestore, $module$kotlinx_coroutines_core, $module$ktor_ktor_http_jsLegacy, $module$ktor_ktor_client_core_jsLegacy, $module$firebase_kotlin_sdk_firebase_auth) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.ArrayListSerializer;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var equals = Kotlin.equals;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.UnknownFieldException;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.MissingFieldException;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var json = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.json;
  var toString = Kotlin.toString;
  var NullableSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.NullableSerializer;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var FirebaseOptions = $module$firebase_kotlin_sdk_firebase_app.dev.gitlive.firebase.FirebaseOptions;
  var firebase = $module$firebase_kotlin_sdk_firebase_app.dev.gitlive.firebase;
  var initialize = $module$firebase_kotlin_sdk_firebase_app.dev.gitlive.firebase.initialize_kunbu9$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var get_firestore = $module$firebase_kotlin_sdk_firebase_firestore.dev.gitlive.firebase.firestore.get_firestore_jr6r1m$;
  var getKClass = Kotlin.getKClass;
  var createKType = Kotlin.createKType;
  var Unit = Kotlin.kotlin.Unit;
  var awaitClose = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.awaitClose_msfyrq$;
  var callbackFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.callbackFlow_b9ud7o$;
  var collectLatest = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.collectLatest_706ovd$;
  var coroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.coroutineScope_awg8ri$;
  var channelFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.channelFlow_b9ud7o$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var formUrlEncode = $module$ktor_ktor_http_jsLegacy.io.ktor.http.formUrlEncode_nyru4$;
  var HttpClient = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.HttpClient_f0veat$;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var get_auth = $module$firebase_kotlin_sdk_firebase_auth.dev.gitlive.firebase.auth.get_auth_jr6r1m$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var chunked = Kotlin.kotlin.text.chunked_94bcnn$;
  var unboxChar = Kotlin.unboxChar;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var internal_0 = Kotlin.kotlin.coroutines.js.internal;
  var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
  var wrapFunction = Kotlin.wrapFunction;
  var Exception = Kotlin.kotlin.Exception;
  var errorToException = $module$firebase_kotlin_sdk_firebase_firestore.dev.gitlive.firebase.firestore.errorToException_za3rmp$;
  var DeserializationStrategy = $module$firebase_kotlin_sdk_firebase_firestore.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.DeserializationStrategy;
  var throwCCE = Kotlin.throwCCE;
  var decode = $module$firebase_kotlin_sdk_firebase_firestore.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.decode_k6f162$;
  var serializer = $module$firebase_kotlin_sdk_firebase_firestore.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
  var KSerializer = $module$firebase_kotlin_sdk_firebase_firestore.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
  var FlowCollector = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.FlowCollector;
  var transformLatest = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.transformLatest_ig04k9$;
  var takeFrom = $module$ktor_ktor_client_core_jsLegacy.$$importsForInline$$['ktor-ktor-http-jsLegacy'].io.ktor.http.takeFrom_jl1sg7$;
  var utils = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.utils;
  var url = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_ktor_client_core_jsLegacy.$$importsForInline$$['ktor-ktor-http-jsLegacy'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.HttpRequestBuilder;
  var HttpStatement_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.HttpStatement;
  var HttpResponse = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.HttpResponse;
  var complete = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.complete_abn2de$;
  var call = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.call.TypeInfo;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  function GdvmGenericDevice(id, type, time, dev) {
    GdvmGenericDevice$Companion_getInstance();
    if (type === void 0)
      type = listOf('dev');
    this.id = id;
    this.type = type;
    this.time = time;
    this.dev = dev;
  }
  function GdvmGenericDevice$Companion() {
    GdvmGenericDevice$Companion_instance = this;
  }
  GdvmGenericDevice$Companion.prototype.serializer = function () {
    return GdvmGenericDevice$$serializer_getInstance();
  };
  GdvmGenericDevice$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GdvmGenericDevice$Companion_instance = null;
  function GdvmGenericDevice$Companion_getInstance() {
    if (GdvmGenericDevice$Companion_instance === null) {
      new GdvmGenericDevice$Companion();
    }return GdvmGenericDevice$Companion_instance;
  }
  function GdvmGenericDevice$$serializer() {
    this.descriptor_lmyn83$_0 = new PluginGeneratedSerialDescriptor('gdvm.agent.mib.GdvmGenericDevice', this, 4);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('type', true);
    this.descriptor.addElement_ivxn3r$('time', false);
    this.descriptor.addElement_ivxn3r$('dev', false);
    GdvmGenericDevice$$serializer_instance = this;
  }
  Object.defineProperty(GdvmGenericDevice$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_lmyn83$_0;
    }
  });
  GdvmGenericDevice$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.id);
    if (!equals(value.type, listOf('dev')) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer), value.type);
    output.encodeLongElement_j0o2mv$(this.descriptor, 2, value.time);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 3, GdvmDeviceInfo$$serializer_getInstance(), value.dev);
    output.endStructure_24f42q$(this.descriptor);
  };
  GdvmGenericDevice$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeLongElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeSerializableElement_12e8id$(this.descriptor, 3, GdvmDeviceInfo$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return GdvmGenericDevice_init(bitMask0, local0, local1, local2, local3, null);
  };
  GdvmGenericDevice$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new ArrayListSerializer(internal.StringSerializer), internal.LongSerializer, GdvmDeviceInfo$$serializer_getInstance()];
  };
  GdvmGenericDevice$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var GdvmGenericDevice$$serializer_instance = null;
  function GdvmGenericDevice$$serializer_getInstance() {
    if (GdvmGenericDevice$$serializer_instance === null) {
      new GdvmGenericDevice$$serializer();
    }return GdvmGenericDevice$$serializer_instance;
  }
  function GdvmGenericDevice_init(seen1, id, type, time, dev, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(GdvmGenericDevice.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      $this.type = listOf('dev');
    else
      $this.type = type;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('time');
    else
      $this.time = time;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('dev');
    else
      $this.dev = dev;
    return $this;
  }
  GdvmGenericDevice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GdvmGenericDevice',
    interfaces: []
  };
  GdvmGenericDevice.prototype.component1 = function () {
    return this.id;
  };
  GdvmGenericDevice.prototype.component2 = function () {
    return this.type;
  };
  GdvmGenericDevice.prototype.component3 = function () {
    return this.time;
  };
  GdvmGenericDevice.prototype.component4 = function () {
    return this.dev;
  };
  GdvmGenericDevice.prototype.copy_cp742v$ = function (id, type, time, dev) {
    return new GdvmGenericDevice(id === void 0 ? this.id : id, type === void 0 ? this.type : type, time === void 0 ? this.time : time, dev === void 0 ? this.dev : dev);
  };
  GdvmGenericDevice.prototype.toString = function () {
    return 'GdvmGenericDevice(id=' + Kotlin.toString(this.id) + (', type=' + Kotlin.toString(this.type)) + (', time=' + Kotlin.toString(this.time)) + (', dev=' + Kotlin.toString(this.dev)) + ')';
  };
  GdvmGenericDevice.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    result = result * 31 + Kotlin.hashCode(this.dev) | 0;
    return result;
  };
  GdvmGenericDevice.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.time, other.time) && Kotlin.equals(this.dev, other.dev)))));
  };
  function GdvmDeviceQuery(time) {
    GdvmDeviceQuery$Companion_getInstance();
    this.time = time;
  }
  function GdvmDeviceQuery$Companion() {
    GdvmDeviceQuery$Companion_instance = this;
  }
  GdvmDeviceQuery$Companion.prototype.serializer = function () {
    return GdvmDeviceQuery$$serializer_getInstance();
  };
  GdvmDeviceQuery$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GdvmDeviceQuery$Companion_instance = null;
  function GdvmDeviceQuery$Companion_getInstance() {
    if (GdvmDeviceQuery$Companion_instance === null) {
      new GdvmDeviceQuery$Companion();
    }return GdvmDeviceQuery$Companion_instance;
  }
  function GdvmDeviceQuery$$serializer() {
    this.descriptor_8tmt7c$_0 = new PluginGeneratedSerialDescriptor('gdvm.agent.mib.GdvmDeviceQuery', this, 1);
    this.descriptor.addElement_ivxn3r$('time', false);
    GdvmDeviceQuery$$serializer_instance = this;
  }
  Object.defineProperty(GdvmDeviceQuery$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_8tmt7c$_0;
    }
  });
  GdvmDeviceQuery$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.time);
    output.endStructure_24f42q$(this.descriptor);
  };
  GdvmDeviceQuery$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return GdvmDeviceQuery_init(bitMask0, local0, null);
  };
  GdvmDeviceQuery$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer];
  };
  GdvmDeviceQuery$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var GdvmDeviceQuery$$serializer_instance = null;
  function GdvmDeviceQuery$$serializer_getInstance() {
    if (GdvmDeviceQuery$$serializer_instance === null) {
      new GdvmDeviceQuery$$serializer();
    }return GdvmDeviceQuery$$serializer_instance;
  }
  function GdvmDeviceQuery_init(seen1, time, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(GdvmDeviceQuery.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('time');
    else
      $this.time = time;
    return $this;
  }
  GdvmDeviceQuery.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GdvmDeviceQuery',
    interfaces: []
  };
  GdvmDeviceQuery.prototype.component1 = function () {
    return this.time;
  };
  GdvmDeviceQuery.prototype.copy_za3lpa$ = function (time) {
    return new GdvmDeviceQuery(time === void 0 ? this.time : time);
  };
  GdvmDeviceQuery.prototype.toString = function () {
    return 'GdvmDeviceQuery(time=' + Kotlin.toString(this.time) + ')';
  };
  GdvmDeviceQuery.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  GdvmDeviceQuery.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.time, other.time))));
  };
  function Schedule(start, interval, limit) {
    Schedule$Companion_getInstance();
    if (start === void 0)
      start = 0;
    this.start = start;
    this.interval = interval;
    this.limit = limit;
  }
  function Schedule$Companion() {
    Schedule$Companion_instance = this;
  }
  Schedule$Companion.prototype.serializer = function () {
    return Schedule$$serializer_getInstance();
  };
  Schedule$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Schedule$Companion_instance = null;
  function Schedule$Companion_getInstance() {
    if (Schedule$Companion_instance === null) {
      new Schedule$Companion();
    }return Schedule$Companion_instance;
  }
  function Schedule$$serializer() {
    this.descriptor_sz3mrr$_0 = new PluginGeneratedSerialDescriptor('gdvm.agent.mib.Schedule', this, 3);
    this.descriptor.addElement_ivxn3r$('start', true);
    this.descriptor.addElement_ivxn3r$('interval', false);
    this.descriptor.addElement_ivxn3r$('limit', false);
    Schedule$$serializer_instance = this;
  }
  Object.defineProperty(Schedule$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_sz3mrr$_0;
    }
  });
  Schedule$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    if (!equals(value.start, 0) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 0))
      output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.start);
    output.encodeIntElement_ptg7oe$(this.descriptor, 1, value.interval);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.limit);
    output.endStructure_24f42q$(this.descriptor);
  };
  Schedule$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeIntElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Schedule_init(bitMask0, local0, local1, local2, null);
  };
  Schedule$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.IntSerializer, internal.IntSerializer];
  };
  Schedule$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Schedule$$serializer_instance = null;
  function Schedule$$serializer_getInstance() {
    if (Schedule$$serializer_instance === null) {
      new Schedule$$serializer();
    }return Schedule$$serializer_instance;
  }
  function Schedule_init(seen1, start, interval, limit, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Schedule.prototype);
    if ((seen1 & 1) === 0)
      $this.start = 0;
    else
      $this.start = start;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('interval');
    else
      $this.interval = interval;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('limit');
    else
      $this.limit = limit;
    return $this;
  }
  Schedule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Schedule',
    interfaces: []
  };
  Schedule.prototype.component1 = function () {
    return this.start;
  };
  Schedule.prototype.component2 = function () {
    return this.interval;
  };
  Schedule.prototype.component3 = function () {
    return this.limit;
  };
  Schedule.prototype.copy_qt1dr2$ = function (start, interval, limit) {
    return new Schedule(start === void 0 ? this.start : start, interval === void 0 ? this.interval : interval, limit === void 0 ? this.limit : limit);
  };
  Schedule.prototype.toString = function () {
    return 'Schedule(start=' + Kotlin.toString(this.start) + (', interval=' + Kotlin.toString(this.interval)) + (', limit=' + Kotlin.toString(this.limit)) + ')';
  };
  Schedule.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.interval) | 0;
    result = result * 31 + Kotlin.hashCode(this.limit) | 0;
    return result;
  };
  Schedule.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.start, other.start) && Kotlin.equals(this.interval, other.interval) && Kotlin.equals(this.limit, other.limit)))));
  };
  function GdvmDeviceQueryResult(time) {
    GdvmDeviceQueryResult$Companion_getInstance();
    this.time = time;
  }
  function GdvmDeviceQueryResult$Companion() {
    GdvmDeviceQueryResult$Companion_instance = this;
  }
  GdvmDeviceQueryResult$Companion.prototype.serializer = function () {
    return GdvmDeviceQueryResult$$serializer_getInstance();
  };
  GdvmDeviceQueryResult$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GdvmDeviceQueryResult$Companion_instance = null;
  function GdvmDeviceQueryResult$Companion_getInstance() {
    if (GdvmDeviceQueryResult$Companion_instance === null) {
      new GdvmDeviceQueryResult$Companion();
    }return GdvmDeviceQueryResult$Companion_instance;
  }
  function GdvmDeviceQueryResult$$serializer() {
    this.descriptor_aa3xat$_0 = new PluginGeneratedSerialDescriptor('gdvm.agent.mib.GdvmDeviceQueryResult', this, 1);
    this.descriptor.addElement_ivxn3r$('time', false);
    GdvmDeviceQueryResult$$serializer_instance = this;
  }
  Object.defineProperty(GdvmDeviceQueryResult$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_aa3xat$_0;
    }
  });
  GdvmDeviceQueryResult$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.time);
    output.endStructure_24f42q$(this.descriptor);
  };
  GdvmDeviceQueryResult$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return GdvmDeviceQueryResult_init(bitMask0, local0, null);
  };
  GdvmDeviceQueryResult$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer];
  };
  GdvmDeviceQueryResult$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var GdvmDeviceQueryResult$$serializer_instance = null;
  function GdvmDeviceQueryResult$$serializer_getInstance() {
    if (GdvmDeviceQueryResult$$serializer_instance === null) {
      new GdvmDeviceQueryResult$$serializer();
    }return GdvmDeviceQueryResult$$serializer_instance;
  }
  function GdvmDeviceQueryResult_init(seen1, time, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(GdvmDeviceQueryResult.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('time');
    else
      $this.time = time;
    return $this;
  }
  GdvmDeviceQueryResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GdvmDeviceQueryResult',
    interfaces: []
  };
  GdvmDeviceQueryResult.prototype.component1 = function () {
    return this.time;
  };
  GdvmDeviceQueryResult.prototype.copy_za3lpa$ = function (time) {
    return new GdvmDeviceQueryResult(time === void 0 ? this.time : time);
  };
  GdvmDeviceQueryResult.prototype.toString = function () {
    return 'GdvmDeviceQueryResult(time=' + Kotlin.toString(this.time) + ')';
  };
  GdvmDeviceQueryResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  GdvmDeviceQueryResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.time, other.time))));
  };
  function GdvmGenericLog(type, time) {
    GdvmGenericLog$Companion_getInstance();
    this.type = type;
    this.time = time;
  }
  function GdvmGenericLog$Companion() {
    GdvmGenericLog$Companion_instance = this;
  }
  GdvmGenericLog$Companion.prototype.serializer = function () {
    return GdvmGenericLog$$serializer_getInstance();
  };
  GdvmGenericLog$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GdvmGenericLog$Companion_instance = null;
  function GdvmGenericLog$Companion_getInstance() {
    if (GdvmGenericLog$Companion_instance === null) {
      new GdvmGenericLog$Companion();
    }return GdvmGenericLog$Companion_instance;
  }
  function GdvmGenericLog$$serializer() {
    this.descriptor_bu53e7$_0 = new PluginGeneratedSerialDescriptor('gdvm.agent.mib.GdvmGenericLog', this, 2);
    this.descriptor.addElement_ivxn3r$('type', false);
    this.descriptor.addElement_ivxn3r$('time', false);
    GdvmGenericLog$$serializer_instance = this;
  }
  Object.defineProperty(GdvmGenericLog$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_bu53e7$_0;
    }
  });
  GdvmGenericLog$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 0, json.JsonObjectSerializer, value.type);
    output.encodeIntElement_ptg7oe$(this.descriptor, 1, value.time);
    output.endStructure_24f42q$(this.descriptor);
  };
  GdvmGenericLog$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeSerializableElement_12e8id$(this.descriptor, 0, json.JsonObjectSerializer, local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeIntElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return GdvmGenericLog_init(bitMask0, local0, local1, null);
  };
  GdvmGenericLog$$serializer.prototype.childSerializers = function () {
    return [json.JsonObjectSerializer, internal.IntSerializer];
  };
  GdvmGenericLog$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var GdvmGenericLog$$serializer_instance = null;
  function GdvmGenericLog$$serializer_getInstance() {
    if (GdvmGenericLog$$serializer_instance === null) {
      new GdvmGenericLog$$serializer();
    }return GdvmGenericLog$$serializer_instance;
  }
  function GdvmGenericLog_init(seen1, type, time, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(GdvmGenericLog.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('type');
    else
      $this.type = type;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('time');
    else
      $this.time = time;
    return $this;
  }
  GdvmGenericLog.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GdvmGenericLog',
    interfaces: []
  };
  GdvmGenericLog.prototype.component1 = function () {
    return this.type;
  };
  GdvmGenericLog.prototype.component2 = function () {
    return this.time;
  };
  GdvmGenericLog.prototype.copy_6rbl2u$ = function (type, time) {
    return new GdvmGenericLog(type === void 0 ? this.type : type, time === void 0 ? this.time : time);
  };
  GdvmGenericLog.prototype.toString = function () {
    return 'GdvmGenericLog(type=' + Kotlin.toString(this.type) + (', time=' + Kotlin.toString(this.time)) + ')';
  };
  GdvmGenericLog.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  GdvmGenericLog.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.time, other.time)))));
  };
  function GdvmGenericGroup(group, type, time) {
    GdvmGenericGroup$Companion_getInstance();
    this.group = group;
    this.type = type;
    this.time = time;
  }
  function GdvmGenericGroup$Companion() {
    GdvmGenericGroup$Companion_instance = this;
  }
  GdvmGenericGroup$Companion.prototype.serializer = function () {
    return GdvmGenericGroup$$serializer_getInstance();
  };
  GdvmGenericGroup$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GdvmGenericGroup$Companion_instance = null;
  function GdvmGenericGroup$Companion_getInstance() {
    if (GdvmGenericGroup$Companion_instance === null) {
      new GdvmGenericGroup$Companion();
    }return GdvmGenericGroup$Companion_instance;
  }
  function GdvmGenericGroup$$serializer() {
    this.descriptor_mdmqq4$_0 = new PluginGeneratedSerialDescriptor('gdvm.agent.mib.GdvmGenericGroup', this, 3);
    this.descriptor.addElement_ivxn3r$('group', false);
    this.descriptor.addElement_ivxn3r$('type', false);
    this.descriptor.addElement_ivxn3r$('time', false);
    GdvmGenericGroup$$serializer_instance = this;
  }
  Object.defineProperty(GdvmGenericGroup$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_mdmqq4$_0;
    }
  });
  GdvmGenericGroup$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 0, GdvmGroupInfo$$serializer_getInstance(), value.group);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, json.JsonObjectSerializer, value.type);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.time);
    output.endStructure_24f42q$(this.descriptor);
  };
  GdvmGenericGroup$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeSerializableElement_12e8id$(this.descriptor, 0, GdvmGroupInfo$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, json.JsonObjectSerializer, local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return GdvmGenericGroup_init(bitMask0, local0, local1, local2, null);
  };
  GdvmGenericGroup$$serializer.prototype.childSerializers = function () {
    return [GdvmGroupInfo$$serializer_getInstance(), json.JsonObjectSerializer, internal.IntSerializer];
  };
  GdvmGenericGroup$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var GdvmGenericGroup$$serializer_instance = null;
  function GdvmGenericGroup$$serializer_getInstance() {
    if (GdvmGenericGroup$$serializer_instance === null) {
      new GdvmGenericGroup$$serializer();
    }return GdvmGenericGroup$$serializer_instance;
  }
  function GdvmGenericGroup_init(seen1, group, type, time, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(GdvmGenericGroup.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('group');
    else
      $this.group = group;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('type');
    else
      $this.type = type;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('time');
    else
      $this.time = time;
    return $this;
  }
  GdvmGenericGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GdvmGenericGroup',
    interfaces: []
  };
  GdvmGenericGroup.prototype.component1 = function () {
    return this.group;
  };
  GdvmGenericGroup.prototype.component2 = function () {
    return this.type;
  };
  GdvmGenericGroup.prototype.component3 = function () {
    return this.time;
  };
  GdvmGenericGroup.prototype.copy_mwm4q4$ = function (group, type, time) {
    return new GdvmGenericGroup(group === void 0 ? this.group : group, type === void 0 ? this.type : type, time === void 0 ? this.time : time);
  };
  GdvmGenericGroup.prototype.toString = function () {
    return 'GdvmGenericGroup(group=' + Kotlin.toString(this.group) + (', type=' + Kotlin.toString(this.type)) + (', time=' + Kotlin.toString(this.time)) + ')';
  };
  GdvmGenericGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.group) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  GdvmGenericGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.group, other.group) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.time, other.time)))));
  };
  function GdvmDeviceInfo(cluster, password) {
    GdvmDeviceInfo$Companion_getInstance();
    if (password === void 0)
      password = 'Sharp_#1';
    this.cluster = cluster;
    this.password = password;
  }
  function GdvmDeviceInfo$Companion() {
    GdvmDeviceInfo$Companion_instance = this;
  }
  GdvmDeviceInfo$Companion.prototype.serializer = function () {
    return GdvmDeviceInfo$$serializer_getInstance();
  };
  GdvmDeviceInfo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GdvmDeviceInfo$Companion_instance = null;
  function GdvmDeviceInfo$Companion_getInstance() {
    if (GdvmDeviceInfo$Companion_instance === null) {
      new GdvmDeviceInfo$Companion();
    }return GdvmDeviceInfo$Companion_instance;
  }
  function GdvmDeviceInfo$$serializer() {
    this.descriptor_gotvwo$_0 = new PluginGeneratedSerialDescriptor('gdvm.agent.mib.GdvmDeviceInfo', this, 2);
    this.descriptor.addElement_ivxn3r$('cluster', false);
    this.descriptor.addElement_ivxn3r$('password', true);
    GdvmDeviceInfo$$serializer_instance = this;
  }
  Object.defineProperty(GdvmDeviceInfo$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_gotvwo$_0;
    }
  });
  GdvmDeviceInfo$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.cluster);
    if (!equals(value.password, 'Sharp_#1') || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeStringElement_iij8qq$(this.descriptor, 1, value.password);
    output.endStructure_24f42q$(this.descriptor);
  };
  GdvmDeviceInfo$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return GdvmDeviceInfo_init(bitMask0, local0, local1, null);
  };
  GdvmDeviceInfo$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer];
  };
  GdvmDeviceInfo$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var GdvmDeviceInfo$$serializer_instance = null;
  function GdvmDeviceInfo$$serializer_getInstance() {
    if (GdvmDeviceInfo$$serializer_instance === null) {
      new GdvmDeviceInfo$$serializer();
    }return GdvmDeviceInfo$$serializer_instance;
  }
  function GdvmDeviceInfo_init(seen1, cluster, password, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(GdvmDeviceInfo.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('cluster');
    else
      $this.cluster = cluster;
    if ((seen1 & 2) === 0)
      $this.password = 'Sharp_#1';
    else
      $this.password = password;
    return $this;
  }
  GdvmDeviceInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GdvmDeviceInfo',
    interfaces: []
  };
  GdvmDeviceInfo.prototype.component1 = function () {
    return this.cluster;
  };
  GdvmDeviceInfo.prototype.component2 = function () {
    return this.password;
  };
  GdvmDeviceInfo.prototype.copy_puj7f4$ = function (cluster, password) {
    return new GdvmDeviceInfo(cluster === void 0 ? this.cluster : cluster, password === void 0 ? this.password : password);
  };
  GdvmDeviceInfo.prototype.toString = function () {
    return 'GdvmDeviceInfo(cluster=' + Kotlin.toString(this.cluster) + (', password=' + Kotlin.toString(this.password)) + ')';
  };
  GdvmDeviceInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cluster) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    return result;
  };
  GdvmDeviceInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cluster, other.cluster) && Kotlin.equals(this.password, other.password)))));
  };
  function fromJson($receiver, j) {
    return new GdvmDeviceInfo(toString(j.get_11rb$('cluster')), toString(j.get_11rb$('password')));
  }
  function GdvmGroupInfo(parent, users) {
    GdvmGroupInfo$Companion_getInstance();
    this.parent = parent;
    this.users = users;
  }
  function GdvmGroupInfo$Companion() {
    GdvmGroupInfo$Companion_instance = this;
  }
  GdvmGroupInfo$Companion.prototype.serializer = function () {
    return GdvmGroupInfo$$serializer_getInstance();
  };
  GdvmGroupInfo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GdvmGroupInfo$Companion_instance = null;
  function GdvmGroupInfo$Companion_getInstance() {
    if (GdvmGroupInfo$Companion_instance === null) {
      new GdvmGroupInfo$Companion();
    }return GdvmGroupInfo$Companion_instance;
  }
  function GdvmGroupInfo$$serializer() {
    this.descriptor_1uti25$_0 = new PluginGeneratedSerialDescriptor('gdvm.agent.mib.GdvmGroupInfo', this, 2);
    this.descriptor.addElement_ivxn3r$('parent', false);
    this.descriptor.addElement_ivxn3r$('users', false);
    GdvmGroupInfo$$serializer_instance = this;
  }
  Object.defineProperty(GdvmGroupInfo$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_1uti25$_0;
    }
  });
  GdvmGroupInfo$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.parent);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer), value.users);
    output.endStructure_24f42q$(this.descriptor);
  };
  GdvmGroupInfo$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer), local1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return GdvmGroupInfo_init(bitMask0, local0, local1, null);
  };
  GdvmGroupInfo$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new ArrayListSerializer(internal.StringSerializer)];
  };
  GdvmGroupInfo$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var GdvmGroupInfo$$serializer_instance = null;
  function GdvmGroupInfo$$serializer_getInstance() {
    if (GdvmGroupInfo$$serializer_instance === null) {
      new GdvmGroupInfo$$serializer();
    }return GdvmGroupInfo$$serializer_instance;
  }
  function GdvmGroupInfo_init(seen1, parent, users, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(GdvmGroupInfo.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('parent');
    else
      $this.parent = parent;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('users');
    else
      $this.users = users;
    return $this;
  }
  GdvmGroupInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GdvmGroupInfo',
    interfaces: []
  };
  GdvmGroupInfo.prototype.component1 = function () {
    return this.parent;
  };
  GdvmGroupInfo.prototype.component2 = function () {
    return this.users;
  };
  GdvmGroupInfo.prototype.copy_kwv3np$ = function (parent, users) {
    return new GdvmGroupInfo(parent === void 0 ? this.parent : parent, users === void 0 ? this.users : users);
  };
  GdvmGroupInfo.prototype.toString = function () {
    return 'GdvmGroupInfo(parent=' + Kotlin.toString(this.parent) + (', users=' + Kotlin.toString(this.users)) + ')';
  };
  GdvmGroupInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.parent) | 0;
    result = result * 31 + Kotlin.hashCode(this.users) | 0;
    return result;
  };
  GdvmGroupInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.parent, other.parent) && Kotlin.equals(this.users, other.users)))));
  };
  function IdpScDevice(id, type, time, dev) {
    IdpScDevice$Companion_getInstance();
    if (type === void 0)
      type = listOf_0(['dev', 'dev.idp', 'dev.idp.sc']);
    this.id = id;
    this.type = type;
    this.time = time;
    this.dev = dev;
  }
  function IdpScDevice$Companion() {
    IdpScDevice$Companion_instance = this;
  }
  IdpScDevice$Companion.prototype.serializer = function () {
    return IdpScDevice$$serializer_getInstance();
  };
  IdpScDevice$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IdpScDevice$Companion_instance = null;
  function IdpScDevice$Companion_getInstance() {
    if (IdpScDevice$Companion_instance === null) {
      new IdpScDevice$Companion();
    }return IdpScDevice$Companion_instance;
  }
  function IdpScDevice$$serializer() {
    this.descriptor_9ihce8$_0 = new PluginGeneratedSerialDescriptor('IdpScDevice', this, 4);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('type', true);
    this.descriptor.addElement_ivxn3r$('time', false);
    this.descriptor.addElement_ivxn3r$('dev', false);
    IdpScDevice$$serializer_instance = this;
  }
  Object.defineProperty(IdpScDevice$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_9ihce8$_0;
    }
  });
  IdpScDevice$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.id);
    if (!equals(value.type, listOf_0(['dev', 'dev.idp', 'dev.idp.sc'])) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer), value.type);
    output.encodeLongElement_j0o2mv$(this.descriptor, 2, value.time);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 3, GdvmDeviceInfo$$serializer_getInstance(), value.dev);
    output.endStructure_24f42q$(this.descriptor);
  };
  IdpScDevice$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, new ArrayListSerializer(internal.StringSerializer), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeLongElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeSerializableElement_12e8id$(this.descriptor, 3, GdvmDeviceInfo$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return IdpScDevice_init(bitMask0, local0, local1, local2, local3, null);
  };
  IdpScDevice$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new ArrayListSerializer(internal.StringSerializer), internal.LongSerializer, GdvmDeviceInfo$$serializer_getInstance()];
  };
  IdpScDevice$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var IdpScDevice$$serializer_instance = null;
  function IdpScDevice$$serializer_getInstance() {
    if (IdpScDevice$$serializer_instance === null) {
      new IdpScDevice$$serializer();
    }return IdpScDevice$$serializer_instance;
  }
  function IdpScDevice_init(seen1, id, type, time, dev, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(IdpScDevice.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('id');
    else
      $this.id = id;
    if ((seen1 & 2) === 0)
      $this.type = listOf_0(['dev', 'dev.idp', 'dev.idp.sc']);
    else
      $this.type = type;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('time');
    else
      $this.time = time;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('dev');
    else
      $this.dev = dev;
    return $this;
  }
  IdpScDevice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdpScDevice',
    interfaces: []
  };
  IdpScDevice.prototype.component1 = function () {
    return this.id;
  };
  IdpScDevice.prototype.component2 = function () {
    return this.type;
  };
  IdpScDevice.prototype.component3 = function () {
    return this.time;
  };
  IdpScDevice.prototype.component4 = function () {
    return this.dev;
  };
  IdpScDevice.prototype.copy_cp742v$ = function (id, type, time, dev) {
    return new IdpScDevice(id === void 0 ? this.id : id, type === void 0 ? this.type : type, time === void 0 ? this.time : time, dev === void 0 ? this.dev : dev);
  };
  IdpScDevice.prototype.toString = function () {
    return 'IdpScDevice(id=' + Kotlin.toString(this.id) + (', type=' + Kotlin.toString(this.type)) + (', time=' + Kotlin.toString(this.time)) + (', dev=' + Kotlin.toString(this.dev)) + ')';
  };
  IdpScDevice.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    result = result * 31 + Kotlin.hashCode(this.dev) | 0;
    return result;
  };
  IdpScDevice.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.time, other.time) && Kotlin.equals(this.dev, other.dev)))));
  };
  function IdpScDeviceQuery(time, schedule, scCommand, resultTime, result) {
    IdpScDeviceQuery$Companion_getInstance();
    if (schedule === void 0)
      schedule = new Schedule(0, 0, 1);
    this.time = time;
    this.schedule = schedule;
    this.scCommand = scCommand;
    this.resultTime = resultTime;
    this.result = result;
  }
  function IdpScDeviceQuery$Companion() {
    IdpScDeviceQuery$Companion_instance = this;
  }
  IdpScDeviceQuery$Companion.prototype.serializer = function () {
    return IdpScDeviceQuery$$serializer_getInstance();
  };
  IdpScDeviceQuery$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IdpScDeviceQuery$Companion_instance = null;
  function IdpScDeviceQuery$Companion_getInstance() {
    if (IdpScDeviceQuery$Companion_instance === null) {
      new IdpScDeviceQuery$Companion();
    }return IdpScDeviceQuery$Companion_instance;
  }
  function IdpScDeviceQuery$$serializer() {
    this.descriptor_idus1a$_0 = new PluginGeneratedSerialDescriptor('IdpScDeviceQuery', this, 5);
    this.descriptor.addElement_ivxn3r$('time', false);
    this.descriptor.addElement_ivxn3r$('schedule', true);
    this.descriptor.addElement_ivxn3r$('scCommand', false);
    this.descriptor.addElement_ivxn3r$('resultTime', false);
    this.descriptor.addElement_ivxn3r$('result', false);
    IdpScDeviceQuery$$serializer_instance = this;
  }
  Object.defineProperty(IdpScDeviceQuery$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_idus1a$_0;
    }
  });
  IdpScDeviceQuery$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeIntElement_ptg7oe$(this.descriptor, 0, value.time);
    if (!equals(value.schedule, new Schedule(0, 0, 1)) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, Schedule$$serializer_getInstance(), value.schedule);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, new ArrayListSerializer(internal.StringSerializer), value.scCommand);
    output.encodeIntElement_ptg7oe$(this.descriptor, 3, value.resultTime);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 4, new ArrayListSerializer(internal.StringSerializer), value.result);
    output.endStructure_24f42q$(this.descriptor);
  };
  IdpScDeviceQuery$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeIntElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, Schedule$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, new ArrayListSerializer(internal.StringSerializer), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeIntElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 4, new ArrayListSerializer(internal.StringSerializer), local4);
          bitMask0 |= 16;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return IdpScDeviceQuery_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  IdpScDeviceQuery$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, Schedule$$serializer_getInstance(), new ArrayListSerializer(internal.StringSerializer), internal.IntSerializer, new NullableSerializer(new ArrayListSerializer(internal.StringSerializer))];
  };
  IdpScDeviceQuery$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var IdpScDeviceQuery$$serializer_instance = null;
  function IdpScDeviceQuery$$serializer_getInstance() {
    if (IdpScDeviceQuery$$serializer_instance === null) {
      new IdpScDeviceQuery$$serializer();
    }return IdpScDeviceQuery$$serializer_instance;
  }
  function IdpScDeviceQuery_init(seen1, time, schedule, scCommand, resultTime, result, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(IdpScDeviceQuery.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('time');
    else
      $this.time = time;
    if ((seen1 & 2) === 0)
      $this.schedule = new Schedule(0, 0, 1);
    else
      $this.schedule = schedule;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('scCommand');
    else
      $this.scCommand = scCommand;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('resultTime');
    else
      $this.resultTime = resultTime;
    if ((seen1 & 16) === 0)
      throw new MissingFieldException('result');
    else
      $this.result = result;
    return $this;
  }
  IdpScDeviceQuery.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdpScDeviceQuery',
    interfaces: []
  };
  IdpScDeviceQuery.prototype.component1 = function () {
    return this.time;
  };
  IdpScDeviceQuery.prototype.component2 = function () {
    return this.schedule;
  };
  IdpScDeviceQuery.prototype.component3 = function () {
    return this.scCommand;
  };
  IdpScDeviceQuery.prototype.component4 = function () {
    return this.resultTime;
  };
  IdpScDeviceQuery.prototype.component5 = function () {
    return this.result;
  };
  IdpScDeviceQuery.prototype.copy_xutpft$ = function (time, schedule, scCommand, resultTime, result) {
    return new IdpScDeviceQuery(time === void 0 ? this.time : time, schedule === void 0 ? this.schedule : schedule, scCommand === void 0 ? this.scCommand : scCommand, resultTime === void 0 ? this.resultTime : resultTime, result === void 0 ? this.result : result);
  };
  IdpScDeviceQuery.prototype.toString = function () {
    return 'IdpScDeviceQuery(time=' + Kotlin.toString(this.time) + (', schedule=' + Kotlin.toString(this.schedule)) + (', scCommand=' + Kotlin.toString(this.scCommand)) + (', resultTime=' + Kotlin.toString(this.resultTime)) + (', result=' + Kotlin.toString(this.result)) + ')';
  };
  IdpScDeviceQuery.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    result = result * 31 + Kotlin.hashCode(this.schedule) | 0;
    result = result * 31 + Kotlin.hashCode(this.scCommand) | 0;
    result = result * 31 + Kotlin.hashCode(this.resultTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.result) | 0;
    return result;
  };
  IdpScDeviceQuery.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.time, other.time) && Kotlin.equals(this.schedule, other.schedule) && Kotlin.equals(this.scCommand, other.scCommand) && Kotlin.equals(this.resultTime, other.resultTime) && Kotlin.equals(this.result, other.result)))));
  };
  function decode$lambda(it) {
    return null;
  }
  function decode$lambda_0(it) {
    var tmp$, tmp$_0;
    return typeof (tmp$_0 = ((tmp$ = it.toMillis != undefined ? it : null) != null ? tmp$ : null).toMillis()) === 'number' ? tmp$_0 : null;
  }
  var DocumentSnapshot$data$lambda = wrapFunction(function () {
    var DeserializationStrategy = $module$firebase_kotlin_sdk_firebase_firestore.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.DeserializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    var decode = $module$firebase_kotlin_sdk_firebase_firestore.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].dev.gitlive.firebase.decode_k6f162$;
    var serializer = $module$firebase_kotlin_sdk_firebase_firestore.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_saj79j$;
    var KSerializer = $module$firebase_kotlin_sdk_firebase_firestore.$$importsForInline$$['firebase-kotlin-sdk-firebase-common'].$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
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
  function collect$ObjectLiteral(closure$action) {
    this.closure$action = closure$action;
  }
  collect$ObjectLiteral.prototype.emit_11rb$ = function (value, continuation) {
    return this.closure$action(value, continuation);
  };
  collect$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [FlowCollector]};
  var flatMapLatest$lambda = wrapFunction(function () {
    function Coroutine$flatMapLatest$lambda(closure$transform_0, $receiver_0, it_0, controller, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.$controller = controller;
      this.exceptionState_0 = 1;
      this.local$closure$transform = closure$transform_0;
      this.local$$receiver = $receiver_0;
      this.local$it = it_0;
    }
    Coroutine$flatMapLatest$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
    Coroutine$flatMapLatest$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$flatMapLatest$lambda.prototype.constructor = Coroutine$flatMapLatest$lambda;
    Coroutine$flatMapLatest$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              this.state_0 = 2;
              this.result_0 = this.local$closure$transform(this.local$it, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 1:
              throw this.exception_0;
            case 2:
              this.state_0 = 3;
              this.result_0 = this.result_0.collect_42ocv1$(this.local$$receiver, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            case 3:
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
    return function (closure$transform_0) {
      return function ($receiver_0, it_0, continuation_0, suspended) {
        var instance = new Coroutine$flatMapLatest$lambda(closure$transform_0, $receiver_0, it_0, this, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    };
  });
  function get$lambda($receiver) {
    return Unit;
  }
  function Coroutine$main(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$main.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main.prototype.constructor = Coroutine$main;
  Coroutine$main.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            $module$process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
            require('global-agent/bootstrap');
            var opts = new FirebaseOptions('1:307495712434:web:acc483c0c300549ff33bab', 'AIzaSyDrO7W7Sb6RCpHTsY3GaP-zODRP_HtY4nI', 'https://road-to-iot.firebaseio.com', void 0, void 0, 'road-to-iot');
            initialize(firebase.Firebase, null, opts);
            println('start client');
            this.state_0 = 2;
            this.result_0 = mainGenericDevice('PSDD', '1234eeee', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  function main(continuation_0, suspended) {
    var instance = new Coroutine$main(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$mainGenericDevice$lambda$lambda$lambda$lambda(this$_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$it = it_0;
  }
  Coroutine$mainGenericDevice$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainGenericDevice$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainGenericDevice$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$mainGenericDevice$lambda$lambda$lambda$lambda;
  Coroutine$mainGenericDevice$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$ = this.local$this$;
            var rethrow$result;
            try {
              var value = this.local$it.js.data();
              var tmp$_0;
              var tmp$_0_0;
              var strategy = Kotlin.isType(tmp$_0_0 = serializer(createKType(getKClass(GdvmGenericDevice), [], false)), KSerializer) ? tmp$_0_0 : throwCCE();
              rethrow$result = decode(Kotlin.isType(tmp$_0 = strategy, DeserializationStrategy) ? tmp$_0 : throwCCE(), value, decode$lambda_0);
            } catch (e_0) {
              if (Kotlin.isType(e_0, Exception)) {
                throw e_0;
              } else {
                throw errorToException(e_0);
              }
            }

            return tmp$.offer_11rb$(rethrow$result);
          case 1:
            throw this.exception_0;
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
  function mainGenericDevice$lambda$lambda$lambda$lambda(this$_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$mainGenericDevice$lambda$lambda$lambda$lambda(this$_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$mainGenericDevice$lambda$lambda$lambda(closure$db_0, closure$deviceId_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$db = closure$db_0;
    this.local$closure$deviceId = closure$deviceId_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$mainGenericDevice$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainGenericDevice$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainGenericDevice$lambda$lambda$lambda.prototype.constructor = Coroutine$mainGenericDevice$lambda$lambda$lambda;
  Coroutine$mainGenericDevice$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$db.collection_61zpoe$('device').document_61zpoe$(this.local$closure$deviceId).snapshots.collect_42ocv1$(new collect$ObjectLiteral(mainGenericDevice$lambda$lambda$lambda$lambda(this.local$$receiver)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            this.state_0 = 3;
            this.result_0 = awaitClose(this.local$$receiver, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function mainGenericDevice$lambda$lambda$lambda(closure$db_0, closure$deviceId_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mainGenericDevice$lambda$lambda$lambda(closure$db_0, closure$deviceId_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$mainGenericDevice$lambda$lambda(closure$deviceId_0, closure$db_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$deviceId = closure$deviceId_0;
    this.local$closure$db = closure$db_0;
  }
  Coroutine$mainGenericDevice$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainGenericDevice$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainGenericDevice$lambda$lambda.prototype.constructor = Coroutine$mainGenericDevice$lambda$lambda;
  Coroutine$mainGenericDevice$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            println('Signed-in: ' + this.local$closure$deviceId + ' ' + (new Date()).toTimeString());
            return callbackFlow(mainGenericDevice$lambda$lambda$lambda(this.local$closure$db, this.local$closure$deviceId));
          case 1:
            throw this.exception_0;
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
  function mainGenericDevice$lambda$lambda(closure$deviceId_0, closure$db_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$mainGenericDevice$lambda$lambda(closure$deviceId_0, closure$db_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$mainGenericDevice$lambda$lambda_0(dev_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$dev = dev_0;
  }
  Coroutine$mainGenericDevice$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainGenericDevice$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainGenericDevice$lambda$lambda_0.prototype.constructor = Coroutine$mainGenericDevice$lambda$lambda_0;
  Coroutine$mainGenericDevice$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            println('Device: ' + this.local$dev);
            if (this.local$dev.type.contains_11rb$('dev.idp.sc')) {
              this.state_0 = 2;
              this.result_0 = runIdpDevice(this.local$dev, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            return Unit;
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
  function mainGenericDevice$lambda$lambda_0(dev_0, continuation_0, suspended) {
    var instance = new Coroutine$mainGenericDevice$lambda$lambda_0(dev_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$mainGenericDevice$lambda(closure$deviceId_0, closure$secret_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$deviceId = closure$deviceId_0;
    this.local$closure$secret = closure$secret_0;
    this.local$db = void 0;
  }
  Coroutine$mainGenericDevice$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mainGenericDevice$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mainGenericDevice$lambda.prototype.constructor = Coroutine$mainGenericDevice$lambda;
  Coroutine$mainGenericDevice$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$db = get_firestore(firebase.Firebase);
            this.state_0 = 2;
            this.result_0 = siginInWithCustomToken(this.local$closure$deviceId, this.local$closure$secret, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = collectLatest(transformLatest(this.result_0, flatMapLatest$lambda(mainGenericDevice$lambda$lambda(this.local$closure$deviceId, this.local$db))), mainGenericDevice$lambda$lambda_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function mainGenericDevice$lambda(closure$deviceId_0, closure$secret_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$mainGenericDevice$lambda(closure$deviceId_0, closure$secret_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function mainGenericDevice(deviceId, secret, continuation) {
    return coroutineScope(mainGenericDevice$lambda(deviceId, secret), continuation);
  }
  function Coroutine$runIdpDevice$lambda$lambda(closure$it_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$it = closure$it_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$runIdpDevice$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runIdpDevice$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runIdpDevice$lambda$lambda.prototype.constructor = Coroutine$runIdpDevice$lambda$lambda;
  Coroutine$runIdpDevice$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            tmp$ = this.local$closure$it.documents.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              var rethrow$result;
              try {
                var value = element.js.data();
                var tmp$_0;
                var tmp$_0_0;
                var strategy = Kotlin.isType(tmp$_0_0 = serializer(createKType(getKClass(IdpScDeviceQuery), [], false)), KSerializer) ? tmp$_0_0 : throwCCE();
                rethrow$result = decode(Kotlin.isType(tmp$_0 = strategy, DeserializationStrategy) ? tmp$_0 : throwCCE(), value, decode$lambda_0);
              } catch (e_0) {
                if (Kotlin.isType(e_0, Exception)) {
                  throw e_0;
                } else {
                  throw errorToException(e_0);
                }
              }
              this.local$$receiver.offer_11rb$(rethrow$result);
            }

            return Unit;
          case 1:
            throw this.exception_0;
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
  function runIdpDevice$lambda$lambda(closure$it_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$runIdpDevice$lambda$lambda(closure$it_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$runIdpDevice$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$runIdpDevice$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runIdpDevice$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runIdpDevice$lambda.prototype.constructor = Coroutine$runIdpDevice$lambda;
  Coroutine$runIdpDevice$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return channelFlow(runIdpDevice$lambda$lambda(this.local$it));
          case 1:
            throw this.exception_0;
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
  function runIdpDevice$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$runIdpDevice$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$runIdpDevice$lambda_0(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$runIdpDevice$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runIdpDevice$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runIdpDevice$lambda_0.prototype.constructor = Coroutine$runIdpDevice$lambda_0;
  Coroutine$runIdpDevice$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return println(this.local$it), Unit;
          case 1:
            throw this.exception_0;
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
  function runIdpDevice$lambda_0(it_0, continuation_0, suspended) {
    var instance = new Coroutine$runIdpDevice$lambda_0(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$runIdpDevice(dev_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$dev = dev_0;
  }
  Coroutine$runIdpDevice.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runIdpDevice.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runIdpDevice.prototype.constructor = Coroutine$runIdpDevice;
  Coroutine$runIdpDevice.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var db = get_firestore(firebase.Firebase);
            this.state_0 = 2;
            this.result_0 = collectLatest(transformLatest(db.collection_61zpoe$('device').document_61zpoe$(this.local$dev.id).collection_61zpoe$('query').snapshots, flatMapLatest$lambda(runIdpDevice$lambda)), runIdpDevice$lambda_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  function runIdpDevice(dev_0, continuation_0, suspended) {
    var instance = new Coroutine$runIdpDevice(dev_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$siginInWithCustomToken(deviceId_0, secret_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$response = void 0;
    this.local$auth = void 0;
    this.local$deviceId = deviceId_0;
    this.local$secret = secret_0;
  }
  Coroutine$siginInWithCustomToken.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$siginInWithCustomToken.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$siginInWithCustomToken.prototype.constructor = Coroutine$siginInWithCustomToken;
  Coroutine$siginInWithCustomToken.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var customTokenSvr = 'https://us-central1-road-to-iot.cloudfunctions.net/requestToken';
            var urlQuery = formUrlEncode(listOf_0([to('id', this.local$deviceId), to('pw', this.local$secret)]));
            var urlCustomToken = customTokenSvr + '/customToken?' + urlQuery;
            println('Request Custom Token: ' + urlCustomToken);
            var $receiver_0 = HttpClient();
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, urlCustomToken);
            get$lambda($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = PrimitiveClasses$stringClass;
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = typeof (tmp$_5 = $this_0) === 'string' ? tmp$_5 : throwCCE();
              this.state_0 = 9;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 7;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = new TypeInfo_init(PrimitiveClasses$stringClass, call.JsType, createKType(PrimitiveClasses$stringClass, [], false));
              } catch (_) {
                typeInfo$result_0 = new TypeInfo_init(PrimitiveClasses$stringClass, call.JsType);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_jo9acv$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = typeof (tmp$_7 = this.result_0) === 'string' ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 8;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            this.result_0 = typeof (tmp$_6 = this.result_0) === 'string' ? tmp$_6 : throwCCE();
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.result_0;
            var customToken = this.result_0;
            println('Custom Token Claim ' + claim(customToken));
            this.local$auth = get_auth(firebase.Firebase);
            this.state_0 = 10;
            this.result_0 = this.local$auth.signInWithCustomToken_61zpoe$(customToken, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            return this.local$auth.authStateChanged;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function siginInWithCustomToken(deviceId_0, secret_0, continuation_0, suspended) {
    var instance = new Coroutine$siginInWithCustomToken(deviceId_0, secret_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function claim($receiver) {
    return fromBase64(first(drop(split($receiver, ['.']), 1)));
  }
  function fromBase64($receiver) {
    var $receiver_0 = chunked($receiver, 4);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var destination_0 = ArrayList_init(item.length);
      var tmp$_1;
      tmp$_1 = iterator(item);
      while (tmp$_1.hasNext()) {
        var item_0 = unboxChar(tmp$_1.next());
        destination_0.add_11rb$(indexOf('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', unboxChar(toBoxedChar(item_0))));
      }
      var tmp$_2, tmp$_0_0;
      var index = 0;
      var accumulator = 0;
      tmp$_2 = destination_0.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        accumulator = accumulator | element << 18 - (6 * checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0)) | 0);
      }
      tmp$_0.call(destination, accumulator);
    }
    var destination_1 = ArrayList_init_0();
    var tmp$_3;
    tmp$_3 = destination.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      var $receiver_1 = new IntRange(0, 2);
      var destination_2 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_4;
      tmp$_4 = $receiver_1.iterator();
      while (tmp$_4.hasNext()) {
        var item_1 = tmp$_4.next();
        destination_2.add_11rb$(toBoxedChar(toChar(element_0 >> 16 - (8 * item_1 | 0) & 255)));
      }
      var list = destination_2;
      addAll(destination_1, list);
    }
    return joinToString(destination_1, '');
  }
  Object.defineProperty(GdvmGenericDevice, 'Companion', {
    get: GdvmGenericDevice$Companion_getInstance
  });
  Object.defineProperty(GdvmGenericDevice, '$serializer', {
    get: GdvmGenericDevice$$serializer_getInstance
  });
  var package$gdvm = _.gdvm || (_.gdvm = {});
  var package$agent = package$gdvm.agent || (package$gdvm.agent = {});
  var package$mib = package$agent.mib || (package$agent.mib = {});
  package$mib.GdvmGenericDevice_init_yt89qr$ = GdvmGenericDevice_init;
  package$mib.GdvmGenericDevice = GdvmGenericDevice;
  Object.defineProperty(GdvmDeviceQuery, 'Companion', {
    get: GdvmDeviceQuery$Companion_getInstance
  });
  Object.defineProperty(GdvmDeviceQuery, '$serializer', {
    get: GdvmDeviceQuery$$serializer_getInstance
  });
  package$mib.GdvmDeviceQuery_init_4n7ppb$ = GdvmDeviceQuery_init;
  package$mib.GdvmDeviceQuery = GdvmDeviceQuery;
  Object.defineProperty(Schedule, 'Companion', {
    get: Schedule$Companion_getInstance
  });
  Object.defineProperty(Schedule, '$serializer', {
    get: Schedule$$serializer_getInstance
  });
  package$mib.Schedule_init_ei4ty7$ = Schedule_init;
  package$mib.Schedule = Schedule;
  Object.defineProperty(GdvmDeviceQueryResult, 'Companion', {
    get: GdvmDeviceQueryResult$Companion_getInstance
  });
  Object.defineProperty(GdvmDeviceQueryResult, '$serializer', {
    get: GdvmDeviceQueryResult$$serializer_getInstance
  });
  package$mib.GdvmDeviceQueryResult_init_4n7ppb$ = GdvmDeviceQueryResult_init;
  package$mib.GdvmDeviceQueryResult = GdvmDeviceQueryResult;
  Object.defineProperty(GdvmGenericLog, 'Companion', {
    get: GdvmGenericLog$Companion_getInstance
  });
  Object.defineProperty(GdvmGenericLog, '$serializer', {
    get: GdvmGenericLog$$serializer_getInstance
  });
  package$mib.GdvmGenericLog_init_mw1h8y$ = GdvmGenericLog_init;
  package$mib.GdvmGenericLog = GdvmGenericLog;
  Object.defineProperty(GdvmGenericGroup, 'Companion', {
    get: GdvmGenericGroup$Companion_getInstance
  });
  Object.defineProperty(GdvmGenericGroup, '$serializer', {
    get: GdvmGenericGroup$$serializer_getInstance
  });
  package$mib.GdvmGenericGroup_init_tzhvk9$ = GdvmGenericGroup_init;
  package$mib.GdvmGenericGroup = GdvmGenericGroup;
  Object.defineProperty(GdvmDeviceInfo, 'Companion', {
    get: GdvmDeviceInfo$Companion_getInstance
  });
  Object.defineProperty(GdvmDeviceInfo, '$serializer', {
    get: GdvmDeviceInfo$$serializer_getInstance
  });
  package$mib.GdvmDeviceInfo_init_1jgqbb$ = GdvmDeviceInfo_init;
  package$mib.GdvmDeviceInfo = GdvmDeviceInfo;
  package$mib.fromJson_vhmyk6$ = fromJson;
  Object.defineProperty(GdvmGroupInfo, 'Companion', {
    get: GdvmGroupInfo$Companion_getInstance
  });
  Object.defineProperty(GdvmGroupInfo, '$serializer', {
    get: GdvmGroupInfo$$serializer_getInstance
  });
  package$mib.GdvmGroupInfo_init_ac7b0e$ = GdvmGroupInfo_init;
  package$mib.GdvmGroupInfo = GdvmGroupInfo;
  Object.defineProperty(IdpScDevice, 'Companion', {
    get: IdpScDevice$Companion_getInstance
  });
  Object.defineProperty(IdpScDevice, '$serializer', {
    get: IdpScDevice$$serializer_getInstance
  });
  _.IdpScDevice_init_yt89qr$ = IdpScDevice_init;
  _.IdpScDevice = IdpScDevice;
  Object.defineProperty(IdpScDeviceQuery, 'Companion', {
    get: IdpScDeviceQuery$Companion_getInstance
  });
  Object.defineProperty(IdpScDeviceQuery, '$serializer', {
    get: IdpScDeviceQuery$$serializer_getInstance
  });
  _.IdpScDeviceQuery_init_kdy9ra$ = IdpScDeviceQuery_init;
  _.IdpScDeviceQuery = IdpScDeviceQuery;
  $$importsForInline$$['17def1782b5ee417-kotlinx-nodejs-jsLegacy'] = $module$_17def1782b5ee417_kotlinx_nodejs_jsLegacy;
  _.main = main;
  $$importsForInline$$['firebase-kotlin-sdk-firebase-firestore'] = $module$firebase_kotlin_sdk_firebase_firestore;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  _.mainGenericDevice_puj7f4$ = mainGenericDevice;
  _.runIdpDevice_u7909a$ = runIdpDevice;
  $$importsForInline$$['ktor-ktor-client-core-jsLegacy'] = $module$ktor_ktor_client_core_jsLegacy;
  _.siginInWithCustomToken_puj7f4$ = siginInWithCustomToken;
  _.claim_pdl1vz$ = claim;
  _.fromBase64_pdl1vz$ = fromBase64;
  GdvmGenericDevice$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  GdvmGenericDevice$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  GdvmDeviceQuery$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  GdvmDeviceQuery$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Schedule$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  Schedule$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  GdvmDeviceQueryResult$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  GdvmDeviceQueryResult$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  GdvmGenericLog$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  GdvmGenericLog$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  GdvmGenericGroup$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  GdvmGenericGroup$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  GdvmDeviceInfo$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  GdvmDeviceInfo$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  GdvmGroupInfo$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  GdvmGroupInfo$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  IdpScDevice$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  IdpScDevice$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  IdpScDeviceQuery$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  IdpScDeviceQuery$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  main(internal_0.EmptyContinuation, false);
  Kotlin.defineModule('AgNodeKt', _);
  return _;
}(module.exports, require('kotlin'), require('kotlinx-serialization-kotlinx-serialization-core-jsLegacy'), require('process'), require('17def1782b5ee417-kotlinx-nodejs-jsLegacy'), require('firebase-kotlin-sdk-firebase-app'), require('firebase-kotlin-sdk-firebase-firestore'), require('kotlinx-coroutines-core'), require('ktor-ktor-http-jsLegacy'), require('ktor-ktor-client-core-jsLegacy'), require('firebase-kotlin-sdk-firebase-auth')));

//# sourceMappingURL=AgNodeKt.js.map
