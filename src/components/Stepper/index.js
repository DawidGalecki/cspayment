import MENU from 'constants/menu';
import { withRouter } from 'react-router-dom';
import { Icon, Step } from 'semantic-ui-react';
import './index.scss';

function Stepper(props = {}) {
  const steps = {
    [MENU.START.LINK]: {
      description: 'Choose products',
      icon: 'list',
      step: 1,
      title: 'Start',
    },
    [MENU.CART.LINK]: {
      description: 'Open your cart',
      icon: 'cart',
      step: 2,
      title: 'Cart',
    },
    [MENU.BILLING.LINK]: {
      description: 'Enter billing information',
      icon: 'payment',
      step: 3,
      title: 'Billing',
    },
    [MENU.SUMMARY.LINK]: {
      description: 'Display order summary',
      icon: 'check',
      step: 4,
      title: 'Summary',
    },
  };

  return (
    <Step.Group>
      {Object.keys(steps).map((stepPath) => (
        <Step active={stepPath === props.location.pathname} key={`stepper-${stepPath}`}>
          <Icon name={steps[stepPath].icon} />
          <Step.Content>
            <Step.Title>{steps[stepPath].title}</Step.Title>
            <Step.Description>{steps[stepPath].description}</Step.Description>
          </Step.Content>
        </Step>
      ))}
    </Step.Group>
  );
}

export default withRouter(Stepper);
