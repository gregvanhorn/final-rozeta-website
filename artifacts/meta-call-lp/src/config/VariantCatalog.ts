export type VariantId =
  | "inbound"
  | "no-custody"
  | "first-offer"
  | "confidential"
  | "alternatives";

export type VariantCopy = {
  id: VariantId;
  kicker: string;
  headlineLead: string;
  highlight: string;
  promise: string;
  vslChapter: string;
};

const VARIANTS: Record<VariantId, VariantCopy> = {
  inbound: {
    id: "inbound",
    kicker: "Sell-side AI data representation",
    headlineLead: "First inbound isn't a",
    highlight: "market",
    promise:
      "Confidential assessment before raw disclosure. We represent owners licensing operational data to AI buyers. We do not warehouse data.",
    vslChapter: "First 90 seconds: why inbound is not a market",
  },
  "no-custody": {
    id: "no-custody",
    kicker: "Sell-side AI data representation",
    headlineLead: "We don't take custody of your",
    highlight: "data",
    promise:
      "Representation, not warehousing. Operational data stays under seller authority. We introduce licensed access to AI buyers.",
    vslChapter: "First 90 seconds: no custody, seller authority",
  },
  "first-offer": {
    id: "first-offer",
    kicker: "Sell-side AI data representation",
    headlineLead: "Your first offer is not a",
    highlight: "market",
    promise:
      "One inbound path is a bid, not price discovery. We run alternatives before you commit to a single buyer.",
    vslChapter: "First 90 seconds: first-offer blindness",
  },
  confidential: {
    id: "confidential",
    kicker: "Sell-side AI data representation",
    headlineLead: "Confidential before data leaves your",
    highlight: "walls",
    promise:
      "Assessment first. No raw dump to shop a deal. We represent you to AI buyers without putting source data in our custody.",
    vslChapter: "First 90 seconds: confidential before disclosure",
  },
  alternatives: {
    id: "alternatives",
    kicker: "Sell-side AI data representation",
    headlineLead: "Alternatives beat one",
    highlight: "path",
    promise:
      "A single inbound is not competitive tension. We represent owners across buyers so you are not locked to the first conversation.",
    vslChapter: "First 90 seconds: alternatives beat one path",
  },
};

export class VariantCatalog {
  static readonly DEFAULT: VariantId = "inbound";

  static ids(): VariantId[] {
    return Object.keys(VARIANTS) as VariantId[];
  }

  static isKnown(id: string): id is VariantId {
    return Object.prototype.hasOwnProperty.call(VARIANTS, id);
  }

  static get(id: string): VariantCopy {
    const normalized = VariantCatalog.normalize(id);
    if (VariantCatalog.isKnown(normalized)) {
      return VARIANTS[normalized];
    }
    return VARIANTS[VariantCatalog.DEFAULT];
  }

  static resolve(input: {
    pathVariant?: string;
    queryVariant?: string;
  }): VariantCopy {
    const raw = input.queryVariant || input.pathVariant || VariantCatalog.DEFAULT;
    return VariantCatalog.get(raw);
  }

  static normalize(id: string): string {
    return id.trim().toLowerCase().replace(/[_\s]+/g, "-");
  }
}
