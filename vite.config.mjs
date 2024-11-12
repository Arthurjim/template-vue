import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import svgLoader from 'vite-svg-loader'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    visualizer({
      filename: './dist/stats.html',
      open: true
    }),
    vue(),
    VitePWA({
      base: '/',
      srcDir: 'src',
      filename: 'sw.ts',
      includeAssets: ['/crown.svg'],
      strategies: 'injectManifest',
      manifest: {
        name: 'Template Palace',
        short_name: 'Template Palace',
        theme_color: '#fff',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        icons: [
          {
            src: 'crown.svg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'crown.svg',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'crown.svg',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024
      }
    }),
    svgLoader({
      defaultImport: 'url'
    })
  ],
  define: {
    __VUE_I18N_FULL_INSTALL__: 'false',
    __VUE_I18N_LEGACY_API__: 'false',
    __INTLIFY_PROD_DEVTOOLS__: 'false'
  },
  resolve: {
    alias: {
      '@src': '/src',
      '@stores': '/src/stores',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@composables': '/src/composables',
      '@views': '/src/views',
      '@modules': '/src/modules',
      '@layouts': '/src/layouts',
      '@utils': '/src/utils',
      '@plugins': '/src/plugins',
      '@dependencies': '/src/dependencies'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    target: ['chrome89', 'firefox89', 'safari15', 'edge89'],
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'aws-amplify': ['aws-amplify'],
          vendor: ['vue', 'vue-router']
        }
      }
    }
  }
})
