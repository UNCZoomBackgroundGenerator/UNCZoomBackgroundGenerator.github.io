WebFont.load({google:{families:["Open+Sans:800,600,400"]}});function objectDidChange(a,b){var aProps=Object.getOwnPropertyNames(a);var bProps=Object.getOwnPropertyNames(b);if(aProps.length!=bProps.length)return true;for(var i=0;i<aProps.length;i++){var propName=aProps[i];if(typeof(a[propName])=="object"){var aNestedProp=Object.getOwnPropertyNames(a[propName]);var bNestedProp=Object.getOwnPropertyNames(b[propName]);for(var j=0;j<aNestedProp.length;j++){nestedPropName=aNestedProp[j];if(aNestedProp[nestedPropName]!==bNestedProp[nestedPropName]){console.log(nestedPropName);return true;}}} else if(a[propName]!==b[propName])return true;} return false;} var fillStyle={carolinaBlue:"#4B9CD3",translucentWhite:"rgba(255, 255, 255, 0.2)",white:"#FFFFFF"};var canvas=document.getElementById('c');var context=canvas.getContext('2d');var firstNameCanvas=document.getElementById('first-name-canvas');var firstNameContext=firstNameCanvas.getContext('2d');var firstNameCanvasInitialRight=-77;firstNameContext.fillStyle=fillStyle.carolinaBlue;firstNameContext.fillRect(0,0,firstNameCanvas.width,firstNameCanvas.height);firstNameCanvas.style.right=firstNameCanvasInitialRight+"px";var lastNameCanvas=document.getElementById('last-name-canvas');var lastNameContext=lastNameCanvas.getContext('2d');var lastNameCanvasInitialRight=-77;lastNameContext.fillStyle=fillStyle.carolinaBlue;lastNameContext.fillRect(0,0,lastNameCanvas.width,lastNameCanvas.height);lastNameCanvas.style.right=lastNameCanvasInitialRight+"px";var firstAvailableWidth=0;var lastAvailableWidth=0;var elements={appContainer:document.getElementById("app-container"),downloadButton:document.getElementById("download"),nameForm:document.getElementById("name-form"),firstNameInput:document.getElementById("first-name"),lastNameInput:document.getElementById("last-name"),namePlaceholder:document.getElementById('name-placeholder'),logoSelector:document.getElementById("logo"),pronounSelector:document.getElementById("pronouns")};var nameBarPlaceholderOpacity=elements.namePlaceholder.style.opacity;var maxTextWidth=610;var initialState={first_name:"",last_name:""};var state=initialState;var actions={updateAvailableWidth:"UPDATE_AVAILABLE_WIDTH",updateFirstName:"UPDATE_FIRST_NAME",updateLastName:"UPDATE_LAST_NAME",updateNameRect:"UPDATE_NAME_RECT",resetNameBarRect:"RESET_NAME_BAR_RECT",updateNameBarRect:"UPDATE_NAME_BAR_RECT",addPronouns:"ADD_PRONOUNS",removePronouns:"REMOVE_PRONOUNS"};function reducer(state,action={}){switch(action.type){case"UPDATE_FIRST_NAME":return{...state,first_name:action.payload};case"UPDATE_LAST_NAME":return{...state,last_name:action.payload};default:return state;}} (function(){context.imageSmoothingQuality="high";context.fillStyle=fillStyle.carolinaBlue;context.fillRect(0,0,canvas.width,canvas.height);context.fillStyle=fillStyle.white;elements.firstNameInput.focus();})();function captureObject(_object){return Object.assign({},_object)} function updateState(type,payload){var _state=captureObject(state);state=reducer(state,{type:type,payload:payload});if(objectDidChange(state,_state)){}} function forceChangeEvent(element,event){var event=new Event(event,{bubbles:true});element.dispatchEvent(event);} function clearRect({x,y,width=960,height}){context.fillStyle=fillStyle.carolinaBlue;context.clearRect(x,y,width,height);context.fillRect(x,y,width,height);} function syncRights(canvas){var f=firstNameCanvas.style.right.replace("px","");var l=lastNameCanvas.style.right.replace("px","");var rmax=Math.max(f,l);if(canvas=="last"){firstNameCanvas.style.right=rmax+"px"} else if(canvas=="first"){lastNameCanvas.style.right=rmax+"px"} var firstHasLeastAvailable=firstAvailableWidth<lastAvailableWidth?true:false;var lastHasLeastAvailable=lastAvailableWidth<firstAvailableWidth?true:false;if(0==firstAvailableWidth||0==lastAvailableWidth){} else if(firstHasLeastAvailable){lastNameCanvas.style.right=firstNameCanvas.style.right;} else if(lastHasLeastAvailable){firstNameCanvas.style.right=lastNameCanvas.style.right;} if(!!state.first_name||!!state.last_name){elements.namePlaceholder.style.opacity=0;}else{elements.namePlaceholder.style.opacity=nameBarPlaceholderOpacity;} forceChangeEvent(elements.pronounSelector,"change");} function updateFirstName(text){var _x=!!text?10:0;firstNameContext.fillStyle=fillStyle.carolinaBlue;firstNameContext.fillRect(_x,0,firstNameCanvas.width,firstNameCanvas.height);firstNameContext.font="800 112px Open Sans";firstNameContext.fillStyle=fillStyle.white;if(!!text){firstNameContext.fillRect(0,0,10,firstNameCanvas.height)} var availableWidth=652-242-firstNameContext.measureText(text).width;var newRight=Math.floor(firstNameCanvasInitialRight-(availableWidth/2));newRight=25<=newRight?25:newRight;if(availableWidth<=0){firstNameCanvas.style.right=newRight+"px"} else{firstNameCanvas.style.right=firstNameCanvasInitialRight+"px"} updateState(actions.updateFirstName,text);firstNameContext.fillStyle=firstNameContext.white;firstNameContext.fillText(text,40,108,maxTextWidth);firstAvailableWidth=availableWidth;syncRights("first");} function updateLastName(text){var _x=!!text?10:0;lastNameContext.fillStyle=fillStyle.carolinaBlue;lastNameContext.fillRect(_x,0,lastNameCanvas.width,lastNameCanvas.height);lastNameContext.font="600 88px Open Sans";lastNameContext.fillStyle=fillStyle.white;if(!!text){lastNameContext.fillRect(0,0,10,lastNameCanvas.height)} var availableWidth=652-242-lastNameContext.measureText(text).width;var newRight=Math.floor(lastNameCanvasInitialRight-(availableWidth/2));newRight=25<=newRight?25:newRight;if(availableWidth<=0){lastNameCanvas.style.right=newRight+"px"} else{lastNameCanvas.style.right=lastNameCanvasInitialRight+"px"} updateState(actions.updateLastName,text);lastNameContext.fillStyle=lastNameContext.white;lastNameContext.fillText(text,40,68,maxTextWidth);lastAvailableWidth=availableWidth;syncRights("last");} function updateName(inputName,text){if(inputName=="first-name"){updateFirstName(text)} if(inputName=="last-name"){updateLastName(text)}} elements.nameForm.addEventListener("keyup",function(event){if(!!state.first_name){elements.lastNameInput.disabled=false} if(event.which==8||46<event.which){updateName(event.target.name,event.target.value.trim())}},false);elements.logoSelector.addEventListener("change",function(event){var logoSrcPaths={"unc-logo":"UNC-logo.png","kfbs-logo":"UNC-KFBS-logo.png"};clearRect({x:0,y:0,width:canvas.width/2,height:canvas.height/2});if(logoSrcPaths.hasOwnProperty(event.target.value)){var imageObj=new Image();imageObj.src=logoSrcPaths[event.target.value];imageObj.onload=()=>context.drawImage(imageObj,0,0);}},false);elements.pronounSelector.addEventListener("change",function(event){var pronouns=["","He/him/his","She/her/hers","They/them/theirs","Ze/Hir/Hirs"];var appContainerX=elements.appContainer.getBoundingClientRect().x;var firstNameCanvasX=firstNameCanvas.getBoundingClientRect().x;var x=48+(firstNameCanvasX*2)-(appContainerX*2);var y=!state.last_name?324:364;clearRect({x:1224,y:284,width:960,height:94});context.fillStyle=fillStyle.white;context.font="400 48px Open Sans";context.fillText(pronouns[event.target.value],x,y);},false);function downloadImage(){var appContainerX=elements.appContainer.getBoundingClientRect().x;var firstNameCanvasX=firstNameCanvas.getBoundingClientRect().x;var x=(firstNameCanvasX*2)-(appContainerX*2);var firstNameImage=firstNameContext.getImageData(0,0,652,136);var lastNameImage=lastNameContext.getImageData(0,0,652,96);context.putImageData(firstNameImage,x,50);context.putImageData(lastNameImage,x,186);canvas.toBlob(function(blob){fileNameSuffix="";if(!!elements.firstNameInput.value&&!!elements.lastNameInput.value){fileNameSuffix+="-"+elements.firstNameInput.value;fileNameSuffix+="-"+elements.lastNameInput.value;} else if(!!elements.firstNameInput.value){fileNameSuffix+="-"+elements.firstNameInput.value;} else if(!!elements.lastNameInput.value){fileNameSuffix+="-"+elements.lastNameInput.value;} saveAs(blob,"UNC-Zoom-Background"+fileNameSuffix);if(!!database){var dbNamesChildRef=database.ref().child("names/");var newNameEntryId=dbNamesChildRef.push().key;dbNamesChildRef.child(newNameEntryId).update({first_name:state.first_name||"",last_name:state.last_name||""},(error)=>{if(error){console.log("Firebase error: "+error)} else{return false}});}});} elements.downloadButton.addEventListener("click",function(){downloadImage()},false);canvas.addEventListener("click",function(){downloadImage()},false);(function(global,factory){if(typeof define==="function"&&define.amd){define([],factory);}else if(typeof exports!=="undefined"){factory();}else{var mod={exports:{}};factory();global.FileSaver=mod.exports;}})(this,function(){"use strict";var _global=typeof window==='object'&&window.window===window?window:typeof self==='object'&&self.self===self?self:typeof global==='object'&&global.global===global?global:void 0;function bom(blob,opts){if(typeof opts==='undefined')opts={autoBom:false};else if(typeof opts!=='object'){console.warn('Deprecated: Expected third argument to be a object');opts={autoBom:!opts};} if(opts.autoBom&&/^s*(?:text/S*|application/xml|S*/S*+xml)s*;.*charsets*=s*utf-8/i.test(blob.type)){return new Blob([String.fromCharCode(0xFEFF),blob],{type:blob.type});} return blob;} function download(url,name,opts){var xhr=new XMLHttpRequest();xhr.open('GET',url);xhr.responseType='blob';xhr.onload=function(){saveAs(xhr.response,name,opts);};xhr.onerror=function(){console.error('could not download file');};xhr.send();} function corsEnabled(url){var xhr=new XMLHttpRequest();xhr.open('HEAD',url,false);try{xhr.send();}catch(e){} return xhr.status>=200&&xhr.status<=299;} function click(node){try{node.dispatchEvent(new MouseEvent('click'));}catch(e){var evt=document.createEvent('MouseEvents');evt.initMouseEvent('click',true,true,window,0,0,0,80,20,false,false,false,false,0,null);node.dispatchEvent(evt);}} var isMacOSWebView=/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent);var saveAs=_global.saveAs||(typeof window!=='object'||window!==_global?function saveAs(){}:'download'in HTMLAnchorElement.prototype&&!isMacOSWebView?function saveAs(blob,name,opts){var URL=_global.URL||_global.webkitURL;var a=document.createElement('a');name=name||blob.name||'download';a.download=name;a.rel='noopener';if(typeof blob==='string'){a.href=blob;if(a.origin!==location.origin){corsEnabled(a.href)?download(blob,name,opts):click(a,a.target='_blank');}else{click(a);}}else{a.href=URL.createObjectURL(blob);setTimeout(function(){URL.revokeObjectURL(a.href);},4E4);setTimeout(function(){click(a);},0);}}:'msSaveOrOpenBlob'in navigator?function saveAs(blob,name,opts){name=name||blob.name||'download';if(typeof blob==='string'){if(corsEnabled(blob)){download(blob,name,opts);}else{var a=document.createElement('a');a.href=blob;a.target='_blank';setTimeout(function(){click(a);});}}else{navigator.msSaveOrOpenBlob(bom(blob,opts),name);}}:function saveAs(blob,name,opts,popup){popup=popup||open('','_blank');if(popup){popup.document.title=popup.document.body.innerText='downloading...';} if(typeof blob==='string')return download(blob,name,opts);var force=blob.type==='application/octet-stream';var isSafari=/constructor/i.test(_global.HTMLElement)||_global.safari;var isChromeIOS=/CriOS/[d]+/.test(navigator.userAgent);if((isChromeIOS||force&&isSafari||isMacOSWebView)&&typeof FileReader!=='undefined'){var reader=new FileReader();reader.onloadend=function(){var url=reader.result;url=isChromeIOS?url:url.replace(/^data:[^;]*;/,'data:attachment/file;');if(popup)popup.location.href=url;else location=url;popup=null;};reader.readAsDataURL(blob);}else{var URL=_global.URL||_global.webkitURL;var url=URL.createObjectURL(blob);if(popup)popup.location=url;else location.href=url;popup=null;setTimeout(function(){URL.revokeObjectURL(url);},4E4);}});_global.saveAs=saveAs.saveAs=saveAs;if(typeof module!=='undefined'){module.exports=saveAs;}}); /*! @source http://purl.eligrey.com/github/canvas-toBlob.js/blob/master/canvas-toBlob.js */ (function(view){"use strict";var Uint8Array=view.Uint8Array,HTMLCanvasement=view.HTMLCanvasement,canvas_proto=HTMLCanvasement&&HTMLCanvasement.prototype,is_base64_regex=/s*;s*base64s*(?:;|$)/i,to_data_url="toDataURL",base64_ranks,decode_base64=function(base64){var len=base64.length,buffer=new Uint8Array(len/4*3|0),i=0,outptr=0,last=[0,0],state=0,save=0,rank,code,undef;while(len--){code=base64.charCodeAt(i++);rank=base64_ranks[code-43];if(rank!==255&&rank!==undef){last[1]=last[0];last[0]=code;save=(save<<6)|rank;state++;if(state===4){buffer[outptr++]=save>>>16;if(last[1]!==61){buffer[outptr++]=save>>>8;} if(last[0]!==61){buffer[outptr++]=save;} state=0;}}} return buffer;};if(Uint8Array){base64_ranks=new Uint8Array([62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);} if(HTMLCanvasement&&(!canvas_proto.toBlob||!canvas_proto.toBlobHD)){if(!canvas_proto.toBlob) canvas_proto.toBlob=function(callback,type){if(!type){type="image/png";}if(this.mozGetAsFile){callback(this.mozGetAsFile("canvas",type));return;}if(this.msToBlob&&/^s*image/pngs*(?:$|;)/i.test(type)){callback(this.msToBlob());return;} var args=Array.prototype.slice.call(arguments,1),dataURI=this[to_data_url].apply(this,args),header_end=dataURI.indexOf(","),data=dataURI.substring(header_end+1),is_base64=is_base64_regex.test(dataURI.substring(0,header_end)),blob;if(Blob.fake){blob=new Blob if(is_base64){blob.encoding="base64";}else{blob.encoding="URI";} blob.data=data;blob.size=data.length;}else if(Uint8Array){if(is_base64){blob=new Blob([decode_base64(data)],{type:type});}else{blob=new Blob([decodeURIComponent(data)],{type:type});}} callback(blob);};if(!canvas_proto.toBlobHD&&canvas_proto.toDataURLHD){canvas_proto.toBlobHD=function(){to_data_url="toDataURLHD";var blob=this.toBlob();to_data_url="toDataURL";return blob;}}else{canvas_proto.toBlobHD=canvas_proto.toBlob;}}}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content||this));