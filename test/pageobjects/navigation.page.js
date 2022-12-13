import Page from './page.js';

/**
 * subpage containing specific selectors and methods for a specific page
 */
class Navigation extends Page {

    openPage (url) {
        return super.open(url);
    }

}

export default new Navigation();
