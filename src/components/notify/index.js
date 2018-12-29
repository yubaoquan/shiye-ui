import helper from './helper2';
import { pick } from 'lodash/object';

export default pick(helper, ['success', 'error', 'config', 'clear']);
