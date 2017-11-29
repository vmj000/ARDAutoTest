
describe('##Path Name[p1]##', function()
{
    browser.ignoreSynchronization = true;
    
    browser.sleep(5);
    var fsRead = require('fs');
    var contents;
    fsRead.readFile('C:\\Users\\couca01\\Documents\\Presales stuff\\Customer Sites\\Eurostar\\PassFailLogs.csv', 'utf8', contents);
    if(contents == 'undefined')
    {
        contents = "";
    }
    console.log(contents);
    
    var fs = require('fs');
    
    var text = contents;
    var outputFilename = 'C:\\Users\\couca01\\Documents\\Presales stuff\\Customer Sites\\Eurostar\\PassFailLogs.csv';
    

describe('Test Cases 1', function()
{
    browser.ignoreSynchronization = true;
    
    browser.sleep();
    var fsRead = require('fs');
    var contents;
    fsRead.readFile('', 'utf8', contents);
    if(contents == 'undefined')
    {
        contents = "";
    }
    console.log(contents);
    
    var fs = require('fs');
    
    var text = contents;
    var outputFilename = '';
    
browser.ignoreSynchronization = true;

it('Should find the webpage and choose a product', function()
{
browser.get('http://www.grid-tools-downloads.com/Will/TMF/index.php');
browser.sleep(50);
element(by.cssContainingText('option', 'Writing Pad')).click();
browser.sleep(50);
element(by.buttonText('Order Product')).click();
});

it('Should enter an address and save the shipping details', function()
{
browser.sleep(50);
if(false)
{
    element(by.css('input[id=Email]')).clear();
}browser.sleep(50);
element(by.css('input[id=Email]')).sendKeys('@randchars(2,8,[a-z])@@atsign()@@randlov(0,@seedlist(Email Providers)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=ConfirmEmail]')).clear();
}browser.sleep(50);
element(by.css('input[id=ConfirmEmail]')).sendKeys('^Email_Primary_Valid^');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=name]')).clear();
}browser.sleep(50);
element(by.css('input[id=name]')).sendKeys('@randlov(0,@seedlist(FirstName)@)@ @randlov(0,@seedlist(Name - English Last)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=line1]')).clear();
}browser.sleep(50);
element(by.css('input[id=line1]')).sendKeys('@randrange(1,100)@ @randlov(0,@seedlist(StreetName-UK)@)@');


browser.sleep(50);
browser.sleep(50);
if(false)
{
    element(by.css('input[id=line2]')).clear();
}browser.sleep(50);
element(by.css('input[id=line2]')).sendKeys('@randlov(0,@seedlist(US City)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=county]')).clear();
}browser.sleep(50);
element(by.css('input[id=county]')).sendKeys('@randlov(0,@seedlist(UK County)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=post_code]')).clear();
}browser.sleep(50);
element(by.css('input[id=post_code]')).sendKeys('@randlov(0,@seedlist(UK Postcode 8 Digit)@)@');


element(by.cssContainingText('option', 'Wales')).click();
element(by.buttonText('Save Shipping')).click();
browser.sleep(50);
element(by.buttonText('Continue')).click();
});

it('Should choose a card type, enter a card number and complete the purchase.', function()
{
browser.sleep(50);
element(by.cssContainingText('option', 'AMEX')).click();
browser.sleep(50);
if(false)
{
    element(by.css('input[id=cardNo]')).clear();
}element(by.css('input[id=cardNo]')).sendKeys('@randdigits(16 ,16)@');


browser.sleep(50);
browser.sleep(50);
element(by.buttonText('Complete Purchase')).click();
});
});

