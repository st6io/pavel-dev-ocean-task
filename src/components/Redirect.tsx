import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Path } from '../constants/Path';

// react-router team decided to remove Redirect in version 6.*.*
// Reference:
// https://github.com/remix-run/react-router/blob/62903564b85b0f7001b0be81b7a6b0c20d3fea9b/docs/upgrading/reach.md#redirect-redirectto-isredirect
// This component should be removed when there's other redirect mechanism available
const Redirect = ({ to }: { to: Path }) => {
  let navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  });

  return null;
};

export default Redirect;
