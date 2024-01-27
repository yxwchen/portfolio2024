const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: 'src/js/main.js',
        map: 'src/js/map.js',
        project: 'src/project.html',
        resume: 'src/resume.html',
        oldProject: 'src/oldProject.html',
      },
    },
  },
  server: {
    port: 8080
  }
}