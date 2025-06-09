---
created: 2025/4/14 20:42:36
modified: 2025/4/14 20:59:27
---

- ```js
	function useFunnel() {
		const [step, setStep] = useState()
			
		const Step = (props) => {
			return <>{props.children}</>
		}
		
		const Funnel = ({children}) => {
			const targetStep = children.find(childStep => childStep.props.name === step) ;
			return Object.assign(targetStep, { Step })
		}
		
		return [Funnel, setStep]
	}