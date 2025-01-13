<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<section id="about" class="py-16 md:py-20">
	<div class="container px-4 md:px-6">
		<h2 class="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
			About Me
		</h2>
		<Card.Root>
			<Card.Content class="p-6 md:p-8">
				<div class="grid items-center gap-8 md:grid-cols-2">
					<img
						src="images/me.jpg"
						alt="Tyler Porter - Full Stack Web Developer"
						class="mx-auto w-full max-w-md rounded-lg"
					/>
					<div class="space-y-4">
						<p class="text-gray-500 dark:text-gray-400">
							I’m a passionate <strong>Full Stack Developer</strong> based in the Pacific Northwest
							with
							<strong>13 years of experience</strong> in web development. I specialize in creating scalable
							web applications using modern technologies, empowering businesses to effectively showcase
							their products or services and succeed in the marketplace.
						</p>
						<p class="text-gray-500 dark:text-gray-400">
							Over the years, I’ve gained experience with a diverse set of technologies and
							frameworks, always keeping up with the latest industry trends and best practices. My
							dedication to continuous learning and adaptability has allowed me to deliver
							<strong>high-quality projects</strong> that not only meet but exceed client expectations.
						</p>
						<p class="text-gray-500 dark:text-gray-400">
							I’m on the lookout for new opportunities that will challenge me to grow both
							personally and professionally. I’m excited to join forward-thinking teams where I can
							contribute my expertise to build <strong
								>innovative products and meaningful experiences</strong
							> that make a difference.
						</p>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</section>
