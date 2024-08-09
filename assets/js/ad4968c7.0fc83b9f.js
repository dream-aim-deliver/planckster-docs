"use strict";(self.webpackChunkplanckster_docs=self.webpackChunkplanckster_docs||[]).push([[105],{3973:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=s(4848),r=s(8453);const l={sidebar_label:"Local Sentinel Setup",sidebar_position:2},t="Sentinel Scraper Setup Guide",c={id:"guides/scrapers/Sentinel_setup",title:"Sentinel Scraper Setup Guide",description:"Description",source:"@site/docs/guides/scrapers/Sentinel_setup.md",sourceDirName:"guides/scrapers",slug:"/guides/scrapers/Sentinel_setup",permalink:"/planckster-docs/docs/guides/scrapers/Sentinel_setup",draft:!1,unlisted:!1,editUrl:"https://github.com/dream-aim-deliver/planckster-docs/edit/main/docs/guides/scrapers/Sentinel_setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Local Sentinel Setup",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Locally Setting Up Scrapers",permalink:"/planckster-docs/docs/guides/scrapers/local-setup"},next:{title:"Create Your Own Scraper",permalink:"/planckster-docs/docs/guides/scrapers/create-your-own-scraper"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"1.Setting Up Docker",id:"1setting-up-docker",level:3},{value:"For Windows and Mac:",id:"for-windows-and-mac",level:3},{value:"For Linux:",id:"for-linux",level:3},{value:"2. Ensure you have a running instance of Kernel-Planckster, see Guides -&gt; Kernel-planckster for help.",id:"2-ensure-you-have-a-running-instance-of-kernel-planckster-see-guides---kernel-planckster-for-help",level:3},{value:"3. Obtain a client ID and client secret from Sentinel Hub.",id:"3-obtain-a-client-id-and-client-secret-from-sentinel-hub",level:3},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"1. Clone the Repository",id:"1-clone-the-repository",level:3},{value:"2. Prepare Environment variables",id:"2-prepare-environment-variables",level:3},{value:"3. Run the Docker Container",id:"3-run-the-docker-container",level:3},{value:"4. Run the Demo",id:"4-run-the-demo",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"sentinel-scraper-setup-guide",children:"Sentinel Scraper Setup Guide"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This guide details how to set up a local instance of the Sentinel Image Scraper, which uses the SentinelHub API to scrape images for a given location and date."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.h3,{id:"1setting-up-docker",children:"1.Setting Up Docker"}),"\n",(0,i.jsx)(n.p,{children:"Before using Docker, you need to have it installed on your system. Follow these steps to ensure Docker is installed:"}),"\n",(0,i.jsx)(n.h3,{id:"for-windows-and-mac",children:"For Windows and Mac:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Download Docker Desktop"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit the ",(0,i.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop download page"})," and download the installer for your operating system."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Install Docker Desktop"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Run the downloaded installer and follow the on-screen instructions to complete the installation."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Start Docker Desktop"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"After installation, start Docker Desktop from your applications menu. Docker will start running in the background."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Verify Installation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open a terminal or command prompt and run the following command to check if Docker is installed correctly:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker --version\n"})}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"You should see the Docker version information if it is installed correctly."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"for-linux",children:"For Linux:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Update Your Package Index"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open a terminal and run:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Install Required Packages"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install apt-transport-https ca-certificates curl software-properties-common\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Add Docker\u2019s Official GPG Key"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Add Docker Repository"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Install Docker Engine"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install docker-ce\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Start Docker"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start docker\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Verify Installation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker --version\n"})}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"You should see the Docker version information if it is installed correctly."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["By following these steps, you will ensure that Docker is installed and running on your system.\n",(0,i.jsx)(n.strong,{children:"Ensure docker is installed and running succesfully before proceeding with the next steps"})]}),"\n",(0,i.jsxs)(n.h3,{id:"2-ensure-you-have-a-running-instance-of-kernel-planckster-see-guides---kernel-planckster-for-help",children:["2. Ensure you have a running instance of Kernel-Planckster, see ",(0,i.jsx)(n.a,{href:"https://dream-aim-deliver.github.io/planckster-docs/docs/category/guides",children:"Guides"})," -> ",(0,i.jsx)(n.a,{href:"https://dream-aim-deliver.github.io/planckster-docs/docs/category/kernel-planckster",children:"Kernel-planckster"})," for help."]}),"\n",(0,i.jsxs)(n.h3,{id:"3-obtain-a-client-id-and-client-secret-from-sentinel-hub",children:["3. Obtain a client ID and client secret from ",(0,i.jsx)(n.a,{href:"https://www.sentinel-hub.com/",children:"Sentinel Hub"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Optional: Create a Virtual environment to avoid any package version conflicts"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3 -m venv .venv\nsource .venv/bin/activate\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"python3 -m venv"}),": This command uses the venv module in Python to create a virtual environment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".venv"}),": This is the name of the directory where the virtual environment will be created. You can name it anything, but .venv is a common convention."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup-instructions",children:"Setup Instructions"}),"\n",(0,i.jsx)(n.h3,{id:"1-clone-the-repository",children:"1. Clone the Repository"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/dream-aim-deliver/mpi-sda-sentinel.git\ncd mpi-sda-sentinel\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"git clone https://github.com/dream-aim-deliver/mpi-sda-sentinel.git"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"git clone"}),": This command is used to create a local copy of a remote repository."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dream-aim-deliver/mpi-sda-sentinel.git",children:"https://github.com/dream-aim-deliver/mpi-sda-sentinel.git"}),": This is the URL of the remote Git repository you want to clone. It points to the repository hosted on GitHub."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When you run this command, Git downloads the entire repository (including its history and all files) to the directory on your local machine from which you ran the clone command. The new directory will have the same name as the repository (mpi-sda-sentinel)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cd mpi-sda-sentinel"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cd"}),": This command is used to change the current directory in your terminal or command prompt."]}),"\n",(0,i.jsx)(n.li,{children:"mpi-sda-sentinel: This should be the directory name you want to navigate into. Verify the correct directory name after cloning."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In summary, these commands clone a GitHub repository to your local machine and then change into the directory of the cloned repository."}),"\n",(0,i.jsx)(n.h3,{id:"2-prepare-environment-variables",children:"2. Prepare Environment variables"}),"\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsx)(n.code,{children:"env.template"})," file to create a ",(0,i.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cp .env.template .env\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Fill in the environment variables in the ",(0,i.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"- sh_client_id = {ENTER THE CLIENT ID FROM Sentinel Hub}\n- sh_client_secret = {ENTER CLIENT SECRET FROM Sentinel Hub}\n- HOST = {THE HOSTNAME OF THE FASTAPI APP}\n- PORT = {THE PORT OF THE FASTAPI APP}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-run-the-docker-container",children:"3. Run the Docker Container"}),"\n",(0,i.jsx)(n.p,{children:"To build and run the Docker Container, execute the following script:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./run.sh\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"troubleshoot common error:"})," The ",(0,i.jsx)(n.code,{children:"run.sh"})," file has the following configurations"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'docker run --name mpi-satellite \\\n    --rm \\\n    -e "HOST=0.0.0.0" \\\n    -e "PORT=8000" \\\n    -e "sh_client_id= CLIENT_ID" \\\n    -e "sh_client_secret= CLIENT_SECRET" \\\n    -p "8000:8000" \\\n    mpi-satellite\n'})}),"\n",(0,i.jsxs)(n.p,{children:["change the ",(0,i.jsx)(n.code,{children:"PORT"})," to any other available port(e.g. 8001) and the ",(0,i.jsx)(n.code,{children:"-p"}),' flag correspondingly ("8001:8001") , if any port conflict occurs.']}),"\n",(0,i.jsx)(n.h3,{id:"4-run-the-demo",children:"4. Run the Demo"}),"\n",(0,i.jsxs)(n.p,{children:["To test the setup , you can run the ",(0,i.jsx)(n.code,{children:"demo.sh"})," file, ensure all the below fields are filled correctly before running the script-"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.code,{children:"demo.sh"})," file:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'python sentinel_scraper.py --start_date=2023-8-8 --end_date=2023-8-30 \\\n --long_left=-156.708984 --lat_up=20.759645 --long_right=-156.299744 --lat_down=20.955027 --log-level="INFO" \\\n --kp_auth_token test123 --kp_host localhost --kp_port 8000 --kp_scheme http \\\n --sentinel_client_id YOUR CLIENT-ID --sentinel_client_secret YOUR CLIENT SECRET  \\\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now run the file using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./demo.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the above script runs successfully this means your local environment for the Sentinel Image Scraper is set up and running."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(6540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);