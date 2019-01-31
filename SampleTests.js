// spec.js

describe('Demo Test For DropDown', function() {
	it('should select from DropDownList', function() {
	//Navigate to demo page
	browser.get('http://demos.telerik.com/kendo-ui/dropdownlist/angular');  
	browser.manage().window().maximize();
	browser.sleep(1000);
   
	// Click on the first element with such Xpath in order to open the DropDownList	
	var dropDownSpan = element(by.xpath("//span[@class='k-widget k-dropdown k-header']/span/span"));         
	
	dropDownSpan.click();
	browser.sleep(1000);
	
	// Select new option
    var andoraOption = element(by.xpath("//li[.='Andorra']"));
	andoraOption.click()
	browser.sleep(10000);;
	
	// Assert the changed value
	expect(dropDownSpan.getText()).toEqual('Andorra');
	
  });
});

describe('Demo Test For Input', function() {
	it('should type in Phone Number input', function() {
	//Navigate to demo page
	browser.get('http://demos.telerik.com/kendo-ui/maskedtextbox/angular');  
	browser.sleep(1000);
   
	// Type in the input	
	var phoneInput = element(by.xpath("//input[@ng-model='phone']"));         
	phoneInput.sendKeys("1111111111", protractor.Key.ENTER);	
	browser.sleep(1000);
	
	
	// Assert the new value
	var phoneInputValue = element(by.xpath("//div[@class='value ng-binding']"));         
	expect(phoneInputValue.getText()).toEqual('Value: (111) 111-1111');
	
  });
});