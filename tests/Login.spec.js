import {test,expect} from '@playwright/test'
import {LoginPage} from '../Pages/LoginPage.js'
import testdata from '../Utils/testdata.json' with {type:'json'}


//Test case 1 - Logging into Demoglaze

test('Logging into Demoblaze',async({page})=>{
    const username = testdata.validUsername
    const password = testdata.validPassword
    const login = new LoginPage(page) //object creation , (page) - constructor invoking
    await login.navigateToApplication()
    await login.applicationLogin(username,password)
    await login.loginToTheApplication()
    await login.succesfulllogin()
})

//Test case 2 - Logging into Demoglaze with inalid username and valid password

test('Log in with invalid username and valid pwd',async({page})=>{
    const username = testdata.invalidUsername
    const password = testdata.validPassword
    const login = new LoginPage(page) //object creation , (page) - constructor invoking
    await login.navigateToApplication()
    //await login.applicationLogin(username,password)
    //await login.loginToTheApplication()
    await login.loginWithInvalidUsername(username,password)
})

//Test case 3 - Logging into Demoglaze with valid username and invalid password

test('Log in with valid username and invalid pwd',async({page})=>{
    const username = testdata.validUsername
    const password = testdata.invalidPassword
    const login = new LoginPage(page) //object creation , (page) - constructor invoking
    await login.navigateToApplication()
    //await login.applicationLogin(username,password)
    await login.loginWithInvalidPassword(username,password)
})

//Test case 2 - Logging into Demoglaze with invalid username and password

test('Log in with invalid username and pwd',async({page})=>{
    const username = testdata.invalidUsername
    const password = testdata.invalidPassword
    const login = new LoginPage(page) //object creation , (page) - constructor invoking
    await login.navigateToApplication()
    //await login.applicationLogin(username,password)
    await login.loginWithInvalidUsername(username,password)
})



