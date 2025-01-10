"use strict";(self.webpackChunkplanckster_docs=self.webpackChunkplanckster_docs||[]).push([[231],{2696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(4848),o=n(8453);const s={sidebar_label:"Uploading source data",sidebar_position:2},a="Uploading source data",r={id:"guides/kernel/upload-new-data",title:"Uploading source data",description:"Uploading a file from your local computer to Kernel Planckster is not too difficult, and we'll outline the steps to accomplish that below. Experimenting with this can be a great way to familiarize yourself with the process a file undergoes to become part of a Research Context from any other source (e.g. a social media scraper).",source:"@site/docs/guides/kernel/upload-new-data.md",sourceDirName:"guides/kernel",slug:"/guides/kernel/upload-new-data",permalink:"/planckster-docs/docs/guides/kernel/upload-new-data",draft:!1,unlisted:!1,editUrl:"https://github.com/dream-aim-deliver/planckster-docs/edit/main/docs/guides/kernel/upload-new-data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Uploading source data",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Kernel Planckster REST API",permalink:"/planckster-docs/docs/guides/kernel/kernel-planckster-api-walkthrough/"},next:{title:"List and Download Data",permalink:"/planckster-docs/docs/guides/kernel/download-data"}},l={},d=[{value:"Steps to Upload a File",id:"steps-to-upload-a-file",level:2},{value:"1. Navigate to the Swagger interface",id:"1-navigate-to-the-swagger-interface",level:3},{value:"2. Use the <code>GET /client/{id}/upload-credentials</code> endpoint to get a URL that can receive your file",id:"2-use-the-get-clientidupload-credentials-endpoint-to-get-a-url-that-can-receive-your-file",level:3},{value:"3. Upload a local file to the signed URL",id:"3-upload-a-local-file-to-the-signed-url",level:3},{value:"Steps to Register an Uploaded File",id:"steps-to-register-an-uploaded-file",level:2},{value:"1. Navigate to the Swagger interface",id:"1-navigate-to-the-swagger-interface-1",level:3},{value:"2. Use the <code>POST /client/{id}/source</code> endpoint to register the file",id:"2-use-the-post-clientidsource-endpoint-to-register-the-file",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"uploading-source-data",children:"Uploading source data"}),"\n",(0,i.jsxs)(t.p,{children:["Uploading a file from your local computer to Kernel Planckster is not too difficult, and we'll outline the steps to accomplish that below. Experimenting with this can be a great way to familiarize yourself with the process a file undergoes to become part of a Research Context from any other source (e.g. a ",(0,i.jsx)(t.a,{href:"../../../docs/category/data-scrapers",children:"social media scraper"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["We're going to demonstrate this process with a minimum of code, primarily relying on the Swagger interface we've set up for you. So if you aren't already familiar with using Swagger, we recommend you take a moment to read through ",(0,i.jsx)(t.a,{href:"kernel-planckster-api-walkthrough",children:"the guide we've prepared for you"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"At the end, we'll also walk you through registering the file with Kernel Planckster - an necessary step for the Kernel to recognize and retrieve the file later!"}),"\n",(0,i.jsx)(t.h2,{id:"steps-to-upload-a-file",children:"Steps to Upload a File"}),"\n",(0,i.jsxs)(t.h3,{id:"1-navigate-to-the-swagger-interface",children:["1. Navigate to the ",(0,i.jsx)(t.a,{href:"https://kernel-planckster.devmaany.com/docs#/",children:"Swagger interface"})]}),"\n",(0,i.jsx)(t.p,{children:"You should now see the page with FastAPI in the corner, and a list of all the available endpoints."}),"\n",(0,i.jsxs)(t.h3,{id:"2-use-the-get-clientidupload-credentials-endpoint-to-get-a-url-that-can-receive-your-file",children:["2. Use the ",(0,i.jsx)(t.code,{children:"GET /client/{id}/upload-credentials"})," endpoint to get a URL that can receive your file"]}),"\n",(0,i.jsx)(t.p,{children:"For security reasons, files must be uploaded to a signed URL. To generate the signed URL for this file upload, click the Try it out button and fill out the following fields (also shown in the screen shot below):"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"id"}),": Your ID is ",(0,i.jsx)(t.code,{children:"1"}),"!"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"protocol"}),": For the time being, this is always going to be ",(0,i.jsx)(t.code,{children:"s3"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"relative_path"}),": This is up to you, and doesn't need to reflect the location or name of the file on your local machine. The file name and extension must be valid, however, and we strongly recommend using consistent naming conventions with your file name and path. See the screen shot for an example."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"x-auth-token"}),": For testing purposes, use ",(0,i.jsx)(t.code,{children:"test123"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screen shot of filled-out id, protocol, relative_path, and x-auth-token fields on the upload-credentials endpoint",src:n(1603).A+"",width:"1104",height:"720"})}),"\n",(0,i.jsxs)(t.p,{children:["Click the Execute button, and you should see a response with ",(0,i.jsx)(t.code,{children:'"status": true'})," similar to this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n  "status": true,\n  "code": 200,\n  "errorCode": null,\n  "errorMessage": null,\n  "errorName": null,\n  "errorType": null,\n  "signed_url": "http://localhost:9001/sda/up/to/you/must/be/valid/file.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio%2F20240927%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240927T162413Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=f7d94c2eb96ecfd456dce55e025ae8b8c653e7c564f28e24fb35616d66959657"\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Go ahead and copy the URL next to ",(0,i.jsx)(t.code,{children:'"signed_url"'})," (without the quotes) and store it somewhere you can retrieve it easily! You'll need this when uploading your file. You should also store the ",(0,i.jsx)(t.code,{children:"relative_path"})," you used above, as you'll need it below, when registering the file."]}),"\n",(0,i.jsx)(t.h3,{id:"3-upload-a-local-file-to-the-signed-url",children:"3. Upload a local file to the signed URL"}),"\n",(0,i.jsx)(t.p,{children:"In this step, you'll choose a file on your local computer to actually upload to Kernel Planckster, using the signed URL you got from the previous step. This step will require a bit of code, but we've put together some Python you can use without too much effort."}),"\n",(0,i.jsx)(t.p,{children:"File uploads require encoding for servers to understand what they're receiving. The following Python code handles that, as well as allowing you to provide the file and the signed URL where you're sending it. Go ahead and copy/paste it to whatever location you like on your computer!"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"kernel_upload_helper.py",children:"#!/usr/bin/env python3\n\nimport requests\nimport argparse\n\ndef upload_file(file_path, signed_url):\n    try:\n        print(f'Uploading file {file_path} to signed url')\n\n        with open(file_path, 'rb') as file:\n\n            # This is the line that does the thing! Everything else is to handle errors.\n            response = requests.put(signed_url, data=file)\n\n        if response.status_code != 200:\n            print(f'Failed to upload file. Server responded with status code: {response.status_code}')\n        else:\n            print(f'File {file_path} uploaded to signed url')\n            print(f\"Minio Response: {response.json()}\")\n\n    except Exception as e:\n        print(f'An error occurred: {e}')\n\n\n\n\ndef main():\n\n    # Set up the arguments that allow you to choose a file and provide the signed URL\n    parser = argparse.ArgumentParser(description='Upload file to minio server')\n\n    parser.add_argument('--file-path', dest='file_path', type=str, help='Path to file to upload', required=True)\n\n    parser.add_argument('--signed-url', dest='signed_url', type=str, help='Signed url to upload file to', required=True)\n\n    args = parser.parse_args()\n\n    file_path = f\"{args.file_path}\"\n    signed_url = f\"{args.signed_url}\"\n\n    upload_file(file_path, signed_url)\n\nif __name__ == '__main__':\n    main()\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once you have this file on your computer, you can use your terminal to run it, providing the local path to the file you want to upload, as well as the signed url."}),"\n",(0,i.jsx)(t.admonition,{title:"File Name vs. Relative Path",type:"note",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"relative_path"})," you provide in ",(0,i.jsx)(t.a,{href:"#1-navigate-to-the-swagger-interface",children:"Step 1"})," does ",(0,i.jsx)(t.em,{children:"not"})," need to include the same file name or even the same ",(0,i.jsx)(t.em,{children:"extension"})," as the local file you use. That being said, it's definitely best practice to keep at least the extension the same!"]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'cd directory/with/python/code #navigate to the folder where you pasted the Python code above\npython kernel_upload_helper.py \\\n--file-path path/and/filename.extension \\ #use quotes if there are spaces!\n--signed-url "http://replace-with/signed/url/from/above"\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In this example, we'd use ",(0,i.jsx)(t.code,{children:"http://localhost:9001/sda/up/to/you/must/be/valid/file.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio%2F20240927%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240927T162413Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=f7d94c2eb96ecfd456dce55e025ae8b8c653e7c564f28e24fb35616d66959657"})," as the URL."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"python"})," command will run the Python code, and send the file we specify to the signed URL. You should see the following in your terminal window - you can ignore if you see an ",(0,i.jsx)(t.code,{children:"Expecting value:"})," error!"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"Uploading file path/and/filename.extension\nFile path/and/filename.extension uploaded to signed url\nAn error occurred: Expecting value: line 1 column 1 (char 0)\n"})}),"\n",(0,i.jsx)(t.p,{children:"That's it! You've successfully uploaded a file! But now it's essential that you register that file, so that Kernel can identify it and retrieve it whenever it's needed."}),"\n",(0,i.jsx)(t.h2,{id:"steps-to-register-an-uploaded-file",children:"Steps to Register an Uploaded File"}),"\n",(0,i.jsx)(t.p,{children:"Kernel Planckster has its own tracking mechanism for uploaded files, which is necessary in sending the files where they need to go (e.g. to OpenAI to inform a research context). The good news is that this process is even quicker than uploading!"}),"\n",(0,i.jsxs)(t.h3,{id:"1-navigate-to-the-swagger-interface-1",children:["1. Navigate to the ",(0,i.jsx)(t.a,{href:"https://kernel-planckster.devmaany.com/docs#/",children:"Swagger interface"})]}),"\n",(0,i.jsx)(t.p,{children:"You should now see the page with FastAPI in the corner, and a list of all the available endpoints."}),"\n",(0,i.jsxs)(t.h3,{id:"2-use-the-post-clientidsource-endpoint-to-register-the-file",children:["2. Use the ",(0,i.jsx)(t.code,{children:"POST /client/{id}/source"})," endpoint to register the file"]}),"\n",(0,i.jsx)(t.p,{children:"In this step, you send critical information to Kernel Planckster about how to find the file. Click the Try it out button, and fill out the following fields (also shown in the screen shot below):"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"id"}),": Your ID is ",(0,i.jsx)(t.code,{children:"1"}),"!"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"source_data_name"}),": This is the name the file will take once it's downloaded or sent anywhere. The file name and extension don't need to match what you have in ",(0,i.jsx)(t.code,{children:"source_data_relative_path"}),", but they must be valid and we strongly recommend using consistent naming conventions with your file name and path."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"source_data_relative_path"}),": This is the key piece of information we're sending to Kernel Planckster to find the file. This must precisely match the ",(0,i.jsx)(t.code,{children:"relative_path"})," provided when uploading the file."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"source_data_protocol"}),": For the time being, this is always going to be ",(0,i.jsx)(t.code,{children:"s3"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"x-auth-token"}),": For testing purposes, use ",(0,i.jsx)(t.code,{children:"test123"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screen shot of filled-out id, source_data_name, source_data_relative_path, source_data_protocol, and x-auth-token fields on the source endpoint",src:n(4391).A+"",width:"1336",height:"1196"})}),"\n",(0,i.jsxs)(t.p,{children:["Click the Execute button, and you should see a response with ",(0,i.jsx)(t.code,{children:'"status": true'})," similar to this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n  "status": true,\n  "code": 200,\n  "errorCode": null,\n  "errorMessage": null,\n  "errorName": null,\n  "errorType": null,\n  "source_data": {\n    "created_at": "2024-09-27T16:33:56.230367",\n    "updated_at": "2024-09-27T16:33:56.230373",\n    "deleted": false,\n    "deleted_at": null,\n    "id": 1,\n    "name": "my_file.json",\n    "relative_path": "up/to/you/must/be/valid/file.txt",\n    "type": "txt",\n    "protocol": "s3",\n    "status": "available"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"If so, then congratulations! You've uploaded and registered a file!"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"download-data",children:"The next guide"})," will show you how to download that same file, the first step of which will confirm that your file is really and truly uploaded."]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4391:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/kernel_upload_fastapi_register-5cc7952a5ee2f604b6be3614b932e3aa.png"},1603:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/kernel_upload_fastapi_upload-5a0e35c2ecdd3deb51dcfc467cec9c59.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);