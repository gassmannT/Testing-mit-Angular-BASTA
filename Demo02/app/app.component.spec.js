"use strict";
var app_component_1 = require("./app.component");
describe('AppComponent', function () {
    var comp;
    var fixture;
    beforeEach(function () {
        comp = new app_component_1.AppComponent();
    });
    it("is defined", function () {
        expect(comp).toBeTruthy();
    });
    it("title defined", function () {
        comp.ngOnInit();
        expect(comp.title).toBe("hallo basta");
    });
});
//# sourceMappingURL=app.component.spec.js.map