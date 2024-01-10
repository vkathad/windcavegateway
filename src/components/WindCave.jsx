import React from 'react';
import { func, shape } from 'prop-types';

import Card from '../../../../components/common/Card';
import RadioInput from '../../../../components/common/Form/RadioInput';

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
      label="wind"
      name="paymentMethod"
      checked={isSelected}
      onChange={actions.change}
    />
  );

  return (
    <>
      <div>{radioInputElement}</div>
      <div className="mx-4 my-4">
        <Card bg="darker">
          <div className="container flex flex-col justify-center w-4/5">
            test
          </div>
        </Card>
      </div>
    </>
  );
}

WindCave.propTypes = {
  method: paymentMethodShape.isRequired,
  selected: paymentMethodShape.isRequired,
  actions: shape({ change: func }).isRequired,
};

export default WindCave;
