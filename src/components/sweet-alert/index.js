import container from './container';
import { pick } from 'lodash/object';
export default pick(container, ['alert', 'confirm']);
