import{e as l,n as o,V as c}from"./test1.990751a6.js";var d=function(){function x(){}return x.extractMinAndMaxIndexed=function(u,a,r,n,e,m){for(var t=r;t<r+n;t++){var A=a[t]*3,M=u[A],v=u[A+1],y=u[A+2];e.minimizeInPlaceFromFloats(M,v,y),m.maximizeInPlaceFromFloats(M,v,y)}},x.extractMinAndMax=function(u,a,r,n,e,m){for(var t=a,A=a*n;t<a+r;t++,A+=n){var M=u[A],v=u[A+1],y=u[A+2];e.minimizeInPlaceFromFloats(M,v,y),m.maximizeInPlaceFromFloats(M,v,y)}},l([o.filter(function(){for(var u=[],a=0;a<arguments.length;a++)u[a]=arguments[a];var r=u[0],n=u[1];return!Array.isArray(r)&&!Array.isArray(n)})],x,"extractMinAndMaxIndexed",null),l([o.filter(function(){for(var u=[],a=0;a<arguments.length;a++)u[a]=arguments[a];var r=u[0];return!Array.isArray(r)})],x,"extractMinAndMax",null),x}();function E(x,u,a,r,n){n===void 0&&(n=null);var e=new c(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),m=new c(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);return d.extractMinAndMaxIndexed(x,u,a,r,e,m),n&&(e.x-=e.x*n.x+n.y,e.y-=e.y*n.x+n.y,e.z-=e.z*n.x+n.y,m.x+=m.x*n.x+n.y,m.y+=m.y*n.x+n.y,m.z+=m.z*n.x+n.y),{minimum:e,maximum:m}}function L(x,u,a,r,n){r===void 0&&(r=null);var e=new c(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),m=new c(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);return n||(n=3),d.extractMinAndMax(x,u,a,n,e,m),r&&(e.x-=e.x*r.x+r.y,e.y-=e.y*r.x+r.y,e.z-=e.z*r.x+r.y,m.x+=m.x*r.x+r.y,m.y+=m.y*r.x+r.y,m.z+=m.z*r.x+r.y),{minimum:e,maximum:m}}export{E as a,L as e};
