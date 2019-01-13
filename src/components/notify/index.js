import container from './container';
import { pick } from 'lodash/object';

export default pick(container, ['success', 'error', 'config', 'clear']);
