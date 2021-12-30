<script>
    import Nav from "../components/navbar.svelte";
    </script>
    <div class="p-8 max-w-6xl mx-auto">
        <div class="p-8 max-w-6xl mx-auto">
            <Nav/>

            <slot>
            </slot>
        </div>
    </div>
    <style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    </style>