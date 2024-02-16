import { component$, useSignal, $, useStyles$ } from '@builder.io/qwik'
import styles from './navigation.css?inline'

export const Navigation = component$(() => {
	useStyles$(styles)
	const menuOpen = useSignal<boolean>(false)
	const activated = useSignal<boolean>(true)
	const navLinks = useSignal<Element>()

	const toggleMenu = $(() => {})

	const links = [
		{ link: '/', name: 'Home' },
		{ link: '/about', name: 'About' },
		{ link: '/blog', name: 'Blog' }
	]

	return (
		<header>
			<nav
				class={['content header-nav', menuOpen.value ? 'active' : '']}
				aria-labelledby='mainmenulabel'
			>
				<div class='nav-container feature'>
					<a href='/' aria-label='Go to homepage'>
						<svg
							width='49'
							height='26'
							viewBox='0 0 39 20'
							fill='none'
							class='logo-link'
						>
							<title>Five kids and planning Logo</title>
							<path
								d='M31.16 2.59H25.47V11.37C24.21 10.38 22.55 9.51 20.54 8.68C18.45 7.82 16.49 6.67 16.49 4.76C16.49 3.66 17.12 2.75 18.34 2.75C19.44 2.75 20.3 3.22 20.3 4.03C20.3 4.84 19.99 5.41 19.57 5.86L21.85 7.11C22.87 6.54 23.31 5.36 23.31 4.45C23.31 1.44 21.14 0 18.34 0C15.54 0 13.38 1.78 13.38 4.84C13.38 6.75 14.29 7.74 15.29 8.29C13.98 8.47 11.17 9.76 10.08 12.11L7.23 8.03L13.59 2.59H9.97L2.62 9.37V2.59H0V17.41H2.62V12.17L5.42 9.72L10.52 17.26C10.52 17.26 10.59 17.36 10.64 17.41C11.87 19.11 14.17 19.82 16.7 19.82C18.47 19.82 21.32 19.16 22.5 17.15L19.99 15.69C19.39 16.6 17.53 17.07 16.67 17.07C14.92 17.07 12.78 16.03 12.78 14.12C12.78 11.87 15.42 10.64 17.35 10.64C19.7 10.64 24.96 14.01 24.96 16.42C24.96 17.23 24.62 17.88 23.91 18.4L26.73 20C27.4 19.43 27.88 18.51 28.07 17.41C28.14 17.06 28.17 16.68 28.17 16.29V12.28H31.87C35.12 12.28 38.06 10.98 38.06 7.42C38.06 3.62 35.12 2.59 31.16 2.59ZM31.73 9.96H28.17V4.94H31.99C34.22 4.94 35.42 5.82 35.42 7.4C35.42 9.45 33.55 9.96 31.73 9.96Z'
								fill='inherit'
							/>
						</svg>
					</a>
					<div class='nav-wrapper'>
						<button
							onClick$={() => {
								navLinks.value?.classList.add('activated')
								menuOpen.value = !menuOpen.value
								setTimeout(() => {
									navLinks.value?.classList.remove('activated')
								}, 400)
							}}
							class='btn btn--menu'
							id='menu-btn'
							aria-expanded={menuOpen.value ? 'true' : 'false'}
							aria-controls='menu'
							aria-label='Open mobile navigation menu'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								width='24'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
								></path>
							</svg>
						</button>
						<ul ref={navLinks} role='menubar' class={['nav-links']}>
							{links.map((link) => (
								<NavItem link={link.link} name={link.name} />
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
})

interface NavItemProps {
	link: string
	name: string
}

const NavItem = component$<NavItemProps>(({ link, name }) => {
	return (
		<li role='none'>
			<a role='menuitem' class='navlink' href={link}>
				{name}
			</a>
		</li>
	)
})
