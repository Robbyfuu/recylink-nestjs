import{r as t,u as m,j as s,L as d}from"./index-2eb89302.js";import{g as p,m as g}from"./graphql-axios-53b3e4aa.js";const x=()=>{const[i,n]=t.useState(""),[l,r]=t.useState(""),o=m(),c=a=>{a.preventDefault(),a.stopPropagation(),p.post("",{query:g.loginUser,variables:{loginInput:{email:i,password:l}}}).then(e=>{localStorage.setItem("authUser",JSON.stringify(e.data.data.login)),o("/home")}).catch(e=>{console.log(e)})};return s.jsx("div",{className:"container-login",children:s.jsxs("div",{className:"login-container",children:[s.jsxs("label",{htmlFor:"item-1",className:"item",children:[" ","Sign In"," "]})," ",s.jsx("div",{className:"login-form",children:s.jsxs("div",{className:"sign-in-htm",children:[s.jsx("div",{className:"group",children:s.jsx("input",{type:"text",placeholder:"email",id:"user",className:"input",onChange:a=>{n(a.target.value)}})}),s.jsx("div",{className:"group",children:s.jsx("input",{type:"password",placeholder:"password",id:"pass",className:"input",onChange:a=>{r(a.target.value)}})}),s.jsx("div",{className:"group",children:s.jsx("input",{className:"button",value:"Sign In",onClick:a=>c(a)})}),s.jsx("div",{className:"hr"}),s.jsx("div",{className:"footer",children:s.jsx(d,{to:"/register",className:"link",children:"Crear Cuenta"})})]})})]})})};export{x as SignIn};