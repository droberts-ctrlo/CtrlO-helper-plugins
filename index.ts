import {exec} from 'child_process';
import {Compiler} from 'webpack';

export class ChmodPlugin {
    apply(compiler: Compiler) {
        compiler.hooks.done.tap('chmod plugin', () => {
            exec(`chmod -Rc o+rX ${__dirname}`, (err) => {
                if (err) throw err;
                console.log('Changed permissions');
            });
        });
    }
}

export class FengariPlugin {
    apply(compiler: Compiler) {
        compiler.hooks.done.tap('fengari', () => {
            exec(`wget -O ${__dirname}/public/js/fengari-web.js https://raw.githubusercontent.com/ctrlo/GADS/dev/public/js/fengari-web.js`, (err) => {
                if (err) throw err;
                console.log('Downloaded fengari-web.js');
            });
        });
    }
}

export class JestPlugin {
    apply(compiler: Compiler) {
        compiler.hooks.beforeCompile.tapAsync('jestPlugin', (_, callback) => {
            exec('yarn jest --config=jest.config.js --color=false', (err) => {
                if (err) throw err;
                console.log('Jest tests complete and passed');
            });
            callback();
        })
    }
}
