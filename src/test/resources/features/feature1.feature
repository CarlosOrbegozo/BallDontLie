Feature: Create service player
  @GET_PLAYERS @PLAYER_SERVICE
  Scenario Outline: scenarios for GET players
    Given BallDontLie Service is available
    When GET players is requested <typeRequest>
    Then status code should be <ExpectedStatusCode>
    Examples:
    |typeRequest            |ExpectedStatusCode|
    |correctly              |200               |
    |with wrong URL         |404               |
    |many times up to limit |429               |
#    TODO the rest