// ----------------------------------------------------------------------

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message || error.name || "An error occurred";
  }

  if (typeof error === "string") {
    return error;
  }

  if (typeof error === "object" && error !== null) {
    return (error as { message?: string }).message ?? "";
  }

  return `Unknown error: ${error}`;
}
