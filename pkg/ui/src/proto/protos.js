/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.model = (function() {

    /**
     * Namespace model.
     * @exports model
     * @namespace
     */
    var model = {};

    model.Tag = (function() {

        /**
         * Properties of a Tag.
         * @memberof model
         * @interface ITag
         * @property {string} [key] Tag key
         * @property {string} [value] Tag value
         */

        /**
         * Constructs a new Tag.
         * @memberof model
         * @classdesc Represents a Tag.
         * @constructor
         * @param {model.ITag=} [properties] Properties to set
         */
        function Tag(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Tag key.
         * @member {string}key
         * @memberof model.Tag
         * @instance
         */
        Tag.prototype.key = "";

        /**
         * Tag value.
         * @member {string}value
         * @memberof model.Tag
         * @instance
         */
        Tag.prototype.value = "";

        /**
         * Creates a new Tag instance using the specified properties.
         * @function create
         * @memberof model.Tag
         * @static
         * @param {model.ITag=} [properties] Properties to set
         * @returns {model.Tag} Tag instance
         */
        Tag.create = function create(properties) {
            return new Tag(properties);
        };

        /**
         * Encodes the specified Tag message. Does not implicitly {@link model.Tag.verify|verify} messages.
         * @function encode
         * @memberof model.Tag
         * @static
         * @param {model.ITag} message Tag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tag.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified Tag message, length delimited. Does not implicitly {@link model.Tag.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.Tag
         * @static
         * @param {model.ITag} message Tag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tag.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Tag message from the specified reader or buffer.
         * @function decode
         * @memberof model.Tag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.Tag} Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tag.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.Tag();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Tag message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.Tag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.Tag} Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tag.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Tag message.
         * @function verify
         * @memberof model.Tag
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Tag.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a Tag message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.Tag
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.Tag} Tag
         */
        Tag.fromObject = function fromObject(object) {
            if (object instanceof $root.model.Tag)
                return object;
            var message = new $root.model.Tag();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a Tag message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.Tag
         * @static
         * @param {model.Tag} message Tag
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Tag.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Tag to JSON.
         * @function toJSON
         * @memberof model.Tag
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Tag.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Tag;
    })();

    model.Pool = (function() {

        /**
         * Properties of a Pool.
         * @memberof model
         * @interface IPool
         * @property {string} [start] Pool start
         * @property {string} [end] Pool end
         * @property {model.Pool.Status} [status] Pool status
         * @property {Array.<model.ITag>} [tags] Pool tags
         */

        /**
         * Constructs a new Pool.
         * @memberof model
         * @classdesc Represents a Pool.
         * @constructor
         * @param {model.IPool=} [properties] Properties to set
         */
        function Pool(properties) {
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pool start.
         * @member {string}start
         * @memberof model.Pool
         * @instance
         */
        Pool.prototype.start = "";

        /**
         * Pool end.
         * @member {string}end
         * @memberof model.Pool
         * @instance
         */
        Pool.prototype.end = "";

        /**
         * Pool status.
         * @member {model.Pool.Status}status
         * @memberof model.Pool
         * @instance
         */
        Pool.prototype.status = 0;

        /**
         * Pool tags.
         * @member {Array.<model.ITag>}tags
         * @memberof model.Pool
         * @instance
         */
        Pool.prototype.tags = $util.emptyArray;

        /**
         * Creates a new Pool instance using the specified properties.
         * @function create
         * @memberof model.Pool
         * @static
         * @param {model.IPool=} [properties] Properties to set
         * @returns {model.Pool} Pool instance
         */
        Pool.create = function create(properties) {
            return new Pool(properties);
        };

        /**
         * Encodes the specified Pool message. Does not implicitly {@link model.Pool.verify|verify} messages.
         * @function encode
         * @memberof model.Pool
         * @static
         * @param {model.IPool} message Pool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pool.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.start != null && message.hasOwnProperty("start"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.start);
            if (message.end != null && message.hasOwnProperty("end"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.end);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    $root.model.Tag.encode(message.tags[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Pool message, length delimited. Does not implicitly {@link model.Pool.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.Pool
         * @static
         * @param {model.IPool} message Pool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pool.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pool message from the specified reader or buffer.
         * @function decode
         * @memberof model.Pool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.Pool} Pool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pool.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.Pool();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.start = reader.string();
                    break;
                case 2:
                    message.end = reader.string();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push($root.model.Tag.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pool message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.Pool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.Pool} Pool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pool.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pool message.
         * @function verify
         * @memberof model.Pool
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pool.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.start != null && message.hasOwnProperty("start"))
                if (!$util.isString(message.start))
                    return "start: string expected";
            if (message.end != null && message.hasOwnProperty("end"))
                if (!$util.isString(message.end))
                    return "end: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i) {
                    var error = $root.model.Tag.verify(message.tags[i]);
                    if (error)
                        return "tags." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Pool message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.Pool
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.Pool} Pool
         */
        Pool.fromObject = function fromObject(object) {
            if (object instanceof $root.model.Pool)
                return object;
            var message = new $root.model.Pool();
            if (object.start != null)
                message.start = String(object.start);
            if (object.end != null)
                message.end = String(object.end);
            switch (object.status) {
            case "UNKNOWN":
            case 0:
                message.status = 0;
                break;
            case "AVAILABLE":
            case 1:
                message.status = 1;
                break;
            case "RESERVED":
            case 2:
                message.status = 2;
                break;
            }
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".model.Pool.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i) {
                    if (typeof object.tags[i] !== "object")
                        throw TypeError(".model.Pool.tags: object expected");
                    message.tags[i] = $root.model.Tag.fromObject(object.tags[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Pool message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.Pool
         * @static
         * @param {model.Pool} message Pool
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pool.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults) {
                object.start = "";
                object.end = "";
                object.status = options.enums === String ? "UNKNOWN" : 0;
            }
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = message.start;
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = message.end;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.model.Pool.Status[message.status] : message.status;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = $root.model.Tag.toObject(message.tags[j], options);
            }
            return object;
        };

        /**
         * Converts this Pool to JSON.
         * @function toJSON
         * @memberof model.Pool
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pool.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Status enum.
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} AVAILABLE=1 AVAILABLE value
         * @property {number} RESERVED=2 RESERVED value
         */
        Pool.Status = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "AVAILABLE"] = 1;
            values[valuesById[2] = "RESERVED"] = 2;
            return values;
        })();

        return Pool;
    })();

    model.IPAddr = (function() {

        /**
         * Properties of a IPAddr.
         * @memberof model
         * @interface IIPAddr
         * @property {string} [ip] IPAddr ip
         * @property {model.IPAddr.IPStatus} [status] IPAddr status
         * @property {Array.<model.ITag>} [tags] IPAddr tags
         */

        /**
         * Constructs a new IPAddr.
         * @memberof model
         * @classdesc Represents a IPAddr.
         * @constructor
         * @param {model.IIPAddr=} [properties] Properties to set
         */
        function IPAddr(properties) {
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IPAddr ip.
         * @member {string}ip
         * @memberof model.IPAddr
         * @instance
         */
        IPAddr.prototype.ip = "";

        /**
         * IPAddr status.
         * @member {model.IPAddr.IPStatus}status
         * @memberof model.IPAddr
         * @instance
         */
        IPAddr.prototype.status = 0;

        /**
         * IPAddr tags.
         * @member {Array.<model.ITag>}tags
         * @memberof model.IPAddr
         * @instance
         */
        IPAddr.prototype.tags = $util.emptyArray;

        /**
         * Creates a new IPAddr instance using the specified properties.
         * @function create
         * @memberof model.IPAddr
         * @static
         * @param {model.IIPAddr=} [properties] Properties to set
         * @returns {model.IPAddr} IPAddr instance
         */
        IPAddr.create = function create(properties) {
            return new IPAddr(properties);
        };

        /**
         * Encodes the specified IPAddr message. Does not implicitly {@link model.IPAddr.verify|verify} messages.
         * @function encode
         * @memberof model.IPAddr
         * @static
         * @param {model.IIPAddr} message IPAddr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IPAddr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    $root.model.Tag.encode(message.tags[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IPAddr message, length delimited. Does not implicitly {@link model.IPAddr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.IPAddr
         * @static
         * @param {model.IIPAddr} message IPAddr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IPAddr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a IPAddr message from the specified reader or buffer.
         * @function decode
         * @memberof model.IPAddr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.IPAddr} IPAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IPAddr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.IPAddr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push($root.model.Tag.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a IPAddr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.IPAddr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.IPAddr} IPAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IPAddr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a IPAddr message.
         * @function verify
         * @memberof model.IPAddr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IPAddr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i) {
                    var error = $root.model.Tag.verify(message.tags[i]);
                    if (error)
                        return "tags." + error;
                }
            }
            return null;
        };

        /**
         * Creates a IPAddr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.IPAddr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.IPAddr} IPAddr
         */
        IPAddr.fromObject = function fromObject(object) {
            if (object instanceof $root.model.IPAddr)
                return object;
            var message = new $root.model.IPAddr();
            if (object.ip != null)
                message.ip = String(object.ip);
            switch (object.status) {
            case "UNKNOWN":
            case 0:
                message.status = 0;
                break;
            case "ACTIVE":
            case 1:
                message.status = 1;
                break;
            case "TEMPORARY_RESERVED":
            case 2:
                message.status = 2;
                break;
            case "RESERVED":
            case 3:
                message.status = 3;
                break;
            }
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".model.IPAddr.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i) {
                    if (typeof object.tags[i] !== "object")
                        throw TypeError(".model.IPAddr.tags: object expected");
                    message.tags[i] = $root.model.Tag.fromObject(object.tags[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a IPAddr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.IPAddr
         * @static
         * @param {model.IPAddr} message IPAddr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IPAddr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults) {
                object.ip = "";
                object.status = options.enums === String ? "UNKNOWN" : 0;
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.model.IPAddr.IPStatus[message.status] : message.status;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = $root.model.Tag.toObject(message.tags[j], options);
            }
            return object;
        };

        /**
         * Converts this IPAddr to JSON.
         * @function toJSON
         * @memberof model.IPAddr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IPAddr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * IPStatus enum.
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} ACTIVE=1 ACTIVE value
         * @property {number} TEMPORARY_RESERVED=2 TEMPORARY_RESERVED value
         * @property {number} RESERVED=3 RESERVED value
         */
        IPAddr.IPStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "ACTIVE"] = 1;
            values[valuesById[2] = "TEMPORARY_RESERVED"] = 2;
            values[valuesById[3] = "RESERVED"] = 3;
            return values;
        })();

        return IPAddr;
    })();

    model.Network = (function() {

        /**
         * Properties of a Network.
         * @memberof model
         * @interface INetwork
         * @property {string} [prefix] Network prefix
         * @property {Array.<string>} [gateways] Network gateways
         * @property {string} [broadcast] Network broadcast
         * @property {string} [netmask] Network netmask
         * @property {model.Network.Status} [status] Network status
         * @property {Array.<model.ITag>} [tags] Network tags
         */

        /**
         * Constructs a new Network.
         * @memberof model
         * @classdesc Represents a Network.
         * @constructor
         * @param {model.INetwork=} [properties] Properties to set
         */
        function Network(properties) {
            this.gateways = [];
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Network prefix.
         * @member {string}prefix
         * @memberof model.Network
         * @instance
         */
        Network.prototype.prefix = "";

        /**
         * Network gateways.
         * @member {Array.<string>}gateways
         * @memberof model.Network
         * @instance
         */
        Network.prototype.gateways = $util.emptyArray;

        /**
         * Network broadcast.
         * @member {string}broadcast
         * @memberof model.Network
         * @instance
         */
        Network.prototype.broadcast = "";

        /**
         * Network netmask.
         * @member {string}netmask
         * @memberof model.Network
         * @instance
         */
        Network.prototype.netmask = "";

        /**
         * Network status.
         * @member {model.Network.Status}status
         * @memberof model.Network
         * @instance
         */
        Network.prototype.status = 0;

        /**
         * Network tags.
         * @member {Array.<model.ITag>}tags
         * @memberof model.Network
         * @instance
         */
        Network.prototype.tags = $util.emptyArray;

        /**
         * Creates a new Network instance using the specified properties.
         * @function create
         * @memberof model.Network
         * @static
         * @param {model.INetwork=} [properties] Properties to set
         * @returns {model.Network} Network instance
         */
        Network.create = function create(properties) {
            return new Network(properties);
        };

        /**
         * Encodes the specified Network message. Does not implicitly {@link model.Network.verify|verify} messages.
         * @function encode
         * @memberof model.Network
         * @static
         * @param {model.INetwork} message Network message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Network.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.prefix != null && message.hasOwnProperty("prefix"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.prefix);
            if (message.gateways != null && message.gateways.length)
                for (var i = 0; i < message.gateways.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.gateways[i]);
            if (message.broadcast != null && message.hasOwnProperty("broadcast"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.broadcast);
            if (message.netmask != null && message.hasOwnProperty("netmask"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.netmask);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    $root.model.Tag.encode(message.tags[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Network message, length delimited. Does not implicitly {@link model.Network.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.Network
         * @static
         * @param {model.INetwork} message Network message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Network.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Network message from the specified reader or buffer.
         * @function decode
         * @memberof model.Network
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.Network} Network
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Network.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.Network();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.prefix = reader.string();
                    break;
                case 2:
                    if (!(message.gateways && message.gateways.length))
                        message.gateways = [];
                    message.gateways.push(reader.string());
                    break;
                case 3:
                    message.broadcast = reader.string();
                    break;
                case 4:
                    message.netmask = reader.string();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push($root.model.Tag.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Network message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.Network
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.Network} Network
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Network.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Network message.
         * @function verify
         * @memberof model.Network
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Network.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.prefix != null && message.hasOwnProperty("prefix"))
                if (!$util.isString(message.prefix))
                    return "prefix: string expected";
            if (message.gateways != null && message.hasOwnProperty("gateways")) {
                if (!Array.isArray(message.gateways))
                    return "gateways: array expected";
                for (var i = 0; i < message.gateways.length; ++i)
                    if (!$util.isString(message.gateways[i]))
                        return "gateways: string[] expected";
            }
            if (message.broadcast != null && message.hasOwnProperty("broadcast"))
                if (!$util.isString(message.broadcast))
                    return "broadcast: string expected";
            if (message.netmask != null && message.hasOwnProperty("netmask"))
                if (!$util.isString(message.netmask))
                    return "netmask: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i) {
                    var error = $root.model.Tag.verify(message.tags[i]);
                    if (error)
                        return "tags." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Network message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.Network
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.Network} Network
         */
        Network.fromObject = function fromObject(object) {
            if (object instanceof $root.model.Network)
                return object;
            var message = new $root.model.Network();
            if (object.prefix != null)
                message.prefix = String(object.prefix);
            if (object.gateways) {
                if (!Array.isArray(object.gateways))
                    throw TypeError(".model.Network.gateways: array expected");
                message.gateways = [];
                for (var i = 0; i < object.gateways.length; ++i)
                    message.gateways[i] = String(object.gateways[i]);
            }
            if (object.broadcast != null)
                message.broadcast = String(object.broadcast);
            if (object.netmask != null)
                message.netmask = String(object.netmask);
            switch (object.status) {
            case "UNKNOWN":
            case 0:
                message.status = 0;
                break;
            case "AVAILABLE":
            case 1:
                message.status = 1;
                break;
            case "RESERVED":
            case 2:
                message.status = 2;
                break;
            }
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".model.Network.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i) {
                    if (typeof object.tags[i] !== "object")
                        throw TypeError(".model.Network.tags: object expected");
                    message.tags[i] = $root.model.Tag.fromObject(object.tags[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Network message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.Network
         * @static
         * @param {model.Network} message Network
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Network.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.gateways = [];
                object.tags = [];
            }
            if (options.defaults) {
                object.prefix = "";
                object.broadcast = "";
                object.netmask = "";
                object.status = options.enums === String ? "UNKNOWN" : 0;
            }
            if (message.prefix != null && message.hasOwnProperty("prefix"))
                object.prefix = message.prefix;
            if (message.gateways && message.gateways.length) {
                object.gateways = [];
                for (var j = 0; j < message.gateways.length; ++j)
                    object.gateways[j] = message.gateways[j];
            }
            if (message.broadcast != null && message.hasOwnProperty("broadcast"))
                object.broadcast = message.broadcast;
            if (message.netmask != null && message.hasOwnProperty("netmask"))
                object.netmask = message.netmask;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.model.Network.Status[message.status] : message.status;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = $root.model.Tag.toObject(message.tags[j], options);
            }
            return object;
        };

        /**
         * Converts this Network to JSON.
         * @function toJSON
         * @memberof model.Network
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Network.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Status enum.
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} AVAILABLE=1 AVAILABLE value
         * @property {number} RESERVED=2 RESERVED value
         */
        Network.Status = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "AVAILABLE"] = 1;
            values[valuesById[2] = "RESERVED"] = 2;
            return values;
        })();

        return Network;
    })();

    return model;
})();

