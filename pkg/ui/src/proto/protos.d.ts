import * as $protobuf from "protobufjs";

/** Namespace model. */
export namespace model {

    /** Properties of a Tag. */
    interface ITag {

        /** Tag key */
        key?: string;

        /** Tag value */
        value?: string;
    }

    /** Represents a Tag. */
    class Tag {

        /**
         * Constructs a new Tag.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.ITag);

        /** Tag key. */
        public key: string;

        /** Tag value. */
        public value: string;

        /**
         * Creates a new Tag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Tag instance
         */
        public static create(properties?: model.ITag): model.Tag;

        /**
         * Encodes the specified Tag message. Does not implicitly {@link model.Tag.verify|verify} messages.
         * @param message Tag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Tag message, length delimited. Does not implicitly {@link model.Tag.verify|verify} messages.
         * @param message Tag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Tag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.Tag;

        /**
         * Decodes a Tag message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Tag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.Tag;

        /**
         * Verifies a Tag message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Tag message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Tag
         */
        public static fromObject(object: { [k: string]: any }): model.Tag;

        /**
         * Creates a plain object from a Tag message. Also converts values to other types if specified.
         * @param message Tag
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.Tag, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Tag to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pool. */
    interface IPool {

        /** Pool start */
        start?: string;

        /** Pool end */
        end?: string;

        /** Pool status */
        status?: model.Pool.Status;

        /** Pool tags */
        tags?: model.ITag[];
    }

    /** Represents a Pool. */
    class Pool {

        /**
         * Constructs a new Pool.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IPool);

        /** Pool start. */
        public start: string;

        /** Pool end. */
        public end: string;

        /** Pool status. */
        public status: model.Pool.Status;

        /** Pool tags. */
        public tags: model.ITag[];

        /**
         * Creates a new Pool instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pool instance
         */
        public static create(properties?: model.IPool): model.Pool;

        /**
         * Encodes the specified Pool message. Does not implicitly {@link model.Pool.verify|verify} messages.
         * @param message Pool message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IPool, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pool message, length delimited. Does not implicitly {@link model.Pool.verify|verify} messages.
         * @param message Pool message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IPool, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pool message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.Pool;

        /**
         * Decodes a Pool message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.Pool;

        /**
         * Verifies a Pool message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pool message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pool
         */
        public static fromObject(object: { [k: string]: any }): model.Pool;

        /**
         * Creates a plain object from a Pool message. Also converts values to other types if specified.
         * @param message Pool
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.Pool, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pool to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Pool {

        /** Status enum. */
        enum Status {
            UNKNOWN = 0,
            AVAILABLE = 1,
            RESERVED = 2
        }
    }

    /** Properties of a IPAddr. */
    interface IIPAddr {

        /** IPAddr ip */
        ip?: string;

        /** IPAddr status */
        status?: model.IPAddr.Status;

        /** IPAddr tags */
        tags?: model.ITag[];
    }

    /** Represents a IPAddr. */
    class IPAddr {

        /**
         * Constructs a new IPAddr.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IIPAddr);

        /** IPAddr ip. */
        public ip: string;

        /** IPAddr status. */
        public status: model.IPAddr.Status;

        /** IPAddr tags. */
        public tags: model.ITag[];

        /**
         * Creates a new IPAddr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IPAddr instance
         */
        public static create(properties?: model.IIPAddr): model.IPAddr;

        /**
         * Encodes the specified IPAddr message. Does not implicitly {@link model.IPAddr.verify|verify} messages.
         * @param message IPAddr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IIPAddr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IPAddr message, length delimited. Does not implicitly {@link model.IPAddr.verify|verify} messages.
         * @param message IPAddr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IIPAddr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a IPAddr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IPAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.IPAddr;

        /**
         * Decodes a IPAddr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IPAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.IPAddr;

        /**
         * Verifies a IPAddr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a IPAddr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IPAddr
         */
        public static fromObject(object: { [k: string]: any }): model.IPAddr;

        /**
         * Creates a plain object from a IPAddr message. Also converts values to other types if specified.
         * @param message IPAddr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.IPAddr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IPAddr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace IPAddr {

        /** Status enum. */
        enum Status {
            UNKNOWN = 0,
            ACTIVE = 1,
            TEMPORARY_RESERVED = 2,
            RESERVED = 3
        }
    }

    /** Properties of a Network. */
    interface INetwork {

        /** Network prefix */
        prefix?: string;

        /** Network gateways */
        gateways?: string[];

        /** Network broadcast */
        broadcast?: string;

        /** Network netmask */
        netmask?: string;

        /** Network status */
        status?: model.Network.Status;

        /** Network tags */
        tags?: model.ITag[];
    }

    /** Represents a Network. */
    class Network {

        /**
         * Constructs a new Network.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.INetwork);

        /** Network prefix. */
        public prefix: string;

        /** Network gateways. */
        public gateways: string[];

        /** Network broadcast. */
        public broadcast: string;

        /** Network netmask. */
        public netmask: string;

        /** Network status. */
        public status: model.Network.Status;

        /** Network tags. */
        public tags: model.ITag[];

        /**
         * Creates a new Network instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Network instance
         */
        public static create(properties?: model.INetwork): model.Network;

        /**
         * Encodes the specified Network message. Does not implicitly {@link model.Network.verify|verify} messages.
         * @param message Network message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.INetwork, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Network message, length delimited. Does not implicitly {@link model.Network.verify|verify} messages.
         * @param message Network message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.INetwork, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Network message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Network
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.Network;

        /**
         * Decodes a Network message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Network
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.Network;

        /**
         * Verifies a Network message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Network message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Network
         */
        public static fromObject(object: { [k: string]: any }): model.Network;

        /**
         * Creates a plain object from a Network message. Also converts values to other types if specified.
         * @param message Network
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.Network, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Network to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Network {

        /** Status enum. */
        enum Status {
            UNKNOWN = 0,
            AVAILABLE = 1,
            RESERVED = 2
        }
    }
}

/** Namespace serverpb. */
export namespace serverpb {

    /** Properties of a ListNetworkRequest. */
    interface IListNetworkRequest {
    }

    /** Represents a ListNetworkRequest. */
    class ListNetworkRequest {

        /**
         * Constructs a new ListNetworkRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IListNetworkRequest);

        /**
         * Creates a new ListNetworkRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListNetworkRequest instance
         */
        public static create(properties?: serverpb.IListNetworkRequest): serverpb.ListNetworkRequest;

        /**
         * Encodes the specified ListNetworkRequest message. Does not implicitly {@link serverpb.ListNetworkRequest.verify|verify} messages.
         * @param message ListNetworkRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IListNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListNetworkRequest message, length delimited. Does not implicitly {@link serverpb.ListNetworkRequest.verify|verify} messages.
         * @param message ListNetworkRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IListNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListNetworkRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.ListNetworkRequest;

        /**
         * Decodes a ListNetworkRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.ListNetworkRequest;

        /**
         * Verifies a ListNetworkRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListNetworkRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListNetworkRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.ListNetworkRequest;

        /**
         * Creates a plain object from a ListNetworkRequest message. Also converts values to other types if specified.
         * @param message ListNetworkRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.ListNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListNetworkRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListNetworkResponse. */
    interface IListNetworkResponse {

        /** ListNetworkResponse networks */
        networks?: model.INetwork[];
    }

    /** Represents a ListNetworkResponse. */
    class ListNetworkResponse {

        /**
         * Constructs a new ListNetworkResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IListNetworkResponse);

        /** ListNetworkResponse networks. */
        public networks: model.INetwork[];

        /**
         * Creates a new ListNetworkResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListNetworkResponse instance
         */
        public static create(properties?: serverpb.IListNetworkResponse): serverpb.ListNetworkResponse;

        /**
         * Encodes the specified ListNetworkResponse message. Does not implicitly {@link serverpb.ListNetworkResponse.verify|verify} messages.
         * @param message ListNetworkResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IListNetworkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListNetworkResponse message, length delimited. Does not implicitly {@link serverpb.ListNetworkResponse.verify|verify} messages.
         * @param message ListNetworkResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IListNetworkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListNetworkResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListNetworkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.ListNetworkResponse;

        /**
         * Decodes a ListNetworkResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListNetworkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.ListNetworkResponse;

        /**
         * Verifies a ListNetworkResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListNetworkResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListNetworkResponse
         */
        public static fromObject(object: { [k: string]: any }): serverpb.ListNetworkResponse;

