import { expect } from "@playwright/test"

export class LoginPage{
    constructor(page){
        this.page=page //'this' refers to current page

    //login elements
        this.loginButton=page.locator('#login2')
        this.logInUsernamefield=page.locator("#loginusername")
        this.logInPasswordfield=page.locator("#loginpassword")
        this.loginButton1=page.getByRole('button',{name : 'Log in'})
    }   
    async navigateToApplication(){
        await this.page.goto('https://www.demoblaze.com/')
    }
        
    async applicationLogin(username,password){
        await this.loginButton.click()
        await this.logInUsernamefield.fill(username)
        await this.logInPasswordfield.fill(password)
    }

    async loginToTheApplication(){
        await this.loginButton1.click()
    }

    async loginWithInvalidUsername(username,password){
        await this.loginButton.click()
               this.page.once('dialog', async dialog=>{
            console.log('Alert message:', dialog.message())
            expect(dialog.message()).toBe('User does not exist.')
            await dialog.accept()
        })
        await this.logInUsernamefield.fill(username)
        await this.logInPasswordfield.fill(password)
        await this.loginButton1.click()
    }

       async loginWithInvalidPassword(username,password){
        await this.loginButton.click()
               this.page.once('dialog', async dialog=>{
            console.log('Alert message:', dialog.message())
            expect(dialog.message()).toBe('Wrong password.')
            await dialog.accept()
        })
        await this.logInUsernamefield.fill(username)
        await this.logInPasswordfield.fill(password)
        await this.loginButton1.click()
    }

    async succesfulllogin(){
        await expect(this.page.locator('#logout2')).toBeVisible()
    }
}