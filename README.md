# hold-my-file

Examples using [multer](https://github.com/expressjs/multer)

```
npm install
npm start
```


To create your files 100mb, 110mb, 150mb:

```
dd if=/dev/zero of=testfile100 bs=1024 count=102400
dd if=/dev/zero of=testfile110 bs=1024 count=112640
dd if=/dev/zero of=testfile150 bs=1024 count=153600
```


