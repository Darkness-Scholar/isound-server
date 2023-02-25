/** Memory Cache module
    @author {TungHwang} @link https://www.facebook.com/tlt69
    - Dữ liệu trong cache được lưu tạm trên RAM nên sẽ tự bị xóa khi đóng chương trình
*/
class MemoryCache {
    private data: any
    constructor() {
        this.data = {}
    }

    public set(key: string|number, value: any, expiration: Date|any) {
        let now = new Date().getTime()
        this.data[key] = {
            value, expiration: now + expiration
        }
    }

    public get(key: string|number) {
        let item = this.data[key]
        if (!item) return null
        let now = new Date().getTime()
        if (now > item.expiration) {
            delete this.data[key]
            return null
        }
        return item.value
    }
}

let __cache__ = new MemoryCache()
export default __cache__