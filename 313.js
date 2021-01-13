(self.webpackChunkfielder_docs=self.webpackChunkfielder_docs||[]).push([[313],{1116:(e,t,n)=>{"use strict";n.d(t,{M:()=>a});var r=n(8661),o=n(5032),a=function(e){var t=e.code,n=e.scope;return r.default.createElement(r.default.Fragment,null,r.default.createElement(o.nu,{transformCode:s,theme:l,code:t,scope:n,noInline:!0,spellCheck:!1,spellcheck:!1},r.default.createElement(o.i5,{className:c}),r.default.createElement(o.IF,null),r.default.createElement(o.uz,{spellcheck:!1,className:i})))},s=function(e){return e.replace(/import.*;/g,"")},l={plain:{fontFamily:'"Source Code Pro", monospace',color:"#90a4ae"},styles:[{types:["keyword"],style:{color:"#bd93f9"}},{types:["atrule","boolean","constant","function","id","important","keyword","symbol"],style:{color:"#7c4dff"}},{types:["operator","property","punctuation","attr-name","builtin","cdata","char","class","inserted"],style:{color:"#39adb5"}},{types:["tag","url","variable","deleted","entity","selector"],style:{color:"#e53935"}},{types:["attr-value","attribute","psuedo-element","psuedo-class","string"],style:{color:"#f6a434"}}]},i="elkoedf",c="p1rlkpet";n(2150)},5313:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(7154),o=n.n(r),a=n(6479),s=n.n(a),l=n(8661),i=n(3905),c=n(9713),u=n.n(c),d=n(6034),p=n(1116);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var f=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d),b=function(){return l.default.createElement(p.M,{code:'import { useForm, useField, useSubmit, FielderProvider } from "fielder";\n\nconst Form = () => {\n  const form = useForm();\n\n  return (\n    <FielderProvider value={form}>\n      <FormContent />\n    </FielderProvider>\n  );\n};\n\nconst FormContent = () => {\n  const [usernameProps, usernameMeta] = useField({\n    name: "username",\n    initialValue: "",\n    validate: usernameValidation,\n  });\n  const [passwordProps, passwordMeta] = useField({\n    name: "password",\n    initialValue: "",\n    validate: passwordValidation,\n  });\n\n  const { handleSubmit } = useSubmit((values) =>\n    alert(`Submitted: ${JSON.stringify(values, null, 2)}`)\n  );\n\n  return (\n    <form autoComplete="off">\n      <div className="field">\n        <label>Username</label>\n        <input type="text" {...usernameProps} />\n        {conditionalError(usernameMeta)}\n      </div>\n\n      <div className="field">\n        <label>Password</label>\n        <input type="password" {...passwordProps} />\n        {conditionalError(passwordMeta)}\n      </div>\n\n      <button type="button" onClick={handleSubmit} className="primary">\n        Submit\n      </button>\n    </form>\n  );\n};\n\nconst usernameValidation = ({ value }) => {\n  if (!value) {\n    throw Error("Username is required.");\n  }\n\n  if (value.length < 4) {\n    throw Error("Username must be at least 4 characters.");\n  }\n};\n\nconst passwordValidation = ({ value }) => {\n  if (!value) {\n    throw Error("Password is required.");\n  }\n\n  if (value.length < 4) {\n    throw Error("Password must be at least 4 characters.");\n  }\n};\n\nconst conditionalError = (meta) =>\n  meta.hasBlurred && meta.error && <p>{meta.error}</p>;\n\n// Render this live example\nrender(<Form />);\n\n',scope:f})},y={};function v(e){var t=e.components,n=s()(e,["components"]);return(0,i.kt)("wrapper",o()({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"static-forms"},"Static forms"),(0,i.kt)("p",null,"Here's a basic login form, try enter some fake values to see how validation works."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Feel free to make changes to the code below!")),(0,i.kt)(b,{mdxType:"Example"}))}v.isMDXComponent=!0},2150:(e,t,n)=>{"use strict";n.r(t)}}]);