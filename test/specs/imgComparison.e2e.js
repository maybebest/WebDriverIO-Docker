import MillionMorePage from '../pageobjects/millionMore.page.js'
import Navigation from '../pageobjects/navigation.page.js'
import {Urls} from "../projectUlrs/urls.js";

describe('Million more page - visual regression testing', () => {
    it('should save screenshot and verify it', async () => {
        await Navigation.openPage(Urls.millionMore)
        await MillionMorePage.clickAcceptCookies()
        await browser.saveElement(
            await MillionMorePage.landingRoot,
            'firstButtonElement',
            { /* some options */ }
        );
        // Some actions here
        expect(await browser.checkElement(
            await MillionMorePage.landingRoot,
            'firstButtonElement',
            { /* some options */ })
        ).toEqual(0);
    });

})



