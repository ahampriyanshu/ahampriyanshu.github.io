<script>
  export let params;
  export let title;
  export let description;
  export let date;
  export let tags;
  export let categories;
  export let pin;
  export let math;

  const __layoutProps = { params, title, description, date, tags, categories, pin, math };
  void __layoutProps;
</script>

<div class="default-content">
  <slot />
</div>
