### React18基础搭建

##### 工具地址
```
https://developer.aliyun.com/article/1266624

https://www.bilibili.com/video/BV1FV4y157Zx/?p=3&spm_id_from=pageDriver&vd_source=0b9abcde1e0c06aa453d51487fc56291
```

##### 安装依赖|启动|打包
```text
pnpm install

npm run dev
   --host 启用Network
   --port 端口
   --open 启动打开浏览器
 
npm run build
```

##### 配置别名
```
pnpm install @types/node -D

vite.config.ts
resolve: {
   alias: {
      "@": path.resolve(__dirname, 'src')
   }
}

tsconfig.json
compilerOptions: {
   ...
   "baseUrl": "./",
   "paths": {
   "@/*": ["src/*"]
   }
}
```

##### 模块化CSS
```jsx
// pnpm insatll sass -D
// css 必须以 .module.scss

import $styles from './index.module.scss';

const Comp1 = () => {
  return (
    <div className={$styles.box}>
      Comp1
    </div>
  )
}

export default Comp1;
```