import unknownVideos from './unknown';
import fifties from './fifties';

const conjoinArrays = (arrayOfArrays) => arrayOfArrays.flat();

export const data = conjoinArrays([unknownVideos, fifties])