        /**
         * Creates a plain object from a ListNetworkResponse message. Also converts values to other types if specified.
         * @param message ListNetworkResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.ListNetworkResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListNetworkResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DrawIPRequest. */
    interface IDrawIPRequest {

        /** DrawIPRequest ip */
        ip?: string;

        /** DrawIPRequest mask */
        mask?: number;

        /** DrawIPRequest poolTag */
        poolTag?: model.ITag;

        /** DrawIPRequest name */
        name?: string;

        /** DrawIPRequest activateImmediately */
        activateImmediately?: boolean;
    }

    /** Represents a DrawIPRequest. */
    class DrawIPRequest {

        /**
         * Constructs a new DrawIPRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IDrawIPRequest);

        /** DrawIPRequest ip. */
        public ip: string;

        /** DrawIPRequest mask. */
        public mask: number;

        /** DrawIPRequest poolTag. */
        public poolTag?: (model.ITag|null);

        /** DrawIPRequest name. */
        public name: string;

        /** DrawIPRequest activateImmediately. */
        public activateImmediately: boolean;

        /**
         * Creates a new DrawIPRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrawIPRequest instance
         */
        public static create(properties?: serverpb.IDrawIPRequest): serverpb.DrawIPRequest;

        /**
         * Encodes the specified DrawIPRequest message. Does not implicitly {@link serverpb.DrawIPRequest.verify|verify} messages.
         * @param message DrawIPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IDrawIPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DrawIPRequest message, length delimited. Does not implicitly {@link serverpb.DrawIPRequest.verify|verify} messages.
         * @param message DrawIPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IDrawIPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrawIPRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DrawIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.DrawIPRequest;

        /**
         * Decodes a DrawIPRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DrawIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.DrawIPRequest;

        /**
         * Verifies a DrawIPRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DrawIPRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DrawIPRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.DrawIPRequest;

        /**
         * Creates a plain object from a DrawIPRequest message. Also converts values to other types if specified.
         * @param message DrawIPRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.DrawIPRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DrawIPRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DrawIPResponse. */
    interface IDrawIPResponse {

        /** DrawIPResponse ip */
        ip?: string;

        /** DrawIPResponse message */
        message?: string;
    }

    /** Represents a DrawIPResponse. */
    class DrawIPResponse {

        /**
         * Constructs a new DrawIPResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IDrawIPResponse);

        /** DrawIPResponse ip. */
        public ip: string;

        /** DrawIPResponse message. */
        public message: string;

        /**
         * Creates a new DrawIPResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrawIPResponse instance
         */
        public static create(properties?: serverpb.IDrawIPResponse): serverpb.DrawIPResponse;

        /**
         * Encodes the specified DrawIPResponse message. Does not implicitly {@link serverpb.DrawIPResponse.verify|verify} messages.
         * @param message DrawIPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IDrawIPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DrawIPResponse message, length delimited. Does not implicitly {@link serverpb.DrawIPResponse.verify|verify} messages.
         * @param message DrawIPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IDrawIPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrawIPResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DrawIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.DrawIPResponse;

        /**
         * Decodes a DrawIPResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DrawIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.DrawIPResponse;

        /**
         * Verifies a DrawIPResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DrawIPResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DrawIPResponse
         */
        public static fromObject(object: { [k: string]: any }): serverpb.DrawIPResponse;

        /**
         * Creates a plain object from a DrawIPResponse message. Also converts values to other types if specified.
         * @param message DrawIPResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.DrawIPResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DrawIPResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DrawIPEstimatingNetworkRequest. */
    interface IDrawIPEstimatingNetworkRequest {

        /** DrawIPEstimatingNetworkRequest poolTag */
        poolTag?: model.ITag;

        /** DrawIPEstimatingNetworkRequest activateImmediately */
        activateImmediately?: boolean;
    }

    /** Represents a DrawIPEstimatingNetworkRequest. */
    class DrawIPEstimatingNetworkRequest {

        /**
         * Constructs a new DrawIPEstimatingNetworkRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IDrawIPEstimatingNetworkRequest);

        /** DrawIPEstimatingNetworkRequest poolTag. */
        public poolTag?: (model.ITag|null);

        /** DrawIPEstimatingNetworkRequest activateImmediately. */
        public activateImmediately: boolean;

        /**
         * Creates a new DrawIPEstimatingNetworkRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrawIPEstimatingNetworkRequest instance
         */
        public static create(properties?: serverpb.IDrawIPEstimatingNetworkRequest): serverpb.DrawIPEstimatingNetworkRequest;

        /**
         * Encodes the specified DrawIPEstimatingNetworkRequest message. Does not implicitly {@link serverpb.DrawIPEstimatingNetworkRequest.verify|verify} messages.
         * @param message DrawIPEstimatingNetworkRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IDrawIPEstimatingNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DrawIPEstimatingNetworkRequest message, length delimited. Does not implicitly {@link serverpb.DrawIPEstimatingNetworkRequest.verify|verify} messages.
         * @param message DrawIPEstimatingNetworkRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IDrawIPEstimatingNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrawIPEstimatingNetworkRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DrawIPEstimatingNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.DrawIPEstimatingNetworkRequest;

        /**
         * Decodes a DrawIPEstimatingNetworkRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DrawIPEstimatingNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.DrawIPEstimatingNetworkRequest;

        /**
         * Verifies a DrawIPEstimatingNetworkRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DrawIPEstimatingNetworkRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DrawIPEstimatingNetworkRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.DrawIPEstimatingNetworkRequest;

        /**
         * Creates a plain object from a DrawIPEstimatingNetworkRequest message. Also converts values to other types if specified.
         * @param message DrawIPEstimatingNetworkRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.DrawIPEstimatingNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DrawIPEstimatingNetworkRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetNetworkIncludingIPRequest. */
    interface IGetNetworkIncludingIPRequest {

        /** GetNetworkIncludingIPRequest ip */
        ip?: string;
    }

    /** Represents a GetNetworkIncludingIPRequest. */
    class GetNetworkIncludingIPRequest {

        /**
         * Constructs a new GetNetworkIncludingIPRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IGetNetworkIncludingIPRequest);

        /** GetNetworkIncludingIPRequest ip. */
        public ip: string;

        /**
         * Creates a new GetNetworkIncludingIPRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetNetworkIncludingIPRequest instance
         */
        public static create(properties?: serverpb.IGetNetworkIncludingIPRequest): serverpb.GetNetworkIncludingIPRequest;

        /**
         * Encodes the specified GetNetworkIncludingIPRequest message. Does not implicitly {@link serverpb.GetNetworkIncludingIPRequest.verify|verify} messages.
         * @param message GetNetworkIncludingIPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IGetNetworkIncludingIPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetNetworkIncludingIPRequest message, length delimited. Does not implicitly {@link serverpb.GetNetworkIncludingIPRequest.verify|verify} messages.
         * @param message GetNetworkIncludingIPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IGetNetworkIncludingIPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetNetworkIncludingIPRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetNetworkIncludingIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.GetNetworkIncludingIPRequest;

        /**
         * Decodes a GetNetworkIncludingIPRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetNetworkIncludingIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.GetNetworkIncludingIPRequest;

        /**
         * Verifies a GetNetworkIncludingIPRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetNetworkIncludingIPRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetNetworkIncludingIPRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.GetNetworkIncludingIPRequest;

        /**
         * Creates a plain object from a GetNetworkIncludingIPRequest message. Also converts values to other types if specified.
         * @param message GetNetworkIncludingIPRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.GetNetworkIncludingIPRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetNetworkIncludingIPRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateIPResponse. */
    interface ICreateIPResponse {
    }

    /** Represents a CreateIPResponse. */
    class CreateIPResponse {

        /**
         * Constructs a new CreateIPResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.ICreateIPResponse);

        /**
         * Creates a new CreateIPResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateIPResponse instance
         */
        public static create(properties?: serverpb.ICreateIPResponse): serverpb.CreateIPResponse;

