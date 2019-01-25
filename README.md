## filename-padder module
Use this module to rename files on a directory that follows a numeric pattern.
For example to order logs files, enumerated images or track.

For example, if we have the following music tracks on a directory, they will not be properly 
sorted because of the order is just alphabetic. 
track-1-music.mp3
track-2-music.mp3
...
track-9-music.mp3
track-11-music.mp3
...
track-90-music.mp3
...
track-101-music.mp3

This module allows to rename the files adding padding to an specific variable sector.

## How to use it:
```
const fPadder = require("filename-padder");

let path = "/data/myTracks/"
  pattern = "track-(?var)-music.mp3",
  charToPadWith = '0',
  lentPath = 4;



```
