class LandingPage {
    get headerElement() { return $('.heading'); }
    get text() { return $('//h2'); }
    async openApp() {
        await browser.url("https://the-internet.herokuapp.com/");
    }
}
export default new LandingPage()