        /**
         * Encodes the specified CreateIPResponse message. Does not implicitly {@link serverpb.CreateIPResponse.verify|verify} messages.
         * @param message CreateIPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.ICreateIPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateIPResponse message, length delimited. Does not implicitly {@link serverpb.CreateIPResponse.verify|verify} messages.
         * @param message CreateIPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.ICreateIPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateIPResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.CreateIPResponse;

        /**
         * Decodes a CreateIPResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.CreateIPResponse;

        /**
         * Verifies a CreateIPResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateIPResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateIPResponse
         */
        public static fromObject(object: { [k: string]: any }): serverpb.CreateIPResponse;

        /**
         * Creates a plain object from a CreateIPResponse message. Also converts values to other types if specified.
         * @param message CreateIPResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.CreateIPResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateIPResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivateIPRequest. */
    interface IActivateIPRequest {

        /** ActivateIPRequest ip */
        ip?: string;

        /** ActivateIPRequest tags */
        tags?: model.ITag[];
    }

    /** Represents an ActivateIPRequest. */
    class ActivateIPRequest {

        /**
         * Constructs a new ActivateIPRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IActivateIPRequest);

        /** ActivateIPRequest ip. */
        public ip: string;

        /** ActivateIPRequest tags. */
        public tags: model.ITag[];

        /**
         * Creates a new ActivateIPRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivateIPRequest instance
         */
        public static create(properties?: serverpb.IActivateIPRequest): serverpb.ActivateIPRequest;

        /**
         * Encodes the specified ActivateIPRequest message. Does not implicitly {@link serverpb.ActivateIPRequest.verify|verify} messages.
         * @param message ActivateIPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IActivateIPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActivateIPRequest message, length delimited. Does not implicitly {@link serverpb.ActivateIPRequest.verify|verify} messages.
         * @param message ActivateIPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IActivateIPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivateIPRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivateIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.ActivateIPRequest;

        /**
         * Decodes an ActivateIPRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivateIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.ActivateIPRequest;

        /**
         * Verifies an ActivateIPRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivateIPRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivateIPRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.ActivateIPRequest;

        /**
         * Creates a plain object from an ActivateIPRequest message. Also converts values to other types if specified.
         * @param message ActivateIPRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.ActivateIPRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivateIPRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeactivateIPRequest. */
    interface IDeactivateIPRequest {

        /** DeactivateIPRequest ip */
        ip?: string;
    }

    /** Represents a DeactivateIPRequest. */
    class DeactivateIPRequest {

        /**
         * Constructs a new DeactivateIPRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IDeactivateIPRequest);

        /** DeactivateIPRequest ip. */
        public ip: string;

        /**
         * Creates a new DeactivateIPRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeactivateIPRequest instance
         */
        public static create(properties?: serverpb.IDeactivateIPRequest): serverpb.DeactivateIPRequest;

        /**
         * Encodes the specified DeactivateIPRequest message. Does not implicitly {@link serverpb.DeactivateIPRequest.verify|verify} messages.
         * @param message DeactivateIPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IDeactivateIPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeactivateIPRequest message, length delimited. Does not implicitly {@link serverpb.DeactivateIPRequest.verify|verify} messages.
         * @param message DeactivateIPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IDeactivateIPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeactivateIPRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeactivateIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.DeactivateIPRequest;

        /**
         * Decodes a DeactivateIPRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeactivateIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.DeactivateIPRequest;

        /**
         * Verifies a DeactivateIPRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeactivateIPRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeactivateIPRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.DeactivateIPRequest;

        /**
         * Creates a plain object from a DeactivateIPRequest message. Also converts values to other types if specified.
         * @param message DeactivateIPRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.DeactivateIPRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeactivateIPRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeactivateIPResponse. */
    interface IDeactivateIPResponse {
    }

    /** Represents a DeactivateIPResponse. */
    class DeactivateIPResponse {

        /**
         * Constructs a new DeactivateIPResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IDeactivateIPResponse);

        /**
         * Creates a new DeactivateIPResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeactivateIPResponse instance
         */
        public static create(properties?: serverpb.IDeactivateIPResponse): serverpb.DeactivateIPResponse;

        /**
         * Encodes the specified DeactivateIPResponse message. Does not implicitly {@link serverpb.DeactivateIPResponse.verify|verify} messages.
         * @param message DeactivateIPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IDeactivateIPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeactivateIPResponse message, length delimited. Does not implicitly {@link serverpb.DeactivateIPResponse.verify|verify} messages.
         * @param message DeactivateIPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IDeactivateIPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeactivateIPResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeactivateIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.DeactivateIPResponse;

        /**
         * Decodes a DeactivateIPResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeactivateIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.DeactivateIPResponse;

        /**
         * Verifies a DeactivateIPResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeactivateIPResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeactivateIPResponse
         */
        public static fromObject(object: { [k: string]: any }): serverpb.DeactivateIPResponse;

        /**
         * Creates a plain object from a DeactivateIPResponse message. Also converts values to other types if specified.
         * @param message DeactivateIPResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.DeactivateIPResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeactivateIPResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateIPResponse. */
    interface IUpdateIPResponse {
    }

    /** Represents an UpdateIPResponse. */
    class UpdateIPResponse {

        /**
         * Constructs a new UpdateIPResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IUpdateIPResponse);

        /**
         * Creates a new UpdateIPResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateIPResponse instance
         */
        public static create(properties?: serverpb.IUpdateIPResponse): serverpb.UpdateIPResponse;

        /**
         * Encodes the specified UpdateIPResponse message. Does not implicitly {@link serverpb.UpdateIPResponse.verify|verify} messages.
         * @param message UpdateIPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IUpdateIPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateIPResponse message, length delimited. Does not implicitly {@link serverpb.UpdateIPResponse.verify|verify} messages.
         * @param message UpdateIPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IUpdateIPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateIPResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.UpdateIPResponse;

        /**
         * Decodes an UpdateIPResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.UpdateIPResponse;

        /**
         * Verifies an UpdateIPResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateIPResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateIPResponse
         */
        public static fromObject(object: { [k: string]: any }): serverpb.UpdateIPResponse;

        /**
         * Creates a plain object from an UpdateIPResponse message. Also converts values to other types if specified.
         * @param message UpdateIPResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.UpdateIPResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateIPResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetNetworkRequest. */
    interface IGetNetworkRequest {

        /** GetNetworkRequest ip */
        ip?: string;

        /** GetNetworkRequest mask */
        mask?: number;

        /** GetNetworkRequest name */
        name?: string;
    }

    /** Represents a GetNetworkRequest. */
    class GetNetworkRequest {

        /**
         * Constructs a new GetNetworkRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IGetNetworkRequest);

        /** GetNetworkRequest ip. */
        public ip: string;

        /** GetNetworkRequest mask. */
        public mask: number;

        /** GetNetworkRequest name. */
        public name: string;

        /**
         * Creates a new GetNetworkRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetNetworkRequest instance
         */
        public static create(properties?: serverpb.IGetNetworkRequest): serverpb.GetNetworkRequest;

        /**
         * Encodes the specified GetNetworkRequest message. Does not implicitly {@link serverpb.GetNetworkRequest.verify|verify} messages.
         * @param message GetNetworkRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IGetNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetNetworkRequest message, length delimited. Does not implicitly {@link serverpb.GetNetworkRequest.verify|verify} messages.
         * @param message GetNetworkRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IGetNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetNetworkRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.GetNetworkRequest;

        /**
         * Decodes a GetNetworkRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.GetNetworkRequest;

        /**
         * Verifies a GetNetworkRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetNetworkRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetNetworkRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.GetNetworkRequest;

        /**
         * Creates a plain object from a GetNetworkRequest message. Also converts values to other types if specified.
         * @param message GetNetworkRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.GetNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetNetworkRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEstimatedNetworkRequest. */
    interface IGetEstimatedNetworkRequest {
    }

    /** Represents a GetEstimatedNetworkRequest. */
    class GetEstimatedNetworkRequest {