describe('Test Cases 2', function()
{
    browser.ignoreSynchronization = true;
    
    browser.sleep();
    var fsRead = require('fs');
    var contents;
    fsRead.readFile('', 'utf8', contents);
    if(contents == 'undefined')
    {
        contents = "";
    }
    console.log(contents);
    
    var fs = require('fs');
    
    var text = contents;
    var outputFilename = '';
    
browser.ignoreSynchronization = true;

it('Should find the webpage and choose a product', function()
{
browser.get('http://www.grid-tools-downloads.com/Will/TMF/index.php');
browser.sleep(50);
element(by.cssContainingText('option', 'Doombar')).click();
browser.sleep(50);
element(by.buttonText('Order Product')).click();
});

it('Should enter an address and save the shipping details', function()
{
browser.sleep(50);
if(false)
{
    element(by.css('input[id=Email]')).clear();
}browser.sleep(50);
element(by.css('input[id=Email]')).sendKeys('@randchars(2,8,[a-z])@@atsign()@@randlov(0,@seedlist(Email Providers)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=ConfirmEmail]')).clear();
}browser.sleep(50);
element(by.css('input[id=ConfirmEmail]')).sendKeys('^Email_Primary_Valid^');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=name]')).clear();
}browser.sleep(50);
element(by.css('input[id=name]')).sendKeys('@randlov(0,@seedlist(FirstName)@)@ @randlov(0,@seedlist(Name - English Last)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=line1]')).clear();
}browser.sleep(50);
element(by.css('input[id=line1]')).sendKeys('@randrange(1,100)@ @randlov(0,@seedlist(StreetName-UK)@)@');


browser.sleep(50);
browser.sleep(50);
if(false)
{
    element(by.css('input[id=line2]')).clear();
}browser.sleep(50);
element(by.css('input[id=line2]')).sendKeys('@randlov(0,@seedlist(US City)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=county]')).clear();
}browser.sleep(50);
element(by.css('input[id=county]')).sendKeys('@randlov(0,@seedlist(UK County)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=post_code]')).clear();
}browser.sleep(50);
element(by.css('input[id=post_code]')).sendKeys('@randlov(0,@seedlist(UK Postcode 8 Digit)@)@');


element(by.cssContainingText('option', 'England')).click();
element(by.buttonText('Save Shipping')).click();
browser.sleep(50);
element(by.buttonText('Continue')).click();
});

it('Should choose a card type, enter a card number and complete the purchase.', function()
{
browser.sleep(50);
element(by.cssContainingText('option', 'VISA')).click();
browser.sleep(50);
if(false)
{
    element(by.css('input[id=cardNo]')).clear();
}element(by.css('input[id=cardNo]')).sendKeys('@randdigits(16 ,16)@');


browser.sleep(50);
browser.sleep(50);
element(by.buttonText('Complete Purchase')).click();
});
});

describe('Test Cases 3', function()
{
    browser.ignoreSynchronization = true;
    
    browser.sleep();
    var fsRead = require('fs');
    var contents;
    fsRead.readFile('', 'utf8', contents);
    if(contents == 'undefined')
    {
        contents = "";
    }
    console.log(contents);
    
    var fs = require('fs');
    
    var text = contents;
    var outputFilename = '';
    
browser.ignoreSynchronization = true;

it('Should find the webpage and choose a product', function()
{
browser.get('http://www.grid-tools-downloads.com/Will/TMF/index.php');
browser.sleep(50);
element(by.cssContainingText('option', 'Water')).click();
browser.sleep(50);
element(by.buttonText('Order Product')).click();
});

it('Should enter an address and save the shipping details', function()
{
browser.sleep(50);
if(false)
{
    element(by.css('input[id=Email]')).clear();
}browser.sleep(50);
element(by.css('input[id=Email]')).sendKeys('@randchars(2,8,[a-z])@@atsign()@@randlov(0,@seedlist(Email Providers)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=ConfirmEmail]')).clear();
}browser.sleep(50);
element(by.css('input[id=ConfirmEmail]')).sendKeys('^Email_Primary_Valid^');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=name]')).clear();
}browser.sleep(50);
element(by.css('input[id=name]')).sendKeys('@randlov(0,@seedlist(FirstName)@)@ @randlov(0,@seedlist(Name - English Last)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=line1]')).clear();
}browser.sleep(50);
element(by.css('input[id=line1]')).sendKeys('@randrange(1,100)@ @randlov(0,@seedlist(StreetName-UK)@)@');


