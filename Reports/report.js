$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Featurefile/login.feature");
formatter.feature({
  "name": "To validate login functionslity of facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have enter facebook login through chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_have_enter_facebook_login_through_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login using invalid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User enter invalid username and invalid password",
  "rows": [
    {
      "cells": [
        "ashok123@gmail.com",
        "ashok",
        "python123@gmail.com",
        "python"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_invalid_username_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be in invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_should_be_in_invalid_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have enter facebook login through chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_have_enter_facebook_login_through_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login using invalid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User enter invalid username and invalid password",
  "rows": [
    {
      "cells": [
        "jira",
        "jira123@gmail.com",
        "jira123"
      ]
    },
    {
      "cells": [
        "selenium",
        "selenium123@mail.com",
        "selenium123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_invalid_username_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be in invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_should_be_in_invalid_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});