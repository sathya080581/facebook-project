package org.pojo;

	import org.openqa.selenium.WebElement;
	import org.openqa.selenium.support.FindBy;
	import org.openqa.selenium.support.PageFactory;
	import org.utility.BaseClass;

	public class LoginPojo extends BaseClass {
		public LoginPojo() {
		PageFactory.initElements(driver, this);
		}
		@FindBy(id="email")
		private WebElement emailbox;
		
		@FindBy(id="pass")
		private WebElement passbox;
		
		@FindBy(name="login")
		private WebElement loginbox;

		public WebElement getEmailbox() {
			return emailbox;
		}

		public WebElement getPassbox() {
			return passbox;
		}

		public WebElement getLoginbox() {
			return loginbox;
		}
		
	}


