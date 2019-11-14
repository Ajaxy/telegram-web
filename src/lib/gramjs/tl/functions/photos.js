/*! File generated by TLObjects' generator. All changes will be ERASED !*/
const { TLObject } = require('../tlobject');
const { TLRequest } = require('../tlobject');
const struct = require('python-struct');
const { readBigIntFromBuffer, 
        readBufferFromBigInt, generateRandomBytes } = require('../../Helpers')


class UpdateProfilePhotoRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0xf0bb5152;
    static SUBCLASS_OF_ID = 0xc6338f7d;

    /**
    :returns UserProfilePhoto: Instance of either UserProfilePhotoEmpty, UserProfilePhoto
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0xf0bb5152;
        this.SUBCLASS_OF_ID = 0xc6338f7d;

        this.id = args.id;
    }
    async resolve(client, utils) {
        this.id = utils.getInputPhoto(this.id)
    }
    get bytes() {
        return Buffer.concat([
            Buffer.from("5251bbf0","hex"),
            this.id.bytes,
            ])
        }
    static fromReader(reader) {
        let _id;
        let _x;
        let len;
        _id = reader.tgReadObject();
        return new this({id:_id})
    }
}


class UploadProfilePhotoRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0x4f32c098;
    static SUBCLASS_OF_ID = 0xc292bd24;

    /**
    :returns photos.Photo: Instance of Photo
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0x4f32c098;
        this.SUBCLASS_OF_ID = 0xc292bd24;

        this.file = args.file;
    }
    get bytes() {
        return Buffer.concat([
            Buffer.from("98c0324f","hex"),
            this.file.bytes,
            ])
        }
    static fromReader(reader) {
        let _file;
        let _x;
        let len;
        _file = reader.tgReadObject();
        return new this({file:_file})
    }
}


class DeletePhotosRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0x87cf7f2f;
    static SUBCLASS_OF_ID = 0x8918e168;

    /**
    :returns Vector<long>: This type has no constructors.
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0x87cf7f2f;
        this.SUBCLASS_OF_ID = 0x8918e168;

        this.id = args.id;
    }
    async resolve(client, utils) {
        const _tmp = [];for (const _x of this.id) {
            _tmp.push(utils.getInputPhoto(_x));
        }
        this.id = _tmp;
    }
    get bytes() {
        return Buffer.concat([
            Buffer.from("2f7fcf87","hex"),
            Buffer.from('15c4b51c', 'hex'),struct.pack('<i', this.id.length),Buffer.concat(this.id.map(x => x.bytes)),
            ])
        }
    static fromReader(reader) {
        let _id;
        let _x;
        let len;
        reader.readInt();
        _id = [];
        len = reader.readInt();
        for (let i=0;i<len;i++){
            _x = reader.tgReadObject();
            _id.push(_x);
            }
            return new this({id:_id})
        }
        readResult(reader){
            reader.readInt();  // Vector ID
            let temp = [];
            let len = reader.readInt(); //fix this
            for (let i=0;i<len;i++){
                temp.push(reader.readLong())
            }
            return temp
        }
    }


class GetUserPhotosRequest extends TLRequest {
    static CONSTRUCTOR_ID = 0x91cd32a8;
    static SUBCLASS_OF_ID = 0x27cfb967;

    /**
    :returns photos.Photos: Instance of either Photos, PhotosSlice
    */
    constructor(args) {
        super();
        args = args || {}
        this.CONSTRUCTOR_ID = 0x91cd32a8;
        this.SUBCLASS_OF_ID = 0x27cfb967;

        this.userId = args.userId;
        this.offset = args.offset;
        this.maxId = args.maxId;
        this.limit = args.limit;
    }
    async resolve(client, utils) {
        this.user_id = utils.getInputUser(await client.getInputEntity(this.userId))
    }
    get bytes() {
        return Buffer.concat([
            Buffer.from("a832cd91","hex"),
            this.userId.bytes,
            struct.pack('<i', this.offset),
            readBufferFromBigInt(this.maxId,8,true,true),
            struct.pack('<i', this.limit),
            ])
        }
    static fromReader(reader) {
        let _user_id;
        let _offset;
        let _max_id;
        let _limit;
        let _x;
        let len;
        _user_id = reader.tgReadObject();
        _offset = reader.readInt();
        _max_id = reader.readLong();
        _limit = reader.readInt();
        return new this({userId:_user_id,
	offset:_offset,
	maxId:_max_id,
	limit:_limit})
    }
}

module.exports = {
    UpdateProfilePhotoRequest,
    UploadProfilePhotoRequest,
    DeletePhotosRequest,
    GetUserPhotosRequest,
};