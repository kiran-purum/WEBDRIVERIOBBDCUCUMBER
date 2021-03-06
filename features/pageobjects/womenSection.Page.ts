class WomenSection {
    get subCategories() { return $('.subcategory-heading') }
    get hoverOnProduct() { return $('//img[@alt="Faded Short Sleeve T-shirts"]/ancestor::div[@class="product-container"]') }
    get addToCartButton() { return $('//a[@title="Add to cart"]') }
    get addToCartMessage() { return $('//h2') }
    get clickOnProceedToCartButton() { return $('//a[@title="Proceed to checkout"]') }
}
export default new WomenSection()

//img[@alt="Faded Short Sleeve T-shirts"]