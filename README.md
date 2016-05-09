# react-babel

## start
### install package
```
npm i
```
### install webpack with -g
```
npm i webpack -g
```
### start build and launch server
```
npm start
```

## フロントのファイル構成（wip）
- front
  - components
    - xxx.jsx
      - コンポーネント
      - functionで作ってる
  - containers
    - ページコンポーネント
  - domain
    - middleware
      - network.js
        - ここでapi叩くっぽい
        - 今は仮のデータが入ってる
      - routes.js
        - page.js使ってる
    - store
      - selectors.js
        - immutable.js使ってる
        - pageTypeもココ
        - storeのgetしてるfunction作ってるから
          selectors.xxxxで欲しいstoreが取得できる
    - actions.js
      - actionTypesも入ってる
    - logger.js
      - js-logger使ってる
    - reducers.js
      - ここでswitchしてる
      - storeにsetしてる
    - app.js
      - store.dispatchしてる
        - actionもrouterも
      - renderはここだけ
      - store.subscribeしてる    Â

## respect
[Setting up React for ES6 with Webpack and Babel](https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html)
