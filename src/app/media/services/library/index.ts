import unknownVideos from './unknown';
import fifties from './fifties';
import eighties from './eighties';
import nineties01 from './nineties-01';
import nineties02 from './nineties-02';
import nineties03 from './nineties-03';
import nineties04 from './nineties-04';

const nineties = [...nineties01, ...nineties02, ...nineties03, ...nineties04];

export const data = [...unknownVideos, ...fifties, ...eighties, ...nineties];