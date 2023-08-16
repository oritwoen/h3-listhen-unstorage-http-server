module.exports = {
  apps: [
    {
      name: 'unstorage HTTP Server',
      port: '3000',
      script: './app.mjs',
      max_memory_restart: '512M'
    }
  ]
}