        /**
         * Constructs a new GetEstimatedNetworkRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IGetEstimatedNetworkRequest);

        /**
         * Creates a new GetEstimatedNetworkRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEstimatedNetworkRequest instance
         */
        public static create(properties?: serverpb.IGetEstimatedNetworkRequest): serverpb.GetEstimatedNetworkRequest;

        /**
         * Encodes the specified GetEstimatedNetworkRequest message. Does not implicitly {@link serverpb.GetEstimatedNetworkRequest.verify|verify} messages.
         * @param message GetEstimatedNetworkRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IGetEstimatedNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEstimatedNetworkRequest message, length delimited. Does not implicitly {@link serverpb.GetEstimatedNetworkRequest.verify|verify} messages.
         * @param message GetEstimatedNetworkRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IGetEstimatedNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEstimatedNetworkRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEstimatedNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.GetEstimatedNetworkRequest;

        /**
         * Decodes a GetEstimatedNetworkRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEstimatedNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.GetEstimatedNetworkRequest;

        /**
         * Verifies a GetEstimatedNetworkRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEstimatedNetworkRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEstimatedNetworkRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.GetEstimatedNetworkRequest;

        /**
         * Creates a plain object from a GetEstimatedNetworkRequest message. Also converts values to other types if specified.
         * @param message GetEstimatedNetworkRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.GetEstimatedNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEstimatedNetworkRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetNetworkResponse. */
    interface IGetNetworkResponse {

        /** GetNetworkResponse network */
        network?: string;

        /** GetNetworkResponse defaultGateways */
        defaultGateways?: string[];

        /** GetNetworkResponse broadcast */
        broadcast?: string;

        /** GetNetworkResponse netmask */
        netmask?: string;

        /** GetNetworkResponse tags */
        tags?: model.ITag[];
    }

    /** Represents a GetNetworkResponse. */
    class GetNetworkResponse {

        /**
         * Constructs a new GetNetworkResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IGetNetworkResponse);

        /** GetNetworkResponse network. */
        public network: string;

        /** GetNetworkResponse defaultGateways. */
        public defaultGateways: string[];

        /** GetNetworkResponse broadcast. */
        public broadcast: string;

        /** GetNetworkResponse netmask. */
        public netmask: string;

        /** GetNetworkResponse tags. */
        public tags: model.ITag[];

        /**
         * Creates a new GetNetworkResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetNetworkResponse instance
         */
        public static create(properties?: serverpb.IGetNetworkResponse): serverpb.GetNetworkResponse;

        /**
         * Encodes the specified GetNetworkResponse message. Does not implicitly {@link serverpb.GetNetworkResponse.verify|verify} messages.
         * @param message GetNetworkResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IGetNetworkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetNetworkResponse message, length delimited. Does not implicitly {@link serverpb.GetNetworkResponse.verify|verify} messages.
         * @param message GetNetworkResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IGetNetworkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetNetworkResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetNetworkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.GetNetworkResponse;

        /**
         * Decodes a GetNetworkResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetNetworkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.GetNetworkResponse;

        /**
         * Verifies a GetNetworkResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetNetworkResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetNetworkResponse
         */
        public static fromObject(object: { [k: string]: any }): serverpb.GetNetworkResponse;

        /**
         * Creates a plain object from a GetNetworkResponse message. Also converts values to other types if specified.
         * @param message GetNetworkResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.GetNetworkResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetNetworkResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateNetworkRequest. */
    interface ICreateNetworkRequest {

        /** CreateNetworkRequest ip */
        ip?: string;

        /** CreateNetworkRequest mask */
        mask?: number;

        /** CreateNetworkRequest defaultGateways */
        defaultGateways?: string[];

        /** CreateNetworkRequest tags */
        tags?: model.ITag[];

        /** CreateNetworkRequest status */
        status?: model.Network.Status;
    }

    /** Represents a CreateNetworkRequest. */
    class CreateNetworkRequest {

        /**
         * Constructs a new CreateNetworkRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.ICreateNetworkRequest);

        /** CreateNetworkRequest ip. */
        public ip: string;

        /** CreateNetworkRequest mask. */
        public mask: number;

        /** CreateNetworkRequest defaultGateways. */
        public defaultGateways: string[];

        /** CreateNetworkRequest tags. */
        public tags: model.ITag[];

        /** CreateNetworkRequest status. */
        public status: model.Network.Status;

        /**
         * Creates a new CreateNetworkRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateNetworkRequest instance
         */
        public static create(properties?: serverpb.ICreateNetworkRequest): serverpb.CreateNetworkRequest;

        /**
         * Encodes the specified CreateNetworkRequest message. Does not implicitly {@link serverpb.CreateNetworkRequest.verify|verify} messages.
         * @param message CreateNetworkRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.ICreateNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateNetworkRequest message, length delimited. Does not implicitly {@link serverpb.CreateNetworkRequest.verify|verify} messages.
         * @param message CreateNetworkRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.ICreateNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateNetworkRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.CreateNetworkRequest;

        /**
         * Decodes a CreateNetworkRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateNetworkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.CreateNetworkRequest;

        /**
         * Verifies a CreateNetworkRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateNetworkRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateNetworkRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.CreateNetworkRequest;

        /**
         * Creates a plain object from a CreateNetworkRequest message. Also converts values to other types if specified.
         * @param message CreateNetworkRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.CreateNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateNetworkRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateNetworkResponse. */
    interface ICreateNetworkResponse {
    }

    /** Represents a CreateNetworkResponse. */
    class CreateNetworkResponse {

        /**
         * Constructs a new CreateNetworkResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.ICreateNetworkResponse);

        /**
         * Creates a new CreateNetworkResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateNetworkResponse instance
         */
        public static create(properties?: serverpb.ICreateNetworkResponse): serverpb.CreateNetworkResponse;

        /**
         * Encodes the specified CreateNetworkResponse message. Does not implicitly {@link serverpb.CreateNetworkResponse.verify|verify} messages.
         * @param message CreateNetworkResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.ICreateNetworkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateNetworkResponse message, length delimited. Does not implicitly {@link serverpb.CreateNetworkResponse.verify|verify} messages.
         * @param message CreateNetworkResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.ICreateNetworkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateNetworkResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateNetworkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.CreateNetworkResponse;

        /**
         * Decodes a CreateNetworkResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateNetworkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.CreateNetworkResponse;

        /**
         * Verifies a CreateNetworkResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateNetworkResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateNetworkResponse
         */
        public static fromObject(object: { [k: string]: any }): serverpb.CreateNetworkResponse;

        /**
         * Creates a plain object from a CreateNetworkResponse message. Also converts values to other types if specified.
         * @param message CreateNetworkResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.CreateNetworkResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateNetworkResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePoolRequest. */
    interface ICreatePoolRequest {

        /** CreatePoolRequest ip */
        ip?: string;

        /** CreatePoolRequest mask */
        mask?: number;

        /** CreatePoolRequest pool */
        pool?: model.IPool;
    }

    /** Represents a CreatePoolRequest. */
    class CreatePoolRequest {

        /**
         * Constructs a new CreatePoolRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.ICreatePoolRequest);

        /** CreatePoolRequest ip. */
        public ip: string;

        /** CreatePoolRequest mask. */
        public mask: number;

        /** CreatePoolRequest pool. */
        public pool?: (model.IPool|null);

        /**
         * Creates a new CreatePoolRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePoolRequest instance
         */
        public static create(properties?: serverpb.ICreatePoolRequest): serverpb.CreatePoolRequest;

        /**
         * Encodes the specified CreatePoolRequest message. Does not implicitly {@link serverpb.CreatePoolRequest.verify|verify} messages.
         * @param message CreatePoolRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.ICreatePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePoolRequest message, length delimited. Does not implicitly {@link serverpb.CreatePoolRequest.verify|verify} messages.
         * @param message CreatePoolRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.ICreatePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePoolRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePoolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.CreatePoolRequest;

        /**
         * Decodes a CreatePoolRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePoolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.CreatePoolRequest;

        /**
         * Verifies a CreatePoolRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePoolRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePoolRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.CreatePoolRequest;

        /**
         * Creates a plain object from a CreatePoolRequest message. Also converts values to other types if specified.
         * @param message CreatePoolRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.CreatePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePoolRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePoolResponse. */
    interface ICreatePoolResponse {
    }

