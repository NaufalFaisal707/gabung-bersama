<script lang="ts">
	import db from '$lib/db';
	import { createId } from '@paralleldrive/cuid2';

	async function formHandler(e: Event) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget as HTMLFormElement);

		const name = formData.get('name') as string;

		await db.contacts.add({ id: createId(), name, type: 'self_contact' });
	}
</script>

<form onsubmit={formHandler} autocomplete="off">
	<fieldset class="mx-auto fieldset w-xs rounded-box border border-base-300 bg-base-100 p-4">
		<legend class="fieldset-legend">Daftar</legend>

		<label for="nama" class="label">Nama</label>
		<input
			id="nama"
			name="name"
			type="text"
			required
			class="validator input"
			placeholder="Agemasen Week"
		/>

		<button class="btn mt-4 btn-neutral">Daftar</button>
	</fieldset>
</form>
