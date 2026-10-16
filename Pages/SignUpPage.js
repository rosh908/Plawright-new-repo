export class SignUpPage{
    constructor(page){
        this.page=page //'this' refers to current page

    //sign-up elements
        this.signUpButton=page.locator('#signin2')
        //this.loginLink=page.locator('#login2')
        this.signUpusernamefield=page.locator('#sign-username')
        this.signUppasswordfield=page.locator('#sign-password')
        this.signUpButton1=page.getByRole('button',{name : 'Sign up'})
        this.closeButton=page.locator('#signInModal button.close')
    }
    
    async navigateToApplication(){
        await this.page.goto('https://www.demoblaze.com/')
    }
        
    async applicationSignUpInput(username,password){
        await this.signUpButton.click()
        await this.signUpusernamefield.fill(username)
        await this.signUppasswordfield.fill(password)
    }

    async SignInToTheApplication(){
       
        this.page.once('dialog', async dialog=>{
                    console.log('Alert message:', dialog.message())
                    expect(dialog.message()).toBe('Sign up successful.')
                    await dialog.accept()
                })
                 await this.signUpButton1.click()
    }
    
    async closeThePopUp(){
        await this.closeButton.click()
    }
}