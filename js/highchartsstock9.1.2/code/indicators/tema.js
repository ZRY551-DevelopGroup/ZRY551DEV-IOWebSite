/*
 Highstock JS v9.1.2 (2021-06-16)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Rafal Sebestjanski

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/tema",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,k,d,h){a.hasOwnProperty(k)||(a[k]=h.apply(null,d))}a=a?a._modules:{};b(a,"Mixins/IndicatorRequired.js",[a["Core/Utilities.js"]],function(a){var k=a.error;return{isParentLoaded:function(a,
h,m,b,r){if(a)return b?b(a):!0;k(r||this.generateMessage(m,h));return!1},generateMessage:function(a,b){return'Error: "'+a+'" indicator type requires "'+b+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});b(a,"Stock/Indicators/TEMA/TEMAIndicator.js",[a["Mixins/IndicatorRequired.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b,d){var h=this&&this.__extends||function(){var a=function(b,g){a=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(a,c){a.__proto__=c}||function(a,c){for(var g in c)c.hasOwnProperty(g)&&(a[g]=c[g])};return a(b,g)};return function(b,g){function l(){this.constructor=b}a(b,g);b.prototype=null===g?Object.create(g):(l.prototype=g.prototype,new l)}}(),m=b.seriesTypes.ema,k=d.correctFloat,r=d.isArray,t=d.merge;d=function(b){function d(){var a=null!==b&&b.apply(this,arguments)||this;a.EMApercent=void 0;a.data=void 0;a.options=void 0;a.points=void 0;return a}h(d,b);d.prototype.init=function(){var b=arguments,
l=this;a.isParentLoaded(m,"ema",l.type,function(a){a.prototype.init.apply(l,b)})};d.prototype.getEMA=function(a,b,c,d,k,h){return m.prototype.calculateEma(h||[],a,"undefined"===typeof k?1:k,this.EMApercent,b,"undefined"===typeof d?-1:d,c)};d.prototype.getTemaPoint=function(a,b,c,d){return[a[d-3],k(3*c.level1-3*c.level2+c.level3)]};d.prototype.getValues=function(a,b){var c=b.period,d=2*c,g=3*c,k=a.xData,h=(a=a.yData)?a.length:0,l=-1,v=[],w=[],x=[],p=[],u=[],f,q,e={};this.EMApercent=2/(c+1);if(!(h<
3*c-2)){r(a[0])&&(l=b.index?b.index:0);b=m.prototype.accumulatePeriodPoints(c,l,a);var n=b/c;b=0;for(f=c;f<h+3;f++){f<h+1&&(e.level1=this.getEMA(a,t,n,l,f)[1],p.push(e.level1));var t=e.level1;if(f<d)b+=e.level1;else{f===d&&(n=b/c,b=0);e.level1=p[f-c-1];e.level2=this.getEMA([e.level1],y,n)[1];u.push(e.level2);var y=e.level2;if(f<g)b+=e.level2;else{f===g&&(n=b/c);f===h+1&&(e.level1=p[f-c-1],e.level2=this.getEMA([e.level1],y,n)[1],u.push(e.level2));e.level1=p[f-c-2];e.level2=u[f-2*c-1];e.level3=this.getEMA([e.level2],
e.prevLevel3,n)[1];if(q=this.getTemaPoint(k,g,e,f))v.push(q),w.push(q[0]),x.push(q[1]);e.prevLevel3=e.level3}}}return{values:v,xData:w,yData:x}}};d.defaultOptions=t(m.defaultOptions);return d}(m);b.registerSeriesType("tema",d);"";return d});b(a,"masters/indicators/tema.src.js",[],function(){})});
//# sourceMappingURL=tema.js.map