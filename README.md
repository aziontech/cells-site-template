# cells-site-template

This repository contains a edge-function template to be used as a starting point to host static sites on Azion Edge Network. The static assets of the site will be obtained from AWS S3 backed Key Value Storage as configured on azion.json config file.

## Quick links

* [License](#License)
* [Contributing](CONTRIBUTING.md)
* [Code of Conduct](CODE_OF_CONDUCT.md)
* [Individual Contributor License Agreement (CLA)](CLA.md)

## Step-by-step

To start, install the dependencies:
```
npm ci
```
Then build and publish the site:
```
npm run build
npm run publish
```
These commands assume that the files are in directory `./out`.  If needed it's
possible to specify another location using `-d` option.
```
npm run build -- -d ../other-dir
npm run publish -- -d ../other-dir
```

## License

This project is licensed under the terms of the [MIT](LICENSE) license.