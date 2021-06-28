<template>
    <div v-if="error">
        {{error}}
    </div>
    <Suspense v-else>
        <template #default>
            <LifeCycle />
        </template>
        <template #fallback>
            <div>Loading ....</div>
        </template>
    </Suspense>
</template>
<script>
import LifeCycle from '../../components/lesson-1/LifeCycle.vue';
import {ref,onMounted,onBeforeUpdate, onUpdated, onUnmounted, onBeforeMount, onBeforeUnmount, onErrorCaptured, onRenderTracked, onRenderTriggered} from 'vue'
export default {
    components: { LifeCycle },    
    setup() {
        const error = ref(null);

        onBeforeMount(() => {
            console.log("onBeforeMount");
        }),
        onMounted(() => {
            console.log("onMounted");
        }),
        onUpdated(() => {
            console.log("OnUpdated");
        }),
        onBeforeUpdate(() => {
            console.log("onBeforeUpdate");
        }),
         onBeforeUnmount(() => {
            console.log("onBeforeUnmount");
        }),
        onUnmounted(() => {
            console.log("onUnmounted");
        }),
       
        onErrorCaptured((e) => {
            console.log("onErrorCaptured");
            error.value = e;
            return true;
        }),
        onRenderTracked(() => {
            console.log("onRenderTracked");
        }),
        onRenderTriggered(() => {
            console.log("onRenderTriggered");
        })
    },
}
</script>