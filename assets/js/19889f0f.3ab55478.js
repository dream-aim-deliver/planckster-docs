"use strict";(self.webpackChunkplanckster_docs=self.webpackChunkplanckster_docs||[]).push([[7690],{4436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(4848),r=n(8453);const s={sidebar_label:"Sentinel Pipeline Reference",sidebar_position:3},a="Sentinel Pipeline Reference",o={id:"guides/kubeflow/sentinel-pipeline-reference",title:"Sentinel Pipeline Reference",description:"The data from the Sentinel Pipeline requires significantly more processing than most other scrapers. As a result, this Pipeline expects a more sophisticated set of parameters when configured for a run. Most of the parameters, such as longleft or latdown (two out of four parameters that define the geographical bounding box) are relatively straightforward. But dataset_evalscripts is more complex, identifying the specific types of data evaluation to use in a run of the Sentinel Pipeline.",source:"@site/docs/guides/kubeflow/sentinel-pipeline-reference.md",sourceDirName:"guides/kubeflow",slug:"/guides/kubeflow/sentinel-pipeline-reference",permalink:"/planckster-docs/docs/guides/kubeflow/sentinel-pipeline-reference",draft:!1,unlisted:!1,editUrl:"https://github.com/dream-aim-deliver/planckster-docs/edit/main/docs/guides/kubeflow/sentinel-pipeline-reference.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Sentinel Pipeline Reference",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Run Kubeflow Pipelines",permalink:"/planckster-docs/docs/guides/kubeflow/running-kubeflow-pipelines"},next:{title:"Analyzing Scraped Data",permalink:"/planckster-docs/docs/guides/kubeflow/analysing-scraped-data"}},l={},c=[{value:"Dataset Evalscripts Format",id:"dataset-evalscripts-format",level:2},{value:"Currently Available Evaluation Scripts",id:"currently-available-evaluation-scripts",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"sentinel-pipeline-reference",children:"Sentinel Pipeline Reference"}),"\n",(0,i.jsxs)(t.p,{children:["The data from the Sentinel Pipeline requires significantly more processing than most other scrapers. As a result, this Pipeline expects a more sophisticated set of parameters when configured for a run. Most of the parameters, such as ",(0,i.jsx)(t.code,{children:"long_left"})," or ",(0,i.jsx)(t.code,{children:"lat_down"})," (two out of four parameters that define the geographical bounding box) are relatively straightforward. But ",(0,i.jsx)(t.code,{children:"dataset_evalscripts"})," is more complex, identifying the specific types of data evaluation to use in a run of the Sentinel Pipeline."]}),"\n",(0,i.jsx)(t.h2,{id:"dataset-evalscripts-format",children:"Dataset Evalscripts Format"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"dataset_evalscripts"})," parameter uses ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/JSON",children:"JSON format"})," to encode all the information necessary for the Pipeline to correctly evaluate its data. Sets of square brackets ",(0,i.jsx)(t.code,{children:"[]"})," are used to denote arrays, or simple lists of things (numbers, text, etc.). Curly brackets ",(0,i.jsx)(t.code,{children:"{}"})," are used to capture more complicated collections of object data that require text labels (e.g. ",(0,i.jsx)(t.code,{children:'{"first_name": "Gaius", "middle_name": "Julius", "last_name": "Caesar"}'}),"). JSON elements may be nested within one another, so that it is possible to have arrays of objects, arrays as the value (but not the lable/key) of an object element, etc."]}),"\n",(0,i.jsx)(t.p,{children:"The following is an example of a value to provide the sentinel5p Pipeline, which will focus on carbon monoxide concentrations on a highlighted Sentinel-2 image:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-JSON",children:'{\n  "SENTINEL5P": [\n    "climate-bands",\n    "climate-mask"\n  ],\n  "SENTINEL2-L1C": [\n    "true-color"\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"currently-available-evaluation-scripts",children:"Currently Available Evaluation Scripts"}),"\n",(0,i.jsx)(t.p,{children:"These are all of the evaluation scripts currently available, with descriptions to help you configure your Sentinel Pipeline according to your needs:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Satellite"}),(0,i.jsx)(t.th,{children:"Script Name"}),(0,i.jsx)(t.th,{children:"Script Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SENTINEL2-L1C"}),(0,i.jsx)(t.td,{children:"true-color"}),(0,i.jsx)(t.td,{children:"A Sentinel-2 image highlighting areas of interest based on water, vegetation, and spectral thresholds in true color. Bands: B04, B03, B02, B08, B11, B12"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SENTINEL5P"}),(0,i.jsx)(t.td,{children:"climate-bands"}),(0,i.jsx)(t.td,{children:"Carbon monoxide (CO) concentrations using a color ramp from low (blue) to high (red) and processes the image into a grid to determine dominant CO concentrations per grid cell."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SENTINEL5P"}),(0,i.jsx)(t.td,{children:"climate-mask"}),(0,i.jsx)(t.td,{children:"A mask of the carbon monoxide (CO) concentrations in the image. The mask is created by thresholding the CO concentrations in the image."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SENTINEL5P"}),(0,i.jsx)(t.td,{children:"fire-bands"}),(0,i.jsx)(t.td,{children:"Sentinel-2 image focussed on detection of wildfires, highlighting areas of interest based on vegetation (NDVI), water content (NDWI), and spectral thresholds in enhanced true color"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SENTINEL5P"}),(0,i.jsx)(t.td,{children:"fire-mask"}),(0,i.jsx)(t.td,{children:"A mask of the wildfire areas in the image. The mask is created by thresholding the NDVI and NDWI values in the image."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);