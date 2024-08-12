"use strict";(self.webpackChunkplanckster_docs=self.webpackChunkplanckster_docs||[]).push([[5040],{6848:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Core Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/planckster-docs/docs/concepts/core-concepts/","docId":"concepts/core-concepts/index","unlisted":false},{"type":"link","label":"Architecture Overview","href":"/planckster-docs/docs/concepts/architecture","docId":"concepts/architecture","unlisted":false},{"type":"link","label":"Disaster Tracking Usecase","href":"/planckster-docs/docs/concepts/disaster-tracking-usecase","docId":"concepts/disaster-tracking-usecase","unlisted":false},{"type":"link","label":"Data Scrapers","href":"/planckster-docs/docs/concepts/scrapers","docId":"concepts/scrapers","unlisted":false}],"href":"/planckster-docs/docs/category/core-concepts"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Kernel Planckster","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Kernel Planckster REST API","href":"/planckster-docs/docs/guides/kernel/kernel-planckster-api-walkthrough/","docId":"guides/kernel/kernel-planckster-api-walkthrough/index","unlisted":false},{"type":"link","label":"Uploading source data","href":"/planckster-docs/docs/guides/kernel/upload-new-data","docId":"guides/kernel/upload-new-data","unlisted":false},{"type":"link","label":"List and Download Data","href":"/planckster-docs/docs/guides/kernel/download-data","docId":"guides/kernel/download-data","unlisted":false}],"href":"/planckster-docs/docs/category/kernel-planckster"},{"type":"category","label":"Lieutenant Planckster","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/planckster-docs/docs/guides/kubeflow/kubeflow-features-and-ui-walkthrough","docId":"guides/kubeflow/kubeflow-features-and-ui-walkthrough","unlisted":false},{"type":"link","label":"Run Kubeflow Pipelines","href":"/planckster-docs/docs/guides/kubeflow/running-kubeflow-pipelines","docId":"guides/kubeflow/running-kubeflow-pipelines","unlisted":false},{"type":"link","label":"Analyzing Scraped Data","href":"/planckster-docs/docs/guides/kubeflow/analysing-scraped-data","docId":"guides/kubeflow/analysing-scraped-data","unlisted":false},{"type":"link","label":"Custom Pipelines","href":"/planckster-docs/docs/guides/kubeflow/custom-pipelines","docId":"guides/kubeflow/custom-pipelines","unlisted":false}],"href":"/planckster-docs/docs/category/lieutenant-planckster"},{"type":"category","label":"Data Scrapers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Locally Setting Up Scrapers","href":"/planckster-docs/docs/guides/scrapers/local-setup","docId":"guides/scrapers/local-setup","unlisted":false},{"type":"link","label":"Create Your Own Scraper","href":"/planckster-docs/docs/guides/scrapers/create-your-own-scraper","docId":"guides/scrapers/create-your-own-scraper","unlisted":false}],"href":"/planckster-docs/docs/category/data-scrapers"},{"type":"category","label":"Websat Planckster","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/planckster-docs/docs/guides/websat/websat-features-and-ui-walkthrough","docId":"guides/websat/websat-features-and-ui-walkthrough","unlisted":false},{"type":"link","label":"Chat Capability","href":"/planckster-docs/docs/guides/websat/chatbot-demo","docId":"guides/websat/chatbot-demo","unlisted":false},{"type":"link","label":"Upload and Chat","href":"/planckster-docs/docs/guides/websat/upload-and-chat","docId":"guides/websat/upload-and-chat","unlisted":false}],"href":"/planckster-docs/docs/category/websat-planckster"}],"href":"/planckster-docs/docs/category/guides"},{"type":"link","label":"Examples","href":"/planckster-docs/docs/examples","docId":"examples","unlisted":false}]},"docs":{"concepts/architecture":{"id":"concepts/architecture","title":"Planckster Ecosystem - Architecture Overview","description":"The Planckster Ecosystem consists of four interconnected components that work together to provide you with filtered, debugged, and processed data on topics relevant to your needs. This data is ready for you to explore, analyze, and utilize for various applications.","sidebar":"tutorialSidebar"},"concepts/core-concepts/index":{"id":"concepts/core-concepts/index","title":"Introduction to the Planckster Ecosystem","description":"This guide aims to familiarize you with the fundamental concepts of the Satellite Data Augmentation (SDA) system. It will help you understand the essential components, their functions, and how they interrelate. By following this guide, you\'ll gain the necessary knowledge to navigate the program, use it efficiently, and maximize its benefits.","sidebar":"tutorialSidebar"},"concepts/disaster-tracking-usecase":{"id":"concepts/disaster-tracking-usecase","title":"Description of Kubeflow Pipelines for the Disaster Tracking Usecase:","description":"Understanding the DAG structure:","sidebar":"tutorialSidebar"},"concepts/scrapers":{"id":"concepts/scrapers","title":"Data Scrapers","description":"This document covers three key concepts regarding the scrapers: Telegram Scraper, Twitter Scraper, and Sentinel Scraper. It aims to show you what is happening behind your Kubeflow pipeline when you run the scrapers. It will explain what they do,their key arguments and functionalities in the current environment.","sidebar":"tutorialSidebar"},"examples":{"id":"examples","title":"Examples","description":"Let\'s discover Source Code Examples.","sidebar":"tutorialSidebar"},"guides/kernel/download-data":{"id":"guides/kernel/download-data","title":"List and Download Data","description":"This guide will cover how to communicate directly with Kernel Planckster to list metadata from the database and use it to download the data files from the file storage.","sidebar":"tutorialSidebar"},"guides/kernel/kernel-planckster-api-walkthrough/index":{"id":"guides/kernel/kernel-planckster-api-walkthrough/index","title":"Kernel Planckster REST API","description":"We have set up a REST API for the Kernel Planckster.","sidebar":"tutorialSidebar"},"guides/kernel/upload-new-data":{"id":"guides/kernel/upload-new-data","title":"Uploading source data","description":"This guide will cover how to communicate directly with Kernel Planckster to upload new data, and have it registered both in the metadata database and the file storage.","sidebar":"tutorialSidebar"},"guides/kubeflow/analysing-scraped-data":{"id":"guides/kubeflow/analysing-scraped-data","title":"Analyzing Scraped Data with Kubeflow Notebooks","description":"This guide walks you through the Kernel-Planckster Tutorial Notebook. It aims to provide broader detail on how to view and analyze the scraped data obtained when running the kubeflow pipelines.","sidebar":"tutorialSidebar"},"guides/kubeflow/custom-pipelines":{"id":"guides/kubeflow/custom-pipelines","title":"Custom Pipelines in Kubeflow","description":"How to create a Pipeline Notebook?","sidebar":"tutorialSidebar"},"guides/kubeflow/kubeflow-features-and-ui-walkthrough":{"id":"guides/kubeflow/kubeflow-features-and-ui-walkthrough","title":"Kubeflow","description":"Kubeflow is a platform that makes it easier to house, test, automate, and monitor the machinery necessary for AI / Machine Learning based workflows. It\'s a kind of \\"command center\\" that allows you to orchestrate the code, data sources, and other resources you need to use.","sidebar":"tutorialSidebar"},"guides/kubeflow/running-kubeflow-pipelines":{"id":"guides/kubeflow/running-kubeflow-pipelines","title":"Kubeflow Pipelines","description":"Kubeflow Pipelines is a platform for building and deploying portable, scalable machine learning (ML) workflows based on Docker containers. It is a part of the Kubeflow project, which aims to make running ML workloads on Kubernetes simple, portable, and scalable. This guide aims to explain and demonstrate how to run a Kubeflow Pipeline.","sidebar":"tutorialSidebar"},"guides/scrapers/create-your-own-scraper":{"id":"guides/scrapers/create-your-own-scraper","title":"Create Your Own Scraper","description":"This is an advanced guide for creating your own scraper. It will cover how to create a new scraper for Kernel Planckster, and how to use it to automatically download data from the scraper\'s source and upload it to Kernel Planckster.","sidebar":"tutorialSidebar"},"guides/scrapers/local-setup":{"id":"guides/scrapers/local-setup","title":"Locally Setting Up Scrapers","description":"This guide details how to set up a scraper locally.","sidebar":"tutorialSidebar"},"guides/websat/chatbot-demo":{"id":"guides/websat/chatbot-demo","title":"Chat Capability","description":"This guide will cover how to use the chat capability of Websat Planckster, which allows users to interact with the data stored in Kernel Planckster via a chat interface.","sidebar":"tutorialSidebar"},"guides/websat/upload-and-chat":{"id":"guides/websat/upload-and-chat","title":"Upload and Chat","description":"This guide will cover how to upload new data to Kernel Planckster using Websat Planckster\'s upload feature, and then use the chat interface to interact with it.","sidebar":"tutorialSidebar"},"guides/websat/websat-features-and-ui-walkthrough":{"id":"guides/websat/websat-features-and-ui-walkthrough","title":"Introduction to Websat Planckster","description":"This guide will cover the features of Websat Planckster, which is a webserver that allows users to interact with Kernel Planckster.","sidebar":"tutorialSidebar"}}}}')}}]);