    /** Represents a CreatePoolResponse. */
    class CreatePoolResponse {

        /**
         * Constructs a new CreatePoolResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.ICreatePoolResponse);

        /**
         * Creates a new CreatePoolResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePoolResponse instance
         */
        public static create(properties?: serverpb.ICreatePoolResponse): serverpb.CreatePoolResponse;

        /**
         * Encodes the specified CreatePoolResponse message. Does not implicitly {@link serverpb.CreatePoolResponse.verify|verify} messages.
         * @param message CreatePoolResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.ICreatePoolResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePoolResponse message, length delimited. Does not implicitly {@link serverpb.CreatePoolResponse.verify|verify} messages.
         * @param message CreatePoolResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.ICreatePoolResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePoolResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePoolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.CreatePoolResponse;

        /**
         * Decodes a CreatePoolResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePoolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.CreatePoolResponse;

        /**
         * Verifies a CreatePoolResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePoolResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePoolResponse
         */
        public static fromObject(object: { [k: string]: any }): serverpb.CreatePoolResponse;

        /**
         * Creates a plain object from a CreatePoolResponse message. Also converts values to other types if specified.
         * @param message CreatePoolResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.CreatePoolResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePoolResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListIPRequest. */
    interface IListIPRequest {
    }

    /** Represents a ListIPRequest. */
    class ListIPRequest {

        /**
         * Constructs a new ListIPRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IListIPRequest);

        /**
         * Creates a new ListIPRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListIPRequest instance
         */
        public static create(properties?: serverpb.IListIPRequest): serverpb.ListIPRequest;

        /**
         * Encodes the specified ListIPRequest message. Does not implicitly {@link serverpb.ListIPRequest.verify|verify} messages.
         * @param message ListIPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IListIPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListIPRequest message, length delimited. Does not implicitly {@link serverpb.ListIPRequest.verify|verify} messages.
         * @param message ListIPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IListIPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListIPRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.ListIPRequest;

        /**
         * Decodes a ListIPRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.ListIPRequest;

        /**
         * Verifies a ListIPRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListIPRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListIPRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.ListIPRequest;

        /**
         * Creates a plain object from a ListIPRequest message. Also converts values to other types if specified.
         * @param message ListIPRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.ListIPRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListIPRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListIPResponse. */
    interface IListIPResponse {

        /** ListIPResponse ips */
        ips?: model.IIPAddr[];
    }

    /** Represents a ListIPResponse. */
    class ListIPResponse {

        /**
         * Constructs a new ListIPResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IListIPResponse);

        /** ListIPResponse ips. */
        public ips: model.IIPAddr[];

        /**
         * Creates a new ListIPResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListIPResponse instance
         */
        public static create(properties?: serverpb.IListIPResponse): serverpb.ListIPResponse;

        /**
         * Encodes the specified ListIPResponse message. Does not implicitly {@link serverpb.ListIPResponse.verify|verify} messages.
         * @param message ListIPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IListIPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListIPResponse message, length delimited. Does not implicitly {@link serverpb.ListIPResponse.verify|verify} messages.
         * @param message ListIPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IListIPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListIPResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.ListIPResponse;

        /**
         * Decodes a ListIPResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.ListIPResponse;

        /**
         * Verifies a ListIPResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListIPResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListIPResponse
         */
        public static fromObject(object: { [k: string]: any }): serverpb.ListIPResponse;

        /**
         * Creates a plain object from a ListIPResponse message. Also converts values to other types if specified.
         * @param message ListIPResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.ListIPResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListIPResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListTemporaryReservedIPRequest. */
    interface IListTemporaryReservedIPRequest {
    }

    /** Represents a ListTemporaryReservedIPRequest. */
    class ListTemporaryReservedIPRequest {

        /**
         * Constructs a new ListTemporaryReservedIPRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IListTemporaryReservedIPRequest);

        /**
         * Creates a new ListTemporaryReservedIPRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListTemporaryReservedIPRequest instance
         */
        public static create(properties?: serverpb.IListTemporaryReservedIPRequest): serverpb.ListTemporaryReservedIPRequest;

        /**
         * Encodes the specified ListTemporaryReservedIPRequest message. Does not implicitly {@link serverpb.ListTemporaryReservedIPRequest.verify|verify} messages.
         * @param message ListTemporaryReservedIPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IListTemporaryReservedIPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListTemporaryReservedIPRequest message, length delimited. Does not implicitly {@link serverpb.ListTemporaryReservedIPRequest.verify|verify} messages.
         * @param message ListTemporaryReservedIPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IListTemporaryReservedIPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListTemporaryReservedIPRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListTemporaryReservedIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.ListTemporaryReservedIPRequest;

        /**
         * Decodes a ListTemporaryReservedIPRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListTemporaryReservedIPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.ListTemporaryReservedIPRequest;

        /**
         * Verifies a ListTemporaryReservedIPRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListTemporaryReservedIPRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListTemporaryReservedIPRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.ListTemporaryReservedIPRequest;

        /**
         * Creates a plain object from a ListTemporaryReservedIPRequest message. Also converts values to other types if specified.
         * @param message ListTemporaryReservedIPRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.ListTemporaryReservedIPRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListTemporaryReservedIPRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListTemporaryReservedIPResponse. */
    interface IListTemporaryReservedIPResponse {

        /** ListTemporaryReservedIPResponse ips */
        ips?: model.IIPAddr[];
    }

    /** Represents a ListTemporaryReservedIPResponse. */
    class ListTemporaryReservedIPResponse {

        /**
         * Constructs a new ListTemporaryReservedIPResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IListTemporaryReservedIPResponse);

        /** ListTemporaryReservedIPResponse ips. */
        public ips: model.IIPAddr[];

        /**
         * Creates a new ListTemporaryReservedIPResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListTemporaryReservedIPResponse instance
         */
        public static create(properties?: serverpb.IListTemporaryReservedIPResponse): serverpb.ListTemporaryReservedIPResponse;

        /**
         * Encodes the specified ListTemporaryReservedIPResponse message. Does not implicitly {@link serverpb.ListTemporaryReservedIPResponse.verify|verify} messages.
         * @param message ListTemporaryReservedIPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IListTemporaryReservedIPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListTemporaryReservedIPResponse message, length delimited. Does not implicitly {@link serverpb.ListTemporaryReservedIPResponse.verify|verify} messages.
         * @param message ListTemporaryReservedIPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IListTemporaryReservedIPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListTemporaryReservedIPResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListTemporaryReservedIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.ListTemporaryReservedIPResponse;

        /**
         * Decodes a ListTemporaryReservedIPResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListTemporaryReservedIPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.ListTemporaryReservedIPResponse;

        /**
         * Verifies a ListTemporaryReservedIPResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListTemporaryReservedIPResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListTemporaryReservedIPResponse
         */
        public static fromObject(object: { [k: string]: any }): serverpb.ListTemporaryReservedIPResponse;

        /**
         * Creates a plain object from a ListTemporaryReservedIPResponse message. Also converts values to other types if specified.
         * @param message ListTemporaryReservedIPResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.ListTemporaryReservedIPResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListTemporaryReservedIPResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListPoolRequest. */
    interface IListPoolRequest {
    }

    /** Represents a ListPoolRequest. */
    class ListPoolRequest {

        /**
         * Constructs a new ListPoolRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IListPoolRequest);

        /**
         * Creates a new ListPoolRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListPoolRequest instance
         */
        public static create(properties?: serverpb.IListPoolRequest): serverpb.ListPoolRequest;

        /**
         * Encodes the specified ListPoolRequest message. Does not implicitly {@link serverpb.ListPoolRequest.verify|verify} messages.
         * @param message ListPoolRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IListPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListPoolRequest message, length delimited. Does not implicitly {@link serverpb.ListPoolRequest.verify|verify} messages.
         * @param message ListPoolRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IListPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListPoolRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListPoolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.ListPoolRequest;

        /**
         * Decodes a ListPoolRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListPoolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.ListPoolRequest;

        /**
         * Verifies a ListPoolRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListPoolRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListPoolRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.ListPoolRequest;

        /**
         * Creates a plain object from a ListPoolRequest message. Also converts values to other types if specified.
         * @param message ListPoolRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.ListPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListPoolRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListPoolResponse. */
    interface IListPoolResponse {

