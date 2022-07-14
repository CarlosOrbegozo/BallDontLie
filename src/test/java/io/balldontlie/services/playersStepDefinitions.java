package io.balldontlie.services;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import org.junit.Assert;

public class playersStepDefinitions {
    private Players players = new Players();
    private Response response;
    @Given("^BallDontLie Service is available$")
    public void balldontlie_service_is_available(){
        //TODO
    }

    @When("^GET players is requested (.*)$")
    public void GET_players_is_requested(String how){
        response = players.getAllPlayers(how);
    }

    @Then("^status code should be (.*)$")
    public void status_code_should_be(String statusCode){
        Assert.assertEquals("Error at validate PLayer Service with status code: "+statusCode,Integer.parseInt(statusCode),response.statusCode());
        System.out.println("OK");
    }
}
