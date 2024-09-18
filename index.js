"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JestPlugin = exports.FengariPlugin = exports.ChmodPlugin = void 0;
const child_process_1 = require("child_process");
class ChmodPlugin {
    apply(compiler) {
        compiler.hooks.done.tap('chmod plugin', () => {
            (0, child_process_1.exec)(`chmod -Rc o+rX ${__dirname}`, (err) => {
                if (err)
                    throw err;
                console.log('Changed permissions');
            });
        });
    }
}
exports.ChmodPlugin = ChmodPlugin;
class FengariPlugin {
    apply(compiler) {
        compiler.hooks.done.tap('fengari', () => {
            (0, child_process_1.exec)(`wget -O ${__dirname}/public/js/fengari-web.js https://raw.githubusercontent.com/ctrlo/GADS/dev/public/js/fengari-web.js`, (err) => {
                if (err)
                    throw err;
                console.log('Downloaded fengari-web.js');
            });
        });
    }
}
exports.FengariPlugin = FengariPlugin;
class JestPlugin {
    apply(compiler) {
        compiler.hooks.beforeCompile.tapAsync('jestPlugin', (_, callback) => {
            (0, child_process_1.exec)('yarn jest --config=jest.config.js --color=false', (err) => {
                if (err)
                    throw err;
                console.log('Jest tests complete and passed');
            });
            callback();
        });
    }
}
exports.JestPlugin = JestPlugin;
