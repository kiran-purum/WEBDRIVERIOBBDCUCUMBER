class DynamicPage {
    get startBtn() {
        return $("#start>button")
    }
    get loadingElement() {
        return $('//div[@id="loading"]/img')
    }
    get helloWorldText() {
        return $('//div[@id="finish"]/h4')
    }
}
export default new DynamicPage()


