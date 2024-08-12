"use strict";(self.webpackChunkplanckster_docs=self.webpackChunkplanckster_docs||[]).push([[9190],{3831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(4848),i=n(8453);const r={sidebar_label:"Introduction",sidebar_position:1},a="Introduction to the Planckster Ecosystem",c={id:"concepts/core-concepts/index",title:"Introduction to the Planckster Ecosystem",description:"This guide aims to familiarize you with the fundamental concepts of the Satellite Data Augmentation (SDA) system. It will help you understand the essential components, their functions, and how they interrelate. By following this guide, you'll gain the necessary knowledge to navigate the program, use it efficiently, and maximize its benefits.",source:"@site/docs/concepts/core-concepts/index.md",sourceDirName:"concepts/core-concepts",slug:"/concepts/core-concepts/",permalink:"/planckster-docs/docs/concepts/core-concepts/",draft:!1,unlisted:!1,editUrl:"https://github.com/dream-aim-deliver/planckster-docs/edit/main/docs/concepts/core-concepts/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/planckster-docs/docs/category/core-concepts"},next:{title:"Architecture Overview",permalink:"/planckster-docs/docs/concepts/architecture"}},o={},d=[{value:"SDA key concepts",id:"sda-key-concepts",level:2},{value:"Client",id:"client",level:3},{value:"Source Data",id:"source-data",level:3},{value:"Research Context",id:"research-context",level:3},{value:"Conversation",id:"conversation",level:3},{value:"Message",id:"message",level:3},{value:"Diagram",id:"diagram",level:2},{value:"Glossary",id:"glossary",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"introduction-to-the-planckster-ecosystem",children:"Introduction to the Planckster Ecosystem"}),"\n",(0,s.jsx)(t.p,{children:"This guide aims to familiarize you with the fundamental concepts of the Satellite Data Augmentation (SDA) system. It will help you understand the essential components, their functions, and how they interrelate. By following this guide, you'll gain the necessary knowledge to navigate the program, use it efficiently, and maximize its benefits."}),"\n",(0,s.jsx)(t.p,{children:"This guide covers five key concepts:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Client"}),"\n",(0,s.jsx)(t.li,{children:"Source Data"}),"\n",(0,s.jsx)(t.li,{children:"Research Context"}),"\n",(0,s.jsx)(t.li,{children:"Conversation"}),"\n",(0,s.jsx)(t.li,{children:"Message"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The guide is organized into three sections. The first section provides an in-depth explanation of each concept. The second section includes a diagram illustrating the interactions between these concepts, which underpin the functionality of the Planckster ecosystem. The final section offers a glossary with concise definitions of each concept."}),"\n",(0,s.jsx)(t.h2,{id:"sda-key-concepts",children:"SDA key concepts"}),"\n",(0,s.jsx)(t.h3,{id:"client",children:"Client"}),"\n",(0,s.jsxs)(t.p,{children:['The term "client" refers to the user of the Planckster ecosystem. It serves as a unique identifier for logging into the ',(0,s.jsx)(t.a,{href:"/planckster-docs/docs/guides/websat/websat-features-and-ui-walkthrough",children:"web interface"}),'. Similar to other applications, a user must create an account, here referred to as a "client," with a username and password to access and utilize the system.']}),"\n",(0,s.jsx)(t.p,{children:'For the current testing phase, the Planckster ecosystem will operate with a single client account named "sda," which will be used by all users needing access. The password for this account will be predefined.'}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name of the attribute"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"A unique identifier automatically generated by the program when a client is created."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"sub"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsxs)(t.td,{children:["A unique name defined by the client.",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"In future iterations, the system will support the creation of multiple client accounts for different users. A client could either be a person or an automated bot designed to request information."}),"\n",(0,s.jsx)(t.h3,{id:"source-data",children:"Source Data"}),"\n",(0,s.jsx)(t.p,{children:'"Source data" refers to the various pieces of information stored within the Planckster ecosystem. This data can originate from two sources: 1) data collected by a scraper executed by the client, or 2) data uploaded directly by the client.'}),"\n",(0,s.jsx)(t.p,{children:"Regardless of how the data is acquired, it will be stored in the client's account or profile. As a result, only the client can view, access, and utilize this data after logging in. In future updates, a permission feature will be introduced, allowing clients to share source data with other users."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name of the attribute"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"A unique identifier automatically assigned by the program when source data is either scraped or uploaded."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"name"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"The name of the source data. If the data is scraped, the program assigns the name automatically. If the data is uploaded, the client must provide a name."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"relative_path"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsxs)(t.td,{children:["The file path of the source data. It is automatically generated based on specific inputs provided by the client.",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"type"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"The file type of the source data (e.g., .txt, .csv, .pdf, .jpg)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"protocol"})}),(0,s.jsx)(t.td,{children:"enum"}),(0,s.jsx)(t.td,{children:'The protocol used for saving the source data file. The default is "s3".'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"status"})}),(0,s.jsx)(t.td,{children:"enum"}),(0,s.jsxs)(t.td,{children:['Indicates the availability of the data with two possible values:  i) "available": The data is available for use.  ii) "unavailable": The data is not available for use.',(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"research-context",children:"Research Context"}),"\n",(0,s.jsx)(t.p,{children:'A "Research Context" is a collection of source data files organized by the client. Its main purpose is to help clients categorize and manage their data within their accounts. For example, a client might create research contexts based on geographical regions or types of natural disasters, grouping data accordingly.'}),"\n",(0,s.jsx)(t.p,{children:"Research contexts and source data are not hierarchical; they have a many-to-many relationship. This means a single research context can include multiple source data files, and a single source data file can be associated with multiple research contexts."}),"\n",(0,s.jsx)(t.p,{children:"Clients have the flexibility to group source data as they see fit and create multiple research contexts. Only the client who creates a research context can view and access it by logging in with their account. It's important to note that research contexts are immutable; once created, they cannot be modified, only deleted. Therefore, careful consideration is advised before creating them."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name of the attribute"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"A unique identifier automatically assigned by the program when the research context is created."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"title"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"The name of the research context, assigned by the client."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"description"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"A brief description of the contents and purpose of the research context, provided by the client."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"source_data"})}),(0,s.jsx)(t.td,{children:"list"}),(0,s.jsx)(t.td,{children:"A list of source data files that comprise the research context, specified by the client."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"conversation",children:"Conversation"}),"\n",(0,s.jsx)(t.p,{children:'A "Conversation" is a chat session initiated within the framework of a specific research context. It enables clients to interact with and query the data contained in that research context. Through conversations, clients can request specific information from the data and perform various operations. For example, within a wildfire research context, a client might start a conversation to ask for the dates of particular wildfire events.'}),"\n",(0,s.jsx)(t.p,{children:"Conversations are structured like chat interactions, consisting of messages either sent by the client or generated by the Planckster ecosystem in response. The conversation can only access and utilize the source data included in the research context it was created under."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name of the attribute"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"A unique identifier automatically assigned by the program when the conversation is created."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"title"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"The title or name of the conversation, which is provided by the client."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"message",children:"Message"}),"\n",(0,s.jsx)(t.p,{children:'A "Message" is a textual element within a conversation. It can either be a communication sent by the client, known as a user message, or a response generated by the system, referred to as an agent message. Messages are the fundamental units of interaction within a conversation, facilitating the exchange of information between the client and the Planckster ecosystem.'}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name of the attribute"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"A unique identifier for the message, assigned by the program when the message is created."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"content"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"The content of the message. This is defined by the client for user messages and by the Planckster ecosystem for agent messages."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"type"})}),(0,s.jsx)(t.td,{children:"enum"}),(0,s.jsx)(t.td,{children:"The type of message, which can be one of the following:  i) usermessage: If the message is created by the client.  ii) agentmessage: If the message is a response from the Planckster ecosystem."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"timestamp"})}),(0,s.jsx)(t.td,{children:"datetime"}),(0,s.jsx)(t.td,{children:"The time at which the message is created, automatically recorded by the program at the moment of creation."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"diagram",children:"Diagram"}),"\n",(0,s.jsx)(t.p,{children:"The following diagram illustrates the relationships between the various concepts described:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Client"}),": At the top of the hierarchy is the client, who can either scrape or upload source data and create research contexts defined by sets of source data. The client maintains a one-to-many relationship with both source data and research contexts. This means that a single client can generate multiple source data files and research contexts, which are only accessible to that client."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Source Data and Research Context"}),": There is a many-to-many relationship between source data and research contexts. A research context can include multiple source data files, and a single source data file can be associated with to multiple research contexts."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Research Context and Conversation"}),": Within each research context, there can be multiple conversations. The relationship between a research context and its conversations is many-to-one, meaning that each conversation belongs to one research context, but a research context can have multiple conversations."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Conversation and Messages"}),": Each conversation contains multiple messages. The relationship between messages and a conversation is also many-to-one, indicating that each message belongs to a single conversation."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Diagram",src:n(8070).A+"",width:"2032",height:"1124"})}),"\n",(0,s.jsx)(t.h2,{id:"glossary",children:"Glossary"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Term"}),(0,s.jsx)(t.th,{children:"Definition"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Client"})}),(0,s.jsx)(t.td,{children:"Refers to the user of the Planckster ecosystem. It serves as a unique identifier for logging into the SDA platform."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Source Data"})}),(0,s.jsx)(t.td,{children:"Refers to the various pieces of information stored within the Planckster ecosystem. This data can originate from two sources: 1) data collected by a scraper executed by the client, or 2) data uploaded directly by the client."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Research Context"})}),(0,s.jsx)(t.td,{children:"Collection of source data files organized by the client. Its primary purpose is to help clients categorize and manage their data within their accounts."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Conversation"})}),(0,s.jsx)(t.td,{children:"Chat session initiated within the framework of a specific research context."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Message"})}),(0,s.jsx)(t.td,{children:"Textual element within a conversation. It can either be a communication sent by the client, known as a user message, or a response generated by the system, referred to as an agent message."})]})]})]}),"\n","\n",(0,s.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(t.p,{children:['In this version, the name for the sole existing client has already been set as "sda". ',(0,s.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-2",children:["\n",(0,s.jsxs)(t.p,{children:["In this version, Minio is used to store data. While the storage solution may change in the future, the relative path will remain consistent. Refer to the Kubeflow notebooks guide for more information. ",(0,s.jsx)(t.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-3",children:["\n",(0,s.jsxs)(t.p,{children:["Data may become unavailable due to issues such as a crash in Minio. ",(0,s.jsx)(t.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8070:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sda_core_concepts-c73848b5062401079f9c92c06fd17433.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);