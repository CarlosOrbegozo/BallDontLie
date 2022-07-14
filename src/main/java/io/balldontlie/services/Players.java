package io.balldontlie.services;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

/**
 * Players class to execute customized requests to all endpoints under Players Service
 */
public class Players {
    private final String BASE_PLAYER_API_URL= "https://www.balldontlie.io/api/v1/players";

    /**
     * Build a customized request for GET AllPlayers endpoint
     * @param typeRequest is defined at the feature and represents how the call has to be in order to expect a certain status code response
     * @return Response of the customized call.
     */
    public Response getAllPlayers(String typeRequest){
        String URL = "";
        int count = 1;
        Response res = null;
        switch (typeRequest){
            case "correctly":
                URL = BASE_PLAYER_API_URL;
                break;
            case "with wrong URL":
                URL = BASE_PLAYER_API_URL+"s";
                break;
            case "many times up to limit":
                URL = BASE_PLAYER_API_URL;
                //represents the limit rate per minute for this particular service. To improve do it in the same minute
                count = 60;
                break;
            //TODO
            case "406":
                //TODO
                break;
            case "500":
                //TODO
                break;
            case "503":
                //TODO
                break;
        }

        //Make the request once for most cases, except for testing limit
        for(int i = 0; i<count;i++) {
            res = given().header("Content-Type", "application/json")
                    .when().get(URL)
                    .thenReturn();
        }
        //note status code can be retrieved directly. However, doing this way more information about the request is sent in case is needed.
        return res;
    }


}
