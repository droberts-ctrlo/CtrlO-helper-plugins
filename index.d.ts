import { Compiler } from 'webpack';
/**
 * ChmodPlugin - A webpack plugin to change the permissions of the project
 */
export declare class ChmodPlugin {
    private basePath;
    /**
     * ChmodPlugin constructor
     * @param {string} basePath The base path of the project
     */
    constructor(basePath: string);
    apply(compiler: Compiler): void;
}
/**
 * FengariPlugin - A webpack plugin to download fengari-web.js
 */
export declare class FengariPlugin {
    private basePath;
    /**
     * FengariPlugin constructor
     * @param basePath The base path to download the script to
     */
    constructor(basePath: string);
    apply(compiler: Compiler): void;
}
/**
 * JestPlugin - A webpack plugin to run jest tests
 */
export declare class JestPlugin {
    private config;
    /**
     * JestPlugin constructor
     * @param config The jest config file
     */
    constructor(config: string);
    apply(compiler: Compiler): void;
}
