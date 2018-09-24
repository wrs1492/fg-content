// allow importing of json files
declare module '*.json' {
	const value: any
	export default value
}
