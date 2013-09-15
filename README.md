SchoolResultsPro
================
Online system for show the results of schools and their marks with 
given  subjects


Pre requirests
==============
  JDK 1.5 or higher
  Apache Tomcat 6+ or J2EE compatible server
  
 
Technologies
===========
Java 1.5 +

Spring 3.1.1

mongoDB/Mysql

Apache Tomcat 6+

Maven 

JQuery and handlebars

Bootstrap


Initializing Database
=====================

Mongo DB : 

 Assume the mongodb is running on local machine under port 27017
 
 Initial data has been prepared for testing and can be imported to mongodb as follows
 
 Move to the mongoDB seed data folder (i.e "src\main\resources\database\mongo") using  command shell and run the mogodb client
 
 >use schoolresults
 
 >load("seedData.js")
 
 Note:
 
   Database configuration is stored on src\main\webapp\WEB-INF\cinglevue-servlet.xml, You can change as you wish.
   
Tomcat Server Deployment
========================

   Assume tomcat is up and running on your local machine.
   
   From the project root folder , run the follwoing mvn command 
   
   # mvn tomcat:deploy -P dev
   
   Note: You can change pom.xml in order to change  tomcat configuration 

   After deploying succefully , you can access the application using follwoing URL
   
   http://<yourTomcatHost>:<port>/codingChallenge
   
   Selection filter has been given for you to see the subject wise result.
   
   Project Structure and How It Work.
   =================================

    Project has been desing as 3 tire layered architecture. Hence the dependence is very less. Even though the current project
    had connect to mongoDb ,At any time , you can change the database to some ther with minimal effort.  The sample project 
    shows how to connect to Mysql databse as an example.
        Browser /server communication goes with JSON objects and user can see the result much speeder without refresing the page
   JQuery and handlebars  is used to achive this
   
   


  
  
