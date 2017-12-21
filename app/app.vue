<template>
    <div>
        <h1>你好，单文件组件</h1>
        <p>
            nice to see you!
        </p>
        <img src="./img/snow.jpg" width="300">
        <img src="./img/blue.jpg" width="300">
    </div>
</template>

<script>
	export default {
		name:'app',
		data(){
			return {

			}
		}

	}
</script>

<style scoped lang='less'>
	div {
		color:red;
		p {
			color:blue;
		}
	}
</style>