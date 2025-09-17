/* eslint-disable */
// ==UserScript==
// @name         ModuleRaid.js
// @namespace    http://tampermonkey.net/
// @version      6.2.0
// @description  检索调用webpackJsonp模块，可指定检索的window
// @author       empyrealtear
// @license      MIT
// @original-script https://github.com/pixeldesu/moduleRaid
// ==/UserScript==


/**
 * Main moduleRaid class
 * @link https://scriptcat.org/zh-CN/script-show-page/2628
 */
export class ModuleRaid {
    /**
     * moduleRaid constructor
     *
     * @example
     * Constructing an instance without any arguments:
     * ```ts
     * const mR = new ModuleRaid()
     * ```
     *
     * Constructing an instance with the optional `opts` object:
     * ```ts
     * const mR = new ModuleRaid({ entrypoint: 'webpackChunk_custom_name' })
     * ```
     *
     * @param opts a object containing options to initialize moduleRaid with
     *  - **opts:**
     *    - _target_: the window object being searched for
     *    - _entrypoint_: the Webpack entrypoint present on the global window object
     *    - _debug_: whether debug mode is enabled or not
     *    - _strict_: whether strict mode is enabled or not
     */
    constructor(opts) {
        /**
         * A random generated module ID we use for injecting into Webpack
         */
        this.moduleID = Math.random().toString(36).substring(7);
        /**
         * An array containing different argument injection methods for
         * Webpack (before version 4), and subsequently pulling out methods and modules
         * @internal
         */
        this.functionArguments = [
            [
                [0],
                [
                    (_e, _t, i) => {
                        this.modules = i.c;
                        this.constructors = i.m;
                        this.get = i;
                    },
                ],
            ],
            [
                [1e3],
                {
                    [this.moduleID]: (_e, _t, i) => {
                        this.modules = i.c;
                        this.constructors = i.m;
                        this.get = i;
                    },
                },
                [[this.moduleID]],
            ],
        ];
        /**
         * An array containing different argument injection methods for
         * Webpack (after version 4), and subsequently pulling out methods and modules
         * @internal
         */
        this.arrayArguments = [
            [
                [this.moduleID],
                {},
                (e) => {
                    const mCac = e.m;
                    Object.keys(mCac).forEach((mod) => {
                        try {
                            this.modules[mod] = e(mod);
                        }
                        catch (err) {
                            this.log(`[arrayArguments/1] Failed to require(${mod}) with error:\n${err}\n${err.stack}`);
                        }
                    });
                    this.get = e;
                },
            ],
            this.functionArguments[1],
        ];
        /**
         * Storage for the modules we extracted from Webpack
         */
        this.modules = {};
        /**
         * Storage for the constructors we extracted from Webpack
         */
        this.constructors = [];
        let options = {
            target: window,
            entrypoint: 'webpackJsonp',
            debug: false,
            strict: false,
        };
        if (typeof opts === 'object') {
            options = Object.assign(Object.assign({}, options), opts);
        }
        this.target = options.target
        this.entrypoint = options.entrypoint;
        this.debug = options.debug;
        this.strict = options.strict;
        this.detectEntrypoint();
        this.fillModules();
        this.replaceGet();
        this.setupPushEvent();
    }
    /**
     * Debug logging method, outputs to the console when {@link ModuleRaid.debug} is true
     *
     * @param {*} message The message to be logged
     * @internal
     */
    log(message) {
        if (this.debug) {
            console.warn(`[moduleRaid] ${message}`);
        }
    }
    /**
     * Method to set an alternative getter if we weren't able to extract __webpack_require__
     * from Webpack
     * @internal
     */
    replaceGet() {
        if (this.get === null) {
            this.get = (key) => this.modules[key];
        }
    }
    /**
     * Method that will try to inject a module into Webpack or get modules
     * depending on it's success it might be more or less brute about it
     * @internal
     */
    fillModules() {
        if (typeof this.target[this.entrypoint] === 'function') {
            this.functionArguments.forEach((argument, index) => {
                try {
                    if (this.modules && Object.keys(this.modules).length > 0)
                        return;
                    this.target[this.entrypoint](...argument);
                }
                catch (err) {
                    this.log(`moduleRaid.functionArguments[${index}] failed:\n${err}\n${err.stack}`);
                }
            });
        }
        else {
            this.arrayArguments.forEach((argument, index) => {
                try {
                    if (this.modules && Object.keys(this.modules).length > 0)
                        return;
                    this.target[this.entrypoint].push(argument);
                }
                catch (err) {
                    this.log(`Pushing moduleRaid.arrayArguments[${index}] into ${this.entrypoint} failed:\n${err}\n${err.stack}`);
                }
            });
        }
        if (this.modules && Object.keys(this.modules).length == 0) {
            let moduleEnd = false;
            let moduleIterator = 0;
            if (typeof this.target[this.entrypoint] != 'function' || !this.target[this.entrypoint]([], [], [moduleIterator])) {
                throw Error('Unknown Webpack structure');
            }
            while (!moduleEnd) {
                try {
                    this.modules[moduleIterator] = this.target[this.entrypoint]([], [], [moduleIterator]);
                    moduleIterator++;
                }
                catch (err) {
                    moduleEnd = true;
                }
            }
        }
    }
    /**
     * Method to hook into `window[this.entrypoint].push` adding a listener for new
     * chunks being pushed into Webpack
     *
     * @example
     * You can listen for newly pushed packages using the `moduleraid:webpack-push` event
     * on `document`
     *
     * ```ts
     * document.addEventListener('moduleraid:webpack-push', (e) => {
     *   // e.detail contains the arguments push() was called with
     *   console.log(e.detail)
     * })
     * ```
     * @internal
     */
    setupPushEvent() {
        const originalPush = this.target[this.entrypoint].push;
        this.target[this.entrypoint].push = (...args) => {
            const result = Reflect.apply(originalPush, this.target[this.entrypoint], args);
            document.dispatchEvent(new CustomEvent('moduleraid:webpack-push', { detail: args }));
            return result;
        };
    }
    /**
     * Method to try autodetecting a Webpack JSONP entrypoint based on common naming
     *
     * If the default entrypoint, or the entrypoint that's passed to the moduleRaid constructor
     * already matches, the method exits early
     *
     * If `options.strict` has been set in the constructor and the initial entrypoint cannot
     * be found, this method will error, demanding a strictly set entrypoint
     * @internal
     */
    detectEntrypoint() {
        if (this.target[this.entrypoint] != undefined) {
            return;
        }
        if (this.strict) {
            throw Error(`Strict mode is enabled and entrypoint at window.${this.entrypoint} couldn't be found. Please specify the correct one!`);
        }
        let windowObjects = Object.keys(this.target);
        windowObjects = windowObjects
            .filter((object) => object.toLowerCase().includes('chunk') || object.toLowerCase().includes('webpack'))
            .filter((object) => typeof this.target[object] === 'function' || Array.isArray(this.target[object]));
        if (windowObjects.length > 1) {
            throw Error(`Multiple possible endpoints have been detected, please create a new moduleRaid instance with a specific one:\n${windowObjects.join(', ')}`);
        }
        if (windowObjects.length === 0) {
            throw Error('No Webpack JSONP entrypoints could be detected');
        }
        this.log(`Entrypoint has been detected at window.${windowObjects[0]} and set for injection`);
        this.entrypoint = windowObjects[0];
    }
    /**
     * Recursive object-search function for modules
     *
     * @param object the object to search through
     * @param query the query the object keys/values are searched for
     * @returns boolean state of `object` containing `query` somewhere in it
     * @internal
     */
    searchObject(object, query) {
        for (const key in object) {
            const value = object[key];
            const lowerCaseQuery = query.toLowerCase();
            if (typeof value != 'object') {
                const lowerCaseKey = key.toString().toLowerCase();
                if (lowerCaseKey.includes(lowerCaseQuery))
                    return true;
                if (typeof value != 'object') {
                    const lowerCaseValue = value.toString().toLowerCase();
                    if (lowerCaseValue.includes(lowerCaseQuery))
                        return true;
                }
                else {
                    if (this.searchObject(value, query))
                        return true;
                }
            }
        }
        return false;
    }
    /**
     * Method to search through the module object, searching for the fitting content
     * if a string is supplied
     *
     * If query is supplied as a function, everything that returns true when passed
     * to the query function will be returned
     *
     * @example
     * With a string as query argument:
     * ```ts
     * const results = mR.findModule('feature')
     * // => Array of module results
     * ```
     *
     * With a function as query argument:
     * ```ts
     * const results = mR.findModule((module) => { typeof module === 'function' })
     * // => Array of module results
     * ```
     *
     * @param query query to search the module list for
     * @return a list of modules fitting the query
     */
    findModule(query) {
        const results = [];
        const modules = Object.keys(this.modules);
        if (modules.length === 0) {
            throw new Error('There are no modules to search through!');
        }
        modules.forEach((key) => {
            const module = this.modules[key.toString()];
            if (module === undefined)
                return;
            try {
                if (typeof query === 'string') {
                    query = query.toLowerCase();
                    switch (typeof module) {
                        case 'string':
                            if (module.toLowerCase().includes(query))
                                results.push(module);
                            break;
                        case 'function':
                            if (module.toString().toLowerCase().includes(query))
                                results.push(module);
                            break;
                        case 'object':
                            if (this.searchObject(module, query))
                                results.push(module);
                            break;
                    }
                }
                else if (typeof query === 'function') {
                    if (query(module))
                        results.push(module);
                }
                else {
                    throw new TypeError(`findModule can only find via string and function, ${typeof query} was passed`);
                }
            }
            catch (err) {
                this.log(`There was an error while searching through module '${key}':\n${err}\n${err.stack}`);
            }
        });
        return results;
    }
    /**
     * Method to search through the constructor array, searching for the fitting content
     * if a string is supplied
     *
     * If query is supplied as a function, everything that returns true when passed
     * to the query function will be returned
     *
     * @example
     * With a string as query argument:
     * ```ts
     * const results = mR.findConstructor('feature')
     * // => Array of constructor/module tuples
     * ```
     *
     * With a function as query argument:
     * ```ts
     * const results = mR.findConstructor((constructor) => { constructor.prototype.value !== undefined })
     * // => Array of constructor/module tuples
     * ```
     *
     * Accessing the resulting data:
     * ```ts
     * // With array destructuring (ES6)
     * const [constructor, module] = results[0]
     *
     * // ...or...
     *
     * // regular access
     * const constructor = results[0][0]
     * const module = results[0][1]
     * ```
     *
     * @param query query to search the constructor list for
     * @returns a list of constructor/module tuples fitting the query
     */
    findConstructor(query) {
        const results = [];
        const constructors = Object.keys(this.constructors);
        if (constructors.length === 0) {
            throw new Error('There are no constructors to search through!');
        }
        constructors.forEach((key) => {
            const constructor = this.constructors[key];
            try {
                if (typeof query === 'string') {
                    query = query.toLowerCase();
                    if (constructor.toString().toLowerCase().includes(query))
                        results.push([this.constructors[key], this.modules[key]]);
                }
                else if (typeof query === 'function') {
                    if (query(constructor))
                        results.push([this.constructors[key], this.modules[key]]);
                }
            }
            catch (err) {
                this.log(`There was an error while searching through constructor '${key}':\n${err}\n${err.stack}`);
            }
        });
        return results;
    }
}