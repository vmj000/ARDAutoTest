
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
element(by.css('input[id=Email]')).sendKeys('gwvqtl@HushMail.com');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=ConfirmEmail]')).clear();
}browser.sleep(50);
element(by.css('input[id=ConfirmEmail]')).sendKeys('gwvqtl@HushMail.com');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=name]')).clear();
}browser.sleep(50);
element(by.css('input[id=name]')).sendKeys('Surya Reynolds');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=line1]')).clear();
}browser.sleep(50);
element(by.css('input[id=line1]')).sendKeys('11 Falcon Way');


browser.sleep(50);
browser.sleep(50);
if(false)
{
    element(by.css('input[id=line2]')).clear();
}browser.sleep(50);
element(by.css('input[id=line2]')).sendKeys('Mountain ranch');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=county]')).clear();
}browser.sleep(50);
element(by.css('input[id=county]')).sendKeys('Buckinghamshire');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=post_code]')).clear();
}browser.sleep(50);
element(by.css('input[id=post_code]')).sendKeys('SA1 1AG');


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
}element(by.css('input[id=cardNo]')).sendKeys('8056912402530497');


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
element(by.css('input[id=Email]')).sendKeys('sf@ntlworld.com');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=ConfirmEmail]')).clear();
}browser.sleep(50);
element(by.css('input[id=ConfirmEmail]')).sendKeys('sf@ntlworld.com');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=name]')).clear();
}browser.sleep(50);
element(by.css('input[id=name]')).sendKeys('Columbine Watts');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=line1]')).clear();
}browser.sleep(50);
element(by.css('input[id=line1]')).sendKeys('5 Hague Avenue');


browser.sleep(50);
browser.sleep(50);
if(false)
{
    element(by.css('input[id=line2]')).clear();
}browser.sleep(50);
element(by.css('input[id=line2]')).sendKeys('Robertson');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=county]')).clear();
}browser.sleep(50);
element(by.css('input[id=county]')).sendKeys('Province of Munster');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=post_code]')).clear();
}browser.sleep(50);
element(by.css('input[id=post_code]')).sendKeys('SA3 3AB');


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
}element(by.css('input[id=cardNo]')).sendKeys('3204807355070166');


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
element(by.css('input[id=Email]')).sendKeys('jjfkh@MailExcite.com');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=ConfirmEmail]')).clear();
}browser.sleep(50);
element(by.css('input[id=ConfirmEmail]')).sendKeys('jjfkh@MailExcite.com');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=name]')).clear();
}browser.sleep(50);
element(by.css('input[id=name]')).sendKeys('Krishnala English');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=line1]')).clear();
}browser.sleep(50);
element(by.css('input[id=line1]')).sendKeys('57 Magdalen Walk');


browser.sleep(50);
browser.sleep(50);
if(false)
{
    element(by.css('input[id=line2]')).clear();
}browser.sleep(50);
element(by.css('input[id=line2]')).sendKeys('Oxnard');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=county]')).clear();
}browser.sleep(50);
element(by.css('input[id=county]')).sendKeys('Huntingdonshire');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=post_code]')).clear();
}browser.sleep(50);
element(by.css('input[id=post_code]')).sendKeys('SA1 1AH');


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
}element(by.css('input[id=cardNo]')).sendKeys('4562025989795784');


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
element(by.css('input[id=Email]')).sendKeys('dhrof@GuRLmail.com');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=ConfirmEmail]')).clear();
}browser.sleep(50);
element(by.css('input[id=ConfirmEmail]')).sendKeys('dhrof@GuRLmail.com');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=name]')).clear();
}browser.sleep(50);
element(by.css('input[id=name]')).sendKeys('Sohil Hayes');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=line1]')).clear();
}browser.sleep(50);
element(by.css('input[id=line1]')).sendKeys('1 Fairmile Drive');


browser.sleep(50);
browser.sleep(50);
if(false)
{
    element(by.css('input[id=line2]')).clear();
}browser.sleep(50);
element(by.css('input[id=line2]')).sendKeys('Winterhaven');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=county]')).clear();
}browser.sleep(50);
element(by.css('input[id=county]')).sendKeys('Sussex');


browser.sleep(50);
if(false)
{
    element(by.css('input[id=post_code]')).clear();
}browser.sleep(50);
element(by.css('input[id=post_code]')).sendKeys('OX3 1AF');


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
}element(by.css('input[id=cardNo]')).sendKeys('4572552418320814');


browser.sleep(50);
browser.sleep(50);
element(by.buttonText('Complete Purchase')).click();
});
});
});
