import _get from 'lodash.get';

import RootElement from '../../../../utils/rootElement';

const config = RootElement.getPaymentConfig();
const payOne = _get(config, 'windcave');
console.log(payOne);
console.log('payOne');

const { method } = payOne;

const paymentConfig = {
  fieldConfig: {
    te: 'test',
  },
  method,
};

export default paymentConfig;
