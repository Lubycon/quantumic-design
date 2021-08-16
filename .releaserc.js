/**
 * @desc UI Kit 시멘틱 릴리즈 설정 파일
 */
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
    ["@semantic-release/npm", {
      "pkgRoot": "./dist"
    }],
    [
      "@semantic-release/exec",
      {
        "prepareCmd": "yarn copy-version",
      }
    ],
    "@semantic-release/github"
  ]
}