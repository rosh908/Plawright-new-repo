import {test,expect} from '@playwright/test'
import {SignUpPage} from '../Pages/SignUpPage.js'
import testdata from '../Utils/testdata.json' with {type:'json'}


//Test case 1 - Signing up to Demoblaze
//-----------------------------------------------
test('Project1 - SignUp to Demoblaze', async({page})=>{
    const username = testdata.validUsername3
    const password = testdata.validPassword
    const signup = new SignUpPage(page) //object creation , (page) - constructor invoking
    await signup.navigateToApplication()
    await signup.applicationSignUpInput(username,password)
    await signup.SignInToTheApplication()

})     
//Test case 2 - Closing the Signup pop up box
//---------------------------------------------

test('Project1 - Closing the signup popup', async({page})=>{
    
    const username = testdata.validUsername1
    const password = testdata.validPassword
    const signup = new SignUpPage(page) //object creation , (page) - constructor invoking
    await signup.navigateToApplication()
    await signup.applicationSignUpInput(username,password)     
    await signup.closeThePopUp()
    })



