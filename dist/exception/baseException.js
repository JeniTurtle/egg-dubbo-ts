"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exception extends Error {
    constructor({ code, msg, error, } = {}) {
        super(msg);
        this.error = null;
        code && (this.code = code);
        error && (this.error = error);
    }
    set msg(msg) {
        if (!this.message) {
            this.message = msg;
        }
    }
}
exports.Exception = Exception;
class BaseException extends Exception {
}
exports.BaseException = BaseException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZUV4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V4Y2VwdGlvbi9iYXNlRXhjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBYSxTQUFVLFNBQVEsS0FBSztJQVVsQyxZQUFZLEVBQ1YsSUFBSSxFQUNKLEdBQUcsRUFDSCxLQUFLLE1BS0gsRUFBRTtRQUNKLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQWpCRyxVQUFLLEdBQWtCLElBQUksQ0FBQztRQWtCMUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMzQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFsQkQsSUFBSSxHQUFHLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUNwQjtJQUNILENBQUM7Q0FlRjtBQXZCRCw4QkF1QkM7QUFFRCxNQUFzQixhQUFjLFNBQVEsU0FBUztDQUdwRDtBQUhELHNDQUdDIn0=