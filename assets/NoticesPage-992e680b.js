import{u as d,r as a,a as x,b as h,j as e,C as j,O as p}from"./index-ad3e539c.js";import{N}from"./NoticesSearch-357b8075.js";import{A as S,N as b,P,F as g,a as C,b as F,c as v,d as A}from"./filtersQueries-374ba82d.js";import"./AttentionModalWrapper-599c1418.js";const E={to1:!1,to2:!1,from2:!1,female:!1,male:!1},V=()=>{const[t,o]=d(),[s,l]=a.useState(E),[r,i]=a.useState({}),n=x(),u=h(),f=a.useMemo(()=>Object.fromEntries([...t]),[t]);a.useEffect(()=>{o({...r,...S(s.to1,s.to2,s.from2,s.female,s.male)})},[s,f,o,r,t]),a.useEffect(()=>{n.pathname==="/notices"&&u("/notices/sell")},[]);const m=c=>{i(c?{query:c}:{})};return e.jsx(j,{children:e.jsxs(b,{children:[e.jsx(P,{children:"Find your favorite pet"}),e.jsx("div",{children:e.jsx(N,{onSubmit:m})}),e.jsxs(g,{children:[e.jsx(C,{searchParams:t}),e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(v,{setCheckboxValue:l,checkboxValue:s}),e.jsx(A,{state:{from:n}})]})})]}),e.jsx(a.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(p,{})})]})})};function M(){return e.jsx(V,{})}export{M as default};
