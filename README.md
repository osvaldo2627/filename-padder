## filename-padder module
Use this module to rename files on a directory that follows a numeric pattern.
For example to order logs files, enumerated images or tracks.

For example, if we have the following music tracks on a directory, they will not be properly 
sorted because of the order is just alphabetic. 

```
track-1-music.mp3
track-2-music.mp3
...
track-9-music.mp3
..
track-11-music.mp3
...
track-90-music.mp3
...
track-101-music.mp3
wao-other-file-no-match.mp3
```

This module allows to rename the files adding padding to an specific variable sector.

## How to use it:
```
const fPadder = require("filename-padder");

//on a windows path, please use \\, for example D:\\Development\\my-files-to-rename\\files
let path = "/data/myTracks/";

  let pattern = "track-(?var)-music.mp3",
      chartPad = '0',
      lengthPad = 4;
  
  let result = fPadder.padRenameSync(path, pattern, lengthPad, chartPad);

```

Output for the above example:

result = to [array with renamed files] or null in case of error.

```
track-0001-music.mp3
track-0002-music.mp3
...
track-0009-music.mp3
..
track-0011-music.mp3
...
track-0090-music.mp3
...
track-0101-music.mp3
wao-other-file-no-match.mp3
```

## Test
```

git clone https://github.com/osvaldo2627/filename-padder.git 
cd filename-padder
npm install 
npm run test

```


## note: This implementation is sync, you should avoid using it on big amount of files if your server must handler other operations. Async impl comming soon for that case.
