"use strict";(self.webpackChunkplanckster_docs=self.webpackChunkplanckster_docs||[]).push([[8978],{6594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(4848),s=t(8453);const a={sidebar_label:"Disaster Tracking Usecase",sidebar_position:4},r="Description of Kubeflow Pipelines for the Disaster Tracking Usecase:",o={id:"concepts/disaster-tracking-usecase",title:"Description of Kubeflow Pipelines for the Disaster Tracking Usecase:",description:"Understanding the DAG structure:",source:"@site/docs/concepts/disaster-tracking-usecase.md",sourceDirName:"concepts",slug:"/concepts/disaster-tracking-usecase",permalink:"/docs/concepts/disaster-tracking-usecase",draft:!1,unlisted:!1,editUrl:"https://github.com/dream-aim-deliver/planckster-docs/edit/main/docs/concepts/disaster-tracking-usecase.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Disaster Tracking Usecase",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Architecture Overview",permalink:"/docs/concepts/architecture"},next:{title:"Data Scrapers",permalink:"/docs/concepts/scrapers"}},c={},l=[{value:"Understanding the DAG structure:",id:"understanding-the-dag-structure",level:2},{value:"Scraper DAG:",id:"scraper-dag",level:3},{value:"Augmentation Engine DAG",id:"augmentation-engine-dag",level:3},{value:"Properties of a DAG element",id:"properties-of-a-dag-element",level:2},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Image ",id:"image-",level:3},{value:"Version",id:"version",level:3},{value:"Pipeline Notebooks",id:"pipeline-notebooks",level:2},{value:"Each Pipeline/DAG is compiled from a notebook.",id:"each-pipelinedag-is-compiled-from-a-notebook",level:4},{value:"Wrappers",id:"wrappers",level:3},{value:"Setup the pipeline/DAG",id:"setup-the-pipelinedag",level:3},{value:"Compile the pipeline/DAG",id:"compile-the-pipelinedag",level:3},{value:"Conclusion",id:"conclusion",level:3}];function d(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"description-of-kubeflow-pipelines-for-the-disaster-tracking-usecase",children:"Description of Kubeflow Pipelines for the Disaster Tracking Usecase:"}),"\n",(0,i.jsx)(n.h2,{id:"understanding-the-dag-structure",children:"Understanding the DAG structure:"}),"\n",(0,i.jsxs)(n.p,{children:["The DAG or ",(0,i.jsx)(n.em,{children:"Directed Acyclic Graph"})," is the visual representation of a Kubeflow pipeline ",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),". It consists of ",(0,i.jsx)(n.em,{children:"pipeline nodes"}),(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," which are actually ",(0,i.jsx)(n.em,{children:"wrappers"}),(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})," that configure and run a docker container",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})}),". Below you can see how the Scraper DAG and the Augmentation Engine DAG look:"]}),"\n",(0,i.jsx)(n.h3,{id:"scraper-dag",children:"Scraper DAG:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Scraper DAG",src:t(6958).A+"",width:"1184",height:"415"})}),"\n",(0,i.jsxs)(n.p,{children:["The Scraper DAG consists of ",(0,i.jsx)(n.strong,{children:"3 nodes"})," which run in parallel. Each node is a wrapper for one of the three included scrapers (sentinel, telegram, twitter)."]}),"\n",(0,i.jsx)(n.h3,{id:"augmentation-engine-dag",children:"Augmentation Engine DAG"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Augmentation  DAG",src:t(8036).A+"",width:"1265",height:"413"})}),"\n",(0,i.jsxs)(n.p,{children:["The Augmentation Engine DAG consists of ",(0,i.jsx)(n.strong,{children:"1 node"})," representing the wrapper for the disaster-usecase augmentation engine. This pipeline is run ",(0,i.jsx)(n.strong,{children:"after"})," the scraper pipeline successfully completes its run (meaning that all three node complete their respective runs) like it is shown below:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"A Successful Run",src:t(7312).A+"",width:"1191",height:"462"})}),"\n",(0,i.jsx)(n.h2,{id:"properties-of-a-dag-element",children:"Properties of a DAG element"}),"\n",(0,i.jsxs)(n.p,{children:["A list of properties for an node (in this case sentinel) can be viewed by clicking on it. The most important properties include ",(0,i.jsx)(n.strong,{children:"Input parameters"}),", ",(0,i.jsx)(n.strong,{children:"Arguments"}),", ",(0,i.jsx)(n.strong,{children:"Image"}),", and ",(0,i.jsx)(n.strong,{children:"Version"}),' (listed in the "Summary" box).']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Sentinel node properties 1",src:t(1939).A+"",width:"1155",height:"830"}),"\n",(0,i.jsx)(n.img,{alt:"Sentinel node properties 2",src:t(5080).A+"",width:"1160",height:"965"})]}),"\n",(0,i.jsx)(n.h3,{id:"input-parameters",children:"Input Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["Input parameters are common to the ",(0,i.jsx)(n.em,{children:"entire pipeline"})," and thus every single node in the scraper pipeline shares the same start_date, end_date, job_id, and tracer_id."]}),"\n",(0,i.jsxs)(n.p,{children:["It is ",(0,i.jsx)(n.strong,{children:"essential"})," that these input parameters are shared across scrapers, especially job_id and tracer_id. This is because all scrapers upload their files to MinIO using the ",(0,i.jsx)(n.em,{children:"relative-path"}),' "/SCRAPER/TRACER_ID/JOB_ID/" where SCRAPER is one of "twitter", "telegram", or "sentinel".']}),"\n",(0,i.jsxs)(n.p,{children:["The disaster-tracking augmentation engine ",(0,i.jsx)(n.em,{children:"expects"})," all scrapers to upload their ",(0,i.jsx)(n.em,{children:"final augmented files"}),' to "sda/SCRAPER/TRACER_ID/JOB_ID/augmented". The augmentation engine downloads all files from this path to a temporary directory, runs a matching-algorithm, and uploads the final matched files to MinIO using the ',(0,i.jsx)(n.em,{children:"relative-path"}),' "/augmented/TRACER_ID/JOB_ID/by_date/".']}),"\n",(0,i.jsxs)(n.p,{children:["Thus, runs for both the scraper-pipeline and augmentation-pipeline need to be constructed using the same job_id and tracer_id. This simple action allows for ",(0,i.jsx)(n.strong,{children:"linking two pipelines"})," which is a vital part of our overall workflow."]}),"\n",(0,i.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(n.p,{children:["Arguments are what are fed via the command line to the scraper before it runs. Unlike Input parameters, arguments are ",(0,i.jsx)(n.em,{children:"node-specific"})," as each scraper uses different arguments depending on its context and function. Note that start-date, end_date, job_id, and tracer_id are actually ",(0,i.jsx)(n.em,{children:"arguments"}),"; however, their values are inherited from their ",(0,i.jsx)(n.em,{children:"Input Parameter Value"}),". Note that the scraper itself actually has more arguments like api keys; however, many of these arguments are hardcoded in and thus we can only see arguments that are available to the wrapper/node."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'The sentinel-specific arguments are "long-left" (leftmost longitude), "lat-down" (down-most latitude), "long-right" (rightmost longitude), "lat-up" (topmost latitude), and "resolution" (height of image in meters) which together represent the geographic bounding box and level of detail for a region.'}),"\n",(0,i.jsx)(n.li,{children:'The only telegram-specific argument is "channel-name" which is the specific publicly-available channel that should be scraped.'}),"\n",(0,i.jsx)(n.li,{children:'The only twitter-specific argument is "query" which is the unique search-term to use when scraping tweets.'}),"\n",(0,i.jsx)(n.li,{children:"The augmentation engine takes no additional arguments."}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"image-",children:["Image ",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})})]}),"\n",(0,i.jsx)(n.p,{children:'The Image name is critical as it specifies which dockerized representation of the scraper the wrapper should use. For sentinel, we choose the image "maany/mpi-sda-satellite:2.0.0" hosted on DockerHub (the other scrapers and augmentation engine are named similarly).'}),"\n",(0,i.jsx)(n.p,{children:"Note: The docker images are built and deployed to DockerHub automatically when a release of the data scrapper is made."}),"\n",(0,i.jsx)(n.h3,{id:"version",children:"Version"}),"\n",(0,i.jsx)(n.p,{children:"The version name of the pipeline is important as every time the docker image for an node is updated to a new version the pipeline should be recompiled. To avoid conflicts, this recompiled pipeline should have an updated version name as well."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Augmentation pipeline properties",src:t(4105).A+"",width:"1367",height:"965"})}),"\n",(0,i.jsx)(n.p,{children:'For example the Augmentation pipeline uses an updated container image with version "2.1.0", so the pipeline version is now named "augmentation-pipeline-2.1".'}),"\n",(0,i.jsx)(n.h2,{id:"pipeline-notebooks",children:"Pipeline Notebooks"}),"\n",(0,i.jsx)(n.h4,{id:"each-pipelinedag-is-compiled-from-a-notebook",children:"Each Pipeline/DAG is compiled from a notebook."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'The scraper-pipeline is compiled from the "sda-disaster-tracking-scrapers" notebook.'}),"\n",(0,i.jsx)(n.li,{children:'The augmentation-pipeline is compiled from the "sda-disaster-tracking-augmentation" notebook.'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"wrappers",children:"Wrappers"}),"\n",(0,i.jsxs)(n.p,{children:["The notebook for a pipeline defines all of the nodes and their properties via ",(0,i.jsx)(n.em,{children:"wrappers"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sentinel Wrapper",src:t(4945).A+"",width:"1214",height:"832"})}),"\n",(0,i.jsxs)(n.p,{children:["Note how the scraper itself has more command line arguments than what it exposes to its wrapper/node. This makes pipelines easier to configure ",(0,i.jsx)(n.em,{children:"on a usecase basis"})," by focusing on real-world arguments like dates and coordinates rather than code-specific arguments like API keys."]}),"\n",(0,i.jsx)(n.h3,{id:"setup-the-pipelinedag",children:"Setup the pipeline/DAG"}),"\n",(0,i.jsx)(n.p,{children:"The order in which nodes run is determined by the how the pipeline is setup:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Scrapers task",src:t(4282).A+"",width:"1265",height:"253"})}),"\n",(0,i.jsx)(n.p,{children:"Because all three scraper tasks are executed in a single function, they run in parallel and the pipeline has a DAG with three parallel elements (as seen previously.)"}),"\n",(0,i.jsx)(n.h3,{id:"compile-the-pipelinedag",children:"Compile the pipeline/DAG"}),"\n",(0,i.jsx)(n.p,{children:"To be able to run a pipeline, it has to be compiled and uploaded with a unique version name:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Compile Pipeline",src:t(2329).A+"",width:"955",height:"764"})}),"\n",(0,i.jsxs)(n.p,{children:["You can now navigate to the ",(0,i.jsx)(n.em,{children:"pipelines"})," section of Kubeflow and create a run for the disaster tracking usecase. Once again, make sure to run the scraper pipeline ",(0,i.jsx)(n.em,{children:"first"}),', check logs and MinIO to make sure the "/SCRAPER/TRACER_ID/JOB_ID/augmented" is populated for every scraper. Then run the augmentation pipeline and ensure "/augmented/TRACER_ID/JOB_ID/by_date" is populated with matched data. To work with this data, open the "SDA-disaster-tracking-demos" notebook or view the "analyzing-scraped-data" guide.']}),"\n",(0,i.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:'You now understand how the disaster usecase is constructed and how augmentation works. To learn more about how wrappers work and how you can build your own custom pipelines, see the guide titled "custom-pipelines". To work with the data produced by the scrapers and the augmentation engine, open the "SDA-disaster-tracking-demos" notebook or view the "analyzing-scraped-data" guide.'}),"\n","\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(n.p,{children:["A pipeline is a sequence of processing stages, where each stage performs a specific operation (on data or tasks) and the output becomes the input of the next stage. In the ",(0,i.jsx)(n.a,{href:"/docs/guides/kubeflow/kubeflow-features-and-ui-walkthrough",children:"Kubeflow introduction guide"})," you will find a more detailed explanation of Kubeflow pipelines. ",(0,i.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-2",children:["\n",(0,i.jsxs)(n.p,{children:["A pipeline node is one of the stages of the pipeline. ",(0,i.jsx)(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-3",children:["\n",(0,i.jsxs)(n.p,{children:["A wrapper is a piece of code provinding a layer of abstraction to another piece of code. ",(0,i.jsx)(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-4",children:["\n",(0,i.jsxs)(n.p,{children:["A Docker container is an isolated environment within a computer that encapsulates everything required to run a piece of code, program, or software. This container is created from a Docker image, which serves as a template containing the executable software package and all the necessary dependencies and configurations to ensure the program runs smoothly. ",(0,i.jsx)(n.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-5",children:["\n",(0,i.jsxs)(n.p,{children:["Refers to the docker image (specific requirements to run a piece of software) that creates a docker container. ",(0,i.jsx)(n.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8036:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/augmentation-dag-3bb4f5525c88026af0e0d3c558ed6b1e.png"},4105:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/augmentation-properties-8c3f657dd10fa75ae4a0bd506581f009.png"},2329:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/compile-pipeline-cb925dcaef79a28b28fdb9f7801b39ea.png"},6958:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/scraper-dag-7bd0afddf45ba6878a52fa45da20f24e.png"},4282:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/scrapers-task-83d8a6714e216bfe482dae89c797d43f.png"},1939:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sentinel-properties-1-6c10dc9070144520bf6e244827d0854c.png"},5080:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sentinel-properties-2-050993812a7f9756a3079944d9df9e3d.png"},4945:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sentinel-wrapper-95c1f3f3b28a4d6f126e760666a5ac8e.png"},7312:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/successful-scraper-run-08ec8bdf3d81900ed8d675f103a95ccb.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);