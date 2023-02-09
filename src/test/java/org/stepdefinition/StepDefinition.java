package org.stepdefinition;

import java.util.List;

import org.junit.Assert;
import org.pojo.LoginPojo;
import org.utility.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition extends BaseClass {


@Given("User have enter facebook login through chrome browser")
public void user_have_enter_facebook_login_through_chrome_browser() {
	launchUrl("https://www.facebook.com/");
}

@When("User enter invalid username and invalid password")
public void user_enter_invalid_username_and_invalid_password(io.cucumber.datatable.DataTable d) {
	
	List<String> allData=d.asList();
	String user = allData.get(2);
	String pass = allData.get(3);
	
	LoginPojo l=new LoginPojo();
	passtext(user, l.getEmailbox());
	passtext(pass, l.getPassbox());

}

@When("User click the login button")
public void user_click_the_login_button() {
	LoginPojo l = new LoginPojo();
	btnclick(l.getLoginbox());
}

@Then("User should be in invalid credential page")
public void user_should_be_in_invalid_credential_page() {
	String url = driver.getCurrentUrl();
	Assert.assertTrue("To check url", url.contains("https://www.facebook.com/"));
}



}