browser.sleep(50);
browser.sleep(50);
if(false)
{
    element(by.css('input[id=line2]')).clear();
}browser.sleep(50);
element(by.css('input[id=line2]')).sendKeys('@randlov(0,@seedlist(US City)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=county]')).clear();
}browser.sleep(50);
element(by.css('input[id=county]')).sendKeys('@randlov(0,@seedlist(UK County)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=post_code]')).clear();
}browser.sleep(50);
element(by.css('input[id=post_code]')).sendKeys('@randlov(0,@seedlist(UK Postcode 8 Digit)@)@');


element(by.cssContainingText('option', 'Scotland')).click();
element(by.buttonText('Save Shipping')).click();
browser.sleep(50);
element(by.buttonText('Continue')).click();
});

it('Should choose a card type, enter a card number and complete the purchase.', function()
{
browser.sleep(50);
element(by.cssContainingText('option', 'MasterCard')).click();
browser.sleep(50);
if(false)
{
    element(by.css('input[id=cardNo]')).clear();
}element(by.css('input[id=cardNo]')).sendKeys('@randdigits(16 ,16)@');


browser.sleep(50);
browser.sleep(50);
element(by.buttonText('Complete Purchase')).click();
});
});

describe('Test Cases 4', function()
{
    browser.ignoreSynchronization = true;
    
    browser.sleep();
    var fsRead = require('fs');
    var contents;
    fsRead.readFile('', 'utf8', contents);
    if(contents == 'undefined')
    {
        contents = "";
    }
    console.log(contents);
    
    var fs = require('fs');
    
    var text = contents;
    var outputFilename = '';
    
browser.ignoreSynchronization = true;

it('Should find the webpage and choose a product', function()
{
browser.get('http://www.grid-tools-downloads.com/Will/TMF/index.php');
browser.sleep(50);
element(by.cssContainingText('option', 'Stationary')).click();
browser.sleep(50);
element(by.buttonText('Order Product')).click();
});

it('Should enter an address and save the shipping details', function()
{
browser.sleep(50);
if(false)
{
    element(by.css('input[id=Email]')).clear();
}browser.sleep(50);
element(by.css('input[id=Email]')).sendKeys('@randchars(2,8,[a-z])@@atsign()@@randlov(0,@seedlist(Email Providers)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=ConfirmEmail]')).clear();
}browser.sleep(50);
element(by.css('input[id=ConfirmEmail]')).sendKeys('^Email_Primary_Valid^');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=name]')).clear();
}browser.sleep(50);
element(by.css('input[id=name]')).sendKeys('@randlov(0,@seedlist(FirstName)@)@ @randlov(0,@seedlist(Name - English Last)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=line1]')).clear();
}browser.sleep(50);
element(by.css('input[id=line1]')).sendKeys('@randrange(1,100)@ @randlov(0,@seedlist(StreetName-UK)@)@');


browser.sleep(50);
browser.sleep(50);
if(false)
{
    element(by.css('input[id=line2]')).clear();
}browser.sleep(50);
element(by.css('input[id=line2]')).sendKeys('@randlov(0,@seedlist(US City)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=county]')).clear();
}browser.sleep(50);
element(by.css('input[id=county]')).sendKeys('@randlov(0,@seedlist(UK County)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=post_code]')).clear();
}browser.sleep(50);
element(by.css('input[id=post_code]')).sendKeys('@randlov(0,@seedlist(UK Postcode 8 Digit)@)@');


element(by.cssContainingText('option', 'Wales')).click();
element(by.buttonText('Save Shipping')).click();
browser.sleep(50);
element(by.buttonText('Continue')).click();
});

