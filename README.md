E-library front-end (React.js)
====
author: Jacky Zhang  Email:jackyzh0614@gmail.come  github: https://github.com/Fanz0614

Technology stack
----------

| what   | how   |
| ---------- | :-----------:  | 
| React    | Create components    |
| Redux     | Manage Data    |
| React-redux     | Easy to use Redux     |
| Redux-thunk     | Let the store have the ability to receive functions for asynchronous data acquisition and complex logic     |
| immutable.js     | Ensure the Redux state cannot be changed    |
| react-router    | Ruiter    |
| styled-components    | css module    |
| react-transition-group    | css animation     |
| react-loadable     | Implement asynchronous components     |

Run project
-----------
git clone https://github.com/Fanz0614/E-library-frontend.git <br>
cd E-library-frontend <br>
npm install <br>
npm start <br>

What I do 
---------
1. Home page layout 
2. Search bar animation and recommendations at the top of the page
3. Header: login and logout
4. login page layout
5. Jump to article details(same article but different ajax request,need real API from backend)<br>
PS:All mock data can be found in Public/API

Screen shot
-----------
![Alt text](https://raw.githubusercontent.com/Fanz0614/pic/master/1.PNG)
![Alt text](https://raw.githubusercontent.com/Fanz0614/pic/master/2.PNG)
![Alt text](https://raw.githubusercontent.com/Fanz0614/pic/master/3.PNG)

structure
------------
│  App.js                         
│  index.js                       
│  style.js                       
├─store   
|      index.js                  
|      reducer.js                 
|
├─common                     
│  ├─header                       
│  │  │  index.js                
│  │  │
│  │  └─stroe                     
│  │          actionCreators.js            
│  │          reducer.js         
│  │
│  └─Statics                   
│      │               
│      │
│      ├─logo.png       
│      │
│      └─iconfont                   
│              iconfont.eot
│              iconfont.js
│              iconfont.svg
│              iconfont.ttf
|              iconfont.woff
│
├─pages                         
│  │
│  ├─detail                       
│  │  │  index.js                            
│  │  │  style.js
│  │  │
│  │  └─store
│  │          actionCreators.js
│  │          reducer.js
│  │
│  ├─login                        
│  │  │  index.js
│  │  │  style.js
│  │  │
│  │  └─store
│  │          actionCreators.js
│  │          reducer.js
│  │
│  └─home                      
│     | index.js
|     | style.js
|     |
|     | components
|     |           List.js
|     |           Recommend.js
|     |           Writer.js
|     |
|     | store
|     |      actioncreators.js
|     |      reducer.js
│
└─public        
      |
      |
      |API
         body.json
         changelist.json
         detail.json
         headerList.json
         login.json
         
