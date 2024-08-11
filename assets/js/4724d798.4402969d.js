"use strict";(self.webpackChunkplanckster_docs=self.webpackChunkplanckster_docs||[]).push([[8978],{6594:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(4848),s=i(8453);const a={sidebar_label:"Disaster Tracking Usecase",sidebar_position:4},r="Description of Kubeflow Pipelines for the Disaster Tracking Usecase:",o={id:"concepts/disaster-tracking-usecase",title:"Description of Kubeflow Pipelines for the Disaster Tracking Usecase:",description:"Understanding the DAG structure:",source:"@site/docs/concepts/disaster-tracking-usecase.md",sourceDirName:"concepts",slug:"/concepts/disaster-tracking-usecase",permalink:"/planckster-docs/docs/concepts/disaster-tracking-usecase",draft:!1,unlisted:!1,editUrl:"https://github.com/dream-aim-deliver/planckster-docs/edit/main/docs/concepts/disaster-tracking-usecase.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Disaster Tracking Usecase",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Architecture Overview",permalink:"/planckster-docs/docs/concepts/architecture"},next:{title:"Data Scrapers Guide",permalink:"/planckster-docs/docs/concepts/scrapers"}},l={},c=[{value:"Understanding the DAG structure:",id:"understanding-the-dag-structure",level:2},{value:"Scraper DAG:",id:"scraper-dag",level:3},{value:"Augmentation Engine DAG",id:"augmentation-engine-dag",level:3},{value:"Properties of a DAG element",id:"properties-of-a-dag-element",level:2},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Image",id:"image",level:3},{value:"Version",id:"version",level:3},{value:"Pipeline Notebooks",id:"pipeline-notebooks",level:2},{value:"Each Pipeline/DAG is compiled from a notebook.",id:"each-pipelinedag-is-compiled-from-a-notebook",level:4},{value:"Wrappers",id:"wrappers",level:3},{value:"Setup the pipeline/DAG",id:"setup-the-pipelinedag",level:3},{value:"Compile the pipeline/DAG",id:"compile-the-pipelinedag",level:3},{value:"Conclusion",id:"conclusion",level:3}];function d(e){const n={em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"description-of-kubeflow-pipelines-for-the-disaster-tracking-usecase",children:"Description of Kubeflow Pipelines for the Disaster Tracking Usecase:"}),"\n",(0,t.jsx)(n.h2,{id:"understanding-the-dag-structure",children:"Understanding the DAG structure:"}),"\n",(0,t.jsxs)(n.p,{children:["The DAG or ",(0,t.jsx)(n.em,{children:"Directed Acyclic Graph"})," is the visual representation of a Kubeflow pipeline. It consists of ",(0,t.jsx)(n.em,{children:"pipeline nodes"})," which are actually ",(0,t.jsx)(n.em,{children:"wrappers"})," that configure and run a docker container."]}),"\n",(0,t.jsx)(n.h3,{id:"scraper-dag",children:"Scraper DAG:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Scraper DAG",src:i(6958).A+"",width:"1184",height:"415"})}),"\n",(0,t.jsxs)(n.p,{children:["The Scraper DAG consists of ",(0,t.jsx)(n.strong,{children:"3 nodes"})," which run in parallel. Each node is a wrapper for one of the three included scrapers (sentinel, telegram, twitter)."]}),"\n",(0,t.jsx)(n.h3,{id:"augmentation-engine-dag",children:"Augmentation Engine DAG"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Augmentation  DAG",src:i(8036).A+"",width:"1265",height:"413"})}),"\n",(0,t.jsxs)(n.p,{children:["The Augmentation Engine DAG consists of ",(0,t.jsx)(n.strong,{children:"1 node"})," representing the wrapper for the disaster-usecase augmentation engine. This pipeline is run ",(0,t.jsx)(n.strong,{children:"after"})," the scraper pipeline successfully completes its run (meaning that all three node complete their respective runs):"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"A Successful Run",src:i(7312).A+"",width:"1191",height:"462"})}),"\n",(0,t.jsx)(n.h2,{id:"properties-of-a-dag-element",children:"Properties of a DAG element"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Sentinel node properties 1",src:i(1939).A+"",width:"1155",height:"830"}),"\n",(0,t.jsx)(n.img,{alt:"Sentinel node properties 2",src:i(5080).A+"",width:"1160",height:"965"})]}),"\n",(0,t.jsxs)(n.p,{children:["A list of properties for an node (in this case sentinel) can be viewed by clicking on it. The most important properties include ",(0,t.jsx)(n.strong,{children:"Input parameters"}),", ",(0,t.jsx)(n.strong,{children:"Arguments"}),", ",(0,t.jsx)(n.strong,{children:"Image"}),", and ",(0,t.jsx)(n.strong,{children:"Version"}),' (in the "Summary" box).']}),"\n",(0,t.jsx)(n.h3,{id:"input-parameters",children:"Input Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Input parameters are common to the ",(0,t.jsx)(n.em,{children:"entire pipeline"})," and thus every single node in the scraper pipeline shares the same start_date, end_date, job_id, and tracer_id."]}),"\n",(0,t.jsxs)(n.p,{children:["It is ",(0,t.jsx)(n.strong,{children:"essential"})," that these input parameters are shared across scrapers, especially job_id and tracer_id. This is because all scrapers upload their files to MinIO using the ",(0,t.jsx)(n.em,{children:"relative-path"}),' "/SCRAPER/TRACER_ID/JOB_ID/" where SCRAPER is one of "twitter", "telegram", or "sentinel".']}),"\n",(0,t.jsxs)(n.p,{children:["The disaster-tracking augmentation engine ",(0,t.jsx)(n.em,{children:"expects"})," all scrapers to upload their ",(0,t.jsx)(n.em,{children:"final augmented files"}),' to "sda/SCRAPER/TRACER_ID/JOB_ID/augmented". The augmentation engine downloads all files from this path to a temporary directory, runs a matching-algorithm, and uploads the final matched files to MinIO using the ',(0,t.jsx)(n.em,{children:"relative-path"}),' "/augmented/TRACER_ID/JOB_ID/by_date/".']}),"\n",(0,t.jsxs)(n.p,{children:["Thus, runs for both the scraper-pipeline and augmentation-pipeline need to be constructed using the same job_id and tracer_id. This simple action allows for ",(0,t.jsx)(n.strong,{children:"linking two pipelines"})," which is a vital part of our overall workflow."]}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.p,{children:["Arguments are what are fed via the CMD line to the scraper before it runs. Unlike Input parameters, arguments are ",(0,t.jsx)(n.em,{children:"node-specific"})," as each scraper uses different arguments depending on its context and function. Note that start-date, end_date, job_id, and tracer_id are actually ",(0,t.jsx)(n.em,{children:"arguments"}),"; however, their values are inherited from their ",(0,t.jsx)(n.em,{children:"Input Parameter Value"}),". Note that the scraper itself actually has more arguments like api keys; however, many of these arguments are hardcoded in and thus we can only see arguments that are available to the wrapper/node."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'The sentinel-specific arguments are "long-left" (leftmost longitude), "lat-down" (down-most latitude), "long-right" (rightmost longitude), "lat-up" (topmost latitude), and "resolution" (height of image in meters) which together represent the geographic bounding box and level of detail for a region.'}),"\n",(0,t.jsx)(n.li,{children:'The only telegram-specific argument is "channel-name" which is the specific publicly-available channel that should be scraped.'}),"\n",(0,t.jsx)(n.li,{children:'The only twitter-specific argument is "query" which is the unique search-term to use when scraping tweets.'}),"\n",(0,t.jsx)(n.li,{children:"The augmentation engine takes no additional arguments."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"image",children:"Image"}),"\n",(0,t.jsx)(n.p,{children:'The Image name is critical as it specifies which dockerized representation of the scraper the wrapper should use. For sentinel, we choose the image "maany/mpi-sda-satellite:2.0.0" hosted on DockerHub (the other scrapers and augmentation engine are named similarly).'}),"\n",(0,t.jsx)(n.p,{children:"Note: we have setup release automation on our github for each of the scraper/augmentation repositories which automatically create a docker image for each major code release."}),"\n",(0,t.jsx)(n.h3,{id:"version",children:"Version"}),"\n",(0,t.jsx)(n.p,{children:"The version name of the pipeline is important as every time the docker image for an node is updated to a new version the pipeline should be recompiled. To avoid conflicts, this recompiled pipeline should have an updated version name as well."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Augmentation pipeline properties",src:i(4105).A+"",width:"1367",height:"965"})}),"\n",(0,t.jsx)(n.p,{children:'For example the Augmentation pipeline uses an updated container image with version "2.1.0", so the pipeline version is now named "augmentation-pipeline-2.1".'}),"\n",(0,t.jsx)(n.h2,{id:"pipeline-notebooks",children:"Pipeline Notebooks"}),"\n",(0,t.jsx)(n.h4,{id:"each-pipelinedag-is-compiled-from-a-notebook",children:"Each Pipeline/DAG is compiled from a notebook."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'The scraper-pipeline is compiled from the "sda-disaster-tracking-scrapers" notebook.'}),"\n",(0,t.jsx)(n.li,{children:'The augmentation-pipeline is compiled from the "sda-disaster-tracking-augmentation" notebook.'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"wrappers",children:"Wrappers"}),"\n",(0,t.jsxs)(n.p,{children:["The notebook for a pipeline defines all of the nodes and their properties via ",(0,t.jsx)(n.em,{children:"wrappers"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sentinel Wrapper",src:i(4945).A+"",width:"1214",height:"832"})}),"\n",(0,t.jsxs)(n.p,{children:["Note how the scraper itself has more CMD line arguments than what it exposes to its wrapper/node. This makes pipelines easier to configure ",(0,t.jsx)(n.em,{children:"on a usecase basis"})," by focusing on real-world arguments like dates and coordinates rather than code-specific arguments like API keys."]}),"\n",(0,t.jsx)(n.h3,{id:"setup-the-pipelinedag",children:"Setup the pipeline/DAG"}),"\n",(0,t.jsx)(n.p,{children:"The order nodes run in is determined by the how the pipeline is setup:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Scrapers task",src:i(4282).A+"",width:"1265",height:"253"})}),"\n",(0,t.jsx)(n.p,{children:"Because all three scraper tasks are executed in a single function, they run in parallel and the pipeline has a DAG with three parallel elements (as seen previously.)"}),"\n",(0,t.jsx)(n.h3,{id:"compile-the-pipelinedag",children:"Compile the pipeline/DAG"}),"\n",(0,t.jsx)(n.p,{children:"In order to view the pipeline and have the ability to create a run, it must be compiled and uploaded with a unique version name:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Compile Pipeline",src:i(2329).A+"",width:"955",height:"764"})}),"\n",(0,t.jsxs)(n.p,{children:["You can now navigate to the ",(0,t.jsx)(n.em,{children:"pipelines"})," section of Kubeflow and create a run for the disaster tracking usecase. Once again, make sure to run the scraper pipeline ",(0,t.jsx)(n.em,{children:"first"}),', check logs and MinIO to make sure the "/SCRAPER/TRACER_ID/JOB_ID/augmented" is populated for every scraper. Then run the augmentation pipeline and ensure "/augmented/TRACER_ID/JOB_ID/by_date" is populated with matched data. To work with this data, open the "SDA-disaster-tracking-demos" notebook or view the "analyzing-scraped-data" guide.']}),"\n",(0,t.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:'You now understand how the disaster usecase is constructed and how augmentation works. To learn more about how wrappers work and how you can build your own custom pipelines, see the guide titled "custom-pipelines". To work with the data produced by the scrapers and the augmentation engine, open the "SDA-disaster-tracking-demos" notebook or view the "analyzing-scraped-data" guide.'})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8036:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/augmentation-dag-3bb4f5525c88026af0e0d3c558ed6b1e.png"},4105:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/augmentation-properties-8c3f657dd10fa75ae4a0bd506581f009.png"},2329:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/compile-pipeline-cb925dcaef79a28b28fdb9f7801b39ea.png"},6958:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/scraper-dag-7bd0afddf45ba6878a52fa45da20f24e.png"},4282:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/scrapers-task-83d8a6714e216bfe482dae89c797d43f.png"},1939:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/sentinel-properties-1-6c10dc9070144520bf6e244827d0854c.png"},5080:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/sentinel-properties-2-050993812a7f9756a3079944d9df9e3d.png"},4945:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/sentinel-wrapper-95c1f3f3b28a4d6f126e760666a5ac8e.png"},7312:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/successful-scraper-run-08ec8bdf3d81900ed8d675f103a95ccb.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);