import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

/**
 * https://juejin.cn/post/7203169721839042615?searchId=20240109025802CA2803BCAA27734921F4
 */

// console.log('================', process.env)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // define: {
  //   'process.env': {}
  // },

  css: {
    // 禁用将样式提取到单独文件
    // extract: false,
  },

  build: {
    // 禁用将样式提取到单独文件
    cssCodeSplit: false,
    lib: {
      entry: './src/main.tsx',
      name: 'MyLibrary',
      fileName: 'my-library'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      // external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // Indicate which modules should be treated as external
        // https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
        externalLiveBindings: false,
        // Provide a global name for your UMD build
        name: 'my-library',
        format: 'umd'
      }
    }
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  }
})
