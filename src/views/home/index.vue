<template>
    <div class="home_box">
        home1122223222333444
    </div>
</template>
<script>
import { join } from 'lodash';
export default {
    name: 'home',
    mounted(){
        console.log(join(['1','2'], ','))
    }
}
</script>

<style lang="scss" scoped>
.home_box{
    background: #666
}
</style>
