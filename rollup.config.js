import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';

import pkg from './package.json';


export default [{
    input:"src/index.ts",
    output:[{
        file:'dist/bundle.esm.js',
        fromat:'esm'
    }]
}]