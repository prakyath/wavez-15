if(jQuery.browser.msie && jQuery.browser.version < 9){
	/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
	/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
	window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

	/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
	(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);
}

(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd",transitionProperty:"transitionEnd"}[j],r=h("transitionDuration"));var s=b.event,t;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",t&&clearTimeout(t),t=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var u=["width","height"],v=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!b.browser.opera,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=u.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&v.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){var c=this,d=function(){c.$allAtoms=c.$allAtoms.not(a),a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this.$filteredAtoms=this.$filteredAtoms.not(a),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),v.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var w=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){w("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){w("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);

jQuery(function(){
	mobileFixedNavigation();
});
jQuery(window).load(function(){
	initNavigation();
	initPageScroll();
	initSliders();
	initLightBoxes();
	initIsotope();
	clearInputs();
});

function clearInputs(){
	jQuery('input:text, input:password, textarea').each(function(){
		var element = jQuery(this);
		element.data('val', element.val());
		element.bind('focus', function(){
			if(element.val() == element.data('val')) element.val('');
		}).bind('blur', function(){
			if(element.val() == '') element.val(element.data('val'));
		});
	});
}

function initLightBoxes(){
	jQuery("a[class^='prettyPhoto']").prettyPhoto({slideshow:10000});
}

function initSliders(){
	jQuery('.gallery').oneWaySlider({
		duration: 600,
		sliderHold: '.slider',
		needWrap : false,
		slideElement : 'li',
		prevControl : '.prev',
		nextControl : '.next',
		showSwitcher: false,
		autorun : false
	});
}

function initPageScroll(){

	jQuery('a[href*=#]').each(function(){

		var target = this.hash,
			offsetTop = 0;

		if(target == 'undefined' || target == ''){ return; }

		jQuery(this).click(function(e){

			e.preventDefault();

			offsetTop = jQuery(target).offset().top;

			scrollToElement(target, offsetTop);
		});

	});
}

function mobileFixedNavigation(){
	var deviceIpad = "ipad",
		deviceIphone = 'iphone',
		deviceIpod = 'ipod',
		deviceAndroid = 'android',
		//Initialize our user agent string to lower case.
		uagent = navigator.userAgent.toLowerCase(),
		countTop = function(){
			fakeElement.style.top = window.pageYOffset + 'px';
		};
	 
	function detectUserAgent(deviceName){
		return (uagent.search(deviceName) > -1)
	}
	 
	function isMobileDevice(){
		return (detectUserAgent(deviceIphone) || detectUserAgent(deviceIpod) || detectUserAgent(deviceIpad) || detectUserAgent(deviceAndroid));
	}

	if (isMobileDevice()) {

		var fakeElement = document.getElementById('fakeHeader');

		if ('ontouchstart' in document.documentElement) {
		  document.addEventListener("touchstart", countTop, false);
		  document.addEventListener("touchend", countTop, false);
		  document.addEventListener("touchcancel", countTop, false);
		  document.addEventListener("touchleave", countTop, false);
		  document.addEventListener("touchmove", countTop, false);
		}

		window.onscroll = countTop;
	}
}

function scrollToElement(target, offsetTop){
	var scrollElement = jQuery(scrollableElement('html', 'body')),
		animSpeed = 500;

	scrollElement.addClass('scrolling');
	jQuery(scrollElement).animate({
			scrollTop: offsetTop
		}, {
			duration:animSpeed,
			queue: false,
			complete: function() {
	  			location.hash = target;
	  			setTimeout(function(){
	  				scrollElement.removeClass('scrolling');
  				}, 100);
			}
		}
	);
}
	
// Use the first element that is "scrollable"  (cross-browser fix)
function scrollableElement(els) {
	for (var i = 0, argLength = arguments.length; i <argLength; i++) {
		var el = arguments[i],
		$scrollElement = $(el);
		if ($scrollElement.scrollTop()> 0) {
			return el;
		} else {
			$scrollElement.scrollTop(1);
			var isScrollable = $scrollElement.scrollTop()> 0;
			$scrollElement.scrollTop(0);
			if (isScrollable) {
				return el;
			}
		}
	}
	return [];
}

function initNavigation(){

	var navigation = jQuery('.main-navigation'),
		itemList = navigation.find('li'),
		activeClass = 'active',
		hash = location.hash,
		activeElement,
		mobileActiveClass = 'mobile-nav',
		siteSections = jQuery('.site-content > section'),
		$window = jQuery(window),
		getActiveLink = function(href){
			return itemList.find("a[href*='" + href + "']");
		},
		toggleActiveClass = function(elm){
			itemList.removeClass(activeClass);
	 		elm.parent().addClass(activeClass);
		},
		changeActiveNavOnScroll = function(){
			var scrollTop = $window.scrollTop(),
				windowHeight = $window.innerHeight(),
				sectionPosition = 0;

			if(scrollTop <  windowHeight/2){
				activeElement = getActiveLink(siteSections.eq(0)[0].id);
			} else {
				siteSections.each(function(index){

					if(index==0) return true;

					var $this = jQuery(this),
						sectionTop = $this.offset().top;

					if(sectionTop > scrollTop + windowHeight/2){
						activeElement = getActiveLink(this.id);
						return false;
					}
				});	
			}

			if(activeElement.length){
				toggleActiveClass(activeElement);
			}
		};
	
	navigation.on('click', 'ul li:not(.page) a', function(){

		toggleActiveClass(jQuery(this));
		navigation.removeClass(mobileActiveClass);

		return false;
	});

	window.onhashchange = function(){
		hash = location.hash;
		activeElement = getActiveLink(hash);

		if(activeElement.length){
			toggleActiveClass(activeElement);
		}
	}

	if(hash){
		activeElement = getActiveLink(hash);

		if(activeElement.length){
			toggleActiveClass(activeElement);
			scrollToElement(jQuery(hash));
		}

		$window.scroll();
	}

	
	jQuery('.opener').click(function(){
		 navigation.toggleClass(mobileActiveClass);

		 return false;
	});

	window.onscroll = changeActiveNavOnScroll;
}

//Sortable portfolio
function initIsotope(){
	jQuery.Isotope.prototype._getCenteredMasonryColumns = function() {
		this.width = this.element.width();
		var parentWidth = this.element.parent().width();
		// i.e. options.masonry && options.masonry.columnWidth
		var colW = this.options.masonry && this.options.masonry.columnWidth ||
		// or use the size of the first item
		this.$filteredAtoms.outerWidth(true) ||
		// if there's no items, use size of container
		parentWidth;
		var cols = Math.floor( parentWidth / colW );
		cols = Math.max( cols, 1 );
		// i.e. this.masonry.cols = ....
		this.masonry.cols = cols;
		// i.e. this.masonry.columnWidth = ...
		this.masonry.columnWidth = colW;
	};
	jQuery.Isotope.prototype._masonryReset = function() {
		// layout-specific props
		this.masonry = {};
		// FIXME shouldn't have to call this again
		this._getCenteredMasonryColumns();
		var i = this.masonry.cols;
		this.masonry.colYs = [];
		while (i--) {
		this.masonry.colYs.push( 0 );
		}
	};
	jQuery.Isotope.prototype._masonryResizeChanged = function() {
		var prevColCount = this.masonry.cols;
		// get updated colCount
		this._getCenteredMasonryColumns();
		return ( this.masonry.cols !== prevColCount );
	};
	jQuery.Isotope.prototype._masonryGetContainerSize = function() {
		var unusedCols = 0,
		i = this.masonry.cols;
		// count unused columns
		while ( --i ) {
			if ( this.masonry.colYs[i] !== 0 ) {
				break;
			}
				unusedCols++;
			}
			return {
				height : Math.max.apply( Math, this.masonry.colYs ),
				// fit container to columns that have been used;
				width : (this.masonry.cols - unusedCols) * this.masonry.columnWidth
			};
	};

	var portfolio = jQuery('#portfolio'),
		portfolioList = portfolio.find('.images'),
		portfolioFilter = portfolio.find('.tabset'),
		portfolioFilterItems = portfolioFilter.find('li'),
		portfolioFilterLinks = portfolioFilter.find('a');

	if(portfolioList.length){
		portfolioList.isotope({
			itemSelector:'li',
			animationEngine:'jquery'
		})
	}
	portfolioFilterLinks.click(function(){
		var currentLink = jQuery(this),
			selector = currentLink.attr('data-filter');
		if(!currentLink.parent().hasClass('active')){
			portfolioFilterItems.removeClass('active');
			currentLink.parent().addClass('active');
			portfolioList.isotope({ filter: selector });
		}
		return false;
	});
}

jQuery.fn.oneWaySlider = function(_options){
	// defaults options	
	var _options = jQuery.extend({
		duration: 700,
		autoSlide: 5000,
		showSwitcher : false,
		autorun : false,
		needWrap : false,
		widthHolder : false,
		transitionEffect : 'swing',
		slideElement: '>li',
		nextControl: 'a.next, .btn-next',
		prevControl: 'a.prev, .btn-prev',
		sliderHold : 'ul.slides'
	},_options);

	this.each(function () {
		jQuery(this).data('oneWaySlider', new OneWaySlider(jQuery(this), _options));
	});
    return this;
}
	function OneWaySlider(el, _options){
		var oSelf = this;
		var _hold = el;
		var _speed = _options.duration;
		var _timer = _options.autoSlide;
		var _wrap = _hold.find( _options.sliderHold);
		var _el = _hold.find(_options.slideElement);
		var _next = _hold.find(_options.nextControl);
		var _prev = _hold.find(_options.prevControl);
		var _count = _el.index(_el.filter(':last'));
		var _w = _el.outerWidth(true);
		

		if(_el.length <= 0) return;
		if(_options.needWrap){
			_wrapel = jQuery('<div class="'+_options.needWrap+'"></div>');
			_el.wrapAll(_wrapel);
			_wrap = _hold.find('.'+_options.needWrap);
			_wrap.css({
				width : '99999px',
				position : 'relative',
				overflow : 'hidden' 
			});
			_el.show();
		}

		var _wrapHolderW = _options.visibleEls || Math.ceil(_wrap.parent().width()/_w);
		if(_options.widthHolder){
			var _wrapHolderW = Math.ceil(_hold.find(_options.widthHolder).outerWidth()/_w);
		}
		var _t;
		var _active = 0;

		var _btn = jQuery('<ul class="switcher"></ul>');
		if(_options.showSwitcher) {
			var _btn = _hold.find(_options.showSwitcher);
			_btn.empty();
			_el.each(function(_i){
				_btn.append('<a href="#" title="'+(_i+1)+'">'+(_i+1)+'</a>');
			});
		}else{
			_el.each(function(_i){
				_btn.append('<a href="#">'+(_i+1)+'</a></li>');
			});
		}
		_btn = _btn.find('a');
		_prev.removeClass('inactive');
		function scrollEl(){
			if(_active >= _count - _wrapHolderW + 1){
				_next.addClass('inactive');
				_prev.removeClass('inactive');
			}else if(_active <= 0){
				_prev.addClass('inactive');
				_next.removeClass('inactive');
			}else{
				_prev.removeClass('inactive');
				_next.removeClass('inactive');
			}
			_wrap.eq(0).animate({
				marginLeft: -(_w * _active) + "px"
			}, {queue:false, duration: _speed, easing: _options.transitionEffect});
			_btn.removeClass('active');
			_btn.eq(_active).addClass('active');
			_btn.closest('li').removeClass('active');
			_btn.eq(_active).closest('li').addClass('active');
		}
		function runTimer(){
			if(!_options.autorun) return;
			_t = setInterval(function(){
				_active++;
				if (_active > (_count - _wrapHolderW + 1)) _active = _count - _wrapHolderW + 1;
				scrollEl();
			}, _timer);
		}
		runTimer();
		
		_btn.click(function(){
			_active = _btn.index(jQuery(this));
			if (_active > (_count - _wrapHolderW + 1)) _active = 0;
			scrollEl();
			return false;
		});
		_next.off('click.carousel.data-api');
		_prev.off('click.carousel.data-api');
		_next.on('click.slideGallery.next',function(){
			_active++;
			var extra = 1;
			if(_wrap.parent().width() < (_w*2-100)){
				extra = 2;
			}
			if (_active > (_count - _wrapHolderW + extra)) _active = _count - _wrapHolderW + extra;
			scrollEl();
			return false;
		});
		_prev.on('click.slideGallery.prev', function(){
			_active--;
			if (_active < 0) _active = 0;
			scrollEl();
			return false;
		});

		_hold.mouseenter(function(){
			if(_t) clearTimeout(_t);
		}).mouseleave(function(){
			runTimer();
		});
		function init(){
			return oSelf;
		}
		var recheckTimer;
		this.reCheckDimensions = function(){
			if(recheckTimer) clearTimeout(recheckTimer);
			recheckTimer = setTimeout(function(){
				_w = _el.eq(0).outerWidth();
				_wrapHolderW = _options.visibleEls || Math.ceil(_wrap.parent().width()/_w);
				if(_options.widthHolder){
					var _wrapHolderW = Math.ceil(_hold.find(_options.widthHolder).outerWidth()/_w);
				}
				scrollEl();
			},300);
		}
		this.onTouchStart =  function() {
			var e = window.event;
			if(_t) clearTimeout(_t);
			this.start = {
			  pageX: e.touches[0].pageX,
			  pageY: e.touches[0].pageY,
			  time: Number(new Date())
			};

			this.isScrolling = undefined;
			this.deltaX = 0;

			_wrap.css('MozTransitionDuration', 0);
			_wrap.css('webkitTransitionDuration', 0);
			e.stopPropagation();
		};

		this.onTouchMove =  function() {
			var e = window.event;
			// ensure swiping with one touch and not pinching
			if(e.touches && e.touches.length > 1 || e.scale && e.scale !== 1) return;

			this.deltaX = e.touches[0].pageX - this.start.pageX;
			// determine if scrolling test has run - one time test
			if ( typeof this.isScrolling == 'undefined') {
			  this.isScrolling = !!( this.isScrolling || Math.abs(this.deltaX) < Math.abs(e.touches[0].pageY - this.start.pageY) );
			}

			// if user is not trying to scroll vertically
			if (!this.isScrolling) {

				// prevent native scrolling 
				e.preventDefault();

				// cancel slideshow
				//clearTimeout(this.interval);

				// increase resistance if first or last slide
				this.deltaX = 
				this.deltaX / 
					( (!_active && this.deltaX > 0               // if first slide and sliding left
						|| _active == this.length - 1              // or if last slide and sliding right
						&& this.deltaX < 0                            // and if sliding at all
					) ?                      
					( Math.abs(this.deltaX) / _w + 1 )      // determine resistance level
					: 1 );                                          // no resistance if false

					// translate immediately 1-to-1
					//_wrap.css('MozTransform', 'translate3d(' + (this.deltaX - _active * _w) + 'px,0,0)');
					//_wrap.css('webkitTransform', 'translate3d(' + (this.deltaX - _active * _w) + 'px,0,0)');
					//this.element.style.MozTransform = this.element.style.webkitTransform = 'translate3d(' + (this.deltaX - this.index * this.width) + 'px,0,0)';
					_wrap.css('marginLeft', (this.deltaX - _active * _w));
					e.stopPropagation();
			}

		};

		this.onTouchEnd =  function(e) {
			// determine if slide attempt triggers next/prev slide
			if(!this.start || !this.start.time) return;
			var isValidSlide = 
			      Number(new Date()) - this.start.time < 250      // if slide duration is less than 250ms
			      && Math.abs(this.deltaX) > 20                   // and if slide amt is greater than 20px
			      || Math.abs(this.deltaX) > _w/2,        // or if slide amt is greater than half the width

			// determine if slide attempt is past start and end
			    isPastBounds = 
			      !this.index && this.deltaX > 0                          // if first slide and slide amt is greater than 0
			      || this.index == this.length - 1 && this.deltaX < 0;    // or if last slide and slide amt is less than 0

			// if not scrolling vertically
			if (!this.isScrolling) {

				// call slide function with slide end value based on isValidSlide and isPastBounds tests
				_active = _active + ( isValidSlide && !isPastBounds ? (this.deltaX < 0 ? 1 : -1) : -1 );
				if(_active < 0) _active = 0;
				else if (_active >= (_count - _wrapHolderW + 1)){
					_active = (_count - _wrapHolderW + 1);
				}
				scrollEl();
				runTimer();
			}

			e.stopPropagation();
		}

		_wrap.on('touchstart', this.onTouchStart);
		_wrap.on('touchmove', this.onTouchMove);
		_wrap.on('touchend', this.onTouchEnd);
		_wrap.on('webkitTransitionEnd', this.onTouchEnd);
		_wrap.on('transitionEnd', this.onTouchEnd);
		jQuery(window).on('resize', this.reCheckDimensions);
		this.reCheckDimensions();

		this.callback = _options.callbackFn || function() {};
		return init();
	}


/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.4
------------------------------------------------------------------------- */

(function($){$.prettyPhoto={version:'3.1.4'};$.fn.prettyPhoto=function(pp_settings){pp_settings=jQuery.extend({hook:'rel',animation_speed:'fast',ajaxcallback:function(){},slideshow:5000,autoplay_slideshow:false,opacity:0.80,show_title:true,allow_resize:true,allow_expand:true,default_width:500,default_height:344,counter_separator_label:'/',theme:'pp_default',horizontal_padding:20,hideflash:false,wmode:'opaque',autoplay:true,modal:false,deeplinking:true,overlay_gallery:true,overlay_gallery_max:30,keyboard_shortcuts:true,changepicturecallback:function(){},callback:function(){},ie6_fallback:true,markup:'<div class="pp_pic_holder"> \
      <div class="ppt">&nbsp;</div> \
      <div class="pp_top"> \
       <div class="pp_left"></div> \
       <div class="pp_middle"></div> \
       <div class="pp_right"></div> \
      </div> \
      <div class="pp_content_container"> \
       <div class="pp_left"> \
       <div class="pp_right"> \
        <div class="pp_content"> \
         <div class="pp_loaderIcon"></div> \
         <div class="pp_fade"> \
          <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
          <div class="pp_hoverContainer"> \
           <a class="pp_next" href="#">next</a> \
           <a class="pp_previous" href="#">previous</a> \
          </div> \
          <div id="pp_full_res"></div> \
          <div class="pp_details"> \
           <div class="pp_nav"> \
            <a href="#" class="pp_arrow_previous">Previous</a> \
            <p class="currentTextHolder">0/0</p> \
            <a href="#" class="pp_arrow_next">Next</a> \
           </div> \
           <p class="pp_description"></p> \
           <a class="pp_close" href="#">Close</a> \
          </div> \
         </div> \
        </div> \
       </div> \
       </div> \
      </div> \
      <div class="pp_bottom"> \
       <div class="pp_left"></div> \
       <div class="pp_middle"></div> \
       <div class="pp_right"></div> \
      </div> \
     </div> \
     <div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> \
        <a href="#" class="pp_arrow_previous">Previous</a> \
        <div> \
         <ul> \
          {gallery} \
         </ul> \
        </div> \
        <a href="#" class="pp_arrow_next">Next</a> \
       </div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:'',social_tools:'<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},pp_settings);var matchedObjects=this,percentBased=false,pp_dimensions,pp_open,pp_contentHeight,pp_contentWidth,pp_containerHeight,pp_containerWidth,windowHeight=$(window).height(),windowWidth=$(window).width(),pp_slideshow;doresize=true,scroll_pos=_get_scroll();$(window).unbind('resize.prettyphoto').bind('resize.prettyphoto',function(){_center_overlay();_resize_overlay();});if(pp_settings.keyboard_shortcuts){$(document).unbind('keydown.prettyphoto').bind('keydown.prettyphoto',function(e){if(typeof $pp_pic_holder!='undefined'){if($pp_pic_holder.is(':visible')){switch(e.keyCode){case 37:$.prettyPhoto.changePage('previous');e.preventDefault();break;case 39:$.prettyPhoto.changePage('next');e.preventDefault();break;case 27:if(!settings.modal)
$.prettyPhoto.close();e.preventDefault();break;};};};});};$.prettyPhoto.initialize=function(){settings=pp_settings;if(settings.theme=='pp_default')settings.horizontal_padding=16;if(settings.ie6_fallback&&$.browser.msie&&parseInt($.browser.version)==6)settings.theme="light_square";theRel=$(this).attr(settings.hook);galleryRegExp=/\[(?:.*)\]/;isSet=(galleryRegExp.exec(theRel))?true:false;pp_images=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr(settings.hook).indexOf(theRel)!=-1)return $(n).attr('href');}):$.makeArray($(this).attr('href'));pp_titles=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr(settings.hook).indexOf(theRel)!=-1)return($(n).find('img').attr('alt'))?$(n).find('img').attr('alt'):"";}):$.makeArray($(this).find('img').attr('alt'));pp_descriptions=(isSet)?jQuery.map(matchedObjects,function(n,i){if($(n).attr(settings.hook).indexOf(theRel)!=-1)return($(n).attr('title'))?$(n).attr('title'):"";}):$.makeArray($(this).attr('title'));if(pp_images.length>settings.overlay_gallery_max)settings.overlay_gallery=false;set_position=jQuery.inArray($(this).attr('href'),pp_images);rel_index=(isSet)?set_position:$("a["+settings.hook+"^='"+theRel+"']").index($(this));_build_overlay(this);if(settings.allow_resize)
$(window).bind('scroll.prettyphoto',function(){_center_overlay();});$.prettyPhoto.open();return false;}
$.prettyPhoto.open=function(event){if(typeof settings=="undefined"){settings=pp_settings;if($.browser.msie&&$.browser.version==6)settings.theme="light_square";pp_images=$.makeArray(arguments[0]);pp_titles=(arguments[1])?$.makeArray(arguments[1]):$.makeArray("");pp_descriptions=(arguments[2])?$.makeArray(arguments[2]):$.makeArray("");isSet=(pp_images.length>1)?true:false;set_position=(arguments[3])?arguments[3]:0;_build_overlay(event.target);}
if($.browser.msie&&$.browser.version==6)$('select').css('visibility','hidden');if(settings.hideflash)$('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','hidden');_checkPosition($(pp_images).size());$('.pp_loaderIcon').show();if(settings.deeplinking)
setHashtag();if(settings.social_tools){facebook_like_link=settings.social_tools.replace('{location_href}',encodeURIComponent(location.href));$pp_pic_holder.find('.pp_social').html(facebook_like_link);}
if($ppt.is(':hidden'))$ppt.css('opacity',0).show();$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find('.currentTextHolder').text((set_position+1)+settings.counter_separator_label+$(pp_images).size());if(typeof pp_descriptions[set_position]!='undefined'&&pp_descriptions[set_position]!=""){$pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));}else{$pp_pic_holder.find('.pp_description').hide();}
movie_width=(parseFloat(getParam('width',pp_images[set_position])))?getParam('width',pp_images[set_position]):settings.default_width.toString();movie_height=(parseFloat(getParam('height',pp_images[set_position])))?getParam('height',pp_images[set_position]):settings.default_height.toString();percentBased=false;if(movie_height.indexOf('%')!=-1){movie_height=parseFloat(($(window).height()*parseFloat(movie_height)/100)-150);percentBased=true;}
if(movie_width.indexOf('%')!=-1){movie_width=parseFloat(($(window).width()*parseFloat(movie_width)/100)-150);percentBased=true;}
$pp_pic_holder.fadeIn(function(){(settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined")?$ppt.html(unescape(pp_titles[set_position])):$ppt.html('&nbsp;');imgPreloader="";skipInjection=false;switch(_getFileType(pp_images[set_position])){case'image':imgPreloader=new Image();nextImage=new Image();if(isSet&&set_position<$(pp_images).size()-1)nextImage.src=pp_images[set_position+1];prevImage=new Image();if(isSet&&pp_images[set_position-1])prevImage.src=pp_images[set_position-1];$pp_pic_holder.find('#pp_full_res')[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]);imgPreloader.onload=function(){pp_dimensions=_fitToViewport(imgPreloader.width,imgPreloader.height);_showContent();};imgPreloader.onerror=function(){alert('Image cannot be loaded. Make sure the path is correct and image exist.');$.prettyPhoto.close();};imgPreloader.src=pp_images[set_position];break;case'youtube':pp_dimensions=_fitToViewport(movie_width,movie_height);movie_id=getParam('v',pp_images[set_position]);if(movie_id==""){movie_id=pp_images[set_position].split('youtu.be/');movie_id=movie_id[1];if(movie_id.indexOf('?')>0)
movie_id=movie_id.substr(0,movie_id.indexOf('?'));if(movie_id.indexOf('&')>0)
movie_id=movie_id.substr(0,movie_id.indexOf('&'));}
movie='http://www.youtube.com/embed/'+movie_id;(getParam('rel',pp_images[set_position]))?movie+="?rel="+getParam('rel',pp_images[set_position]):movie+="?rel=1";if(settings.autoplay)movie+="&autoplay=1";toInject=settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case'vimeo':pp_dimensions=_fitToViewport(movie_width,movie_height);movie_id=pp_images[set_position];var regExp=/http:\/\/(www\.)?vimeo.com\/(\d+)/;var match=movie_id.match(regExp);movie='http://player.vimeo.com/video/'+match[2]+'?title=0&amp;byline=0&amp;portrait=0';if(settings.autoplay)movie+="&autoplay=1;";vimeo_width=pp_dimensions['width']+'/embed/?moog_width='+pp_dimensions['width'];toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,movie);break;case'quicktime':pp_dimensions=_fitToViewport(movie_width,movie_height);pp_dimensions['height']+=15;pp_dimensions['contentHeight']+=15;pp_dimensions['containerHeight']+=15;toInject=settings.quicktime_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case'flash':pp_dimensions=_fitToViewport(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf('flashvars')+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf('?'));toInject=settings.flash_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);break;case'iframe':pp_dimensions=_fitToViewport(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf('iframe')-1);toInject=settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,frame_url);break;case'ajax':doresize=false;pp_dimensions=_fitToViewport(movie_width,movie_height);doresize=true;skipInjection=true;$.get(pp_images[set_position],function(responseHTML){toInject=settings.inline_markup.replace(/{content}/g,responseHTML);$pp_pic_holder.find('#pp_full_res')[0].innerHTML=toInject;_showContent();});break;case'custom':pp_dimensions=_fitToViewport(movie_width,movie_height);toInject=settings.custom_markup;break;case'inline':myClone=$(pp_images[set_position]).clone().append('<br clear="all" />').css({'width':settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($('body')).show();doresize=false;pp_dimensions=_fitToViewport($(myClone).width(),$(myClone).height());doresize=true;$(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());break;};if(!imgPreloader&&!skipInjection){$pp_pic_holder.find('#pp_full_res')[0].innerHTML=toInject;_showContent();};});return false;};$.prettyPhoto.changePage=function(direction){currentGalleryPage=0;if(direction=='previous'){set_position--;if(set_position<0)set_position=$(pp_images).size()-1;}else if(direction=='next'){set_position++;if(set_position>$(pp_images).size()-1)set_position=0;}else{set_position=direction;};rel_index=set_position;if(!doresize)doresize=true;if(settings.allow_expand){$('.pp_contract').removeClass('pp_contract').addClass('pp_expand');}
_hideContent(function(){$.prettyPhoto.open();});};$.prettyPhoto.changeGalleryPage=function(direction){if(direction=='next'){currentGalleryPage++;if(currentGalleryPage>totalPage)currentGalleryPage=0;}else if(direction=='previous'){currentGalleryPage--;if(currentGalleryPage<0)currentGalleryPage=totalPage;}else{currentGalleryPage=direction;};slide_speed=(direction=='next'||direction=='previous')?settings.animation_speed:0;slide_to=currentGalleryPage*(itemsPerPage*itemWidth);$pp_gallery.find('ul').animate({left:-slide_to},slide_speed);};$.prettyPhoto.startSlideshow=function(){if(typeof pp_slideshow=='undefined'){$pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){$.prettyPhoto.stopSlideshow();return false;});pp_slideshow=setInterval($.prettyPhoto.startSlideshow,settings.slideshow);}else{$.prettyPhoto.changePage('next');};}
$.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){$.prettyPhoto.startSlideshow();return false;});clearInterval(pp_slideshow);pp_slideshow=undefined;}
$.prettyPhoto.close=function(){if($pp_overlay.is(":animated"))return;$.prettyPhoto.stopSlideshow();$pp_pic_holder.stop().find('object,embed').css('visibility','hidden');$('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){$(this).remove();});$pp_overlay.fadeOut(settings.animation_speed,function(){if($.browser.msie&&$.browser.version==6)$('select').css('visibility','visible');if(settings.hideflash)$('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','visible');$(this).remove();$(window).unbind('scroll.prettyphoto');clearHashtag();settings.callback();doresize=true;pp_open=false;delete settings;});};function _showContent(){$('.pp_loaderIcon').hide();projectedTop=scroll_pos['scrollTop']+((windowHeight/2)-(pp_dimensions['containerHeight']/2));if(projectedTop<0)projectedTop=0;$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find('.pp_content').animate({height:pp_dimensions['contentHeight'],width:pp_dimensions['contentWidth']},settings.animation_speed);$pp_pic_holder.animate({'top':projectedTop,'left':((windowWidth/2)-(pp_dimensions['containerWidth']/2)<0)?0:(windowWidth/2)-(pp_dimensions['containerWidth']/2),width:pp_dimensions['containerWidth']},settings.animation_speed,function(){$pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(pp_dimensions['height']).width(pp_dimensions['width']);$pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed);if(isSet&&_getFileType(pp_images[set_position])=="image"){$pp_pic_holder.find('.pp_hoverContainer').show();}else{$pp_pic_holder.find('.pp_hoverContainer').hide();}
if(settings.allow_expand){if(pp_dimensions['resized']){$('a.pp_expand,a.pp_contract').show();}else{$('a.pp_expand').hide();}}
if(settings.autoplay_slideshow&&!pp_slideshow&&!pp_open)$.prettyPhoto.startSlideshow();settings.changepicturecallback();pp_open=true;});_insert_gallery();pp_settings.ajaxcallback();};function _hideContent(callback){$pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');$pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){$('.pp_loaderIcon').show();callback();});};function _checkPosition(setCount){(setCount>1)?$('.pp_nav').show():$('.pp_nav').hide();};function _fitToViewport(width,height){resized=false;_getDimensions(width,height);imageWidth=width,imageHeight=height;if(((pp_containerWidth>windowWidth)||(pp_containerHeight>windowHeight))&&doresize&&settings.allow_resize&&!percentBased){resized=true,fitting=false;while(!fitting){if((pp_containerWidth>windowWidth)){imageWidth=(windowWidth-200);imageHeight=(height/width)*imageWidth;}else if((pp_containerHeight>windowHeight)){imageHeight=(windowHeight-200);imageWidth=(width/height)*imageHeight;}else{fitting=true;};pp_containerHeight=imageHeight,pp_containerWidth=imageWidth;};_getDimensions(imageWidth,imageHeight);if((pp_containerWidth>windowWidth)||(pp_containerHeight>windowHeight)){_fitToViewport(pp_containerWidth,pp_containerHeight)};};return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(pp_containerHeight),containerWidth:Math.floor(pp_containerWidth)+(settings.horizontal_padding*2),contentHeight:Math.floor(pp_contentHeight),contentWidth:Math.floor(pp_contentWidth),resized:resized};};function _getDimensions(width,height){width=parseFloat(width);height=parseFloat(height);$pp_details=$pp_pic_holder.find('.pp_details');$pp_details.width(width);detailsHeight=parseFloat($pp_details.css('marginTop'))+parseFloat($pp_details.css('marginBottom'));$pp_details=$pp_details.clone().addClass(settings.theme).width(width).appendTo($('body')).css({'position':'absolute','top':-10000});detailsHeight+=$pp_details.height();detailsHeight=(detailsHeight<=34)?36:detailsHeight;if($.browser.msie&&$.browser.version==7)detailsHeight+=8;$pp_details.remove();$pp_title=$pp_pic_holder.find('.ppt');$pp_title.width(width);titleHeight=parseFloat($pp_title.css('marginTop'))+parseFloat($pp_title.css('marginBottom'));$pp_title=$pp_title.clone().appendTo($('body')).css({'position':'absolute','top':-10000});titleHeight+=$pp_title.height();$pp_title.remove();pp_contentHeight=height+detailsHeight;pp_contentWidth=width;pp_containerHeight=pp_contentHeight+titleHeight+$pp_pic_holder.find('.pp_top').height()+$pp_pic_holder.find('.pp_bottom').height();pp_containerWidth=width;}
function _getFileType(itemSrc){if(itemSrc.match(/youtube\.com\/watch/i)||itemSrc.match(/youtu\.be/i)){return'youtube';}else if(itemSrc.match(/vimeo\.com/i)){return'vimeo';}else if(itemSrc.match(/\b.mov\b/i)){return'quicktime';}else if(itemSrc.match(/\b.swf\b/i)){return'flash';}else if(itemSrc.match(/\biframe=true\b/i)){return'iframe';}else if(itemSrc.match(/\bajax=true\b/i)){return'ajax';}else if(itemSrc.match(/\bcustom=true\b/i)){return'custom';}else if(itemSrc.substr(0,1)=='#'){return'inline';}else{return'image';};};function _center_overlay(){if(doresize&&typeof $pp_pic_holder!='undefined'){scroll_pos=_get_scroll();contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=(windowHeight/2)+scroll_pos['scrollTop']-(contentHeight/2);if(projectedTop<0)projectedTop=0;if(contentHeight>windowHeight)
return;$pp_pic_holder.css({'top':projectedTop,'left':(windowWidth/2)+scroll_pos['scrollLeft']-(contentwidth/2)});};};function _get_scroll(){if(self.pageYOffset){return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};}else if(document.documentElement&&document.documentElement.scrollTop){return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};}else if(document.body){return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};};};function _resize_overlay(){windowHeight=$(window).height(),windowWidth=$(window).width();if(typeof $pp_overlay!="undefined")$pp_overlay.height($(document).height()).width(windowWidth);};function _insert_gallery(){if(isSet&&settings.overlay_gallery&&_getFileType(pp_images[set_position])=="image"&&(settings.ie6_fallback&&!($.browser.msie&&parseInt($.browser.version)==6))){itemWidth=52+5;navWidth=(settings.theme=="facebook"||settings.theme=="pp_default")?50:30;itemsPerPage=Math.floor((pp_dimensions['containerWidth']-100-navWidth)/itemWidth);itemsPerPage=(itemsPerPage<pp_images.length)?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').hide();}else{$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').show();};galleryWidth=itemsPerPage*itemWidth;fullGalleryWidth=pp_images.length*itemWidth;$pp_gallery.css('margin-left',-((galleryWidth/2)+(navWidth/2))).find('div:first').width(galleryWidth+5).find('ul').width(fullGalleryWidth).find('li.selected').removeClass('selected');goToPage=(Math.floor(set_position/itemsPerPage)<totalPage)?Math.floor(set_position/itemsPerPage):totalPage;$.prettyPhoto.changeGalleryPage(goToPage);$pp_gallery_li.filter(':eq('+set_position+')').addClass('selected');}else{$pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');}}
function _build_overlay(caller){if(settings.social_tools)
facebook_like_link=settings.social_tools.replace('{location_href}',encodeURIComponent(location.href));settings.markup=settings.markup.replace('{pp_social}','');$('body').append(settings.markup);$pp_pic_holder=$('.pp_pic_holder'),$ppt=$('.ppt'),$pp_overlay=$('div.pp_overlay');if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var i=0;i<pp_images.length;i++){if(!pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)){classname='default';img_src='';}else{classname='';img_src=pp_images[i];}
toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>";};toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find('#pp_full_res').after(toInject);$pp_gallery=$('.pp_pic_holder .pp_gallery'),$pp_gallery_li=$pp_gallery.find('li');$pp_gallery.find('.pp_arrow_next').click(function(){$.prettyPhoto.changeGalleryPage('next');$.prettyPhoto.stopSlideshow();return false;});$pp_gallery.find('.pp_arrow_previous').click(function(){$.prettyPhoto.changeGalleryPage('previous');$.prettyPhoto.stopSlideshow();return false;});$pp_pic_holder.find('.pp_content').hover(function(){$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();},function(){$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();});itemWidth=52+5;$pp_gallery_li.each(function(i){$(this).find('a').click(function(){$.prettyPhoto.changePage(i);$.prettyPhoto.stopSlideshow();return false;});});};if(settings.slideshow){$pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
$pp_pic_holder.find('.pp_nav .pp_play').click(function(){$.prettyPhoto.startSlideshow();return false;});}
$pp_pic_holder.attr('class','pp_pic_holder '+settings.theme);$pp_overlay.css({'opacity':0,'height':$(document).height(),'width':$(window).width()}).bind('click',function(){if(!settings.modal)$.prettyPhoto.close();});$('a.pp_close').bind('click',function(){$.prettyPhoto.close();return false;});if(settings.allow_expand){$('a.pp_expand').bind('click',function(e){if($(this).hasClass('pp_expand')){$(this).removeClass('pp_expand').addClass('pp_contract');doresize=false;}else{$(this).removeClass('pp_contract').addClass('pp_expand');doresize=true;};_hideContent(function(){$.prettyPhoto.open();});return false;});}
$pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){$.prettyPhoto.changePage('previous');$.prettyPhoto.stopSlideshow();return false;});$pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){$.prettyPhoto.changePage('next');$.prettyPhoto.stopSlideshow();return false;});_center_overlay();};if(!pp_alreadyInitialized&&getHashtag()){pp_alreadyInitialized=true;hashIndex=getHashtag();hashRel=hashIndex;hashIndex=hashIndex.substring(hashIndex.indexOf('/')+1,hashIndex.length-1);hashRel=hashRel.substring(0,hashRel.indexOf('/'));setTimeout(function(){$("a["+pp_settings.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger('click');},50);}
return this.unbind('click.prettyphoto').bind('click.prettyphoto',$.prettyPhoto.initialize);};function getHashtag(){url=location.href;hashtag=(url.indexOf('#prettyPhoto')!==-1)?decodeURI(url.substring(url.indexOf('#prettyPhoto')+1,url.length)):false;return hashtag;};function setHashtag(){if(typeof theRel=='undefined')return;location.hash=theRel+'/'+rel_index+'/';};function clearHashtag(){if(location.href.indexOf('#prettyPhoto')!==-1)location.hash="prettyPhoto";}
function getParam(name,url){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+name+"=([^&#]*)";var regex=new RegExp(regexS);var results=regex.exec(url);return(results==null)?"":results[1];}})(jQuery);var pp_alreadyInitialized=false;