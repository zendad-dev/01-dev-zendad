import * as path from 'path';
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: false,
			env: {
				path: 'SOCKET_PATH',
				host: 'HOST',
				port: 'PORT',
				origin: 'ORIGIN',
				headers: {
					protocol: 'PROTOCOL_HEADER',
					host: 'HOST_HEADER'
				}
			}
		}),
		trailingSlash: 'always',
		vite: {
			plugins: [imagetools],
			resolve: {
				alias: {
					$img: path.resolve('src/images')
				}
			}
		}
	}
};

export default config;
