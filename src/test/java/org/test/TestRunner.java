package org.test;


import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources", glue = "org.stepdefinition",monochrome=false,
dryRun=false, plugin= {"html:D:\\eclipsejeeversion\\pgms\\TestingCucumber\\Reports",
		"junit:D:\\eclipsejeeversion\\pgms\\TestingCucumber\\target\\reports\\facebook.xml",
		"json:D:\\eclipsejeeversion\\pgms\\TestingCucumber\\Reports.fb.json"})

public class TestRunner {

}