it('Should choose a card type, enter a card number and complete the purchase.', function()
{
browser.sleep(50);
browser.sleep(50);
if(false)
{
    element(by.css('input[id=cardNo]')).clear();
}element(by.css('input[id=cardNo]')).sendKeys('@randdigits(16 ,16)@');


browser.sleep(50);
browser.sleep(50);
element(by.buttonText('Complete Purchase')).click();
});
});

describe('Test Cases 5', function()
{
    browser.ignoreSynchronization = true;
    
    browser.sleep();
    var fsRead = require('fs');
    var contents;
    fsRead.readFile('', 'utf8', contents);
    if(contents == 'undefined')
    {
        contents = "";
    }
    console.log(contents);
    
    var fs = require('fs');
    
    var text = contents;
    var outputFilename = '';
    
browser.ignoreSynchronization = true;

it('Should find the webpage and choose a product', function()
{
browser.get('http://www.grid-tools-downloads.com/Will/TMF/index.php');
browser.sleep(50);
element(by.cssContainingText('option', 'Headphones')).click();
browser.sleep(50);
element(by.buttonText('Order Product')).click();
});

it('Should enter an address and save the shipping details', function()
{
browser.sleep(50);
if(false)
{
    element(by.css('input[id=Email]')).clear();
}browser.sleep(50);
element(by.css('input[id=Email]')).sendKeys('@randchars(2,8,[a-z])@@atsign()@@randlov(0,@seedlist(Email Providers)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=ConfirmEmail]')).clear();
}browser.sleep(50);
element(by.css('input[id=ConfirmEmail]')).sendKeys('^Email_Primary_Valid^');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=name]')).clear();
}browser.sleep(50);
element(by.css('input[id=name]')).sendKeys('@randlov(0,@seedlist(FirstName)@)@ @randlov(0,@seedlist(Name - English Last)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=line1]')).clear();
}browser.sleep(50);
element(by.css('input[id=line1]')).sendKeys('@randrange(1,100)@ @randlov(0,@seedlist(StreetName-UK)@)@');


browser.sleep(50);
browser.sleep(50);
if(false)
{
    element(by.css('input[id=line2]')).clear();
}browser.sleep(50);
element(by.css('input[id=line2]')).sendKeys('@randlov(0,@seedlist(US City)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=county]')).clear();
}browser.sleep(50);
element(by.css('input[id=county]')).sendKeys('@randlov(0,@seedlist(UK County)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=post_code]')).clear();
}browser.sleep(50);
element(by.css('input[id=post_code]')).sendKeys('@randlov(0,@seedlist(UK Postcode 8 Digit)@)@');


element(by.cssContainingText('option', 'Wales')).click();
element(by.buttonText('Save Shipping')).click();
browser.sleep(50);
element(by.buttonText('Continue')).click();
});

it('Should choose a card type, enter a card number and complete the purchase.', function()
{
browser.sleep(50);
element(by.cssContainingText('option', 'AMEX')).click();
browser.sleep(50);
if(false)
{
    element(by.css('input[id=cardNo]')).clear();
}element(by.css('input[id=cardNo]')).sendKeys('@randdigits(16 ,16)@');


browser.sleep(50);
browser.sleep(50);
element(by.buttonText('Complete Purchase')).click();
});
});

