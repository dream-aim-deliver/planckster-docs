"use strict";(self.webpackChunkplanckster_docs=self.webpackChunkplanckster_docs||[]).push([[469],{914:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=s(4848),i=s(8453);const o={sidebar_label:"Introduction",sidebar_position:1},a="Lieutenant Planckster Instructional Video",r={id:"guides/kubeflow/kubeflow-features-and-ui-walkthrough",title:"Lieutenant Planckster Instructional Video",description:"Click here for a quick video guide for using Lt. Planckster! This video provides the most basic instructions for how to use Kubeflow in the context of Kernel Planckster. It may be sufficient on its own, but can be combined with the documentation provided in this section for a deeper understanding of the data processing machinery that supports Case Studies in Websat.",source:"@site/docs/guides/kubeflow/kubeflow-features-and-ui-walkthrough.md",sourceDirName:"guides/kubeflow",slug:"/guides/kubeflow/kubeflow-features-and-ui-walkthrough",permalink:"/docs/guides/kubeflow/kubeflow-features-and-ui-walkthrough",draft:!1,unlisted:!1,editUrl:"https://github.com/dream-aim-deliver/planckster-docs/edit/main/docs/guides/kubeflow/kubeflow-features-and-ui-walkthrough.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Lieutenant Planckster",permalink:"/docs/category/lieutenant-planckster"},next:{title:"Run Kubeflow Pipelines",permalink:"/docs/guides/kubeflow/running-kubeflow-pipelines"}},l={},c=[{value:"Notebooks",id:"notebooks",level:2},{value:"Pipelines",id:"pipelines",level:2},{value:"Experiments",id:"experiments",level:2}];function h(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"lieutenant-planckster-instructional-video",children:"Lieutenant Planckster Instructional Video"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://youtu.be/arP1y2DqECw",children:"Click here for a quick video guide"})," for using Lt. Planckster! ",(0,n.jsx)(t.a,{href:"https://youtu.be/arP1y2DqECw",children:"This video"})," provides the most basic instructions for how to use Kubeflow in the context of Kernel Planckster. It may be sufficient on its own, but can be combined with the documentation provided in this section for a deeper understanding of the data processing machinery that supports Case Studies in Websat."]}),"\n",(0,n.jsx)(t.h1,{id:"kubeflow",children:"Kubeflow"}),"\n",(0,n.jsx)(t.p,{children:'Kubeflow is a platform that makes it easier to house, test, automate, and monitor the machinery necessary for AI / Machine Learning based workflows. It\'s a kind of "command center" that allows you to orchestrate the code, data sources, and other resources you need to use.'}),"\n",(0,n.jsxs)(t.p,{children:["Kubeflow is a Creative Commons project, whose components are based on the Open Source ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/",children:"Kubernetes"})," project. You can learn more about Kubeflow on ",(0,n.jsx)(t.a,{href:"https://www.kubeflow.org/",children:"their main website"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In the context of ",(0,n.jsx)(t.a,{href:"/docs/category/kernel-planckster",children:"Kernel Planckster"}),", Kubeflow's primary function is to manage the scraping ",(0,n.jsx)(t.a,{href:"#pipelines",children:"Pipelines"}),' that feed materials into Research Contexts. In other words, Kubeflow receives data ("intelligence") and broad directives ("orders") from Kernel Planckster, and puts together all the pieces necessary to execute them - hence the name "Lieutenant Planckster". But Kubeflow can also be used to test and troubleshoot these Pipelines, interact ',(0,n.jsx)(t.em,{children:"ad hoc"})," with the data as needed, and more."]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"UI Tips"}),(0,n.jsx)(t.p,{children:"All of the list pages described below have some useful searching and filtering options."}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Filtering"}),": List pages can be filtered by typing a search term into the Filter bar at the top. There are two types of filters, though."]}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Static filters have no border, the prompt doesn't name the type of object being filtered, but provides options for filter category, and has a question mark tooltip at the far right with info on advanced options. To apply this sort of filter, it's necessary to submit (e.g. by pressing the return button) after typing the filter term. ",(0,n.jsx)(t.img,{alt:"screen shot of static filter of &quot;disaster&quot; applied on Notebooks page",src:s(8496).A+"",width:"2362",height:"562"})]}),"\n",(0,n.jsxs)(t.li,{children:['Dynamic filters have a border, name the type of object being filtered (e.g. "filter runs"), but provide no other options and no tooltip. These filters begin applying as you type. ',(0,n.jsx)(t.img,{alt:"screen shot of dynamic filter of &quot;augmen&quot; applied on Runs page",src:s(5587).A+"",width:"2348",height:"478"})]}),"\n"]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Pagination"}),": By default, most list pages show 10 items per page. Pagination can be found at the bottom-right of the page, but it's subtle and can be easy to miss! The pagination allows you to move through pages, but also to change how many items show per page. ",(0,n.jsx)(t.img,{alt:"screen shot of pagination showing the options for how many items to show per page",src:s(2431).A+"",width:"2350",height:"986"})]})]}),"\n",(0,n.jsx)(t.h2,{id:"notebooks",children:"Notebooks"}),"\n",(0,n.jsxs)(t.p,{children:["Notebooks are where you write ",(0,n.jsx)(t.em,{children:"ad hoc"})," code to interact with all the remote resources that make up or are produced by the ",(0,n.jsx)(t.a,{href:"#pipelines",children:"Pipelines"})," you run on Kubeflow. You can use them to load environments and images, call code you have saved remotely, interact with data, files, or other resources that are the inputs or outputs to your workflows, and more. Each Notebook is actually a whole project on its own server, which can contain any number of files - including Jupyter Notebooks (.ipynb) - for you to interact with or output."]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Notebooks List View"}),(0,n.jsxs)(t.p,{children:["On the ",(0,n.jsx)(t.a,{href:"https://kubeflow.devmaany.com/_/jupyter/?ns=planckster-example",children:"Notebooks page"}),", you can see all of these projects listed."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"screen shot of Notebooks list",src:s(2830).A+"",width:"2350",height:"960"})})]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Notebook Detail View"}),(0,n.jsxs)(t.p,{children:["Clicking on one of the Pod Names shows details about its configuration, including applied ",(0,n.jsx)(t.a,{href:"https://kubeflow.devmaany.com/_/volumes/?ns=planckster-example",children:"Volumes"}),", Environment, but also the resources allocated, as well as its history (condition, events, logs)."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"screen shot of Notebook detail showing allocated resources, environment, and some conditions",src:s(246).A+"",width:"1960",height:"1312"})})]}),"\n",(0,n.jsx)(t.p,{children:"To interact with the files in one of these projects, click CONNECT, which is a button at the top of the detail view, or a link on each item towards the right of the list view."}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Create New Notebook"}),(0,n.jsx)(t.p,{children:"You can create a new Notebook by clicking the New Notebook button on the list view. From there, you will need to name the Notebook project, choose the type, allocate resources, create a new Workspace Volume, and either create a new Data Volume, or assign an existing one."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"screen capture of assigning an existing Data Volume when creating a Notebook",src:s(6122).A+"",width:"960",height:"600"})}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),': If the Notebook is to be used for creating Pipelines, you must explicitly "Allow access to Kubeflow Pipelines" in the configuration section\'s Advanced Options:']}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"screen capture of allowing access to Kubeflow Pipelines when creating a Notebook",src:s(1931).A+"",width:"960",height:"600"})})]}),"\n",(0,n.jsx)(t.h2,{id:"pipelines",children:"Pipelines"}),"\n",(0,n.jsxs)(t.p,{children:["Pipelines are where all the different ",(0,n.jsx)(t.a,{href:"https://www.kubeflow.org/docs/components/pipelines/concepts/component/",children:"components"})," - including code and images stored remotely, such as the three scrapers - are pulled together into a workflow. In Lieutenant Planckster, these Pipelines are configured using YAML files that are created within corresponding ",(0,n.jsx)(t.a,{href:"#Notebooks",children:"Notebooks"}),"."]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Pipelines List View"}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://kubeflow.devmaany.com/_/pipeline/?ns=planckster-example#/pipelines",children:"Pipelines page"})," shows a list of all the Pipelines that have been set up. You can click on the little triangle to the left of any of them to see the various versions that have been saved."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"screen shot of Pipelines list with sda-disaster-tracking-scrapers open to show three versions",src:s(6151).A+"",width:"2366",height:"1132"})})]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Pipeline Detail View"}),(0,n.jsx)(t.p,{children:"You can click on the name of any of the versions to see both graph and markup (YAML) representations of that Pipeline (clicking on the overall Pipeline name takes you to the current, most recent version). In sda-disaster-tracking-scrapers, for example, you can see that the structure of the Pipeline is relatively simple: all three scrapers run in parallel, with no need for any complicated conditional sequencing, or any data to be passed between the Pipeline's components. But all of these layers are possible should the need arise!"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"screen shot of sda-disaster-tracking-scrapers Pipelines detail showing three parallel scrapers for Sentinel, Telegram, and Twitter",src:s(8689).A+"",width:"1490",height:"490"})}),(0,n.jsxs)(t.p,{children:["You can manually run your Pipeline by clicking the Create Run button at the top. Note that you will need to specify an ",(0,n.jsx)(t.a,{href:"#Experiments",children:"Experiment"})," the run is associated with."]})]}),"\n",(0,n.jsxs)(t.p,{children:["Pipelines are set up to run via ",(0,n.jsx)(t.a,{href:"#Experiments",children:"Experiments"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"experiments",children:"Experiments"}),"\n",(0,n.jsxs)(t.p,{children:["Experiments in Kubeflow ",(0,n.jsx)(t.a,{href:"#Pipelines",children:"Pipelines"})," are how Pipelines are run. In addition to production runs, they allow for test runs with controlled configurations and parameters. In the context of Lieutenant Planckster, Experiments are how the X (Twitter), Sentinel, and Telegram scrapers are regularly run in the background, without requiring any kind of manual trigger."]}),"\n",(0,n.jsxs)(t.p,{children:["We can also use Experiments to troubleshoot Pipelines and ensure they perform as expected under various anticipated scenarios. Experiment ",(0,n.jsx)(t.a,{href:"https://kubeflow.devmaany.com/_/pipeline/?ns=planckster-example#/runs",children:"Runs"})," show details about the success or failure of the overall workflow, as well as individual components, so that Pipeline stability can be ensured before full deployment. Runs can be ",(0,n.jsx)(t.em,{children:"ad hoc"})," or set up to be recurring."]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Experiments List View"}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://kubeflow.devmaany.com/_/pipeline/?ns=planckster-example#/experiments",children:"Experiments page"})," shows a list of all the Experiments that have been created. You can click on the little triangle to the left of any of them to see the performance of that Experiment's most recent runs."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"screen shot of Experiments list with sda-disaster-tracking open to show outcomes of all five runs",src:s(1668).A+"",width:"2350",height:"1234"})}),(0,n.jsx)(t.p,{children:"Clicking on the Run name takes you to the details of the run. The Config tab shows the parameters with which the Experiment was conducted."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"screen shot of sda-disaster-tracking Experiment run detail showing run details and parameters",src:s(3591).A+"",width:"1132",height:"1096"})}),(0,n.jsx)(t.p,{children:"Clicking on the Pipeline version takes you to the Pipeline Detail View."})]}),"\n",(0,n.jsx)(t.p,{children:"The Experiment Detail View is effectively the same as what is revealed by clicking on the triangle next to an Experiment in the list view."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3591:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/kubeflow_experiment_run_details-3c74dd7fe6455984bcb7c815303f3772.png"},1668:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/kubeflow_experiments_list-9bff96cfd4febf9d3f16ddd5133f40e2.png"},5587:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/kubeflow_filter_dynamic-69208d1efd5a495b0a0d56606166f8cc.png"},8496:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/kubeflow_filter_static-f5658c8e1369351695d3c5cee9880ca4.png"},6122:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/kubeflow_notebook_create-429f8d21a4bc9a59990b958489c7de96.gif"},1931:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/kubeflow_notebook_create_access-51198f58d56f7f7e62d51cd1b07adc1b.gif"},246:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/kubeflow_notebook_detail-27308076b83563058dcbd67600ec5327.png"},2830:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/kubeflow_notebooks_list-8f429b107be64faa3b8add732330861b.png"},2431:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/kubeflow_pagination-c4234761abc481c56ee8ac8f605e44a8.png"},8689:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/kubeflow_pipeline_detail-41483f7eea79c9385542a454c30a80df.png"},6151:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/kubeflow_pipelines_list-d143e965bde916a5de5086c26170ceb6.png"},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(6540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);