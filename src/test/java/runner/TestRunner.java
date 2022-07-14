package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features="src",
        glue={"io.balldontlie.services"},
        plugin = { "pretty", "html:src/test/resources/automationReport.html" })
public class TestRunner {
}

