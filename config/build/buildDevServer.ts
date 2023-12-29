import {BuildOptions} from "./types/config"
import {Configuration as DevServConfiguration} from "webpack-dev-server"
export function buildDevServer(options: BuildOptions): DevServConfiguration {
	return {
		open: true,
		port: options.port, 
		historyApiFallback: true,
		hot: true
	}
}