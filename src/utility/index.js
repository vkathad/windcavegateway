import _get from 'lodash.get';
import { shape, string } from 'prop-types';

import { PAYMENT_METHOD_FORM, config } from '../../../../config';
import LocalStorage from '../../../../utils/localStorage';

export const ccField = `${PAYMENT_METHOD_FORM}.payone.cc`;
export const selectedCardField = `${ccField}.selectedCard`;
export const additionalDataField = `${ccField}.additional_data`;
export const cardTypeField = `${ccField}.additional_data.cardtype`;
export const cardHolderField = `${ccField}.additional_data.cardholder`;

export function isInt(value) {
  return value.length > 0 && typeof value === 'number';
}
export const paymentMethodShape = shape({ title: string, code: string });

export function performRedirect(order) {
  const orderNumber = _get(order, 'order_number');

  if (orderNumber && config.isProductionMode) {
    window.location.replace(`${config.baseUrl}/payone/onepage/redirect/`);
  }

  if (orderNumber) {
    LocalStorage.clearCheckoutStorage();
  }
}
