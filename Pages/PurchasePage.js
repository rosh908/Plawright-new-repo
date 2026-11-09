import {expect} from '@playwright/test'
export class PurchasePage{
    constructor(page){
        this.page=page //'this' refers to current page
        this.phoneCategory=page.locator('.list-group-item').filter({hasText: 'Phones'})
        this.monitorCategory=page.locator('.list-group-item').filter({hasText: 'Monitors'})
        this.prod=page.locator('.hrefch').filter({hasText: 'Samsung galaxy s6'})
        this.prod1=page.locator('.hrefch').filter({hasText: 'Apple monitor 24'})
        this.addPhone=page.locator("//a[@onclick='addToCart(1)']")
        this.addMonitor=page.locator("//a[@onclick='addToCart(10)']")
        this.cart=page.locator('#cartur')
        this.placeOrder=page.locator("//button[text()='Place Order']")
        this.name=page.locator('#name')
        this.country=page.locator('#country')
        this.city=page.locator('#city')
        this.creditCard=page.locator('#card')
        this.month=page.locator('#month')
        this.year=page.locator('#year')
        this.purchaseButton=page.locator("//button[@onclick='purchaseOrder()']")
        this.confirmButton=page.locator("//button[text()='OK']")
    }   

    async selectPhoneCategory(){
        await this.phoneCategory.click()
        await expect(this.prod).toBeVisible()
    }

    async selectMonitorCategory(){
        await this.monitorCategory.click()
        await expect(this.prod1).toBeVisible()
    }

    async selectTheProduct(){
        await this.prod.click()
        await expect(this.addPhone).toBeVisible()
    }

    async selectTheMonitor(){
        await this.prod1.click()
        await expect(this.addMonitor).toBeVisible()
    }
        
    async addPhoneToCart(){
        this.page.once('dialog', async dialog => {
            expect (dialog.message()).toBe('Product added.')
            await dialog.accept()
        })
        //await this.addToCartbutton.waitFor({state:'visible'})
        await this.addPhone.click()
    }

    async addMonitorToCart(){
        this.page.once('dialog', async dialog => {
            expect (dialog.message()).toBe('Product added.')
            await dialog.accept()
        })
        await this.addMonitor.click()
    }

    async Cart(){
        await this.page.locator('#cartur').click()
        await expect(this.placeOrder).toBeVisible()
    }

    async PlaceOrder(){
        await this.placeOrder.click()
        await this.name.fill('Rose')
        await this.country.fill('UK')
        await this.city.fill('Burton')
        await this.creditCard.fill('1234567890')
        await this.month.fill('12')
        await this.year.fill('2026')
    }

    async PurchaseProduct(){
        await this.purchaseButton.click()
        await this.confirmButton.click()
}
}