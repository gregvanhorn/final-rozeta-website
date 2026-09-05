export class JotformBridge {
  static isOrigin(origin: string): boolean {
    try {
      const host = new URL(origin).hostname.replace(/^www\./, "");
      return host === "jotform.com" || host.endsWith(".jotform.com");
    } catch {
      return false;
    }
  }

  static isSubmit(data: unknown): boolean {
    if (!data) {
      return false;
    }
    if (typeof data === "string") {
      return /submission-completed|formSubmit|thankYou/i.test(data);
    }
    if (typeof data === "object") {
      const record = data as Record<string, unknown>;
      const action = String(record.action ?? record.event ?? record.type ?? "");
      return /submission-completed|formSubmit|thankYou|form-submit/i.test(action);
    }
    return false;
  }

  static isInteraction(data: unknown): boolean {
    if (!data) {
      return false;
    }
    if (typeof data === "string") {
      return /scrollIntoView|setPage|openPicker|focus/i.test(data);
    }
    if (typeof data === "object") {
      const record = data as Record<string, unknown>;
      const action = String(record.action ?? record.event ?? record.type ?? "");
      return /scrollIntoView|setPage|openPicker|focus|input/i.test(action);
    }
    return false;
  }
}
