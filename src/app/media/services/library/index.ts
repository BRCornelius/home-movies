import unknownVideos from './unknown';
import fifties from './fifties';
import eighties from './eighties';
import nineties01 from './nineties-01';
import nineties02 from './nineties-02';

const conjoinArrays = (arrayOfArrays) => arrayOfArrays.flat();

export const data = conjoinArrays([
    unknownVideos, fifties, eighties, nineties01, nineties02
]);
