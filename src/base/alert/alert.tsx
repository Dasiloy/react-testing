import { AlertComponent } from './alert.props';

const Alert: AlertComponent = ({ variant = 'info' }) => {
  return (
    <div>
      <h1>{variant} alert</h1>
    </div>
  );
};

export default Alert;
