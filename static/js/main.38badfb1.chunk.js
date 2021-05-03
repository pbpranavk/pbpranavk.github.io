(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),o=(a(95),a(81)),c=a(154),s=a(34),m=a(8),d=a(156),p=a(132),u=a(133),h=a(134),f=a(49),v=a(135),g=a(136),y=Object(p.a)({root:{maxWidth:275,margin:"2%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14}}),E=function(e){var t=e.className,a=void 0===t?"":t,n=e.preHeader,l=void 0===n?"":n,i=e.title,o=void 0===i?"":i,c=e.description,s=void 0===c?"":c,d=e.link,p=void 0===d?"":d,E=y(),b=Object(m.f)();return r.a.createElement(u.a,{className:"".concat(E.root," ").concat(a)},r.a.createElement(h.a,null,r.a.createElement(f.a,{className:E.title,color:"textSecondary",gutterBottom:!0},l),r.a.createElement(f.a,{variant:"h5",component:"h2"},o),r.a.createElement(f.a,{variant:"body2",component:"p"},s)),r.a.createElement(v.a,null,r.a.createElement(g.a,{size:"small",variant:"contained",onClick:function(){b.push(p)}},"Read")))},b=a(137),x=a(138),w=a(139),k=a(73),N=a.n(k),C=function(e){var t=e.title,a=void 0===t?"":t,n=e.backUrl,l=void 0===n?"":n,i=Object(m.f)();return r.a.createElement(b.a,{position:"fixed",style:{backgroundColor:"#ffffff"}},r.a.createElement(x.a,null,r.a.createElement(w.a,{container:!0},r.a.createElement(w.a,{item:!0,xs:1,style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){i.push(l)}},r.a.createElement(N.a,{color:"secondary"}),r.a.createElement(f.a,{variant:"h5",color:"secondary"},"Back"))),r.a.createElement(w.a,{item:!0,xs:10,style:{display:"flex",justifyContent:"center"}},r.a.createElement(f.a,{variant:"h3",color:"primary"},a)),r.a.createElement(w.a,{item:!0,xs:1}))))},I=[{id:1,preHeader:"python",title:"Recursion",description:"A set of solutions with python using recurrence.\n     Topics covered: 1. Recurrence Relations & Time complexity 2. Problems & Solutions",link:"/article/recursion"}],j=function(e){return r.a.createElement("div",null,r.a.createElement(C,{title:"All Articles",backUrl:"/"}),r.a.createElement(d.a,{className:"mt-60",display:"flex",style:{marginTop:"10px",flexWrap:"wrap",justifyContent:"center"}},null===I||void 0===I?void 0:I.map((function(e){return r.a.createElement(E,{key:null===e||void 0===e?void 0:e.id,preHeader:(null===e||void 0===e?void 0:e.preHeader)||"",title:(null===e||void 0===e?void 0:e.title)||"",description:(null===e||void 0===e?void 0:e.description)||"",link:(null===e||void 0===e?void 0:e.link)||""})}))))},S=a(140),T=a(157),A=a(141),B=(a(66),[{path:"/articles",component:j},{path:"/article/recursion",component:function(e){var t;return r.a.createElement("div",null,r.a.createElement(C,{title:"Recursion",backUrl:"/articles"}),r.a.createElement("div",{className:"article-content"},r.a.createElement(f.a,{className:"mt-16"},"Recursion is a way to solve problems, in this methodology a function is called by itself."),r.a.createElement(f.a,{className:"mt-16"},"The main idea here is to solve the problem for input = 0 || 1 (Base case). For input = k (some random number in the input range) and then for input k + 1."),r.a.createElement(f.a,{className:"mt-16"},"Applications are:"),r.a.createElement(S.a,null,null===(t=["1. Dynamic Programming","2. Backtracking","3. Divide & Conquer(Binary Search, Quick Sort, Merger Sort)","4. DFS for Graph, Inorder/Preorder/Postorder traversal for trees"])||void 0===t?void 0:t.map((function(e){return r.a.createElement(T.a,null,r.a.createElement(A.a,null,e))}))),r.a.createElement(f.a,null,"Tail recursion is faster than non-tail recursion because modern compilers replace recursion stack with goto.")))}}]),R=a(47),P=a(74),D=a(17),O=a(149),W=a(153),L=a(75),_=a.n(L),M=a(142),F=Object(p.a)((function(){return{width90:{width:"90%"},container:{width:"100%",marginBottom:"4px"}}})),z=function(e){var t=e.index,a=void 0===t?0:t,n=e.title,l=void 0===n?"":n,i=e.description,o=void 0===i?"":i,c=e.img,s=void 0===c?"":c,m=F();return r.a.createElement(d.a,{mt:1,mb:1,style:{width:"90%"}},r.a.createElement(u.a,null,r.a.createElement(h.a,null,r.a.createElement(d.a,{display:"flex",justifyContent:"center"},r.a.createElement("div",{className:m.container},r.a.createElement(f.a,{variant:"h5",style:{paddingBottom:"8px"}},l),r.a.createElement("div",{style:{float:a%2===0?"right":"left",width:"130px",height:"100px",margin:"4px 8px 0px 8px"}},r.a.createElement(M.a,{style:{width:"100%",height:"100%"},image:s,title:"Live from space album cover"})),r.a.createElement(f.a,null," ",o))))))},H=a(155),J=a(151),U=a(143),G=a(144),K=a(145),V=a(146),q=a(147),Q=a(148),Z=a(150),$=[{to:"home",className:"navbar-home",title:"Home"},{to:"skills",className:"navbar-skills",title:"Skills"},{to:"work",className:"navbar-work",title:"Work"},{to:"articles",className:"navbar-home",title:"Articles"},{to:"journey",className:"navbar-home",title:"Journey"}],X=Object(p.a)((function(){return{cursorPointer:{cursor:"pointer"},whiteBackground:{backgroundColor:"#ffffff"},navLinks:{width:"45%",alignItems:"center",justifyContent:"flex-end"},navLinkText:{marginLeft:"20px",cursor:"pointer"}}})),Y=function(){var e=X(),t=Object(O.a)("(max-width:600px)"),a=Object(n.useState)(!1),l=Object(R.a)(a,2),i=l[0],o=l[1],c=function(){o(!i)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{position:"fixed",className:e.whiteBackground},r.a.createElement(x.a,null,r.a.createElement(d.a,{display:"flex",className:"width-100-percent"},r.a.createElement(d.a,{className:"width-60-percent"},r.a.createElement(D.Link,{activeClass:"active",className:"test1",to:"home",spy:!0,smooth:!0,duration:500},r.a.createElement(f.a,{className:e.cursorPointer,variant:"h5",color:"primary"},"P.B. Pranav Kumar"))),r.a.createElement(d.a,{display:"flex",className:e.navLinks},t?r.a.createElement(Z.a,{onClick:c,className:e.cursorPointer,color:"primary"}):r.a.createElement(r.a.Fragment,null,null===$||void 0===$?void 0:$.map((function(t){return r.a.createElement(D.Link,{activeClass:"active",className:"test1",to:t.to,spy:!0,smooth:!0,duration:500},r.a.createElement(f.a,{variant:"h5",color:"secondary",className:"".concat(t.className," ").concat(e.navLinkText)},t.title))}))))))),r.a.createElement(H.a,{anchor:"right",open:i,onClose:c},r.a.createElement(d.a,{className:"width-250-px"},r.a.createElement(S.a,null,$.map((function(e,t){var a=e.title,n=e.to;return r.a.createElement(D.Link,{activeClass:"active",className:"test1",to:n,onClick:c,spy:!0,smooth:!0,duration:500},r.a.createElement(T.a,{button:!0,key:a},r.a.createElement(J.a,null,function(e){switch(e){case 0:return r.a.createElement(U.a,null);case 1:return r.a.createElement(G.a,null);case 2:return r.a.createElement(K.a,null);case 3:return r.a.createElement(V.a,null);case 4:return r.a.createElement(q.a,null);case 5:return r.a.createElement(Q.a,null);default:return r.a.createElement(U.a,null)}}(t)),r.a.createElement(A.a,{primary:a})))}))))))},ee=a(83),te=function(e){var t=e.className,a=void 0===t?"":t,n=e.imgSrc,l=e.title,i=e.desc,o=e.link,c=e.linkTxt;return r.a.createElement(ee.a,{className:a,style:{margin:"2%"},variant:"outlined",elevation:3},r.a.createElement(d.a,{style:{width:"350px"}},r.a.createElement("img",{style:{height:"250px"},src:"".concat(n),alt:"text",className:"paper_image"}),r.a.createElement(d.a,{m:1,display:"flex",style:{flexDirection:"column",justifyContent:"center"}},r.a.createElement(f.a,{variant:"h5",color:"primary"},"".concat(l)),r.a.createElement(f.a,{variant:"body1",style:{marginTop:"5px"}},"".concat(i)),r.a.createElement(f.a,{style:{marginTop:"5px"}},r.a.createElement("a",{href:"".concat(o),target:"_blank",rel:"noopener noreferrer",className:"text-blue"},"".concat(c))))," "))},ae=function(e){var t=e.isMaxWidth600,a=void 0!==t&&t,n=e.classes,l=void 0===n?{}:n,i=e.heroSrc,o=void 0===i?"":i;return r.a.createElement(d.a,{mt:10,p:a?2:0,display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(w.a,{container:!0,component:d.a},r.a.createElement(w.a,{item:!0,md:7},r.a.createElement(d.a,{ml:a?0:4,display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"},r.a.createElement(f.a,{variant:"h3",className:l.title},"I'm a Software Developer."),r.a.createElement(f.a,{variant:"body1",className:l.titleDescription},"I spend my time developing intuitive UI components that are Clean, Responsive & Luxurious in React. I'm interested in building Robust, Fast & Secure Software Systems. I'm good at Data Structures & Algorithms as well."),r.a.createElement(d.a,{display:"flex",className:l.flexFlowWrap},r.a.createElement(D.Link,{activeClass:"active",className:"test1",to:"work",spy:!0,smooth:!0,duration:500},r.a.createElement(g.a,{variant:"contained",className:l.titleBtn},"My Work")),r.a.createElement(g.a,{variant:"contained",className:"".concat(l.ml8," ").concat(l.titleBtn),target:"_blank",href:"https://github.com/pbpranavk?tab=repositories"},"Github"),r.a.createElement(g.a,{variant:"contained",className:"".concat(l.ml8," ").concat(l.titleBtn),target:"_blank",rel:"noopener noreferrer",href:"https://drive.google.com/file/d/1nzDtpUVGLZdmJ4mGA_B4CpvAK_PI-Htd/view?usp=sharing"},"My Resume")))),r.a.createElement(w.a,{item:!0,md:5},r.a.createElement(d.a,{display:"flex",mt:2,pr:a?0:4,justifyContent:a?"flex-start":"flex-end",alignItems:"center",height:"100%"},r.a.createElement("img",{style:{width:"90%"},src:o,alt:"home"})))))},ne=a(152),re=a(5),le=Object(re.a)((function(e){return{root:{height:23,borderRadius:5,width:"100%"},colorPrimary:{backgroundColor:"secondary"},bar:{borderRadius:5,backgroundColor:"#e38e54"}}}))(ne.a),ie=Object(p.a)({skillsContent:{justifyContent:"center",alignItems:"center"},skillBox:{width:"60%",justifyContent:"center"}}),oe=function(e){var t=e.skillName,a=e.confidenceLevel,n=ie(),l=Object(O.a)("(max-width:1200px)");return r.a.createElement(d.a,{mt:4,display:"flex",className:n.skillsContent},r.a.createElement(d.a,{display:"flex",className:"".concat(n.skillBox," skill-box")},r.a.createElement(d.a,{display:"flex",className:"skill-name",style:{width:l?"35%":"20%"}},r.a.createElement(f.a,{variant:"h5",color:"secondary"},t)),r.a.createElement(d.a,{display:"flex",className:n.skillBox},r.a.createElement(le,{variant:"determinate",value:a}))))},ce=function(e){var t=e.classes,a=void 0===t?{justifyContentCenter:""}:t;return r.a.createElement(d.a,{mt:10},r.a.createElement(d.a,{display:"flex",className:a.justifyContentCenter},r.a.createElement(f.a,{variant:"h3",style:{fontWeight:"bold",fontSize:"40px"},color:"primary"},"My Skills")),r.a.createElement(d.a,{mt:6},r.a.createElement(oe,{skillName:"React",confidenceLevel:85}),r.a.createElement(oe,{skillName:"Python",confidenceLevel:75}),r.a.createElement(oe,{skillName:"Data Structures & Algorithms",confidenceLevel:55}),r.a.createElement(oe,{skillName:"Infra",confidenceLevel:35})))},se=function(e){var t=e.classes,a=void 0===t?{}:t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{mt:10},r.a.createElement(d.a,{display:"flex",className:a.justifyContentCenter},r.a.createElement(f.a,{variant:"h3",className:a.sectionTitle,color:"primary"},"My Work")),r.a.createElement(d.a,{display:"flex",className:a.sectionContent},r.a.createElement(te,{imgSrc:"react_animated_navbar.png",title:"Animated Navbar in React",desc:"A Stripe style animated Navbar built with React, styled-components & react-flip library. ",link:"https://codesandbox.io/s/react-stripe-style-navbar-5r8x4",linkTxt:"View on CodeSandbox"}),r.a.createElement(te,{imgSrc:"spidywebar.png",title:"Augmented Reality on the web",desc:"A marker based Augmented Reality app for the web created with react and aframe.",link:"https://github.com/pbpranavk/archive/tree/master/spidyWebAR",linkTxt:"View on Github"}),r.a.createElement(te,{imgSrc:"gradientCards2.png",title:"Gradient Cards",desc:"A set of cards with smooth gradients that go easy on eye as weel as attract\n                  focus which are built with React. These can be used when you want to style your UI with rather a vibrant colors\n                  to provide a soothing effect to the user.",link:"https://8xzcw.csb.app/",linkTxt:"View deployed version"}),r.a.createElement(te,{imgSrc:"event_driven_arch.png",title:"Exploring react query",desc:"A codesandbox where I go throught the well established API called react-query which can be used\n                     along with axios to retrieve data from a REST/GraphQL API. It can also mutate(POST, PUT, DEL) data in the DB",link:"https://g658q.csb.app/",linkTxt:"View deployed version"}),r.a.createElement(te,{imgSrc:"django-react-k8s.png",title:"A fully orchestrated app",desc:"A full stack app built with django, django-rest-framework, react. I containerized\n                it using docker and wrote yml scripts for deployments, services to create resource in Kubernetes.\n                I've written those scripts for django main service(react is served from it), MySQL, Postgres & Redis\n                ",link:"https://github.com/pbpranavk/full_stack_app_with_orchestration",linkTxt:"Check it out"}),r.a.createElement(te,{className:a.workCardPadding,imgSrc:"cancer_testing.jpg",title:"Neural Net with Keras",desc:"I've built an Artificial Neural Network with Keras on the\n                  Indian Pima Indians Diabetes Dataset.",link:"https://www.kaggle.com/pranavcoder/keras-ann",linkTxt:"Check it out"}))))},me=function(e){var t=e.classes,a=void 0===t?{}:t;return r.a.createElement(d.a,{mt:10},r.a.createElement(d.a,{display:"flex",className:a.justifyContentCenter},r.a.createElement(f.a,{variant:"h3",className:a.sectionTitle,color:"primary"},"My Journey")),r.a.createElement(d.a,{display:"flex",className:a.sectionContent},r.a.createElement(z,{index:0,title:"An Intro to Programming with Python",description:"I started programming in 2015 and the first language I learnt was Python.\n                 I learnt the basics of the language and explored the various packages it had to offer.\n                  I was pleasantly surprised when I understood how powerful it was. From numpy to\n                  Pytorch, from gpio to drone-kit. from SimpleHTTPServer to Django. I quickly understood\n                  that software is developed as a collective effort and open source has a pivotal role in\n                  its development.\n                  ",img:"pyth.jpeg"}),r.a.createElement(z,{index:1,title:"Self Driving Car",description:"In my second year of B.Tech I contributed to a project at our R&D cell\n              in KMIT. We took a remote controlled car and replaced its circuit board with a raspberry pi.\n              We then hosted a server and there by a web page to control it through that webpage from a\n              mobile. We created a path for it to travel. We attached a camera to it and took images\n              with it. We feed this data to an Artificial Neural Network. We got an accuracy of 84%.\n              This gave me a deep exposure into the world of machine and deep learning. I went through the\n              cutting edge research in this space.I explored Capsule Networks, CNN, RNN, LSTM, GRU etc.\n              ",img:"car.png"}),r.a.createElement(z,{index:2,title:"Toil with Java",description:"In my third year of B.Tech I started learning more about Big Data and\n              its engineering. I started with Hadoop and slowly explored few more Big Data Technologies\n              like Spark, Pig, Hive, Sqoop, Flume & ZooKeeper. I wrote code in this phase of my software\n              journey in Java because python ran on only one thread and most importantly MapReduce\n              was predominantly written in Java. I learnt all the core concepts of Java along the way.\n              My first OO experience was with Java. In the same phase I explored emerging tech like\n              Blockchain and IOT.\n              ",img:"bigD.png"}),r.a.createElement(z,{index:3,title:"Cross Platform App Dev",description:"In my final year of Engineering, I got an internship with Kony. I\n              was building cross platform mobile apps with javascript, initially js was a bit\n              confusing and as I understood more and more I fell in love with language. In the\n              same time I explored Unity and C#. I built few AR and VR applications with it.\n              ",img:"rn-android.png"}),r.a.createElement(z,{index:4,title:"Full Stack Dev",description:"Finally after my graduation, I joined my first company (Beautiful Code) as a full time\n              Software Engineer :). I learnt about gRPC and micro-services here. 2020 was bang\n              our company had to reinvent themselves, so did I. I find myself building easy to use and\n              smooth, responsive UI components these days.\n              ",img:"full_stack.jpeg"})))},de=a(77),pe=a.n(de),ue=a(78),he=a.n(ue),fe=a(79),ve=a.n(fe),ge=function(e){return r.a.createElement("div",{className:"flex footer mt-24"},r.a.createElement(g.a,{href:"https://github.com/pbpranavk/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(pe.a,{className:"footer-icon margin-right-10px wheat-color"})),r.a.createElement(g.a,{href:"https://twitter.com/pbpranav24/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(he.a,{className:"footer-icon margin-right-10px wheat-color"})),r.a.createElement(g.a,{href:"https://www.linkedin.com/in/p-b-pranav-kumar-b0563b147/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(ve.a,{className:"footer-icon wheat-color"})))},ye=Object(p.a)({list:{margin:"20px"}}),Ee=function(e){var t,a=ye(),n=Object(m.f)();return r.a.createElement("div",{className:a.list},r.a.createElement(d.a,{display:"flex",style:{justifyContent:"center"}},r.a.createElement(f.a,{variant:"h3",style:{fontWeight:"bold",fontSize:"40px"},color:"primary"},"Articles")),r.a.createElement(d.a,{display:"flex",style:{marginTop:"10px",flexWrap:"wrap",justifyContent:"center"}},null===I||void 0===I||null===(t=I.slice(0,3))||void 0===t?void 0:t.map((function(e,t){return r.a.createElement(E,{key:null===e||void 0===e?void 0:e.id,preHeader:(null===e||void 0===e?void 0:e.preHeader)||"",title:(null===e||void 0===e?void 0:e.title)||"",description:(null===e||void 0===e?void 0:e.description)||"",link:(null===e||void 0===e?void 0:e.link)||""})})),r.a.createElement(u.a,{style:{maxWidth:275,margin:"2%"}},r.a.createElement(h.a,null,r.a.createElement(f.a,{variant:"h5"},"View All Articles"),r.a.createElement(f.a,null,"See multiple articles on python, react & infra"),r.a.createElement(g.a,{className:"mt-20",variant:"outlined",size:"small",onClick:function(){n.push("/articles")}},"Go to Articles Home")))))},be=a(80),xe=a.n(be),we=a(54);function ke(){var e=Object(P.a)(["\n  display: block;\n  margin: 50px 20%;\n  border-color: red;\n"]);return ke=function(){return e},e}var Ne=Object(we.css)(ke()),Ce=Object(p.a)((function(e){return{mt:{marginTop:"8px"},mb:{marginBottom:"8px"},ml8:{marginLeft:"8px"},mx10:{marginRight:"5%",marginLeft:"5%"},primaryDivider:{backgroundColor:"#E86410"},textAlign:{textAlign:"justify"},workCardPadding:{},title:{color:"#000",fontSize:"45px"},titleDescription:{color:"#A4A4A4",fontSize:"28px",marginTop:"20px"},flexFlowWrap:{flexFlow:"wrap"},titleBtn:{marginTop:"40px",backgroundColor:"rgba(232, 100, 16, 0.69)"},justifyContentCenter:{justifyContent:"center"},sectionTitle:{fontWeight:"bold",fontSize:"40px"},sectionContent:{flexWrap:"wrap",justifyContent:"center"}}})),Ie=function(e){var t=Ce(),a=Object(n.useState)(!0),l=Object(R.a)(a,2),i=l[0],o=l[1],c=Object(O.a)("(max-width:600px)");return Object(n.useEffect)((function(){setTimeout((function(){o(!1);var e=document.getElementById("after-loader");e&&(e.className="after-loaded-visible");var t=document.getElementById("loader");t&&(t.className=" display-none")}),1e3)}),[]),i?r.a.createElement("div",{className:"loader",id:"loader"},r.a.createElement(_.a,{css:Ne,size:150,margin:1,color:"#000000",loading:i})):r.a.createElement("div",{className:"App"},r.a.createElement(Y,null),r.a.createElement(d.a,null,r.a.createElement(D.Element,{name:"home"},r.a.createElement(ae,{isMaxWidth600:c,classes:t,heroSrc:xe.a})),r.a.createElement(D.Element,{name:"skills"},r.a.createElement(ce,{classes:t})),r.a.createElement(D.Element,{name:"work"},r.a.createElement(se,{classes:t})),r.a.createElement(D.Element,{name:"articles"},r.a.createElement(Ee,null)),r.a.createElement(D.Element,{name:"journey"},r.a.createElement(me,{classes:t})),r.a.createElement(W.a,null),r.a.createElement(ge,null)))},je=Object(o.a)({palette:{primary:{main:"#E86410"},secondary:{main:"#DDAB8B"}},typography:{fontFamily:'"Comic Sans MS"'}});var Se=function(){return r.a.createElement(c.a,{theme:je},r.a.createElement(s.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(Ie,null)),null===B||void 0===B?void 0:B.map((function(e){return r.a.createElement(m.a,{path:e.path,exact:!0},e.component)})),r.a.createElement(m.a,{path:"*",exact:!0},"Not found"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,a){},80:function(e,t,a){e.exports=a.p+"static/media/hero.9f089f11.png"},90:function(e,t,a){e.exports=a(112)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.38badfb1.chunk.js.map