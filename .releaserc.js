module.exports = {
  branches: [
    {
      "name": "main"
    },
    {
      "name": "beta",
      "channel": "beta",
      "prerelease": "beta"
    },
    {
      "name": "alpha",
      "channel": "alpha",
      "prerelease": "alpha"
    }
  ],
  plugins: [
    ["@semantic-release/commit-analyzer", {
      "preset": "angular",
      "releaseRules": [
        {"type": "feat", "release": "minor"},
        {"type": "fix", "release": "patch"},
        {"type": "chore", "release": "patch"},
        {"type": "refactor", "release": "patch"},
        {"type": "fix", "release": "patch"},
        {"type": "style", "release": "patch"}
      ],
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
      }
    }],
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        "assets": ["package.json"]
      }
    ],
    "@semantic-release/github"
  ]
}