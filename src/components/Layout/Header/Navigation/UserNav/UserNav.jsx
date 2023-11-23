import { LogoutButton } from '../../LogoutButton';
import { Link } from 'react-router-dom';

export const UserNav = () => {
  return (
    <div>
      <Link to="/user">UserPage</Link>
      <LogoutButton />
    </div>
  );
};