        /** ListPoolResponse pools */
        pools?: model.IPool[];
    }

    /** Represents a ListPoolResponse. */
    class ListPoolResponse {

        /**
         * Constructs a new ListPoolResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IListPoolResponse);

        /** ListPoolResponse pools. */
        public pools: model.IPool[];

        /**
         * Creates a new ListPoolResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListPoolResponse instance
         */
        public static create(properties?: serverpb.IListPoolResponse): serverpb.ListPoolResponse;

        /**
         * Encodes the specified ListPoolResponse message. Does not implicitly {@link serverpb.ListPoolResponse.verify|verify} messages.
         * @param message ListPoolResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IListPoolResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListPoolResponse message, length delimited. Does not implicitly {@link serverpb.ListPoolResponse.verify|verify} messages.
         * @param message ListPoolResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IListPoolResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListPoolResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListPoolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.ListPoolResponse;

        /**
         * Decodes a ListPoolResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListPoolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.ListPoolResponse;

        /**
         * Verifies a ListPoolResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListPoolResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListPoolResponse
         */
        public static fromObject(object: { [k: string]: any }): serverpb.ListPoolResponse;

        /**
         * Creates a plain object from a ListPoolResponse message. Also converts values to other types if specified.
         * @param message ListPoolResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.ListPoolResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListPoolResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetIPInPoolRequest. */
    interface IGetIPInPoolRequest {

        /** GetIPInPoolRequest rangeStart */
        rangeStart?: string;

        /** GetIPInPoolRequest rangeEnd */
        rangeEnd?: string;
    }

    /** Represents a GetIPInPoolRequest. */
    class GetIPInPoolRequest {

        /**
         * Constructs a new GetIPInPoolRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IGetIPInPoolRequest);

        /** GetIPInPoolRequest rangeStart. */
        public rangeStart: string;

        /** GetIPInPoolRequest rangeEnd. */
        public rangeEnd: string;

        /**
         * Creates a new GetIPInPoolRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetIPInPoolRequest instance
         */
        public static create(properties?: serverpb.IGetIPInPoolRequest): serverpb.GetIPInPoolRequest;

        /**
         * Encodes the specified GetIPInPoolRequest message. Does not implicitly {@link serverpb.GetIPInPoolRequest.verify|verify} messages.
         * @param message GetIPInPoolRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IGetIPInPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetIPInPoolRequest message, length delimited. Does not implicitly {@link serverpb.GetIPInPoolRequest.verify|verify} messages.
         * @param message GetIPInPoolRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IGetIPInPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetIPInPoolRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetIPInPoolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.GetIPInPoolRequest;

        /**
         * Decodes a GetIPInPoolRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetIPInPoolRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.GetIPInPoolRequest;

        /**
         * Verifies a GetIPInPoolRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetIPInPoolRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetIPInPoolRequest
         */
        public static fromObject(object: { [k: string]: any }): serverpb.GetIPInPoolRequest;

        /**
         * Creates a plain object from a GetIPInPoolRequest message. Also converts values to other types if specified.
         * @param message GetIPInPoolRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.GetIPInPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetIPInPoolRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetIPInPoolResponse. */
    interface IGetIPInPoolResponse {

        /** GetIPInPoolResponse pool */
        pool?: model.IPool;

        /** GetIPInPoolResponse ips */
        ips?: model.IIPAddr[];
    }

    /** Represents a GetIPInPoolResponse. */
    class GetIPInPoolResponse {

        /**
         * Constructs a new GetIPInPoolResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverpb.IGetIPInPoolResponse);

        /** GetIPInPoolResponse pool. */
        public pool?: (model.IPool|null);

        /** GetIPInPoolResponse ips. */
        public ips: model.IIPAddr[];

        /**
         * Creates a new GetIPInPoolResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetIPInPoolResponse instance
         */
        public static create(properties?: serverpb.IGetIPInPoolResponse): serverpb.GetIPInPoolResponse;

        /**
         * Encodes the specified GetIPInPoolResponse message. Does not implicitly {@link serverpb.GetIPInPoolResponse.verify|verify} messages.
         * @param message GetIPInPoolResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverpb.IGetIPInPoolResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetIPInPoolResponse message, length delimited. Does not implicitly {@link serverpb.GetIPInPoolResponse.verify|verify} messages.
         * @param message GetIPInPoolResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverpb.IGetIPInPoolResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetIPInPoolResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetIPInPoolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverpb.GetIPInPoolResponse;

        /**
         * Decodes a GetIPInPoolResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetIPInPoolResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverpb.GetIPInPoolResponse;

        /**
         * Verifies a GetIPInPoolResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetIPInPoolResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetIPInPoolResponse
         */
        public static fromObject(object: { [k: string]: any }): serverpb.GetIPInPoolResponse;

        /**
         * Creates a plain object from a GetIPInPoolResponse message. Also converts values to other types if specified.
         * @param message GetIPInPoolResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverpb.GetIPInPoolResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetIPInPoolResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a NetworkServiceV0 */
    class NetworkServiceV0 extends $protobuf.rpc.Service {

        /**
         * Constructs a new NetworkServiceV0 service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new NetworkServiceV0 service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): NetworkServiceV0;

        /**
         * Calls ListNetwork.
         * @param request ListNetworkRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListNetworkResponse
         */
        public listNetwork(request: serverpb.IListNetworkRequest, callback: serverpb.NetworkServiceV0.ListNetworkCallback): void;

        /**
         * Calls ListNetwork.
         * @param request ListNetworkRequest message or plain object
         * @returns Promise
         */
        public listNetwork(request: serverpb.IListNetworkRequest): Promise<serverpb.ListNetworkResponse>;

        /**
         * Calls GetEstimatedNetwork.
         * @param request GetEstimatedNetworkRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetNetworkResponse
         */
        public getEstimatedNetwork(request: serverpb.IGetEstimatedNetworkRequest, callback: serverpb.NetworkServiceV0.GetEstimatedNetworkCallback): void;

        /**
         * Calls GetEstimatedNetwork.
         * @param request GetEstimatedNetworkRequest message or plain object
         * @returns Promise
         */
        public getEstimatedNetwork(request: serverpb.IGetEstimatedNetworkRequest): Promise<serverpb.GetNetworkResponse>;

        /**
         * Calls DrawIP.
         * @param request DrawIPRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DrawIPResponse
         */
        public drawIP(request: serverpb.IDrawIPRequest, callback: serverpb.NetworkServiceV0.DrawIPCallback): void;

        /**
         * Calls DrawIP.
         * @param request DrawIPRequest message or plain object
         * @returns Promise
         */
        public drawIP(request: serverpb.IDrawIPRequest): Promise<serverpb.DrawIPResponse>;

        /**
         * Calls DrawIPEstimatingNetwork.
         * @param request DrawIPEstimatingNetworkRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DrawIPResponse
         */
        public drawIPEstimatingNetwork(request: serverpb.IDrawIPEstimatingNetworkRequest, callback: serverpb.NetworkServiceV0.DrawIPEstimatingNetworkCallback): void;

        /**
         * Calls DrawIPEstimatingNetwork.
         * @param request DrawIPEstimatingNetworkRequest message or plain object
         * @returns Promise
         */
        public drawIPEstimatingNetwork(request: serverpb.IDrawIPEstimatingNetworkRequest): Promise<serverpb.DrawIPResponse>;

        /**
         * Calls GetNetwork.
         * @param request GetNetworkRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetNetworkResponse
         */
        public getNetwork(request: serverpb.IGetNetworkRequest, callback: serverpb.NetworkServiceV0.GetNetworkCallback): void;

        /**
         * Calls GetNetwork.
         * @param request GetNetworkRequest message or plain object
         * @returns Promise
         */
        public getNetwork(request: serverpb.IGetNetworkRequest): Promise<serverpb.GetNetworkResponse>;

