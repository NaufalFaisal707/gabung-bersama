<script lang="ts">
	let { children, contactId } = $props();
</script>

<div class="drawer drawer-end">
	<input id={'profile-' + contactId} type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		{@render children()}
	</div>
	<div class="drawer-side left-1/2 max-w-lg -translate-x-1/2">
		<div class="menu h-full w-full bg-base-100">hello profile {contactId}</div>
		<!-- <ul class="menu min-h-full w-full bg-base-100 p-4">
			<li><a>sidebar item 1</a></li>
			<li><a>sidebar item 2</a></li>
		</ul> -->
	</div>
</div>
