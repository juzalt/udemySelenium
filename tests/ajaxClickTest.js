describe("We are gonna wait until the loader finishes and then click on the button that says 'Click Me!'", function() {
    it.skip('Attempt to click the button asap', function(done) {
        browser.url('/Ajax-Loader/index.html');
        browser.click('#button1');
    });

    it('Attempt to click the button after 7 seconds', function(done) {
        browser.url('/Ajax-Loader/index.html');
        this.timeout(20000);
        browser.pause(7000);
        browser.click('#button1');
        browser.pause(7000);
    });
});