(function(t){function s(s){for(var a,o,c=s[0],r=s[1],l=s[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(s);while(p.length)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,s=0;s<i.length;s++){for(var e=i[s],a=!0,c=1;c<e.length;c++){var r=e[c];0!==n[r]&&(a=!1)}a&&(i.splice(s--,1),t=o(o.s=e[0]))}return t}var a={},n={app:0},i=[];function o(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)o.d(e,a,function(s){return t[s]}.bind(null,a));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var u=r;i.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"034f":function(t,s,e){"use strict";var a=e("64a9"),n=e.n(a);n.a},"0b56":function(t,s,e){},2727:function(t,s,e){"use strict";var a=e("65a3"),n=e.n(a);n.a},"341b":function(t,s,e){},"4ee2":function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"app",staticClass:"catodo",attrs:{id:"app",tabindex:"0"},on:{keyup:t.keyUp,keydown:t.keyDown}},[t._m(0),e("div",{staticClass:"catodo__items"},[t.tasks.length>0?e("div",{staticClass:"catodo__howtos"},[t._m(1),t._m(2)]):t._e(),e("NewTask",{ref:"newTask",attrs:{visible:t.visible.newTaskPopup},on:{update:function(s){return t.update()}}}),0!==t.tasks.length||t.visible.newTaskPopup?t._l(t.tasks,(function(t){return e("Task",{key:t.text,attrs:{task:t}})})):e("div",{staticClass:"catodo__notasks"},[t._v("\n            No tasks yet. To create a task hit "),e("span",{staticClass:"catodo__command"},[t._v("Ctrl+n")])])],2),e("Instructions",{attrs:{visible:t.visible.instructions}}),e("TaskPopup",{ref:"deleteTask",attrs:{visible:t.visible.deleteTaskPopup,label:"Enter the task id to be deleted: "},on:{update:function(s){return t.update()}}}),e("TaskPopup",{ref:"doneTask",attrs:{visible:t.visible.markAsDonePopup,label:"Enter the task id to be marked as done: "},on:{update:function(s){return t.update()}}}),t._m(3)],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h1",{staticClass:"catodo__title"},[t._v("\n        catodo 😺 "),e("span",{staticClass:"catodo__sub"},[t._v("A mouseless todo list")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"catodo__howto"},[e("span",{staticClass:"catodo__command catodo__command--small"},[t._v("Ctrl+d")]),t._v(" to delete a task \n            ")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"catodo__howto"},[e("span",{staticClass:"catodo__command catodo__command--small"},[t._v("Ctrl+s")]),t._v(" to mark as done\n            ")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"catodo__info"},[e("span",{staticClass:"catodo__command"},[t._v("Ctrl+i")]),t._v(" for instructions\n    ")])}],o=(e("6b54"),e("ac6a"),e("7514"),e("d225")),c=e("b0b4"),r=function(){function t(){Object(o["a"])(this,t)}return Object(c["a"])(t,null,[{key:"saveTask",value:function(s){var e=t.getTasks();e.unshift({id:t.generateTaskId(),text:s.text,status:"CREATED"}),localStorage.setItem("tasks",JSON.stringify(e))}},{key:"deleteTask",value:function(s){var e=t.getTasks();e=e.filter((function(t){return t.id.toUpperCase()!==s.toUpperCase()})),localStorage.setItem("tasks",JSON.stringify(e))}},{key:"getTasks",value:function(){var t=JSON.parse(localStorage.getItem("tasks"));return t||[]}},{key:"getTask",value:function(t){var s=JSON.parse(localStorage.getItem("tasks")),e=s.find((function(s){return s.id.toUpperCase()===t.toUpperCase()}));return e||console.log("Cannot find task ".concat(t)),e}},{key:"updateTask",value:function(s,e){var a=t.getTasks();a.forEach((function(t){t.id.toUpperCase()===s.toUpperCase()&&(t.status=e)})),localStorage.setItem("tasks",JSON.stringify(a))}},{key:"deleteAllTasks",value:function(){return localStorage.setItem("tasks","[]"),[]}},{key:"generateTaskId",value:function(){return Math.random().toString(36).substring(2,4).toUpperCase()}}]),t}(),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:["task",{"task--done":"DONE"===t.task.status}]},[e("span",{staticClass:"task__id"},[t._v("id: "+t._s(t.task.id))]),e("span",{staticClass:"task__text"},[t._v(t._s(t.task.text))])])},u=[],d={props:["task"]},p=d,_=(e("fcc1"),e("2877")),v=Object(_["a"])(p,l,u,!1,null,null,null),f=v.exports,m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"dtask"},[e("div",{staticClass:"dtask__cont"},[e("label",{staticClass:"dtask__label"},[t._v(t._s(t.label))]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.id,expression:"id",modifiers:{trim:!0}}],ref:"input",staticClass:"dtask__input",attrs:{maxlength:"2"},domProps:{value:t.id},on:{input:[function(s){s.target.composing||(t.id=s.target.value.trim())},function(s){t.id=t.id.toUpperCase()}],blur:function(s){return t.$forceUpdate()}}})]),e("CommandTips")],1)},k=[],h=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ctips"},[e("span",{staticClass:"ctips__tip"},[e("span",{staticClass:"catodo__command catodo__command--secondary"},[t._v("Esc")]),t._v(" abort\n\t")]),e("span",{staticClass:"ctips__tip"},[e("span",{staticClass:"catodo__command"},[t._v("Enter")]),t._v(" save\n\t")])])}],b={},T=b,P=(e("bd47"),Object(_["a"])(T,h,C,!1,null,null,null)),y=P.exports,g=new a["a"],w={props:["visible","label"],data:function(){return{id:""}},components:{CommandTips:y},methods:{updateTask:function(t){if(this.id){if("DELETE"==t.action)return r.deleteTask(this.id),this.id="",void this.$emit("update");if("DONE"==t.action){var s=r.getTask(this.id);if(!s)return this.id="",void this.$emit("update");var e="CREATED"===s.status?"DONE":"CREATED";return r.updateTask(this.id,e),this.id="",void this.$emit("update")}console.error("Action ".concat(t.action," not set"))}}},mounted:function(){var t=this;g.$on("update-task",(function(s){return t.updateTask(s)}))}},$=w,x=(e("cf3b"),Object(_["a"])($,m,k,!1,null,null,null)),E=x.exports,O=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"newt"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.text,expression:"text",modifiers:{trim:!0}}],ref:"new",staticClass:"newt__input",domProps:{value:t.text},on:{input:function(s){s.target.composing||(t.text=s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),e("CommandTips")],1)},D=[],S={props:{visible:Boolean},components:{CommandTips:y},data:function(){return{text:""}},methods:{saveTask:function(){this.text&&(r.saveTask({text:this.text}),this.text="",this.$emit("update"))},abortTask:function(){this.text=""}},mounted:function(){var t=this;g.$on("save-task",(function(){return t.saveTask()})),g.$on("abort-task",(function(){return t.abortTask()}))}},j=S,A=(e("6a6f"),Object(_["a"])(j,O,D,!1,null,null,null)),N=A.exports,U=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:["cins",{"cins--active":t.visible}]},[e("h2",{staticClass:"cins__title"},[t._v("📝 Instructions")]),e("p",{staticClass:"cins__subtitle"},[t._v("Here are all the commands you need to start managing your todo list.")]),t._m(0)])},I=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cins__items"},[e("div",{staticClass:"cins__item"},[e("span",{staticClass:"cins__command-cont"},[e("span",{staticClass:"catodo__command"},[t._v("Esc")])]),t._v("\n             Close this window\n        ")]),e("div",{staticClass:"cins__item"},[e("span",{staticClass:"cins__command-cont"},[e("span",{staticClass:"catodo__command"},[t._v("Ctrl+i")])]),t._v("\n             Open this window\n        ")]),e("div",{staticClass:"cins__item cins__item--section"},[e("span",{staticClass:"cins__command-cont"},[e("span",{staticClass:"catodo__command"},[t._v("Ctrl+n")])]),t._v("\n             Create a new task\n        ")]),e("div",{staticClass:"cins__item"},[e("span",{staticClass:"cins__command-cont"},[e("span",{staticClass:"catodo__command"},[t._v("Enter")])]),t._v("\n            Save task\n        ")]),e("div",{staticClass:"cins__item"},[e("span",{staticClass:"cins__command-cont"},[e("span",{staticClass:"catodo__command"},[t._v("Esc")])]),t._v("\n            Abort task creation\n        ")]),e("div",{staticClass:"cins__item cins__item--section"},[e("span",{staticClass:"cins__command-cont"},[e("span",{staticClass:"catodo__command"},[t._v("Ctrl+d")])]),t._v("\n            Open task deletion popup\n        ")]),e("div",{staticClass:"cins__item"},[e("span",{staticClass:"cins__command-cont"},[e("span",{staticClass:"catodo__command"},[t._v("Esc")])]),t._v("\n            Abort task deletion\n        ")]),e("div",{staticClass:"cins__item"},[e("span",{staticClass:"cins__command-cont"},[e("span",{staticClass:"catodo__command catodo__command--small"},[t._v("Task id + Enter")])]),t._v("\n            Delete task\n        ")]),e("div",{staticClass:"cins__item"},[e("span",{staticClass:"cins__command-cont"},[e("span",{staticClass:"catodo__command catodo__command--small"},[t._v("Ctrl+0 (zero)")])]),t._v("\n            Delete all tasks\n        ")])])}],J={props:["visible"]},M=J,R=(e("2727"),Object(_["a"])(M,U,I,!1,null,null,null)),L=R.exports,z={name:"app",components:{TaskPopup:E,NewTask:N,Task:f,Instructions:L},data:function(){return{tasks:[],ctrlPressed:!1,visible:{instructions:!1,newTaskPopup:!1,deleteTaskPopup:!1,markAsDonePopup:!1}}},methods:{getTasks:function(){this.tasks=r.getTasks()},keyDown:function(t){17===t.keyCode&&(this.ctrlPressed=!0)},keyUp:function(t){var s=this;17===t.keyCode&&(this.ctrlPressed=!1),this.ctrlPressed&&78===t.keyCode&&(this.ctrlPressed=!1,this.hidePopups(),this.visible.newTaskPopup=!0,this.$nextTick((function(){s.$refs.newTask.$refs.new.focus()}))),this.ctrlPressed&&73===t.keyCode&&(this.ctrlPressed=!1,this.visible.instructions=!0),this.visible.instructions&&27===t.keyCode&&(this.visible.instructions=!1),this.visible.newTaskPopup&&13===t.keyCode&&(this.ctrlPressed=!1,g.$emit("save-task")),this.visible.deleteTaskPopup&&13===t.keyCode&&(this.ctrlPressed=!1,g.$emit("update-task",{action:"DELETE"})),this.visible.markAsDonePopup&&13===t.keyCode&&(this.ctrlPressed=!1,g.$emit("update-task",{action:"DONE"})),this.visible.newTaskPopup&&27===t.keyCode&&(this.visible.newTaskPopup=!1,g.$emit("abort-task"),this.$nextTick((function(){s.$refs.app.focus()}))),this.visible.deleteTaskPopup&&27===t.keyCode&&(this.visible.deleteTaskPopup=!1,this.$nextTick((function(){s.$refs.app.focus()}))),this.visible.markAsDonePopup&&27===t.keyCode&&(this.visible.markAsDonePopup=!1,this.$nextTick((function(){s.$refs.app.focus()}))),this.ctrlPressed&&48===t.keyCode&&(this.ctrlPressed=!1,r.deleteAllTasks(),this.update()),this.ctrlPressed&&68===t.keyCode&&this.tasks.length>0&&(this.hidePopups(),this.visible.deleteTaskPopup=!0,this.$nextTick((function(){s.$refs.deleteTask.$refs.input.focus()}))),this.ctrlPressed&&83===t.keyCode&&this.tasks.length>0&&(this.ctrlPressed=!1,this.hidePopups(),this.visible.markAsDonePopup=!0,this.$nextTick((function(){s.$refs.doneTask.$refs.input.focus()})))},hidePopups:function(){this.visible.newTaskPopup=!1,this.visible.deleteTaskPopup=!1,this.visible.markAsDonePopup=!1},update:function(){this.hidePopups(),this.tasks=r.getTasks(),this.$refs.app.focus()}},mounted:function(){this.getTasks(),this.$refs.app.focus()}},B=z,H=(e("034f"),Object(_["a"])(B,n,i,!1,null,null,null)),q=H.exports;e("4ee2"),e("5aea");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(q)}}).$mount("#app")},"5aea":function(t,s,e){},"64a9":function(t,s,e){},"65a3":function(t,s,e){},"6a6f":function(t,s,e){"use strict";var a=e("0b56"),n=e.n(a);n.a},9759:function(t,s,e){},bd47:function(t,s,e){"use strict";var a=e("9759"),n=e.n(a);n.a},cf3b:function(t,s,e){"use strict";var a=e("341b"),n=e.n(a);n.a},f182:function(t,s,e){},fcc1:function(t,s,e){"use strict";var a=e("f182"),n=e.n(a);n.a}});
//# sourceMappingURL=app.f50dad26.js.map