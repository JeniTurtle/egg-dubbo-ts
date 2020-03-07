"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const init_1 = require("./lib/init");
class AppBoot {
    constructor(app) {
        this.app = app;
    }
    configWillLoad() { }
    async didLoad() { }
    async willReady() { }
    async didReady() {
        init_1.start(this.app);
        process.on('SIGINT', () => {
            init_1.close(this.app);
        });
    }
    async serverDidReady() { }
    async beforeClose() {
        init_1.close(this.app);
    }
}
exports.default = AppBoot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBRTFCLHFDQUEwQztBQUUxQyxNQUFxQixPQUFPO0lBQzFCLFlBQW9CLEdBQWdCO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQWE7SUFBRyxDQUFDO0lBRXhDLGNBQWMsS0FBSSxDQUFDO0lBRW5CLEtBQUssQ0FBQyxPQUFPLEtBQUksQ0FBQztJQUVsQixLQUFLLENBQUMsU0FBUyxLQUFJLENBQUM7SUFFcEIsS0FBSyxDQUFDLFFBQVE7UUFDWixZQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUN4QixZQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjLEtBQUksQ0FBQztJQUV6QixLQUFLLENBQUMsV0FBVztRQUNmLFlBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBdEJELDBCQXNCQyJ9