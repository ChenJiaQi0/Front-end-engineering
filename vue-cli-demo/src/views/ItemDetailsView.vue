<template>
    <div class="item">
            <div class="left">
                <img :src="item.img"/>
            </div>
            <div class="right"> 
                <h2>{{ item.title }}</h2>
                <p>{{ item.date }}</p>
                <p v-if="item.show" style="color:red">已结束</p>
            </div>
    </div>
</template>

<script setup>
import ItemService from '../services/ItemService'
import {onMounted, ref} from 'vue'
let item = ref([])

let prop = defineProps({
    id:{
        type: String,
        required: true
    }
})

onMounted(()=>{
    ItemService.getItem(prop.id).then((res)=>{
        console.log(prop.id)
        item.value = res.data
        console.log(item.value.img)
    })
})
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