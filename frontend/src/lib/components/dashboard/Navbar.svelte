<script lang="ts">
	import type { IContact } from '$lib/db';
	import ProfileDrawer from './ProfileDrawer.svelte';

	let { contact }: { contact: IContact } = $props();
</script>

<div class="sticky top-0 z-10 flex max-h-14 flex-col gap-2 bg-base-100 px-3 pt-2 pb-3">
	<div class="flex items-center">
		<div class="flex-1">
			<span class="text-lg font-bold">KitaChat</span>
		</div>
		<div class="flex gap-2">
			<ProfileDrawer contactId={contact.id}>
				<label
					for={'profile-' + contact.id}
					class="btn avatar avatar-placeholder btn-circle btn-ghost"
				>
					<div class="w-8 rounded-full border-base-content bg-base-300 text-neutral-content">
						<span class="text-sm uppercase">{contact.name.slice(0, 2)}</span>
					</div>
				</label>
			</ProfileDrawer>
		</div>
	</div>
</div>
