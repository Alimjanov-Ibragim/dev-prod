import compose from 'compose-function';

import { withRouter } from './withRouter';

export const withHocs = compose(withRouter);
