"use strict";(self.webpackChunkplanckster_docs=self.webpackChunkplanckster_docs||[]).push([[4904],{6364:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>p});var s=i(4848),l=i(8453);const t={sidebar_label:"Run Kubeflow Pipelines",sidebar_position:2},r="Kubeflow Pipelines",o={id:"guides/kubeflow/running-kubeflow-pipelines",title:"Kubeflow Pipelines",description:"Kubeflow Pipelines is a platform for building and deploying portable, scalable machine learning (ML) workflows based on Docker containers. It is a part of the Kubeflow project, which aims to make running ML workloads on Kubernetes simple, portable, and scalable. This guide aims to explain and demonstrate how to run a Kubeflow Pipeline.",source:"@site/docs/guides/kubeflow/running-kubeflow-pipelines.md",sourceDirName:"guides/kubeflow",slug:"/guides/kubeflow/running-kubeflow-pipelines",permalink:"/docs/guides/kubeflow/running-kubeflow-pipelines",draft:!1,unlisted:!1,editUrl:"https://github.com/dream-aim-deliver/planckster-docs/edit/main/docs/guides/kubeflow/running-kubeflow-pipelines.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Run Kubeflow Pipelines",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/guides/kubeflow/kubeflow-features-and-ui-walkthrough"},next:{title:"Sentinel 5P Pipeline Reference",permalink:"/docs/guides/kubeflow/sentinel-pipeline-reference"}},a={},p=[{value:"What is a Pipeline?",id:"what-is-a-pipeline",level:3},{value:"How to run a Pipeline in Kubeflow?",id:"how-to-run-a-pipeline-in-kubeflow",level:2},{value:"Step 1: Access Kubeflow Pipelines UI",id:"step-1-access-kubeflow-pipelines-ui",level:3},{value:"Step 2: Upload the Pipeline",id:"step-2-upload-the-pipeline",level:3},{value:"Step 3: Create an Experiment",id:"step-3-create-an-experiment",level:3},{value:"Step 4: Run the Pipeline",id:"step-4-run-the-pipeline",level:3},{value:"Step 5: Monitor the Run",id:"step-5-monitor-the-run",level:3}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"kubeflow-pipelines",children:"Kubeflow Pipelines"}),"\n",(0,s.jsx)(n.p,{children:"Kubeflow Pipelines is a platform for building and deploying portable, scalable machine learning (ML) workflows based on Docker containers. It is a part of the Kubeflow project, which aims to make running ML workloads on Kubernetes simple, portable, and scalable. This guide aims to explain and demonstrate how to run a Kubeflow Pipeline."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," In Kubeflow, Pipelines are executed within the context of an Experiment. An Experiment in Kubeflow serves as a logical grouping for Pipeline runs, allowing you to track and compare multiple runs of the same Pipeline. Before running a Pipeline, you need to create or select an existing Experiment. Once the Experiment is defined, you can initiate Pipeline runs under it. This structure helps organize and manage your ML workflows more effectively."]}),"\n",(0,s.jsx)(n.h3,{id:"what-is-a-pipeline",children:"What is a Pipeline?"}),"\n",(0,s.jsx)(n.p,{children:"In Kubeflow, a pipeline is a sequence of steps or components that automate and orchestrate the workflow for machine learning (ML) tasks. Each step in the pipeline typically performs a specific operation, such as data preprocessing, model training, or evaluation. The pipeline is defined using a Python SDK, and it is executed within the Kubeflow environment to facilitate the reproducibility, scalability, and management of ML workflows."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A pipeline is defined as a Directed Acyclic Graph (DAG) using the Kubeflow Pipelines SDK. Each node in the DAG represents a step in the workflow."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Pipelines can accept parameters that allow users to customize the execution of the pipeline without modifying the pipeline code. This makes pipelines more flexible and reusable."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Kubeflow Pipelines track the input, output, and intermediate artifacts of each step, as well as the metadata associated with pipeline runs. This helps in monitoring, debugging, and reproducing pipeline runs."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-run-a-pipeline-in-kubeflow",children:"How to run a Pipeline in Kubeflow?"}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://youtu.be/arP1y2DqECw",children:(0,s.jsx)(n.img,{src:"https://img.youtube.com/vi/arP1y2DqECw/0.jpg",alt:"Watch the Case Study Video"})}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Click to watch Running Kubeflow Pipelines"})]})}),"\n",(0,s.jsx)(n.h3,{id:"step-1-access-kubeflow-pipelines-ui",children:"Step 1: Access Kubeflow Pipelines UI"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open your web browser and navigate to the Kubeflow Pipelines UI. This URL is typically provided by your Kubeflow installation."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"step-2-upload-the-pipeline",children:"Step 2: Upload the Pipeline"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Navigate to Pipelines"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'In the Kubeflow Pipelines UI, click on the "Pipelines" tab in the left-hand menu.'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Upload Pipeline"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Click the "Upload pipeline" button.'}),"\n",(0,s.jsxs)(n.li,{children:['In the "Upload pipeline" dialog, you can either upload a new pipeline or import a pipeline from a URL. For uploading a new pipeline, click "Upload a file" and select your compiled pipeline file (ex: ',(0,s.jsx)(n.code,{children:"scraper_pipeline.zip"}),")."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Provide Details"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Enter a name and description for your pipeline."}),"\n",(0,s.jsx)(n.li,{children:'Click "Upload" to upload the pipeline.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"step-3-create-an-experiment",children:"Step 3: Create an Experiment"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Navigate to Experiments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Click on the "Experiments" tab in the left-hand menu.'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Create New Experiment"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Click the "Create an experiment" button.'}),"\n",(0,s.jsx)(n.li,{children:"Enter a name and optional description for your experiment."}),"\n",(0,s.jsx)(n.li,{children:'Click "Next" to create the experiment.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"step-4-run-the-pipeline",children:"Step 4: Run the Pipeline"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Navigate to the Experiment"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In the Experiments tab, click on the name of the experiment you just created."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Start a New Run"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Within the experiment page, click the "Create run" button.'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Configure the Run"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Run name"}),": Enter a name for your run."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pipeline"}),": Choose the pipeline you uploaded earlier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Version"}),": If your pipeline has multiple versions, select the appropriate one."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Start Run",src:i(2385).A+"",width:"643",height:"688"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Start the Run"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If your pipeline requires parameters, you can set them here."}),"\n",(0,s.jsx)(n.li,{children:'Click the "Start" button to start the run.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Parameters",src:i(2015).A+"",width:"637",height:"505"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"step-5-monitor-the-run",children:"Step 5: Monitor the Run"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"View Runs"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"After starting the run, you will be redirected to the run details page."}),"\n",(0,s.jsx)(n.li,{children:"You can monitor the progress of your pipeline run in real-time. The page will show the pipeline graph, the status of each step, and logs for debugging if something goes wrong."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Run Details Page",src:i(5489).A+"",width:"1616",height:"556"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Visualize Outputs"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Once the run is complete, you can inspect the following:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outputs"}),":\n",(0,s.jsx)(n.img,{alt:"Outputs",src:i(9089).A+"",width:"1135",height:"735"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Details"}),":\n",(0,s.jsx)(n.img,{alt:"Artifacts",src:i(6537).A+"",width:"841",height:"344"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Associated Metadata"}),":\n",(0,s.jsx)(n.img,{alt:"Metrics",src:i(5196).A+"",width:"1135",height:"735"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},6537:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/details-4fbaeb1f22cf2f905423558f5cfb59ba.png"},9089:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ipop-c740765d9b0b3cd5479227fd01603e68.png"},5196:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/metadata-4b9c86f4852f51c752d8df7d615bf5e9.png"},5489:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/run details page-24b67d0da114790d35b549bf43002091.png"},2015:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/run param-49c9b7aa2a9cb7c099f4f8500c1c6cbb.png"},2385:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/start_run-8c8e519f326460ffef0074d9747fc98d.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(6540);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);