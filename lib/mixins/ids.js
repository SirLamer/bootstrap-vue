export default {
    props: {
        id: {
            type: Boolean,
            default: this.$options.name + '_' + this._uid
        }
    }
};
