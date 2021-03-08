import unknownVideos from './unknown';
import fifties from './fifties';
import eighties from './eighties';

const conjoinArrays = (arrayOfArrays) => arrayOfArrays.flat();

export const data = conjoinArrays([unknownVideos, fifties, eighties])
