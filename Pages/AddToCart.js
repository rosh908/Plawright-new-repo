import {expect} from '@playwright/test'
export class AddToCart{
    constructor(page){
        this.page=page //'this' refers to current page

    
        this.prod=page.locator('.hrefch').filter({hasText: 'Samsung galaxy s6'})
        //this.prod1=page.locator('.hrefch').filter({hasText: 'Apple monitor 24'})
        //this.monitorCategory=page.locator('.list-group-item').filter({hasText: 'Monitors'})

        this.addToCartbutton=page.locator("//a[@onclick='addToCart(1)']")
        //this.addToCartbutton1=page.locator("//a[@onclick='addToCart(10)']")
        //this.loginButton1=page.getByRole('button',{name : 'Log in'})
    }   
    async selectTheProduct(){
        await this.prod.click()
    }

            
    async AddProductToCart(){
        this.page.once('dialog', async dialog => {
            expect (dialog.message()).toBe('Product added.')
            await dialog.accept()
        })
        await this.addToCartbutton.click()
    }

   

}