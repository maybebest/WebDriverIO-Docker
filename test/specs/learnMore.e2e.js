import MillionMorePage from '../pageobjects/millionMore.page.js'
import Navigation from '../pageobjects/navigation.page.js'
import {Urls} from "../projectUlrs/urls.js";

describe('Million more page - interactive elements', () => {
    it('should redirect to safety page', async () => {
        await Navigation.openPage(Urls.millionMore)
        await MillionMorePage.clickAcceptCookies()
        await MillionMorePage.clickLearMore()
        await expect(browser).toHaveUrlContaining(Urls.safety)
    })
})


