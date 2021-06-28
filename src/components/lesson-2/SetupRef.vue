<template>
    <div ref="element">{{text}}</div>
    <div>{{counter}}</div>
    <button @click="changer">Tık</button>
</template>
<script>
import {ref} from 'vue';
export default {    
    setup() {
        const text = ref('reactiveData');
        const element = ref(null);
        const counter = ref(0);
        const changer= ()=>{
            console.log(text);
            text.value ="hasann";
            element.value.classList.add("bold");
            counter.value ++;
        };

        return {
            text,
            changer,
            element,
            counter
        }
    }
}
</script>
<style>

</style>