$root.serverpb = (function() {

    /**
     * Namespace serverpb.
     * @exports serverpb
     * @namespace
     */
    var serverpb = {};

    serverpb.ListNetworkRequest = (function() {

        /**
         * Properties of a ListNetworkRequest.
         * @memberof serverpb
         * @interface IListNetworkRequest
         */

        /**
         * Constructs a new ListNetworkRequest.
         * @memberof serverpb
         * @classdesc Represents a ListNetworkRequest.
         * @constructor
         * @param {serverpb.IListNetworkRequest=} [properties] Properties to set
         */
        function ListNetworkRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ListNetworkRequest instance using the specified properties.
         * @function create
         * @memberof serverpb.ListNetworkRequest
         * @static
         * @param {serverpb.IListNetworkRequest=} [properties] Properties to set
         * @returns {serverpb.ListNetworkRequest} ListNetworkRequest instance
         */
        ListNetworkRequest.create = function create(properties) {
            return new ListNetworkRequest(properties);
        };

        /**
         * Encodes the specified ListNetworkRequest message. Does not implicitly {@link serverpb.ListNetworkRequest.verify|verify} messages.
         * @function encode
         * @memberof serverpb.ListNetworkRequest
         * @static
         * @param {serverpb.IListNetworkRequest} message ListNetworkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListNetworkRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ListNetworkRequest message, length delimited. Does not implicitly {@link serverpb.ListNetworkRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.ListNetworkRequest
         * @static
         * @param {serverpb.IListNetworkRequest} message ListNetworkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListNetworkRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListNetworkRequest message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.ListNetworkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.ListNetworkRequest} ListNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListNetworkRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.ListNetworkRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListNetworkRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.ListNetworkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.ListNetworkRequest} ListNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListNetworkRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListNetworkRequest message.
         * @function verify
         * @memberof serverpb.ListNetworkRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListNetworkRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ListNetworkRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.ListNetworkRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.ListNetworkRequest} ListNetworkRequest
         */
        ListNetworkRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.ListNetworkRequest)
                return object;
            return new $root.serverpb.ListNetworkRequest();
        };

        /**
         * Creates a plain object from a ListNetworkRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.ListNetworkRequest
         * @static
         * @param {serverpb.ListNetworkRequest} message ListNetworkRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListNetworkRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ListNetworkRequest to JSON.
         * @function toJSON
         * @memberof serverpb.ListNetworkRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListNetworkRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListNetworkRequest;
    })();

    serverpb.ListNetworkResponse = (function() {

        /**
         * Properties of a ListNetworkResponse.
         * @memberof serverpb
         * @interface IListNetworkResponse
         * @property {Array.<model.INetwork>} [networks] ListNetworkResponse networks
         */

        /**
         * Constructs a new ListNetworkResponse.
         * @memberof serverpb
         * @classdesc Represents a ListNetworkResponse.
         * @constructor
         * @param {serverpb.IListNetworkResponse=} [properties] Properties to set
         */
        function ListNetworkResponse(properties) {
            this.networks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListNetworkResponse networks.
         * @member {Array.<model.INetwork>}networks
         * @memberof serverpb.ListNetworkResponse
         * @instance
         */
        ListNetworkResponse.prototype.networks = $util.emptyArray;

        /**
         * Creates a new ListNetworkResponse instance using the specified properties.
         * @function create
         * @memberof serverpb.ListNetworkResponse
         * @static
         * @param {serverpb.IListNetworkResponse=} [properties] Properties to set
         * @returns {serverpb.ListNetworkResponse} ListNetworkResponse instance
         */
        ListNetworkResponse.create = function create(properties) {
            return new ListNetworkResponse(properties);
        };

        /**
         * Encodes the specified ListNetworkResponse message. Does not implicitly {@link serverpb.ListNetworkResponse.verify|verify} messages.
         * @function encode
         * @memberof serverpb.ListNetworkResponse
         * @static
         * @param {serverpb.IListNetworkResponse} message ListNetworkResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListNetworkResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.networks != null && message.networks.length)
                for (var i = 0; i < message.networks.length; ++i)
                    $root.model.Network.encode(message.networks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListNetworkResponse message, length delimited. Does not implicitly {@link serverpb.ListNetworkResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.ListNetworkResponse
         * @static
         * @param {serverpb.IListNetworkResponse} message ListNetworkResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListNetworkResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListNetworkResponse message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.ListNetworkResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.ListNetworkResponse} ListNetworkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListNetworkResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.ListNetworkResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.networks && message.networks.length))
                        message.networks = [];
                    message.networks.push($root.model.Network.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListNetworkResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.ListNetworkResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.ListNetworkResponse} ListNetworkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListNetworkResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListNetworkResponse message.
         * @function verify
         * @memberof serverpb.ListNetworkResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListNetworkResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.networks != null && message.hasOwnProperty("networks")) {
                if (!Array.isArray(message.networks))
                    return "networks: array expected";
                for (var i = 0; i < message.networks.length; ++i) {
                    var error = $root.model.Network.verify(message.networks[i]);
                    if (error)
                        return "networks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListNetworkResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.ListNetworkResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.ListNetworkResponse} ListNetworkResponse
         */
        ListNetworkResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.ListNetworkResponse)
                return object;
            var message = new $root.serverpb.ListNetworkResponse();
            if (object.networks) {
                if (!Array.isArray(object.networks))
                    throw TypeError(".serverpb.ListNetworkResponse.networks: array expected");
                message.networks = [];
                for (var i = 0; i < object.networks.length; ++i) {
                    if (typeof object.networks[i] !== "object")
                        throw TypeError(".serverpb.ListNetworkResponse.networks: object expected");
                    message.networks[i] = $root.model.Network.fromObject(object.networks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListNetworkResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.ListNetworkResponse
         * @static
         * @param {serverpb.ListNetworkResponse} message ListNetworkResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListNetworkResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.networks = [];
            if (message.networks && message.networks.length) {
                object.networks = [];
                for (var j = 0; j < message.networks.length; ++j)
                    object.networks[j] = $root.model.Network.toObject(message.networks[j], options);
            }
            return object;
        };

        /**
         * Converts this ListNetworkResponse to JSON.
         * @function toJSON
         * @memberof serverpb.ListNetworkResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListNetworkResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListNetworkResponse;
    })();

    serverpb.DrawIPRequest = (function() {

        /**
         * Properties of a DrawIPRequest.
         * @memberof serverpb
         * @interface IDrawIPRequest
         * @property {string} [ip] DrawIPRequest ip
         * @property {number} [mask] DrawIPRequest mask
         * @property {model.ITag} [poolTag] DrawIPRequest poolTag
         * @property {string} [name] DrawIPRequest name
         * @property {boolean} [activateImmediately] DrawIPRequest activateImmediately
         */

        /**
         * Constructs a new DrawIPRequest.
         * @memberof serverpb
         * @classdesc Represents a DrawIPRequest.
         * @constructor
         * @param {serverpb.IDrawIPRequest=} [properties] Properties to set
         */
        function DrawIPRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DrawIPRequest ip.
         * @member {string}ip
         * @memberof serverpb.DrawIPRequest
         * @instance
         */
        DrawIPRequest.prototype.ip = "";

        /**
         * DrawIPRequest mask.
         * @member {number}mask
         * @memberof serverpb.DrawIPRequest
         * @instance
         */
        DrawIPRequest.prototype.mask = 0;

        /**
         * DrawIPRequest poolTag.
         * @member {(model.ITag|null|undefined)}poolTag
         * @memberof serverpb.DrawIPRequest
         * @instance
         */
        DrawIPRequest.prototype.poolTag = null;

        /**
         * DrawIPRequest name.
         * @member {string}name
         * @memberof serverpb.DrawIPRequest
         * @instance
         */
        DrawIPRequest.prototype.name = "";

        /**
         * DrawIPRequest activateImmediately.
         * @member {boolean}activateImmediately
         * @memberof serverpb.DrawIPRequest
         * @instance
         */
        DrawIPRequest.prototype.activateImmediately = false;

        /**
         * Creates a new DrawIPRequest instance using the specified properties.
         * @function create
         * @memberof serverpb.DrawIPRequest
         * @static
         * @param {serverpb.IDrawIPRequest=} [properties] Properties to set
         * @returns {serverpb.DrawIPRequest} DrawIPRequest instance
         */
        DrawIPRequest.create = function create(properties) {
            return new DrawIPRequest(properties);
        };

        /**
         * Encodes the specified DrawIPRequest message. Does not implicitly {@link serverpb.DrawIPRequest.verify|verify} messages.
         * @function encode
         * @memberof serverpb.DrawIPRequest
         * @static
         * @param {serverpb.IDrawIPRequest} message DrawIPRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawIPRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            if (message.mask != null && message.hasOwnProperty("mask"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mask);
            if (message.poolTag != null && message.hasOwnProperty("poolTag"))
                $root.model.Tag.encode(message.poolTag, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.activateImmediately != null && message.hasOwnProperty("activateImmediately"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.activateImmediately);
            return writer;
        };

        /**
         * Encodes the specified DrawIPRequest message, length delimited. Does not implicitly {@link serverpb.DrawIPRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.DrawIPRequest
         * @static
         * @param {serverpb.IDrawIPRequest} message DrawIPRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawIPRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DrawIPRequest message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.DrawIPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.DrawIPRequest} DrawIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawIPRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.DrawIPRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.mask = reader.int32();
                    break;
                case 3:
                    message.poolTag = $root.model.Tag.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.activateImmediately = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DrawIPRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.DrawIPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.DrawIPRequest} DrawIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawIPRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DrawIPRequest message.
         * @function verify
         * @memberof serverpb.DrawIPRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DrawIPRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.mask != null && message.hasOwnProperty("mask"))
                if (!$util.isInteger(message.mask))
                    return "mask: integer expected";
            if (message.poolTag != null && message.hasOwnProperty("poolTag")) {
                var error = $root.model.Tag.verify(message.poolTag);
                if (error)
                    return "poolTag." + error;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.activateImmediately != null && message.hasOwnProperty("activateImmediately"))
                if (typeof message.activateImmediately !== "boolean")
                    return "activateImmediately: boolean expected";
            return null;
        };

        /**
         * Creates a DrawIPRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.DrawIPRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.DrawIPRequest} DrawIPRequest
         */
        DrawIPRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.DrawIPRequest)
                return object;
            var message = new $root.serverpb.DrawIPRequest();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.mask != null)
                message.mask = object.mask | 0;
            if (object.poolTag != null) {
                if (typeof object.poolTag !== "object")
                    throw TypeError(".serverpb.DrawIPRequest.poolTag: object expected");
                message.poolTag = $root.model.Tag.fromObject(object.poolTag);
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.activateImmediately != null)
                message.activateImmediately = Boolean(object.activateImmediately);
            return message;
        };

        /**
         * Creates a plain object from a DrawIPRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.DrawIPRequest
         * @static
         * @param {serverpb.DrawIPRequest} message DrawIPRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DrawIPRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip = "";
                object.mask = 0;
                object.poolTag = null;
                object.name = "";
                object.activateImmediately = false;
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.mask != null && message.hasOwnProperty("mask"))
                object.mask = message.mask;
            if (message.poolTag != null && message.hasOwnProperty("poolTag"))
                object.poolTag = $root.model.Tag.toObject(message.poolTag, options);
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.activateImmediately != null && message.hasOwnProperty("activateImmediately"))
                object.activateImmediately = message.activateImmediately;
            return object;
        };

        /**
         * Converts this DrawIPRequest to JSON.
         * @function toJSON
         * @memberof serverpb.DrawIPRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DrawIPRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DrawIPRequest;
    })();

    serverpb.DrawIPResponse = (function() {

        /**
         * Properties of a DrawIPResponse.
         * @memberof serverpb
         * @interface IDrawIPResponse
         * @property {string} [ip] DrawIPResponse ip
         * @property {string} [message] DrawIPResponse message
         */

        /**
         * Constructs a new DrawIPResponse.
         * @memberof serverpb
         * @classdesc Represents a DrawIPResponse.
         * @constructor
         * @param {serverpb.IDrawIPResponse=} [properties] Properties to set
         */
        function DrawIPResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DrawIPResponse ip.
         * @member {string}ip
         * @memberof serverpb.DrawIPResponse
         * @instance
         */
        DrawIPResponse.prototype.ip = "";

        /**
         * DrawIPResponse message.
         * @member {string}message
         * @memberof serverpb.DrawIPResponse
         * @instance
         */
        DrawIPResponse.prototype.message = "";

        /**
         * Creates a new DrawIPResponse instance using the specified properties.
         * @function create
         * @memberof serverpb.DrawIPResponse
         * @static
         * @param {serverpb.IDrawIPResponse=} [properties] Properties to set
         * @returns {serverpb.DrawIPResponse} DrawIPResponse instance
         */
        DrawIPResponse.create = function create(properties) {
            return new DrawIPResponse(properties);
        };

        /**
         * Encodes the specified DrawIPResponse message. Does not implicitly {@link serverpb.DrawIPResponse.verify|verify} messages.
         * @function encode
         * @memberof serverpb.DrawIPResponse
         * @static
         * @param {serverpb.IDrawIPResponse} message DrawIPResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawIPResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified DrawIPResponse message, length delimited. Does not implicitly {@link serverpb.DrawIPResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.DrawIPResponse
         * @static
         * @param {serverpb.IDrawIPResponse} message DrawIPResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawIPResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DrawIPResponse message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.DrawIPResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.DrawIPResponse} DrawIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawIPResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.DrawIPResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DrawIPResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.DrawIPResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.DrawIPResponse} DrawIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawIPResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DrawIPResponse message.
         * @function verify
         * @memberof serverpb.DrawIPResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DrawIPResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a DrawIPResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.DrawIPResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.DrawIPResponse} DrawIPResponse
         */
        DrawIPResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.DrawIPResponse)
                return object;
            var message = new $root.serverpb.DrawIPResponse();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a DrawIPResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.DrawIPResponse
         * @static
         * @param {serverpb.DrawIPResponse} message DrawIPResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DrawIPResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip = "";
                object.message = "";
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this DrawIPResponse to JSON.
         * @function toJSON
         * @memberof serverpb.DrawIPResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DrawIPResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DrawIPResponse;
    })();

    serverpb.DrawIPEstimatingNetworkRequest = (function() {

        /**
         * Properties of a DrawIPEstimatingNetworkRequest.
         * @memberof serverpb
         * @interface IDrawIPEstimatingNetworkRequest
         * @property {model.ITag} [poolTag] DrawIPEstimatingNetworkRequest poolTag
         * @property {boolean} [activateImmediately] DrawIPEstimatingNetworkRequest activateImmediately
         */

        /**
         * Constructs a new DrawIPEstimatingNetworkRequest.
         * @memberof serverpb
         * @classdesc Represents a DrawIPEstimatingNetworkRequest.
         * @constructor
         * @param {serverpb.IDrawIPEstimatingNetworkRequest=} [properties] Properties to set
         */
        function DrawIPEstimatingNetworkRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DrawIPEstimatingNetworkRequest poolTag.
         * @member {(model.ITag|null|undefined)}poolTag
         * @memberof serverpb.DrawIPEstimatingNetworkRequest
         * @instance
         */
        DrawIPEstimatingNetworkRequest.prototype.poolTag = null;

        /**
         * DrawIPEstimatingNetworkRequest activateImmediately.
         * @member {boolean}activateImmediately
         * @memberof serverpb.DrawIPEstimatingNetworkRequest
         * @instance
         */
        DrawIPEstimatingNetworkRequest.prototype.activateImmediately = false;

        /**
         * Creates a new DrawIPEstimatingNetworkRequest instance using the specified properties.
         * @function create
         * @memberof serverpb.DrawIPEstimatingNetworkRequest
         * @static
         * @param {serverpb.IDrawIPEstimatingNetworkRequest=} [properties] Properties to set
         * @returns {serverpb.DrawIPEstimatingNetworkRequest} DrawIPEstimatingNetworkRequest instance
         */
        DrawIPEstimatingNetworkRequest.create = function create(properties) {
            return new DrawIPEstimatingNetworkRequest(properties);
        };

        /**
         * Encodes the specified DrawIPEstimatingNetworkRequest message. Does not implicitly {@link serverpb.DrawIPEstimatingNetworkRequest.verify|verify} messages.
         * @function encode
         * @memberof serverpb.DrawIPEstimatingNetworkRequest
         * @static
         * @param {serverpb.IDrawIPEstimatingNetworkRequest} message DrawIPEstimatingNetworkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawIPEstimatingNetworkRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.poolTag != null && message.hasOwnProperty("poolTag"))
                $root.model.Tag.encode(message.poolTag, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.activateImmediately != null && message.hasOwnProperty("activateImmediately"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.activateImmediately);
            return writer;
        };

        /**
         * Encodes the specified DrawIPEstimatingNetworkRequest message, length delimited. Does not implicitly {@link serverpb.DrawIPEstimatingNetworkRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.DrawIPEstimatingNetworkRequest
         * @static
         * @param {serverpb.IDrawIPEstimatingNetworkRequest} message DrawIPEstimatingNetworkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawIPEstimatingNetworkRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DrawIPEstimatingNetworkRequest message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.DrawIPEstimatingNetworkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.DrawIPEstimatingNetworkRequest} DrawIPEstimatingNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawIPEstimatingNetworkRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.DrawIPEstimatingNetworkRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.poolTag = $root.model.Tag.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.activateImmediately = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DrawIPEstimatingNetworkRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.DrawIPEstimatingNetworkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.DrawIPEstimatingNetworkRequest} DrawIPEstimatingNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawIPEstimatingNetworkRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DrawIPEstimatingNetworkRequest message.
         * @function verify
         * @memberof serverpb.DrawIPEstimatingNetworkRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DrawIPEstimatingNetworkRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.poolTag != null && message.hasOwnProperty("poolTag")) {
                var error = $root.model.Tag.verify(message.poolTag);
                if (error)
                    return "poolTag." + error;
            }
            if (message.activateImmediately != null && message.hasOwnProperty("activateImmediately"))
                if (typeof message.activateImmediately !== "boolean")
                    return "activateImmediately: boolean expected";
            return null;
        };

        /**
         * Creates a DrawIPEstimatingNetworkRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.DrawIPEstimatingNetworkRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.DrawIPEstimatingNetworkRequest} DrawIPEstimatingNetworkRequest
         */
        DrawIPEstimatingNetworkRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.DrawIPEstimatingNetworkRequest)
                return object;
            var message = new $root.serverpb.DrawIPEstimatingNetworkRequest();
            if (object.poolTag != null) {
                if (typeof object.poolTag !== "object")
                    throw TypeError(".serverpb.DrawIPEstimatingNetworkRequest.poolTag: object expected");
                message.poolTag = $root.model.Tag.fromObject(object.poolTag);
            }
            if (object.activateImmediately != null)
                message.activateImmediately = Boolean(object.activateImmediately);
            return message;
        };

        /**
         * Creates a plain object from a DrawIPEstimatingNetworkRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.DrawIPEstimatingNetworkRequest
         * @static
         * @param {serverpb.DrawIPEstimatingNetworkRequest} message DrawIPEstimatingNetworkRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DrawIPEstimatingNetworkRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.poolTag = null;
                object.activateImmediately = false;
            }
            if (message.poolTag != null && message.hasOwnProperty("poolTag"))
                object.poolTag = $root.model.Tag.toObject(message.poolTag, options);
            if (message.activateImmediately != null && message.hasOwnProperty("activateImmediately"))
                object.activateImmediately = message.activateImmediately;
            return object;
        };

        /**
         * Converts this DrawIPEstimatingNetworkRequest to JSON.
         * @function toJSON
         * @memberof serverpb.DrawIPEstimatingNetworkRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DrawIPEstimatingNetworkRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DrawIPEstimatingNetworkRequest;
    })();

    serverpb.GetNetworkIncludingIPRequest = (function() {

        /**
         * Properties of a GetNetworkIncludingIPRequest.
         * @memberof serverpb
         * @interface IGetNetworkIncludingIPRequest
         * @property {string} [ip] GetNetworkIncludingIPRequest ip
         */

        /**
         * Constructs a new GetNetworkIncludingIPRequest.
         * @memberof serverpb
         * @classdesc Represents a GetNetworkIncludingIPRequest.
         * @constructor
         * @param {serverpb.IGetNetworkIncludingIPRequest=} [properties] Properties to set
         */
        function GetNetworkIncludingIPRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetNetworkIncludingIPRequest ip.
         * @member {string}ip
         * @memberof serverpb.GetNetworkIncludingIPRequest
         * @instance
         */
        GetNetworkIncludingIPRequest.prototype.ip = "";

        /**
         * Creates a new GetNetworkIncludingIPRequest instance using the specified properties.
         * @function create
         * @memberof serverpb.GetNetworkIncludingIPRequest
         * @static
         * @param {serverpb.IGetNetworkIncludingIPRequest=} [properties] Properties to set
         * @returns {serverpb.GetNetworkIncludingIPRequest} GetNetworkIncludingIPRequest instance
         */
        GetNetworkIncludingIPRequest.create = function create(properties) {
            return new GetNetworkIncludingIPRequest(properties);
        };

        /**
         * Encodes the specified GetNetworkIncludingIPRequest message. Does not implicitly {@link serverpb.GetNetworkIncludingIPRequest.verify|verify} messages.
         * @function encode
         * @memberof serverpb.GetNetworkIncludingIPRequest
         * @static
         * @param {serverpb.IGetNetworkIncludingIPRequest} message GetNetworkIncludingIPRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNetworkIncludingIPRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            return writer;
        };

        /**
         * Encodes the specified GetNetworkIncludingIPRequest message, length delimited. Does not implicitly {@link serverpb.GetNetworkIncludingIPRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.GetNetworkIncludingIPRequest
         * @static
         * @param {serverpb.IGetNetworkIncludingIPRequest} message GetNetworkIncludingIPRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNetworkIncludingIPRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetNetworkIncludingIPRequest message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.GetNetworkIncludingIPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.GetNetworkIncludingIPRequest} GetNetworkIncludingIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNetworkIncludingIPRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.GetNetworkIncludingIPRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetNetworkIncludingIPRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.GetNetworkIncludingIPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.GetNetworkIncludingIPRequest} GetNetworkIncludingIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNetworkIncludingIPRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetNetworkIncludingIPRequest message.
         * @function verify
         * @memberof serverpb.GetNetworkIncludingIPRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetNetworkIncludingIPRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            return null;
        };

        /**
         * Creates a GetNetworkIncludingIPRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.GetNetworkIncludingIPRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.GetNetworkIncludingIPRequest} GetNetworkIncludingIPRequest
         */
        GetNetworkIncludingIPRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.GetNetworkIncludingIPRequest)
                return object;
            var message = new $root.serverpb.GetNetworkIncludingIPRequest();
            if (object.ip != null)
                message.ip = String(object.ip);
            return message;
        };

        /**
         * Creates a plain object from a GetNetworkIncludingIPRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.GetNetworkIncludingIPRequest
         * @static
         * @param {serverpb.GetNetworkIncludingIPRequest} message GetNetworkIncludingIPRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetNetworkIncludingIPRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ip = "";
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            return object;
        };

        /**
         * Converts this GetNetworkIncludingIPRequest to JSON.
         * @function toJSON
         * @memberof serverpb.GetNetworkIncludingIPRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetNetworkIncludingIPRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetNetworkIncludingIPRequest;
    })();

    serverpb.ActivateIPRequest = (function() {

        /**
         * Properties of an ActivateIPRequest.
         * @memberof serverpb
         * @interface IActivateIPRequest
         * @property {string} [ip] ActivateIPRequest ip
         * @property {Array.<model.ITag>} [tags] ActivateIPRequest tags
         */

        /**
         * Constructs a new ActivateIPRequest.
         * @memberof serverpb
         * @classdesc Represents an ActivateIPRequest.
         * @constructor
         * @param {serverpb.IActivateIPRequest=} [properties] Properties to set
         */
        function ActivateIPRequest(properties) {
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivateIPRequest ip.
         * @member {string}ip
         * @memberof serverpb.ActivateIPRequest
         * @instance
         */
        ActivateIPRequest.prototype.ip = "";

        /**
         * ActivateIPRequest tags.
         * @member {Array.<model.ITag>}tags
         * @memberof serverpb.ActivateIPRequest
         * @instance
         */
        ActivateIPRequest.prototype.tags = $util.emptyArray;

        /**
         * Creates a new ActivateIPRequest instance using the specified properties.
         * @function create
         * @memberof serverpb.ActivateIPRequest
         * @static
         * @param {serverpb.IActivateIPRequest=} [properties] Properties to set
         * @returns {serverpb.ActivateIPRequest} ActivateIPRequest instance
         */
        ActivateIPRequest.create = function create(properties) {
            return new ActivateIPRequest(properties);
        };

        /**
         * Encodes the specified ActivateIPRequest message. Does not implicitly {@link serverpb.ActivateIPRequest.verify|verify} messages.
         * @function encode
         * @memberof serverpb.ActivateIPRequest
         * @static
         * @param {serverpb.IActivateIPRequest} message ActivateIPRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivateIPRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    $root.model.Tag.encode(message.tags[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ActivateIPRequest message, length delimited. Does not implicitly {@link serverpb.ActivateIPRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.ActivateIPRequest
         * @static
         * @param {serverpb.IActivateIPRequest} message ActivateIPRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivateIPRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivateIPRequest message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.ActivateIPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.ActivateIPRequest} ActivateIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivateIPRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.ActivateIPRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push($root.model.Tag.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ActivateIPRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.ActivateIPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.ActivateIPRequest} ActivateIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivateIPRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivateIPRequest message.
         * @function verify
         * @memberof serverpb.ActivateIPRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivateIPRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i) {
                    var error = $root.model.Tag.verify(message.tags[i]);
                    if (error)
                        return "tags." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ActivateIPRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.ActivateIPRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.ActivateIPRequest} ActivateIPRequest
         */
        ActivateIPRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.ActivateIPRequest)
                return object;
            var message = new $root.serverpb.ActivateIPRequest();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".serverpb.ActivateIPRequest.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i) {
                    if (typeof object.tags[i] !== "object")
                        throw TypeError(".serverpb.ActivateIPRequest.tags: object expected");
                    message.tags[i] = $root.model.Tag.fromObject(object.tags[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ActivateIPRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.ActivateIPRequest
         * @static
         * @param {serverpb.ActivateIPRequest} message ActivateIPRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivateIPRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults)
                object.ip = "";
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = $root.model.Tag.toObject(message.tags[j], options);
            }
            return object;
        };

        /**
         * Converts this ActivateIPRequest to JSON.
         * @function toJSON
         * @memberof serverpb.ActivateIPRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivateIPRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivateIPRequest;
    })();

    serverpb.ActivateIPResponse = (function() {

        /**
         * Properties of an ActivateIPResponse.
         * @memberof serverpb
         * @interface IActivateIPResponse
         */

        /**
         * Constructs a new ActivateIPResponse.
         * @memberof serverpb
         * @classdesc Represents an ActivateIPResponse.
         * @constructor
         * @param {serverpb.IActivateIPResponse=} [properties] Properties to set
         */
        function ActivateIPResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ActivateIPResponse instance using the specified properties.
         * @function create
         * @memberof serverpb.ActivateIPResponse
         * @static
         * @param {serverpb.IActivateIPResponse=} [properties] Properties to set
         * @returns {serverpb.ActivateIPResponse} ActivateIPResponse instance
         */
        ActivateIPResponse.create = function create(properties) {
            return new ActivateIPResponse(properties);
        };

        /**
         * Encodes the specified ActivateIPResponse message. Does not implicitly {@link serverpb.ActivateIPResponse.verify|verify} messages.
         * @function encode
         * @memberof serverpb.ActivateIPResponse
         * @static
         * @param {serverpb.IActivateIPResponse} message ActivateIPResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivateIPResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ActivateIPResponse message, length delimited. Does not implicitly {@link serverpb.ActivateIPResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.ActivateIPResponse
         * @static
         * @param {serverpb.IActivateIPResponse} message ActivateIPResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivateIPResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivateIPResponse message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.ActivateIPResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.ActivateIPResponse} ActivateIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivateIPResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.ActivateIPResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ActivateIPResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.ActivateIPResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.ActivateIPResponse} ActivateIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivateIPResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivateIPResponse message.
         * @function verify
         * @memberof serverpb.ActivateIPResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivateIPResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an ActivateIPResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.ActivateIPResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.ActivateIPResponse} ActivateIPResponse
         */
        ActivateIPResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.ActivateIPResponse)
                return object;
            return new $root.serverpb.ActivateIPResponse();
        };

        /**
         * Creates a plain object from an ActivateIPResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.ActivateIPResponse
         * @static
         * @param {serverpb.ActivateIPResponse} message ActivateIPResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivateIPResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ActivateIPResponse to JSON.
         * @function toJSON
         * @memberof serverpb.ActivateIPResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivateIPResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivateIPResponse;
    })();

    serverpb.DeactivateIPRequest = (function() {

        /**
         * Properties of a DeactivateIPRequest.
         * @memberof serverpb
         * @interface IDeactivateIPRequest
         * @property {string} [ip] DeactivateIPRequest ip
         */

        /**
         * Constructs a new DeactivateIPRequest.
         * @memberof serverpb
         * @classdesc Represents a DeactivateIPRequest.
         * @constructor
         * @param {serverpb.IDeactivateIPRequest=} [properties] Properties to set
         */
        function DeactivateIPRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeactivateIPRequest ip.
         * @member {string}ip
         * @memberof serverpb.DeactivateIPRequest
         * @instance
         */
        DeactivateIPRequest.prototype.ip = "";

        /**
         * Creates a new DeactivateIPRequest instance using the specified properties.
         * @function create
         * @memberof serverpb.DeactivateIPRequest
         * @static
         * @param {serverpb.IDeactivateIPRequest=} [properties] Properties to set
         * @returns {serverpb.DeactivateIPRequest} DeactivateIPRequest instance
         */
        DeactivateIPRequest.create = function create(properties) {
            return new DeactivateIPRequest(properties);
        };

        /**
         * Encodes the specified DeactivateIPRequest message. Does not implicitly {@link serverpb.DeactivateIPRequest.verify|verify} messages.
         * @function encode
         * @memberof serverpb.DeactivateIPRequest
         * @static
         * @param {serverpb.IDeactivateIPRequest} message DeactivateIPRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeactivateIPRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            return writer;
        };

        /**
         * Encodes the specified DeactivateIPRequest message, length delimited. Does not implicitly {@link serverpb.DeactivateIPRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.DeactivateIPRequest
         * @static
         * @param {serverpb.IDeactivateIPRequest} message DeactivateIPRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeactivateIPRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeactivateIPRequest message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.DeactivateIPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.DeactivateIPRequest} DeactivateIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeactivateIPRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.DeactivateIPRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeactivateIPRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.DeactivateIPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.DeactivateIPRequest} DeactivateIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeactivateIPRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeactivateIPRequest message.
         * @function verify
         * @memberof serverpb.DeactivateIPRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeactivateIPRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            return null;
        };

        /**
         * Creates a DeactivateIPRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.DeactivateIPRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.DeactivateIPRequest} DeactivateIPRequest
         */
        DeactivateIPRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.DeactivateIPRequest)
                return object;
            var message = new $root.serverpb.DeactivateIPRequest();
            if (object.ip != null)
                message.ip = String(object.ip);
            return message;
        };

        /**
         * Creates a plain object from a DeactivateIPRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.DeactivateIPRequest
         * @static
         * @param {serverpb.DeactivateIPRequest} message DeactivateIPRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeactivateIPRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ip = "";
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            return object;
        };

        /**
         * Converts this DeactivateIPRequest to JSON.
         * @function toJSON
         * @memberof serverpb.DeactivateIPRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeactivateIPRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeactivateIPRequest;
    })();

    serverpb.DeactivateIPResponse = (function() {

        /**
         * Properties of a DeactivateIPResponse.
         * @memberof serverpb
         * @interface IDeactivateIPResponse
         */

        /**
         * Constructs a new DeactivateIPResponse.
         * @memberof serverpb
         * @classdesc Represents a DeactivateIPResponse.
         * @constructor
         * @param {serverpb.IDeactivateIPResponse=} [properties] Properties to set
         */
        function DeactivateIPResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DeactivateIPResponse instance using the specified properties.
         * @function create
         * @memberof serverpb.DeactivateIPResponse
         * @static
         * @param {serverpb.IDeactivateIPResponse=} [properties] Properties to set
         * @returns {serverpb.DeactivateIPResponse} DeactivateIPResponse instance
         */
        DeactivateIPResponse.create = function create(properties) {
            return new DeactivateIPResponse(properties);
        };

        /**
         * Encodes the specified DeactivateIPResponse message. Does not implicitly {@link serverpb.DeactivateIPResponse.verify|verify} messages.
         * @function encode
         * @memberof serverpb.DeactivateIPResponse
         * @static
         * @param {serverpb.IDeactivateIPResponse} message DeactivateIPResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeactivateIPResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DeactivateIPResponse message, length delimited. Does not implicitly {@link serverpb.DeactivateIPResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.DeactivateIPResponse
         * @static
         * @param {serverpb.IDeactivateIPResponse} message DeactivateIPResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeactivateIPResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeactivateIPResponse message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.DeactivateIPResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.DeactivateIPResponse} DeactivateIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeactivateIPResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.DeactivateIPResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeactivateIPResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.DeactivateIPResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.DeactivateIPResponse} DeactivateIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeactivateIPResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeactivateIPResponse message.
         * @function verify
         * @memberof serverpb.DeactivateIPResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeactivateIPResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DeactivateIPResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.DeactivateIPResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.DeactivateIPResponse} DeactivateIPResponse
         */
        DeactivateIPResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.DeactivateIPResponse)
                return object;
            return new $root.serverpb.DeactivateIPResponse();
        };

        /**
         * Creates a plain object from a DeactivateIPResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.DeactivateIPResponse
         * @static
         * @param {serverpb.DeactivateIPResponse} message DeactivateIPResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeactivateIPResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DeactivateIPResponse to JSON.
         * @function toJSON
         * @memberof serverpb.DeactivateIPResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeactivateIPResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeactivateIPResponse;
    })();

    serverpb.GetNetworkRequest = (function() {

        /**
         * Properties of a GetNetworkRequest.
         * @memberof serverpb
         * @interface IGetNetworkRequest
         * @property {string} [ip] GetNetworkRequest ip
         * @property {number} [mask] GetNetworkRequest mask
         * @property {string} [name] GetNetworkRequest name
         */

        /**
         * Constructs a new GetNetworkRequest.
         * @memberof serverpb
         * @classdesc Represents a GetNetworkRequest.
         * @constructor
         * @param {serverpb.IGetNetworkRequest=} [properties] Properties to set
         */
        function GetNetworkRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetNetworkRequest ip.
         * @member {string}ip
         * @memberof serverpb.GetNetworkRequest
         * @instance
         */
        GetNetworkRequest.prototype.ip = "";

        /**
         * GetNetworkRequest mask.
         * @member {number}mask
         * @memberof serverpb.GetNetworkRequest
         * @instance
         */
        GetNetworkRequest.prototype.mask = 0;

        /**
         * GetNetworkRequest name.
         * @member {string}name
         * @memberof serverpb.GetNetworkRequest
         * @instance
         */
        GetNetworkRequest.prototype.name = "";

        /**
         * Creates a new GetNetworkRequest instance using the specified properties.
         * @function create
         * @memberof serverpb.GetNetworkRequest
         * @static
         * @param {serverpb.IGetNetworkRequest=} [properties] Properties to set
         * @returns {serverpb.GetNetworkRequest} GetNetworkRequest instance
         */
        GetNetworkRequest.create = function create(properties) {
            return new GetNetworkRequest(properties);
        };

        /**
         * Encodes the specified GetNetworkRequest message. Does not implicitly {@link serverpb.GetNetworkRequest.verify|verify} messages.
         * @function encode
         * @memberof serverpb.GetNetworkRequest
         * @static
         * @param {serverpb.IGetNetworkRequest} message GetNetworkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNetworkRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            if (message.mask != null && message.hasOwnProperty("mask"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mask);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified GetNetworkRequest message, length delimited. Does not implicitly {@link serverpb.GetNetworkRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.GetNetworkRequest
         * @static
         * @param {serverpb.IGetNetworkRequest} message GetNetworkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNetworkRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetNetworkRequest message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.GetNetworkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.GetNetworkRequest} GetNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNetworkRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.GetNetworkRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.mask = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetNetworkRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.GetNetworkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.GetNetworkRequest} GetNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNetworkRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetNetworkRequest message.
         * @function verify
         * @memberof serverpb.GetNetworkRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetNetworkRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.mask != null && message.hasOwnProperty("mask"))
                if (!$util.isInteger(message.mask))
                    return "mask: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a GetNetworkRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.GetNetworkRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.GetNetworkRequest} GetNetworkRequest
         */
        GetNetworkRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.GetNetworkRequest)
                return object;
            var message = new $root.serverpb.GetNetworkRequest();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.mask != null)
                message.mask = object.mask | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a GetNetworkRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.GetNetworkRequest
         * @static
         * @param {serverpb.GetNetworkRequest} message GetNetworkRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetNetworkRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip = "";
                object.mask = 0;
                object.name = "";
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.mask != null && message.hasOwnProperty("mask"))
                object.mask = message.mask;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this GetNetworkRequest to JSON.
         * @function toJSON
         * @memberof serverpb.GetNetworkRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetNetworkRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetNetworkRequest;
    })();

    serverpb.GetEstimatedNetworkRequest = (function() {

        /**
         * Properties of a GetEstimatedNetworkRequest.
         * @memberof serverpb
         * @interface IGetEstimatedNetworkRequest
         */

        /**
         * Constructs a new GetEstimatedNetworkRequest.
         * @memberof serverpb
         * @classdesc Represents a GetEstimatedNetworkRequest.
         * @constructor
         * @param {serverpb.IGetEstimatedNetworkRequest=} [properties] Properties to set
         */
        function GetEstimatedNetworkRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetEstimatedNetworkRequest instance using the specified properties.
         * @function create
         * @memberof serverpb.GetEstimatedNetworkRequest
         * @static
         * @param {serverpb.IGetEstimatedNetworkRequest=} [properties] Properties to set
         * @returns {serverpb.GetEstimatedNetworkRequest} GetEstimatedNetworkRequest instance
         */
        GetEstimatedNetworkRequest.create = function create(properties) {
            return new GetEstimatedNetworkRequest(properties);
        };

        /**
         * Encodes the specified GetEstimatedNetworkRequest message. Does not implicitly {@link serverpb.GetEstimatedNetworkRequest.verify|verify} messages.
         * @function encode
         * @memberof serverpb.GetEstimatedNetworkRequest
         * @static
         * @param {serverpb.IGetEstimatedNetworkRequest} message GetEstimatedNetworkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetEstimatedNetworkRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetEstimatedNetworkRequest message, length delimited. Does not implicitly {@link serverpb.GetEstimatedNetworkRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.GetEstimatedNetworkRequest
         * @static
         * @param {serverpb.IGetEstimatedNetworkRequest} message GetEstimatedNetworkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetEstimatedNetworkRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetEstimatedNetworkRequest message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.GetEstimatedNetworkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.GetEstimatedNetworkRequest} GetEstimatedNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetEstimatedNetworkRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.GetEstimatedNetworkRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetEstimatedNetworkRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.GetEstimatedNetworkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.GetEstimatedNetworkRequest} GetEstimatedNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetEstimatedNetworkRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetEstimatedNetworkRequest message.
         * @function verify
         * @memberof serverpb.GetEstimatedNetworkRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetEstimatedNetworkRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetEstimatedNetworkRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.GetEstimatedNetworkRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.GetEstimatedNetworkRequest} GetEstimatedNetworkRequest
         */
        GetEstimatedNetworkRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.GetEstimatedNetworkRequest)
                return object;
            return new $root.serverpb.GetEstimatedNetworkRequest();
        };

        /**
         * Creates a plain object from a GetEstimatedNetworkRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.GetEstimatedNetworkRequest
         * @static
         * @param {serverpb.GetEstimatedNetworkRequest} message GetEstimatedNetworkRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetEstimatedNetworkRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetEstimatedNetworkRequest to JSON.
         * @function toJSON
         * @memberof serverpb.GetEstimatedNetworkRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetEstimatedNetworkRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetEstimatedNetworkRequest;
    })();

    serverpb.GetNetworkResponse = (function() {

        /**
         * Properties of a GetNetworkResponse.
         * @memberof serverpb
         * @interface IGetNetworkResponse
         * @property {string} [network] GetNetworkResponse network
         * @property {Array.<string>} [defaultGateways] GetNetworkResponse defaultGateways
         * @property {string} [broadcast] GetNetworkResponse broadcast
         * @property {string} [netmask] GetNetworkResponse netmask
         * @property {Array.<model.ITag>} [tags] GetNetworkResponse tags
         */

        /**
         * Constructs a new GetNetworkResponse.
         * @memberof serverpb
         * @classdesc Represents a GetNetworkResponse.
         * @constructor
         * @param {serverpb.IGetNetworkResponse=} [properties] Properties to set
         */
        function GetNetworkResponse(properties) {
            this.defaultGateways = [];
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetNetworkResponse network.
         * @member {string}network
         * @memberof serverpb.GetNetworkResponse
         * @instance
         */
        GetNetworkResponse.prototype.network = "";

        /**
         * GetNetworkResponse defaultGateways.
         * @member {Array.<string>}defaultGateways
         * @memberof serverpb.GetNetworkResponse
         * @instance
         */
        GetNetworkResponse.prototype.defaultGateways = $util.emptyArray;

        /**
         * GetNetworkResponse broadcast.
         * @member {string}broadcast
         * @memberof serverpb.GetNetworkResponse
         * @instance
         */
        GetNetworkResponse.prototype.broadcast = "";

        /**
         * GetNetworkResponse netmask.
         * @member {string}netmask
         * @memberof serverpb.GetNetworkResponse
         * @instance
         */
        GetNetworkResponse.prototype.netmask = "";

        /**
         * GetNetworkResponse tags.
         * @member {Array.<model.ITag>}tags
         * @memberof serverpb.GetNetworkResponse
         * @instance
         */
        GetNetworkResponse.prototype.tags = $util.emptyArray;

        /**
         * Creates a new GetNetworkResponse instance using the specified properties.
         * @function create
         * @memberof serverpb.GetNetworkResponse
         * @static
         * @param {serverpb.IGetNetworkResponse=} [properties] Properties to set
         * @returns {serverpb.GetNetworkResponse} GetNetworkResponse instance
         */
        GetNetworkResponse.create = function create(properties) {
            return new GetNetworkResponse(properties);
        };

        /**
         * Encodes the specified GetNetworkResponse message. Does not implicitly {@link serverpb.GetNetworkResponse.verify|verify} messages.
         * @function encode
         * @memberof serverpb.GetNetworkResponse
         * @static
         * @param {serverpb.IGetNetworkResponse} message GetNetworkResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNetworkResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.network != null && message.hasOwnProperty("network"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.network);
            if (message.defaultGateways != null && message.defaultGateways.length)
                for (var i = 0; i < message.defaultGateways.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.defaultGateways[i]);
            if (message.broadcast != null && message.hasOwnProperty("broadcast"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.broadcast);
            if (message.netmask != null && message.hasOwnProperty("netmask"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.netmask);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    $root.model.Tag.encode(message.tags[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetNetworkResponse message, length delimited. Does not implicitly {@link serverpb.GetNetworkResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.GetNetworkResponse
         * @static
         * @param {serverpb.IGetNetworkResponse} message GetNetworkResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetNetworkResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetNetworkResponse message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.GetNetworkResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.GetNetworkResponse} GetNetworkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNetworkResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.GetNetworkResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.network = reader.string();
                    break;
                case 2:
                    if (!(message.defaultGateways && message.defaultGateways.length))
                        message.defaultGateways = [];
                    message.defaultGateways.push(reader.string());
                    break;
                case 3:
                    message.broadcast = reader.string();
                    break;
                case 4:
                    message.netmask = reader.string();
                    break;
                case 5:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push($root.model.Tag.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetNetworkResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.GetNetworkResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.GetNetworkResponse} GetNetworkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetNetworkResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetNetworkResponse message.
         * @function verify
         * @memberof serverpb.GetNetworkResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetNetworkResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.network != null && message.hasOwnProperty("network"))
                if (!$util.isString(message.network))
                    return "network: string expected";
            if (message.defaultGateways != null && message.hasOwnProperty("defaultGateways")) {
                if (!Array.isArray(message.defaultGateways))
                    return "defaultGateways: array expected";
                for (var i = 0; i < message.defaultGateways.length; ++i)
                    if (!$util.isString(message.defaultGateways[i]))
                        return "defaultGateways: string[] expected";
            }
            if (message.broadcast != null && message.hasOwnProperty("broadcast"))
                if (!$util.isString(message.broadcast))
                    return "broadcast: string expected";
            if (message.netmask != null && message.hasOwnProperty("netmask"))
                if (!$util.isString(message.netmask))
                    return "netmask: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i) {
                    var error = $root.model.Tag.verify(message.tags[i]);
                    if (error)
                        return "tags." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetNetworkResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.GetNetworkResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.GetNetworkResponse} GetNetworkResponse
         */
        GetNetworkResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.GetNetworkResponse)
                return object;
            var message = new $root.serverpb.GetNetworkResponse();
            if (object.network != null)
                message.network = String(object.network);
            if (object.defaultGateways) {
                if (!Array.isArray(object.defaultGateways))
                    throw TypeError(".serverpb.GetNetworkResponse.defaultGateways: array expected");
                message.defaultGateways = [];
                for (var i = 0; i < object.defaultGateways.length; ++i)
                    message.defaultGateways[i] = String(object.defaultGateways[i]);
            }
            if (object.broadcast != null)
                message.broadcast = String(object.broadcast);
            if (object.netmask != null)
                message.netmask = String(object.netmask);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".serverpb.GetNetworkResponse.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i) {
                    if (typeof object.tags[i] !== "object")
                        throw TypeError(".serverpb.GetNetworkResponse.tags: object expected");
                    message.tags[i] = $root.model.Tag.fromObject(object.tags[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetNetworkResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.GetNetworkResponse
         * @static
         * @param {serverpb.GetNetworkResponse} message GetNetworkResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetNetworkResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.defaultGateways = [];
                object.tags = [];
            }
            if (options.defaults) {
                object.network = "";
                object.broadcast = "";
                object.netmask = "";
            }
            if (message.network != null && message.hasOwnProperty("network"))
                object.network = message.network;
            if (message.defaultGateways && message.defaultGateways.length) {
                object.defaultGateways = [];
                for (var j = 0; j < message.defaultGateways.length; ++j)
                    object.defaultGateways[j] = message.defaultGateways[j];
            }
            if (message.broadcast != null && message.hasOwnProperty("broadcast"))
                object.broadcast = message.broadcast;
            if (message.netmask != null && message.hasOwnProperty("netmask"))
                object.netmask = message.netmask;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = $root.model.Tag.toObject(message.tags[j], options);
            }
            return object;
        };

        /**
         * Converts this GetNetworkResponse to JSON.
         * @function toJSON
         * @memberof serverpb.GetNetworkResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetNetworkResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetNetworkResponse;
    })();

    serverpb.CreateNetworkRequest = (function() {

        /**
         * Properties of a CreateNetworkRequest.
         * @memberof serverpb
         * @interface ICreateNetworkRequest
         * @property {string} [ip] CreateNetworkRequest ip
         * @property {number} [mask] CreateNetworkRequest mask
         * @property {Array.<string>} [defaultGateways] CreateNetworkRequest defaultGateways
         * @property {Array.<model.ITag>} [tags] CreateNetworkRequest tags
         */

        /**
         * Constructs a new CreateNetworkRequest.
         * @memberof serverpb
         * @classdesc Represents a CreateNetworkRequest.
         * @constructor
         * @param {serverpb.ICreateNetworkRequest=} [properties] Properties to set
         */
        function CreateNetworkRequest(properties) {
            this.defaultGateways = [];
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateNetworkRequest ip.
         * @member {string}ip
         * @memberof serverpb.CreateNetworkRequest
         * @instance
         */
        CreateNetworkRequest.prototype.ip = "";

        /**
         * CreateNetworkRequest mask.
         * @member {number}mask
         * @memberof serverpb.CreateNetworkRequest
         * @instance
         */
        CreateNetworkRequest.prototype.mask = 0;

        /**
         * CreateNetworkRequest defaultGateways.
         * @member {Array.<string>}defaultGateways
         * @memberof serverpb.CreateNetworkRequest
         * @instance
         */
        CreateNetworkRequest.prototype.defaultGateways = $util.emptyArray;

        /**
         * CreateNetworkRequest tags.
         * @member {Array.<model.ITag>}tags
         * @memberof serverpb.CreateNetworkRequest
         * @instance
         */
        CreateNetworkRequest.prototype.tags = $util.emptyArray;

        /**
         * Creates a new CreateNetworkRequest instance using the specified properties.
         * @function create
         * @memberof serverpb.CreateNetworkRequest
         * @static
         * @param {serverpb.ICreateNetworkRequest=} [properties] Properties to set
         * @returns {serverpb.CreateNetworkRequest} CreateNetworkRequest instance
         */
        CreateNetworkRequest.create = function create(properties) {
            return new CreateNetworkRequest(properties);
        };

        /**
         * Encodes the specified CreateNetworkRequest message. Does not implicitly {@link serverpb.CreateNetworkRequest.verify|verify} messages.
         * @function encode
         * @memberof serverpb.CreateNetworkRequest
         * @static
         * @param {serverpb.ICreateNetworkRequest} message CreateNetworkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateNetworkRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            if (message.mask != null && message.hasOwnProperty("mask"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mask);
            if (message.defaultGateways != null && message.defaultGateways.length)
                for (var i = 0; i < message.defaultGateways.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.defaultGateways[i]);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    $root.model.Tag.encode(message.tags[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateNetworkRequest message, length delimited. Does not implicitly {@link serverpb.CreateNetworkRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.CreateNetworkRequest
         * @static
         * @param {serverpb.ICreateNetworkRequest} message CreateNetworkRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateNetworkRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateNetworkRequest message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.CreateNetworkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.CreateNetworkRequest} CreateNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateNetworkRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.CreateNetworkRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.mask = reader.int32();
                    break;
                case 3:
                    if (!(message.defaultGateways && message.defaultGateways.length))
                        message.defaultGateways = [];
                    message.defaultGateways.push(reader.string());
                    break;
                case 4:
                    if (!(message.tags && message.tags.length))
                        message.tags = [];
                    message.tags.push($root.model.Tag.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateNetworkRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.CreateNetworkRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.CreateNetworkRequest} CreateNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateNetworkRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateNetworkRequest message.
         * @function verify
         * @memberof serverpb.CreateNetworkRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateNetworkRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.mask != null && message.hasOwnProperty("mask"))
                if (!$util.isInteger(message.mask))
                    return "mask: integer expected";
            if (message.defaultGateways != null && message.hasOwnProperty("defaultGateways")) {
                if (!Array.isArray(message.defaultGateways))
                    return "defaultGateways: array expected";
                for (var i = 0; i < message.defaultGateways.length; ++i)
                    if (!$util.isString(message.defaultGateways[i]))
                        return "defaultGateways: string[] expected";
            }
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i) {
                    var error = $root.model.Tag.verify(message.tags[i]);
                    if (error)
                        return "tags." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CreateNetworkRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.CreateNetworkRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.CreateNetworkRequest} CreateNetworkRequest
         */
        CreateNetworkRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.CreateNetworkRequest)
                return object;
            var message = new $root.serverpb.CreateNetworkRequest();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.mask != null)
                message.mask = object.mask | 0;
            if (object.defaultGateways) {
                if (!Array.isArray(object.defaultGateways))
                    throw TypeError(".serverpb.CreateNetworkRequest.defaultGateways: array expected");
                message.defaultGateways = [];
                for (var i = 0; i < object.defaultGateways.length; ++i)
                    message.defaultGateways[i] = String(object.defaultGateways[i]);
            }
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".serverpb.CreateNetworkRequest.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i) {
                    if (typeof object.tags[i] !== "object")
                        throw TypeError(".serverpb.CreateNetworkRequest.tags: object expected");
                    message.tags[i] = $root.model.Tag.fromObject(object.tags[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateNetworkRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.CreateNetworkRequest
         * @static
         * @param {serverpb.CreateNetworkRequest} message CreateNetworkRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateNetworkRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.defaultGateways = [];
                object.tags = [];
            }
            if (options.defaults) {
                object.ip = "";
                object.mask = 0;
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.mask != null && message.hasOwnProperty("mask"))
                object.mask = message.mask;
            if (message.defaultGateways && message.defaultGateways.length) {
                object.defaultGateways = [];
                for (var j = 0; j < message.defaultGateways.length; ++j)
                    object.defaultGateways[j] = message.defaultGateways[j];
            }
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = $root.model.Tag.toObject(message.tags[j], options);
            }
            return object;
        };

        /**
         * Converts this CreateNetworkRequest to JSON.
         * @function toJSON
         * @memberof serverpb.CreateNetworkRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateNetworkRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateNetworkRequest;
    })();

    serverpb.CreateNetworkResponse = (function() {

        /**
         * Properties of a CreateNetworkResponse.
         * @memberof serverpb
         * @interface ICreateNetworkResponse
         */

        /**
         * Constructs a new CreateNetworkResponse.
         * @memberof serverpb
         * @classdesc Represents a CreateNetworkResponse.
         * @constructor
         * @param {serverpb.ICreateNetworkResponse=} [properties] Properties to set
         */
        function CreateNetworkResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CreateNetworkResponse instance using the specified properties.
         * @function create
         * @memberof serverpb.CreateNetworkResponse
         * @static
         * @param {serverpb.ICreateNetworkResponse=} [properties] Properties to set
         * @returns {serverpb.CreateNetworkResponse} CreateNetworkResponse instance
         */
        CreateNetworkResponse.create = function create(properties) {
            return new CreateNetworkResponse(properties);
        };

        /**
         * Encodes the specified CreateNetworkResponse message. Does not implicitly {@link serverpb.CreateNetworkResponse.verify|verify} messages.
         * @function encode
         * @memberof serverpb.CreateNetworkResponse
         * @static
         * @param {serverpb.ICreateNetworkResponse} message CreateNetworkResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateNetworkResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CreateNetworkResponse message, length delimited. Does not implicitly {@link serverpb.CreateNetworkResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.CreateNetworkResponse
         * @static
         * @param {serverpb.ICreateNetworkResponse} message CreateNetworkResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateNetworkResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateNetworkResponse message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.CreateNetworkResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.CreateNetworkResponse} CreateNetworkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateNetworkResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.CreateNetworkResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateNetworkResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.CreateNetworkResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.CreateNetworkResponse} CreateNetworkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateNetworkResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateNetworkResponse message.
         * @function verify
         * @memberof serverpb.CreateNetworkResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateNetworkResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CreateNetworkResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.CreateNetworkResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.CreateNetworkResponse} CreateNetworkResponse
         */
        CreateNetworkResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.CreateNetworkResponse)
                return object;
            return new $root.serverpb.CreateNetworkResponse();
        };

        /**
         * Creates a plain object from a CreateNetworkResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.CreateNetworkResponse
         * @static
         * @param {serverpb.CreateNetworkResponse} message CreateNetworkResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateNetworkResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CreateNetworkResponse to JSON.
         * @function toJSON
         * @memberof serverpb.CreateNetworkResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateNetworkResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateNetworkResponse;
    })();

    serverpb.CreatePoolRequest = (function() {

        /**
         * Properties of a CreatePoolRequest.
         * @memberof serverpb
         * @interface ICreatePoolRequest
         * @property {string} [ip] CreatePoolRequest ip
         * @property {number} [mask] CreatePoolRequest mask
         * @property {model.IPool} [pool] CreatePoolRequest pool
         */

        /**
         * Constructs a new CreatePoolRequest.
         * @memberof serverpb
         * @classdesc Represents a CreatePoolRequest.
         * @constructor
         * @param {serverpb.ICreatePoolRequest=} [properties] Properties to set
         */
        function CreatePoolRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePoolRequest ip.
         * @member {string}ip
         * @memberof serverpb.CreatePoolRequest
         * @instance
         */
        CreatePoolRequest.prototype.ip = "";

        /**
         * CreatePoolRequest mask.
         * @member {number}mask
         * @memberof serverpb.CreatePoolRequest
         * @instance
         */
        CreatePoolRequest.prototype.mask = 0;

        /**
         * CreatePoolRequest pool.
         * @member {(model.IPool|null|undefined)}pool
         * @memberof serverpb.CreatePoolRequest
         * @instance
         */
        CreatePoolRequest.prototype.pool = null;

        /**
         * Creates a new CreatePoolRequest instance using the specified properties.
         * @function create
         * @memberof serverpb.CreatePoolRequest
         * @static
         * @param {serverpb.ICreatePoolRequest=} [properties] Properties to set
         * @returns {serverpb.CreatePoolRequest} CreatePoolRequest instance
         */
        CreatePoolRequest.create = function create(properties) {
            return new CreatePoolRequest(properties);
        };

        /**
         * Encodes the specified CreatePoolRequest message. Does not implicitly {@link serverpb.CreatePoolRequest.verify|verify} messages.
         * @function encode
         * @memberof serverpb.CreatePoolRequest
         * @static
         * @param {serverpb.ICreatePoolRequest} message CreatePoolRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePoolRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            if (message.mask != null && message.hasOwnProperty("mask"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mask);
            if (message.pool != null && message.hasOwnProperty("pool"))
                $root.model.Pool.encode(message.pool, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreatePoolRequest message, length delimited. Does not implicitly {@link serverpb.CreatePoolRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.CreatePoolRequest
         * @static
         * @param {serverpb.ICreatePoolRequest} message CreatePoolRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePoolRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePoolRequest message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.CreatePoolRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.CreatePoolRequest} CreatePoolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePoolRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.CreatePoolRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.mask = reader.int32();
                    break;
                case 3:
                    message.pool = $root.model.Pool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePoolRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.CreatePoolRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.CreatePoolRequest} CreatePoolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePoolRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePoolRequest message.
         * @function verify
         * @memberof serverpb.CreatePoolRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePoolRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.mask != null && message.hasOwnProperty("mask"))
                if (!$util.isInteger(message.mask))
                    return "mask: integer expected";
            if (message.pool != null && message.hasOwnProperty("pool")) {
                var error = $root.model.Pool.verify(message.pool);
                if (error)
                    return "pool." + error;
            }
            return null;
        };

        /**
         * Creates a CreatePoolRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.CreatePoolRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.CreatePoolRequest} CreatePoolRequest
         */
        CreatePoolRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.CreatePoolRequest)
                return object;
            var message = new $root.serverpb.CreatePoolRequest();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.mask != null)
                message.mask = object.mask | 0;
            if (object.pool != null) {
                if (typeof object.pool !== "object")
                    throw TypeError(".serverpb.CreatePoolRequest.pool: object expected");
                message.pool = $root.model.Pool.fromObject(object.pool);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreatePoolRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.CreatePoolRequest
         * @static
         * @param {serverpb.CreatePoolRequest} message CreatePoolRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePoolRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip = "";
                object.mask = 0;
                object.pool = null;
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.mask != null && message.hasOwnProperty("mask"))
                object.mask = message.mask;
            if (message.pool != null && message.hasOwnProperty("pool"))
                object.pool = $root.model.Pool.toObject(message.pool, options);
            return object;
        };

        /**
         * Converts this CreatePoolRequest to JSON.
         * @function toJSON
         * @memberof serverpb.CreatePoolRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePoolRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePoolRequest;
    })();

    serverpb.CreatePoolResponse = (function() {

        /**
         * Properties of a CreatePoolResponse.
         * @memberof serverpb
         * @interface ICreatePoolResponse
         */

        /**
         * Constructs a new CreatePoolResponse.
         * @memberof serverpb
         * @classdesc Represents a CreatePoolResponse.
         * @constructor
         * @param {serverpb.ICreatePoolResponse=} [properties] Properties to set
         */
        function CreatePoolResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CreatePoolResponse instance using the specified properties.
         * @function create
         * @memberof serverpb.CreatePoolResponse
         * @static
         * @param {serverpb.ICreatePoolResponse=} [properties] Properties to set
         * @returns {serverpb.CreatePoolResponse} CreatePoolResponse instance
         */
        CreatePoolResponse.create = function create(properties) {
            return new CreatePoolResponse(properties);
        };

        /**
         * Encodes the specified CreatePoolResponse message. Does not implicitly {@link serverpb.CreatePoolResponse.verify|verify} messages.
         * @function encode
         * @memberof serverpb.CreatePoolResponse
         * @static
         * @param {serverpb.ICreatePoolResponse} message CreatePoolResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePoolResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CreatePoolResponse message, length delimited. Does not implicitly {@link serverpb.CreatePoolResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.CreatePoolResponse
         * @static
         * @param {serverpb.ICreatePoolResponse} message CreatePoolResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePoolResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePoolResponse message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.CreatePoolResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.CreatePoolResponse} CreatePoolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePoolResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.CreatePoolResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePoolResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.CreatePoolResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.CreatePoolResponse} CreatePoolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePoolResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePoolResponse message.
         * @function verify
         * @memberof serverpb.CreatePoolResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePoolResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CreatePoolResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.CreatePoolResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.CreatePoolResponse} CreatePoolResponse
         */
        CreatePoolResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.CreatePoolResponse)
                return object;
            return new $root.serverpb.CreatePoolResponse();
        };

        /**
         * Creates a plain object from a CreatePoolResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.CreatePoolResponse
         * @static
         * @param {serverpb.CreatePoolResponse} message CreatePoolResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePoolResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CreatePoolResponse to JSON.
         * @function toJSON
         * @memberof serverpb.CreatePoolResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePoolResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePoolResponse;
    })();

    serverpb.ListIPRequest = (function() {

        /**
         * Properties of a ListIPRequest.
         * @memberof serverpb
         * @interface IListIPRequest
         */

        /**
         * Constructs a new ListIPRequest.
         * @memberof serverpb
         * @classdesc Represents a ListIPRequest.
         * @constructor
         * @param {serverpb.IListIPRequest=} [properties] Properties to set
         */
        function ListIPRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ListIPRequest instance using the specified properties.
         * @function create
         * @memberof serverpb.ListIPRequest
         * @static
         * @param {serverpb.IListIPRequest=} [properties] Properties to set
         * @returns {serverpb.ListIPRequest} ListIPRequest instance
         */
        ListIPRequest.create = function create(properties) {
            return new ListIPRequest(properties);
        };

        /**
         * Encodes the specified ListIPRequest message. Does not implicitly {@link serverpb.ListIPRequest.verify|verify} messages.
         * @function encode
         * @memberof serverpb.ListIPRequest
         * @static
         * @param {serverpb.IListIPRequest} message ListIPRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListIPRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ListIPRequest message, length delimited. Does not implicitly {@link serverpb.ListIPRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.ListIPRequest
         * @static
         * @param {serverpb.IListIPRequest} message ListIPRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListIPRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListIPRequest message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.ListIPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.ListIPRequest} ListIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListIPRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.ListIPRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListIPRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.ListIPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.ListIPRequest} ListIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListIPRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListIPRequest message.
         * @function verify
         * @memberof serverpb.ListIPRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListIPRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ListIPRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.ListIPRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.ListIPRequest} ListIPRequest
         */
        ListIPRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.ListIPRequest)
                return object;
            return new $root.serverpb.ListIPRequest();
        };

        /**
         * Creates a plain object from a ListIPRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.ListIPRequest
         * @static
         * @param {serverpb.ListIPRequest} message ListIPRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListIPRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ListIPRequest to JSON.
         * @function toJSON
         * @memberof serverpb.ListIPRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListIPRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListIPRequest;
    })();

    serverpb.ListIPResponse = (function() {

        /**
         * Properties of a ListIPResponse.
         * @memberof serverpb
         * @interface IListIPResponse
         * @property {Array.<model.IIPAddr>} [ips] ListIPResponse ips
         */

        /**
         * Constructs a new ListIPResponse.
         * @memberof serverpb
         * @classdesc Represents a ListIPResponse.
         * @constructor
         * @param {serverpb.IListIPResponse=} [properties] Properties to set
         */
        function ListIPResponse(properties) {
            this.ips = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListIPResponse ips.
         * @member {Array.<model.IIPAddr>}ips
         * @memberof serverpb.ListIPResponse
         * @instance
         */
        ListIPResponse.prototype.ips = $util.emptyArray;

        /**
         * Creates a new ListIPResponse instance using the specified properties.
         * @function create
         * @memberof serverpb.ListIPResponse
         * @static
         * @param {serverpb.IListIPResponse=} [properties] Properties to set
         * @returns {serverpb.ListIPResponse} ListIPResponse instance
         */
        ListIPResponse.create = function create(properties) {
            return new ListIPResponse(properties);
        };

        /**
         * Encodes the specified ListIPResponse message. Does not implicitly {@link serverpb.ListIPResponse.verify|verify} messages.
         * @function encode
         * @memberof serverpb.ListIPResponse
         * @static
         * @param {serverpb.IListIPResponse} message ListIPResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListIPResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ips != null && message.ips.length)
                for (var i = 0; i < message.ips.length; ++i)
                    $root.model.IPAddr.encode(message.ips[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListIPResponse message, length delimited. Does not implicitly {@link serverpb.ListIPResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.ListIPResponse
         * @static
         * @param {serverpb.IListIPResponse} message ListIPResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListIPResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListIPResponse message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.ListIPResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.ListIPResponse} ListIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListIPResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.ListIPResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ips && message.ips.length))
                        message.ips = [];
                    message.ips.push($root.model.IPAddr.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListIPResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.ListIPResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.ListIPResponse} ListIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListIPResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListIPResponse message.
         * @function verify
         * @memberof serverpb.ListIPResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListIPResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ips != null && message.hasOwnProperty("ips")) {
                if (!Array.isArray(message.ips))
                    return "ips: array expected";
                for (var i = 0; i < message.ips.length; ++i) {
                    var error = $root.model.IPAddr.verify(message.ips[i]);
                    if (error)
                        return "ips." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListIPResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.ListIPResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.ListIPResponse} ListIPResponse
         */
        ListIPResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.ListIPResponse)
                return object;
            var message = new $root.serverpb.ListIPResponse();
            if (object.ips) {
                if (!Array.isArray(object.ips))
                    throw TypeError(".serverpb.ListIPResponse.ips: array expected");
                message.ips = [];
                for (var i = 0; i < object.ips.length; ++i) {
                    if (typeof object.ips[i] !== "object")
                        throw TypeError(".serverpb.ListIPResponse.ips: object expected");
                    message.ips[i] = $root.model.IPAddr.fromObject(object.ips[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListIPResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.ListIPResponse
         * @static
         * @param {serverpb.ListIPResponse} message ListIPResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListIPResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ips = [];
            if (message.ips && message.ips.length) {
                object.ips = [];
                for (var j = 0; j < message.ips.length; ++j)
                    object.ips[j] = $root.model.IPAddr.toObject(message.ips[j], options);
            }
            return object;
        };

        /**
         * Converts this ListIPResponse to JSON.
         * @function toJSON
         * @memberof serverpb.ListIPResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListIPResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListIPResponse;
    })();

    serverpb.ListPoolRequest = (function() {

        /**
         * Properties of a ListPoolRequest.
         * @memberof serverpb
         * @interface IListPoolRequest
         */

        /**
         * Constructs a new ListPoolRequest.
         * @memberof serverpb
         * @classdesc Represents a ListPoolRequest.
         * @constructor
         * @param {serverpb.IListPoolRequest=} [properties] Properties to set
         */
        function ListPoolRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ListPoolRequest instance using the specified properties.
         * @function create
         * @memberof serverpb.ListPoolRequest
         * @static
         * @param {serverpb.IListPoolRequest=} [properties] Properties to set
         * @returns {serverpb.ListPoolRequest} ListPoolRequest instance
         */
        ListPoolRequest.create = function create(properties) {
            return new ListPoolRequest(properties);
        };

        /**
         * Encodes the specified ListPoolRequest message. Does not implicitly {@link serverpb.ListPoolRequest.verify|verify} messages.
         * @function encode
         * @memberof serverpb.ListPoolRequest
         * @static
         * @param {serverpb.IListPoolRequest} message ListPoolRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListPoolRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ListPoolRequest message, length delimited. Does not implicitly {@link serverpb.ListPoolRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.ListPoolRequest
         * @static
         * @param {serverpb.IListPoolRequest} message ListPoolRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListPoolRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListPoolRequest message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.ListPoolRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.ListPoolRequest} ListPoolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListPoolRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.ListPoolRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListPoolRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.ListPoolRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.ListPoolRequest} ListPoolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListPoolRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListPoolRequest message.
         * @function verify
         * @memberof serverpb.ListPoolRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListPoolRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ListPoolRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.ListPoolRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.ListPoolRequest} ListPoolRequest
         */
        ListPoolRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.ListPoolRequest)
                return object;
            return new $root.serverpb.ListPoolRequest();
        };

        /**
         * Creates a plain object from a ListPoolRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.ListPoolRequest
         * @static
         * @param {serverpb.ListPoolRequest} message ListPoolRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListPoolRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ListPoolRequest to JSON.
         * @function toJSON
         * @memberof serverpb.ListPoolRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListPoolRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListPoolRequest;
    })();

    serverpb.ListPoolResponse = (function() {

        /**
         * Properties of a ListPoolResponse.
         * @memberof serverpb
         * @interface IListPoolResponse
         * @property {Array.<model.IPool>} [pools] ListPoolResponse pools
         */

        /**
         * Constructs a new ListPoolResponse.
         * @memberof serverpb
         * @classdesc Represents a ListPoolResponse.
         * @constructor
         * @param {serverpb.IListPoolResponse=} [properties] Properties to set
         */
        function ListPoolResponse(properties) {
            this.pools = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListPoolResponse pools.
         * @member {Array.<model.IPool>}pools
         * @memberof serverpb.ListPoolResponse
         * @instance
         */
        ListPoolResponse.prototype.pools = $util.emptyArray;

        /**
         * Creates a new ListPoolResponse instance using the specified properties.
         * @function create
         * @memberof serverpb.ListPoolResponse
         * @static
         * @param {serverpb.IListPoolResponse=} [properties] Properties to set
         * @returns {serverpb.ListPoolResponse} ListPoolResponse instance
         */
        ListPoolResponse.create = function create(properties) {
            return new ListPoolResponse(properties);
        };

        /**
         * Encodes the specified ListPoolResponse message. Does not implicitly {@link serverpb.ListPoolResponse.verify|verify} messages.
         * @function encode
         * @memberof serverpb.ListPoolResponse
         * @static
         * @param {serverpb.IListPoolResponse} message ListPoolResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListPoolResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pools != null && message.pools.length)
                for (var i = 0; i < message.pools.length; ++i)
                    $root.model.Pool.encode(message.pools[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListPoolResponse message, length delimited. Does not implicitly {@link serverpb.ListPoolResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverpb.ListPoolResponse
         * @static
         * @param {serverpb.IListPoolResponse} message ListPoolResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListPoolResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListPoolResponse message from the specified reader or buffer.
         * @function decode
         * @memberof serverpb.ListPoolResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverpb.ListPoolResponse} ListPoolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListPoolResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverpb.ListPoolResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.pools && message.pools.length))
                        message.pools = [];
                    message.pools.push($root.model.Pool.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListPoolResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverpb.ListPoolResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverpb.ListPoolResponse} ListPoolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListPoolResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListPoolResponse message.
         * @function verify
         * @memberof serverpb.ListPoolResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListPoolResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pools != null && message.hasOwnProperty("pools")) {
                if (!Array.isArray(message.pools))
                    return "pools: array expected";
                for (var i = 0; i < message.pools.length; ++i) {
                    var error = $root.model.Pool.verify(message.pools[i]);
                    if (error)
                        return "pools." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListPoolResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverpb.ListPoolResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverpb.ListPoolResponse} ListPoolResponse
         */
        ListPoolResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.serverpb.ListPoolResponse)
                return object;
            var message = new $root.serverpb.ListPoolResponse();
            if (object.pools) {
                if (!Array.isArray(object.pools))
                    throw TypeError(".serverpb.ListPoolResponse.pools: array expected");
                message.pools = [];
                for (var i = 0; i < object.pools.length; ++i) {
                    if (typeof object.pools[i] !== "object")
                        throw TypeError(".serverpb.ListPoolResponse.pools: object expected");
                    message.pools[i] = $root.model.Pool.fromObject(object.pools[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListPoolResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverpb.ListPoolResponse
         * @static
         * @param {serverpb.ListPoolResponse} message ListPoolResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListPoolResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pools = [];
            if (message.pools && message.pools.length) {
                object.pools = [];
                for (var j = 0; j < message.pools.length; ++j)
                    object.pools[j] = $root.model.Pool.toObject(message.pools[j], options);
            }
            return object;
        };

        /**
         * Converts this ListPoolResponse to JSON.
         * @function toJSON
         * @memberof serverpb.ListPoolResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListPoolResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListPoolResponse;
    })();

    serverpb.NetworkServiceV0 = (function() {

        /**
         * Constructs a new NetworkServiceV0 service.
         * @memberof serverpb
         * @classdesc Represents a NetworkServiceV0
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function NetworkServiceV0(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (NetworkServiceV0.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = NetworkServiceV0;

        /**
         * Creates new NetworkServiceV0 service using the specified rpc implementation.
         * @function create
         * @memberof serverpb.NetworkServiceV0
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {NetworkServiceV0} RPC service. Useful where requests and/or responses are streamed.
         */
        NetworkServiceV0.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#listNetwork}.
         * @memberof serverpb.NetworkServiceV0
         * @typedef ListNetworkCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {serverpb.ListNetworkResponse} [response] ListNetworkResponse
         */

        /**
         * Calls ListNetwork.
         * @function .listNetwork
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.IListNetworkRequest} request ListNetworkRequest message or plain object
         * @param {serverpb.NetworkServiceV0.ListNetworkCallback} callback Node-style callback called with the error, if any, and ListNetworkResponse
         * @returns {undefined}
         * @variation 1
         */
        NetworkServiceV0.prototype.listNetwork = function listNetwork(request, callback) {
            return this.rpcCall(listNetwork, $root.serverpb.ListNetworkRequest, $root.serverpb.ListNetworkResponse, request, callback);
        };

        /**
         * Calls ListNetwork.
         * @function listNetwork
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.IListNetworkRequest} request ListNetworkRequest message or plain object
         * @returns {Promise<serverpb.ListNetworkResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#getEstimatedNetwork}.
         * @memberof serverpb.NetworkServiceV0
         * @typedef GetEstimatedNetworkCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {serverpb.GetNetworkResponse} [response] GetNetworkResponse
         */

        /**
         * Calls GetEstimatedNetwork.
         * @function .getEstimatedNetwork
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.IGetEstimatedNetworkRequest} request GetEstimatedNetworkRequest message or plain object
         * @param {serverpb.NetworkServiceV0.GetEstimatedNetworkCallback} callback Node-style callback called with the error, if any, and GetNetworkResponse
         * @returns {undefined}
         * @variation 1
         */
        NetworkServiceV0.prototype.getEstimatedNetwork = function getEstimatedNetwork(request, callback) {
            return this.rpcCall(getEstimatedNetwork, $root.serverpb.GetEstimatedNetworkRequest, $root.serverpb.GetNetworkResponse, request, callback);
        };

        /**
         * Calls GetEstimatedNetwork.
         * @function getEstimatedNetwork
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.IGetEstimatedNetworkRequest} request GetEstimatedNetworkRequest message or plain object
         * @returns {Promise<serverpb.GetNetworkResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#drawIP}.
         * @memberof serverpb.NetworkServiceV0
         * @typedef DrawIPCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {serverpb.DrawIPResponse} [response] DrawIPResponse
         */

        /**
         * Calls DrawIP.
         * @function .drawIP
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.IDrawIPRequest} request DrawIPRequest message or plain object
         * @param {serverpb.NetworkServiceV0.DrawIPCallback} callback Node-style callback called with the error, if any, and DrawIPResponse
         * @returns {undefined}
         * @variation 1
         */
        NetworkServiceV0.prototype.drawIP = function drawIP(request, callback) {
            return this.rpcCall(drawIP, $root.serverpb.DrawIPRequest, $root.serverpb.DrawIPResponse, request, callback);
        };

        /**
         * Calls DrawIP.
         * @function drawIP
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.IDrawIPRequest} request DrawIPRequest message or plain object
         * @returns {Promise<serverpb.DrawIPResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#drawIPEstimatingNetwork}.
         * @memberof serverpb.NetworkServiceV0
         * @typedef DrawIPEstimatingNetworkCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {serverpb.DrawIPResponse} [response] DrawIPResponse
         */

        /**
         * Calls DrawIPEstimatingNetwork.
         * @function .drawIPEstimatingNetwork
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.IDrawIPEstimatingNetworkRequest} request DrawIPEstimatingNetworkRequest message or plain object
         * @param {serverpb.NetworkServiceV0.DrawIPEstimatingNetworkCallback} callback Node-style callback called with the error, if any, and DrawIPResponse
         * @returns {undefined}
         * @variation 1
         */
        NetworkServiceV0.prototype.drawIPEstimatingNetwork = function drawIPEstimatingNetwork(request, callback) {
            return this.rpcCall(drawIPEstimatingNetwork, $root.serverpb.DrawIPEstimatingNetworkRequest, $root.serverpb.DrawIPResponse, request, callback);
        };

        /**
         * Calls DrawIPEstimatingNetwork.
         * @function drawIPEstimatingNetwork
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.IDrawIPEstimatingNetworkRequest} request DrawIPEstimatingNetworkRequest message or plain object
         * @returns {Promise<serverpb.DrawIPResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#getNetwork}.
         * @memberof serverpb.NetworkServiceV0
         * @typedef GetNetworkCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {serverpb.GetNetworkResponse} [response] GetNetworkResponse
         */

        /**
         * Calls GetNetwork.
         * @function .getNetwork
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.IGetNetworkRequest} request GetNetworkRequest message or plain object
         * @param {serverpb.NetworkServiceV0.GetNetworkCallback} callback Node-style callback called with the error, if any, and GetNetworkResponse
         * @returns {undefined}
         * @variation 1
         */
        NetworkServiceV0.prototype.getNetwork = function getNetwork(request, callback) {
            return this.rpcCall(getNetwork, $root.serverpb.GetNetworkRequest, $root.serverpb.GetNetworkResponse, request, callback);
        };

        /**
         * Calls GetNetwork.
         * @function getNetwork
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.IGetNetworkRequest} request GetNetworkRequest message or plain object
         * @returns {Promise<serverpb.GetNetworkResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#createNetwork}.
         * @memberof serverpb.NetworkServiceV0
         * @typedef CreateNetworkCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {serverpb.CreateNetworkResponse} [response] CreateNetworkResponse
         */

        /**
         * Calls CreateNetwork.
         * @function .createNetwork
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.ICreateNetworkRequest} request CreateNetworkRequest message or plain object
         * @param {serverpb.NetworkServiceV0.CreateNetworkCallback} callback Node-style callback called with the error, if any, and CreateNetworkResponse
         * @returns {undefined}
         * @variation 1
         */
        NetworkServiceV0.prototype.createNetwork = function createNetwork(request, callback) {
            return this.rpcCall(createNetwork, $root.serverpb.CreateNetworkRequest, $root.serverpb.CreateNetworkResponse, request, callback);
        };

        /**
         * Calls CreateNetwork.
         * @function createNetwork
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.ICreateNetworkRequest} request CreateNetworkRequest message or plain object
         * @returns {Promise<serverpb.CreateNetworkResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#createPool}.
         * @memberof serverpb.NetworkServiceV0
         * @typedef CreatePoolCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {serverpb.CreatePoolResponse} [response] CreatePoolResponse
         */

        /**
         * Calls CreatePool.
         * @function .createPool
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.ICreatePoolRequest} request CreatePoolRequest message or plain object
         * @param {serverpb.NetworkServiceV0.CreatePoolCallback} callback Node-style callback called with the error, if any, and CreatePoolResponse
         * @returns {undefined}
         * @variation 1
         */
        NetworkServiceV0.prototype.createPool = function createPool(request, callback) {
            return this.rpcCall(createPool, $root.serverpb.CreatePoolRequest, $root.serverpb.CreatePoolResponse, request, callback);
        };

        /**
         * Calls CreatePool.
         * @function createPool
         * @memberof serverpb.NetworkServiceV0
         * @instance
         * @param {serverpb.ICreatePoolRequest} request CreatePoolRequest message or plain object
         * @returns {Promise<serverpb.CreatePoolResponse>} Promise
         * @variation 2
         */

        return NetworkServiceV0;
    })();

    serverpb.IPServiceV0 = (function() {

        /**
         * Constructs a new IPServiceV0 service.
         * @memberof serverpb
         * @classdesc Represents a IPServiceV0
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function IPServiceV0(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (IPServiceV0.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = IPServiceV0;

        /**
         * Creates new IPServiceV0 service using the specified rpc implementation.
         * @function create
         * @memberof serverpb.IPServiceV0
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {IPServiceV0} RPC service. Useful where requests and/or responses are streamed.
         */
        IPServiceV0.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link serverpb.IPServiceV0#getNetworkIncludingIP}.
         * @memberof serverpb.IPServiceV0
         * @typedef GetNetworkIncludingIPCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {serverpb.GetNetworkResponse} [response] GetNetworkResponse
         */

        /**
         * Calls GetNetworkIncludingIP.
         * @function .getNetworkIncludingIP
         * @memberof serverpb.IPServiceV0
         * @instance
         * @param {serverpb.IGetNetworkIncludingIPRequest} request GetNetworkIncludingIPRequest message or plain object
         * @param {serverpb.IPServiceV0.GetNetworkIncludingIPCallback} callback Node-style callback called with the error, if any, and GetNetworkResponse
         * @returns {undefined}
         * @variation 1
         */
        IPServiceV0.prototype.getNetworkIncludingIP = function getNetworkIncludingIP(request, callback) {
            return this.rpcCall(getNetworkIncludingIP, $root.serverpb.GetNetworkIncludingIPRequest, $root.serverpb.GetNetworkResponse, request, callback);
        };

        /**
         * Calls GetNetworkIncludingIP.
         * @function getNetworkIncludingIP
         * @memberof serverpb.IPServiceV0
         * @instance
         * @param {serverpb.IGetNetworkIncludingIPRequest} request GetNetworkIncludingIPRequest message or plain object
         * @returns {Promise<serverpb.GetNetworkResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link serverpb.IPServiceV0#activateIP}.
         * @memberof serverpb.IPServiceV0
         * @typedef ActivateIPCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {serverpb.ActivateIPResponse} [response] ActivateIPResponse
         */

        /**
         * Calls ActivateIP.
         * @function .activateIP
         * @memberof serverpb.IPServiceV0
         * @instance
         * @param {serverpb.IActivateIPRequest} request ActivateIPRequest message or plain object
         * @param {serverpb.IPServiceV0.ActivateIPCallback} callback Node-style callback called with the error, if any, and ActivateIPResponse
         * @returns {undefined}
         * @variation 1
         */
        IPServiceV0.prototype.activateIP = function activateIP(request, callback) {
            return this.rpcCall(activateIP, $root.serverpb.ActivateIPRequest, $root.serverpb.ActivateIPResponse, request, callback);
        };

        /**
         * Calls ActivateIP.
         * @function activateIP
         * @memberof serverpb.IPServiceV0
         * @instance
         * @param {serverpb.IActivateIPRequest} request ActivateIPRequest message or plain object
         * @returns {Promise<serverpb.ActivateIPResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link serverpb.IPServiceV0#deactivateIP}.
         * @memberof serverpb.IPServiceV0
         * @typedef DeactivateIPCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {serverpb.DeactivateIPResponse} [response] DeactivateIPResponse
         */

        /**
         * Calls DeactivateIP.
         * @function .deactivateIP
         * @memberof serverpb.IPServiceV0
         * @instance
         * @param {serverpb.IDeactivateIPRequest} request DeactivateIPRequest message or plain object
         * @param {serverpb.IPServiceV0.DeactivateIPCallback} callback Node-style callback called with the error, if any, and DeactivateIPResponse
         * @returns {undefined}
         * @variation 1
         */
        IPServiceV0.prototype.deactivateIP = function deactivateIP(request, callback) {
            return this.rpcCall(deactivateIP, $root.serverpb.DeactivateIPRequest, $root.serverpb.DeactivateIPResponse, request, callback);
        };

        /**
         * Calls DeactivateIP.
         * @function deactivateIP
         * @memberof serverpb.IPServiceV0
         * @instance
         * @param {serverpb.IDeactivateIPRequest} request DeactivateIPRequest message or plain object
         * @returns {Promise<serverpb.DeactivateIPResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link serverpb.IPServiceV0#listIP}.
         * @memberof serverpb.IPServiceV0
         * @typedef ListIPCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {serverpb.ListIPResponse} [response] ListIPResponse
         */

        /**
         * Calls ListIP.
         * @function .listIP
         * @memberof serverpb.IPServiceV0
         * @instance
         * @param {serverpb.IListIPRequest} request ListIPRequest message or plain object
         * @param {serverpb.IPServiceV0.ListIPCallback} callback Node-style callback called with the error, if any, and ListIPResponse
         * @returns {undefined}
         * @variation 1
         */
        IPServiceV0.prototype.listIP = function listIP(request, callback) {
            return this.rpcCall(listIP, $root.serverpb.ListIPRequest, $root.serverpb.ListIPResponse, request, callback);
        };

        /**
         * Calls ListIP.
         * @function listIP
         * @memberof serverpb.IPServiceV0
         * @instance
         * @param {serverpb.IListIPRequest} request ListIPRequest message or plain object
         * @returns {Promise<serverpb.ListIPResponse>} Promise
         * @variation 2
         */

        return IPServiceV0;
    })();

    serverpb.PoolServiceV0 = (function() {

        /**
         * Constructs a new PoolServiceV0 service.
         * @memberof serverpb
         * @classdesc Represents a PoolServiceV0
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function PoolServiceV0(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (PoolServiceV0.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PoolServiceV0;

        /**
         * Creates new PoolServiceV0 service using the specified rpc implementation.
         * @function create
         * @memberof serverpb.PoolServiceV0
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {PoolServiceV0} RPC service. Useful where requests and/or responses are streamed.
         */
        PoolServiceV0.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link serverpb.PoolServiceV0#listPool}.
         * @memberof serverpb.PoolServiceV0
         * @typedef ListPoolCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {serverpb.ListPoolResponse} [response] ListPoolResponse
         */

        /**
         * Calls ListPool.
         * @function .listPool
         * @memberof serverpb.PoolServiceV0
         * @instance
         * @param {serverpb.IListPoolRequest} request ListPoolRequest message or plain object
         * @param {serverpb.PoolServiceV0.ListPoolCallback} callback Node-style callback called with the error, if any, and ListPoolResponse
         * @returns {undefined}
         * @variation 1
         */
        PoolServiceV0.prototype.listPool = function listPool(request, callback) {
            return this.rpcCall(listPool, $root.serverpb.ListPoolRequest, $root.serverpb.ListPoolResponse, request, callback);
        };

        /**
         * Calls ListPool.
         * @function listPool
         * @memberof serverpb.PoolServiceV0
         * @instance
         * @param {serverpb.IListPoolRequest} request ListPoolRequest message or plain object
         * @returns {Promise<serverpb.ListPoolResponse>} Promise
         * @variation 2
         */

        return PoolServiceV0;
    })();

    return serverpb;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.api = (function() {

        /**
         * Namespace api.
         * @memberof google
         * @namespace
         */
        var api = {};

        api.Http = (function() {

            /**
             * Properties of a Http.
             * @memberof google.api
             * @interface IHttp
             * @property {Array.<google.api.IHttpRule>} [rules] Http rules
             */

            /**
             * Constructs a new Http.
             * @memberof google.api
             * @classdesc Represents a Http.
             * @constructor
             * @param {google.api.IHttp=} [properties] Properties to set
             */
            function Http(properties) {
                this.rules = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Http rules.
             * @member {Array.<google.api.IHttpRule>}rules
             * @memberof google.api.Http
             * @instance
             */
            Http.prototype.rules = $util.emptyArray;

            /**
             * Creates a new Http instance using the specified properties.
             * @function create
             * @memberof google.api.Http
             * @static
             * @param {google.api.IHttp=} [properties] Properties to set
             * @returns {google.api.Http} Http instance
             */
            Http.create = function create(properties) {
                return new Http(properties);
            };

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @function encode
             * @memberof google.api.Http
             * @static
             * @param {google.api.IHttp} message Http message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Http.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rules != null && message.rules.length)
                    for (var i = 0; i < message.rules.length; ++i)
                        $root.google.api.HttpRule.encode(message.rules[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.api.Http
             * @static
             * @param {google.api.IHttp} message Http message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Http.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @function decode
             * @memberof google.api.Http
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.api.Http} Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Http.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.Http();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.rules && message.rules.length))
                            message.rules = [];
                        message.rules.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.api.Http
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.api.Http} Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Http.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Http message.
             * @function verify
             * @memberof google.api.Http
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Http.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.rules != null && message.hasOwnProperty("rules")) {
                    if (!Array.isArray(message.rules))
                        return "rules: array expected";
                    for (var i = 0; i < message.rules.length; ++i) {
                        var error = $root.google.api.HttpRule.verify(message.rules[i]);
                        if (error)
                            return "rules." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.api.Http
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.api.Http} Http
             */
            Http.fromObject = function fromObject(object) {
                if (object instanceof $root.google.api.Http)
                    return object;
                var message = new $root.google.api.Http();
                if (object.rules) {
                    if (!Array.isArray(object.rules))
                        throw TypeError(".google.api.Http.rules: array expected");
                    message.rules = [];
                    for (var i = 0; i < object.rules.length; ++i) {
                        if (typeof object.rules[i] !== "object")
                            throw TypeError(".google.api.Http.rules: object expected");
                        message.rules[i] = $root.google.api.HttpRule.fromObject(object.rules[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.api.Http
             * @static
             * @param {google.api.Http} message Http
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Http.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.rules = [];
                if (message.rules && message.rules.length) {
                    object.rules = [];
                    for (var j = 0; j < message.rules.length; ++j)
                        object.rules[j] = $root.google.api.HttpRule.toObject(message.rules[j], options);
                }
                return object;
            };

            /**
             * Converts this Http to JSON.
             * @function toJSON
             * @memberof google.api.Http
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Http.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Http;
        })();

        api.HttpRule = (function() {

            /**
             * Properties of a HttpRule.
             * @memberof google.api
             * @interface IHttpRule
             * @property {string} [get] HttpRule get
             * @property {string} [put] HttpRule put
             * @property {string} [post] HttpRule post
             * @property {string} ["delete"] HttpRule delete
             * @property {string} [patch] HttpRule patch
             * @property {google.api.ICustomHttpPattern} [custom] HttpRule custom
             * @property {string} [selector] HttpRule selector
             * @property {string} [body] HttpRule body
             * @property {Array.<google.api.IHttpRule>} [additionalBindings] HttpRule additionalBindings
             */

            /**
             * Constructs a new HttpRule.
             * @memberof google.api
             * @classdesc Represents a HttpRule.
             * @constructor
             * @param {google.api.IHttpRule=} [properties] Properties to set
             */
            function HttpRule(properties) {
                this.additionalBindings = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * HttpRule get.
             * @member {string}get
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.get = "";

            /**
             * HttpRule put.
             * @member {string}put
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.put = "";

            /**
             * HttpRule post.
             * @member {string}post
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.post = "";

            /**
             * HttpRule delete.
             * @member {string}delete_
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype["delete"] = "";

            /**
             * HttpRule patch.
             * @member {string}patch
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.patch = "";

            /**
             * HttpRule custom.
             * @member {(google.api.ICustomHttpPattern|null|undefined)}custom
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.custom = null;

            /**
             * HttpRule selector.
             * @member {string}selector
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.selector = "";

            /**
             * HttpRule body.
             * @member {string}body
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.body = "";

            /**
             * HttpRule additionalBindings.
             * @member {Array.<google.api.IHttpRule>}additionalBindings
             * @memberof google.api.HttpRule
             * @instance
             */
            HttpRule.prototype.additionalBindings = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * HttpRule pattern.
             * @member {string|undefined} pattern
             * @memberof google.api.HttpRule
             * @instance
             */
            Object.defineProperty(HttpRule.prototype, "pattern", {
                get: $util.oneOfGetter($oneOfFields = ["get", "put", "post", "delete", "patch", "custom"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @function create
             * @memberof google.api.HttpRule
             * @static
             * @param {google.api.IHttpRule=} [properties] Properties to set
             * @returns {google.api.HttpRule} HttpRule instance
             */
            HttpRule.create = function create(properties) {
                return new HttpRule(properties);
            };

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @function encode
             * @memberof google.api.HttpRule
             * @static
             * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HttpRule.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.selector != null && message.hasOwnProperty("selector"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                if (message.get != null && message.hasOwnProperty("get"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.get);
                if (message.put != null && message.hasOwnProperty("put"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.put);
                if (message.post != null && message.hasOwnProperty("post"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.post);
                if (message["delete"] != null && message.hasOwnProperty("delete"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message["delete"]);
                if (message.patch != null && message.hasOwnProperty("patch"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.patch);
                if (message.body != null && message.hasOwnProperty("body"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
                if (message.custom != null && message.hasOwnProperty("custom"))
                    $root.google.api.CustomHttpPattern.encode(message.custom, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.additionalBindings != null && message.additionalBindings.length)
                    for (var i = 0; i < message.additionalBindings.length; ++i)
                        $root.google.api.HttpRule.encode(message.additionalBindings[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.api.HttpRule
             * @static
             * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HttpRule.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @function decode
             * @memberof google.api.HttpRule
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.api.HttpRule} HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HttpRule.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.HttpRule();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.get = reader.string();
                        break;
                    case 3:
                        message.put = reader.string();
                        break;
                    case 4:
                        message.post = reader.string();
                        break;
                    case 5:
                        message["delete"] = reader.string();
                        break;
                    case 6:
                        message.patch = reader.string();
                        break;
                    case 8:
                        message.custom = $root.google.api.CustomHttpPattern.decode(reader, reader.uint32());
                        break;
                    case 1:
                        message.selector = reader.string();
                        break;
                    case 7:
                        message.body = reader.string();
                        break;
                    case 11:
                        if (!(message.additionalBindings && message.additionalBindings.length))
                            message.additionalBindings = [];
                        message.additionalBindings.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.api.HttpRule
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.api.HttpRule} HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HttpRule.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HttpRule message.
             * @function verify
             * @memberof google.api.HttpRule
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HttpRule.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.get != null && message.hasOwnProperty("get")) {
                    properties.pattern = 1;
                    if (!$util.isString(message.get))
                        return "get: string expected";
                }
                if (message.put != null && message.hasOwnProperty("put")) {
                    if (properties.pattern === 1)
                        return "pattern: multiple values";
                    properties.pattern = 1;
                    if (!$util.isString(message.put))
                        return "put: string expected";
                }
                if (message.post != null && message.hasOwnProperty("post")) {
                    if (properties.pattern === 1)
                        return "pattern: multiple values";
                    properties.pattern = 1;
                    if (!$util.isString(message.post))
                        return "post: string expected";
                }
                if (message["delete"] != null && message.hasOwnProperty("delete")) {
                    if (properties.pattern === 1)
                        return "pattern: multiple values";
                    properties.pattern = 1;
                    if (!$util.isString(message["delete"]))
                        return "delete: string expected";
                }
                if (message.patch != null && message.hasOwnProperty("patch")) {
                    if (properties.pattern === 1)
                        return "pattern: multiple values";
                    properties.pattern = 1;
                    if (!$util.isString(message.patch))
                        return "patch: string expected";
                }
                if (message.custom != null && message.hasOwnProperty("custom")) {
                    if (properties.pattern === 1)
                        return "pattern: multiple values";
                    properties.pattern = 1;
                    var error = $root.google.api.CustomHttpPattern.verify(message.custom);
                    if (error)
                        return "custom." + error;
                }
                if (message.selector != null && message.hasOwnProperty("selector"))
                    if (!$util.isString(message.selector))
                        return "selector: string expected";
                if (message.body != null && message.hasOwnProperty("body"))
                    if (!$util.isString(message.body))
                        return "body: string expected";
                if (message.additionalBindings != null && message.hasOwnProperty("additionalBindings")) {
                    if (!Array.isArray(message.additionalBindings))
                        return "additionalBindings: array expected";
                    for (var i = 0; i < message.additionalBindings.length; ++i) {
                        error = $root.google.api.HttpRule.verify(message.additionalBindings[i]);
                        if (error)
                            return "additionalBindings." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.api.HttpRule
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.api.HttpRule} HttpRule
             */
            HttpRule.fromObject = function fromObject(object) {
                if (object instanceof $root.google.api.HttpRule)
                    return object;
                var message = new $root.google.api.HttpRule();
                if (object.get != null)
                    message.get = String(object.get);
                if (object.put != null)
                    message.put = String(object.put);
                if (object.post != null)
                    message.post = String(object.post);
                if (object["delete"] != null)
                    message["delete"] = String(object["delete"]);
                if (object.patch != null)
                    message.patch = String(object.patch);
                if (object.custom != null) {
                    if (typeof object.custom !== "object")
                        throw TypeError(".google.api.HttpRule.custom: object expected");
                    message.custom = $root.google.api.CustomHttpPattern.fromObject(object.custom);
                }
                if (object.selector != null)
                    message.selector = String(object.selector);
                if (object.body != null)
                    message.body = String(object.body);
                if (object.additionalBindings) {
                    if (!Array.isArray(object.additionalBindings))
                        throw TypeError(".google.api.HttpRule.additionalBindings: array expected");
                    message.additionalBindings = [];
                    for (var i = 0; i < object.additionalBindings.length; ++i) {
                        if (typeof object.additionalBindings[i] !== "object")
                            throw TypeError(".google.api.HttpRule.additionalBindings: object expected");
                        message.additionalBindings[i] = $root.google.api.HttpRule.fromObject(object.additionalBindings[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.api.HttpRule
             * @static
             * @param {google.api.HttpRule} message HttpRule
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HttpRule.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.additionalBindings = [];
                if (options.defaults) {
                    object.selector = "";
                    object.body = "";
                }
                if (message.selector != null && message.hasOwnProperty("selector"))
                    object.selector = message.selector;
                if (message.get != null && message.hasOwnProperty("get")) {
                    object.get = message.get;
                    if (options.oneofs)
                        object.pattern = "get";
                }
                if (message.put != null && message.hasOwnProperty("put")) {
                    object.put = message.put;
                    if (options.oneofs)
                        object.pattern = "put";
                }
                if (message.post != null && message.hasOwnProperty("post")) {
                    object.post = message.post;
                    if (options.oneofs)
                        object.pattern = "post";
                }
                if (message["delete"] != null && message.hasOwnProperty("delete")) {
                    object["delete"] = message["delete"];
                    if (options.oneofs)
                        object.pattern = "delete";
                }
                if (message.patch != null && message.hasOwnProperty("patch")) {
                    object.patch = message.patch;
                    if (options.oneofs)
                        object.pattern = "patch";
                }
                if (message.body != null && message.hasOwnProperty("body"))
                    object.body = message.body;
                if (message.custom != null && message.hasOwnProperty("custom")) {
                    object.custom = $root.google.api.CustomHttpPattern.toObject(message.custom, options);
                    if (options.oneofs)
                        object.pattern = "custom";
                }
                if (message.additionalBindings && message.additionalBindings.length) {
                    object.additionalBindings = [];
                    for (var j = 0; j < message.additionalBindings.length; ++j)
                        object.additionalBindings[j] = $root.google.api.HttpRule.toObject(message.additionalBindings[j], options);
                }
                return object;
            };

            /**
             * Converts this HttpRule to JSON.
             * @function toJSON
             * @memberof google.api.HttpRule
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HttpRule.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return HttpRule;
        })();

        api.CustomHttpPattern = (function() {

            /**
             * Properties of a CustomHttpPattern.
             * @memberof google.api
             * @interface ICustomHttpPattern
             * @property {string} [kind] CustomHttpPattern kind
             * @property {string} [path] CustomHttpPattern path
             */

            /**
             * Constructs a new CustomHttpPattern.
             * @memberof google.api
             * @classdesc Represents a CustomHttpPattern.
             * @constructor
             * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
             */
            function CustomHttpPattern(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CustomHttpPattern kind.
             * @member {string}kind
             * @memberof google.api.CustomHttpPattern
             * @instance
             */
            CustomHttpPattern.prototype.kind = "";

            /**
             * CustomHttpPattern path.
             * @member {string}path
             * @memberof google.api.CustomHttpPattern
             * @instance
             */
            CustomHttpPattern.prototype.path = "";

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @function create
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
             * @returns {google.api.CustomHttpPattern} CustomHttpPattern instance
             */
            CustomHttpPattern.create = function create(properties) {
                return new CustomHttpPattern(properties);
            };

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @function encode
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomHttpPattern.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.kind != null && message.hasOwnProperty("kind"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
                if (message.path != null && message.hasOwnProperty("path"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
                return writer;
            };

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CustomHttpPattern.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @function decode
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.api.CustomHttpPattern} CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomHttpPattern.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CustomHttpPattern();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.kind = reader.string();
                        break;
                    case 2:
                        message.path = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.api.CustomHttpPattern} CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CustomHttpPattern.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CustomHttpPattern message.
             * @function verify
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CustomHttpPattern.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.kind != null && message.hasOwnProperty("kind"))
                    if (!$util.isString(message.kind))
                        return "kind: string expected";
                if (message.path != null && message.hasOwnProperty("path"))
                    if (!$util.isString(message.path))
                        return "path: string expected";
                return null;
            };

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.api.CustomHttpPattern} CustomHttpPattern
             */
            CustomHttpPattern.fromObject = function fromObject(object) {
                if (object instanceof $root.google.api.CustomHttpPattern)
                    return object;
                var message = new $root.google.api.CustomHttpPattern();
                if (object.kind != null)
                    message.kind = String(object.kind);
                if (object.path != null)
                    message.path = String(object.path);
                return message;
            };

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.api.CustomHttpPattern
             * @static
             * @param {google.api.CustomHttpPattern} message CustomHttpPattern
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CustomHttpPattern.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.kind = "";
                    object.path = "";
                }
                if (message.kind != null && message.hasOwnProperty("kind"))
                    object.kind = message.kind;
                if (message.path != null && message.hasOwnProperty("path"))
                    object.path = message.path;
                return object;
            };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @function toJSON
             * @memberof google.api.CustomHttpPattern
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CustomHttpPattern.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CustomHttpPattern;
        })();

        return api;
    })();

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @property {Array.<google.protobuf.IFileDescriptorProto>} [file] FileDescriptorSet file
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @constructor
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.IFileDescriptorProto>}file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             */
            FileDescriptorSet.create = function create(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.file.length)
                    for (var i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.file && message.file.length))
                            message.file = [];
                        message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    if (!Array.isArray(message.file))
                        return "file: array expected";
                    for (var i = 0; i < message.file.length; ++i) {
                        var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                        if (error)
                            return "file." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!Array.isArray(object.file))
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = [];
                    for (var i = 0; i < object.file.length; ++i) {
                        if (typeof object.file[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file && message.file.length) {
                    object.file = [];
                    for (var j = 0; j < message.file.length; ++j)
                        object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                }
                return object;
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @property {string} [name] FileDescriptorProto name
             * @property {string} ["package"] FileDescriptorProto package
             * @property {Array.<string>} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>} [publicDependency] FileDescriptorProto publicDependency
             * @property {Array.<number>} [weakDependency] FileDescriptorProto weakDependency
             * @property {Array.<google.protobuf.IDescriptorProto>} [messageType] FileDescriptorProto messageType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>} [enumType] FileDescriptorProto enumType
             * @property {Array.<google.protobuf.IServiceDescriptorProto>} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.IFieldDescriptorProto>} [extension] FileDescriptorProto extension
             * @property {google.protobuf.IFileOptions} [options] FileDescriptorProto options
             * @property {google.protobuf.ISourceCodeInfo} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
             * @property {string} [syntax] FileDescriptorProto syntax
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @constructor
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.publicDependency = [];
                this.weakDependency = [];
                this.messageType = [];
                this.enumType = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @member {string}name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string}package_
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>}dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto publicDependency.
             * @member {Array.<number>}publicDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.publicDependency = $util.emptyArray;

            /**
             * FileDescriptorProto weakDependency.
             * @member {Array.<number>}weakDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weakDependency = $util.emptyArray;

            /**
             * FileDescriptorProto messageType.
             * @member {Array.<google.protobuf.IDescriptorProto>}messageType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.messageType = $util.emptyArray;

            /**
             * FileDescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>}enumType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.IServiceDescriptorProto>}service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>}extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {(google.protobuf.IFileOptions|null|undefined)}options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto sourceCodeInfo.
             * @member {(google.protobuf.ISourceCodeInfo|null|undefined)}sourceCodeInfo
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.sourceCodeInfo = null;

            /**
             * FileDescriptorProto syntax.
             * @member {string}syntax
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             */
            FileDescriptorProto.create = function create(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && message.hasOwnProperty("package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (var i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.messageType != null && message.messageType.length)
                    for (var i = 0; i < message.messageType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (var i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (var i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.publicDependency != null && message.publicDependency.length)
                    for (var i = 0; i < message.publicDependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                if (message.weakDependency != null && message.weakDependency.length)
                    for (var i = 0; i < message.weakDependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message["package"] = reader.string();
                        break;
                    case 3:
                        if (!(message.dependency && message.dependency.length))
                            message.dependency = [];
                        message.dependency.push(reader.string());
                        break;
                    case 10:
                        if (!(message.publicDependency && message.publicDependency.length))
                            message.publicDependency = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.publicDependency.push(reader.int32());
                        } else
                            message.publicDependency.push(reader.int32());
                        break;
                    case 11:
                        if (!(message.weakDependency && message.weakDependency.length))
                            message.weakDependency = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.weakDependency.push(reader.int32());
                        } else
                            message.weakDependency.push(reader.int32());
                        break;
                    case 4:
                        if (!(message.messageType && message.messageType.length))
                            message.messageType = [];
                        message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.service && message.service.length))
                            message.service = [];
                        message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.syntax = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message["package"] != null && message.hasOwnProperty("package"))
                    if (!$util.isString(message["package"]))
                        return "package: string expected";
                if (message.dependency != null && message.hasOwnProperty("dependency")) {
                    if (!Array.isArray(message.dependency))
                        return "dependency: array expected";
                    for (var i = 0; i < message.dependency.length; ++i)
                        if (!$util.isString(message.dependency[i]))
                            return "dependency: string[] expected";
                }
                if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                    if (!Array.isArray(message.publicDependency))
                        return "publicDependency: array expected";
                    for (var i = 0; i < message.publicDependency.length; ++i)
                        if (!$util.isInteger(message.publicDependency[i]))
                            return "publicDependency: integer[] expected";
                }
                if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                    if (!Array.isArray(message.weakDependency))
                        return "weakDependency: array expected";
                    for (var i = 0; i < message.weakDependency.length; ++i)
                        if (!$util.isInteger(message.weakDependency[i]))
                            return "weakDependency: integer[] expected";
                }
                if (message.messageType != null && message.hasOwnProperty("messageType")) {
                    if (!Array.isArray(message.messageType))
                        return "messageType: array expected";
                    for (var i = 0; i < message.messageType.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                        if (error)
                            return "messageType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (var i = 0; i < message.enumType.length; ++i) {
                        error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.service != null && message.hasOwnProperty("service")) {
                    if (!Array.isArray(message.service))
                        return "service: array expected";
                    for (var i = 0; i < message.service.length; ++i) {
                        error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    error = $root.google.protobuf.FileOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                    error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                    if (error)
                        return "sourceCodeInfo." + error;
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    if (!$util.isString(message.syntax))
                        return "syntax: string expected";
                return null;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object["package"] != null)
                    message["package"] = String(object["package"]);
                if (object.dependency) {
                    if (!Array.isArray(object.dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = [];
                    for (var i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = String(object.dependency[i]);
                }
                if (object.publicDependency) {
                    if (!Array.isArray(object.publicDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                    message.publicDependency = [];
                    for (var i = 0; i < object.publicDependency.length; ++i)
                        message.publicDependency[i] = object.publicDependency[i] | 0;
                }
                if (object.weakDependency) {
                    if (!Array.isArray(object.weakDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                    message.weakDependency = [];
                    for (var i = 0; i < object.weakDependency.length; ++i)
                        message.weakDependency[i] = object.weakDependency[i] | 0;
                }
                if (object.messageType) {
                    if (!Array.isArray(object.messageType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                    message.messageType = [];
                    for (var i = 0; i < object.messageType.length; ++i) {
                        if (typeof object.messageType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                        message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (var i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.service) {
                    if (!Array.isArray(object.service))
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = [];
                    for (var i = 0; i < object.service.length; ++i) {
                        if (typeof object.service[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                }
                if (object.sourceCodeInfo != null) {
                    if (typeof object.sourceCodeInfo !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                    message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                }
                if (object.syntax != null)
                    message.syntax = String(object.syntax);
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.messageType = [];
                    object.enumType = [];
                    object.service = [];
                    object.extension = [];
                    object.publicDependency = [];
                    object.weakDependency = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.sourceCodeInfo = null;
                    object.syntax = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message["package"] != null && message.hasOwnProperty("package"))
                    object["package"] = message["package"];
                if (message.dependency && message.dependency.length) {
                    object.dependency = [];
                    for (var j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.messageType && message.messageType.length) {
                    object.messageType = [];
                    for (var j = 0; j < message.messageType.length; ++j)
                        object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (var j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.service && message.service.length) {
                    object.service = [];
                    for (var j = 0; j < message.service.length; ++j)
                        object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                    object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                if (message.publicDependency && message.publicDependency.length) {
                    object.publicDependency = [];
                    for (var j = 0; j < message.publicDependency.length; ++j)
                        object.publicDependency[j] = message.publicDependency[j];
                }
                if (message.weakDependency && message.weakDependency.length) {
                    object.weakDependency = [];
                    for (var j = 0; j < message.weakDependency.length; ++j)
                        object.weakDependency[j] = message.weakDependency[j];
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = message.syntax;
                return object;
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @property {string} [name] DescriptorProto name
             * @property {Array.<google.protobuf.IFieldDescriptorProto>} [field] DescriptorProto field
             * @property {Array.<google.protobuf.IFieldDescriptorProto>} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.IDescriptorProto>} [nestedType] DescriptorProto nestedType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>} [enumType] DescriptorProto enumType
             * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>} [extensionRange] DescriptorProto extensionRange
             * @property {Array.<google.protobuf.IOneofDescriptorProto>} [oneofDecl] DescriptorProto oneofDecl
             * @property {google.protobuf.IMessageOptions} [options] DescriptorProto options
             * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>} [reservedRange] DescriptorProto reservedRange
             * @property {Array.<string>} [reservedName] DescriptorProto reservedName
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @constructor
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nestedType = [];
                this.enumType = [];
                this.extensionRange = [];
                this.oneofDecl = [];
                this.reservedRange = [];
                this.reservedName = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @member {string}name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>}field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>}extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nestedType.
             * @member {Array.<google.protobuf.IDescriptorProto>}nestedType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nestedType = $util.emptyArray;

            /**
             * DescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>}enumType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * DescriptorProto extensionRange.
             * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>}extensionRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extensionRange = $util.emptyArray;

            /**
             * DescriptorProto oneofDecl.
             * @member {Array.<google.protobuf.IOneofDescriptorProto>}oneofDecl
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.oneofDecl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {(google.protobuf.IMessageOptions|null|undefined)}options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reservedRange.
             * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>}reservedRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedRange = $util.emptyArray;

            /**
             * DescriptorProto reservedName.
             * @member {Array.<string>}reservedName
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedName = $util.emptyArray;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             */
            DescriptorProto.create = function create(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (var i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.nestedType != null && message.nestedType.length)
                    for (var i = 0; i < message.nestedType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (var i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extensionRange != null && message.extensionRange.length)
                    for (var i = 0; i < message.extensionRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.oneofDecl != null && message.oneofDecl.length)
                    for (var i = 0; i < message.oneofDecl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reservedRange != null && message.reservedRange.length)
                    for (var i = 0; i < message.reservedRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reservedName != null && message.reservedName.length)
                    for (var i = 0; i < message.reservedName.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                return writer;
            };

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.field && message.field.length))
                            message.field = [];
                        message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.nestedType && message.nestedType.length))
                            message.nestedType = [];
                        message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.extensionRange && message.extensionRange.length))
                            message.extensionRange = [];
                        message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        if (!(message.oneofDecl && message.oneofDecl.length))
                            message.oneofDecl = [];
                        message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        if (!(message.reservedRange && message.reservedRange.length))
                            message.reservedRange = [];
                        message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                        break;
                    case 10:
                        if (!(message.reservedName && message.reservedName.length))
                            message.reservedName = [];
                        message.reservedName.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescriptorProto message.
             * @function verify
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.field != null && message.hasOwnProperty("field")) {
                    if (!Array.isArray(message.field))
                        return "field: array expected";
                    for (var i = 0; i < message.field.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                    if (!Array.isArray(message.nestedType))
                        return "nestedType: array expected";
                    for (var i = 0; i < message.nestedType.length; ++i) {
                        error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                        if (error)
                            return "nestedType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (var i = 0; i < message.enumType.length; ++i) {
                        error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                    if (!Array.isArray(message.extensionRange))
                        return "extensionRange: array expected";
                    for (var i = 0; i < message.extensionRange.length; ++i) {
                        error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                        if (error)
                            return "extensionRange." + error;
                    }
                }
                if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                    if (!Array.isArray(message.oneofDecl))
                        return "oneofDecl: array expected";
                    for (var i = 0; i < message.oneofDecl.length; ++i) {
                        error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                        if (error)
                            return "oneofDecl." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    error = $root.google.protobuf.MessageOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                    if (!Array.isArray(message.reservedRange))
                        return "reservedRange: array expected";
                    for (var i = 0; i < message.reservedRange.length; ++i) {
                        error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                        if (error)
                            return "reservedRange." + error;
                    }
                }
                if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                    if (!Array.isArray(message.reservedName))
                        return "reservedName: array expected";
                    for (var i = 0; i < message.reservedName.length; ++i)
                        if (!$util.isString(message.reservedName[i]))
                            return "reservedName: string[] expected";
                }
                return null;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                var message = new $root.google.protobuf.DescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.field) {
                    if (!Array.isArray(object.field))
                        throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = [];
                    for (var i = 0; i < object.field.length; ++i) {
                        if (typeof object.field[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.nestedType) {
                    if (!Array.isArray(object.nestedType))
                        throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                    message.nestedType = [];
                    for (var i = 0; i < object.nestedType.length; ++i) {
                        if (typeof object.nestedType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                        message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (var i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.extensionRange) {
                    if (!Array.isArray(object.extensionRange))
                        throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                    message.extensionRange = [];
                    for (var i = 0; i < object.extensionRange.length; ++i) {
                        if (typeof object.extensionRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                        message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                    }
                }
                if (object.oneofDecl) {
                    if (!Array.isArray(object.oneofDecl))
                        throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                    message.oneofDecl = [];
                    for (var i = 0; i < object.oneofDecl.length; ++i) {
                        if (typeof object.oneofDecl[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                        message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                }
                if (object.reservedRange) {
                    if (!Array.isArray(object.reservedRange))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                    message.reservedRange = [];
                    for (var i = 0; i < object.reservedRange.length; ++i) {
                        if (typeof object.reservedRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                        message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                    }
                }
                if (object.reservedName) {
                    if (!Array.isArray(object.reservedName))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                    message.reservedName = [];
                    for (var i = 0; i < object.reservedName.length; ++i)
                        message.reservedName[i] = String(object.reservedName[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.nestedType = [];
                    object.enumType = [];
                    object.extensionRange = [];
                    object.extension = [];
                    object.oneofDecl = [];
                    object.reservedRange = [];
                    object.reservedName = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.field && message.field.length) {
                    object.field = [];
                    for (var j = 0; j < message.field.length; ++j)
                        object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                }
                if (message.nestedType && message.nestedType.length) {
                    object.nestedType = [];
                    for (var j = 0; j < message.nestedType.length; ++j)
                        object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (var j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.extensionRange && message.extensionRange.length) {
                    object.extensionRange = [];
                    for (var j = 0; j < message.extensionRange.length; ++j)
                        object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                if (message.oneofDecl && message.oneofDecl.length) {
                    object.oneofDecl = [];
                    for (var j = 0; j < message.oneofDecl.length; ++j)
                        object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                }
                if (message.reservedRange && message.reservedRange.length) {
                    object.reservedRange = [];
                    for (var j = 0; j < message.reservedRange.length; ++j)
                        object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                }
                if (message.reservedName && message.reservedName.length) {
                    object.reservedName = [];
                    for (var j = 0; j < message.reservedName.length; ++j)
                        object.reservedName[j] = message.reservedName[j];
                }
                return object;
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.DescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @property {number} [start] ExtensionRange start
                 * @property {number} [end] ExtensionRange end
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @member {number}start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number}end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 */
                ExtensionRange.create = function create(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && message.hasOwnProperty("start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IReservedRange
                 * @property {number} [start] ReservedRange start
                 * @property {number} [end] ReservedRange end
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents a ReservedRange.
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @member {number}start
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @member {number}end
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 */
                ReservedRange.create = function create(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && message.hasOwnProperty("start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ReservedRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @property {string} [name] FieldDescriptorProto name
             * @property {number} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type} [type] FieldDescriptorProto type
             * @property {string} [typeName] FieldDescriptorProto typeName
             * @property {string} [extendee] FieldDescriptorProto extendee
             * @property {string} [defaultValue] FieldDescriptorProto defaultValue
             * @property {number} [oneofIndex] FieldDescriptorProto oneofIndex
             * @property {string} [jsonName] FieldDescriptorProto jsonName
             * @property {google.protobuf.IFieldOptions} [options] FieldDescriptorProto options
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @constructor
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @member {string}name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number}number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label}label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type}type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto typeName.
             * @member {string}typeName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.typeName = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string}extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto defaultValue.
             * @member {string}defaultValue
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.defaultValue = "";

            /**
             * FieldDescriptorProto oneofIndex.
             * @member {number}oneofIndex
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.oneofIndex = 0;

            /**
             * FieldDescriptorProto jsonName.
             * @member {string}jsonName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.jsonName = "";

            /**
             * FieldDescriptorProto options.
             * @member {(google.protobuf.IFieldOptions|null|undefined)}options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             */
            FieldDescriptorProto.create = function create(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && message.hasOwnProperty("label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                return writer;
            };

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.number = reader.int32();
                        break;
                    case 4:
                        message.label = reader.int32();
                        break;
                    case 5:
                        message.type = reader.int32();
                        break;
                    case 6:
                        message.typeName = reader.string();
                        break;
                    case 2:
                        message.extendee = reader.string();
                        break;
                    case 7:
                        message.defaultValue = reader.string();
                        break;
                    case 9:
                        message.oneofIndex = reader.int32();
                        break;
                    case 10:
                        message.jsonName = reader.string();
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    switch (message.label) {
                    default:
                        return "label: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    if (!$util.isString(message.typeName))
                        return "typeName: string expected";
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    if (!$util.isString(message.extendee))
                        return "extendee: string expected";
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    if (!$util.isString(message.defaultValue))
                        return "defaultValue: string expected";
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    if (!$util.isInteger(message.oneofIndex))
                        return "oneofIndex: integer expected";
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    if (!$util.isString(message.jsonName))
                        return "jsonName: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.FieldOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                switch (object.label) {
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.typeName != null)
                    message.typeName = String(object.typeName);
                if (object.extendee != null)
                    message.extendee = String(object.extendee);
                if (object.defaultValue != null)
                    message.defaultValue = String(object.defaultValue);
                if (object.oneofIndex != null)
                    message.oneofIndex = object.oneofIndex | 0;
                if (object.jsonName != null)
                    message.jsonName = String(object.jsonName);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.extendee = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.typeName = "";
                    object.defaultValue = "";
                    object.options = null;
                    object.oneofIndex = 0;
                    object.jsonName = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    object.extendee = message.extendee;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    object.typeName = message.typeName;
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    object.defaultValue = message.defaultValue;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    object.oneofIndex = message.oneofIndex;
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    object.jsonName = message.jsonName;
                return object;
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Type enum.
             * @enum {string}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @enum {string}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of an OneofDescriptorProto.
             * @memberof google.protobuf
             * @interface IOneofDescriptorProto
             * @property {string} [name] OneofDescriptorProto name
             * @property {google.protobuf.IOneofOptions} [options] OneofDescriptorProto options
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an OneofDescriptorProto.
             * @constructor
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @member {string}name
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @member {(google.protobuf.IOneofOptions|null|undefined)}options
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             */
            OneofDescriptorProto.create = function create(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.OneofOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @property {string} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.IEnumValueDescriptorProto>} [value] EnumDescriptorProto value
             * @property {google.protobuf.IEnumOptions} [options] EnumDescriptorProto options
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @constructor
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @member {string}name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.IEnumValueDescriptorProto>}value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {(google.protobuf.IEnumOptions|null|undefined)}options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             */
            EnumDescriptorProto.create = function create(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (var i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i) {
                        var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    error = $root.google.protobuf.EnumOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @property {string} [name] EnumValueDescriptorProto name
             * @property {number} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.IEnumValueOptions} [options] EnumValueDescriptorProto options
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @constructor
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @member {string}name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number}number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {(google.protobuf.IEnumValueOptions|null|undefined)}options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             */
            EnumValueDescriptorProto.create = function create(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.number = reader.int32();
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @property {string} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.IMethodDescriptorProto>} [method] ServiceDescriptorProto method
             * @property {google.protobuf.IServiceOptions} [options] ServiceDescriptorProto options
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @constructor
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @member {string}name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.IMethodDescriptorProto>}method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {(google.protobuf.IServiceOptions|null|undefined)}options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             */
            ServiceDescriptorProto.create = function create(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (var i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.method && message.method.length))
                            message.method = [];
                        message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.method != null && message.hasOwnProperty("method")) {
                    if (!Array.isArray(message.method))
                        return "method: array expected";
                    for (var i = 0; i < message.method.length; ++i) {
                        var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                        if (error)
                            return "method." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    error = $root.google.protobuf.ServiceOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.method) {
                    if (!Array.isArray(object.method))
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = [];
                    for (var i = 0; i < object.method.length; ++i) {
                        if (typeof object.method[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.method && message.method.length) {
                    object.method = [];
                    for (var j = 0; j < message.method.length; ++j)
                        object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @property {string} [name] MethodDescriptorProto name
             * @property {string} [inputType] MethodDescriptorProto inputType
             * @property {string} [outputType] MethodDescriptorProto outputType
             * @property {google.protobuf.IMethodOptions} [options] MethodDescriptorProto options
             * @property {boolean} [clientStreaming] MethodDescriptorProto clientStreaming
             * @property {boolean} [serverStreaming] MethodDescriptorProto serverStreaming
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @constructor
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @member {string}name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto inputType.
             * @member {string}inputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.inputType = "";

            /**
             * MethodDescriptorProto outputType.
             * @member {string}outputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.outputType = "";

            /**
             * MethodDescriptorProto options.
             * @member {(google.protobuf.IMethodOptions|null|undefined)}options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto clientStreaming.
             * @member {boolean}clientStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.clientStreaming = false;

            /**
             * MethodDescriptorProto serverStreaming.
             * @member {boolean}serverStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.serverStreaming = false;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             */
            MethodDescriptorProto.create = function create(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                if (message.options != null && message.hasOwnProperty("options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                return writer;
            };

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.inputType = reader.string();
                        break;
                    case 3:
                        message.outputType = reader.string();
                        break;
                    case 4:
                        message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.clientStreaming = reader.bool();
                        break;
                    case 6:
                        message.serverStreaming = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    if (!$util.isString(message.inputType))
                        return "inputType: string expected";
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    if (!$util.isString(message.outputType))
                        return "outputType: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.MethodOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    if (typeof message.clientStreaming !== "boolean")
                        return "clientStreaming: boolean expected";
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    if (typeof message.serverStreaming !== "boolean")
                        return "serverStreaming: boolean expected";
                return null;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.inputType != null)
                    message.inputType = String(object.inputType);
                if (object.outputType != null)
                    message.outputType = String(object.outputType);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                }
                if (object.clientStreaming != null)
                    message.clientStreaming = Boolean(object.clientStreaming);
                if (object.serverStreaming != null)
                    message.serverStreaming = Boolean(object.serverStreaming);
                return message;
            };

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.inputType = "";
                    object.outputType = "";
                    object.options = null;
                    object.clientStreaming = false;
                    object.serverStreaming = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    object.inputType = message.inputType;
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    object.outputType = message.outputType;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    object.clientStreaming = message.clientStreaming;
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    object.serverStreaming = message.serverStreaming;
                return object;
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @property {string} [javaPackage] FileOptions javaPackage
             * @property {string} [javaOuterClassname] FileOptions javaOuterClassname
             * @property {boolean} [javaMultipleFiles] FileOptions javaMultipleFiles
             * @property {boolean} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
             * @property {boolean} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
             * @property {google.protobuf.FileOptions.OptimizeMode} [optimizeFor] FileOptions optimizeFor
             * @property {string} [goPackage] FileOptions goPackage
             * @property {boolean} [ccGenericServices] FileOptions ccGenericServices
             * @property {boolean} [javaGenericServices] FileOptions javaGenericServices
             * @property {boolean} [pyGenericServices] FileOptions pyGenericServices
             * @property {boolean} [deprecated] FileOptions deprecated
             * @property {boolean} [ccEnableArenas] FileOptions ccEnableArenas
             * @property {string} [objcClassPrefix] FileOptions objcClassPrefix
             * @property {string} [csharpNamespace] FileOptions csharpNamespace
             * @property {Array.<google.protobuf.IUninterpretedOption>} [uninterpretedOption] FileOptions uninterpretedOption
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @constructor
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions javaPackage.
             * @member {string}javaPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaPackage = "";

            /**
             * FileOptions javaOuterClassname.
             * @member {string}javaOuterClassname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaOuterClassname = "";

            /**
             * FileOptions javaMultipleFiles.
             * @member {boolean}javaMultipleFiles
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaMultipleFiles = false;

            /**
             * FileOptions javaGenerateEqualsAndHash.
             * @member {boolean}javaGenerateEqualsAndHash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenerateEqualsAndHash = false;

            /**
             * FileOptions javaStringCheckUtf8.
             * @member {boolean}javaStringCheckUtf8
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaStringCheckUtf8 = false;

            /**
             * FileOptions optimizeFor.
             * @member {google.protobuf.FileOptions.OptimizeMode}optimizeFor
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimizeFor = 1;

            /**
             * FileOptions goPackage.
             * @member {string}goPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.goPackage = "";

            /**
             * FileOptions ccGenericServices.
             * @member {boolean}ccGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccGenericServices = false;

            /**
             * FileOptions javaGenericServices.
             * @member {boolean}javaGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenericServices = false;

            /**
             * FileOptions pyGenericServices.
             * @member {boolean}pyGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.pyGenericServices = false;

            /**
             * FileOptions deprecated.
             * @member {boolean}deprecated
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions ccEnableArenas.
             * @member {boolean}ccEnableArenas
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccEnableArenas = false;

            /**
             * FileOptions objcClassPrefix.
             * @member {string}objcClassPrefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.objcClassPrefix = "";

            /**
             * FileOptions csharpNamespace.
             * @member {string}csharpNamespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.csharpNamespace = "";

            /**
             * FileOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>}uninterpretedOption
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             */
            FileOptions.create = function create(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.javaPackage = reader.string();
                        break;
                    case 8:
                        message.javaOuterClassname = reader.string();
                        break;
                    case 10:
                        message.javaMultipleFiles = reader.bool();
                        break;
                    case 20:
                        message.javaGenerateEqualsAndHash = reader.bool();
                        break;
                    case 27:
                        message.javaStringCheckUtf8 = reader.bool();
                        break;
                    case 9:
                        message.optimizeFor = reader.int32();
                        break;
                    case 11:
                        message.goPackage = reader.string();
                        break;
                    case 16:
                        message.ccGenericServices = reader.bool();
                        break;
                    case 17:
                        message.javaGenericServices = reader.bool();
                        break;
                    case 18:
                        message.pyGenericServices = reader.bool();
                        break;
                    case 23:
                        message.deprecated = reader.bool();
                        break;
                    case 31:
                        message.ccEnableArenas = reader.bool();
                        break;
                    case 36:
                        message.objcClassPrefix = reader.string();
                        break;
                    case 37:
                        message.csharpNamespace = reader.string();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileOptions message.
             * @function verify
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    if (!$util.isString(message.javaPackage))
                        return "javaPackage: string expected";
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    if (!$util.isString(message.javaOuterClassname))
                        return "javaOuterClassname: string expected";
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    if (typeof message.javaMultipleFiles !== "boolean")
                        return "javaMultipleFiles: boolean expected";
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                        return "javaGenerateEqualsAndHash: boolean expected";
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    if (typeof message.javaStringCheckUtf8 !== "boolean")
                        return "javaStringCheckUtf8: boolean expected";
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    switch (message.optimizeFor) {
                    default:
                        return "optimizeFor: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    if (!$util.isString(message.goPackage))
                        return "goPackage: string expected";
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    if (typeof message.ccGenericServices !== "boolean")
                        return "ccGenericServices: boolean expected";
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    if (typeof message.javaGenericServices !== "boolean")
                        return "javaGenericServices: boolean expected";
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    if (typeof message.pyGenericServices !== "boolean")
                        return "pyGenericServices: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    if (typeof message.ccEnableArenas !== "boolean")
                        return "ccEnableArenas: boolean expected";
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    if (!$util.isString(message.objcClassPrefix))
                        return "objcClassPrefix: string expected";
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    if (!$util.isString(message.csharpNamespace))
                        return "csharpNamespace: string expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                var message = new $root.google.protobuf.FileOptions();
                if (object.javaPackage != null)
                    message.javaPackage = String(object.javaPackage);
                if (object.javaOuterClassname != null)
                    message.javaOuterClassname = String(object.javaOuterClassname);
                if (object.javaMultipleFiles != null)
                    message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                if (object.javaGenerateEqualsAndHash != null)
                    message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                if (object.javaStringCheckUtf8 != null)
                    message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                switch (object.optimizeFor) {
                case "SPEED":
                case 1:
                    message.optimizeFor = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimizeFor = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimizeFor = 3;
                    break;
                }
                if (object.goPackage != null)
                    message.goPackage = String(object.goPackage);
                if (object.ccGenericServices != null)
                    message.ccGenericServices = Boolean(object.ccGenericServices);
                if (object.javaGenericServices != null)
                    message.javaGenericServices = Boolean(object.javaGenericServices);
                if (object.pyGenericServices != null)
                    message.pyGenericServices = Boolean(object.pyGenericServices);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.ccEnableArenas != null)
                    message.ccEnableArenas = Boolean(object.ccEnableArenas);
                if (object.objcClassPrefix != null)
                    message.objcClassPrefix = String(object.objcClassPrefix);
                if (object.csharpNamespace != null)
                    message.csharpNamespace = String(object.csharpNamespace);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.javaPackage = "";
                    object.javaOuterClassname = "";
                    object.optimizeFor = options.enums === String ? "SPEED" : 1;
                    object.javaMultipleFiles = false;
                    object.goPackage = "";
                    object.ccGenericServices = false;
                    object.javaGenericServices = false;
                    object.pyGenericServices = false;
                    object.javaGenerateEqualsAndHash = false;
                    object.deprecated = false;
                    object.javaStringCheckUtf8 = false;
                    object.ccEnableArenas = false;
                    object.objcClassPrefix = "";
                    object.csharpNamespace = "";
                }
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    object.javaPackage = message.javaPackage;
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    object.javaOuterClassname = message.javaOuterClassname;
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    object.javaMultipleFiles = message.javaMultipleFiles;
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    object.goPackage = message.goPackage;
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    object.ccGenericServices = message.ccGenericServices;
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    object.javaGenericServices = message.javaGenericServices;
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    object.pyGenericServices = message.pyGenericServices;
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    object.ccEnableArenas = message.ccEnableArenas;
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    object.objcClassPrefix = message.objcClassPrefix;
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    object.csharpNamespace = message.csharpNamespace;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this FileOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * OptimizeMode enum.
             * @enum {string}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @property {boolean} [messageSetWireFormat] MessageOptions messageSetWireFormat
             * @property {boolean} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
             * @property {boolean} [deprecated] MessageOptions deprecated
             * @property {boolean} [mapEntry] MessageOptions mapEntry
             * @property {Array.<google.protobuf.IUninterpretedOption>} [uninterpretedOption] MessageOptions uninterpretedOption
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @constructor
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions messageSetWireFormat.
             * @member {boolean}messageSetWireFormat
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.messageSetWireFormat = false;

            /**
             * MessageOptions noStandardDescriptorAccessor.
             * @member {boolean}noStandardDescriptorAccessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.noStandardDescriptorAccessor = false;

            /**
             * MessageOptions deprecated.
             * @member {boolean}deprecated
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions mapEntry.
             * @member {boolean}mapEntry
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.mapEntry = false;

            /**
             * MessageOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>}uninterpretedOption
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             */
            MessageOptions.create = function create(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.messageSetWireFormat = reader.bool();
                        break;
                    case 2:
                        message.noStandardDescriptorAccessor = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 7:
                        message.mapEntry = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageOptions message.
             * @function verify
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    if (typeof message.messageSetWireFormat !== "boolean")
                        return "messageSetWireFormat: boolean expected";
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    if (typeof message.noStandardDescriptorAccessor !== "boolean")
                        return "noStandardDescriptorAccessor: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    if (typeof message.mapEntry !== "boolean")
                        return "mapEntry: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                var message = new $root.google.protobuf.MessageOptions();
                if (object.messageSetWireFormat != null)
                    message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                if (object.noStandardDescriptorAccessor != null)
                    message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.mapEntry != null)
                    message.mapEntry = Boolean(object.mapEntry);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.messageSetWireFormat = false;
                    object.noStandardDescriptorAccessor = false;
                    object.deprecated = false;
                    object.mapEntry = false;
                }
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    object.messageSetWireFormat = message.messageSetWireFormat;
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    object.mapEntry = message.mapEntry;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this MessageOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MessageOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @property {google.protobuf.FieldOptions.CType} [ctype] FieldOptions ctype
             * @property {boolean} [packed] FieldOptions packed
             * @property {google.protobuf.FieldOptions.JSType} [jstype] FieldOptions jstype
             * @property {boolean} [lazy] FieldOptions lazy
             * @property {boolean} [deprecated] FieldOptions deprecated
             * @property {boolean} [weak] FieldOptions weak
             * @property {Array.<google.protobuf.IUninterpretedOption>} [uninterpretedOption] FieldOptions uninterpretedOption
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @constructor
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType}ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean}packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @member {google.protobuf.FieldOptions.JSType}jstype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @member {boolean}lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean}deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @member {boolean}weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>}uninterpretedOption
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             */
            FieldOptions.create = function create(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                if (message.packed != null && message.hasOwnProperty("packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                if (message.weak != null && message.hasOwnProperty("weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ctype = reader.int32();
                        break;
                    case 2:
                        message.packed = reader.bool();
                        break;
                    case 6:
                        message.jstype = reader.int32();
                        break;
                    case 5:
                        message.lazy = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 10:
                        message.weak = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldOptions message.
             * @function verify
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.packed != null && message.hasOwnProperty("packed"))
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    if (typeof message.lazy !== "boolean")
                        return "lazy: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.weak != null && message.hasOwnProperty("weak"))
                    if (typeof message.weak !== "boolean")
                        return "weak: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                var message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed != null)
                    message.packed = Boolean(object.packed);
                switch (object.jstype) {
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;
                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;
                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                }
                if (object.lazy != null)
                    message.lazy = Boolean(object.lazy);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.weak != null)
                    message.weak = Boolean(object.weak);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.ctype = options.enums === String ? "STRING" : 0;
                    object.packed = false;
                    object.deprecated = false;
                    object.lazy = false;
                    object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                    object.weak = false;
                }
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                if (message.packed != null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    object.lazy = message.lazy;
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                if (message.weak != null && message.hasOwnProperty("weak"))
                    object.weak = message.weak;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this FieldOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * CType enum.
             * @enum {string}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @enum {string}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of an OneofOptions.
             * @memberof google.protobuf
             * @interface IOneofOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>} [uninterpretedOption] OneofOptions uninterpretedOption
             */

            /**
             * Constructs a new OneofOptions.
             * @memberof google.protobuf
             * @classdesc Represents an OneofOptions.
             * @constructor
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             */
            function OneofOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>}uninterpretedOption
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             */
            OneofOptions.create = function create(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofOptions message.
             * @function verify
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofOptions)
                    return object;
                var message = new $root.google.protobuf.OneofOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions} message OneofOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this OneofOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @property {boolean} [allowAlias] EnumOptions allowAlias
             * @property {boolean} [deprecated] EnumOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>} [uninterpretedOption] EnumOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @constructor
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allowAlias.
             * @member {boolean}allowAlias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allowAlias = false;

            /**
             * EnumOptions deprecated.
             * @member {boolean}deprecated
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>}uninterpretedOption
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             */
            EnumOptions.create = function create(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.allowAlias = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOptions message.
             * @function verify
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    if (typeof message.allowAlias !== "boolean")
                        return "allowAlias: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                var message = new $root.google.protobuf.EnumOptions();
                if (object.allowAlias != null)
                    message.allowAlias = Boolean(object.allowAlias);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.allowAlias = false;
                    object.deprecated = false;
                }
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    object.allowAlias = message.allowAlias;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this EnumOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @property {boolean} [deprecated] EnumValueOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>} [uninterpretedOption] EnumValueOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @constructor
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @member {boolean}deprecated
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>}uninterpretedOption
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             */
            EnumValueOptions.create = function create(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueOptions message.
             * @function verify
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                var message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @property {boolean} [deprecated] ServiceOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>} [uninterpretedOption] ServiceOptions uninterpretedOption
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @constructor
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @member {boolean}deprecated
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>}uninterpretedOption
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             */
            ServiceOptions.create = function create(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceOptions message.
             * @function verify
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                var message = new $root.google.protobuf.ServiceOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @property {boolean} [deprecated] MethodOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>} [uninterpretedOption] MethodOptions uninterpretedOption
             * @property {google.api.IHttpRule} [".google.api.http"] MethodOptions .google.api.http
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @constructor
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @member {boolean}deprecated
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>}uninterpretedOption
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * MethodOptions .google.api.http.
             * @member {(google.api.IHttpRule|null|undefined)}.google.api.http
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype[".google.api.http"] = null;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             */
            MethodOptions.create = function create(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http"))
                    $root.google.api.HttpRule.encode(message[".google.api.http"], writer.uint32(/* id 72295728, wireType 2 =*/578365826).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 72295728:
                        message[".google.api.http"] = $root.google.api.HttpRule.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodOptions message.
             * @function verify
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http")) {
                    error = $root.google.api.HttpRule.verify(message[".google.api.http"]);
                    if (error)
                        return ".google.api.http." + error;
                }
                return null;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                var message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".google.api.http"] != null) {
                    if (typeof object[".google.api.http"] !== "object")
                        throw TypeError(".google.protobuf.MethodOptions..google.api.http: object expected");
                    message[".google.api.http"] = $root.google.api.HttpRule.fromObject(object[".google.api.http"]);
                }
                return message;
            };

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object[".google.api.http"] = null;
                }
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http"))
                    object[".google.api.http"] = $root.google.api.HttpRule.toObject(message[".google.api.http"], options);
                return object;
            };

            /**
             * Converts this MethodOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @property {Array.<google.protobuf.UninterpretedOption.INamePart>} [name] UninterpretedOption name
             * @property {string} [identifierValue] UninterpretedOption identifierValue
             * @property {number|Long} [positiveIntValue] UninterpretedOption positiveIntValue
             * @property {number|Long} [negativeIntValue] UninterpretedOption negativeIntValue
             * @property {number} [doubleValue] UninterpretedOption doubleValue
             * @property {Uint8Array} [stringValue] UninterpretedOption stringValue
             * @property {string} [aggregateValue] UninterpretedOption aggregateValue
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @constructor
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.INamePart>}name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifierValue.
             * @member {string}identifierValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifierValue = "";

            /**
             * UninterpretedOption positiveIntValue.
             * @member {number|Long}positiveIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negativeIntValue.
             * @member {number|Long}negativeIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption doubleValue.
             * @member {number}doubleValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.doubleValue = 0;

            /**
             * UninterpretedOption stringValue.
             * @member {Uint8Array}stringValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.stringValue = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregateValue.
             * @member {string}aggregateValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregateValue = "";

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             */
            UninterpretedOption.create = function create(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.name.length)
                    for (var i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                return writer;
            };

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.name && message.name.length))
                            message.name = [];
                        message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.identifierValue = reader.string();
                        break;
                    case 4:
                        message.positiveIntValue = reader.uint64();
                        break;
                    case 5:
                        message.negativeIntValue = reader.int64();
                        break;
                    case 6:
                        message.doubleValue = reader.double();
                        break;
                    case 7:
                        message.stringValue = reader.bytes();
                        break;
                    case 8:
                        message.aggregateValue = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UninterpretedOption message.
             * @function verify
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    if (!Array.isArray(message.name))
                        return "name: array expected";
                    for (var i = 0; i < message.name.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                        if (error)
                            return "name." + error;
                    }
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    if (!$util.isString(message.identifierValue))
                        return "identifierValue: string expected";
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                        return "positiveIntValue: integer|Long expected";
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                        return "negativeIntValue: integer|Long expected";
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    if (typeof message.doubleValue !== "number")
                        return "doubleValue: number expected";
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                        return "stringValue: buffer expected";
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    if (!$util.isString(message.aggregateValue))
                        return "aggregateValue: string expected";
                return null;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                var message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = [];
                    for (var i = 0; i < object.name.length; ++i) {
                        if (typeof object.name[i] !== "object")
                            throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                    }
                }
                if (object.identifierValue != null)
                    message.identifierValue = String(object.identifierValue);
                if (object.positiveIntValue != null)
                    if ($util.Long)
                        (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                    else if (typeof object.positiveIntValue === "string")
                        message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                    else if (typeof object.positiveIntValue === "number")
                        message.positiveIntValue = object.positiveIntValue;
                    else if (typeof object.positiveIntValue === "object")
                        message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                if (object.negativeIntValue != null)
                    if ($util.Long)
                        (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                    else if (typeof object.negativeIntValue === "string")
                        message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                    else if (typeof object.negativeIntValue === "number")
                        message.negativeIntValue = object.negativeIntValue;
                    else if (typeof object.negativeIntValue === "object")
                        message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                if (object.doubleValue != null)
                    message.doubleValue = Number(object.doubleValue);
                if (object.stringValue != null)
                    if (typeof object.stringValue === "string")
                        $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                    else if (object.stringValue.length)
                        message.stringValue = object.stringValue;
                if (object.aggregateValue != null)
                    message.aggregateValue = String(object.aggregateValue);
                return message;
            };

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifierValue = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.positiveIntValue = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.negativeIntValue = options.longs === String ? "0" : 0;
                    object.doubleValue = 0;
                    object.stringValue = options.bytes === String ? "" : [];
                    object.aggregateValue = "";
                }
                if (message.name && message.name.length) {
                    object.name = [];
                    for (var j = 0; j < message.name.length; ++j)
                        object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    object.identifierValue = message.identifierValue;
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (typeof message.positiveIntValue === "number")
                        object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                    else
                        object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (typeof message.negativeIntValue === "number")
                        object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                    else
                        object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    object.aggregateValue = message.aggregateValue;
                return object;
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @function toJSON
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @property {string} namePart NamePart namePart
                 * @property {boolean} isExtension NamePart isExtension
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart namePart.
                 * @member {string}namePart
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.namePart = "";

                /**
                 * NamePart isExtension.
                 * @member {boolean}isExtension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.isExtension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 */
                NamePart.create = function create(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                    return writer;
                };

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.namePart = reader.string();
                            break;
                        case 2:
                            message.isExtension = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("namePart"))
                        throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                    if (!message.hasOwnProperty("isExtension"))
                        throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NamePart message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.namePart))
                        return "namePart: string expected";
                    if (typeof message.isExtension !== "boolean")
                        return "isExtension: boolean expected";
                    return null;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.namePart != null)
                        message.namePart = String(object.namePart);
                    if (object.isExtension != null)
                        message.isExtension = Boolean(object.isExtension);
                    return message;
                };

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.namePart = "";
                        object.isExtension = false;
                    }
                    if (message.namePart != null && message.hasOwnProperty("namePart"))
                        object.namePart = message.namePart;
                    if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                        object.isExtension = message.isExtension;
                    return object;
                };

                /**
                 * Converts this NamePart to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>} [location] SourceCodeInfo location
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @constructor
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>}location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             */
            SourceCodeInfo.create = function create(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && message.location.length)
                    for (var i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.location && message.location.length))
                            message.location = [];
                        message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @function verify
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.location != null && message.hasOwnProperty("location")) {
                    if (!Array.isArray(message.location))
                        return "location: array expected";
                    for (var i = 0; i < message.location.length; ++i) {
                        var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                        if (error)
                            return "location." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                var message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!Array.isArray(object.location))
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = [];
                    for (var i = 0; i < object.location.length; ++i) {
                        if (typeof object.location[i] !== "object")
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location && message.location.length) {
                    object.location = [];
                    for (var j = 0; j < message.location.length; ++j)
                        object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                }
                return object;
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @property {Array.<number>} [path] Location path
                 * @property {Array.<number>} [span] Location span
                 * @property {string} [leadingComments] Location leadingComments
                 * @property {string} [trailingComments] Location trailingComments
                 * @property {Array.<string>} [leadingDetachedComments] Location leadingDetachedComments
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leadingDetachedComments = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @member {Array.<number>}path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>}span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leadingComments.
                 * @member {string}leadingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingComments = "";

                /**
                 * Location trailingComments.
                 * @member {string}trailingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailingComments = "";

                /**
                 * Location leadingDetachedComments.
                 * @member {Array.<string>}leadingDetachedComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingDetachedComments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                    if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                        for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            if (!(message.span && message.span.length))
                                message.span = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.span.push(reader.int32());
                            } else
                                message.span.push(reader.int32());
                            break;
                        case 3:
                            message.leadingComments = reader.string();
                            break;
                        case 4:
                            message.trailingComments = reader.string();
                            break;
                        case 6:
                            if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                message.leadingDetachedComments = [];
                            message.leadingDetachedComments.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.span != null && message.hasOwnProperty("span")) {
                        if (!Array.isArray(message.span))
                            return "span: array expected";
                        for (var i = 0; i < message.span.length; ++i)
                            if (!$util.isInteger(message.span[i]))
                                return "span: integer[] expected";
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        if (!$util.isString(message.leadingComments))
                            return "leadingComments: string expected";
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        if (!$util.isString(message.trailingComments))
                            return "trailingComments: string expected";
                    if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                        if (!Array.isArray(message.leadingDetachedComments))
                            return "leadingDetachedComments: array expected";
                        for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                            if (!$util.isString(message.leadingDetachedComments[i]))
                                return "leadingDetachedComments: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!Array.isArray(object.span))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = [];
                        for (var i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leadingComments != null)
                        message.leadingComments = String(object.leadingComments);
                    if (object.trailingComments != null)
                        message.trailingComments = String(object.trailingComments);
                    if (object.leadingDetachedComments) {
                        if (!Array.isArray(object.leadingDetachedComments))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                        message.leadingDetachedComments = [];
                        for (var i = 0; i < object.leadingDetachedComments.length; ++i)
                            message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leadingDetachedComments = [];
                    }
                    if (options.defaults) {
                        object.leadingComments = "";
                        object.trailingComments = "";
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span && message.span.length) {
                        object.span = [];
                        for (var j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        object.leadingComments = message.leadingComments;
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        object.trailingComments = message.trailingComments;
                    if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                        object.leadingDetachedComments = [];
                        for (var j = 0; j < message.leadingDetachedComments.length; ++j)
                            object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                    }
                    return object;
                };

                /**
                 * Converts this Location to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @memberof google.protobuf
             * @interface IGeneratedCodeInfo
             * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} [annotation] GeneratedCodeInfo annotation
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a GeneratedCodeInfo.
             * @constructor
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>}annotation
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             */
            GeneratedCodeInfo.create = function create(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation != null && message.annotation.length)
                    for (var i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.annotation && message.annotation.length))
                            message.annotation = [];
                        message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @function verify
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.annotation != null && message.hasOwnProperty("annotation")) {
                    if (!Array.isArray(message.annotation))
                        return "annotation: array expected";
                    for (var i = 0; i < message.annotation.length; ++i) {
                        var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                        if (error)
                            return "annotation." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                    return object;
                var message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    if (!Array.isArray(object.annotation))
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                    message.annotation = [];
                    for (var i = 0; i < object.annotation.length; ++i) {
                        if (typeof object.annotation[i] !== "object")
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                        message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.annotation = [];
                if (message.annotation && message.annotation.length) {
                    object.annotation = [];
                    for (var j = 0; j < message.annotation.length; ++j)
                        object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                }
                return object;
            };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @interface IAnnotation
                 * @property {Array.<number>} [path] Annotation path
                 * @property {string} [sourceFile] Annotation sourceFile
                 * @property {number} [begin] Annotation begin
                 * @property {number} [end] Annotation end
                 */

                /**
                 * Constructs a new Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @classdesc Represents an Annotation.
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 */
                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @member {Array.<number>}path
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation sourceFile.
                 * @member {string}sourceFile
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.sourceFile = "";

                /**
                 * Annotation begin.
                 * @member {number}begin
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @member {number}end
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.end = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 */
                Annotation.create = function create(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && message.hasOwnProperty("end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            message.sourceFile = reader.string();
                            break;
                        case 3:
                            message.begin = reader.int32();
                            break;
                        case 4:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Annotation message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        if (!$util.isString(message.sourceFile))
                            return "sourceFile: string expected";
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        if (!$util.isInteger(message.begin))
                            return "begin: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.sourceFile != null)
                        message.sourceFile = String(object.sourceFile);
                    if (object.begin != null)
                        message.begin = object.begin | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.sourceFile = "";
                        object.begin = 0;
                        object.end = 0;
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        object.sourceFile = message.sourceFile;
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        object.begin = message.begin;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this Annotation to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Annotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
