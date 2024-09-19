import {exec} from 'child_process';
import {Compiler} from 'webpack';

/**
 * ChmodPlugin - A webpack plugin to change the permissions of the project
 */
export class ChmodPlugin {
    /**
     * ChmodPlugin constructor
     * @param {string} basePath The base path of the project
     */
    constructor(private basePath: string) {
    }

    apply(compiler: Compiler) {
        compiler.hooks.done.tap('chmod plugin', () => {
            exec(`chmod -Rc o+rX ${this.basePath}`, (err) => {
                if (err) throw err;
                console.log('Changed permissions');
            });
        });
    }
}

/**
 * FengariPlugin - A webpack plugin to download fengari-web.js
 */
export class FengariPlugin {
    /**
     * FengariPlugin constructor
     * @param basePath The base path to download the script to
     */
    constructor(private basePath: string) {
    }

    apply(compiler: Compiler) {
        compiler.hooks.done.tap('fengari', () => {
            exec(`wget -O ${this.basePath.endsWith('/') ? this.basePath : this.basePath + '/'}fengari-web.js https://raw.githubusercontent.com/ctrlo/GADS/dev/public/js/fengari-web.js`, (err) => {
                if (err) throw err;
                console.log('Downloaded fengari-web.js');
            });
        });
    }
}

/**
 * JestPlugin - A webpack plugin to run jest tests
 */
export class JestPlugin {
    /**
     * JestPlugin constructor
     * @param config The jest config file
     */
    constructor(private config: string) {
    }

    apply(compiler: Compiler) {
        compiler.hooks.beforeCompile.tapAsync('jestPlugin', (_, callback) => {
            exec(`yarn jest --config=${this.config} --color=false`, (err) => {
                if (err) throw err;
                console.log('Jest tests complete and passed');
            });
            callback();
        })
    }
}
