import SimpleSchema from "simpl-schema";

/**
 * @name Gift
 * @memberof Schemas
 * @type {SimpleSchema}
 * @property {String} sender optional
 * @property {String} receiver optional
 * @property {String} message optional
 */
export const Gift = new SimpleSchema({
    sender: {
        type: String,
        optional:true
    },
    receiver: {
        type: String,
        optional:true
    },
    message: {
        type: String,
        optional:true
    }
})