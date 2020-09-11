import { createGlobalStyle } from "styled-components"

//把globalstyle写成一个组件，在index文件中直接以组建的形式调用
//使用reset.css统一css默认值，一般开发项目都要去引用reset.css
const GlobalStyleFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1597456305809'); /* IE9 */
    src: url('./iconfont.eot?t=1597456305809#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUgAAsAAAAACgQAAATUAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDTgqGYIV3ATYCJAMcCxAABCAFhG0HZBvDCMgOJS1CkQBgAAVEBF/7ofvu7kMKTIokjyfUyBYQbX18I1zGR5WCulOZ//839cKrQlU3ZpZUXEnFIo+ULoEcwkQl6URMPi0/f8x0UTqwfPZtLl1B49F2d0AHFBVURAEyQD0AvgV2DnUwQQ8TGGGOvohtOUVV4KSQjgrEKV6vBiefXkmhhlZVx1xYxDOotOk+eQXAU/P3YwgioiWpMunE7UeydZDWS38oR6Nt1xzWMSCoz4rbZWSsAgpxJdZ+DrLjqyAjPlE728B3Ha0k9bq+i3nv9KHcZqOXBvGI7COMkf/Bo0iySi2ImiQfRcT9iZpeWkUUel0QiV5XRKY3BlHR54So6S8Xrpm8ocPHYDyIRNwB4qqbJEmRFWn8eP9gl1HjMr2htO3kkWs6rlYdvQt37lQRVdXE/fuqMfdY1psz+m656ti95x4w7MEGMCaubzKzr22kPR9uJny7CNji7zut3V/fHmv3qbJPs5S9Vl07un9h69271QUt9+41KFLW4nqjd+40W33ayJ5voaf5q9p5WadK1iZNNhV5pyFsn2p3aq9LFdWfrq2zdqA+BdSoD9PTwIgY0UVNvUaMUanGmL6k6j0bOlQ97TRBnKxmDxSpmCTskR039F1y17dKZbmfuFxpaHdHIteknE595e37qdYXrVPXBT/+3aPzx58jtbVPleZ0ctKePZPItFHSt9KO2v39a3e0PnPln7G+aVuuHSDOCTfPMddOjNa9szzdvrl6Y8xdvm8hyfcnGMfOLHhRUOeghVevRrnNn+nptq772sLAiCCwvV+ALl1CC2QOc7UON2PNJHLvXhIlk5iLYr5BLFTufL4IXj3vmudAzuuxenoKJ0THhbNjN0B319Xo0SNEmWsePVxtt8ZOPAGtQasfPVrzwoLOnyctMgcrLMiKzp1HFuTgX+ytjXh0sObRAejicm/2zLqJ3WyazHttKaXVZIaGT7lv9yflonw2TklUmxViL5Z3baQL0xLeNKnky4G+f2Ys/rl4Dnxd6VnXs/irfeDteGOTLnResjxwRJfduZO3z1UUba/tW9uSueOIK/HffgjMUlpOTiLWx574MoRYEpVRXAdDlzU3adJ51O3na68KdEXjM25uh/BHkAIw/AKtRAwgHyM/AAzfQXtQX5NuyycQYK8r4y7M9ZjwJi6u2T3pX0sX0NPYshPrhkcXyNfA1aWQW3AZCnJOlK9IMjTl3V9tEGhs8GRJGCHPcQG6J3hWn3MycK2hvQsQksZsyFqLsIW4CiojrYVaayOMsFLu5SNNJEGidGCFCQBhnO2QjPEDsnGuYgvxKVSm+Aq1cZFhhL3hfcORlsRxKlPCahnrGM0QhteKAqeYZMoqrcD6AQa15BWZNBZLZj7EhCvCgqlcLGCpjlPMA/URsswxnCQamRx4HDYYRMYkiW1YKytaZdmUoFRycV+k0IpGoGwlwdRkmA5DYwgGT0sk4PTFMir08xUwvQEM1KSUnh92FiYx47fPCKcQlgObKxdy9ezL7mYD6UWQyTg+jCMRGTFy0IoZ5LiIYYrfrw2mJVNoLRE1SaCkWVxeuaJ9pXE7b4ERpPdoIkWOElXU0USrXDTxgsNgXj1UzVNDW3lBLeg7YYHi1IJep27j4WwyXU2XYcE8ZIBRLWp4AA==') format('woff2'),
    url('./iconfont.woff?t=1597456305809') format('woff'),
    url('./iconfont.ttf?t=1597456305809') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1597456305809#iconfont') format('svg'); /* iOS 4.1- */
  }
 

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`

export default GlobalStyleFont;











