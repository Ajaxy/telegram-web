/*! File generated by TLObjects' generator. All changes will be ERASED !*/
const { TLObject } = require('../tlobject');
const { TLRequest } = require('../tlobject');
const struct = require('python-struct');
const { readBigIntFromBuffer, 
        readBufferFromBigInt, generateRandomBytes } = require('../../Helpers')


class InvokeAfterMsgRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0xcb9f372d;
    static SUBCLASS_OF_ID = 0xb7b2364b;

    /**
    :returns X: This type has no constructors.
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0xcb9f372d;
        this.SUBCLASS_OF_ID = 0xb7b2364b;

        this.msgId = args.msgId;
        this.query = args.query;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("2d379fcb","hex"),
            readBufferFromBigInt(this.msgId,8,true,true),
            this.query.getBytes(),
            ])
        }
    static fromReader(reader) {
        let _X;
        let _msg_id;
        let _query;
        let _x;
        let len;
        _msg_id = reader.readLong();
        _query = reader.tgReadObject();
        return new this({msgId:_msg_id,
	query:_query})
    }
}


class InvokeAfterMsgsRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0x3dc4b4f0;
    static SUBCLASS_OF_ID = 0xb7b2364b;

    /**
    :returns X: This type has no constructors.
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0x3dc4b4f0;
        this.SUBCLASS_OF_ID = 0xb7b2364b;

        this.msgIds = args.msgIds;
        this.query = args.query;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("f0b4c43d","hex"),
            Buffer.from('15c4b51c', 'hex'),struct.pack('<i', this.msgIds.length),Buffer.concat(this.msgIds.map(x => readBufferFromBigInt(x,8,true,true))),
            this.query.getBytes(),
            ])
        }
    static fromReader(reader) {
        let _X;
        let _msg_ids;
        let _query;
        let _x;
        let len;
        reader.readInt();
        _msg_ids = [];
        len = reader.readInt();
        for (let i=0;i<len;i++){
            _x = reader.readLong();
            _msg_ids.push(_x);
            }
            _query = reader.tgReadObject();
            return new this({msgIds:_msg_ids,
	query:_query})
        }
    }


class InitConnectionRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0x785188b8;
    static SUBCLASS_OF_ID = 0xb7b2364b;

    /**
    :returns X: This type has no constructors.
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0x785188b8;
        this.SUBCLASS_OF_ID = 0xb7b2364b;

        this.apiId = args.apiId;
        this.deviceModel = args.deviceModel;
        this.systemVersion = args.systemVersion;
        this.appVersion = args.appVersion;
        this.systemLangCode = args.systemLangCode;
        this.langPack = args.langPack;
        this.langCode = args.langCode;
        this.proxy = args.proxy || null;
        this.query = args.query;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("b8885178","hex"),
            struct.pack('<I', (this.proxy === undefined || this.proxy === false || this.proxy === null) ? 0 : 1),
            struct.pack('<i', this.apiId),
            TLObject.serializeBytes(this.deviceModel),
            TLObject.serializeBytes(this.systemVersion),
            TLObject.serializeBytes(this.appVersion),
            TLObject.serializeBytes(this.systemLangCode),
            TLObject.serializeBytes(this.langPack),
            TLObject.serializeBytes(this.langCode),
            (this.proxy === undefined || this.proxy === false || this.proxy ===null) ? Buffer.alloc(0) : [this.proxy.getBytes()],
            this.query.getBytes(),
            ])
        }
    static fromReader(reader) {
        let _X;
        let _flags;
        let _api_id;
        let _device_model;
        let _system_version;
        let _app_version;
        let _system_lang_code;
        let _lang_pack;
        let _lang_code;
        let _proxy;
        let _query;
        let _x;
        let len;
        let flags = reader.readInt();

        _api_id = reader.readInt();
        _device_model = reader.tgReadString();
        _system_version = reader.tgReadString();
        _app_version = reader.tgReadString();
        _system_lang_code = reader.tgReadString();
        _lang_pack = reader.tgReadString();
        _lang_code = reader.tgReadString();
        if (flags & 1) {
            _proxy = reader.tgReadObject();
        }
        else {
            _proxy = null
        }
        _query = reader.tgReadObject();
        return new this({apiId:_api_id,
	deviceModel:_device_model,
	systemVersion:_system_version,
	appVersion:_app_version,
	systemLangCode:_system_lang_code,
	langPack:_lang_pack,
	langCode:_lang_code,
	proxy:_proxy,
	query:_query})
    }
}


class InvokeWithLayerRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0xda9b0d0d;
    static SUBCLASS_OF_ID = 0xb7b2364b;

    /**
    :returns X: This type has no constructors.
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0xda9b0d0d;
        this.SUBCLASS_OF_ID = 0xb7b2364b;

        this.layer = args.layer;
        this.query = args.query;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("0d0d9bda","hex"),
            struct.pack('<i', this.layer),
            this.query.getBytes(),
            ])
        }
    static fromReader(reader) {
        let _X;
        let _layer;
        let _query;
        let _x;
        let len;
        _layer = reader.readInt();
        _query = reader.tgReadObject();
        return new this({layer:_layer,
	query:_query})
    }
}


class InvokeWithoutUpdatesRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0xbf9459b7;
    static SUBCLASS_OF_ID = 0xb7b2364b;

    /**
    :returns X: This type has no constructors.
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0xbf9459b7;
        this.SUBCLASS_OF_ID = 0xb7b2364b;

        this.query = args.query;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("b75994bf","hex"),
            this.query.getBytes(),
            ])
        }
    static fromReader(reader) {
        let _X;
        let _query;
        let _x;
        let len;
        _query = reader.tgReadObject();
        return new this({query:_query})
    }
}


class InvokeWithMessagesRangeRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0x365275f2;
    static SUBCLASS_OF_ID = 0xb7b2364b;

    /**
    :returns X: This type has no constructors.
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0x365275f2;
        this.SUBCLASS_OF_ID = 0xb7b2364b;

        this.range = args.range;
        this.query = args.query;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("f2755236","hex"),
            this.range.getBytes(),
            this.query.getBytes(),
            ])
        }
    static fromReader(reader) {
        let _X;
        let _range;
        let _query;
        let _x;
        let len;
        _range = reader.tgReadObject();
        _query = reader.tgReadObject();
        return new this({range:_range,
	query:_query})
    }
}


class InvokeWithTakeoutRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0xaca9fd2e;
    static SUBCLASS_OF_ID = 0xb7b2364b;

    /**
    :returns X: This type has no constructors.
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0xaca9fd2e;
        this.SUBCLASS_OF_ID = 0xb7b2364b;

        this.takeoutId = args.takeoutId;
        this.query = args.query;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("2efda9ac","hex"),
            readBufferFromBigInt(this.takeoutId,8,true,true),
            this.query.getBytes(),
            ])
        }
    static fromReader(reader) {
        let _X;
        let _takeout_id;
        let _query;
        let _x;
        let len;
        _takeout_id = reader.readLong();
        _query = reader.tgReadObject();
        return new this({takeoutId:_takeout_id,
	query:_query})
    }
}


class ReqPqRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0x60469778;
    static SUBCLASS_OF_ID = 0x786986b8;

    /**
    :returns ResPQ: Instance of ResPQ
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0x60469778;
        this.SUBCLASS_OF_ID = 0x786986b8;

        this.nonce = args.nonce;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("78974660","hex"),
            readBufferFromBigInt(this.nonce,16,true,true),
            ])
        }
    static fromReader(reader) {
        let _nonce;
        let _x;
        let len;
        _nonce = reader.readLargeInt(128);
        return new this({nonce:_nonce})
    }
}


class ReqPqMultiRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0xbe7e8ef1;
    static SUBCLASS_OF_ID = 0x786986b8;

    /**
    :returns ResPQ: Instance of ResPQ
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0xbe7e8ef1;
        this.SUBCLASS_OF_ID = 0x786986b8;

        this.nonce = args.nonce;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("f18e7ebe","hex"),
            readBufferFromBigInt(this.nonce,16,true,true),
            ])
        }
    static fromReader(reader) {
        let _nonce;
        let _x;
        let len;
        _nonce = reader.readLargeInt(128);
        return new this({nonce:_nonce})
    }
}


class ReqDHParamsRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0xd712e4be;
    static SUBCLASS_OF_ID = 0xa6188d9e;

    /**
    :returns Server_DH_Params: Instance of either ServerDHParamsFail, ServerDHParamsOk
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0xd712e4be;
        this.SUBCLASS_OF_ID = 0xa6188d9e;

        this.nonce = args.nonce;
        this.serverNonce = args.serverNonce;
        this.p = args.p;
        this.q = args.q;
        this.publicKeyFingerprint = args.publicKeyFingerprint;
        this.encryptedData = args.encryptedData;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("bee412d7","hex"),
            readBufferFromBigInt(this.nonce,16,true,true),
            readBufferFromBigInt(this.serverNonce,16,true,true),
            TLObject.serializeBytes(this.p),
            TLObject.serializeBytes(this.q),
            readBufferFromBigInt(this.publicKeyFingerprint,8,true,true),
            TLObject.serializeBytes(this.encryptedData),
            ])
        }
    static fromReader(reader) {
        let _nonce;
        let _server_nonce;
        let _p;
        let _q;
        let _public_key_fingerprint;
        let _encrypted_data;
        let _x;
        let len;
        _nonce = reader.readLargeInt(128);
        _server_nonce = reader.readLargeInt(128);
        _p = reader.tgReadBytes();
        _q = reader.tgReadBytes();
        _public_key_fingerprint = reader.readLong();
        _encrypted_data = reader.tgReadBytes();
        return new this({nonce:_nonce,
	serverNonce:_server_nonce,
	p:_p,
	q:_q,
	publicKeyFingerprint:_public_key_fingerprint,
	encryptedData:_encrypted_data})
    }
}


class SetClientDHParamsRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0xf5045f1f;
    static SUBCLASS_OF_ID = 0x55dd6cdb;

    /**
    :returns Set_client_DH_params_answer: Instance of either DhGenOk, DhGenRetry, DhGenFail
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0xf5045f1f;
        this.SUBCLASS_OF_ID = 0x55dd6cdb;

        this.nonce = args.nonce;
        this.serverNonce = args.serverNonce;
        this.encryptedData = args.encryptedData;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("1f5f04f5","hex"),
            readBufferFromBigInt(this.nonce,16,true,true),
            readBufferFromBigInt(this.serverNonce,16,true,true),
            TLObject.serializeBytes(this.encryptedData),
            ])
        }
    static fromReader(reader) {
        let _nonce;
        let _server_nonce;
        let _encrypted_data;
        let _x;
        let len;
        _nonce = reader.readLargeInt(128);
        _server_nonce = reader.readLargeInt(128);
        _encrypted_data = reader.tgReadBytes();
        return new this({nonce:_nonce,
	serverNonce:_server_nonce,
	encryptedData:_encrypted_data})
    }
}


class DestroyAuthKeyRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0xd1435160;
    static SUBCLASS_OF_ID = 0x8291e68e;

    constructor() {
        super();
        this.CONSTRUCTOR_ID = 0xd1435160;
        this.SUBCLASS_OF_ID = 0x8291e68e;

    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("605143d1","hex"),
            ])
        }
    static fromReader(reader) {
        let _x;
        let len;
        return new this({})
    }
}


class RpcDropAnswerRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0x58e4a740;
    static SUBCLASS_OF_ID = 0x4bca7570;

    /**
    :returns RpcDropAnswer: Instance of either RpcAnswerUnknown, RpcAnswerDroppedRunning, RpcAnswerDropped
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0x58e4a740;
        this.SUBCLASS_OF_ID = 0x4bca7570;

        this.reqMsgId = args.reqMsgId;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("40a7e458","hex"),
            readBufferFromBigInt(this.reqMsgId,8,true,true),
            ])
        }
    static fromReader(reader) {
        let _req_msg_id;
        let _x;
        let len;
        _req_msg_id = reader.readLong();
        return new this({reqMsgId:_req_msg_id})
    }
}


class GetFutureSaltsRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0xb921bd04;
    static SUBCLASS_OF_ID = 0x1090f517;

    /**
    :returns FutureSalts: Instance of FutureSalts
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0xb921bd04;
        this.SUBCLASS_OF_ID = 0x1090f517;

        this.num = args.num;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("04bd21b9","hex"),
            struct.pack('<i', this.num),
            ])
        }
    static fromReader(reader) {
        let _num;
        let _x;
        let len;
        _num = reader.readInt();
        return new this({num:_num})
    }
}


class PingRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0x7abe77ec;
    static SUBCLASS_OF_ID = 0x816aee71;

    /**
    :returns Pong: Instance of Pong
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0x7abe77ec;
        this.SUBCLASS_OF_ID = 0x816aee71;

        this.pingId = args.pingId;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("ec77be7a","hex"),
            readBufferFromBigInt(this.pingId,8,true,true),
            ])
        }
    static fromReader(reader) {
        let _ping_id;
        let _x;
        let len;
        _ping_id = reader.readLong();
        return new this({pingId:_ping_id})
    }
}


class PingDelayDisconnectRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0xf3427b8c;
    static SUBCLASS_OF_ID = 0x816aee71;

    /**
    :returns Pong: Instance of Pong
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0xf3427b8c;
        this.SUBCLASS_OF_ID = 0x816aee71;

        this.pingId = args.pingId;
        this.disconnectDelay = args.disconnectDelay;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("8c7b42f3","hex"),
            readBufferFromBigInt(this.pingId,8,true,true),
            struct.pack('<i', this.disconnectDelay),
            ])
        }
    static fromReader(reader) {
        let _ping_id;
        let _disconnect_delay;
        let _x;
        let len;
        _ping_id = reader.readLong();
        _disconnect_delay = reader.readInt();
        return new this({pingId:_ping_id,
	disconnectDelay:_disconnect_delay})
    }
}


class DestroySessionRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0xe7512126;
    static SUBCLASS_OF_ID = 0xaf0ce7bd;

    /**
    :returns DestroySessionRes: Instance of either DestroySessionOk, DestroySessionNone
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0xe7512126;
        this.SUBCLASS_OF_ID = 0xaf0ce7bd;

        this.sessionId = args.sessionId;
    }
    getBytes() {
        return Buffer.concat([
            Buffer.from("262151e7","hex"),
            readBufferFromBigInt(this.sessionId,8,true,true),
            ])
        }
    static fromReader(reader) {
        let _session_id;
        let _x;
        let len;
        _session_id = reader.readLong();
        return new this({sessionId:_session_id})
    }
}

module.exports = {
    InvokeAfterMsgRequest,
    InvokeAfterMsgsRequest,
    InitConnectionRequest,
    InvokeWithLayerRequest,
    InvokeWithoutUpdatesRequest,
    InvokeWithMessagesRangeRequest,
    InvokeWithTakeoutRequest,
    ReqPqRequest,
    ReqPqMultiRequest,
    ReqDHParamsRequest,
    SetClientDHParamsRequest,
    DestroyAuthKeyRequest,
    RpcDropAnswerRequest,
    GetFutureSaltsRequest,
    PingRequest,
    PingDelayDisconnectRequest,
    DestroySessionRequest,
};
let auth = require('./auth');
let account = require('./account');
let users = require('./users');
let contacts = require('./contacts');
let messages = require('./messages');
let updates = require('./updates');
let photos = require('./photos');
let upload = require('./upload');
let help = require('./help');
let channels = require('./channels');
let bots = require('./bots');
let payments = require('./payments');
let stickers = require('./stickers');
let phone = require('./phone');
let langpack = require('./langpack');
let folders = require('./folders');
module.exports.auth = auth;
module.exports.account = account;
module.exports.users = users;
module.exports.contacts = contacts;
module.exports.messages = messages;
module.exports.updates = updates;
module.exports.photos = photos;
module.exports.upload = upload;
module.exports.help = help;
module.exports.channels = channels;
module.exports.bots = bots;
module.exports.payments = payments;
module.exports.stickers = stickers;
module.exports.phone = phone;
module.exports.langpack = langpack;
module.exports.folders = folders;
