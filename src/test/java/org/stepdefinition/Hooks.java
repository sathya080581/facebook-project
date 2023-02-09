package org.stepdefinition;

import org.utility.BaseClass;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass {
	@Before
	public void bef() {
		System.out.println("Brfore Scenario>>");
		launchBrowser();
		maxi();
		
	}
	
	@After
	public void Aft() {
		System.out.println("After scenario>>");
		closeTheBrowser();
	}

}

