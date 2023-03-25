<template>
        <div class="item">
        <RouterLink :to="{name: 'item-details', params: {id: item.id}}">
            <div class="left">
                <img :src="item.img"/>
            </div>
            <div class="right"> 
                <h2>{{ item.title }}</h2>
                <p>{{ item.date }}</p>
                <p v-if="item.show" style="color:red">已结束</p>
            </div>
        </RouterLink>
        </div>
</template>
<script setup>
// import {reactive} from 'vue'
const prop = defineProps({
    item: {
        type: Object,
        required: true,
    }
})
// console.log(prop.item)
// const item = reactive({
//     title: 'Vue3学习',
//     date: '2023-03-24',
// })
</script>

<style scoped>
.item img{
    width: 100px;
    height: 100px;
}
.left{
    float: left;
}
.right{
    float: left;
    padding-left: 20px;
}
</style>