export default {
    props: {
        id: {
            type: String,
            default: this.$options.name + '_' + this._uid
        }
    }
};
