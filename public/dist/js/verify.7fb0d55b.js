(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["verify"],{"0743":function(e,t,r){"use strict";r("7e85")},"0cb2":function(e,t,r){var a=r("7b0b"),i=Math.floor,n="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,s,l,u){var x=r+e.length,m=s.length,d=c;return void 0!==l&&(l=a(l),d=o),n.call(u,d,(function(a,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(x);case"<":o=l[n.slice(1,-1)];break;default:var c=+n;if(0===c)return a;if(c>m){var u=i(c/10);return 0===u?a:u<=m?void 0===s[u-1]?n.charAt(1):s[u-1]+n.charAt(1):a}o=s[c-1]}return void 0===o?"":o}))}},"107c":function(e,t,r){var a=r("d039");e.exports=a((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,r){var a=r("c6b6"),i=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var n=r.call(e,t);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},4795:function(e,t,r){var a=r("23e7"),i=r("da84"),n=r("342f"),o=[].slice,c=/MSIE .\./.test(n),s=function(e){return function(t,r){var a=arguments.length>2,i=a?o.call(arguments,2):void 0;return e(a?function(){("function"==typeof t?t:Function(t)).apply(this,i)}:t,r)}};a({global:!0,bind:!0,forced:c},{setTimeout:s(i.setTimeout),setInterval:s(i.setInterval)})},5319:function(e,t,r){"use strict";var a=r("d784"),i=r("d039"),n=r("825a"),o=r("50c4"),c=r("a691"),s=r("1d80"),l=r("8aa5"),u=r("0cb2"),x=r("14c3"),m=r("b622"),d=m("replace"),p=Math.max,k=Math.min,f=function(e){return void 0===e?e:String(e)},b=function(){return"$0"==="a".replace(/./,"$0")}(),h=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),v=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));a("replace",(function(e,t,r){var a=h?"$":"$0";return[function(e,r){var a=s(this),i=void 0==e?void 0:e[d];return void 0!==i?i.call(e,a,r):t.call(String(a),e,r)},function(e,i){if("string"===typeof i&&-1===i.indexOf(a)&&-1===i.indexOf("$<")){var s=r(t,this,e,i);if(s.done)return s.value}var m=n(this),d=String(e),b="function"===typeof i;b||(i=String(i));var h=m.global;if(h){var v=m.unicode;m.lastIndex=0}var g=[];while(1){var y=x(m,d);if(null===y)break;if(g.push(y),!h)break;var E=String(y[0]);""===E&&(m.lastIndex=l(d,o(m.lastIndex),v))}for(var O="",$=0,I=0;I<g.length;I++){y=g[I];for(var _=String(y[0]),V=p(k(c(y.index),d.length),0),A=[],j=1;j<y.length;j++)A.push(f(y[j]));var G=y.groups;if(b){var S=[_].concat(A,V,d);void 0!==G&&S.push(G);var D=String(i.apply(void 0,S))}else D=u(_,d,V,A,G,i);V>=$&&(O+=d.slice($,V)+D,$=V+_.length)}return O+d.slice($)}]}),!v||!b||h)},"7e85":function(e,t,r){},"86bb":function(e){e.exports=JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":"#FFFFFF"},"fr":30,"ip":0,"op":90,"w":1000,"h":1000,"nm":"CIRCLE LOADING","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"CIRCLE LOADING Outlines 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":72,"ix":10,"x":"var $bm_rt;\\n$bm_rt = $bm_sum($bm_mul(time, 120), 72 * 4);"},"p":{"a":0,"k":[503.747,500,0],"ix":2},"a":{"a":0,"k":[3.747,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-55.229,0],[0,55.229],[55.229,0],[0,-55.229],[0,0],[110.457,0],[0,110.457],[-110.457,0],[0,-110.457]],"o":[[0,55.229],[55.229,0],[0,-55.229],[-55.229,0],[0,0],[0,110.457],[-110.457,0],[0,-110.457],[110.457,0],[0,0]],"v":[[85.889,0],[185.889,100],[285.889,0],[185.889,-100],[85.889,0],[85.923,0],[-114.077,200],[-314.076,0],[-114.077,-200],[85.923,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":50,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.5882352941176471,0.9607843137254902,0.1803921568627451,0.5,0.3803921568627451,0.6470588235294118,0.08627450980392157,1,0.2549019607843137,0.4588235294117647,0.0196078431372549],"ix":8}},"s":{"a":0,"k":[0,0],"ix":4},"e":{"a":0,"k":[100,0],"ix":5},"t":1,"lc":2,"lj":2,"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":35,"ix":2},"o":{"a":0,"k":0,"ix":3,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(time, 120);"},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":91,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"CIRCLE LOADING Outlines 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":72,"ix":10,"x":"var $bm_rt;\\n$bm_rt = $bm_sum($bm_mul(time, 120), 72 * 3);"},"p":{"a":0,"k":[503.747,500,0],"ix":2},"a":{"a":0,"k":[3.747,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-55.229,0],[0,55.229],[55.229,0],[0,-55.229],[0,0],[110.457,0],[0,110.457],[-110.457,0],[0,-110.457]],"o":[[0,55.229],[55.229,0],[0,-55.229],[-55.229,0],[0,0],[0,110.457],[-110.457,0],[0,-110.457],[110.457,0],[0,0]],"v":[[85.889,0],[185.889,100],[285.889,0],[185.889,-100],[85.889,0],[85.923,0],[-114.077,200],[-314.076,0],[-114.077,-200],[85.923,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":50,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.5176470588235295,0.7372549019607844,1,0.5,0.4,0.6627450980392157,0.9725490196078431,1,0.2235294117647059,0.4980392156862745,0.8196078431372549],"ix":8}},"s":{"a":0,"k":[0,0],"ix":4},"e":{"a":0,"k":[100,0],"ix":5},"t":1,"lc":2,"lj":2,"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":35,"ix":2},"o":{"a":0,"k":0,"ix":3,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(time, 120);"},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":91,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"CIRCLE LOADING Outlines 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":72,"ix":10,"x":"var $bm_rt;\\n$bm_rt = $bm_sum($bm_mul(time, 120), 72 * 2);"},"p":{"a":0,"k":[503.747,500,0],"ix":2},"a":{"a":0,"k":[3.747,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-55.229,0],[0,55.229],[55.229,0],[0,-55.229],[0,0],[110.457,0],[0,110.457],[-110.457,0],[0,-110.457]],"o":[[0,55.229],[55.229,0],[0,-55.229],[-55.229,0],[0,0],[0,110.457],[-110.457,0],[0,-110.457],[110.457,0],[0,0]],"v":[[85.889,0],[185.889,100],[285.889,0],[185.889,-100],[85.889,0],[85.923,0],[-114.077,200],[-314.076,0],[-114.077,-200],[85.923,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":50,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,1,0.536,0.161,0.5,0.975,0.29,0.103,1,0.949,0.045,0.045],"ix":8}},"s":{"a":0,"k":[0,0],"ix":4},"e":{"a":0,"k":[100,0],"ix":5},"t":1,"lc":2,"lj":2,"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":35,"ix":2},"o":{"a":0,"k":0,"ix":3,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(time, 120);"},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":91,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"CIRCLE LOADING Outlines 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":72,"ix":10,"x":"var $bm_rt;\\n$bm_rt = $bm_sum($bm_mul(time, 120), 72);"},"p":{"a":0,"k":[503.747,500,0],"ix":2},"a":{"a":0,"k":[3.747,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-55.229,0],[0,55.229],[55.229,0],[0,-55.229],[0,0],[110.457,0],[0,110.457],[-110.457,0],[0,-110.457]],"o":[[0,55.229],[55.229,0],[0,-55.229],[-55.229,0],[0,0],[0,110.457],[-110.457,0],[0,-110.457],[110.457,0],[0,0]],"v":[[85.889,0],[185.889,100],[285.889,0],[185.889,-100],[85.889,0],[85.923,0],[-114.077,200],[-314.076,0],[-114.077,-200],[85.923,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":50,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.9725490196078431,0.9058823529411765,0.10980392156862745,0.5,0.9176470588235294,0.9647058823529412,0.18823529411764706,1,0.7333333333333333,0.6784313725490196,0.0196078431372549],"ix":8}},"s":{"a":0,"k":[0,0],"ix":4},"e":{"a":0,"k":[100,0],"ix":5},"t":1,"lc":2,"lj":2,"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":35,"ix":2},"o":{"a":0,"k":0,"ix":3,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(time, 120);"},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":91,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"CIRCLE LOADING Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(time, 120);"},"p":{"a":0,"k":[503.747,500,0],"ix":2},"a":{"a":0,"k":[3.747,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-55.229,0],[0,55.229],[55.229,0],[0,-55.229],[0,0],[110.457,0],[0,110.457],[-110.457,0],[0,-110.457]],"o":[[0,55.229],[55.229,0],[0,-55.229],[-55.229,0],[0,0],[0,110.457],[-110.457,0],[0,-110.457],[110.457,0],[0,0]],"v":[[85.889,0],[185.889,100],[285.889,0],[185.889,-100],[85.889,0],[85.923,0],[-114.077,200],[-314.076,0],[-114.077,-200],[85.923,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":50,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.8196078431372549,0.2823529411764706,0.9254901960784314,0.5,0.7411764705882353,0.06274509803921569,0.8784313725490196,1,0.5647058823529412,0.07450980392156863,0.996078431372549],"ix":8}},"s":{"a":0,"k":[0,0],"ix":4},"e":{"a":0,"k":[100,0],"ix":5},"t":1,"lc":2,"lj":2,"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":35,"ix":2},"o":{"a":0,"k":0,"ix":3,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(time, 120);"},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":91,"st":0,"bm":0}],"markers":[]}')},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},9263:function(e,t,r){"use strict";var a=r("ad6d"),i=r("9f7f"),n=r("5692"),o=r("7c73"),c=r("69f3").get,s=r("fce3"),l=r("107c"),u=RegExp.prototype.exec,x=n("native-string-replace",String.prototype.replace),m=u,d=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),p=i.UNSUPPORTED_Y||i.BROKEN_CARET,k=void 0!==/()??/.exec("")[1],f=d||k||p||s||l;f&&(m=function(e){var t,r,i,n,s,l,f,b=this,h=c(b),v=h.raw;if(v)return v.lastIndex=b.lastIndex,t=m.call(v,e),b.lastIndex=v.lastIndex,t;var g=h.groups,y=p&&b.sticky,E=a.call(b),O=b.source,$=0,I=e;if(y&&(E=E.replace("y",""),-1===E.indexOf("g")&&(E+="g"),I=String(e).slice(b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&"\n"!==e[b.lastIndex-1])&&(O="(?: "+O+")",I=" "+I,$++),r=new RegExp("^(?:"+O+")",E)),k&&(r=new RegExp("^"+O+"$(?!\\s)",E)),d&&(i=b.lastIndex),n=u.call(y?r:b,I),y?n?(n.input=n.input.slice($),n[0]=n[0].slice($),n.index=b.lastIndex,b.lastIndex+=n[0].length):b.lastIndex=0:d&&n&&(b.lastIndex=b.global?n.index+n[0].length:i),k&&n&&n.length>1&&x.call(n[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(n[s]=void 0)})),n&&g)for(n.groups=l=o(null),s=0;s<g.length;s++)f=g[s],l[f[0]]=n[f[1]];return n}),e.exports=m},"9f7f":function(e,t,r){var a=r("d039"),i=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=a((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var a=r("23e7"),i=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,r){"use strict";var a=r("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b6d1:function(e,t,r){"use strict";r.r(t);var a=r("7a23"),i=Object(a["withScopeId"])("data-v-44ba71d9");Object(a["pushScopeId"])("data-v-44ba71d9");var n={class:"container"},o={class:"left"},c=Object(a["createVNode"])("h1",null,"VERIFY",-1),s={class:"input"},l={key:0,class:"timer"},u={class:"btn"},x=Object(a["createTextVNode"])("Change number"),m={key:0,class:"err"},d={class:"right"};Object(a["popScopeId"])();var p=i((function(e,t,p,k,f,b){var h=Object(a["resolveComponent"])("router-link"),v=Object(a["resolveComponent"])("lottie-player");return Object(a["openBlock"])(),Object(a["createBlock"])("div",n,[Object(a["createVNode"])("div",o,[c,Object(a["createVNode"])("h2",null,"OTP sent to +91"+Object(a["toDisplayString"])(b.number),1),Object(a["createVNode"])("div",s,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",placeholder:"Enter OTP",maxlength:"4","onUpdate:modelValue":t[1]||(t[1]=function(e){return f.code=e})},null,512),[[a["vModelText"],f.code]]),0!==f.time?(Object(a["openBlock"])(),Object(a["createBlock"])("div",l," Resend after "+Object(a["toDisplayString"])(f.time)+" seconds ",1)):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("div",u,[Object(a["createVNode"])("button",{ref:"resend",disabled:"",class:"secondary",onClick:t[2]||(t[2]=function(){return e.resend&&e.resend.apply(e,arguments)})}," RESEND ",512),Object(a["createVNode"])("button",{onClick:t[3]||(t[3]=function(){return b.submit&&b.submit.apply(b,arguments)})},"VERIFY")]),Object(a["createVNode"])("h3",null,[Object(a["createVNode"])(h,{to:"/login"},{default:i((function(){return[x]})),_:1})]),f.error?(Object(a["openBlock"])(),Object(a["createBlock"])("div",m,Object(a["toDisplayString"])(f.error),1)):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("div",d,[Object(a["createVNode"])(v,{src:r("86bb"),background:"transparent",speed:"1",style:{width:"300px",height:"300px"},loop:"",autoplay:""},null,8,["src"])])])})),k=(r("4795"),r("ac1f"),r("5319"),{name:"Verify",data:function(){return{code:"",time:60,error:""}},computed:{number:function(){return this.$store.getters.phone}},watch:{time:function(){0===this.time&&this.$refs.resend.removeAttribute("disabled")}},mounted:function(){var e=this;setInterval((function(){0!==e.time&&(e.time-=1)}),1e3)},methods:{submit:function(){this.$router.replace({name:"Dashboard"})}}});r("0743");k.render=p,k.__scopeId="data-v-44ba71d9";t["default"]=k},d784:function(e,t,r){"use strict";r("ac1f");var a=r("6eeb"),i=r("9263"),n=r("d039"),o=r("b622"),c=r("9112"),s=o("species"),l=RegExp.prototype;e.exports=function(e,t,r,u){var x=o(e),m=!n((function(){var t={};return t[x]=function(){return 7},7!=""[e](t)})),d=m&&!n((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[x]=/./[x]),r.exec=function(){return t=!0,null},r[x](""),!t}));if(!m||!d||r){var p=/./[x],k=t(x,""[e],(function(e,t,r,a,n){var o=t.exec;return o===i||o===l.exec?m&&!n?{done:!0,value:p.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}));a(String.prototype,e,k[0]),a(l,x,k[1])}u&&c(l[x],"sham",!0)}},fce3:function(e,t,r){var a=r("d039");e.exports=a((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=verify.7fb0d55b.js.map