import { decodeCartOpaqueId } from "../../xforms/id.js";

/**
 * @name Mutation/setGiftNoteOnCart
 * @method
 * @memberof Cart/GraphQL
 * @summary resolver for the setGiftNoteOnCart GraphQL mutation
 * @param {Object} parentResult - unused
 * @param {Object} args.input - an object of all mutation arguments that were sent by the client
 * @param {Object} args.input.billing - The billing details
 * @param {String} args.input.cartId - The cart to set billing details on
 * @param {String} [args.input.cartToken] - The token for the cart, required if it is an anonymous cart
 * @param {String} [args.input.clientMutationId] - An optional string identifying the mutation call
 * @param {Object} context - an object containing the per-request state
 * @returns {Promise<Object>} SetGiftNoteOnCartPayload
 */
export default async function setGiftNoteOnCart(parentResult, { input }, context) {
  const { giftNote, cartId: opaqueCartId, cartToken, clientMutationId = null } = input;

  const cartId = decodeCartOpaqueId(opaqueCartId);
  console.log("decoded cartId",cartId);
  const { cart } = await context.mutations.setGiftNoteOnCart(context, {
    giftNote,
    cartId,
    cartToken
  });

  return {
    cart,
    clientMutationId
  };
}
