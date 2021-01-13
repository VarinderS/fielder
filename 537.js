(self.webpackChunkfielder_docs=self.webpackChunkfielder_docs||[]).push([[537],{8537:(a,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>k});var n=t(7154),s=t.n(n),o=t(6479),p=t.n(o),c=(t(8661),t(3905)),m={};function k(a){var e=a.components,t=p()(a,["components"]);return(0,c.kt)("wrapper",s()({},m,t,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"usesubmit"},"useSubmit"),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"Hook to guard submission logic and trigger a submission ",(0,c.kt)("a",s()({parentName:"em"},{href:"/guides/validation#validation-events"}),"validation event"),".")),(0,c.kt)("div",{className:"remark-highlight"},(0,c.kt)("pre",s()({parentName:"div"},{className:"language-tsx"}),(0,c.kt)("code",s()({parentName:"pre"},{className:"language-tsx"}),(0,c.kt)("span",s()({parentName:"code"},{className:"token keyword"}),"import")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token imports"}),(0,c.kt)("span",s()({parentName:"span"},{className:"token punctuation"}),"{")," useSubmit ",(0,c.kt)("span",s()({parentName:"span"},{className:"token punctuation"}),"}"))," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token keyword"}),"from")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token string"}),"'fielder'"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),";"),"\n"))),(0,c.kt)("h2",{id:"example-usage"},"Example usage"),(0,c.kt)("div",{className:"remark-highlight"},(0,c.kt)("pre",s()({parentName:"div"},{className:"language-tsx"}),(0,c.kt)("code",s()({parentName:"pre"},{className:"language-tsx"}),(0,c.kt)("span",s()({parentName:"code"},{className:"token keyword"}),"const")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"{")," handleSubmit ",(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"}")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token operator"}),"=")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token function"}),"useSubmit"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"("),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"("),(0,c.kt)("span",s()({parentName:"code"},{className:"token parameter"}),"values"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),")")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token arrow operator"}),"=>")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,c.kt)("span",s()({parentName:"code"},{className:"token function"}),"fetch"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"("),(0,c.kt)("span",s()({parentName:"code"},{className:"token string"}),"'/submit-form'"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),",")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"{"),"\n    method",(0,c.kt)("span",s()({parentName:"code"},{className:"token operator"}),":")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token string"}),"'POST'"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),","),"\n    body",(0,c.kt)("span",s()({parentName:"code"},{className:"token operator"}),":")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token known-class-name class-name"}),"JSON"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"."),(0,c.kt)("span",s()({parentName:"code"},{className:"token method function property-access"}),"stringify"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"("),"values",(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),")"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"}"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),")"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),";"),"\n",(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"}"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),")"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",(0,c.kt)("span",s()({parentName:"code"},{className:"token keyword"}),"return")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token tag"}),(0,c.kt)("span",s()({parentName:"span"},{className:"token tag"}),(0,c.kt)("span",s()({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,c.kt)("span",s()({parentName:"span"},{className:"token attr-name"}),"onClick"),(0,c.kt)("span",s()({parentName:"span"},{className:"token script language-javascript"}),(0,c.kt)("span",s()({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),(0,c.kt)("span",s()({parentName:"span"},{className:"token punctuation"}),"{"),"handleSubmit",(0,c.kt)("span",s()({parentName:"span"},{className:"token punctuation"}),"}")),(0,c.kt)("span",s()({parentName:"span"},{className:"token punctuation"}),">")),(0,c.kt)("span",s()({parentName:"code"},{className:"token plain-text"}),"Submit"),(0,c.kt)("span",s()({parentName:"code"},{className:"token tag"}),(0,c.kt)("span",s()({parentName:"span"},{className:"token tag"}),(0,c.kt)("span",s()({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,c.kt)("span",s()({parentName:"span"},{className:"token punctuation"}),">")),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),";"),"\n"))),(0,c.kt)("h2",{id:"return-type"},"Return type"),(0,c.kt)("p",null,"An object containing the following properties:"),(0,c.kt)("h3",{id:"isvalidating"},"isValidating"),(0,c.kt)("p",null,"Indicator of whether async ",(0,c.kt)("inlineCode",{parentName:"p"},"submit")," validation event is in progress."),(0,c.kt)("p",null,"Type: ",(0,c.kt)("inlineCode",{parentName:"p"},"boolean")),(0,c.kt)("h3",{id:"hassubmitted"},"hasSubmitted"),(0,c.kt)("p",null,"Indicator of whether ",(0,c.kt)("inlineCode",{parentName:"p"},"handleSubmit")," function has been called."),(0,c.kt)("p",null,"Type: ",(0,c.kt)("inlineCode",{parentName:"p"},"boolean")),(0,c.kt)("h3",{id:"handlesubmit"},"handleSubmit"),(0,c.kt)("p",null,"Guarded submit function which triggers ",(0,c.kt)("inlineCode",{parentName:"p"},"submit")," validation on call."),(0,c.kt)("p",null,"Type: ",(0,c.kt)("inlineCode",{parentName:"p"},"() => void")),(0,c.kt)("h2",{id:"arguments"},"Arguments"),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"useSubmit")," takes a single function as an argument."),(0,c.kt)("h3",{id:"fn-required"},"fn ",(0,c.kt)("strong",{parentName:"h3"},"(required)")),(0,c.kt)("p",null,"The function to be called on submission validation success."),(0,c.kt)("p",null,"Type: ",(0,c.kt)("inlineCode",{parentName:"p"},"(f: Record<K, V>) => void")),(0,c.kt)("p",null,"Example: ",(0,c.kt)("inlineCode",{parentName:"p"},"(values) => console.log(values)")),(0,c.kt)("h2",{id:"types"},"Types"),(0,c.kt)("h3",{id:"usesubmitresponse"},"UseSubmitResponse"),(0,c.kt)("p",null,"Return type of a ",(0,c.kt)("inlineCode",{parentName:"p"},"useSubmit")," call."),(0,c.kt)("div",{className:"remark-highlight"},(0,c.kt)("pre",s()({parentName:"div"},{className:"language-ts"}),(0,c.kt)("code",s()({parentName:"pre"},{className:"language-ts"}),(0,c.kt)("span",s()({parentName:"code"},{className:"token keyword"}),"type")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token class-name"}),"UseSubmitResponse")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token operator"}),"=")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,c.kt)("span",s()({parentName:"code"},{className:"token doc-comment comment"}),"/** Guarded submit function which triggers `submit` validation on call. */"),"\n  ",(0,c.kt)("span",s()({parentName:"code"},{className:"token function-variable function"}),"handleSubmit"),(0,c.kt)("span",s()({parentName:"code"},{className:"token operator"}),":")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"("),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),")")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token operator"}),"=>")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token keyword"}),"void"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",(0,c.kt)("span",s()({parentName:"code"},{className:"token doc-comment comment"}),"/** Indicates if async fetching is in progress. */"),"\n  isValidating",(0,c.kt)("span",s()({parentName:"code"},{className:"token operator"}),":")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token builtin"}),"boolean"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",(0,c.kt)("span",s()({parentName:"code"},{className:"token doc-comment comment"}),"/** Indicates if `handleSubmit` has been called. */"),"\n  hasSubmitted",(0,c.kt)("span",s()({parentName:"code"},{className:"token operator"}),":")," ",(0,c.kt)("span",s()({parentName:"code"},{className:"token builtin"}),"boolean"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),";"),"\n",(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),"}"),(0,c.kt)("span",s()({parentName:"code"},{className:"token punctuation"}),";"),"\n"))))}k.isMDXComponent=!0}}]);