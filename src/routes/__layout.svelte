<!-- src/routes/__layout.svelte -->
<nav class="navbar">
	<ul>
		<li>
		<a href="/">Home</a>
		</li>
		<li>
		<a class="active" href="/about">About</a>
		</li>
		<li>
			<a href="/login">Login</a>
		</li>
		<li>	
			<a href="/settings">Settings</a>
		</li>
	</ul>

</nav>

<style>
	.navbar {
  background-color: #333333;
  display: flex;
  /* let's align the items so everything is nice and centered */
  align-items: center;
}
.navbar ul {
 /* Let's reset the margin and padding of the list so it's is flush. */
  margin: 0;
  padding: 0;
  /* Let's remove the bullet points */
  list-style-type: none;
  /* display the list flex and align the items centered */
  display: flex;
  align-items:center;
}
.navbar ul li a {
  color: #e7e7e7;
  padding: 24px;
  /*Let's make the anchor display block.
     This will ensure when we hover, focus, or is active we get the full width and height 
      of the container.
  */
  display: block;
}

/* When a use hovers or focuses to a link change the background */
.navbar ul a:hover,
.navbar ul a:focus,
.navbar ul .active {
  background-color: #272727;
}
nav {
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background-color: #eaeaea;
}
</style>

 <slot></slot> 
 