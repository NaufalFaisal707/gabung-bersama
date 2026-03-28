<script lang="ts">
	let { name = '', type, conversation = '', class: className = '', compact = false } = $props();

	let displayName = $derived(type === 'self_contact' ? name + ' (Anda)' : name);

	let conversationDisplay = $derived(
		type === 'self_contact' ? 'Kirim pesan ke diri sendiri' : conversation
	);
</script>

<div
	class={[className, compact ? 'p-2' : '', 'list-row hover:cursor-pointer hover:bg-base-200/50 ']}
>
	<div class="avatar avatar-placeholder">
		<div
			class={[
				type === 'group_contact' ? 'rounded-field' : 'rounded-full',
				compact ? 'w-8' : 'w-12',
				'border-base-content bg-base-300 text-neutral-content'
			]}
		>
			<span class={[compact ? 'text-xs' : 'text-xl', 'uppercase']}>
				{name.slice(0, 2)}
			</span>
		</div>
	</div>
	<div class="flex min-w-0 flex-col justify-evenly">
		<div class={[compact ? 'text-xs' : 'font-bold', 'truncate capitalize']}>
			{displayName}
		</div>
		<div class="truncate text-xs opacity-60">{conversationDisplay}</div>
	</div>
</div>
