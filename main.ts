import { Plugin } from "obsidian";

export default class MarkdownSuffixPlugin extends Plugin {
	async onload() {
		super.onload();

		// register the view and extensions
		this.registerExtensions(["mdx", "svx", "rmd"], "markdown");
	}
}
