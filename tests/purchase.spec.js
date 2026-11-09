import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage.js';
import { PurchasePage } from '../Pages/PurchasePage.js';
import testdata from '../Utils/testdata.json' with { type: 'json' };


//Test case 1 - Purchasing a phone

test('Purchasing a Phone',async({page})=>{
    const username = testdata.validUsername
    const password = testdata.validPassword
    const login = new LoginPage(page) //object creation , (page) - constructor invoking
    const purchase = new PurchasePage(page)
       
    await login.navigateToApplication()
    await login.applicationLogin(username,password)
    await login.loginToTheApplication()
    await login.succesfulllogin()
     
    await purchase.selectPhoneCategory()
    await purchase.selectTheProduct()
    await purchase.addPhoneToCart()
    await purchase.Cart()
    await purchase.PlaceOrder() 
    await purchase.PurchaseProduct()
 
})

//Test case 2 - Purchasing a monitor
test('Purchasing a Monitor',async({page})=>{
    const username = testdata.validUsername
    const password = testdata.validPassword
    const login = new LoginPage(page) //object creation , (page) - constructor invoking
    const purchase = new PurchasePage(page)
   
    await login.navigateToApplication()
    await login.applicationLogin(username,password)
    await login.loginToTheApplication()
    await login.succesfulllogin()
     
    await purchase.selectMonitorCategory()
    await purchase.selectTheMonitor()
    await purchase.addMonitorToCart()
    await purchase.Cart()
    await purchase.PlaceOrder() 
    await purchase.PurchaseProduct()
 
})