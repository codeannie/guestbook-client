import _ from 'lodash';
import { push as rPush } from 'redux-little-router';

export function push(
  location,
  options
) {
  const { route } = location;
  const params = location.params || {};
  let pathname = route;

  _.each(params, (value, key) => {
    pathname = pathname.replace(`:${key}`, value);
  });

  const routeParams = _.omit(location, ['route', 'params']);
  const args = { pathname, ...routeParams };

  const action = rPush(args, options);
  return action;
}