(()=>{var e={};e.id=188,e.ids=[188],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9268:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>h,routeModule:()=>d,serverHooks:()=>v,workAsyncStorage:()=>x,workUnitAsyncStorage:()=>l});var s={};t.r(s),t.d(s,{GET:()=>c});var n=t(96559),o=t(48088),u=t(37719),a=t(43205),i=t.n(a),p=t(32190);async function c(e){let r=e.cookies.get("token")?.value;if(!r)return new p.NextResponse("Unauthorized",{status:401});try{let e=i().verify(r,process.env.JWT_SECRET_KEY);return new p.NextResponse(JSON.stringify(e),{status:200})}catch(e){return new p.NextResponse("Invalid Token",{status:401})}}let d=new n.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/auth/route",pathname:"/api/auth",filename:"route",bundlePath:"app/api/auth/route"},resolvedPagePath:"/home/cordy/One_For_All_PHP/one_for_all/app/api/auth/route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:x,workUnitAsyncStorage:l,serverHooks:v}=d;function h(){return(0,u.patchFetch)({workAsyncStorage:x,workUnitAsyncStorage:l})}},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},55511:e=>{"use strict";e.exports=require("crypto")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},79428:e=>{"use strict";e.exports=require("buffer")},96487:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[719,580,205],()=>t(9268));module.exports=s})();