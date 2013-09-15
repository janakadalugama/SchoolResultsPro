SchoolResultsPro
================
Online system for showing the results of schools and their marks with 
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


Initializing Database
=====================

Mongo DB : 

 Assume the mongodb is running on local machine under port 27017
 
 Move to the mongoDB seed data folder "src\main\resources\database\mongo" using  command shell and run the mogodb client
 
 #use schoolresults
 
 #load("seedData.js")
 
 Note:
 
   Database configuration is stored on src\main\webapp\WEB-INF\cinglevue-servlet.xml, You can change as you wish.
   
Tomcat Server deployment
========================

   Assume tomcat is up and running on your local machine.
   
   From the project root folder , run the follwoing mvn command 
   
   # mvn tomcat:deploy -P dev
   
   Note: You can change pom.xml in order to change  tomcat configuration 



  
  
