import {
    allFam, ark, assetsPath, beach, berta, celyna, church, emily,
    garrett, glenda, gloria, kidsMom, mainKids, newman, tim
} from "./constants";

export default [{
    title: 'The family at the beach',
    year: 'unknown',
    keywords: [],
    star: kidsMom,
    location: beach,
    url: `${assetsPath}/unknown/beach.mp4`,
    thumbnailUrl: `${assetsPath}/unknown/thumbnails/beach.jpg`,
}, {
    title: 'Playing at the beach',
    year: 'unknown',
    keywords: [],
    star: [tim, emily, gloria],
    location: beach,
    url: `${assetsPath}/unknown/beach_1.mp4`,
    thumbnailUrl: `${assetsPath}/unknown/thumbnails/beach_1.jpg`,
}, {
    title: 'Playing at the pool',
    year: 'unknown',
    keywords: [],
    star: kidsMom,
    location: beach,
    url: `${assetsPath}/unknown/beach_2.mp4`,
    thumbnailUrl: `${assetsPath}/unknown/thumbnails/beach_2.jpg`,
}, {
    title: 'Sledding in Arkansas',
    year: 'unknown',
    keywords: [],
    star: [...allFam, glenda, garrett, berta, celyna],
    location: ark,
    url: `${assetsPath}/unknown/arkansas-sledding.mp4`,
    thumbnailUrl: `${assetsPath}/unknown/thumbnails/arkansas-sledding.jpg`,
}, {
    title: 'Church Kid\'s Concert',
    year: 'unknown',
    keywords: [],
    star: mainKids,
    location: church,
    url: `${assetsPath}/unknown/church.mp4`,
    thumbnailUrl: `${assetsPath}/unknown/thumbnails/church.jpg`,
}, {
    title: 'Emily\'s Graduation',
    year: 'unknown',
    keywords: [],
    star: [emily],
    location: newman,
    url: `${assetsPath}/unknown/emily-graduation.mp4`,
    thumbnailUrl: `${assetsPath}/unknown/thumbnails/emily-graduation.jpg`,
}, {
    title: 'Holidays',
    year: 'unknown',
    keywords: [],
    star: allFam,
    location: [],
    url: `${assetsPath}/unknown/halloween.mp4`,
    thumbnailUrl: `${assetsPath}/unknown/thumbnails/halloween.jpg`,
}];
