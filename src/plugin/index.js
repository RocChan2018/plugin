import kyNav from './components/kyNav'
class MyPlugin { }
MyPlugin.install = function (Vue, options) {
    // 3. 注入组件选项
    Vue.mixin({
        created: function () {
            // 逻辑...
        }
    })
    Vue.prototype.alert = () => {
        alert("组件引入成功！")
    }
    Vue.component(kyNav.name,kyNav)
}
export default MyPlugin