$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test/resources/features/feature1.feature");
formatter.feature({
  "line": 1,
  "name": "Create service player",
  "description": "",
  "id": "create-service-player",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "scenarios for GET players",
  "description": "",
  "id": "create-service-player;scenarios-for-get-players",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@GET_PLAYERS"
    },
    {
      "line": 2,
      "name": "@PLAYER_SERVICE"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "BallDontLie Service is available",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "GET players is requested \u003ctypeRequest\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "status code should be \u003cExpectedStatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "create-service-player;scenarios-for-get-players;",
  "rows": [
    {
      "cells": [
        "typeRequest",
        "ExpectedStatusCode"
      ],
      "line": 8,
      "id": "create-service-player;scenarios-for-get-players;;1"
    },
    {
      "cells": [
        "correctly",
        "200"
      ],
      "line": 9,
      "id": "create-service-player;scenarios-for-get-players;;2"
    },
    {
      "cells": [
        "with wrong URL",
        "404"
      ],
      "line": 10,
      "id": "create-service-player;scenarios-for-get-players;;3"
    },
    {
      "cells": [
        "many times up to limit",
        "429"
      ],
      "line": 11,
      "id": "create-service-player;scenarios-for-get-players;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "scenarios for GET players",
  "description": "",
  "id": "create-service-player;scenarios-for-get-players;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@PLAYER_SERVICE"
    },
    {
      "line": 2,
      "name": "@GET_PLAYERS"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "BallDontLie Service is available",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "GET players is requested correctly",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "status code should be 200",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "playersStepDefinitions.balldontlie_service_is_available()"
});
formatter.result({
  "duration": 123108300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "correctly",
      "offset": 25
    }
  ],
  "location": "playersStepDefinitions.GET_players_is_requested(String)"
});
formatter.result({
  "duration": 1435537100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 22
    }
  ],
  "location": "playersStepDefinitions.status_code_should_be(String)"
});
formatter.result({
  "duration": 1301200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "scenarios for GET players",
  "description": "",
  "id": "create-service-player;scenarios-for-get-players;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@PLAYER_SERVICE"
    },
    {
      "line": 2,
      "name": "@GET_PLAYERS"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "BallDontLie Service is available",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "GET players is requested with wrong URL",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "status code should be 404",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "playersStepDefinitions.balldontlie_service_is_available()"
});
formatter.result({
  "duration": 17400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "with wrong URL",
      "offset": 25
    }
  ],
  "location": "playersStepDefinitions.GET_players_is_requested(String)"
});
formatter.result({
  "duration": 449279000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 22
    }
  ],
  "location": "playersStepDefinitions.status_code_should_be(String)"
});
formatter.result({
  "duration": 51400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "scenarios for GET players",
  "description": "",
  "id": "create-service-player;scenarios-for-get-players;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@PLAYER_SERVICE"
    },
    {
      "line": 2,
      "name": "@GET_PLAYERS"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "BallDontLie Service is available",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "GET players is requested many times up to limit",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "status code should be 429",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "playersStepDefinitions.balldontlie_service_is_available()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "many times up to limit",
      "offset": 25
    }
  ],
  "location": "playersStepDefinitions.GET_players_is_requested(String)"
});
formatter.result({
  "duration": 24151181700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "429",
      "offset": 22
    }
  ],
  "location": "playersStepDefinitions.status_code_should_be(String)"
});
formatter.result({
  "duration": 189200,
  "status": "passed"
});
});