        /**
         * Calls CreateNetwork.
         * @param request CreateNetworkRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateNetworkResponse
         */
        public createNetwork(request: serverpb.ICreateNetworkRequest, callback: serverpb.NetworkServiceV0.CreateNetworkCallback): void;

        /**
         * Calls CreateNetwork.
         * @param request CreateNetworkRequest message or plain object
         * @returns Promise
         */
        public createNetwork(request: serverpb.ICreateNetworkRequest): Promise<serverpb.CreateNetworkResponse>;

        /**
         * Calls CreatePool.
         * @param request CreatePoolRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreatePoolResponse
         */
        public createPool(request: serverpb.ICreatePoolRequest, callback: serverpb.NetworkServiceV0.CreatePoolCallback): void;

        /**
         * Calls CreatePool.
         * @param request CreatePoolRequest message or plain object
         * @returns Promise
         */
        public createPool(request: serverpb.ICreatePoolRequest): Promise<serverpb.CreatePoolResponse>;
    }

    namespace NetworkServiceV0 {

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#listNetwork}.
         * @param error Error, if any
         * @param [response] ListNetworkResponse
         */
        type ListNetworkCallback = (error: (Error|null), response?: serverpb.ListNetworkResponse) => void;

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#getEstimatedNetwork}.
         * @param error Error, if any
         * @param [response] GetNetworkResponse
         */
        type GetEstimatedNetworkCallback = (error: (Error|null), response?: serverpb.GetNetworkResponse) => void;

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#drawIP}.
         * @param error Error, if any
         * @param [response] DrawIPResponse
         */
        type DrawIPCallback = (error: (Error|null), response?: serverpb.DrawIPResponse) => void;

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#drawIPEstimatingNetwork}.
         * @param error Error, if any
         * @param [response] DrawIPResponse
         */
        type DrawIPEstimatingNetworkCallback = (error: (Error|null), response?: serverpb.DrawIPResponse) => void;

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#getNetwork}.
         * @param error Error, if any
         * @param [response] GetNetworkResponse
         */
        type GetNetworkCallback = (error: (Error|null), response?: serverpb.GetNetworkResponse) => void;

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#createNetwork}.
         * @param error Error, if any
         * @param [response] CreateNetworkResponse
         */
        type CreateNetworkCallback = (error: (Error|null), response?: serverpb.CreateNetworkResponse) => void;

        /**
         * Callback as used by {@link serverpb.NetworkServiceV0#createPool}.
         * @param error Error, if any
         * @param [response] CreatePoolResponse
         */
        type CreatePoolCallback = (error: (Error|null), response?: serverpb.CreatePoolResponse) => void;
    }

    /** Represents a IPServiceV0 */
    class IPServiceV0 extends $protobuf.rpc.Service {

        /**
         * Constructs a new IPServiceV0 service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new IPServiceV0 service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IPServiceV0;

        /**
         * Calls GetNetworkIncludingIP.
         * @param request GetNetworkIncludingIPRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetNetworkResponse
         */
        public getNetworkIncludingIP(request: serverpb.IGetNetworkIncludingIPRequest, callback: serverpb.IPServiceV0.GetNetworkIncludingIPCallback): void;

        /**
         * Calls GetNetworkIncludingIP.
         * @param request GetNetworkIncludingIPRequest message or plain object
         * @returns Promise
         */
        public getNetworkIncludingIP(request: serverpb.IGetNetworkIncludingIPRequest): Promise<serverpb.GetNetworkResponse>;

        /**
         * Calls CreateIP.
         * @param request IPAddr message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateIPResponse
         */
        public createIP(request: model.IIPAddr, callback: serverpb.IPServiceV0.CreateIPCallback): void;

        /**
         * Calls CreateIP.
         * @param request IPAddr message or plain object
         * @returns Promise
         */
        public createIP(request: model.IIPAddr): Promise<serverpb.CreateIPResponse>;

        /**
         * Calls ActivateIP.
         * @param request ActivateIPRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateIPResponse
         */
        public activateIP(request: serverpb.IActivateIPRequest, callback: serverpb.IPServiceV0.ActivateIPCallback): void;

        /**
         * Calls ActivateIP.
         * @param request ActivateIPRequest message or plain object
         * @returns Promise
         */
        public activateIP(request: serverpb.IActivateIPRequest): Promise<serverpb.CreateIPResponse>;

        /**
         * Calls DeactivateIP.
         * @param request DeactivateIPRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeactivateIPResponse
         */
        public deactivateIP(request: serverpb.IDeactivateIPRequest, callback: serverpb.IPServiceV0.DeactivateIPCallback): void;

        /**
         * Calls DeactivateIP.
         * @param request DeactivateIPRequest message or plain object
         * @returns Promise
         */
        public deactivateIP(request: serverpb.IDeactivateIPRequest): Promise<serverpb.DeactivateIPResponse>;

        /**
         * Calls UpdateIP.
         * @param request IPAddr message or plain object
         * @param callback Node-style callback called with the error, if any, and UpdateIPResponse
         */
        public updateIP(request: model.IIPAddr, callback: serverpb.IPServiceV0.UpdateIPCallback): void;

        /**
         * Calls UpdateIP.
         * @param request IPAddr message or plain object
         * @returns Promise
         */
        public updateIP(request: model.IIPAddr): Promise<serverpb.UpdateIPResponse>;

        /**
         * Calls ListIP.
         * @param request ListIPRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListIPResponse
         */
        public listIP(request: serverpb.IListIPRequest, callback: serverpb.IPServiceV0.ListIPCallback): void;

        /**
         * Calls ListIP.
         * @param request ListIPRequest message or plain object
         * @returns Promise
         */
        public listIP(request: serverpb.IListIPRequest): Promise<serverpb.ListIPResponse>;

        /**
         * Calls ListTemporaryReservedIP.
         * @param request ListTemporaryReservedIPRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListTemporaryReservedIPResponse
         */
        public listTemporaryReservedIP(request: serverpb.IListTemporaryReservedIPRequest, callback: serverpb.IPServiceV0.ListTemporaryReservedIPCallback): void;

        /**
         * Calls ListTemporaryReservedIP.
         * @param request ListTemporaryReservedIPRequest message or plain object
         * @returns Promise
         */
        public listTemporaryReservedIP(request: serverpb.IListTemporaryReservedIPRequest): Promise<serverpb.ListTemporaryReservedIPResponse>;
    }

    namespace IPServiceV0 {

        /**
         * Callback as used by {@link serverpb.IPServiceV0#getNetworkIncludingIP}.
         * @param error Error, if any
         * @param [response] GetNetworkResponse
         */
        type GetNetworkIncludingIPCallback = (error: (Error|null), response?: serverpb.GetNetworkResponse) => void;

        /**
         * Callback as used by {@link serverpb.IPServiceV0#createIP}.
         * @param error Error, if any
         * @param [response] CreateIPResponse
         */
        type CreateIPCallback = (error: (Error|null), response?: serverpb.CreateIPResponse) => void;

        /**
         * Callback as used by {@link serverpb.IPServiceV0#activateIP}.
         * @param error Error, if any
         * @param [response] CreateIPResponse
         */
        type ActivateIPCallback = (error: (Error|null), response?: serverpb.CreateIPResponse) => void;

        /**
         * Callback as used by {@link serverpb.IPServiceV0#deactivateIP}.
         * @param error Error, if any
         * @param [response] DeactivateIPResponse
         */
        type DeactivateIPCallback = (error: (Error|null), response?: serverpb.DeactivateIPResponse) => void;

        /**
         * Callback as used by {@link serverpb.IPServiceV0#updateIP}.
         * @param error Error, if any
         * @param [response] UpdateIPResponse
         */
        type UpdateIPCallback = (error: (Error|null), response?: serverpb.UpdateIPResponse) => void;

        /**
         * Callback as used by {@link serverpb.IPServiceV0#listIP}.
         * @param error Error, if any
         * @param [response] ListIPResponse
         */
        type ListIPCallback = (error: (Error|null), response?: serverpb.ListIPResponse) => void;

