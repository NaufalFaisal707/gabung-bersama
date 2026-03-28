<script lang="ts">
	import db from '$lib/db';
	import { liveQuery } from 'dexie';
	import Icon from '@iconify/svelte';

	import ContactCard from './ContactCard.svelte';
	import ChatBubble from './ChatBubble.svelte';

	let { children, contactId } = $props();

	let contact = liveQuery(() => db.contacts.get(contactId));
</script>

<div class="drawer drawer-end">
	<input id={'chat-' + contactId} type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		{@render children()}
	</div>
	<div class="drawer-side left-1/2 max-w-lg -translate-x-1/2">
		<div class="flex h-svh w-full flex-col overflow-auto bg-base-100">
			<div class="sticky top-0 z-20 bg-base-100">
				<div class="m-2 flex max-h-14 items-center gap-1">
					<label for={'chat-' + contactId} class="btn btn-circle btn-link">
						<Icon icon="lucide:arrow-left" class="size-6 text-base-content" />
					</label>
					<div class="flex-1">
						{#if $contact}
							<ContactCard name={$contact.name} type={$contact.type} compact />
						{/if}
					</div>
				</div>
			</div>

			<div class="grow overflow-auto [scrollbar-gutter:stable]">
				<ChatBubble />
			</div>

			<div class="sticky bottom-0 z-20">
				<div class="m-2 flex max-h-14 gap-2">
					<textarea
						rows="1"
						class="textarea h-12 min-h-0 w-full resize-none overflow-hidden rounded-full textarea-lg"
						placeholder="Ketik pesan..."
					></textarea>
					<button class="btn btn-circle btn-lg">
						<Icon icon="lucide:arrow-big-up" class="size-6 text-base-content" />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
