import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// element-plus auto import  related
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

import viteCompression from 'vite-plugin-compression'

import viteImagemin from 'vite-plugin-imagemin'

const pathSrc = fileURLToPath(new URL('./src', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // createSvgIconsPlugin({
    //   // 指定目录(svg存放目录）
    //   iconDirs: [path.resolve(pathSrc, "assets/svgs")],
    //   svgoOptions: true,
    //   // 使用 svg 图标的格式（name为图片名称）
    //   symbolId: "icon-[name]",
    //   //生成组件插入位置 只有两个值 boby-last | body-first
    //   inject: 'body-last',
    // }),

    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      imports: ['vue'],
      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        IconsResolver({
          prefix: 'icon'
        })
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts')
    }),
    Components({
      resolvers: [
        // Auto register icon components
        IconsResolver({
          enabledCollections: ['ep']
        }),
        // Auto register Element Plus components
        ElementPlusResolver()
      ],
      dts: path.resolve(pathSrc, 'components.d.ts')
    }),

    viteCompression({
      verbose: true,
      disable: false,
      algorithm: 'gzip',
      ext: '.gz'
    }),

    Icons({
      autoInstall: true
    }),
    viteImagemin({
      verbose: true,
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          // {
          //   name: 'removeViewBox'
          // },
          {
            name: 'removeEmptyAttrs',
            active: false
          },
          {
            name: 'removeAttrs',
            params: {
              attrs: '(fill|stroke):(?!none)'
            }
          },
          'removeDoctype',
          'removeXMLProcInst',
          'removeComments',
          'removeMetadata',
          'removeDesc',
          'removeUselessDefs',
          'removeEditorsNSData',
          'removeEmptyAttrs',
          'removeHiddenElems',
          'removeEmptyText',
          'removeEmptyContainers',
          'removeStyleElement',
          'removeUnknownsAndDefaults',
          'removeNonInheritableGroupAttrs',
          'removeUselessStrokeAndFill',
          'removeUnusedNS',
          'cleanupIDs',
          'cleanupEnableBackground',
          'cleanupListOfValues',
          'mergePaths',
          'convertStyleToAttrs',
          'convertColors',
          'cleanupNumericValues',
          'sortAttrs'
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
          if (id.includes('svg')) {
            return 'svg-icons'
          }
        }
      }
    },
    target: 'es2015', // 根据目标浏览器设置不同的ECMAScript目标版本
    terserOptions: {
      compress: {
        drop_console: true, // 移除console语句
        drop_debugger: true // 移除debugger语句
      },
      output: {
        comments: false // 移除注释
      }
    }
  },
  server: {
    host: '0.0.0.0',
    hmr: true,
    strictPort: false,
    open: 'http://localhost:5173/home',
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
