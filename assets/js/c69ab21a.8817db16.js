"use strict";(self.webpackChunkplanckster_docs=self.webpackChunkplanckster_docs||[]).push([[7676],{6528:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=r(4848),i=r(8453);const t={},l="Data Scrapers Guide",c={id:"concepts/scrapers",title:"Data Scrapers Guide",description:"This guide covers three data scrapers: Telegram Scraper, Twitter Scraper, and Sentinel Scraper. Each section includes setup, configuration, usage, and examples.",source:"@site/docs/concepts/scrapers.md",sourceDirName:"concepts",slug:"/concepts/scrapers",permalink:"/planckster-docs/docs/concepts/scrapers",draft:!1,unlisted:!1,editUrl:"https://github.com/dream-aim-deliver/planckster-docs/edit/main/docs/concepts/scrapers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Disaster Tracking Usecase",permalink:"/planckster-docs/docs/concepts/disaster-tracking-usecase"},next:{title:"Guides",permalink:"/planckster-docs/docs/category/guides"}},a={},d=[{value:"Telegram Scraper",id:"telegram-scraper",level:2},{value:"Setup and Configuration",id:"setup-and-configuration",level:3},{value:"Required Arguments",id:"required-arguments",level:4},{value:"How to Configure the Telegram Client",id:"how-to-configure-the-telegram-client",level:3},{value:"How to Retrieve Messages",id:"how-to-retrieve-messages",level:3},{value:"Function: <code>scrape</code>",id:"function-scrape",level:4},{value:"Augmentation and Utility Functions",id:"augmentation-and-utility-functions",level:3},{value:"Example: Running the Telegram Scraper Locally",id:"example-running-the-telegram-scraper-locally",level:3},{value:"Step1",id:"step1",level:2},{value:"Set Up Kernel-Planckster",id:"set-up-kernel-planckster",level:4},{value:"Install Dependencies",id:"install-dependencies",level:4},{value:"Running Kernel-Planckster",id:"running-kernel-planckster",level:4},{value:"Access Kernel-Planckster&#39;s API and Object Storage",id:"access-kernel-plancksters-api-and-object-storage",level:4},{value:"Step 2",id:"step-2",level:2},{value:"Twitter Scraper",id:"twitter-scraper",level:2},{value:"Setup and Configuration",id:"setup-and-configuration-1",level:3},{value:"Required Arguments",id:"required-arguments-1",level:4},{value:"How to Configure the Twitter Scraper",id:"how-to-configure-the-twitter-scraper",level:3},{value:"How to Retrieve Tweets",id:"how-to-retrieve-tweets",level:3},{value:"Function: <code>scrape</code>",id:"function-scrape-1",level:4},{value:"Augmentation and Utility Functions",id:"augmentation-and-utility-functions-1",level:3},{value:"Example: Running the Twitter Scraper Locally",id:"example-running-the-twitter-scraper-locally",level:3},{value:"Step1",id:"step1-1",level:2},{value:"Set Up Kernel-Planckster",id:"set-up-kernel-planckster-1",level:4},{value:"Install Dependencies",id:"install-dependencies-1",level:4},{value:"Running Kernel-Planckster",id:"running-kernel-planckster-1",level:4},{value:"Access Kernel-Planckster&#39;s API and Object Storage",id:"access-kernel-plancksters-api-and-object-storage-1",level:4},{value:"Step2",id:"step2",level:2},{value:"Sentinel Scraper",id:"sentinel-scraper",level:2},{value:"Setup and Configuration",id:"setup-and-configuration-2",level:3},{value:"Required Arguments",id:"required-arguments-2",level:4},{value:"How to Configure the Sentinel Hub Client",id:"how-to-configure-the-sentinel-hub-client",level:3},{value:"How to Retrieve Satellite Images",id:"how-to-retrieve-satellite-images",level:3},{value:"Function: <code>scrape</code>",id:"function-scrape-2",level:4},{value:"Augmentation and Utility Functions",id:"augmentation-and-utility-functions-2",level:3},{value:"Example: Running the Sentinel Scraper Locally",id:"example-running-the-sentinel-scraper-locally",level:3},{value:"Step1",id:"step1-2",level:2},{value:"Set Up Kernel-Planckster",id:"set-up-kernel-planckster-2",level:4},{value:"Install Dependencies",id:"install-dependencies-2",level:4},{value:"Running Kernel-Planckster",id:"running-kernel-planckster-2",level:4},{value:"Access Kernel-Planckster&#39;s API and Object Storage",id:"access-kernel-plancksters-api-and-object-storage-2",level:4},{value:"Step 2",id:"step-2-1",level:2},{value:"Conclusion",id:"conclusion",level:2}];function o(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"data-scrapers-guide",children:"Data Scrapers Guide"}),"\n",(0,s.jsxs)(n.p,{children:["This guide covers three data scrapers: ",(0,s.jsx)(n.strong,{children:"Telegram Scraper"}),", ",(0,s.jsx)(n.strong,{children:"Twitter Scraper"}),", and ",(0,s.jsx)(n.strong,{children:"Sentinel Scraper"}),". Each section includes setup, configuration, usage, and examples."]}),"\n",(0,s.jsx)(n.h2,{id:"telegram-scraper",children:"Telegram Scraper"}),"\n",(0,s.jsx)(n.p,{children:"The Telegram Scraper allows you to extract messages from specific Telegram channels using the Telethon Python package. This section provides detailed instructions on setting up and running the scraper."}),"\n",(0,s.jsx)(n.h3,{id:"setup-and-configuration",children:"Setup and Configuration"}),"\n",(0,s.jsx)(n.h4,{id:"required-arguments",children:"Required Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kernel-Planckster-specific arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"job_id"}),": A unique identifier for the job."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tracer_id"}),": Used to trace the job."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kp_host"}),": Kernel Planckster host address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kp_port"}),": Kernel Planckster port number."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kp_auth_token"}),": Authentication token for Kernel Planckster."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kp_scheme"}),": Connection scheme (either ",(0,s.jsx)(n.code,{children:"http"})," or ",(0,s.jsx)(n.code,{children:"https"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"log_level"}),": The level of logging information to capture."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Telegram API Configuration"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"telegram_api_id"}),": Your Telegram API ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"telegram_api_hash"}),": Your Telegram API Hash."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"telegram_phone_number"}),": The phone number linked to your Telegram account (optional)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"telegram_password"}),": Password for the Telegram account (optional)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"telegram_bot_token"}),": Telegram bot token (optional)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"channel_name"}),": Name of the Telegram channel to scrape."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-configure-the-telegram-client",children:"How to Configure the Telegram Client"}),"\n",(0,s.jsx)(n.p,{children:"To use the Telegram Scraper, you'll need to set up a Telegram client. Here's how:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Install the Telethon Package"}),": Make sure you have the Telethon package installed. You can install it via pip:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"pip install telethon"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Define the Client Setup Function"}),": Create a function to set up the Telegram client. This will include passing necessary authentication details:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from telethon import TelegramClient\n\ndef get_scraping_client(job_id, logger, telegram_api_id, telegram_api_hashtelegram_phone_number=None, telegram_password=None, telegram_bot_token=None)-> TelegramClient:\n    client = TelegramClient('session_name', telegram_api_id, telegram_api_hash)\n    client.start(phone=telegram_phone_number, password=telegram_password)\n    return client\n\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-retrieve-messages",children:"How to Retrieve Messages"}),"\n",(0,s.jsxs)(n.p,{children:["Once the client is configured, you can retrieve messages from a specified channel using the ",(0,s.jsx)(n.code,{children:"scrape"})," function."]}),"\n",(0,s.jsxs)(n.h4,{id:"function-scrape",children:["Function: ",(0,s.jsx)(n.code,{children:"scrape"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Scrapes messages from a specified Telegram channel."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"job_id"}),": Unique job identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"channel_name"}),": Telegram channel name to scrape."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tracer_id"}),": Job trace identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scraped_data_repository"}),": Repository to store the scraped data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"telegram_client"}),": Configured ",(0,s.jsx)(n.code,{children:"TelegramClient"})," instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"openai_api_key"}),": OpenAI API key (if needed for processing)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"log_level"}),": Logging level."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"async def scrape(job_id, channel_name, tracer_id, scraped_data_repository, telegram_client, openai_api_key, log_level) -> JobOutput:\n    with telegram_client:\n        messages = await telegram_client.get_messages(channel_name, limit=100)\n        for message in messages:\n            # Process each message as needed\n            print(message.text)\n    return JobOutput(state='FINISHED', data=messages)\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"augmentation-and-utility-functions",children:"Augmentation and Utility Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Augmenting Data"}),": You can enhance the scraped messages by integrating data from other sources. For instance:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def augment_telegram(client, message, filter):\n    augmented_data = []\n    # Example augmentation logic\n    if filter in message.text:\n        augmented_data.append(message.text)\n    return augmented_data if augmented_data else None\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Utility Functions"}),": Includes logging, error handling, job state management, and cleanup tasks."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-running-the-telegram-scraper-locally",children:"Example: Running the Telegram Scraper Locally"}),"\n",(0,s.jsx)(n.p,{children:"Here is an example demonstrating how to use the Telegram scraper:"}),"\n",(0,s.jsx)(n.h2,{id:"step1",children:"Step1"}),"\n",(0,s.jsx)(n.h4,{id:"set-up-kernel-planckster",children:"Set Up Kernel-Planckster"}),"\n",(0,s.jsx)(n.p,{children:"First, clone the Kernel-Planckster repository onto your local machine:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git clone https://github.com/dream-aim-deliver/kernel-planckster.git"})}),"\n",(0,s.jsx)(n.h4,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"Set up a virtual environment for Kernel-Planckster's dependencies.\nRun in the root directory of the kernel-planckster folder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"python3 -m venv .venv\nsource .venv/bin/activate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Kernel-Planckster uses ",(0,s.jsx)(n.code,{children:"poetry"})," for dependency management:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"pip install poetry poetry install"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If ",(0,s.jsx)(n.code,{children:"poetry"})," is unable to install ",(0,s.jsx)(n.code,{children:"psycopg2"}),", use your system package manager to install it."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"running-kernel-planckster",children:"Running Kernel-Planckster"}),"\n",(0,s.jsx)(n.p,{children:"Run Kernel-Planckster from the command line:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"poetry run dev:storage"})}),"\n",(0,s.jsx)(n.h4,{id:"access-kernel-plancksters-api-and-object-storage",children:"Access Kernel-Planckster's API and Object Storage"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API:"})," Accessible at ",(0,s.jsx)(n.code,{children:"http://localhost:8000/"})," with an interactive interface at ",(0,s.jsx)(n.code,{children:"http://localhost:8000/docs"})," for testing and debugging."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Object Storage:"})," Accessible via the MinIO server at ",(0,s.jsx)(n.code,{children:" http://localhost:9001/"})," (or sometimes  ",(0,s.jsx)(n.code,{children:"http://localhost:9091/"}),'). The "SDA" bucket is created when a scraper is run.']}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-2",children:"Step 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import logging\nfrom telethon import TelegramClient\n\n# Set up logging\nlogger = logging.getLogger(\'telegram_scraper\')\nlogging.basicConfig(level=logging.INFO)\n\n# Define arguments\njob_id = 123\ntracer_id = "abc123"\ntelegram_api_id = "your_api_id"\ntelegram_api_hash = "your_api_hash"\ntelegram_phone_number = "your_phone_number"\ntelegram_password = "your_password"\nchannel_name = "your_channel_name"\nlog_level = logging.INFO\n\n# Set up the Telegram client\nclient = get_scraping_client(job_id, logger, telegram_api_id, telegram_api_hash, telegram_phone_number, telegram_password)\n\n# Run the scraper\noutput = scrape(job_id, channel_name, tracer_id, None, client, None, log_level)\n\n# Output the result\nprint(output)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"twitter-scraper",children:"Twitter Scraper"}),"\n",(0,s.jsx)(n.p,{children:"The Twitter Scraper is designed to collect tweets based on search queries, allowing you to specify date ranges and filter results. This section provides a step-by-step guide to using it effectively."}),"\n",(0,s.jsx)(n.h3,{id:"setup-and-configuration-1",children:"Setup and Configuration"}),"\n",(0,s.jsx)(n.h4,{id:"required-arguments-1",children:"Required Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kernel-Planckster-specific arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"job_id"}),": Unique job identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tracer_id"}),": Job trace identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kp_host"}),": Kernel Planckster host address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kp_port"}),": Kernel Planckster port number."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kp_auth_token"}),": Authentication token for Kernel Planckster."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kp_scheme"}),": Connection scheme (",(0,s.jsx)(n.code,{children:"http"})," or ",(0,s.jsx)(n.code,{children:"https"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"log_level"}),": Logging level."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Twitter API Configuration"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"query"}),": The search query to use for retrieving tweets."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"start_date"}),": The start date for the search in ",(0,s.jsx)(n.code,{children:"YYYY-MM-DD"})," format."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"end_date"}),": The end date for the search in ",(0,s.jsx)(n.code,{children:"YYYY-MM-DD"})," format."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scraper_api_key"}),": API key for the scraper service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"openai_api_key"}),": API key for OpenAI services (if needed)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-configure-the-twitter-scraper",children:"How to Configure the Twitter Scraper"}),"\n",(0,s.jsx)(n.p,{children:"To get started with the Twitter Scraper, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Install Required Libraries"}),": Make sure you have the necessary libraries installed. Depending on your implementation, you might need libraries such as ",(0,s.jsx)(n.code,{children:"tweepy"})," or other HTTP clients."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"pip install tweepy"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Define the Setup Function"}),": Create a function to set up the scraper environment:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import tweepy\n\ndef setup(job_id, logger, kp_auth_token, kp_host, kp_port, kp_scheme):\n    # Setup logic goes here\n    client = tweepy.Client(bearer_token=kp_auth_token)\n    return client\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-retrieve-tweets",children:"How to Retrieve Tweets"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"scrape"})," function retrieves tweets based on the provided search query and date range."]}),"\n",(0,s.jsxs)(n.h4,{id:"function-scrape-1",children:["Function: ",(0,s.jsx)(n.code,{children:"scrape"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Extracts tweets matching a specific query and date range."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"job_id"}),": Unique job identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tracer_id"}),": Job trace identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"query"}),": The search query for Twitter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"start_date"}),": Start date in ",(0,s.jsx)(n.code,{children:"YYYY-MM-DD"})," format."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"end_date"}),": End date in ",(0,s.jsx)(n.code,{children:"YYYY-MM-DD"})," format."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scraped_data_repository"}),": Repository to store scraped data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"log_level"}),": Logging level."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scraper_api_key"}),": API key for the scraper."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"openai_api_key"}),": API key for OpenAI (if needed)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def scrape(job_id, tracer_id, query, start_date, end_date, scraped_data_repository, log_level, scraper_api_key, openai_api_key):\n    client = setup(job_id, logger, scraper_api_key, None, None, None)\n    tweets = client.search_recent_tweets(query=query, start_time=start_date, end_time=end_date, max_results=100)\n    for tweet in tweets.data:\n        print(tweet.text)\n    return JobOutput(state='FINISHED', data=tweets.data)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"augmentation-and-utility-functions-1",children:"Augmentation and Utility Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Augmenting Data"}),": Enhance the retrieved tweets by incorporating additional data or insights:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def augment_tweet(client, tweet, filter):\n    if filter in tweet.text:\n        return tweet\n    return None\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Utility Functions"}),": These include logging, error handling, job state management, and saving/loading tweets."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-running-the-twitter-scraper-locally",children:"Example: Running the Twitter Scraper Locally"}),"\n",(0,s.jsx)(n.p,{children:"Here's an example to demonstrate how to use the Twitter scraper:"}),"\n",(0,s.jsx)(n.h2,{id:"step1-1",children:"Step1"}),"\n",(0,s.jsx)(n.h4,{id:"set-up-kernel-planckster-1",children:"Set Up Kernel-Planckster"}),"\n",(0,s.jsx)(n.p,{children:"First, clone the Kernel-Planckster repository onto your local machine:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git clone https://github.com/dream-aim-deliver/kernel-planckster.git"})}),"\n",(0,s.jsx)(n.h4,{id:"install-dependencies-1",children:"Install Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"Set up a virtual environment for Kernel-Planckster's dependencies.\nRun in the root directory of the kernel-planckster folder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"python3 -m venv .venv\nsource .venv/bin/activate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Kernel-Planckster uses ",(0,s.jsx)(n.code,{children:"poetry"})," for dependency management:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"pip install poetry poetry install"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If ",(0,s.jsx)(n.code,{children:"poetry"})," is unable to install ",(0,s.jsx)(n.code,{children:"psycopg2"}),", use your system package manager to install it."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"running-kernel-planckster-1",children:"Running Kernel-Planckster"}),"\n",(0,s.jsx)(n.p,{children:"Run Kernel-Planckster from the command line:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"poetry run dev:storage"})}),"\n",(0,s.jsx)(n.h4,{id:"access-kernel-plancksters-api-and-object-storage-1",children:"Access Kernel-Planckster's API and Object Storage"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API:"})," Accessible at ",(0,s.jsx)(n.code,{children:" http://localhost:8000/"})," with an interactive interface at ",(0,s.jsx)(n.code,{children:"http://localhost:8000/docs"})," for testing and debugging."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Object Storage:"})," Accessible via the MinIO server at ",(0,s.jsx)(n.code,{children:" http://localhost:9001/"})," (or sometimes ",(0,s.jsx)(n.code,{children:"http://localhost:9091/"}),'). The "SDA" bucket is created when a scraper is run.']}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step2",children:"Step2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import logging\n\n# Set up logging\nlogger = logging.getLogger(\'twitter_scraper\')\nlogging.basicConfig(level=logging.INFO)\n\n# Define arguments\njob_id = 123\ntracer_id = "abc123"\nquery = "forest fire"\nstart_date = "2023-01-01"\nend_date = "2023-01-31"\nlog_level = logging.INFO\nscraper_api_key = "your_scraper_api_key"\n\n# Run the scraper\noutput = scrape(job_id, tracer_id, query, start_date, end_date, None, log_level, scraper_api_key, None)\n\n# Output the result\nprint(output)\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"sentinel-scraper",children:"Sentinel Scraper"}),"\n",(0,s.jsx)(n.p,{children:"The Sentinel Scraper is used to retrieve satellite images from the Sentinel Hub API. It provides options to specify geographic bounding boxes, date ranges, and resolution settings."}),"\n",(0,s.jsx)(n.h3,{id:"setup-and-configuration-2",children:"Setup and Configuration"}),"\n",(0,s.jsx)(n.h4,{id:"required-arguments-2",children:"Required Arguments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Kernel-Planckster-specific arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"job_id"}),": Unique job identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tracer_id"}),": Job trace identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kp_host"}),": Kernel Planckster host address."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kp_port"}),": Kernel Planckster port number."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kp_auth_token"}),": Authentication token for Kernel Planckster."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kp_scheme"}),": Connection scheme (",(0,s.jsx)(n.code,{children:"http"})," or ",(0,s.jsx)(n.code,{children:"https"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"log_level"}),": Logging level."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sentinel Hub Configuration"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"evalscript"}),": Sentinel Hub Evalscript to use."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bbox"}),": Bounding box of the area of interest."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"resolution"}),": Spatial resolution in meters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cloud_coverage"}),": Maximum allowable cloud coverage percentage."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"start_date"}),": Start date for image acquisition in ",(0,s.jsx)(n.code,{children:"YYYY-MM-DD"})," format."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"end_date"}),": End date for image acquisition in ",(0,s.jsx)(n.code,{children:"YYYY-MM-DD"})," format."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sh_client_id"}),": Sentinel Hub client ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sh_client_secret"}),": Sentinel Hub client secret."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-configure-the-sentinel-hub-client",children:"How to Configure the Sentinel Hub Client"}),"\n",(0,s.jsx)(n.p,{children:"To use the Sentinel Scraper, follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Install Required Libraries"}),": Ensure that you have the necessary libraries installed, such as ",(0,s.jsx)(n.code,{children:"sentinelhub"})," or ",(0,s.jsx)(n.code,{children:"requests"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"pip install sentinelhub"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Define the Setup Function"}),": Create a function to set up the Sentinel Hub client:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from sentinelhub import SHConfig, SentinelHubRequest\n\ndef setup(job_id, logger, sh_client_id, sh_client_secret, evalscript, bbox, resolution, cloud_coverage):\n    config = SHConfig()\n    config.sh_client_id = sh_client_id\n    config.sh_client_secret = sh_client_secret\n    return config\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-retrieve-satellite-images",children:"How to Retrieve Satellite Images"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"scrape"})," function retrieves satellite images from the Sentinel Hub based on the specified parameters."]}),"\n",(0,s.jsxs)(n.h4,{id:"function-scrape-2",children:["Function: ",(0,s.jsx)(n.code,{children:"scrape"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Fetches satellite images from Sentinel Hub."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"job_id"}),": Unique job identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tracer_id"}),": Job trace identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"evalscript"}),": Sentinel Hub Evalscript."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bbox"}),": Bounding box for the area of interest."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"resolution"}),": Spatial resolution in meters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cloud_coverage"}),": Maximum cloud coverage percentage."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"start_date"}),": Start date in ",(0,s.jsx)(n.code,{children:"YYYY-MM-DD"})," format."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"end_date"}),": End date in ",(0,s.jsx)(n.code,{children:"YYYY-MM-DD"})," format."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scraped_data_repository"}),": Repository to store scraped data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sh_client_id"}),": Sentinel Hub client ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sh_client_secret"}),": Sentinel Hub client secret."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"openai_api_key"}),": API key for OpenAI (if needed)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def scrape(job_id, tracer_id, evalscript, bbox, resolution, cloud_coverage, start_date, end_date, scraped_data_repository, sh_client_id, sh_client_secret, openai_api_key):\n    config = setup(job_id, logger, sh_client_id, sh_client_secret, evalscript, bbox, resolution, cloud_coverage)\n\n    request = SentinelHubRequest(\n        evalscript=evalscript,\n        input_data=[SentinelHubRequest.input_data(data_source=DataSource.SENTINEL2_L1C, time_interval=(start_date, end_date))],\n        responses=[SentinelHubRequest.output_response('default', MimeType.TIFF)],\n        bbox=bbox,\n        size=(resolution, resolution),\n        config=config\n    )\n\n    images = request.get_data()\n    # Process images as needed\n    return JobOutput(state='FINISHED', data=images)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"augmentation-and-utility-functions-2",children:"Augmentation and Utility Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Augmenting Data"}),": You can enhance satellite images by applying image processing techniques:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def augment_image(image, filter):\n    # Apply augmentation logic\n    return processed_image\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Utility Functions"}),": Includes logging, error handling, job state management, and saving/loading images."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-running-the-sentinel-scraper-locally",children:"Example: Running the Sentinel Scraper Locally"}),"\n",(0,s.jsx)(n.p,{children:"Here's an example to demonstrate how to use the Sentinel scraper:"}),"\n",(0,s.jsx)(n.h2,{id:"step1-2",children:"Step1"}),"\n",(0,s.jsx)(n.h4,{id:"set-up-kernel-planckster-2",children:"Set Up Kernel-Planckster"}),"\n",(0,s.jsx)(n.p,{children:"First, clone the Kernel-Planckster repository onto your local machine:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git clone https://github.com/dream-aim-deliver/kernel-planckster.git"})}),"\n",(0,s.jsx)(n.h4,{id:"install-dependencies-2",children:"Install Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"Set up a virtual environment for Kernel-Planckster's dependencies.\nRun in the root directory of the kernel-planckster folder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"python3 -m venv .venv\nsource .venv/bin/activate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Kernel-Planckster uses ",(0,s.jsx)(n.code,{children:"poetry"})," for dependency management:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"pip install poetry poetry install"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If ",(0,s.jsx)(n.code,{children:"poetry"})," is unable to install ",(0,s.jsx)(n.code,{children:"psycopg2"}),", use your system package manager to install it."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"running-kernel-planckster-2",children:"Running Kernel-Planckster"}),"\n",(0,s.jsx)(n.p,{children:"Run Kernel-Planckster from the command line:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"poetry run dev:storage"})}),"\n",(0,s.jsx)(n.h4,{id:"access-kernel-plancksters-api-and-object-storage-2",children:"Access Kernel-Planckster's API and Object Storage"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API:"})," Accessible at ",(0,s.jsx)(n.code,{children:"http://localhost:8000/"})," with an interactive interface at ",(0,s.jsx)(n.code,{children:"http://localhost:8000/docs"})," for testing and debugging."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Object Storage:"})," Accessible via the MinIO server at ",(0,s.jsx)(n.code,{children:"http://localhost:9001/"})," (or sometimes ",(0,s.jsx)(n.code,{children:"http://localhost:9091/"}),'). The "SDA" bucket is created when a scraper is run.']}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-2-1",children:"Step 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import logging\n\n# Set up logging\nlogger = logging.getLogger(\'sentinel_scraper\')\nlogging.basicConfig(level=logging.INFO)\n\n# Define arguments\njob_id = 123\ntracer_id = "abc123"\nevalscript = "your_evalscript"\nbbox = (13.822, 45.850, 13.928, 45.992)\nresolution = 100\ncloud_coverage = 20\nstart_date = "2023-01-01"\nend_date = "2023-01-31"\nlog_level = logging.INFO\nsh_client_id = "your_sh_client_id"\nsh_client_secret = "your_sh_client_secret"\n\n# Run the scraper\noutput = scrape(job_id, tracer_id, evalscript, bbox, resolution, cloud_coverage, start_date, end_date, None, sh_client_id, sh_client_secret, None)\n\n# Output the result\nprint(output)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"This comprehensive guide provides detailed instructions on setting up and using Telegram, Twitter, and Sentinel scrapers. By following these steps, you can effectively gather data from these platforms for your specific needs. Ensure you have all necessary credentials and configurations set up before running each scraper."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var s=r(6540);const i={},t=s.createContext(i);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);