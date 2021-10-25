(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(43),o=a.n(r),n=a(9),i=a(42),s=a(62),l=a(63),u=a(29),d=a.n(u),f=a(35),p=a(6),j="SET_CITY",b="SET_WEATHER",h="CHANGE_TEMP_SCALE",O="CHANGE_FORECAST_MODE",m=function(){var e=Object(f.a)(d.a.mark((function e(t,a){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.weatherapi.com/v1/forecast.json?key=bec0a55c5686475981d152146211810&q=".concat(t,"&days=").concat(a,"&aqi=no&alerts=no"));case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}(),x=m,y=function(e){return{type:j,payload:e}},g=function(e){return{type:b,payload:e}},v=function(e){return{type:h,payload:e}},F={location:"",responseLocation:"",country:"",temp_c:"",temp_f:"",condition:"",wind:"",pressure:"",humidity:"",code:"",isDay:"",tempScale:"celsius",hourlyForecast:[],threeDayForecast:[],forecastMod:"threeDay"};var S=a(12),_="ADD_TO_FAVORITES",w="REMOVE_FROM_FAVORITES",C="GET_CITIES",D="UPDATE_TEMP",N=function(e){return{type:D,payload:e}},k={arrOfCities:[]};var T=function(e){return function(t){B.dispatch(function(e){return{type:_,payload:e}}(e))}},M=function(e){return function(t){B.dispatch(function(e){return{type:w,payload:e}}(e))}},I=Object(l.composeWithDevTools)(Object(i.applyMiddleware)(s.a)),E=Object(i.combineReducers)({cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(p.a)(Object(p.a)({},e),{},{arrOfCities:[].concat(Object(S.a)(e.arrOfCities),[{city:t.payload.city,temp_c:t.payload.temp_c,temp_f:t.payload.temp_f,lastUpdated:t.payload.lastUpdated}])});case w:return Object(p.a)(Object(p.a)({},e),{},{arrOfCities:e.arrOfCities.filter((function(e){return e.city!==t.payload}))});case C:return Object(p.a)(Object(p.a)({},e),{},{arrOfCities:t.payload});case D:return Object(p.a)(Object(p.a)({},e),{},{arrOfCities:e.arrOfCities.map((function(e){return e.city===t.payload.location.name.toLowerCase()?Object(p.a)(Object(p.a)({},e),{},{temp_c:t.payload.current.temp_c.toFixed(),temp_f:t.payload.current.temp_f.toFixed(),lastUpdated:Date.now()}):e}))});default:return e}},weatherData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(p.a)(Object(p.a)({},e),{},{location:t.payload.toLowerCase()});case b:return Object(p.a)(Object(p.a)({},e),{},{responseLocation:t.payload.location.name,country:t.payload.location.country,temp_c:t.payload.current.temp_c.toFixed(),temp_f:t.payload.current.temp_f.toFixed(),condition:t.payload.current.condition.text.toLowerCase(),wind:t.payload.current.wind_kph,pressure:t.payload.current.pressure_mb,humidity:t.payload.current.humidity,code:t.payload.current.condition.code,isDay:t.payload.current.is_day,hourlyForecast:t.payload.forecast.forecastday[0].hour.map((function(e){return{temp_c:e.temp_c,temp_f:e.temp_f}})),threeDayForecast:t.payload.forecast.forecastday.map((function(e){return{date:e.date_epoch,temp_c:e.day.avgtemp_c,temp_f:e.day.avgtemp_f}}))});case h:return Object(p.a)(Object(p.a)({},e),{},{tempScale:t.payload});case O:return Object(p.a)(Object(p.a)({},e),{},{forecastMod:t.payload});default:return e}}}),B=Object(i.createStore)(E,I),W=a(14),L=a(65),A=a.n(L),R=(a(87),a(10));var z=function(e,t){var a=Object(c.useState)(e),r=Object(R.a)(a,2),o=r[0],n=r[1];return Object(c.useEffect)((function(){var a=setTimeout((function(){return n(e)}),t);return function(){return clearTimeout(a)}}),[t,e]),o},H=a(1),U=Object(n.b)((function(e){return{location:e.weatherData.location,favoriteCities:e.weatherData.favoriteCities}}),(function(e){return{onChange:function(t){e(y(t.target.value))}}}))((function(e){Object(c.useEffect)((function(){localStorage.getItem("location")&&""===e.location&&B.dispatch(y(localStorage.getItem("location")))}),[]),Object(c.useEffect)((function(){return function(){localStorage.setItem("location",e.location)}}),[]);var t=z(e.location.trim(),700),a=Object(c.useCallback)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return function(){var a=Object(f.a)(d.a.mark((function a(c){var r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,x(e,t);case 3:r=a.sent,B.dispatch(g(r)),localStorage.setItem("location",r.location.name),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.error(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t),[t]);return Object(c.useEffect)((function(){t&&a()}),[t,a]),Object(H.jsxs)("div",{className:"search",children:[Object(H.jsx)("h1",{children:"Right now in"}),Object(H.jsx)(A.a,{type:"text",minWidth:"70",inputStyle:{fontSize:35,fontWeight:600,display:"block"},value:e.location,onChange:function(t){return e.onChange(t)}})]})})),J=a(116),G=a(117),P=a(119),V=function(e){return Object(H.jsx)(P.a,Object(p.a)(Object(p.a)({},e),{},{icon:Object(H.jsx)(J.a,{}),checkedIcon:Object(H.jsx)(G.a,{}),size:"large",sx:{color:"white","&.Mui-checked":{color:"white"},"&.Mui-disabled":{color:"transparent"}}}))},q=Object(n.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation,temp_c:e.weatherData.temp_c,temp_f:e.weatherData.temp_f,cities:e.cities.arrOfCities}}),(function(e){return{addToFavorites:function(t){e(T(t))},removeFromFavorites:function(t){e(M(t))}}}))((function(e){var t=Object(c.useState)(e.cities.find((function(t){return t.city===e.location}))),a=Object(R.a)(t,2),r=a[0],o=a[1],n=Object(c.useState)(!1),i=Object(R.a)(n,2),s=i[0],l=i[1];return Object(c.useEffect)((function(){o(e.cities.find((function(t){return t.city===e.location})))}),[e.location]),Object(c.useEffect)((function(){e.location&&e.location===e.responseLocation.toLowerCase()?l(!1):l(!0)}),[e.location,e.responseLocation]),Object(c.useEffect)((function(){localStorage.setItem("cities",JSON.stringify(e.cities))}),[e.cities]),Object(H.jsx)(V,{onClick:function(){r?(e.removeFromFavorites(e.location),o(!r)):(e.addToFavorites({city:e.location,temp_c:e.temp_c,temp_f:e.temp_f,lastUpdated:Date.now()}),o(!r))},disabled:s,checked:!!r})})),Y=a(122),X=a(69),Z=a.n(X),K=function(){return Object(H.jsx)(Y.a,{size:"large",sx:{color:"white"},children:Object(H.jsx)(Z.a,{fontSize:"large"})})},Q=a(19),$=a(37),ee=a(123),te=["children"],ae=function(e){var t=e.children,a=Object($.a)(e,te);return Object(H.jsx)(ee.a,Object(p.a)(Object(p.a)({},a),{},{variant:"outlined",fullWidth:!0,children:t}))},ce=["children"],re=function(e){var t=e.children,a=Object($.a)(e,ce);return Object(H.jsx)(ae,Object(p.a)(Object(p.a)({},a),{},{sx:{marginTop:"20px",borderRadius:"40px",boxShadow:"0px 1px 1px 0px #00000026"},children:t}))},oe=(a(54),Object(n.b)((function(e){return{code:e.weatherData.code,isDay:e.weatherData.isDay}}))((function(e){var t="day";e.isDay||(t="night");var a="".concat("/SimpleWeather","/assets/icons/").concat(t,"/").concat(e.code,".svg");return Object(H.jsx)("div",{className:"weather__icon",children:Object(H.jsx)("img",{src:a,className:"weather__icon",alt:"icon of weather"})})}))),ne=Object(n.b)((function(e){return{tempScale:e.weatherData.tempScale,temp_c:e.weatherData.temp_c,temp_f:e.weatherData.temp_f}}))((function(e){return"celsius"===e.tempScale?Object(H.jsx)("h1",{className:"celsius",children:e.temp_c}):Object(H.jsx)("h1",{className:"fahrenheit",children:e.temp_f})})),ie=Object(n.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation,condition:e.weatherData.condition}}))((function(e){return Object(H.jsxs)("div",{className:"condition",children:["it's ",e.condition]})})),se=Object(n.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation,wind:e.weatherData.wind,pressure:e.weatherData.pressure,humidity:e.weatherData.humidity}}))((function(e){var t=(1e3*e.wind/3600).toFixed(1),a=(.750063755419211*e.pressure).toFixed();return Object(H.jsxs)("div",{children:[Object(H.jsx)(ie,{}),Object(H.jsxs)("div",{className:"weather grid",children:[Object(H.jsx)(oe,{}),Object(H.jsx)("div",{className:"weather__temp",children:Object(H.jsx)(ne,{className:"weather__temp-scale"})}),Object(H.jsxs)("div",{className:"flex weather__properties",children:[Object(H.jsxs)("div",{className:"properties__value",children:[t,Object(H.jsx)("span",{children:"m/s"})]}),Object(H.jsxs)("div",{className:"properties__value",children:[a,Object(H.jsx)("span",{children:"mm Hg"})]}),Object(H.jsxs)("div",{className:"properties__value",children:[e.humidity,Object(H.jsx)("span",{children:"%"})]})]})]})]})})),le=Object(n.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation}}))((function(e){return e.responseLocation&&e.location===e.responseLocation.toLowerCase()?Object(H.jsx)("div",{children:Object(H.jsxs)("div",{className:"app",children:[Object(H.jsx)(q,{}),Object(H.jsx)(Q.b,{to:"/SimpleWeather/cities",className:"app__list-button",children:Object(H.jsx)(K,{})}),Object(H.jsx)(U,{}),Object(H.jsx)(se,{}),Object(H.jsx)(Q.b,{to:"/SimpleWeather/forecast",children:Object(H.jsx)(re,{children:"Show me the forecast"})})]})}):Object(H.jsx)("div",{children:Object(H.jsxs)("div",{className:"app",children:[Object(H.jsx)(q,{}),Object(H.jsx)(Q.b,{to:"/SimpleWeather/cities",className:"app__list-button",children:Object(H.jsx)(K,{})}),Object(H.jsx)(U,{})]})})})),ue=a(21),de=Object(ue.a)(),fe=(a(91),a(71)),pe=a.n(fe),je=function(e){return Object(H.jsx)(Y.a,Object(p.a)(Object(p.a)({size:"large"},e),{},{children:Object(H.jsx)(pe.a,{fontSize:"large"})}))},be=function(){return Object(H.jsx)(Q.b,{to:"/SimpleWeather",className:"cities-page__back-btn",children:Object(H.jsx)(je,{sx:{color:"#2D81FF","&.MuiIconButton-root:hover":{backgroundColor:"rgba(45, 129, 255, 0.02)"}}})})},he=(a(92),Object(n.b)((function(e){return{cities:e.cities.arrOfCities,tempScale:e.weatherData.tempScale}}),(function(e){return{updateCityInStore:function(t){e(y(t))}}}))((function(e){var t=Object(W.g)();return e.cities.length>0?Object(H.jsxs)("div",{className:"flex cities-list",children:[Object(H.jsx)("div",{className:"blue-line"}),Object(H.jsx)("div",{className:"cities",children:e.cities.map((function(a){return Object(H.jsxs)("button",{onClick:function(){t.push("/SimpleWeather/cities/".concat(a.city)),e.updateCityInStore(a.city)},className:"cities__btn",children:[Object(H.jsx)("div",{children:a.city}),Object(H.jsxs)("div",{children:["celsius"===e.tempScale?a.temp_c:a.temp_f,"\xb0"]})]},a.city)}))})]}):Object(H.jsxs)("div",{className:"flex cities-list",children:[Object(H.jsx)("div",{className:"blue-line"}),Object(H.jsxs)("div",{className:"cities-empty",children:[Object(H.jsx)("p",{children:"Oops!"}),Object(H.jsx)("p",{children:"You haven't added any city yet!"})]}),Object(H.jsx)("div",{className:"blue-line"})]})}))),Oe=a(121),me=a(124),xe=Object(n.b)((function(e){return{tempScale:e.weatherData.tempScale}}),(function(e){return{changeTempScale:function(t){e(v(t))}}}))((function(e){localStorage.getItem("tempScale")||localStorage.setItem("tempScale","celsius");var t=Object(c.useState)(localStorage.getItem("tempScale")),a=Object(R.a)(t,2),r=a[0],o=a[1];return Object(H.jsxs)(Oe.a,{color:"secondary",value:r,exclusive:!0,fullWidth:!0,sx:{height:"20px"},onChange:function(){"celsius"===r?(o("fahrenheit"),e.changeTempScale("fahrenheit"),localStorage.setItem("tempScale","fahrenheit")):(o("celsius"),e.changeTempScale("celsius"),localStorage.setItem("tempScale","celsius"))},children:[Object(H.jsx)(me.a,{value:"fahrenheit",sx:{"&.MuiToggleButton-root":{borderRadius:"20px",backgroundColor:"transparent",borderColor:"#F9FBFF",color:"#2d81ff",textTransform:"capitalize"},"&.Mui-selected":{backgroundColor:"#6BA6FF",borderColor:"#6BA6FF",color:"#ffffff"},"&.Mui-selected:hover":{backgroundColor:"#5096ff",color:"#ffffff"}},children:"Fahrenheit"}),Object(H.jsx)(me.a,{value:"celsius",sx:{"&.MuiToggleButton-root":{borderRadius:"20px",backgroundColor:"transparent",borderColor:"#F9FBFF",color:"#2d81ff",textTransform:"capitalize"},"&.Mui-selected":{backgroundColor:"#6BA6FF",borderColor:"#6BA6FF",color:"#ffffff"},"&.Mui-selected:hover":{backgroundColor:"#5096ff",color:"#ffffff"}},children:"Celsius"})]})})),ye=Object(n.b)((function(e){return{cities:e.cities.arrOfCities}}),(function(e){return{fetchCityTemp:function(t){e(function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e);case 3:c=t.sent,B.dispatch(N(c)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Date.now();return Object(c.useEffect)((function(){e.cities.forEach((function(a){t-a.lastUpdated>9e4&&e.fetchCityTemp(a.city),localStorage.setItem("cities",JSON.stringify(e.cities))}))}),[]),Object(H.jsxs)("div",{className:"app app-outlined cities-page",children:[Object(H.jsx)(be,{}),Object(H.jsxs)("div",{className:"cities-page__list",children:[Object(H.jsx)("h1",{className:"cities-page-header",children:"Favorite cities"}),Object(H.jsx)(he,{})]}),Object(H.jsxs)("div",{className:"cities-page__settings",children:[Object(H.jsx)("h1",{className:"cities-page-header",children:"Settings"}),Object(H.jsx)(xe,{})]})]})})),ge=Object(n.b)((function(e){return{location:e.weatherData.location}}))((function(e){var t=Object(W.h)(),a=Object(W.g)();return Object(c.useEffect)((function(){e.location!==t.city&&a.push("/SimpleWeather")}),[e.location]),Object(H.jsx)("div",{children:Object(H.jsxs)("div",{className:"app",children:[Object(H.jsx)(q,{}),Object(H.jsx)(Q.b,{to:"/SimpleWeather/cities",className:"app__list-button",children:Object(H.jsx)(K,{})}),Object(H.jsx)(U,{}),Object(H.jsx)(se,{}),Object(H.jsx)(Q.b,{to:"/SimpleWeather/forecast",children:Object(H.jsx)(re,{children:"Show me the forecast"})})]})})})),ve=["children"],Fe=function(e){var t=e.children,a=Object($.a)(e,ve);return Object(H.jsx)(ae,Object(p.a)(Object(p.a)({},a),{},{sx:{color:"#2d81ff",borderColor:"#2d81ff",borderRadius:"40px",boxShadow:"0px 1px 1px 0px #00000026","&.MuiButton-root:hover":{borderColor:"#08C8F6",color:"#08C8F6"}},children:t}))},Se=a(73),_e=a(72),we=a.n(_e),Ce=(a(96),Object(n.b)((function(e){return{forecastMod:e.weatherData.forecastMod,tempScale:e.weatherData.tempScale,hourlyForecast:e.weatherData.hourlyForecast,threeDay:e.weatherData.threeDayForecast}}))((function(e){var t={labels:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],datasets:[{label:"Hourly forecast",data:"celsius"===e.tempScale?e.hourlyForecast.map((function(e){return e.temp_c})):e.hourlyForecast.map((function(e){return e.temp_f})),backgroundColor:"#2D81FF",borderColor:"#2D81FF",color:"#F9FBFF",tension:.2,pointRadius:0,fill:{target:"origin",above:"rgba(249, 251, 255, 0.5)",below:"#F9FBFF"}}]},a={labels:e.threeDay.map((function(e){return we()(e.date,"X").format("dddd")})),datasets:[{label:"three-days forecast",data:"celsius"===e.tempScale?e.threeDay.map((function(e){return e.temp_c})):e.threeDay.map((function(e){return e.temp_f})),backgroundColor:"#2D81FF",borderColor:"#2D81FF",color:"#F9FBFF",tension:.2,pointRadius:0,fill:{target:"origin",above:"rgba(249, 251, 255, 0.5)",below:"#F9FBFF"}}]};return Object(H.jsx)("div",{className:"forecast-graph",children:Object(H.jsx)(Se.a,{width:580,height:280,data:"threeDay"===e.forecastMod?a:t,options:{chart:{default:{borderColor:"#fff"}},scales:{y:{beginAtZero:!0,grid:{display:!1,drawBorder:!1},ticks:{color:"#2D81FF",callback:function(e,t,a){return e+"\xb0"}},title:{display:!0,text:"Temperature",color:"#2D81FF",font:"Roboto"}},x:{grid:{display:!1,borderColor:"#2D81FF"},ticks:{color:"#2D81FF"}}},plugins:{legend:{display:!1,labels:{font:{color:"#F9FBFF",family:"'Roboto', sans-serif"}}}}}})})}))),De=(a(97),Object(n.b)((function(e){return{forecastMod:e.weatherData.forecastMod}}),(function(e){return{changeForecastMod:function(t){e({type:O,payload:t})}}}))((function(e){localStorage.getItem("forecastScale")||localStorage.setItem("forecastScale","threeDay");var t=Object(c.useState)(localStorage.getItem("forecastScale")),a=Object(R.a)(t,2),r=a[0],o=a[1];return Object(H.jsx)("div",{className:"forecast-toggle-wrapper",children:Object(H.jsxs)(Oe.a,{color:"secondary",value:r,exclusive:!0,sx:{height:"20px"},fullWidth:!0,className:"forecast-toggle",onChange:function(){"threeDay"===r?(o("hourly"),e.changeForecastMod("hourly"),localStorage.setItem("forecastScale","hourly")):(o("threeDay"),e.changeForecastMod("threeDay"),localStorage.setItem("forecastScale","threeDay"))},children:[Object(H.jsx)(me.a,{value:"hourly",sx:{"&.MuiToggleButton-root":{borderRadius:"20px",backgroundColor:"transparent",borderColor:"#F9FBFF",color:"#2d81ff",textTransform:"capitalize"},"&.Mui-selected":{backgroundColor:"#6BA6FF",borderColor:"#6BA6FF",color:"#ffffff"},"&.Mui-selected:hover":{backgroundColor:"#5096ff",color:"#ffffff"}},children:"Hourly"}),Object(H.jsx)(me.a,{value:"threeDay",sx:{"&.MuiToggleButton-root":{borderRadius:"20px",backgroundColor:"transparent",borderColor:"#F9FBFF",color:"#2d81ff",textTransform:"capitalize"},"&.Mui-selected":{backgroundColor:"#6BA6FF",borderColor:"#6BA6FF",color:"#ffffff"},"&.Mui-selected:hover":{backgroundColor:"#5096ff",color:"#ffffff"}},children:"Three-day"})]})})}))),Ne=function(){return Object(H.jsxs)("div",{className:"app app-outlined",children:[Object(H.jsx)(Q.b,{to:"/SimpleWeather/",children:Object(H.jsx)(Fe,{children:"Back to home page"})}),Object(H.jsx)(Ce,{className:"forecast-graph"}),Object(H.jsx)(De,{})]})},ke=function(){return Object(H.jsx)(W.c,{history:de,children:Object(H.jsxs)(W.d,{children:[Object(H.jsx)(W.b,{exact:!0,path:"/SimpleWeather",children:Object(H.jsx)(le,{})}),Object(H.jsx)(W.b,{exact:!0,path:"/SimpleWeather/cities",children:Object(H.jsx)(ye,{})}),Object(H.jsx)(W.b,{exact:!0,path:"/SimpleWeather/cities/:city",children:Object(H.jsx)(ge,{})}),Object(H.jsx)(W.b,{exact:!0,path:"/SimpleWeather/forecast",children:Object(H.jsx)(Ne,{})}),Object(H.jsx)(W.a,{to:"/SimpleWeather"})]})})},Te=(a(98),a(99),a(74)),Me=a(18);if(localStorage.getItem("cities")){var Ie=localStorage.getItem("cities"),Ee=JSON.parse(Ie);B.dispatch({type:C,payload:Ee})}else localStorage.setItem("cities","[]");localStorage.getItem("tempScale")&&B.dispatch(v(localStorage.getItem("tempScale")));var Be=Object(Te.a)({palette:{primary:{main:"#ffffff",darker:"#ffffff"},secondary:{main:"#2d81ff",darker:"#2d81ff"}}}),We=document.getElementById("root");o.a.render(Object(H.jsx)(n.a,{store:B,children:Object(H.jsx)(Me.c,{theme:Be,children:Object(H.jsx)(Q.a,{basename:"/SimpleWeather",children:Object(H.jsx)(ke,{})})})}),We)},54:function(e,t,a){},87:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.2776014f.chunk.js.map