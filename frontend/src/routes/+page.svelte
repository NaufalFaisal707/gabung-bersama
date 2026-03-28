<script lang="ts">
	import { liveQuery } from 'dexie';
	import db from '$lib/db';

	import Form from '$lib/components/Form.svelte';
	import Navbar from '$lib/components/dashboard/Navbar.svelte';
	import ContactCard from '$lib/components/dashboard/ContactCard.svelte';
	import ChatDrawer from '$lib/components/dashboard/ChatDrawer.svelte';

	let isLoading = $state(true);

	let contact = liveQuery(() => db.contacts.where('type').equals('self_contact').first());

	contact.subscribe(() => {
		isLoading = false;
	});

	let contacts = liveQuery(() => db.contacts.toArray());
</script>

{#if isLoading}
	<div>loading</div>
{:else if $contact === undefined}
	<div class="mx-auto flex h-svh max-w-lg flex-col justify-center">
		<Form />
	</div>
{:else}
	<div class="relative mx-auto h-svh max-w-lg bg-base-100">
		<Navbar contact={$contact} />
		<ul class="list bg-base-100">
			{#each $contacts as contact (contact.id)}
				<ChatDrawer contactId={contact.id}>
					<label for={'chat-' + contact.id}>
						<ContactCard class="rounded-none" name={contact.name} type={contact.type} />
					</label>
				</ChatDrawer>
			{/each}
		</ul>
	</div>
{/if}
