(self.webpackChunklearn_strapi=self.webpackChunklearn_strapi||[]).push([[9735],{79194:(T,m,e)=>{"use strict";e.d(m,{v:()=>r});var t=e(27279),n=e(49402);function r(d,c){const o=(0,n.oR)();(0,t.useEffect)(()=>{o.injectReducer(d,c)},[o,d,c])}},75021:(T,m,e)=>{"use strict";e.d(m,{q:()=>d});var t=e(27279),n=e(63838),r=e(40464);function d({enabled:c}={enabled:!0}){const{get:o}=(0,n.kY)(),{data:E,isError:u,isLoading:s}=(0,r.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:v}}=await o("/admin/license-limit-information");return v},{enabled:c}),a=t.useMemo(()=>E??{},[E]),p=t.useCallback(v=>(a?.features??[]).find(i=>i.name===v)?.options??{},[a?.features]);return{license:a,getFeature:p,isError:u,isLoading:s}}},11984:(T,m,e)=>{"use strict";e.d(m,{CI:()=>d,FP:()=>o,Js:()=>u,_V:()=>r,fC:()=>n,rI:()=>E,xn:()=>c});var t=e(86978);function n({status:s,data:a}){return{type:t.qZ,payload:{status:s,workflow:a}}}function r(s){return{type:t.x4,payload:{stageId:s}}}function d(s={}){return{type:t.Ot,payload:s}}function c(s,a){return{type:t.Nj,payload:{stageId:s,...a}}}function o(s,a){return{type:t.$k,payload:{newIndex:a,oldIndex:s}}}function E(s){return{type:t.VS,payload:s}}function u(){return{type:t.gu}}},43390:(T,m,e)=>{"use strict";e.d(m,{eJ:()=>w,lx:()=>P,h4:()=>S,fC:()=>A});var t=e(27279),n=e(9),r=e(65e3),d=e(35750),c=e(42925),o=e(63838),E=e(97367),u=e(61020),s=e(52713),a=e(86978),p=e(33110),v=e(19915),l=e(27870),i=e(70627),h=e.n(i),x=e(37652);const M=(0,x.ZP)(p.k)`
  svg path {
    fill: ${({theme:g})=>g.colors.neutral600};
  }
`;function R({name:g}){return t.createElement(p.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,o.Q1)(300)},t.createElement(M,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(l.Z,{width:`${8/16}rem`})),t.createElement(v.Z,{fontWeight:"bold"},g))}R.propTypes={name:h().string.isRequired};function C({type:g,item:D}){switch(g){case a.uL.STAGE:return t.createElement(R,{...D});default:return null}}function P(){return t.createElement(s.r,{renderItem:C})}function A({children:g}){return t.createElement(n.A,null,t.createElement(r.o,{tabIndex:-1},t.createElement(d.D,null,g)))}function w({href:g}){const{formatMessage:D}=(0,u.Z)();return t.createElement(o.rU,{startIcon:t.createElement(E.Z,null),to:g},D({id:"global.back",defaultMessage:"Back"}))}function S({title:g,subtitle:D,navigationAction:W,primaryAction:k}){return t.createElement(t.Fragment,null,t.createElement(o.SL,{name:g}),t.createElement(c.T,{navigationAction:W,primaryAction:k,title:g,subtitle:D}))}},38705:(T,m,e)=>{"use strict";e.d(m,{uT:()=>C,fC:()=>w,Dx:()=>R});var t=e(27279),n=e(19915),r=e(33110),d=e(51444),c=e(61872),o=e(68263),E=e(77216),u=e(57747),s=e(30117),a=e(70627),p=e.n(a),v=e(61020),l=e(37652);const i=e.p+"0cd5f8915b265d5b1856.png",h="limits-title",x="https://strapi.io/pricing-cloud",M="https://strapi.io/contact-sales";function R({children:S}){return t.createElement(n.Z,{variant:"alpha",id:h},S)}R.propTypes={children:p().node.isRequired};function C({children:S}){return t.createElement(n.Z,{variant:"omega"},S)}C.propTypes={children:p().node.isRequired};function P(){const{formatMessage:S}=(0,v.Z)();return t.createElement(r.k,{gap:2,paddingTop:4},t.createElement(u.Q,{variant:"default",isExternal:!0,href:x},S({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(u.Q,{variant:"tertiary",isExternal:!0,href:M},S({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const A=l.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:S})=>`-${S.spaces[7]}`};
  margin-top: ${({theme:S})=>`-${S.spaces[7]}`};
  width: 360px;
`;function w({children:S,isOpen:g,onClose:D}){const{formatMessage:W}=(0,v.Z)();return g?t.createElement(d.P,{labelledBy:h},t.createElement(c.f,null,t.createElement(r.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(r.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},S,t.createElement(P,null)),t.createElement(r.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(A,{src:i,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(o.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(E.h,{icon:t.createElement(s.Z,null),"aria-label":W({id:"global.close",defaultMessage:"Close"}),onClick:D})))))):null}w.defaultProps={isOpen:!1},w.propTypes={children:p().node.isRequired,isOpen:p().bool,onClose:p().func.isRequired}},68997:(T,m,e)=>{"use strict";e.d(m,{U:()=>L});var t=e(27279),n=e(68263),r=e(33110),d=e(63838),c=e(70627),o=e.n(c),E=e(61020),u=e(49402),s=e(37652),a=e(11984),p=e(19915),v=e(82949);const l=(0,s.ZP)(v.Z)`
  > circle {
    fill: ${({theme:f})=>f.colors.neutral150};
  }
  > path {
    fill: ${({theme:f})=>f.colors.neutral600};
  }
`,i=(0,s.ZP)(n.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:f})=>f.spaces[6]};
    width: ${({theme:f})=>f.spaces[6]};

    > path {
      fill: ${({theme:f})=>f.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:f})=>f.colors.primary600} !important;
    ${p.Z} {
      color: ${({theme:f})=>f.colors.primary600} !important;
    }

    ${l} {
      > circle {
        fill: ${({theme:f})=>f.colors.primary600};
      }
      > path {
        fill: ${({theme:f})=>f.colors.neutral100};
      }
    }
  }

  &:active {
    ${p.Z} {
      color: ${({theme:f})=>f.colors.primary600};
    }

    ${l} {
      > circle {
        fill: ${({theme:f})=>f.colors.primary600};
      }
      > path {
        fill: ${({theme:f})=>f.colors.neutral100};
      }
    }
  }
`;function h({children:f,...B}){return t.createElement(i,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...B},t.createElement(r.k,{gap:2},t.createElement(l,{"aria-hidden":!0}),t.createElement(p.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},f)))}h.propTypes={children:o().node.isRequired};var x=e(30249),M=e(59438),R=e(68809),C=e(77216),P=e(3667),A=e(86049),w=e(25667),S=e(54095),g=e(28096),D=e(69083),W=e(18989),k=e(71563),K=e(92241),V=e(21440),b=e(21892),N=e(86978),Z=e(5318);const H=(0,Z.s)();function y(){return t.createElement(n.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function I({id:f,index:B,canDelete:U,canReorder:ee,canUpdate:G,isOpen:te=!1,stagesCount:z}){const Q=O=>`${O+1} of ${z}`,Y=O=>{J($({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:j.value,position:Q(O)}))},ie=O=>{J($({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:j.value,position:Q(O)}))},de=()=>{J($({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:j.value}))},ce=(O,X)=>{J($({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:j.value,position:Q(O)})),_((0,a.FP)(X,O))},[re,J]=t.useState(null),{formatMessage:$}=(0,E.Z)(),{trackUsage:ue}=(0,d.rS)(),_=(0,u.I0)(),[ae,me]=t.useState(te),[j,ne,ge]=(0,k.U$)(`stages.${B}.name`),[q,oe,pe]=(0,k.U$)(`stages.${B}.color`),[{handlerId:fe,isDragging:ve,handleKeyDown:he},Ee,ye,we,se]=(0,V.Y9)(ee,{index:B,item:{name:j.value},onGrabItem:Y,onDropItem:ie,onMoveItem:ce,onCancel:de,type:N.uL.STAGE}),Te=(0,b.FE)(Ee,ye),Se=H.map(({hex:O,name:X})=>({value:O,label:$({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:X}),color:O}));t.useEffect(()=>{se((0,K.rX)(),{captureDraggingState:!1})},[se,B]);const{themeColorName:xe}=(0,Z.k)(q.value)??{};return t.createElement(n.x,{ref:Te},re&&t.createElement(x.T,{"aria-live":"assertive"},re),ve?t.createElement(y,null):t.createElement(M.U,{size:"S",variant:"primary",onToggle:()=>{me(!ae),ae||ue("willEditStage")},expanded:ae,shadow:"tableShadow",error:ne.error??oe?.error??!1,hasErrorMessage:!1},t.createElement(R.B,{title:j.value,togglePosition:"left",action:(U||G)&&t.createElement(r.k,null,U&&t.createElement(C.h,{background:"transparent",icon:t.createElement(D.Z,null),label:$({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete stage"}),noBorder:!0,onClick:()=>_((0,a._V)(f))}),G&&t.createElement(C.h,{background:"transparent",forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,"data-handler-id":fe,ref:we,label:$({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:O=>O.stopPropagation(),onKeyDown:he},t.createElement(W.Z,null)))}),t.createElement(P.v,{padding:6,background:"neutral0",hasRadius:!0},t.createElement(A.r,{gap:4},t.createElement(w.P,{col:6},t.createElement(S.o,{...j,id:j.name,disabled:!G,label:$({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:ne.error??!1,onChange:O=>{ge.setValue(O.target.value),_((0,a.xn)(f,{name:O.target.value}))},required:!0})),t.createElement(w.P,{col:6},t.createElement(g.q4,{disabled:!G,error:oe?.error??!1,id:q.name,required:!0,label:$({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:O=>{pe.setValue(O),_((0,a.xn)(f,{color:O}))},value:q.value.toUpperCase(),startIcon:t.createElement(r.k,{as:"span",height:2,background:q.value,borderColor:xe==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},Se.map(({value:O,label:X,color:le})=>{const{themeColorName:Me}=(0,Z.k)(le);return t.createElement(g.ag,{value:O,key:O,startIcon:t.createElement(r.k,{as:"span",height:2,background:le,borderColor:Me==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},X)})))))))}I.propTypes=o().shape({id:o().number.isRequired,color:o().string.isRequired,canDelete:o().bool.isRequired,canReorder:o().bool.isRequired,canUpdate:o().bool.isRequired,stagesCount:o().number.isRequired}).isRequired;const F=(0,s.ZP)(n.x)`
  transform: translateX(-50%);
`;function L({canDelete:f,canUpdate:B,stages:U}){const{formatMessage:ee}=(0,E.Z)(),G=(0,u.I0)(),{trackUsage:te}=(0,d.rS)();return t.createElement(r.k,{direction:"column",gap:6,width:"100%"},t.createElement(n.x,{position:"relative",spacing:4,width:"100%"},t.createElement(F,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),t.createElement(r.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},U.map((z,Q)=>{const Y=z?.id??z.__temp_key__;return t.createElement(n.x,{key:`stage-${Y}`,as:"li"},t.createElement(I,{id:Y,index:Q,isOpen:!z.id,canDelete:U.length>1&&f,canReorder:U.length>1,canUpdate:B,stagesCount:U.length}))}))),B&&t.createElement(h,{type:"button",onClick:()=>{G((0,a.CI)({name:""})),te("willCreateStage")}},ee({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})))}L.defaultProps={canDelete:!0,canUpdate:!0,stages:[]},L.propTypes={canDelete:o().bool,canUpdate:o().bool,stages:o().arrayOf(o().shape({id:o().number,__temp_key__:o().number,name:o().string.isRequired}))}},85230:(T,m,e)=>{"use strict";e.d(m,{Y:()=>M});var t=e(27279),n=e(95546),r=e(19915),d=e(86049),c=e(25667),o=e(54095),E=e(63838),u=e(71563),s=e(70627),a=e.n(s),p=e(61020),v=e(49402),l=e(37652),i=e(11984);const h=(0,l.ZP)(n.ML)`
  padding-left: ${({theme:C})=>C.spaces[7]};
`,x=(0,l.ZP)(r.Z)`
  font-style: italic;
`;function M({canUpdate:C,contentTypes:{collectionTypes:P,singleTypes:A},currentWorkflow:w,workflows:S}){const{formatMessage:g,locale:D}=(0,p.Z)(),W=(0,v.I0)(),[k,K,V]=(0,u.U$)("name"),[b,N,Z]=(0,u.U$)("contentTypes"),H=(0,E.Xe)(D,{sensitivity:"base"});return t.createElement(d.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow"},t.createElement(c.P,{col:6},t.createElement(o.o,{...k,id:k.name,disabled:!C,label:g({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:K.error??!1,onChange:y=>{W((0,i.rI)({name:y.target.value})),V.setValue(y.target.value)},required:!0})),t.createElement(c.P,{col:6},t.createElement(n.NU,{...b,customizeContent:y=>g({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:y.length}),disabled:!C,error:N.error??!1,id:b.name,label:g({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:y=>{W((0,i.rI)({contentTypes:y})),Z.setValue(y)},placeholder:g({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"})},[...P.length>0?[{label:g({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:P.sort((y,I)=>H.compare(y.info.displayName,I.info.displayName)).map(y=>({label:y.info.displayName,value:y.uid}))}]:[],...A.length>0?[{label:g({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:A.map(y=>({label:y.info.displayName,value:y.uid}))}]:[]].map(y=>"children"in y?t.createElement(n.Ab,{key:y.label,label:y.label,values:y.children.map(I=>I.value.toString())},y.children.map(I=>{const{name:F}=S.find(L=>(w&&L.id!==w.id||!w)&&L.contentTypes.includes(I.value))??{};return t.createElement(h,{key:I.value,value:I.value},g({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:I.label,name:F,em:(...L)=>t.createElement(r.Z,{as:"em",fontWeight:"bold"},L),i:(...L)=>t.createElement(x,null,L)}))})):t.createElement(n.ML,{key:y.value,value:y.value},y.label)))))}const R=a().shape({uid:a().string.isRequired,info:a().shape({displayName:a().string.isRequired}).isRequired});M.defaultProps={canUpdate:!0,currentWorkflow:void 0},M.propTypes={canUpdate:a().bool,contentTypes:a().shape({collectionTypes:a().arrayOf(R).isRequired,singleTypes:a().arrayOf(R).isRequired}).isRequired,currentWorkflow:a().object,workflows:a().array.isRequired}},86978:(T,m,e)=>{"use strict";e.d(m,{$k:()=>u,Ef:()=>l,FT:()=>p,Nj:()=>E,Ot:()=>o,VS:()=>s,_X:()=>i,gu:()=>r,lv:()=>a,qZ:()=>d,sN:()=>n,uL:()=>v,x4:()=>c});var t=e(65331);const n="settings_review-workflows",r="Settings/Review_Workflows/RESET_WORKFLOW",d="Settings/Review_Workflows/SET_WORKFLOW",c="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",o="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",E="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",u="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",s="Settings/Review_Workflows/WORKFLOW_UPDATE",a={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},p=t.W.colors.primary600,v={STAGE:"stage"},l="numberOfWorkflows",i="stagesPerWorkflow"},52258:(T,m,e)=>{"use strict";e.d(m,{n:()=>r});var t=e(63838),n=e(40464);function r(d={}){const{get:c}=(0,t.kY)(),{id:o="",...E}=d,u={populate:"stages"},{data:s,isLoading:a,status:p,refetch:v}=(0,n.useQuery)(["review-workflows","workflows",o],async()=>(await c(`/admin/review-workflows/workflows/${o}`,{params:{...u,...E}})).data);let l=[];return o&&s?.data?l=[s.data]:Array.isArray(s?.data)&&(l=s.data),{meta:s?.meta??{},workflows:l,isLoading:a,status:p,refetch:v}}},3848:(T,m,e)=>{"use strict";e.d(m,{E:()=>c,I:()=>o});var t=e(61815),n=e(6078),r=e.n(n),d=e(86978);const c={status:"loading",serverState:{workflow:null},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[]},isDirty:!1,hasDeletedServerStages:!1}}};function o(u=c,s){return(0,t.Uy)(u,a=>{const{payload:p}=s;switch(s.type){case d.qZ:{const{status:v,workflow:l}=p;a.status=v,l&&(a.serverState.workflow=l,a.clientState.currentWorkflow.data={...l,stages:l.stages.map(i=>({...i,color:i?.color??d.FT}))}),a.clientState.currentWorkflow.hasDeletedServerStages=!1;break}case d.gu:{a.clientState.currentWorkflow.data=c.clientState.currentWorkflow.data,a.serverState=c.serverState;break}case d.x4:{const{stageId:v}=p,{currentWorkflow:l}=u.clientState;a.clientState.currentWorkflow.data.stages=l.data.stages.filter(i=>(i?.id??i.__temp_key__)!==v),l.hasDeletedServerStages||(a.clientState.currentWorkflow.hasDeletedServerStages=!!(u.serverState.workflow?.stages??[]).find(i=>i.id===v));break}case d.Ot:{const{currentWorkflow:v}=u.clientState;v.data||(a.clientState.currentWorkflow.data={stages:[]});const l=E(a.clientState.currentWorkflow.data.stages);a.clientState.currentWorkflow.data.stages.push({...p,color:p?.color??d.FT,__temp_key__:l});break}case d.Nj:{const{currentWorkflow:v}=u.clientState,{stageId:l,...i}=p;a.clientState.currentWorkflow.data.stages=v.data.stages.map(h=>(h.id??h.__temp_key__)===l?{...h,...i}:h);break}case d.$k:{const{currentWorkflow:{data:{stages:v}}}=u.clientState,{newIndex:l,oldIndex:i}=p;if(l>=0&&l<v.length){const h=v[i];let x=[...v];x.splice(i,1),x.splice(l,0,h),a.clientState.currentWorkflow.data.stages=x}break}case d.VS:{a.clientState.currentWorkflow.data={...a.clientState.currentWorkflow.data,...p};break}default:break}u.clientState.currentWorkflow.data&&a.serverState.workflow?a.clientState.currentWorkflow.isDirty=!r()((0,t.Vk)(a.clientState.currentWorkflow).data,a.serverState.workflow):a.clientState.currentWorkflow.isDirty=!0})}const E=(u=[])=>{const s=u.map(a=>a.id??a.__temp_key__);return Math.max(...s,-1)+1}},5318:(T,m,e)=>{"use strict";e.d(m,{k:()=>r,s:()=>d});var t=e(65331),n=e(86978);function r(c){if(!c)return null;const E=Object.entries(t.W.colors).filter(([,u])=>u.toUpperCase()===c.toUpperCase()).reduce((u,[s])=>(n.lv?.[s]&&(u=s),u),null);return E?{themeColorName:E,name:n.lv[E]}:null}function d(){return Object.entries(n.lv).map(([c,o])=>({hex:t.W.colors[c].toUpperCase(),name:o}))}},66578:(T,m,e)=>{"use strict";e.d(m,{V:()=>d});var t=e(43433),n=e.n(t),r=e(47853);async function d({values:c,formatMessage:o}){const E=r.Ry({contentTypes:r.IX().of(r.Z_()),name:r.Z_().max(255,o({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:r.IX().of(r.Ry().shape({name:r.Z_().required(o({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,o({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",o({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(u){const{options:{context:s}}=this;return s.stages.filter(a=>a.name===u).length===1}),color:r.Z_().required(o({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)})).min(1)});try{return await E.validate(c,{abortEarly:!1,context:c}),!0}catch(u){let s={};return u instanceof r.p8&&u.inner.forEach(a=>{n()(s,a.path,a.message)}),s}}},86961:(T,m,e)=>{var t=e(13578),n=e(27138),r="[object Boolean]";function d(c){return c===!0||c===!1||n(c)&&t(c)==r}T.exports=d},92249:(T,m,e)=>{var t=e(37997);function n(r){return t(r)&&r!=+r}T.exports=n},37997:(T,m,e)=>{var t=e(13578),n=e(27138),r="[object Number]";function d(c){return typeof c=="number"||n(c)&&t(c)==r}T.exports=d},59438:(T,m,e)=>{"use strict";e.d(m,{U:()=>v,y:()=>a});var t=e(74081),n=e(27279),r=e(37652),d=e(34803),c=e(73777),o=e(19915),E=e(33110),u=e(68263);const s=({theme:l,expanded:i,variant:h,disabled:x,error:M})=>M?`1px solid ${l.colors.danger600} !important`:x?`1px solid ${l.colors.neutral150}`:i?`1px solid ${l.colors.primary600}`:h==="primary"?`1px solid ${l.colors.neutral0}`:`1px solid ${l.colors.neutral100}`,a=(0,r.ZP)(o.Z)``,p=(0,r.ZP)(u.x)`
  border: ${s};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:l})=>l.colors.primary600};

    ${a} {
      color: ${({theme:l,expanded:i})=>i?void 0:l.colors.primary700};
    }

    ${o.Z} {
      color: ${({theme:l,expanded:i})=>i?void 0:l.colors.primary600};
    }

    & > ${E.k} {
      background: ${({theme:l})=>l.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:l})=>l.colors.primary200};
    }
  }
`,v=({children:l,disabled:i=!1,error:h,expanded:x=!1,hasErrorMessage:M=!0,id:R,onToggle:C,toggle:P,size:A="M",variant:w="primary",shadow:S})=>{const g=(0,c.M)(R),D=n.useMemo(()=>({expanded:x,onToggle:C,toggle:P,id:g,size:A,variant:w,disabled:i}),[i,x,g,C,A,P,w]);return(0,t.jsxs)(d.S.Provider,{value:D,children:[(0,t.jsx)(p,{"data-strapi-expanded":x,disabled:i,"aria-disabled":i,expanded:x,hasRadius:!0,variant:w,error:h,shadow:S,children:l}),h&&M&&(0,t.jsx)(u.x,{paddingTop:1,children:(0,t.jsx)(o.Z,{variant:"pi",textColor:"danger600",children:h})})]})}},3667:(T,m,e)=>{"use strict";e.d(m,{v:()=>d});var t=e(74081),n=e(34803),r=e(68263);const d=({children:c,...o})=>{const{expanded:E,id:u}=(0,n.A)();if(!E)return null;const s=`accordion-content-${u}`,a=`accordion-label-${u}`,p=`accordion-desc-${u}`;return(0,t.jsx)(r.x,{role:"region",id:s,"aria-labelledby":a,"aria-describedby":p,...o,children:c})}},34803:(T,m,e)=>{"use strict";e.d(m,{A:()=>r,S:()=>n});var t=e(27279);const n=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),r=()=>(0,t.useContext)(n)},68809:(T,m,e)=>{"use strict";e.d(m,{B:()=>l});var t=e(74081),n=e(27870),r=e(37652),d=e(59438),c=e(34803);const o=({expanded:i,disabled:h,variant:x})=>{let M="neutral100";return i?M="primary100":h?M="neutral150":x==="primary"&&(M="neutral0"),M};var E=e(56953),u=e(24204),s=e(33110),a=e(19915);const p=(0,r.ZP)(E.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:i,expanded:h})=>h?i.colors.primary600:i.colors.neutral500};
    }
  }
`,v=(0,r.ZP)(s.k)`
  min-height: ${({theme:i,size:h})=>i.sizes.accordions[h]};
  border-radius: ${({theme:i,expanded:h})=>h?`${i.borderRadius} ${i.borderRadius} 0 0`:i.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:i})=>i.colors.primary600};
      }
    }
  }
`,l=({title:i,description:h,as:x="span",togglePosition:M="right",action:R,...C})=>{const{onToggle:P,toggle:A,expanded:w,id:S,size:g,variant:D,disabled:W}=(0,c.A)(),k=`accordion-content-${S}`,K=`accordion-label-${S}`,V=`accordion-desc-${S}`,b=g==="M"?6:4,N=g==="M"?b:b-2,Z=o({expanded:w,disabled:W,variant:D}),H={as:x,fontWeight:g==="S"?"bold":void 0,id:K,textColor:w?"primary600":"neutral700",ellipsis:!0,variant:g==="M"?"delta":void 0},y=w?"primary600":"neutral600",I=w?"primary200":"neutral200",F=g==="M"?`${32/16}rem`:`${24/16}rem`,L=()=>{W||(A&&!P?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),A()):P&&P())},f=(0,t.jsx)(s.k,{justifyContent:"center",borderRadius:"50%",height:F,width:F,transform:w?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:I,cursor:W?"not-allowed":"pointer",onClick:L,shrink:0,children:(0,t.jsx)(u.J,{as:n.Z,width:g==="M"?`${11/16}rem`:`${8/16}rem`,color:w?"primary600":"neutral600"})});return(0,t.jsx)(v,{paddingBottom:N,paddingLeft:b,paddingRight:b,paddingTop:N,background:Z,expanded:w,size:g,justifyContent:"space-between",cursor:W?"not-allowed":"",children:(0,t.jsxs)(s.k,{gap:3,flex:1,maxWidth:"100%",children:[M==="left"&&f,(0,t.jsx)(p,{onClick:L,"aria-disabled":W,"aria-expanded":w,"aria-controls":k,"aria-labelledby":K,"data-strapi-accordion-toggle":!0,expanded:w,type:"button",flex:1,minWidth:0,...C,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.y,{...H,children:i}),h&&(0,t.jsx)(a.Z,{as:"p",id:V,textColor:y,children:h})]})}),M==="right"&&(0,t.jsxs)(s.k,{gap:3,children:[f,R]}),M==="left"&&R]})})}},97367:(T,m,e)=>{"use strict";e.d(m,{Z:()=>r});var t=e(74081);const n=d=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),r=n},18989:(T,m,e)=>{"use strict";e.d(m,{Z:()=>r});var t=e(74081);const n=d=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:[(0,t.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),r=n},82949:(T,m,e)=>{"use strict";e.d(m,{Z:()=>r});var t=e(74081);const n=d=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:[(0,t.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,t.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),r=n}}]);
