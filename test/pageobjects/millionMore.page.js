import Page from './page.js';

/**
 * subpage containing specific selectors and methods for a specific page
 */
class MillionMorePage extends Page {
    /**
     * define selectors using getter methods
     */
    get landingRoot () {
        return $('[data-component="ModelIntro"]');
    }

    get learnMoreButton () {
        return $('[aria-label="Learn more"]');
    }

    get acceptCookieButton () {
        return $('#onetrust-button-group #onetrust-accept-btn-handler');
    }

    /**
     * click in "Learn More" button
     */
    async clickLearMore () {
        await this.learnMoreButton.click();
    }

    /**
     * click "Accept Cookies" button in cookies modal
     */
    async clickAcceptCookies () {
        await this.acceptCookieButton.click();
    }
}

export default new MillionMorePage();