describe('Test Cases 6', function()
{
    browser.ignoreSynchronization = true;
    
    browser.sleep();
    var fsRead = require('fs');
    var contents;
    fsRead.readFile('', 'utf8', contents);
    if(contents == 'undefined')
    {
        contents = "";
    }
    console.log(contents);
    
    var fs = require('fs');
    
    var text = contents;
    var outputFilename = '';
    
browser.ignoreSynchronization = true;

it('Should find the webpage and choose a product', function()
{
browser.get('http://www.grid-tools-downloads.com/Will/TMF/index.php');
browser.sleep(50);
element(by.cssContainingText('option', 'Testers Pocketbook')).click();
browser.sleep(50);
element(by.buttonText('Order Product')).click();
});

it('Should enter an address and save the shipping details', function()
{
browser.sleep(50);
if(false)
{
    element(by.css('input[id=Email]')).clear();
}browser.sleep(50);
element(by.css('input[id=Email]')).sendKeys('@randchars(2,8,[a-z])@@atsign()@@randlov(0,@seedlist(Email Providers)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=ConfirmEmail]')).clear();
}browser.sleep(50);
element(by.css('input[id=ConfirmEmail]')).sendKeys('^Email_Primary_Valid^');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=name]')).clear();
}browser.sleep(50);
element(by.css('input[id=name]')).sendKeys('@randlov(0,@seedlist(FirstName)@)@ @randlov(0,@seedlist(Name - English Last)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=line1]')).clear();
}browser.sleep(50);
element(by.css('input[id=line1]')).sendKeys('@randrange(1,100)@ @randlov(0,@seedlist(StreetName-UK)@)@');


browser.sleep(50);
browser.sleep(50);
if(false)
{
    element(by.css('input[id=line2]')).clear();
}browser.sleep(50);
element(by.css('input[id=line2]')).sendKeys('@randlov(0,@seedlist(US City)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=county]')).clear();
}browser.sleep(50);
element(by.css('input[id=county]')).sendKeys('@randlov(0,@seedlist(UK County)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=post_code]')).clear();
}browser.sleep(50);
element(by.css('input[id=post_code]')).sendKeys('@randlov(0,@seedlist(UK Postcode 8 Digit)@)@');


element(by.cssContainingText('option', 'Wales')).click();
element(by.buttonText('Save Shipping')).click();
browser.sleep(50);
element(by.buttonText('Continue')).click();
});

it('Should choose a card type, enter a card number and complete the purchase.', function()
{
browser.sleep(50);
element(by.cssContainingText('option', 'AMEX')).click();
browser.sleep(50);
if(false)
{
    element(by.css('input[id=cardNo]')).clear();
}element(by.css('input[id=cardNo]')).sendKeys('@randdigits(16 ,16)@');


browser.sleep(50);
browser.sleep(50);
element(by.buttonText('Complete Purchase')).click();
});
});

describe('Test Cases 7', function()
{
    browser.ignoreSynchronization = true;
    
    browser.sleep();
    var fsRead = require('fs');
    var contents;
    fsRead.readFile('', 'utf8', contents);
    if(contents == 'undefined')
    {
        contents = "";
    }
    console.log(contents);
    
    var fs = require('fs');
    
    var text = contents;
    var outputFilename = '';
    
browser.ignoreSynchronization = true;

it('Should find the webpage and choose a product', function()
{
browser.get('http://www.grid-tools-downloads.com/Will/TMF/index.php');
browser.sleep(50);
element(by.cssContainingText('option', 'Desk')).click();
browser.sleep(50);
element(by.buttonText('Order Product')).click();
});

it('Should enter an address and save the shipping details', function()
{
browser.sleep(50);
if(false)
{
    element(by.css('input[id=Email]')).clear();
}browser.sleep(50);
element(by.css('input[id=Email]')).sendKeys('@randchars(2,8,[a-z])@@atsign()@@randlov(0,@seedlist(Email Providers)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=ConfirmEmail]')).clear();
}browser.sleep(50);
element(by.css('input[id=ConfirmEmail]')).sendKeys('^Email_Primary_Valid^');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=name]')).clear();
}browser.sleep(50);
element(by.css('input[id=name]')).sendKeys('@randlov(0,@seedlist(FirstName)@)@ @randlov(0,@seedlist(Name - English Last)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=line1]')).clear();
}browser.sleep(50);
element(by.css('input[id=line1]')).sendKeys('@randrange(1,100)@ @randlov(0,@seedlist(StreetName-UK)@)@');


