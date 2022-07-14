# BallDontLie

_Automation project to test Balldontlie API services
   
   

#### Prerequisites 📋
* Install [Java JDK](https://www.oracle.com/es/java/technologies/javase-downloads.html) - version 14.0.1  
* Install [Maven](https://maven.apache.org/) - latest version
* Install [GIT](https://git-scm.com/)   - latest version


### Installing 🔧

_After cloning the repository and install prerequisites, you need to compile the Maven project._   
1. Open the command line.
2. Go to the directory which contains the relevant pom file.   
3. Use the mvn command as follows:   

		mvn clean install

  

## Running the tests ⚙️

_To launch automated tests._   
1. Open a terminal window and change directory to your Maven project (you should be in a directory that contains pom.xml file)   
2. Run the following command indicating the test environment and test tags.   

```
	mvn test -Dcucumber.options="--tags (@TestTag)"   
	
	Example:   
	mvn test -Dcucumber.options="--tags @GET_PLAYERS"
```

### Sample Tests 🔩

_The automation tests are written in Gherkin, using cucumber scenarios._   

```
  Scenario Outline: scenarios for GET players
    Given BallDontLie Service is available
    When GET players is requested <typeRequest>
    Then status code should be <ExpectedStatusCode>
    Examples:
    |typeRequest            |ExpectedStatusCode|
    |correctly              |200               |
    |with wrong URL         |404               |
    |many times up to limit |429               |
```
### Test Results 📋

_The automation test results are stored in html in "src\test\resources\automationReport.html" folder._  