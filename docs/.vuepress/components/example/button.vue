<template>
    <div>
        <l-button>默认按钮</l-button>
        <l-button type="primary">主要按钮</l-button>
        <l-button type="success">成功按钮</l-button>
        <l-button type="info">信息按钮</l-button>
        <l-button type="warning">警告按钮</l-button>
        <l-button type="danger">危险按钮</l-button>
    </div>
</template>
<script>
import Vue from 'vue'
import LiuUI from 'liu-ui'
import 'liu-ui/lib/theme-default/index.css';
Vue.use(LiuUI)
export default {
}
</script>

