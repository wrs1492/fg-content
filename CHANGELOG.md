# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.3.9"></a>
## [2.3.9](https://github.com/bitjson/typescript-starter/compare/v2.3.8...v2.3.9) (2018-08-21)


### Bug Fixes

* **dependencies:** upgrade dependencies, fix issues caused by breaking changes ([8a692bf](https://github.com/bitjson/typescript-starter/commit/8a692bf))
* **test:** use recommended AVA import style ([b2af806](https://github.com/bitjson/typescript-starter/commit/b2af806))



<a name="2.3.8"></a>
## [2.3.8](https://github.com/bitjson/typescript-starter/compare/v2.3.7...v2.3.8) (2018-06-15)



<a name="2.3.7"></a>
## [2.3.7](https://github.com/bitjson/typescript-starter/compare/v2.3.6...v2.3.7) (2018-06-03)


### Bug Fixes

* **package:** fix info package script ([701dbbe](https://github.com/bitjson/typescript-starter/commit/701dbbe)), closes [#70](https://github.com/bitjson/typescript-starter/issues/70)



<a name="2.3.6"></a>
## [2.3.6](https://github.com/bitjson/typescript-starter/compare/v2.3.5...v2.3.6) (2018-04-17)



<a name="2.3.5"></a>
## [2.3.5](https://github.com/bitjson/typescript-starter/compare/v2.3.4...v2.3.5) (2018-03-29)


### Bug Fixes

* **CLI:** set the name in package.json during generation ([58911f2](https://github.com/bitjson/typescript-starter/commit/58911f2)), closes [#81](https://github.com/bitjson/typescript-starter/issues/81)



<a name="2.3.4"></a>
## [2.3.4](https://github.com/bitjson/typescript-starter/compare/v2.3.3...v2.3.4) (2018-03-28)



<a name="2.3.3"></a>
## [2.3.3](https://github.com/bitjson/typescript-starter/compare/v2.3.2...v2.3.3) (2018-03-23)



<a name="2.3.2"></a>
## [2.3.2](https://github.com/bitjson/typescript-starter/compare/v2.3.1...v2.3.2) (2018-03-21)



<a name="2.3.1"></a>
## [2.3.1](https://github.com/bitjson/typescript-starter/compare/v2.3.0...v2.3.1) (2018-03-21)


### Bug Fixes

* **CLI:** always update the year in LICENSE ([2ec3741](https://github.com/bitjson/typescript-starter/commit/2ec3741))
* **CLI:** properly remove the bin from all new projects ([2e0a9ab](https://github.com/bitjson/typescript-starter/commit/2e0a9ab))
* **CLI:** remove exports of deleted files for non-Node.js projects ([1e14d03](https://github.com/bitjson/typescript-starter/commit/1e14d03))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/bitjson/typescript-starter/compare/v2.2.0...v2.3.0) (2018-03-16)


### Bug Fixes

* **CLI:** update execa to fix bug on Windows ([89722a4](https://github.com/bitjson/typescript-starter/commit/89722a4)), closes [#72](https://github.com/bitjson/typescript-starter/issues/72)
* **package:** switch to double quotes because single quotes break on Windows ([f315fa4](https://github.com/bitjson/typescript-starter/commit/f315fa4))


### Features

* **CLI:** add Travis CI and Appveyor CI as extra options ([bdaafaa](https://github.com/bitjson/typescript-starter/commit/bdaafaa)), closes [#69](https://github.com/bitjson/typescript-starter/issues/69)



<a name="2.2.0"></a>
# [2.2.0](https://github.com/bitjson/typescript-starter/compare/v2.1.1...v2.2.0) (2018-03-16)


### Features

* **CLI:** add support for TYPESCRIPT_STARTER_REPO_BRANCH process.env, default to tag of current rel ([24ef06e](https://github.com/bitjson/typescript-starter/commit/24ef06e))



<a name="2.1.1"></a>
## [2.1.1](https://github.com/bitjson/typescript-starter/compare/v2.1.0...v2.1.1) (2018-03-14)


### Bug Fixes

* **CLI:** allow scoped npm package names ([83fdc67](https://github.com/bitjson/typescript-starter/commit/83fdc67)), closes [#68](https://github.com/bitjson/typescript-starter/issues/68)



<a name="2.1.0"></a>
# [2.1.0](https://github.com/bitjson/typescript-starter/compare/v2.0.3...v2.1.0) (2018-03-12)


### Features

* **CLI:** add smaller ascii art for clients with 74-84 columns ([7e4ba94](https://github.com/bitjson/typescript-starter/commit/7e4ba94))



<a name="2.0.3"></a>
## [2.0.3](https://github.com/bitjson/typescript-starter/compare/v2.0.2...v2.0.3) (2018-03-12)



<a name="2.0.2"></a>
## [2.0.2](https://github.com/bitjson/typescript-starter/compare/v2.0.1...v2.0.2) (2018-03-12)


### Bug Fixes

* **CLI:** include node types when user selects Node.js project ([7ae6ec8](https://github.com/bitjson/typescript-starter/commit/7ae6ec8))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/bitjson/typescript-starter/compare/v2.0.0...v2.0.1) (2018-03-12)


### Bug Fixes

* **CLI:** link the correct bin from package.json ([1990e12](https://github.com/bitjson/typescript-starter/commit/1990e12))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/bitjson/typescript-starter/compare/v1.4.1...v2.0.0) (2018-03-12)


### Bug Fixes

* **CLI:** automatically remove a CLI-related part of tsconfig.module.json ([a8e33af](https://github.com/bitjson/typescript-starter/commit/a8e33af))
* **CLI:** automatically remove the CLI's dependencies ([11509cf](https://github.com/bitjson/typescript-starter/commit/11509cf))
* **CLI:** if git config user.name/email fails, use a placeholder rather than failing ([41ac315](https://github.com/bitjson/typescript-starter/commit/41ac315))
* **CLI:** use placeholders for email, name, and GitHub username ([abef54a](https://github.com/bitjson/typescript-starter/commit/abef54a))
* **codecov:** prefix with npx ([c93c9db](https://github.com/bitjson/typescript-starter/commit/c93c9db))


### Features

* **CLI:** begin adding extra configuration options ([ee930cc](https://github.com/bitjson/typescript-starter/commit/ee930cc))
* **CLI:** create CLI, begin work on v2 ([76336c8](https://github.com/bitjson/typescript-starter/commit/76336c8))
* **CLI:** don't attempt to commit if user.name/email is not set ([58688fc](https://github.com/bitjson/typescript-starter/commit/58688fc))
* **CLI:** implement strict, immutable, and vscode options ([3bf7a7e](https://github.com/bitjson/typescript-starter/commit/3bf7a7e))
* **CLI:** v2 ([260a7d3](https://github.com/bitjson/typescript-starter/commit/260a7d3))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/bitjson/typescript-starter/compare/v1.4.0...v1.4.1) (2017-06-27)



<a name="1.4.0"></a>
# [1.4.0](https://github.com/bitjson/typescript-starter/compare/v1.3.0...v1.4.0) (2017-03-02)


### Features

* **gh-pages:** add package script for publishing docs to gh-pages ([1dfe830](https://github.com/bitjson/typescript-starter/commit/1dfe830)), closes [#14](https://github.com/bitjson/typescript-starter/issues/14)
* **publish:** add one-step publish process ([7b9b857](https://github.com/bitjson/typescript-starter/commit/7b9b857)), closes [#15](https://github.com/bitjson/typescript-starter/issues/15)



<a name="1.3.0"></a>
# [1.3.0](https://github.com/bitjson/typescript-starter/compare/v1.2.2...v1.3.0) (2017-03-01)


### Bug Fixes

* **hash.js:** correctly pre-build hash.js for the browser ([1fe0b10](https://github.com/bitjson/typescript-starter/commit/1fe0b10))
* **watch:** exclude build/**/*.spec.js from ava to avoid double execution ([e365656](https://github.com/bitjson/typescript-starter/commit/e365656))


### Features

* **browser:** add browser build, tests, and sample sha256 library method ([01f67d1](https://github.com/bitjson/typescript-starter/commit/01f67d1))
* **watch:** use concurrently for the watch task ([7fa64b8](https://github.com/bitjson/typescript-starter/commit/7fa64b8)), closes [#11](https://github.com/bitjson/typescript-starter/issues/11)



<a name="1.2.2"></a>
## [1.2.2](https://github.com/bitjson/typescript-starter/compare/v1.2.1...v1.2.2) (2017-02-17)


### Bug Fixes

* **tsconfig:** set rootDir option when outDir option is used ([3577caa](https://github.com/bitjson/typescript-starter/commit/3577caa)), closes [#9](https://github.com/bitjson/typescript-starter/issues/9)



<a name="1.2.1"></a>
## [1.2.1](https://github.com/bitjson/typescript-starter/compare/v1.2.0...v1.2.1) (2017-02-14)



<a name="1.2.0"></a>
# [1.2.0](https://github.com/bitjson/node-typescript-starter/compare/v1.1.1...v1.2.0) (2017-02-14)


### Features

* **github:** add sample GitHub issue template, PR template, and contributing guidelines ([9c95249](https://github.com/bitjson/node-typescript-starter/commit/9c95249))
* **watch:** add unified watch task with multiview ([973966e](https://github.com/bitjson/node-typescript-starter/commit/973966e))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/bitjson/node-typescript-starter/compare/v1.1.0...v1.1.1) (2017-02-13)



<a name="1.1.0"></a>
# 1.1.0 (2017-02-13)


### Features

* **examples:** improve browser usage example ([c8199e7](https://github.com/bitjson/node-typescript-starter/commit/c8199e7))
* **starter:** add changelogs and examples ([5f18048](https://github.com/bitjson/node-typescript-starter/commit/5f18048))
