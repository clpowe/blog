import { component$, useSignal, $ } from '@builder.io/qwik'

interface GreetingProps {
	messages: string[]
}

export const Greeting = component$<GreetingProps>(({ messages }) => {
	const greeting = useSignal(messages[0])

	const randomMessage = $(() => {
		greeting.value = messages[Math.floor(Math.random() * messages.length)]
	})

	return (
		<div>
			<h3>{greeting.value}! Thank you for visiting!</h3>
			<button onClick$={randomMessage}>New Greeting</button>
		</div>
	)
})
