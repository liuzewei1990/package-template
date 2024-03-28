# energy-ui

## 项目启动

```
node版本：14.17.1

npm i yarn -g

yarn

yarn dev

App running at:
- Local:   http://localhost:8080/
- Network: http://10.10.23.99:8080/
```

## 组件开发说明

- 遵循lerna monorepo开发思想，packages中为每个独立组件
- 组件包命名必须唯一，必须与package.json的name一致。例如：包名template-demo 与 @package/template-demo
- 组件包的第三方依赖必须安装到自己包的package.json的dependencies中，否则将打包时无法正确安装该依赖
- 组件包名称需要在package.json中的componentMeta中定义