browser.sleep(50);
browser.sleep(50);
if(false)
{
    element(by.css('input[id=line2]')).clear();
}browser.sleep(50);
element(by.css('input[id=line2]')).sendKeys('@randlov(0,@seedlist(US City)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=county]')).clear();
}browser.sleep(50);
element(by.css('input[id=county]')).sendKeys('@randlov(0,@seedlist(UK County)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=post_code]')).clear();
}browser.sleep(50);
element(by.css('input[id=post_code]')).sendKeys('@randlov(0,@seedlist(UK Postcode 8 Digit)@)@');


element(by.cssContainingText('option', 'Wales')).click();
element(by.buttonText('Save Shipping')).click();
browser.sleep(50);
element(by.buttonText('Continue')).click();
});

it('Should choose a card type, enter a card number and complete the purchase.', function()
{
browser.sleep(50);
element(by.cssContainingText('option', 'AMEX')).click();
browser.sleep(50);
if(false)
{
    element(by.css('input[id=cardNo]')).clear();
}element(by.css('input[id=cardNo]')).sendKeys('@randdigits(16 ,16)@');


browser.sleep(50);
browser.sleep(50);
element(by.buttonText('Complete Purchase')).click();
});
});

describe('Test Cases 8', function()
{
    browser.ignoreSynchronization = true;
    
    browser.sleep();
    var fsRead = require('fs');
    var contents;
    fsRead.readFile('', 'utf8', contents);
    if(contents == 'undefined')
    {
        contents = "";
    }
    console.log(contents);
    
    var fs = require('fs');
    
    var text = contents;
    var outputFilename = '';
    
browser.ignoreSynchronization = true;

it('Should find the webpage and choose a product', function()
{
browser.get('http://www.grid-tools-downloads.com/Will/TMF/index.php');
browser.sleep(50);
element(by.cssContainingText('option', 'Premium Laptop')).click();
browser.sleep(50);
element(by.buttonText('Order Product')).click();
});

it('Should enter an address and save the shipping details', function()
{
browser.sleep(50);
if(false)
{
    element(by.css('input[id=Email]')).clear();
}browser.sleep(50);
element(by.css('input[id=Email]')).sendKeys('@randchars(2,8,[a-z])@@atsign()@@randlov(0,@seedlist(Email Providers)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=ConfirmEmail]')).clear();
}browser.sleep(50);
element(by.css('input[id=ConfirmEmail]')).sendKeys('^Email_Primary_Valid^');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=name]')).clear();
}browser.sleep(50);
element(by.css('input[id=name]')).sendKeys('@randlov(0,@seedlist(FirstName)@)@ @randlov(0,@seedlist(Name - English Last)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=line1]')).clear();
}browser.sleep(50);
element(by.css('input[id=line1]')).sendKeys('@randrange(1,100)@ @randlov(0,@seedlist(StreetName-UK)@)@');


browser.sleep(50);
browser.sleep(50);
if(false)
{
    element(by.css('input[id=line2]')).clear();
}browser.sleep(50);
element(by.css('input[id=line2]')).sendKeys('@randlov(0,@seedlist(US City)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=county]')).clear();
}browser.sleep(50);
element(by.css('input[id=county]')).sendKeys('@randlov(0,@seedlist(UK County)@)@');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=post_code]')).clear();
}browser.sleep(50);
element(by.css('input[id=post_code]')).sendKeys('@randlov(0,@seedlist(UK Postcode 8 Digit)@)@');


element(by.cssContainingText('option', 'Wales')).click();
element(by.buttonText('Save Shipping')).click();
browser.sleep(50);
element(by.buttonText('Continue')).click();
});

it('Should choose a card type, enter a card number and complete the purchase.', function()
{
browser.sleep(50);
element(by.cssContainingText('option', 'AMEX')).click();
browser.sleep(50);
if(false)
{
    element(by.css('input[id=cardNo]')).clear();
}element(by.css('input[id=cardNo]')).sendKeys('@randdigits(16 ,16)@');


browser.sleep(50);
browser.sleep(50);
element(by.buttonText('Complete Purchase')).click();
});
});
});
