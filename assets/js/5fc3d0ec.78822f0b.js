"use strict";(self.webpackChunkplanckster_docs=self.webpackChunkplanckster_docs||[]).push([[8176],{9392:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>p});var s=i(4848),o=i(8453);const t={sidebar_label:"Custom Pipelines",sidebar_position:4},l="Custom Pipelines in Kubeflow",a={id:"guides/kubeflow/custom-pipelines",title:"Custom Pipelines in Kubeflow",description:"How to create a Pipeline Notebook?",source:"@site/docs/guides/kubeflow/custom-pipelines.md",sourceDirName:"guides/kubeflow",slug:"/guides/kubeflow/custom-pipelines",permalink:"/planckster-docs/docs/guides/kubeflow/custom-pipelines",draft:!1,unlisted:!1,editUrl:"https://github.com/dream-aim-deliver/planckster-docs/edit/main/docs/guides/kubeflow/custom-pipelines.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Custom Pipelines",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Analyzing Scraped Data",permalink:"/planckster-docs/docs/guides/kubeflow/analysing-scraped-data"},next:{title:"Data Scrapers",permalink:"/planckster-docs/docs/category/data-scrapers"}},c={},p=[{value:"How to create a Pipeline Notebook?",id:"how-to-create-a-pipeline-notebook",level:2},{value:"1. Navigate to the &quot;Notebooks&quot; page of Kubeflow and press <code>+ New Notebook</code>",id:"1-navigate-to-the-notebooks-page-of-kubeflow-and-press--new-notebook",level:3},{value:"2. When you are in the <em>New Notebook</em> page you will:",id:"2-when-you-are-in-the-new-notebook-page-you-will",level:3},{value:"How to create a new DAG with existing pipeline elements?",id:"how-to-create-a-new-dag-with-existing-pipeline-elements",level:2},{value:"1. Create and setup the <code>.ipynb</code> Notebook",id:"1-create-and-setup-the-ipynb-notebook",level:3},{value:"2. Loading components",id:"2-loading-components",level:3},{value:"3. Saving Components",id:"3-saving-components",level:3},{value:"4. Assemble Custom Pipelines",id:"4-assemble-custom-pipelines",level:3},{value:"5. Compile Custom Pipelines",id:"5-compile-custom-pipelines",level:3},{value:"How to create a run for the pipeline?",id:"how-to-create-a-run-for-the-pipeline",level:2},{value:"1. Navigate to the Pipelines page:",id:"1-navigate-to-the-pipelines-page",level:3},{value:"2. Click on a custom pipeline and select <code>+ Create run</code>",id:"2-click-on-a-custom-pipeline-and-select--create-run",level:3},{value:"3. Configure the run:",id:"3-configure-the-run",level:3},{value:"4. View logs:",id:"4-view-logs",level:3},{value:"5. Ensure successful job completion:",id:"5-ensure-successful-job-completion",level:3},{value:"Conclusion",id:"conclusion",level:2}];function r(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"custom-pipelines-in-kubeflow",children:"Custom Pipelines in Kubeflow"}),"\n",(0,s.jsx)(n.h2,{id:"how-to-create-a-pipeline-notebook",children:"How to create a Pipeline Notebook?"}),"\n",(0,s.jsxs)(n.h3,{id:"1-navigate-to-the-notebooks-page-of-kubeflow-and-press--new-notebook",children:['1. Navigate to the "Notebooks" page of Kubeflow and press ',(0,s.jsx)(n.code,{children:"+ New Notebook"})]}),"\n",(0,s.jsx)(n.p,{children:"A page like the following will be displayed:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"config 1",src:i(5807).A+"",width:"886",height:"964"})}),"\n",(0,s.jsxs)(n.h3,{id:"2-when-you-are-in-the-new-notebook-page-you-will",children:["2. When you are in the ",(0,s.jsx)(n.em,{children:"New Notebook"})," page you will:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Select a descriptive name for the notebook"}),"\n",(0,s.jsx)(n.li,{children:"Select VisualStudio Code as the editor for the notebook"}),"\n",(0,s.jsx)(n.li,{children:"Select an appropriate amount of CPU and RAM for the pipeline"}),"\n",(0,s.jsx)(n.li,{children:"Add more storage to the volume if needed"}),"\n",(0,s.jsxs)(n.li,{children:["Check ",(0,s.jsx)(n.strong,{children:"Allow access to Kubeflow Pipelines"})," in the ",(0,s.jsx)(n.em,{children:"Configurations"})," dropdown. This step is critical to allow this notebook to create a new (custom) pipeline."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"config 2",src:i(2596).A+"",width:"580",height:"422"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.em,{children:"Launch"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-create-a-new-dag-with-existing-pipeline-elements",children:"How to create a new DAG with existing pipeline elements?"}),"\n",(0,s.jsxs)(n.h3,{id:"1-create-and-setup-the-ipynb-notebook",children:["1. Create and setup the ",(0,s.jsx)(n.code,{children:".ipynb"})," Notebook"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"!pip install kfp==1.8.22\nimport kfp\nfrom kfp import compiler, dsl\n\nkfp.Client() # this can be used to test if the connection is successful\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," We use kfp version 1.8.22 throughout our entire Kubeflow instance, Compatibility >2.0.0 versions will arrive in v3."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"create ipynb",src:i(2740).A+"",width:"1033",height:"357"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create a new .ipynb notebook within the home folder of the default user (Jovyan)"}),"\n",(0,s.jsx)(n.li,{children:"Select a python kernel, ideally a new conda environment."}),"\n",(0,s.jsx)(n.li,{children:'Install the "kfp" python package (allows connecting to Kubeflow client)'}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-loading-components",children:"2. Loading components"}),"\n",(0,s.jsx)(n.p,{children:"In general, components can be loaded and reused using the following code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'component = kfp.components.load_component_from_file("./component.txt")\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"load components",src:i(3718).A+"",width:"1112",height:"660"})}),"\n",(0,s.jsxs)(n.p,{children:["We can load the sentinel, twitter, and telegram components defined in the original ",(0,s.jsx)(n.em,{children:'SDA-disaster-scrapers.ipynb"'})," notebook. This avoids having to redefine the long wrapper functions for these components."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Note:"})," This functionality requires components to be saved to a .txt file: see the next section"]}),"\n",(0,s.jsx)(n.h3,{id:"3-saving-components",children:"3. Saving Components"}),"\n",(0,s.jsxs)(n.p,{children:["In general, components can be saved with the following code after ",(0,s.jsx)(n.code,{children:"component_wrapper"})," is defined:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# save component\nwith open("./components/component.txt", "w") as text_file:\n    text_file.write(func_to_component_text(component_wrapper, base_image="maany/mpi-sda-component:version"))\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"save components",src:i(6156).A+"",width:"1367",height:"788"})}),"\n",(0,s.jsxs)(n.p,{children:["This is how we save components to .txt files in the original ",(0,s.jsx)(n.em,{children:"sda-disaster-scrapers.ipynb"})," notebook."]}),"\n",(0,s.jsx)(n.h3,{id:"4-assemble-custom-pipelines",children:"4. Assemble Custom Pipelines"}),"\n",(0,s.jsx)(n.p,{children:"In general, custom pipelines are assembled as a set of tasks with execution options:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def custom_pipeline_1(INPUT PARAMETERS): # Input Parameters can be adjusted in the Kubeflow UI\n\n    # parallel execution:\n    component1_scraping_task = component1(ARGUMENTS)\n    component1.execution_options.caching_strategy.max_cache_staleness = "P0D"\n\n    component2_scraping_task = component2(ARGUMENTS)\n    component2.execution_options.caching_strategy.max_cache_staleness = "P0D"\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"assemble custom pipelines",src:i(2228).A+"",width:"1475",height:"864"})}),"\n",(0,s.jsx)(n.h3,{id:"5-compile-custom-pipelines",children:"5. Compile Custom Pipelines"}),"\n",(0,s.jsx)(n.p,{children:"In general, custom pipelines are compiled to a .yaml file which is then uploaded to Kubeflow:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from kfp import compiler\n\n#save the pipeline locally\ncompiler.Compiler().compile(custom_pipeline_1, package_path='custom_pipeline_1.yaml') \n\n#upload and register the pipeline with Kubeflow\nkfp.Client().upload_pipeline(\n    'custom_pipeline_1.yaml',\n    pipeline_name=\"custom_pipeline_1-VERSION\",\n)\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"compile custom pipelines",src:i(2527).A+"",width:"1482",height:"948"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that a pipeline can only be uploaded ",(0,s.jsx)(n.em,{children:"once"})," with the same version. To reupload, bump up the version number in the ",(0,s.jsx)(n.em,{children:"pipeline_name"})," option when compiling."]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-create-a-run-for-the-pipeline",children:"How to create a run for the pipeline?"}),"\n",(0,s.jsx)(n.h3,{id:"1-navigate-to-the-pipelines-page",children:"1. Navigate to the Pipelines page:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"pipelines page",src:i(2812).A+"",width:"1483",height:"657"})}),"\n",(0,s.jsxs)(n.h3,{id:"2-click-on-a-custom-pipeline-and-select--create-run",children:["2. Click on a custom pipeline and select ",(0,s.jsx)(n.code,{children:"+ Create run"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"custom pipeline page",src:i(3339).A+"",width:"1414",height:"452"})}),"\n",(0,s.jsx)(n.h3,{id:"3-configure-the-run",children:"3. Configure the run:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Leave pipeline name, version, and run name as default."}),"\n",(0,s.jsx)(n.li,{children:"Choose an experiment that is relevant to the run: this is purely organizational."}),"\n",(0,s.jsx)(n.li,{children:"Specify Input Parameters. Note: It's good practice to choose a new job_id every run."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"custom pipeline config 1",src:i(3838).A+"",width:"718",height:"672"}),"\n",(0,s.jsx)(n.img,{alt:"custom pipeline config 2",src:i(1989).A+"",width:"635",height:"333"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Start"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-view-logs",children:"4. View logs:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"view logs",src:i(4614).A+"",width:"1024",height:"820"})}),"\n",(0,s.jsx)(n.h3,{id:"5-ensure-successful-job-completion",children:"5. Ensure successful job completion:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"successful job completion",src:i(5664).A+"",width:"1021",height:"951"})}),"\n",(0,s.jsx)(n.p,{children:'You should see the "Job finished" message at the end of the log page. Additionally, check the MinIO bucket to make sure all necessary data was uploaded.'}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"You now understand how to create and upload custom pipelines by reusing previously defined components. This is a very powerful practice that allows for rapid testing of various configurations of workflows. When paired with custom augmentation, one can even analyze the same scraper data in different ways."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},2228:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/assemble-custom-pipeline-b80e607f0f6d48d1fa9fe419ddde65e2.png"},2527:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/compile-custom-pipeline-9443afeffcac8b9cf850e897f4d77e59.png"},2740:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/create-ipynb-8f74f2282d14643d39e24b8ce0a9c7dd.png"},3838:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/custom-pipeline-config-1-5d83230f8a374af65ea9d1147f4fe596.png"},1989:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/custom-pipeline-config-2-114ea35a120a90b3b4ad49228cbb220f.png"},3339:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/custom-pipeline-page-8ca6d61966a097bda7c878e3a7f80874.png"},3718:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/loading-components-1f28ea04d4395cb587e5ac4ac4ef7068.png"},5807:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/notebook-config-1-083eed9971d2779e645f1d773f9158ac.png"},2596:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/notebook-config-2-601925d7a50b54a48c95c1444cd948ff.png"},2812:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/pipelines-page-1a23d5ea3c38687621ab48a9611d52ba.png"},6156:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/saving-components-e4d9938930b3f9455c6e72dbe39fc722.png"},5664:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/successful-job-completion-1362407a88fdb68cf55dcf5496f6e5bb.png"},4614:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/view-logs-20198af3498e2b0a2f4227a70868bd0b.png"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var s=i(6540);const o={},t=s.createContext(o);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);