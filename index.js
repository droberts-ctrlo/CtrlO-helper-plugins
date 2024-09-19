"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JestPlugin = exports.FengariPlugin = exports.ChmodPlugin = void 0;
const child_process_1 = require("child_process");
/**
 * ChmodPlugin - A webpack plugin to change the permissions of the project
 */
class ChmodPlugin {
    /**
     * ChmodPlugin constructor
     * @param {string} basePath The base path of the project
     */
    constructor(basePath) {
        this.basePath = basePath;
    }
    apply(compiler) {
        compiler.hooks.done.tap('chmod plugin', () => {
            (0, child_process_1.exec)(`chmod -R o+rX ${this.basePath}`, (err) => {
                if (err)
                    throw err;
                console.log('Changed permissions');
            });
        });
    }
}
exports.ChmodPlugin = ChmodPlugin;
/**
 * FengariPlugin - A webpack plugin to download fengari-web.js
 */
class FengariPlugin {
    /**
     * FengariPlugin constructor
     * @param basePath The base path to download the script to
     */
    constructor(basePath) {
        this.basePath = basePath;
    }
    apply(compiler) {
        compiler.hooks.done.tap('fengari', () => {
            (0, child_process_1.exec)(`wget -qO ${this.basePath.endsWith('/') ? this.basePath : this.basePath + '/'}fengari-web.js https://raw.githubusercontent.com/ctrlo/GADS/dev/public/js/fengari-web.js`, (err) => {
                if (err)
                    throw err;
                console.log('Downloaded fengari-web.js');
            });
        });
    }
}
exports.FengariPlugin = FengariPlugin;
/**
 * JestPlugin - A webpack plugin to run jest tests
 */
class JestPlugin {
    /**
     * JestPlugin constructor
     * @param config The jest config file
     */
    constructor(config) {
        this.config = config;
    }
    apply(compiler) {
        compiler.hooks.beforeCompile.tapAsync('jestPlugin', (_, callback) => {
            (0, child_process_1.exec)(`yarn jest --silent --config=${this.config} --color=false`, (err) => {
                if (err)
                    throw err;
                console.log('Jest tests complete and passed');
            });
            callback();
        });
    }
}
exports.JestPlugin = JestPlugin;
