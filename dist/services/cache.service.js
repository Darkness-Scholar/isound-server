"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Memory Cache module
    @author {TungHwang} @link https://www.facebook.com/tlt69
    - Dữ liệu trong cache được lưu tạm trên RAM nên sẽ tự bị xóa khi đóng chương trình
*/
class MemoryCache {
    constructor() {
        this.data = {};
    }
    set(key, value, expiration) {
        let now = new Date().getTime();
        this.data[key] = {
            value, expiration: now + expiration
        };
    }
    get(key) {
        let item = this.data[key];
        if (!item)
            return null;
        let now = new Date().getTime();
        if (now > item.expiration) {
            delete this.data[key];
            return null;
        }
        return item.value;
    }
}
let __cache__ = new MemoryCache();
exports.default = __cache__;
