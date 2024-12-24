<template>
	<!--<router-link to="/">Go to Home</router-link>
    <router-link to="/follow">Go to follow</router-link>
    <router-link to="/fans">Go to fans</router-link>-->
	<el-container>
		<el-header class="user-top">
			<el-row :gutter="24" class="top-nav-container" :align="'middle'">
				<el-col
					:span="4"
					class="top-left-arrow-icon"
					@click="leftIconClickEvent">
					<el-icon :size="25">
						<ArrowLeft />
					</el-icon>
				</el-col>
				<el-col
					:span="4"
					class="top-left-arrow-icon"
					@click="homeIconClickEvent">
					<el-icon :size="25">
						<img
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAAAXNSR0IArs4c6QAAA59JREFUeF7tmz+o1DAcx5N0ba+gq+Du4KPXooPLjcoDcdBRNxHkrY4q6uj6EMRNRx1EeOh4i4PSu/JucBdcFXrXtYn89A5qyb+2lzRC3na8Jk0+v+8v+f1+STHyf38IYM/hLwEPYqsED2JMELPZLCzL8gEh5Aal9ByMhRDyg1L6Po7j5/P5vLLtstYVkWXZzbquXxJCzvAmSyn9FQTBvTzP39mEYQ0EqGC9Xr/AGN/WmSBj7M1kMrlvSx1WQKhUIAJjUx1GQchUAJNECB0HQXACIOq6PkQIHfFcxoY6jIHIsuxSXdcfBWvBCmN8N8/zr001QBvG2CuE0MW2SrbquNZuo+NmOs/sHYRqLaCUPpXtDI0d5RFvAqbUsVcQMosihLgqEFlrn31ZU4TKiioViAZqql/e+wYrwoblbLyjNwib1gILmn5fLxA2LGR77egEQmUVUyt6G8rQnWnQGjHmHi9TR9dYRdSXliKSJHkyZtQn2/50oteiKB6rtlApCHjJZrP5LIn0rGeJEnXIstpVFEVXZAmcFESapqc8CLbWApUVO64dq8VicdDZNSBjZIy9bTa0mQ12hbB7HlRcVdVVXs0DY3xLVOcQKoKjBqW8+g7eRDuBWwtVIQSRJMnPZuaIMb5sKvMzAQL63O50X3b9g6KLojjbaftM05Q1GywWC60dxtSk+varOw+Za3gQQF+XZF9L2WqnOw+viK1FPAgP4l/n9IrwivCK4HqBdw3vGiO7xi47pJRexxgfNK8FMMZOCSEfwjD8tK/DXycDqm1q/5BX42hFmnAY9GwfVwOcAwHlPkII9xhPFG7DwZBOmU0WrjsFog+ERuo8CIYzIHiVLpgklPsIIcdhGH6D31VVXaCUHvEuksgqS6rkzQkQvCqR6nhfcJ2gd3XMCRA8NehUutqVJbB6X1U4AWI6nb5uSh3cYblc3lHJGf4/pG2zfydAtAvAOmrYTYKjCmk5XgTXCRDtAnAURZFuoLRdXzY6hVfnt09dawy1pgehsdjoGsNo9qk7CK8IhUWHguxSjfeKsFGPGGrRoe29IhoupwvTu4Z3DYulOl1ZOr19tsNjjdhF+UjXqwVtkMoXKB7odT+inf0NHQS0HxuELPvlLpaQ8MDAy7L8Lvr2qg+YMUGAGuI4Pi9K+pTXC+E7LMbY4T6AjAECAGCMT1TfhwlBgCp0U+Y+6nCtzX95L8oERA9CFVCZoO5yn14RXhGaIbbLMjYxtt/XIZRwaNFMhwAAAABJRU5ErkJggg=="
							style="width: 100%; height: 100%" />
					</el-icon>
				</el-col>
				<el-col :span="16" class="top-title-name">{{ navTitle }}</el-col>
				<el-col :span="4" class="top-right-space"></el-col>
			</el-row>
		</el-header>
		<el-main class="main">
			<RouterView></RouterView>
		</el-main>
	</el-container>
</template>

<script setup>

//let UserData = ref < UserInfo> ({});
let navTitle = ref("消息");
let leftIconClickEvent = () => {
	window.history.back();
};

let homeIconClickEvent = () => {
	window.location.href = "/index/tbwise/feed";
};
</script>

<style scoped>
.user-top {
	--el-header-height: 40px;
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: #fff;
}

.top-nav-container {
	align-items: center;
	width: 100%;
}

.top-title-name {
	text-align: center;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}

.main {
	padding: 0;
	margin: 0;
	margin-top: 40px;
}
</style>
