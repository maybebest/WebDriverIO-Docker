import MillionMorePage from '../pageobjects/millionMore.page.js'
import Navigation from '../pageobjects/navigation.page.js'
import {Urls} from "../projectUlrs/urls.js";

describe('Landing page - interactive elements', () => {
    it('should save some screenshots', async () => {
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



