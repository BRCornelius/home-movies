import * as unknownVideos from './unknown';
import * as fifties from './fifties';

export const data = [unknownVideos, fifties].reduce((agg, curr) => agg.concat(curr), []);
