"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compose(middleware) {
    if (!Array.isArray(middleware))
        throw new TypeError('Middleware stack must be an array!');
    for (const fn of middleware) {
        if (typeof fn !== 'function')
            throw new TypeError('Middleware must be composed of functions!');
    }
    return (ctx, next) => {
        let index = -1;
        return dispatch(0);
        function dispatch(i) {
            if (i <= index)
                return Promise.reject(new Error('next() called multiple times'));
            index = i;
            let fn = middleware[i];
            if (i === middleware.length)
                fn = next;
            if (!fn)
                return Promise.resolve();
            try {
                return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
            }
            catch (err) {
                return Promise.reject(err);
            }
        }
    };
}
exports.compose = compose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxzL2NvbXBvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxTQUFnQixPQUFPLENBQUksVUFBa0M7SUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQzFGLEtBQUssTUFBTSxFQUFFLElBQUksVUFBVSxFQUFFO1FBQzNCLElBQUksT0FBTyxFQUFFLEtBQUssVUFBVTtZQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUNoRztJQUVELE9BQU8sQ0FBQyxHQUFNLEVBQUUsSUFBMEIsRUFBRSxFQUFFO1FBQzVDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsU0FBUyxRQUFRLENBQUMsQ0FBUztZQUN6QixJQUFJLENBQUMsSUFBSSxLQUFLO2dCQUFFLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7WUFDakYsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNWLElBQUksRUFBRSxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxVQUFVLENBQUMsTUFBTTtnQkFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxFQUFFO2dCQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLElBQUk7Z0JBQ0YsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3RDtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUM7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBdEJELDBCQXNCQyJ9