import unknownVideos from './unknown';
import fifties from './fifties';
import eighties from './eighties';
import nineties from './nineties';

const conjoinArrays = (arrayOfArrays) => arrayOfArrays.flat();

export const data = conjoinArrays([unknownVideos, fifties, eighties, nineties]);
