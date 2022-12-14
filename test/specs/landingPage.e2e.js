import MillionMorePage from '../pageobjects/millionMore.page.js'
import Navigation from '../pageobjects/navigation.page.js'
import {Urls} from "../projectUlrs/urls.js";

describe('Million more page', () => {
    it('should load the page', async () => {
        await Navigation.openPage(Urls.millionMore)
        await MillionMorePage.clickAcceptCookies()
        await expect(MillionMorePage.landingRoot).toBeDisplayed()
    })
})


