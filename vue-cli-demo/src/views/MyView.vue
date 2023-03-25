<template>
    <!-- <div>我的</div> -->
    <div class="main">
        <div v-for="item in items" :key="item.id" class="item">
        <!-- <TodoItem :item="item" v-if="item.show" class="show"/>
        <TodoItem :item="item" v-else/> -->
            <TodoItem :item="item" />
        </div>
    </div>
</template>

<script setup>
import ItemService from '@/services/ItemService.js'
import TodoItem from '@/components/TodoItem.vue'
import {reactive, onMounted, ref} from 'vue'
// import axios from 'axios'

const items = ref([])

onMounted(()=>{
    // axios.get('http://localhost:3000/items')
    // .then((res)=>{
    //     // console.log(res.data)
    //     items = res.data
    //     console.log(items)
    // })
    ItemService.getTodoItems().then((res)=>{
        items.value = res.data
    })
})

// const items = reactive([
// {
//     id: 1,
//     title: 'Vue3学习',
//     date: '2023-03-24',
//     img: '/src/assets/img/vue3.png',
//     show: false,
// },
// {
//     id: 2,
//     title: 'Pinia学习',
//     date: '2023-03-24',
//     img: '/src/assets/img/pinia.png',
//     show: true,
// },
// {
//     id: 3,
//     title: 'Ts学习',
//     date: '2023-03-24',
//     img: '/src/assets/img/ts.png',
//     show: false,
// },
// {
//     id: 4,
//     title: 'Vite学习',
//     date: '2023-03-24',
//     img: '/src/assets/img/vite.png',
//     show: false,
// }
// ])
</script>

<style scoped>
.item{
    width: 300px;
    height: 150px;
    border: 1px solid gray;
    float: left;
    /* padding-bottom: 20px; */
    /* margin-left: 20px; */
    margin-right: 50px;
    box-shadow: 3px 5px 5px gray;
}
.main{
    margin: 50px auto;
    margin-left: 100px;
}
</style>