        /**
         * Callback as used by {@link serverpb.IPServiceV0#listTemporaryReservedIP}.
         * @param error Error, if any
         * @param [response] ListTemporaryReservedIPResponse
         */
        type ListTemporaryReservedIPCallback = (error: (Error|null), response?: serverpb.ListTemporaryReservedIPResponse) => void;
    }

    /** Represents a PoolServiceV0 */
    class PoolServiceV0 extends $protobuf.rpc.Service {

        /**
         * Constructs a new PoolServiceV0 service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new PoolServiceV0 service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PoolServiceV0;

        /**
         * Calls ListPool.
         * @param request ListPoolRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListPoolResponse
         */
        public listPool(request: serverpb.IListPoolRequest, callback: serverpb.PoolServiceV0.ListPoolCallback): void;

        /**
         * Calls ListPool.
         * @param request ListPoolRequest message or plain object
         * @returns Promise
         */
        public listPool(request: serverpb.IListPoolRequest): Promise<serverpb.ListPoolResponse>;

        /**
         * Calls GetIPInPool.
         * @param request GetIPInPoolRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetIPInPoolResponse
         */
        public getIPInPool(request: serverpb.IGetIPInPoolRequest, callback: serverpb.PoolServiceV0.GetIPInPoolCallback): void;

        /**
         * Calls GetIPInPool.
         * @param request GetIPInPoolRequest message or plain object
         * @returns Promise
         */
        public getIPInPool(request: serverpb.IGetIPInPoolRequest): Promise<serverpb.GetIPInPoolResponse>;
    }

    namespace PoolServiceV0 {

        /**
         * Callback as used by {@link serverpb.PoolServiceV0#listPool}.
         * @param error Error, if any
         * @param [response] ListPoolResponse
         */
        type ListPoolCallback = (error: (Error|null), response?: serverpb.ListPoolResponse) => void;

        /**
         * Callback as used by {@link serverpb.PoolServiceV0#getIPInPool}.
         * @param error Error, if any
         * @param [response] GetIPInPoolResponse
         */
        type GetIPInPoolCallback = (error: (Error|null), response?: serverpb.GetIPInPoolResponse) => void;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: google.api.IHttpRule[];
        }

        /** Represents a Http. */
        class Http {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule get */
            get?: string;

            /** HttpRule put */
            put?: string;

            /** HttpRule post */
            post?: string;

            /** HttpRule delete */
            "delete"?: string;

            /** HttpRule patch */
            patch?: string;

            /** HttpRule custom */
            custom?: google.api.ICustomHttpPattern;

            /** HttpRule selector */
            selector?: string;

            /** HttpRule body */
            body?: string;

            /** HttpRule additionalBindings */
            additionalBindings?: google.api.IHttpRule[];
        }

        /** Represents a HttpRule. */
        class HttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete_: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule body. */
            public body: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: string;

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: string;

            /** CustomHttpPattern path */
            path?: string;
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: google.protobuf.IFileDescriptorProto[];
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: string;

            /** FileDescriptorProto package */
            "package"?: string;

            /** FileDescriptorProto dependency */
            dependency?: string[];

            /** FileDescriptorProto publicDependency */
            publicDependency?: number[];

            /** FileDescriptorProto weakDependency */
            weakDependency?: number[];

            /** FileDescriptorProto messageType */
            messageType?: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType */
            enumType?: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service */
            service?: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension */
            extension?: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options */
            options?: google.protobuf.IFileOptions;

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: google.protobuf.ISourceCodeInfo;

            /** FileDescriptorProto syntax */
            syntax?: string;
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package_: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: string;

            /** DescriptorProto field */
            field?: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension */
            extension?: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType */
            nestedType?: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType */
            enumType?: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange */
            extensionRange?: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl */
            oneofDecl?: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options */
            options?: google.protobuf.IMessageOptions;

            /** DescriptorProto reservedRange */
            reservedRange?: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName */
            reservedName?: string[];
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: number;

                /** ExtensionRange end */
                end?: number;
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: number;

                /** ReservedRange end */
                end?: number;
            }

            /** Represents a ReservedRange. */
            class ReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: string;

            /** FieldDescriptorProto number */
            number?: number;

            /** FieldDescriptorProto label */
            label?: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type */
            type?: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName */
            typeName?: string;

            /** FieldDescriptorProto extendee */
            extendee?: string;

            /** FieldDescriptorProto defaultValue */
            defaultValue?: string;

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: number;

            /** FieldDescriptorProto jsonName */
            jsonName?: string;

            /** FieldDescriptorProto options */
            options?: google.protobuf.IFieldOptions;
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: string;

            /** OneofDescriptorProto options */
            options?: google.protobuf.IOneofOptions;
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: string;

            /** EnumDescriptorProto value */
            value?: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options */
            options?: google.protobuf.IEnumOptions;
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: string;

            /** EnumValueDescriptorProto number */
            number?: number;

            /** EnumValueDescriptorProto options */
            options?: google.protobuf.IEnumValueOptions;
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: string;

            /** ServiceDescriptorProto method */
            method?: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options */
            options?: google.protobuf.IServiceOptions;
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: string;

            /** MethodDescriptorProto inputType */
            inputType?: string;

            /** MethodDescriptorProto outputType */
            outputType?: string;

            /** MethodDescriptorProto options */
            options?: google.protobuf.IMethodOptions;

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: boolean;

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: boolean;
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: string;

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: string;

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: boolean;

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: boolean;

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: boolean;

            /** FileOptions optimizeFor */
            optimizeFor?: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage */
            goPackage?: string;

            /** FileOptions ccGenericServices */
            ccGenericServices?: boolean;

            /** FileOptions javaGenericServices */
            javaGenericServices?: boolean;

            /** FileOptions pyGenericServices */
            pyGenericServices?: boolean;

            /** FileOptions deprecated */
            deprecated?: boolean;

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: boolean;

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: string;

            /** FileOptions csharpNamespace */
            csharpNamespace?: string;

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: google.protobuf.IUninterpretedOption[];
        }

        /** Represents a FileOptions. */
        class FileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: boolean;

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: boolean;

            /** MessageOptions deprecated */
            deprecated?: boolean;

            /** MessageOptions mapEntry */
            mapEntry?: boolean;

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: google.protobuf.IUninterpretedOption[];
        }

        /** Represents a MessageOptions. */
        class MessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed */
            packed?: boolean;

            /** FieldOptions jstype */
            jstype?: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy */
            lazy?: boolean;

            /** FieldOptions deprecated */
            deprecated?: boolean;

            /** FieldOptions weak */
            weak?: boolean;

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: google.protobuf.IUninterpretedOption[];
        }

        /** Represents a FieldOptions. */
        class FieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: google.protobuf.IUninterpretedOption[];
        }

        /** Represents an OneofOptions. */
        class OneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: boolean;

            /** EnumOptions deprecated */
            deprecated?: boolean;

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: google.protobuf.IUninterpretedOption[];
        }

        /** Represents an EnumOptions. */
        class EnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: boolean;

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: google.protobuf.IUninterpretedOption[];
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: boolean;

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: google.protobuf.IUninterpretedOption[];
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: boolean;

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: google.protobuf.IUninterpretedOption[];

            /** MethodOptions .google.api.http */
            ".google.api.http"?: google.api.IHttpRule;
        }

        /** Represents a MethodOptions. */
        class MethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue */
            identifierValue?: string;

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long);

            /** UninterpretedOption doubleValue */
            doubleValue?: number;

            /** UninterpretedOption stringValue */
            stringValue?: Uint8Array;

            /** UninterpretedOption aggregateValue */
            aggregateValue?: string;
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: google.protobuf.SourceCodeInfo.ILocation[];
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: number[];

                /** Location span */
                span?: number[];

                /** Location leadingComments */
                leadingComments?: string;

                /** Location trailingComments */
                trailingComments?: string;

                /** Location leadingDetachedComments */
                leadingDetachedComments?: string[];
            }

            /** Represents a Location. */
            class Location {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: google.protobuf.GeneratedCodeInfo.IAnnotation[];
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: number[];

                /** Annotation sourceFile */
                sourceFile?: string;

                /** Annotation begin */
                begin?: number;

                /** Annotation end */
                end?: number;
            }

            /** Represents an Annotation. */
            class Annotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
