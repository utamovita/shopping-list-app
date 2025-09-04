module.exports = {
  "*.{js,jsx,ts,tsx,md}": "pnpm format",
  "apps/backend/src/**/*.{ts,tsx}": [
    "pnpm --filter backend run lint",
    "pnpm --filter backend test -- --findRelatedTests --passWithNoTests",
  ],
  "apps/frontend/src/**/*.{ts,tsx}": (filenames) => {
    const fileArgs = filenames.map((f) => `--file ${f}`).join(" ");
    const lintCommand = `pnpm --filter frontend exec next lint --dir apps/frontend ${fileArgs}`;

    return [
      lintCommand,
      "pnpm --filter frontend exec tsc --noEmit -p tsconfig.json",
    ];
  },
};
