(this["webpackJsonpp8-frontend"]=this["webpackJsonpp8-frontend"]||[]).push([[0],{73:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),c=n.n(i),s=n(31),r=n.n(s),o=n(14),l=n(15),j=n(17),h=n(16),d=(n(73),n(26)),u=(n(39),n(11)),b=n(125),p=n(135),x=n(134),g=n(133),O=n(137),m=n(122),f=n(123),y=n(99),v=n(124),C=n(48),S=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChangeDate=function(e){console.log(e.target),a.setState({date:e.target}),console.log(a.state.date)},a.onChangeCardioType=function(e){console.log(e),a.setState({type:e.target.value})},a.onChangeMinutes=function(e){console.log(e),a.setState({minutes:e.target.value})},a.onChangeMiles=function(e){console.log(e),a.setState({miles:e.target.value})},a.onChangeCalories=function(e){console.log(e),a.setState({calories:e.target.value})},a.onSubmit=function(e){e.preventDefault(),C.post("https://sculpt-fitness.herokuapp.com/cardio/add",a.state).then((function(){console.log("attempt submission"),window.location="/cardio/history"}))},a.handleHistory=function(e){console.log("handled")},a.state={history:"",newCardio:{date:"",type:"",minutes:0,miles:0,calories:0}},a}return Object(l.a)(n,[{key:"render",value:function(){var e={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},t={margin:"5px",backgroundColor:"black"};return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(m.a,{position:"relative",children:Object(a.jsx)(f.a,{style:{backgroundColor:"black"},children:Object(a.jsx)(v.a,{href:"/",style:{textDecoration:"none",color:"white"},children:Object(a.jsx)(y.a,{variant:"h6",color:"inherit",noWrap:!0,children:"MRJ FITNESS"})})})}),Object(a.jsxs)(b.a,{style:e,children:[Object(a.jsx)("h1",{children:"Add Cardio"}),Object(a.jsx)(g.a,{maxWidth:400,children:Object(a.jsxs)("form",{onSubmit:this.onSubmit,style:e,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:"Date: "}),Object(a.jsx)(d.a,{defaultView:"month",onChange:this.onChangeDate})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{style:{margin:"5px",centerit:e},children:"Cardio Type: "}),Object(a.jsxs)("select",{style:{margin:"5px"},required:!0,onChange:this.onChangeCardioType,type:"select",children:[Object(a.jsx)("option",{children:"Running"}),Object(a.jsx)("option",{children:"Walking"}),Object(a.jsx)("option",{children:"Cycling"}),Object(a.jsx)("option",{children:"Swimming"})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:"Minutes: "}),Object(a.jsx)(p.a,{required:!0,onChange:this.onChangeMinutes,type:"number",placeholder:"Workout duration..."})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:"Miles: "}),Object(a.jsx)(p.a,{required:!0,onChange:this.onChangeMiles,type:"number",placeholder:"Workout distance..."})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:"Calories: "}),Object(a.jsx)(p.a,{required:!0,onChange:this.onChangeCalories,type:"number",placeholder:"Calories burned..."})]}),Object(a.jsx)(x.a,{variant:"contained",color:"primary",type:"submit",style:t,children:"Submit"}),Object(a.jsx)(v.a,{href:"/cardio/history",children:Object(a.jsx)(x.a,{variant:"contained",color:"primary",style:t,onClick:this.handleHistory,children:"Cardio History"})})]})})]})]})}}]),n}(i.Component),k=n(48),D=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChangeDate=function(e){a.setState({date:e})},a.onChangeMuscleGroup=function(e){a.setState({musclegroup:e.target.value})},a.onChangeLiftName=function(e){a.setState({lift:e.target.value})},a.onChangeSets=function(e){a.setState({_numberOfSets:e.target.value})},a.onChangeReps=function(e){var t=a.state.sets;if(t[e.target.id])t[e.target.id].reps=e.target.value;else{var n={reps:0,pounds:777};n.reps=e.target.value,t[e.target.id]=n}a.setState({sets:t})},a.onChangeRepWeight=function(e){var t=a.state.sets;if(t[e.target.id])t[e.target.id].pounds=e.target.value;else{var n={reps:777,pounds:0};n.pounds=e.target.value,t[e.target.id]=n}a.setState({sets:t})},a.onSubmit=function(e){e.preventDefault(),a.state._numberOfSets<a.state.sets.length&&console.log("user deleted at least one set");var t=a.state.sets;t.length=a.state._numberOfSets,a.setState({sets:t}),k.post("https://sculpt-fitness.herokuapp.com/lifting/add",a.state).then((function(){console.log("attempt submission"),window.location="/"}))},a.state={date:"",musclegroup:"",lift:"",sets:[],_numberOfSets:0},a}return Object(l.a)(n,[{key:"render",value:function(){for(var e={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},t={margin:"5px",backgroundColor:"black"},n=[],i=0;i<this.state._numberOfSets;i++)n.push(Object(a.jsxs)("div",{children:[Object(a.jsxs)(O.a,{children:["Set ",i+1," Reps: "]}),Object(a.jsx)(p.a,{id:i,required:!0,onChange:this.onChangeReps,type:"number",placeholder:"5",min:"1",max:"100"}),Object(a.jsxs)(O.a,{children:["Set ",i+1," Weight: "]}),Object(a.jsx)(p.a,{id:i,required:!0,onChange:this.onChangeRepWeight,type:"number",placeholder:"20",min:"10",step:"5",max:"1000"})]}));return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(m.a,{position:"relative",children:Object(a.jsx)(f.a,{style:{backgroundColor:"black"},children:Object(a.jsx)(v.a,{href:"/",style:{textDecoration:"none",color:"white"},children:Object(a.jsx)(y.a,{variant:"h6",color:"inherit",noWrap:!0,children:"MRJ FITNESS"})})})}),Object(a.jsxs)(b.a,{style:e,children:[Object(a.jsx)("h1",{children:"Add Lift"}),Object(a.jsx)(g.a,{maxWidth:400,children:Object(a.jsxs)("form",{onSubmit:this.onSubmit,style:e,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:"Date: "}),Object(a.jsx)(d.a,{defaultView:"month",onChange:this.onChangeDate})]}),Object(a.jsxs)("div",{style:{margin:"5px",centerit:e},children:[Object(a.jsx)(O.a,{children:"Muscle Group: "}),Object(a.jsxs)("select",{style:{margin:"5px"},required:!0,onChange:this.onChangeMuscleGroup,value:this.state.musclegroup,children:[Object(a.jsx)("option",{children:"Legs"}),Object(a.jsx)("option",{children:"Chest"}),Object(a.jsx)("option",{children:"Arms"}),Object(a.jsx)("option",{children:"Back"})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:"Lift Name: "}),Object(a.jsx)(p.a,{style:{margin:"5px"},required:!0,onChange:this.onChangeLiftName,type:"text",placeholder:"Squat"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:"Sets: "}),Object(a.jsx)(p.a,{required:!0,onChange:this.onChangeSets,type:"number",placeholder:"1",step:"1",min:"1",max:"10"})]}),n,Object(a.jsx)(x.a,{variant:"contained",color:"primary",type:"submit",style:t,children:"Submit"}),Object(a.jsx)(v.a,{href:"/lifting/history",children:Object(a.jsx)(x.a,{variant:"contained",color:"primary",type:"submit",style:t,children:"Lifting History"})})]})})]})]})}}]),n}(i.Component),M=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){fetch("http://sculpt-fitness.herokuapp.com/cardio").then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({history:e})}))},a.handleDelete=function(e){var t="https://sculpt-fitness.herokuapp.com/cardio/delete/"+e;console.log(t),fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){a.state.history=e})).catch((function(e){console.log(e)}))},a.handleUpdate=function(e){console.log(e);var t="https://sculpt-fitness.herokuapp.com/cardio/specific/"+e;console.log(t)},a.state={history:[]},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},n={margin:"5px",backgroundColor:"black"};return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(m.a,{position:"relative",children:Object(a.jsx)(f.a,{style:{backgroundColor:"black"},children:Object(a.jsx)(v.a,{href:"/",style:{textDecoration:"none",color:"white"},children:Object(a.jsx)(y.a,{variant:"h6",color:"inherit",noWrap:!0,children:"MRJ FITNESS"})})})}),Object(a.jsxs)(b.a,{style:t,children:[Object(a.jsx)("h1",{children:"Your Previous Cardio Workouts"}),Object(a.jsxs)(g.a,{children:[this.state.history.length?this.state.history.map((function(i,c){return console.log(i),Object(a.jsxs)("div",{style:t,children:[i.date,Object(a.jsx)("br",{}),i.type,Object(a.jsx)("br",{}),i.minutes," minutes",Object(a.jsx)("br",{}),i.miles," miles",Object(a.jsx)("br",{}),i.calories," cals",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)(v.a,{href:"/cardio/edit/".concat(i._id),children:[Object(a.jsx)(x.a,{style:n,onClick:function(){e.handleUpdate(i._id)},variant:"contained",color:"primary",children:"update"}),Object(a.jsx)("br",{})]}),Object(a.jsx)(x.a,{style:n,onClick:function(){e.handleDelete(i._id)},variant:"contained",color:"primary",children:"delete"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]},c)})):"",Object(a.jsx)(v.a,{href:"/cardio",children:Object(a.jsx)(x.a,{style:n,variant:"contained",color:"primary",children:"Back"})}),Object(a.jsx)(v.a,{href:"/",children:Object(a.jsx)(x.a,{style:n,variant:"contained",color:"primary",children:"Home"})})]})]})]})}}]),n}(i.Component),N=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){fetch("http://sculpt-fitness.herokuapp.com/lifting").then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({history:e})}))},a.handleUpdate=function(e){console.log(e);var t="https://sculpt-fitness.herokuapp.com/lifting/update/"+e;console.log(t)},a.handleDelete=function(e){var t="https://sculpt-fitness.herokuapp.com/lifting/delete/"+e;console.log(t),fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),a.state.history=e})).catch((function(e){console.log(e)}))},a.state={history:[]},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},n={margin:"5px",backgroundColor:"black"};return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(m.a,{position:"relative",children:Object(a.jsx)(f.a,{style:{backgroundColor:"black"},children:Object(a.jsx)(v.a,{href:"/",style:{textDecoration:"none",color:"white"},children:Object(a.jsx)(y.a,{variant:"h6",color:"inherit",noWrap:!0,children:"MRJ FITNESS"})})})}),Object(a.jsxs)(b.a,{style:t,children:[Object(a.jsx)("h1",{children:"Your Previous Lifts"}),Object(a.jsxs)(g.a,{children:[this.state.history.length?this.state.history.map((function(i,c){return Object(a.jsxs)("div",{style:t,children:[i.date,Object(a.jsx)("br",{}),i.musclegroup,Object(a.jsx)("br",{}),i.lift,Object(a.jsx)("br",{}),i.sets[0].reps," reps ",i.sets[0].pounds," lbs.",Object(a.jsx)("br",{}),Object(a.jsx)(v.a,{href:"/lifting/edit/".concat(i._id),children:Object(a.jsx)(x.a,{onClick:function(){e.handleUpdate(i._id)},variant:"contained",color:"primary",style:n,children:"update"})}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a,{onClick:function(){e.handleDelete(i._id)},style:n,variant:"contained",color:"primary",children:"delete"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]},c)})):"",Object(a.jsx)(v.a,{href:"/lifting",children:Object(a.jsx)(x.a,{style:n,variant:"contained",color:"primary",children:"Back"})}),Object(a.jsx)(v.a,{href:"/",children:Object(a.jsx)(x.a,{style:n,variant:"contained",color:"primary",children:"Home"})})]})]})]})}}]),n}(i.Component),w=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getDetails=function(){var e=a.props.match.params.id;fetch("https://sculpt-fitness.herokuapp.com/cardio/specific/"+e).then((function(e){return e.json()})).then((function(e){a.setState({date:e.date,type:e.type,minutes:e.minutes,miles:e.miles,calories:e.calories},(function(){console.log(a.state)}))})).catch((function(e){return console.log(e)}))},a.onChangeDate=function(e){console.log(e),a.setState({date:e})},a.onChangeCardioType=function(e){console.log(e),a.setState({type:e.target.value})},a.onChangeMinutes=function(e){console.log(e),a.setState({minutes:e.target.value})},a.onChangeMiles=function(e){console.log(e),a.setState({miles:e.target.value})},a.onChangeCalories=function(e){console.log(e),a.setState({calories:e.target.value})},a.onSubmit=function(e){e.preventDefault();var t="https://sculpt-fitness.herokuapp.com/cardio/update/"+a.props.match.params.id.toString();console.log(a.state),fetch(t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.state)}).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({date:e.date,type:e.type,minutes:e.minutes,miles:e.miles,calories:e.calories})})).catch((function(e){return console.log(e)})),alert("Updated successfully!"),window.location="/cardio/history/"},a.state={date:"",type:"",minutes:"",miles:"",calories:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getDetails()}},{key:"render",value:function(){var e={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},t={margin:"5px",backgroundColor:"black"};return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(m.a,{position:"relative",children:Object(a.jsx)(f.a,{style:{backgroundColor:"black"},children:Object(a.jsx)(v.a,{href:"/",style:{textDecoration:"none",color:"white"},children:Object(a.jsx)(y.a,{variant:"h6",color:"inherit",noWrap:!0,children:"MRJ FITNESS"})})})}),Object(a.jsx)("div",{children:Object(a.jsxs)(b.a,{style:e,children:[Object(a.jsx)(g.a,{children:Object(a.jsx)("h1",{children:"Edit Cardio Entry"})}),Object(a.jsx)(g.a,{children:Object(a.jsxs)("form",{onSubmit:this.onSubmit,style:e,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:"Date: "}),Object(a.jsx)(d.a,{defaultView:"month",onChange:this.onChangeDate})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{onSubmit:this.onSubmit,style:{centerit:e,margin:"5px"},children:"Cardio Type: "}),Object(a.jsxs)("select",{style:{margin:"5px"},required:!0,onChange:this.onChangeCardioType,type:"select",children:[Object(a.jsx)("option",{children:"Running"}),Object(a.jsx)("option",{children:"Walking"}),Object(a.jsx)("option",{children:"Cycling"}),Object(a.jsx)("option",{children:"Swimming"})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:"Minutes: "}),Object(a.jsx)(p.a,{required:!0,onChange:this.onChangeMinutes,type:"number",placeholder:"Workout duration..."})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:"Miles: "}),Object(a.jsx)(p.a,{required:!0,onChange:this.onChangeMiles,type:"number",placeholder:"Workout distance..."})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:"Calories: "}),Object(a.jsx)(p.a,{required:!0,onChange:this.onChangeCalories,type:"number",placeholder:"Calories burned..."})]}),Object(a.jsx)(x.a,{style:t,variant:"contained",color:"primary",type:"submit",children:"Submit"}),Object(a.jsx)(v.a,{href:"/cardio/history",children:Object(a.jsx)(x.a,{style:t,variant:"contained",color:"primary",children:"Back"})})]})})]})})]})}}]),n}(i.Component),T=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getDetails=function(){var e=a.props.match.params.id;fetch("https://sculpt-fitness.herokuapp.com/lifting/specific/"+e).then((function(e){return e.json()})).then((function(e){a.setState({date:e.date,musclegroup:e.musclegroup,lift:e.lift,sets:e.sets,_numberOfSets:e.sets.length},(function(){console.log(a.state)}))})).catch((function(e){return console.log(e)}))},a.onChangeDate=function(e){a.setState({date:e})},a.onChangeMuscleGroup=function(e){a.setState({musclegroup:e.target.value})},a.onChangeLiftName=function(e){a.setState({lift:e.target.value})},a.onChangeSets=function(e){a.setState({_numberOfSets:e.target.value})},a.onChangeReps=function(e){var t=a.state.sets;if(t[e.target.id])t[e.target.id].reps=e.target.value;else{var n={reps:0,pounds:777};n.reps=e.target.value,t[e.target.id]=n}a.setState({sets:t})},a.onChangeRepWeight=function(e){var t=a.state.sets;if(t[e.target.id])t[e.target.id].pounds=e.target.value;else{var n={reps:777,pounds:0};n.pounds=e.target.value,t[e.target.id]=n}a.setState({sets:t})},a.onSubmit=function(e){e.preventDefault();var t="https://sculpt-fitness.herokuapp.com/lifting/update/"+a.props.match.params.id;console.log(a.state),fetch(t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.state)}).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({date:e.date,musclegroup:e.musclegroup,lift:e.lift,sets:e.sets,_numberOfSets:e._numberOfSets})})).catch((function(e){return console.log(e)})),alert("Updated successfully!"),window.location="/lifting/history/"},a.state={date:"",musclegroup:"",lift:"",sets:[],_numberOfSets:0},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getDetails()}},{key:"render",value:function(){for(var e={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},t={margin:"5px",backgroundColor:"black"},n=[],i=0;i<this.state._numberOfSets;i++)n.push(Object(a.jsxs)("div",{children:[Object(a.jsxs)(O.a,{children:["Set ",i+1," Reps: "]}),Object(a.jsx)(p.a,{id:i,required:!0,onChange:this.onChangeReps,type:"number",placeholder:"5",min:"1",max:"100"}),Object(a.jsxs)(O.a,{children:["Set ",i+1," Weight: "]}),Object(a.jsx)(p.a,{id:i,required:!0,onChange:this.onChangeRepWeight,type:"number",placeholder:"20",min:"10",step:"5",max:"1000"})]},i));return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(m.a,{position:"relative",children:Object(a.jsx)(f.a,{style:{backgroundColor:"black"},children:Object(a.jsx)(v.a,{href:"/",style:{textDecoration:"none",color:"white"},children:Object(a.jsx)(y.a,{variant:"h6",color:"inherit",noWrap:!0,children:"MRJ FITNESS"})})})}),Object(a.jsx)("div",{children:Object(a.jsxs)(b.a,{style:e,children:[Object(a.jsx)(g.a,{children:Object(a.jsx)("h1",{children:"Edit Lifting Entry"})}),Object(a.jsx)(g.a,{children:Object(a.jsxs)("form",{style:e,onSubmit:this.onSubmit,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:"Date: "}),Object(a.jsx)(d.a,{defaultView:"month",onChange:this.onChangeDate})]}),Object(a.jsxs)("div",{style:{margin:"5px",centerit:e},children:[Object(a.jsx)(O.a,{style:{margin:"5px"},children:"Muscle Group: "}),Object(a.jsxs)("select",{required:!0,onChange:this.onChangeMuscleGroup,value:this.state.musclegroup,children:[Object(a.jsx)("option",{children:"Legs"}),Object(a.jsx)("option",{children:"Chest"}),Object(a.jsx)("option",{children:"Arms"}),Object(a.jsx)("option",{children:"Back"})]})]}),Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)(O.a,{children:"Lift Name: "}),Object(a.jsx)(p.a,{required:!0,onChange:this.onChangeLiftName,type:"text",placeholder:"Squat"})]}),Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)(O.a,{children:"Sets: "}),Object(a.jsx)(p.a,{required:!0,onChange:this.onChangeSets,type:"number",placeholder:"1",step:"1",min:"1",max:"10"})]}),n,Object(a.jsx)(x.a,{variant:"contained",color:"primary",type:"submit",style:t,children:"Submit"})]})}),Object(a.jsx)(v.a,{href:"/lifting/history",children:Object(a.jsx)(x.a,{style:t,variant:"contained",color:"primary",children:"Cancel"})})]})})]})}}]),n}(i.Component),R=n(8),W=n(129),E=n(132),L=n(131),q=n(130),I=n(127),_=n(128),B=n(126),F=n.p+"static/media/headerimg.45073048.jpg",J=(n(96),n.p+"static/media/runrunrun.abec4229.jpg"),U=n.p+"static/media/lifting1.865ba021.jpg",A=n.p+"static/media/runrunrun2.9edd996a.jpg",G=n.p+"static/media/lifting2.855b2ad8.jpg";function H(){return Object(a.jsx)(u.a,{children:Object(a.jsxs)(y.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(v.a,{color:"inherit",href:"https://material-ui.com/",children:"MRJ FITNESS"})," ",(new Date).getFullYear(),"."]})})}var P=Object(B.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,backgroundImage:"url(".concat(F,")"),backgroundPosition:"right center",backgroundSize:"cover",backgroundRepeat:"no-repeat",padding:e.spacing(8,0,6),paddingTop:"100px"},heroButtons:{marginTop:e.spacing(4),paddingTop:"80px"},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},toolbar:{backgroundColor:"black"},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary},container:{backgroundColor:"black"}}})),V=[1,2,3,4];function Y(){var e=P();return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(I.a,{}),Object(a.jsx)(u.a,{children:Object(a.jsx)(m.a,{position:"relative",children:Object(a.jsx)(f.a,{className:e.toolbar,children:Object(a.jsx)(v.a,{href:"/",style:{textDecoration:"none",color:"white"},children:Object(a.jsx)(y.a,{variant:"h6",color:"inherit",noWrap:!0,children:"MRJ FITNESS"})})})})}),Object(a.jsxs)("main",{children:[Object(a.jsx)("div",{className:e.heroContent,children:Object(a.jsxs)(b.a,{maxWidth:"sm",children:[Object(a.jsx)(y.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"MRJ FITNESS"}),Object(a.jsx)("div",{className:e.heroButtons,children:Object(a.jsxs)(_.a,{container:!0,spacing:2,justify:"center",children:[Object(a.jsx)(_.a,{item:!0}),Object(a.jsx)(_.a,{item:!0})]})})]})}),Object(a.jsx)(b.a,{className:e.cardGrid,maxWidth:"md",children:Object(a.jsxs)(_.a,{container:!0,spacing:4,children:[Object(a.jsx)(_.a,{item:!0,xs:2,sm:2,md:6,children:Object(a.jsxs)(W.a,{className:e.cards,children:[Object(a.jsx)(q.a,{className:e.cardMedia,image:J}),Object(a.jsxs)(L.a,{className:e.cardContent,children:[Object(a.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Cardio"}),Object(a.jsx)(y.a,{children:"Create & Submit Your Cardio Routine"})]}),Object(a.jsx)(E.a,{children:Object(a.jsx)(v.a,{href:"/cardio",style:{textDecoration:"none"},children:Object(a.jsx)(x.a,{size:"small",color:"primary",children:"View"})})})]})},V),Object(a.jsx)(_.a,{item:!0,xs:2,sm:2,md:6,children:Object(a.jsxs)(W.a,{className:e.cards,children:[Object(a.jsx)(q.a,{className:e.cardMedia,image:U}),Object(a.jsxs)(L.a,{className:e.cardContent,children:[Object(a.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Lifting"}),Object(a.jsx)(y.a,{children:"Create & Submit Your Lifting Routine"})]}),Object(a.jsx)(E.a,{children:Object(a.jsx)(v.a,{href:"/lifting",style:{textDecoration:"none"},children:Object(a.jsx)(x.a,{size:"small",color:"primary",children:"View"})})})]})},V),Object(a.jsx)(_.a,{item:!0,xs:2,sm:2,md:6,children:Object(a.jsxs)(W.a,{className:e.cards,children:[Object(a.jsx)(q.a,{className:e.cardMedia,image:A}),Object(a.jsxs)(L.a,{className:e.cardContent,children:[Object(a.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Cardio History"}),Object(a.jsx)(y.a,{children:"Access Your Cardio Routine. Update & Delete Available"})]}),Object(a.jsx)(E.a,{children:Object(a.jsx)(v.a,{href:"/cardio/history",style:{textDecoration:"none"},children:Object(a.jsx)(x.a,{size:"small",color:"primary",children:"View"})})})]})},V),Object(a.jsx)(_.a,{item:!0,xs:2,sm:2,md:6,children:Object(a.jsxs)(W.a,{className:e.cards,children:[Object(a.jsx)(q.a,{className:e.cardMedia,image:G}),Object(a.jsxs)(L.a,{className:e.cardContent,children:[Object(a.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Lifting History"}),Object(a.jsx)(y.a,{children:"Access Your Lifting Routine. Update & Delete Available"})]}),Object(a.jsx)(E.a,{children:Object(a.jsx)(v.a,{href:"/lifting/history",style:{textDecoration:"none"},children:Object(a.jsx)(x.a,{size:"small",color:"primary",children:"View"})})})]})},V)]})})]}),Object(a.jsxs)("footer",{className:e.footer,children:[Object(a.jsx)(y.a,{variant:"h6",align:"center",gutterBottom:!0,children:"MRJ FITNESS"}),Object(a.jsx)(y.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Matthew Knight Lewis. Robert Shirak. Jesse Maretz."}),Object(a.jsx)(H,{})]})]})}var z=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)(R.a,{exact:!0,path:"/",component:Y}),Object(a.jsx)(R.a,{exact:!0,path:"/cardio",component:S}),Object(a.jsx)(R.a,{exact:!0,path:"/lifting",component:D}),Object(a.jsx)(R.a,{exact:!0,path:"/cardio/history",component:M}),Object(a.jsx)(R.a,{exact:!0,path:"/lifting/history",component:N}),Object(a.jsx)(R.a,{exact:!0,path:"/cardio/edit/:id",component:w}),Object(a.jsx)(R.a,{exact:!0,path:"/lifting/edit/:id",component:T})]})})}}]),n}(i.Component),K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root")),K()}},[[97,1,2]]]);
//# sourceMappingURL=main.daed924b.chunk.js.map