import React from 'react';
import { func, shape } from 'prop-types';

import RadioInput from '../../../../components/common/Form/RadioInput';
//  import creditCardConfig from './creditCardConfig';

import { paymentMethodShape } from '../utility/index';

function WindCave({ method, selected, actions }) {
  const isSelected = method.code === selected.code;
  /**
   * This will be fired when user placing the order and this payment method
   * is selected by the user.
   */

  const radioInputElement = (
    <RadioInput
      value={method.code}
      label={method.title}
      name="paymentMethod"
      checked={isSelected}
      onChange={actions.change}
    />
  );

  if (isSelected) {
    return (
      <>
        {radioInputElement}
        {/* <Card bg="darker">
          <div className="container flex flex-col justify-center w-4/5">
            <iframe
              title="Payment Page"
              src="https://www.example.com/"
              width="100%"
              height="600px"
              frameBorder="0"
            />
          </div>
        </Card> */}
      </>
    );
  }

  return (
    <div>
      <div>
        <RadioInput
          value={method.code}
          label={method.title}
          name="paymentMethod"
          checked={isSelected}
          onChange={actions.change}
        />
      </div>
    </div>
  );
}

WindCave.propTypes = {
  method: paymentMethodShape.isRequired,
  selected: paymentMethodShape.isRequired,
  actions: shape({ change: func }).isRequired,
};

export default WindCave;
