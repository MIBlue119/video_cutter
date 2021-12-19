# video cutter

The repo is a practice about cutting silent video implement

## Installation

- Install the dependency
```
$ yarn install
```

## Usage

- Activate the client 
```
$ yarn run start
```

## Deploy with vercel
- [How to deploy the static files to serve](./docs/deploy_to_vercel.md)
    - Install vercel : `$npm install vercel` 
    - Sign in the vercel: `$vercel login`
    - Build: `$vercel`
    - [Close the CI setting](./docs/deploy_to_vercel.md)
    - When update code, rebuild again: `$vercel --prod`

## Related source
- [KOLpower](https://kolpower.cc/video-editor): an online service from Taiwan KOL `六指渊`
    - It supports upload video/audio and serve to annotate the parts with volume
    - The JS modules used by this produt are `ffmpeg.js`/`wavesurfer.js`
- [video-annotation](https://github.com/katspaugh/wavesurfer.js/blob/master/example/video-annotation/main.js)
    - demo page: https://wavesurfer-js.org/example/video-annotation/index.html     