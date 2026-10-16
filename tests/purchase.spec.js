import {test,expect} from '@playwright/test'
import {LoginPage} from '../Pages/LoginPage.js'
import { AddToCart } from '../Pages/AddToCart.js'


import testdata from '../Utils/testdata.json' with {type:'json'}


//Test case 1 - Logging and adding a product to the cart

test('Logging and adding a product to the cart',async({page})=>{
    const username = testdata.validUsername
    const password = testdata.validPassword
    const login = new LoginPage(page) //object creation , (page) - constructor invoking
    const addtocart = new AddToCart(page)
    await login.navigateToApplication()
    await login.applicationLogin(username,password)
    await login.loginToTheApplication()
    await login.succesfulllogin()
    await addtocart.selectTheProduct()
    await addtocart.AddProductToCart()
})