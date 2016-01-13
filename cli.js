#!/usr/bin/env node
'use strict';
const meow = require('meow');
const gitRemoteUpstreamUrl = require('git-remote-upstream-url');
const githubUrlFromGit = require('github-url-from-git');
const opn = require('opn');

meow(`
	Usage
	  $ gh-upstream
`);

gitRemoteUpstreamUrl().then(url => {
	opn(githubUrlFromGit(url), {wait: false});
}).catch(() => {
	console.error(`Couldn't find the remote origin URL. Ensure it's set and you're in a repo.\n\n  $ git remote add upstream https://github.com/user/repo.git`);
	process.exit(1);
});
