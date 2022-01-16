# CONSUL DOCKER NODEJS
- [docker](https://github.com/apocas/dockerode) dockerode on /var/run/docker.sock
    - lista informações
    - builda imagens
    - cria e manipula containers, volume e rede
    - executa comandos em containers
- [consul](https://developpaper.com/node-js-consul-realize-service-registration-health-check-and-configuration-center/)
    - registro e catálogo de serviços
    - interconeção entre serviços
    - monitoramento de saúde do endpoint
    - dicionário chave-valor global

## DOCKERODE
```javascript
docker.buildImage({
  context: __dirname,
  src: ['Dockerfile', 'file1', 'file2']
}, {t: 'my_image_name'}, function (err, response) {
  //...
})
```
```javascript
docker.run(
  'my_image_name',
  ['npm', 'start'],
  process.stdout,
  {
    name: 'my-container-name',
    HostConfig: {
      AutoRemove: true,
      NetworkMode: "host"
    }
  },
  function(err, data, container) {
    // Do stuff
  }
);
```
```javascript
docker.run('ubuntu',
    ['bash', '-c', 'uname -a'],
    [process.stdout, process.stderr],
    {Tty:false},
    function (err, data, container) {
        console.log(data.StatusCode);
    }
);
```

## CONSUL
- `npm run consul`
- http://localhost:8500/
- inicialize a chave `quem` com qualquer valor

```javascript
consul.agent.service.register({
    name: serviceName,
    address: '192.168.20.193',
    port: 3000,
    check: {
        http: 'http://192.168.20.193:3000/health',
        interval: '10s',
        timeout: '5s',
    }
}, function(err, result) {
    if (err) {
        console.error(err);
        throw err;
    }

    Console.log (servicename + 'registered successfully! ).
})
```