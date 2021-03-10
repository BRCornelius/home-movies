import unknownVideos from './unknown';
import fifties from './fifties';
import eighties from './eighties';
import nineties01 from './nineties-01';
import nineties02 from './nineties-02';

const nineties = [...nineties01, ...nineties02];

export const data = [...unknownVideos, ...fifties, ...eighties, ...nineties];