import{w as M,X as C,E as q,e as c,Y as A,j as e,G as t,Z as g,J as x,x as n,H as m,T as i,$ as w,a0 as b,a1 as y,a2 as u,a3 as T,a4 as O,a5 as S,a6 as J,a7 as N,a8 as U,a9 as V,aa as f,ab as _}from"./index-uybPwjYe.js";import{G as Q,A as X,F as Y,c as Z,a as v,d as K,b as ee,C as te,e as se,f as re,g as ne}from"./AuthFooter-BCo57aJU.js";import"./Link-BoZYNTVY.js";const ie=({...l})=>{const r=M(),k=C(r.breakpoints.down("md")),I=q(s=>s.customization),[E,P]=c.useState(!0),[h,F]=c.useState(""),B=A(),D=async()=>{console.error("Login")},[d,W]=c.useState(!1),z=()=>{W(!d)},G=s=>{s.preventDefault()};async function H(s){try{await N(U,s.email,s.password),B("/")}catch(a){F(a.message)}}return e.jsxs(e.Fragment,{children:[e.jsxs(t,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(g,{children:e.jsxs(x,{disableElevation:!0,fullWidth:!0,onClick:D,size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:r.palette.grey[50],borderColor:r.palette.grey[100]},children:[e.jsx(n,{sx:{mr:{xs:1,sm:2,width:20}},children:e.jsx("img",{src:Q,alt:"google",width:16,height:16,style:{marginRight:k?8:16}})}),"Sign in with Google"]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(n,{sx:{alignItems:"center",display:"flex"},children:[e.jsx(m,{sx:{flexGrow:1},orientation:"horizontal"}),e.jsx(x,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${r.palette.grey[100]} !important`,color:`${r.palette.grey[900]}!important`,fontWeight:500,borderRadius:`${I.borderRadius}px`},disableRipple:!0,disabled:!0,children:"OR"}),e.jsx(m,{sx:{flexGrow:1},orientation:"horizontal"})]})}),e.jsx(t,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:e.jsx(n,{sx:{mb:2},children:e.jsx(i,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),e.jsx(t,{item:!0,xs:24,children:h!=""?e.jsx(X,{severity:"error",sx:{width:"100%"},children:JSON.stringify(h)}):""}),e.jsx(Y,{initialValues:{email:"",password:"",submit:null},onSubmit:H,validationSchema:Z().shape({email:v().email("Must be a valid email").max(255).required("Email is required"),password:v().max(255).required("Password is required")}),children:({errors:s,handleBlur:a,handleChange:j,handleSubmit:L,isSubmitting:R,touched:o,values:p})=>e.jsxs("form",{noValidate:!0,onSubmit:L,...l,children:[e.jsxs(w,{fullWidth:!0,error:!!(o.email&&s.email),sx:{...r.typography.customInput},children:[e.jsx(b,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),e.jsx(y,{id:"outlined-adornment-email-login",type:"email",value:p.email,name:"email",onBlur:a,onChange:j,label:"Email Address / Username",inputProps:{}}),o.email&&s.email&&e.jsx(u,{error:!0,id:"standard-weight-helper-text-email-login",children:s.email})]}),e.jsxs(w,{fullWidth:!0,error:!!(o.password&&s.password),sx:{...r.typography.customInput},children:[e.jsx(b,{htmlFor:"outlined-adornment-password-login",children:"Password"}),e.jsx(y,{id:"outlined-adornment-password-login",type:d?"text":"password",value:p.password,name:"password",onBlur:a,onChange:j,endAdornment:e.jsx(T,{position:"end",children:e.jsx(O,{"aria-label":"toggle password visibility",onClick:z,onMouseDown:G,edge:"end",size:"large",children:d?e.jsx(K,{}):e.jsx(ee,{})})}),label:"Password",inputProps:{}}),o.password&&s.password&&e.jsx(u,{error:!0,id:"standard-weight-helper-text-password-login",children:s.password})]}),e.jsxs(S,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[e.jsx(J,{control:e.jsx(te,{checked:E,onChange:$=>P($.target.checked),name:"checked",color:"primary"}),label:"Remember me"}),e.jsx(i,{variant:"subtitle1",color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Password?"})]}),s.submit&&e.jsx(n,{sx:{mt:3},children:e.jsx(u,{error:!0,children:s.submit})}),e.jsx(n,{sx:{mt:2},children:e.jsx(g,{children:e.jsx(x,{disableElevation:!0,disabled:R,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]})})]})},de=()=>{const l=C(r=>r.breakpoints.down("md"));return V(),A(),e.jsx(se,{children:e.jsxs(t,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(t,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(re,{children:e.jsxs(t,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(t,{item:!0,sx:{mb:3},children:e.jsx(f,{to:"#","aria-label":"logo",children:e.jsx(_,{})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(t,{item:!0,children:e.jsxs(S,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(i,{color:"secondary.main",gutterBottom:!0,variant:l?"h3":"h2",children:"Hi, Welcome Back!"}),e.jsx(i,{variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Enter your credentials to continue"})]})})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(ie,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(m,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:e.jsx(i,{component:f,to:"/pages/register/register3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),e.jsx(t,{item:!0,xs:12,sx:{m:3,mt:1},children:e.jsx(ne,{})})]})})};export{de as default};
