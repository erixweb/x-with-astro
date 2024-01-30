<script lang="ts">
	let input = "",
		responseMessage = ""

	async function submit(e: SubmitEvent) {
		e.preventDefault()
		const formData = new FormData(e.currentTarget as HTMLFormElement)
		const response = await fetch("/api/feedback", {
			method: "POST",
			body: formData,
		})
		const data = await response.json()
		responseMessage = data.message
		if (responseMessage) {
			window.location.reload()
		}
	}

</script>

<form
	class="w-full flex flex-row justify-start gap-[20px] border-y-2 border-slate-500 p-[16px]"
	on:submit={submit}
>
	<div class="max-w-[50px] ml-0 mt-0">
		<img
			src="https://avatars.githubusercontent.com/u/121383162?v=4"
			alt="Your profile"
			class="w-[48px] h-[48px] rounded-full"
		/>
	</div>
	<div class="flex flex-col ml-0 w-full max-w-[400px] p-[8px] border-b-2 border-slate-600">
		<textarea
			placeholder="¿Qué está pasando?"
			name="message"
			class="bg-transparent resize-none ml-[0px] outline-none"
			bind:value={input}
		/>
		<div class="mr-[0px]">
			<input
				type="submit"
				value="Postear"
				class="bg-sky-500 max-w-[100px] font-semibold p-[8px] rounded-[15px] mr-[0px] cursor-pointer"
			/>
		</div>
	</div>
</form>
