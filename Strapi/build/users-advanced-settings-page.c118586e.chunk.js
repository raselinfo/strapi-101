"use strict";(self.webpackChunklearn_strapi=self.webpackChunklearn_strapi||[]).push([[9460],{58350:(j,g,t)=>{t.r(g),t.d(g,{default:()=>U});var e=t(27279),i=t(20600),v=t(65e3),f=t(42925),y=t(35750),x=t(6854),o=t(68263),p=t(33110),h=t(19915),M=t(86049),O=t(25667),B=t(5007),a=t(551),n=t(63838),d=t(8766),r=t(71563),l=t(61020),c=t(40464),S=t(84419),s=t(99688);const L=[{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,s.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,s.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,s.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var b=t(47853);const F=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),z=b.Ry().shape({email_confirmation_redirection:b.nK().when("email_confirmation",{is:!0,then:b.Z_().matches(F).required(),otherwise:b.Z_().nullable()}),email_reset_password:b.Z_(n.I0.string).matches(F,n.I0.regex).nullable()}),W=()=>e.createElement(n.O4,{permissions:S._.readAdvancedSettings},e.createElement(N,null)),N=()=>{const{formatMessage:E}=(0,l.Z)(),A=(0,n.lm)(),{lockApp:H,unlockApp:C}=(0,n.o1)(),{notifyStatus:K}=(0,i.G)(),G=(0,c.useQueryClient)(),{get:$,put:Q}=(0,n.kY)(),{formatAPIError:X}=(0,n.So)();(0,n.go)();const{isLoading:Y,allowedActions:{canUpdate:I}}=(0,n.ss)({update:S._.updateAdvancedSettings}),{isLoading:J,data:D}=(0,c.useQuery)(["users-permissions","advanced"],async()=>{const{data:m}=await $("/users-permissions/advanced");return m},{onSuccess(){K(E({id:(0,s.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){A({type:"warning",message:{id:(0,s.OB)("notification.error"),defaultMessage:"An error occured"}})}}),V=Y||J,w=(0,c.useMutation)(m=>Q("/users-permissions/advanced",m),{async onSuccess(){await G.invalidateQueries(["users-permissions","advanced"]),A({type:"success",message:{id:(0,s.OB)("notification.success.saved"),defaultMessage:"Saved"}}),C()},onError(m){A({type:"warning",message:X(m)}),C()},refetchActive:!0}),{isLoading:k}=w,q=async m=>{H(),w.mutate({...m,email_confirmation_redirection:m.email_confirmation?m.email_confirmation_redirection:""})};return V?e.createElement(v.o,{"aria-busy":"true"},e.createElement(n.SL,{name:E({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(f.T,{title:E({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(y.D,null,e.createElement(n.dO,null))):e.createElement(v.o,{"aria-busy":k},e.createElement(n.SL,{name:E({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(r.J9,{onSubmit:q,initialValues:D.settings,validateOnChange:!1,validationSchema:z,enableReinitialize:!0},({errors:m,values:T,handleChange:Z,isSubmitting:_,dirty:ee})=>e.createElement(n.l0,null,e.createElement(f.T,{title:E({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:e.createElement(x.z,{loading:_,type:"submit",disabled:I?!ee:!I,startIcon:e.createElement(d.Z,null),size:"S"},E({id:"global.save",defaultMessage:"Save"}))}),e.createElement(y.D,null,e.createElement(o.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(h.Z,{variant:"delta",as:"h2"},E({id:"global.settings",defaultMessage:"Settings"})),e.createElement(M.r,{gap:6},e.createElement(O.P,{col:6,s:12},e.createElement(B.P,{label:E({id:(0,s.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:T.default_role,hint:E({id:(0,s.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:u=>Z({target:{name:"default_role",value:u}})},D.roles.map(u=>e.createElement(a.W,{key:u.type,value:u.type},u.name)))),L.map(u=>{let R=T[u.name];return R||(R=u.type==="bool"?!1:""),e.createElement(O.P,{key:u.name,...u.size},e.createElement(n.jm,{...u,value:R,error:m[u.name],disabled:u.name==="email_confirmation_redirection"&&T.email_confirmation===!1,onChange:Z}))}))))))))},U=W},99688:(j,g,t)=>{t.d(g,{YX:()=>f,OB:()=>y.Z});var e=t(10124),i=t.n(e);const f=x=>Object.keys(x).reduce((o,p)=>{const h=x[p].controllers,M=Object.keys(h).reduce((O,B)=>(i()(h[B])||(O[B]=h[B]),O),{});return i()(M)||(o[p]={controllers:M}),o},{});var y=t(58655)},35750:(j,g,t)=>{t.d(g,{D:()=>v});var e=t(74081),i=t(68263);const v=({children:f})=>(0,e.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:f})},42925:(j,g,t)=>{t.d(g,{T:()=>M});var e=t(74081),i=t(27279),v=t(37652);const f=a=>{const n=(0,i.useRef)(null),[d,r]=(0,i.useState)(!0),l=([c])=>{r(c.isIntersecting)};return(0,i.useEffect)(()=>{const c=n.current,S=new IntersectionObserver(l,a);return c&&S.observe(n.current),()=>{c&&S.disconnect()}},[n,a]),[n,d]};var y=t(66705);const x=(a,n)=>{const d=(0,y.W)(n);(0,i.useLayoutEffect)(()=>{const r=new ResizeObserver(d);return Array.isArray(a)?a.forEach(l=>{l.current&&r.observe(l.current)}):a.current&&r.observe(a.current),()=>{r.disconnect()}},[a,d])};var o=t(68263),p=t(33110),h=t(19915);const M=a=>{const n=(0,i.useRef)(null),[d,r]=(0,i.useState)(null),[l,c]=f({root:null,rootMargin:"0px",threshold:0});return x(l,()=>{l.current&&r(l.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{n.current&&r(n.current.getBoundingClientRect())},[n]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:d?.height},ref:l,children:c&&(0,e.jsx)(B,{ref:n,...a})}),!c&&(0,e.jsx)(B,{...a,sticky:!0,width:d?.width})]})};M.displayName="HeaderLayout";const O=(0,v.ZP)(o.x)`
  width: ${({width:a})=>a?`${a/16}rem`:void 0};
  z-index: ${({theme:a})=>a.zIndices[1]};
`,B=i.forwardRef(({navigationAction:a,primaryAction:n,secondaryAction:d,subtitle:r,title:l,sticky:c,width:S,...s},P)=>{const L=typeof r=="string";return c?(0,e.jsx)(O,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:S,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{children:[a&&(0,e.jsx)(o.x,{paddingRight:3,children:a}),(0,e.jsxs)(o.x,{children:[(0,e.jsx)(h.Z,{variant:"beta",as:"h1",...s,children:l}),L?(0,e.jsx)(h.Z,{variant:"pi",textColor:"neutral600",children:r}):r]}),d?(0,e.jsx)(o.x,{paddingLeft:4,children:d}):null]}),(0,e.jsx)(p.k,{children:n?(0,e.jsx)(o.x,{paddingLeft:2,children:n}):void 0})]})}):(0,e.jsxs)(o.x,{ref:P,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:a?6:8,background:"neutral100","data-strapi-header":!0,children:[a?(0,e.jsx)(o.x,{paddingBottom:2,children:a}):null,(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{minWidth:0,children:[(0,e.jsx)(h.Z,{as:"h1",variant:"alpha",...s,children:l}),d?(0,e.jsx)(o.x,{paddingLeft:4,children:d}):null]}),n]}),L?(0,e.jsx)(h.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:r}):r]})})},65e3:(j,g,t)=>{t.d(g,{o:()=>y});var e=t(74081),i=t(37652),v=t(68263);const f=(0,i.ZP)(v.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,y=({labelledBy:x="main-content-title",...o})=>(0,e.jsx)(f,{"aria-labelledby":x,as:"main",id:"main-content",tabIndex:-1,...o})}}]);
