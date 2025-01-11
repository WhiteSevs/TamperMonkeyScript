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
    constructor(opts: any);
    /**
     * A random generated module ID we use for injecting into Webpack
     */
    moduleID: string;
    /**
     * An array containing different argument injection methods for
     * Webpack (before version 4), and subsequently pulling out methods and modules
     * @internal
     */
    functionArguments: ((number[] | ((_e: any, _t: any, i: any) => void)[])[] | (number[] | string[][] | {
        [x: string]: (_e: any, _t: any, i: any) => void;
    })[])[];
    modules: {};
    constructors: any[];
    get: any;
    /**
     * An array containing different argument injection methods for
     * Webpack (after version 4), and subsequently pulling out methods and modules
     * @internal
     */
    arrayArguments: ((number[] | ((_e: any, _t: any, i: any) => void)[])[] | {}[] | (number[] | string[][] | {
        [x: string]: (_e: any, _t: any, i: any) => void;
    })[])[];
    target: Window & typeof globalThis;
    entrypoint: string;
    debug: boolean;
    strict: boolean;
    /**
     * Debug logging method, outputs to the console when {@link ModuleRaid.debug} is true
     *
     * @param {*} message The message to be logged
     * @internal
     */
    log(message: any): void;
    /**
     * Method to set an alternative getter if we weren't able to extract __webpack_require__
     * from Webpack
     * @internal
     */
    replaceGet(): void;
    /**
     * Method that will try to inject a module into Webpack or get modules
     * depending on it's success it might be more or less brute about it
     * @internal
     */
    fillModules(): void;
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
    setupPushEvent(): void;
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
    detectEntrypoint(): void;
    /**
     * Recursive object-search function for modules
     *
     * @param object the object to search through
     * @param query the query the object keys/values are searched for
     * @returns boolean state of `object` containing `query` somewhere in it
     * @internal
     */
    searchObject(object: any, query: any): boolean;
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
    findModule(query: any): any[];
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
    findConstructor(query: any): any[];
}
